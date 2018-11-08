Ext.define('Admin.view.tablet.email.ReportTotalCost', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reporttotalcost"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){

		Ext.Msg.prompt("Numero de Dias", "Ingresa el Numero de dias Atras, del Reporte que deseas Ver, por ejemplo 0 esto es igual a hoy:", function(btnText, sInput){
                if(btnText === 'ok'){
                Ext.data.StoreManager.lookup('reportcumulativecost').getProxy().extraParams = { store: 'reportcumulativecost', days: sInput, reportdate: Ext.Date.format(new Date(), 'Y/m/d') }; 
                Ext.data.StoreManager.lookup('reportcumulativecost').load();
		}
            }, this);

	
		return void 0;	
	}   
    },
    margin: "20 0 0 20",
    items: [{
        xtype: "reportcumulativecost",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportcumulativecost}"
    }]
});
