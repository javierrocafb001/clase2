Ext.define('Admin.view.authentication.PasswordReset', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'passwordreset',
    requires: [
        'Ext.field.Text'
    ],
    items: [{
        xtype: "panel",
        padding: 10,
        items: [{
            html: "Olvido la Clave",
            padding: "0 0 5 0"
        }, {
            xtype: "container",
            defaults: {
                margin: "0 0 5 0"
            },
            items: [{
                xtype: "textfield",
                minWidth: 300,
                placeHolder: "Ingrese su Usuario",
		itemId: 'user',    
                ui: "light",
		listeners: {
		change: function(field, newValue, oldValue){
                field.setValue(newValue.toLowerCase());
                }
		}    
            }, {
                xtype: "button",
                text: "Reiniciar Clave",
                iconAlign: "right",
                iconCls: "x-fa fa-angle-right",
                ui: "action",
                width: "100%",
                handler: function() {
                Ext.websocket.send('userreset', { user: this.getParent().down('#user').getValue(), reportdate: Ext.Date.format(new Date(), 'Y/m/d') });
                }
            }, {
                html: '<a href="#login">Conectarse</a>'
            }]
        }]
    }]
   
});
