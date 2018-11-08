Ext.Loader.setConfig({
     enabled: true
 });

Ext.Loader.setPath('Ext.ux.*', '/ux/');

Ext.websocket = Ext.create ('Ext.ux.WebSocket', {
        url: 'ws://192.168.1.54:8080',
        communicationType: 'event',
	keepUnsentMessages: true,
	autoReconnect: true,
	autoReconnectInterval: 1000,
        listeners: {
          open: function (ws) {
            console.log ('The websocket is ready to use');
	    return void 0;	  
          } ,
          close: function (ws) {
            console.log ('The websocket is closed!');
	    return void 0;	  
          } ,
          error: function (ws, error) {
            Ext.Error.raise (error);
	    return void 0;  
          } ,
          message: function (ws, message) {
          var msg;
           try {
            msg = JSON.parse(message);
           } catch (e) {
            msg = JSON.parse(JSON.stringify(message));
           }

           switch(msg.event){
	   case 'testamessage':
           Ext.websocket.send('something', {a: 'foo' });
	   break;		   
           case 'aboardhourindicator':
	   Ext.getCmp('aboardhourindicator').setHtml(msg.data.count);
	   return void 0;		   
	   break;		   
	   case 'aboarddayindicator':
	   Ext.getCmp('aboarddayindicator').setQuantity(msg.data.count);
	   return void 0;		   
	   break;	
           case 'chargeddayindicator':
	   Ext.getCmp('chargeddayindicator').setQuantity(msg.data.count);
	   return void 0;		   
	   break;	
           case 'collectedpercentagebar':
	   Ext.getCmp('collectedpercentagebarlabel').setData({ name: 'Cobrados', value: Ext.util.Format.percent(msg.data.percentage)  });
	   Ext.getCmp('collectedpercentagebar').setValue(msg.data.percentage);
	   return void 0;		   
	   break;	
	   case 'chargedhourindicator':
	   Ext.getCmp('chargedhourindicator').setHtml(msg.data.count);
	   return void 0;		   
	   break;	
           case 'useradded':
           Ext.data.StoreManager.lookup('searchusers').load();
           Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
           Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);
	   return void 0;		   
	   break;	
	   case 'routeadded':
	   Ext.Msg.alert('Ruta Agregada', 'La Ruta fue Agregada.');		   
           Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
	   Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);
	   return void 0;	   
	   break;	
           case 'companyadded':
           Ext.Msg.alert('Empresa Agregada', 'La Empresa fue Agregada.');	
           Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
	   Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);
	   return void 0;	   
	   break;	
           case 'addedreport':
           var d = Ext.getCmp('chartgamecanvas'),
               c = d.actions;
               if (!c) {
               d.actions = c = Ext.create({
                xtype: "emailactions",
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

	   break;		   
	   case 'gatereport':
           Ext.Msg.alert('Bus Reportado', 'EL Bus fue reportado Exitosamente.');	
	   return void 0;	   
	   break;	
	   case 'temporarynewpasswordset':
            localStorage.removeItem('iduser'); 
            localStorage.removeItem('user'); 
            localStorage.removeItem('firstname');
	    localStorage.removeItem('secondname');
            localStorage.removeItem('firstlastname');
            localStorage.removeItem('secondlastname');
            localStorage.removeItem('company');
            localStorage.removeItem('assignedid');
	    localStorage.removeItem('route');
	    localStorage.removeItem('position');
	    localStorage.removeItem('unit');
            localStorage.removeItem('priceofroute');
	    localStorage.removeItem('userlocationlongitude');
	    localStorage.removeItem('userlocationlatitude');


	    window.location.href = "#login" 
            Ext.Msg.alert('Clave Cambiada', 'Su Clave fue Guardada, Intente Conectarse.');
	   return void 0;		   
	   break;	
           case 'passwordreset':
            Ext.Msg.alert('Clave Reseteada', 'La Nueva Clave es: clave, debe Informarle al Usuario.');
	   return void 0;		   
	   break;	
	    case 'userreset':
	    window.location.href = "#login" 
            Ext.Msg.alert('Solicitud Enviada', 'La Solicitud para Resetear su Clave fue Enviada, el Administrador la Reseteara y le Informara.');
	   return void 0;		   
	   break;	
	    case 'updateclient':
            localStorage.removeItem('iduser'); 
            localStorage.removeItem('user'); 
            localStorage.removeItem('firstname');
	    localStorage.removeItem('secondname');
            localStorage.removeItem('firstlastname');
            localStorage.removeItem('secondlastname');
            localStorage.removeItem('company');
            localStorage.removeItem('assignedid');
	    localStorage.removeItem('route');
	    localStorage.removeItem('position');
	    localStorage.removeItem('unit');
            localStorage.removeItem('priceofroute');
	    localStorage.removeItem('userlocationlongitude');
	    localStorage.removeItem('userlocationlatitude');

	    Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
	    Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);

	    window.location.href = "#login" 
            Ext.Msg.alert('Actualizacion', 'El Administrador Realizo un Cambio debes Conectarte de Nuevo.');
	   return void 0;		   
	   break;	
	   case 'erroruser':
           Ext.Msg.alert('Error', 'El Usuario ya Existe, Elije Otro.');
	   return void 0;	   
	   break;	
           case 'mainreportvalidator':
	   if(localStorage.getItem('position') === 'administrador'){		   
	   Ext.Msg.alert('Alerta Administrador', 'El Usuario: ' + '<b>' + message.data.user + '</b>' + ' intenta Reportar Pasajeros y No tiene asignado un Piloto/Ayudante, Ruta, Empresa o Numero de Unidad de Transporte');
	   }	   
	   return void 0;		   
	   break;
           case 'locationreportvalidator':
	   if(localStorage.getItem('position') === 'administrador'){		   
	   Ext.Msg.alert('Alerta Administrador', 'El Usuario: ' + '<b>' + message.data.user + '</b>' + ' se Intenta Obtener su Localizacion GPS y no tiene Asignada una Ruta o Empresa, asignele una.');
	   }	   
	   return void 0;		   
	   break;
           case 'validate':
	   Ext.Msg.alert('Error', 'El Piloto no a Reportado Aun, debe esperar a que el Reporte.');
	   return void 0;
	   break;		   
	   case 'reportvalid':
           Admin.view.main.MainController.prototype.onValidReport.apply(this, arguments);
           break;
	   case 'reportbusvalidationerror':
	   Ext.Msg.alert('Error', 'No hay un Bus a menos de 20 metros de su Posicion, Si Existe Un Bus, revise las Opciones de Localizacion en su Telefono .');
	   return void 0;		   
	   break;
	   case 'reportbusvalidation':
                  Ext.Msg.show({
                          title: 'Reporte de Bus',
                          message: 'Esta Usted a punto de Reportar, Hora: ' + '<b>' + Ext.Date.format(new Date(), 'H:i:s') + '</b>' + ' al Bus No.' + '<b>' + message.data.minobject.unit + '</b>'  + ' se encuentra a una Distancia de: '+ '<b>' + message.data.minobject.distance + '</b>' + ' metros de Usted'  + ', reporta Usted que llego:',
                          width: 300,
                          buttons: [{
                          text: 'Tarde',
                          ui: 'decline'
                          }, {
                          text: 'a Tiempo',
                          ui: 'confirm'
                          }, {
                          text: 'Cancelar',
                          ui: 'light'
                          }],
			  multiLine: false,
                          fn: function(buttonId) {
                            switch(buttonId){
                            case 'Tarde':
			    Ext.websocket.send('gatereport', { unit: message.data.minobject.unit, company: message.data.minobject.company, route: message.data.minobject.route, reportdate: Ext.Date.format(new Date(), 'Y/m/d'), time: Ext.Date.format(new Date(), 'Y/m/d H:i:s'), status: 'Tarde'  });		    
			    break;
			    case 'a Tiempo':
                            Ext.websocket.send('gatereport', { unit: message.data.minobject.unit, company: message.data.minobject.company, route: message.data.minobject.route, reportdate: Ext.Date.format(new Date(), 'Y/m/d'), time: Ext.Date.format(new Date(), 'Y/m/d H:i:s'), status: 'a Tiempo'  });	
			    break;
			    case 'Cancelar':
			    break;		    
			    }	    
                           }
                           });	
	   return void 0;		   
	   break;
	   case 'login':
	    if(msg.data.success){ 
            localStorage.setItem('iduser', msg.data.profile.id); 
            localStorage.setItem('user', msg.data.profile.user); 
            localStorage.setItem('firstname', msg.data.profile.firstname);
	    localStorage.setItem('secondname', msg.data.profile.secondname);
            localStorage.setItem('firstlastname', msg.data.profile.firstlastname);
            localStorage.setItem('secondlastname', msg.data.profile.secondlastname);
            localStorage.setItem('company', msg.data.profile.company);
            localStorage.setItem('assignedid', msg.data.profile.assignedid);
	    localStorage.setItem('route', msg.data.profile.route);
	    localStorage.setItem('position', msg.data.profile.position);
	    localStorage.setItem('unit', msg.data.profile.unit); 
            localStorage.setItem('priceofroute', msg.data.profile.price); 
	    window.location.href = "#dashboard"
            Admin.view.main.MainController.prototype.onLoginMenuSettigns.call(this, msg.data.profile.position);
	    } else {
	    Ext.Msg.alert('Ingreso', 'El usuario o clave es Incorrecta.'); 
	    }
	   return void 0;	   
	   break;		   
           case 'location':
		if(localStorage.getItem('position') === 'piloto' || localStorage.getItem('position') === 'ayudante'){	   
	   var geo = Ext.create('Ext.util.Geolocation', {
           autoUpdate: false,
           listeners: {
           locationupdate: function(geo) {
                localStorage.setItem('userlocationlatitude', geo.getLatitude());
                localStorage.setItem('userlocationlongitude', geo.getLongitude());

		   if(localStorage.getItem('userlocationlatitude') && localStorage.getItem('route') && localStorage.getItem('company')){
            		Ext.websocket.send('location', { unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), latitude: geo.getLatitude(), longitude: geo.getLongitude(), lastupdate:  Ext.Date.format(new Date(), 'Y/m/d H:i:s') });
	    } else {
	    Ext.websocket.send('locationreportvalidator', { data: { user: localStorage.getItem('user') } }); 
	    }
           return void 0;
	   },
           locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
            if(bTimeout){
            } else {
                Ext.Msg.alert('Error','Tienes que dar permiso y aceptar para localizar tu posicion en GPS.');
             }
            }
           }
           });
           geo.updateLocation();
	   }	
	   return void 0;		   
	   break;		   
           case 'temporarypassword':
	   window.location.href = "#lockscreen"
	   return void 0;	   
	   break;
	   case 'networkdata':
           console.log('llego');
	   return void 0;	   
	   break;
	   }  
	  return void 0;	  
          }
        }
      });



Ext.application({
    name: 'Admin',

    extend: 'Admin.Application',

    // Simply require all classes in the application. This is sufficient to ensure
    // that all Admin classes will be included in the application build. If classes
    // have specific requirements on each other, you may need to still require them
    // explicitly.
    //
    requires: [
        'Admin.*'
    ]
});
