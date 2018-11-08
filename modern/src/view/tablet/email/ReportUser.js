Ext.define('Admin.view.tablet.email.ReportUser', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reportuser"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){
                Ext.data.StoreManager.lookup('reportresetuser').load();
		return void 0;	
	}   
    },
    margin: "20 0 0 20",
    items: [{
        xtype: "reportresetuser",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportresetuser}"
    },{
        xtype: "button",
        iconCls: "x-fa fa-plus",
        ui: "soft-blue round",
        userCls: "pop-out",
        width: 50,
        height: 50,
        bottom: 30,
        right: 10,
        handler: function(){
	  if(this.getParent().down('#gridresetuser').getSelection()){
          
Ext.Msg.confirm("Resetear Clave", "Estas a punto de Resetear la Clave del Usuario " + '<b>' + this.getParent().down('#gridresetuser').getSelection().data.user + '</b>' + ", deseas continuar?", function(btn){ 
			     if(btn === 'yes'){
                             Ext.websocket.send('passwordreset', { user: Ext.getCmp('gridresetuser').getSelection().data.user });

			     }

                        });

	  } else {
	  Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
	  }
	  return void 0;	
	},
        listeners: {
            longpress: "onLongPressCompose"
        }
    }]

});
