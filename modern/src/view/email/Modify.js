Ext.define('Admin.view.email.Modify', {
    extend: 'Ext.ActionSheet',
    xtype: 'emailmodify',
    cls: "userProfile-container dashboard",
    itemId: 'emailmodify',
	id: 'emailmodify',
    scrollable: "y",
	viewModel: {
        type: "userprofile"
    },
	items: [{text:"Crear Nuevo Record",handler:function(){ this.actions.setItems({xtype: 'newaccountform'});  }},{text:"Editar Record", handler:function(){ 
		 if(Ext.getCmp('gridusers').getSelection()){
		    this.actions.setItems({xtype: 'accountform'}) 
		 } else {
		   Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
		 }
	}},{text:"Cambiar de Posicion", handler:function(){
		if(Ext.getCmp('gridusers').getSelection()){
	var pos;
        if(Ext.getCmp('gridusers').getSelection().data.position === 'piloto'){ pos = 'ayudante' } else { pos = 'piloto' };

	Ext.Msg.confirm("Cambiar de Posicion", "Estas a punto de cambiar a " + Ext.getCmp('gridusers').getSelection().data.firstname + ' ' + Ext.getCmp('gridusers').getSelection().data.firstlastname + ' ' + 'de: ' + '  ' + Ext.getCmp('gridusers').getSelection().data.position +  ' ' + ' a:' + ' ' + pos + " ,deseas continuar?", function(btn){
                                          if(btn === 'yes'){
		Ext.websocket.send('updateposition', { data: { user:  Ext.getCmp('gridusers').getSelection().data.user, newposition: pos} });
                Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
                Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);

					  }
	        return void 0;
	});
        } else {
	Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
	}
	}},{text:"Eliminar Record", handler: function(){
		if(Ext.getCmp('gridusers').getSelection()){
	var pos;
        if(Ext.getCmp('gridusers').getSelection().data.position === 'piloto'){ pos = 'ayudante' } else { pos = 'piloto' };

	Ext.Msg.confirm("Eliminar Record", "Estas a punto de " + '<b>'  + 'Eliminar' + '</b>' + " el registro de " + Ext.getCmp('gridusers').getSelection().data.firstname + ' ' + Ext.getCmp('gridusers').getSelection().data.firstlastname + ' ' + ",deseas continuar?", function(btn){
                                          if(btn === 'yes'){
		Ext.websocket.send('deleterecord', { data: { user:  Ext.getCmp('gridusers').getSelection().data.user } });
                Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
                Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);

					  }
                return void 0;
	});
        } else {
	Ext.Msg.alert('Error', 'Debe seleccionar un Record, Seleccione Uno.');
	}
	}},{text:"Agregar Ruta", handler: function(){
	this.actions.setItems({xtype: 'addrouteform'});
	return void 0;	
	}},{text:"Agregar Empresa", handler: function(){
	this.actions.setItems({xtype: 'addcompanyform'});
	return void 0;	
	}},{text:"Crear Administrador", handler: function() { this.actions.setItems({xtype: 'newaccountadminform'}) } },
		{text:"Crear Usuario Garita", handler: function() { this.actions.setItems({xtype: 'newaccountgateform'}) } },
		{text:"Precio del Pasaje", handler: function() { 
	Ext.Msg.prompt("Precio del Pasaje", "Ingresa el Precio del Pasaje (En Numero por ejemplo 2.25):", function(btnText, sInput){
                if(btnText === 'ok'){

Ext.Msg.confirm("Cambiar Precio", "Estas a punto de cambiar el Precio del Pasaje Actualmente esta: " + localStorage.getItem('priceofroute') + " ,deseas continuar?", function(btn){
                                          if(btn === 'yes'){
                                          Ext.websocket.send('priceofroute', { data: { price: sInput } });
                                          Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
                                          Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);
					  }
            return void 0;
            });
	}
            }, this);
	
	} }]
  
});

