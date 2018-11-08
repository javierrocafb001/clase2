Ext.define('Admin.view.email.Actions', {
    extend: 'Ext.ActionSheet',
    xtype: 'unitroutes',
    scrollable: "y",
       viewModel: {
        type: "unitroutes"
        },
        items: [{
        xtype: "grid",
        title: 'Listado de Rutas',
        bind: {
        store: "{unitroutes}"
        },
        itemId: 'unitroutesgrid',
	   id: 'unitroutesgrid',
        width: "100%",
        height: "100%",
	    listeners: {
	     itemtaphold: function(){
		     if(this.getSelection()){
                  if(Ext.getCmp('gridusers').getSelection().data.position !== 'administrador'){
Ext.Msg.confirm("Asignar una Ruta", "Estas a punto de asignar la Ruta " + this.getSelection().data.route + ' ' + 'a ' + '  ' + Ext.getCmp('gridusers').getSelection().data.firstname + ' ' + Ext.getCmp('gridusers').getSelection().data.firstlastname + " ,deseas continuar?", function(btn){
             if(btn === 'yes'){
              Ext.websocket.send('updaterecordroute', { data: { user: Ext.getCmp('gridusers').getSelection().data.user, route:  Ext.getCmp('unitroutesgrid').getSelection().data.route  } } );
	     }
});
	      } else {
	      Ext.Msg.alert('Error', 'Al Administrador no se le puede Asignar una Ruta'); 
	      }
              }
	     }
	    },
	    columns: [{
            text: "#",
            width: 40,
	    hidden: true,
            dataIndex: "_id"
        }, {
            text: "Ruta",
            cls: "content-column",
            flex: 1,
            dataIndex: "route"
        }]
    }],
    height: 200,
    layout: 'fit',
    fullscreen: true

});

