Ext.define('Admin.view.tablet.email.ReportCost', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reportcost"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){

		Ext.Msg.prompt("Numero de Dias", "Ingresa el Numero de dias Atras, del Reporte que deseas Ver, por ejemplo 0 esto es igual a hoy:", function(btnText, sInput){
                if(btnText === 'ok'){
		if(sInput <= 30){	
                Ext.data.StoreManager.lookup('reportpercost').getProxy().extraParams = { store: 'reportpercost', days: sInput, reportdate: Ext.Date.format(new Date(), 'Y/m/d') }; 
                Ext.data.StoreManager.lookup('reportpercost').load();
		} else {
		Ext.Msg.alert('Dias Atras', 'El Reporte puede verse en un Maximo de 30 dias, escoja un numero de dias Menor.'); 
		}
		}
            }, this);

	
		return void 0;	
	}   
    },
    margin: "20 0 0 20",
    items: [{
        xtype: "reportpercost",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportpercost}"
    }]

});
