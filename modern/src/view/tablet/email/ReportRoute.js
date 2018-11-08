Ext.define('Admin.view.tablet.email.ReportRoute', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reportroute"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){
Ext.Msg.prompt("Reporte por Ruta", "Ingrese la Ruta:", function(btnText, sInput){
                if(btnText === 'ok'){
var passedvalue = sInput; 
Ext.Msg.prompt("Numero de Dias", "Ingresa el Numero de dias Atras, del Reporte que deseas Ver, por ejemplo 0 esto es igual a hoy:", function(btnText, sInput){
                if(btnText === 'ok'){
		if(sInput <= 30){	
                Ext.data.StoreManager.lookup('reportperroute').getProxy().extraParams = { store: 'reportperroute', days: sInput, route: passedvalue, reportdate: Ext.Date.format(new Date(), 'Y/m/d')  }; 
                Ext.data.StoreManager.lookup('reportperroute').load();
		} else {
		Ext.Msg.alert('Dias Atras', 'El Reporte puede verse en un Maximo de 30 dias, escoja un numero de dias Menor.'); 
		}
		}
            }, this);

		}
            }, this);

		return void 0;	
	}   
    },
    margin: "20 0 0 20",
    items: [{
        xtype: "reportperroute",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportperroute}"
    }]

});
