Ext.define('Admin.view.email.editAction', {
    extend: 'Ext.ActionSheet',
    xtype: 'emaileditaction',
    scrollable: "y",
        viewModel: {
        type: "pilotsdata"
        },
    items: [{
        xtype: "grid",
        title: ' ',
        bind: {
        store: "{pilotsdata}"
        },
       itemId: 'gridpilots',
	   id: 'gridpilots',
        width: "100%",
        height: "100%",
	    listeners: {
	     painted: function(){
		     var title;
		     (Ext.getCmp('gridusers').getSelection().data.position === 'piloto') ? title = 'ayudantes' : title = 'pilotos';
		     this.setTitle('listado de ' + ' '  + title)
		     return void 0;
	     },	    
	     itemtaphold: function(){
		     var title;
		     (Ext.getCmp('gridusers').getSelection().data.position === 'piloto') ? title = 'ayudante' : title = 'piloto';

		     if(this.getSelection()){
    if(Ext.getCmp('gridusers').getSelection().data.position !== 'administrador'){
Ext.Msg.confirm("Asignar Piloto/Ayudante", "Estas a punto de asignar el " + title + ' ' + 'Nombre: ' + this.getSelection().data.firstname + ' ' + this.getSelection().data.firstlastname + ' ' + 'a ' + '  ' + Ext.getCmp('gridusers').getSelection().data.firstname + ' ' + Ext.getCmp('gridusers').getSelection().data.firstlastname + " ,deseas continuar?", function(btn){
             if(btn === 'yes'){
              Ext.websocket.send('updatepilot', { data: { assigment: Ext.getCmp('gridusers').getSelection().data.user, assigned:  Ext.getCmp('gridpilots').getSelection().data.user, assignedname: Ext.getCmp('gridpilots').getSelection().data.firstname + ' ' + Ext.getCmp('gridpilots').getSelection().data.firstlastname + ' ' + Ext.getCmp('gridpilots').getSelection().data.secondlastname   } } );

           Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
           Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);
	     }
});
              } else {
	       Ext.Msg.alert('Error', 'No se Puede Asignar Supervisor al Administrador.');
	      }
             }
            return void 0;
            }
	    },
	    columns: [{
            text: "#",
            width: 40,
	    hidden: true,
            dataIndex: "_id"
        }, {
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
            text: "Usuario",
            cls: "content-column",
	    hidden: true,	
            flex: 1,
            dataIndex: "user"
        }]
    }],
    height: 200,
    layout: 'fit',
    fullscreen: true
   });
