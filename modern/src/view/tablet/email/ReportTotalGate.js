Ext.define('Admin.view.tablet.email.ReportTotalGate', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reporttotalgate"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){
                Ext.Msg.prompt("Reporte Garita de Control", "Ingresa el Numero de Unidad del Bus:", function(btnText, sInput){
                if(btnText === 'ok'){
            var passedvalue = sInput;
	        Ext.Msg.prompt("Numero de Dias", "Ingresa el Numero de dias Atras, del Reporte que deseas Ver, por ejemplo 0 esto es igual a hoy:", function(btnText, sInput){
                if(btnText === 'ok'){
		if(sInput <= 30){	
                Ext.data.StoreManager.lookup('reportgate').getProxy().extraParams = { store: 'reportgatedata', days: sInput, unit: passedvalue, reportdate: Ext.Date.format(new Date(), 'Y/m/d') }; 
                Ext.data.StoreManager.lookup('reportgate').load();
		} else {
		Ext.Msg.alert('Dias Atras', 'El Reporte puede ser visto solo 30 dias atras, intente con menor Cantidad.');
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
        xtype: "reportgate",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportgate}"
    }]
 
});
