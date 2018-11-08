Ext.define('Admin.view.email.CompanyItems', {
    extend: 'Ext.ActionSheet',
    xtype: 'companyitems',
    scrollable: "y",
       viewModel: {
        type: "company"
        },
        items: [{
        xtype: "grid",
        title: 'Listado de Empresas',
        bind: {
        store: "{company}"
        },
        itemId: 'companygrid',
	   id: 'companygrid',
        width: "100%",
        height: "100%",
	    listeners: {
		 painted: function(){
			 },
	     itemtaphold: function(){
		     if(this.getSelection()){

Ext.Msg.confirm("Asignar Empresa", "Estas a punto de asignar la Empresa " + this.getSelection().data.company + ' ' + 'a ' + '  ' + Ext.getCmp('gridusers').getSelection().data.firstname + ' ' + Ext.getCmp('gridusers').getSelection().data.firstlastname + " ,deseas continuar?", function(btn){
             if(btn === 'yes'){
              Ext.websocket.send('updaterecordcompany', { data: { user: Ext.getCmp('gridusers').getSelection().data.user, company:  Ext.getCmp('companygrid').getSelection().data.company } } );
	     }
});
	     }
	     }
	    },
	    columns: [{
            text: "#",
            width: 40,
	    hidden: true,
            dataIndex: "_id"
        }, {
            text: "Company",
            cls: "content-column",
            flex: 1,
            dataIndex: "company"
        }]
    }],
    
height: 200,
    layout: 'fit',
    fullscreen: true
 
});

