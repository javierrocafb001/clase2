Ext.define('Admin.view.tablet.search.Users', {
    extend: 'Ext.Container',
    requires: [
        'Ext.grid.Grid'
    ],
  config: {
        store: null
    },
    defaultBindProperty: "store",
    listeners: {
       painted: function(){
       Ext.data.StoreManager.lookup('searchusers').load();
       return void 0;	       
       }
    },
    layout: "fit",
    items: [{
        xtype: "grid",
       itemId: 'gridusers',
	   id: 'gridusers',
        width: "100%",
        height: "100%",
	    columns: [{
            text: "#",
            width: 40,
	    hidden: true,
            dataIndex: "_id"
        }, {
            text: "Usuario",
            cls: "content-column",
            flex: 1,
            dataIndex: "user"
        },{
            text: "Primer Nombre",
            cls: "content-column",
            flex: 1,
            dataIndex: "firstname"
        }, {
            text: "Segundo Nombre",
            cls: "content-column",
            flex: 1,
            dataIndex: "secondname"
        },{
            text: "Primer Apellido",
            cls: "content-column",
            flex: 1,
            dataIndex: "firstlastname"
        },{
            text: "Segundo Apellido",
            cls: "content-column",
            flex: 1,
            dataIndex: "secondlastname"
        },{
            text: "Posicion",
            cls: "content-column",
            flex: 1,
            dataIndex: "position"
        },{
            text: "Empresa",
            cls: "content-column",
            flex: 1,
            dataIndex: "company"
        },{
            text: "Ruta",
            cls: "content-column",
            flex: 1,
            dataIndex: "route"
        },{
            text: "Unidad",
            cls: "content-column",
            flex: 1,
            dataIndex: "unit"
        },{
            text: "Piloto/Ayudante Asignado",
            cls: "content-column",
            flex: 1,
            dataIndex: "assigned"
        }]
    },{
        xtype: "button",
        iconCls: "x-fa fa-plus",
        ui: "bright-blue round",
        userCls: "pop-out",
        width: 50,
        height: 50,
        bottom: 30,
        right: 10,
        handler: function(){
	  	  var d = this,
               c = d.actions;
               if (!c) {
               d.actions = c = Ext.create({
                xtype: "emailmodify",
                defaults: {
                    scope: d
                },
                enter: "right",
                exit: "right",
                top: 0,
                hidden: true,
                left: null,
                height: "100%",
                hideOnMaskTap: true,
                width: 250
                });
                Ext.Viewport.add(c)
                }
                c.on("hide", function() {
                d.actionsVisible = false
                }, null, {
                single: true
                });
                c.show();
                d.actionsVisible = true 
	  
	},
        listeners: {
            longpress: "onLongPressCompose"
        }
    },{
        xtype: "button",
        iconCls: "x-fa fa-plus",
        ui: "soft-green round",
        userCls: "pop-out",
        width: 50,
        height: 50,
        bottom: 30,
        left: 10,
        handler: function(){
	  if(this.getParent().down('#gridusers').getSelection()){
          
	  var d = this.getParent(),
               c = d.actions;
               if (!c) {
               d.actions = c = Ext.create({
                xtype: "emaileditaction",
                defaults: {
                    scope: d
                },
                enter: "right",
                exit: "right",
                top: 0,
                hidden: true,
                left: null,
                height: "100%",
                hideOnMaskTap: true,
                width: 450
                });
                Ext.Viewport.add(c)
                }
                c.on("hide", function() {
                d.actionsVisible = false
                }, null, {
                single: true
                });
                c.show();
                d.actionsVisible = true 

	  Ext.data.StoreManager.lookup('pilotsdata').load();

	  } else {
	  Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
	  }
	  return void 0;	
	},
        listeners: {
            longpress: "onLongPressCompose"
        }
    },{
        xtype: "button",
        iconCls: "x-fa fa-plus",
        ui: "soft-red round",
        userCls: "pop-out",
        width: 50,
        height: 50,
        bottom: 30,
        left: 70,
        handler: function(){
	  if(this.getParent().down('#gridusers').getSelection()){
          
	  var d = this,
               c = d.actions;
               if (!c) {
               d.actions = c = Ext.create({
                xtype: "unitroutes",
                defaults: {
                    scope: d
                },
                enter: "right",
                exit: "right",
                top: 0,
                hidden: true,
                left: null,
                height: "100%",
                hideOnMaskTap: true,
                width: 450
                });
                Ext.Viewport.add(c)
                }
                c.on("hide", function() {
                d.actionsVisible = false
                }, null, {
                single: true
                });
                c.show();
                d.actionsVisible = true 
           
		Ext.data.StoreManager.lookup('unitroutes').load()

	  
	  } else {
	  Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
	  }
          return void 0;
	}
    },{
        xtype: "button",
        iconCls: "x-fa fa-plus",
        ui: "soft-cyan round",
        userCls: "pop-out",
        width: 50,
        height: 50,
        bottom: 30,
        left: 130,
        handler: function(){
	  if(this.getParent().down('#gridusers').getSelection()){
          
	  var d = this,
               c = d.actions;
               if (!c) {
               d.actions = c = Ext.create({
                xtype: "companyitems",
                defaults: {
                    scope: d
                },
                enter: "right",
                exit: "right",
                top: 0,
                hidden: true,
                left: null,
                height: "100%",
                hideOnMaskTap: true,
                width: 450
                });
                Ext.Viewport.add(c)
                }
                c.on("hide", function() {
                d.actionsVisible = false
                }, null, {
                single: true
                });
                c.show();
                d.actionsVisible = true 

	   Ext.data.StoreManager.lookup('company').load();
  
	  } else {
	  Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
	  }
         return void 0;
	}
    }],
    updateStore: function(d) {
        var c = this.getComponent(0);
        c.setStore(d)
    }

});
