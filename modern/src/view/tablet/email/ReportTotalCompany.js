Ext.define('Admin.view.tablet.email.ReportTotalCompany', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reporttotalcompany"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){
                Ext.Msg.prompt("Reporte por Empresa", "Ingresa el Nombre de la Empresa:", function(btnText, sInput){
                if(btnText === 'ok'){
            var passedvalue = sInput;
	        Ext.Msg.prompt("Numero de Dias", "Ingresa el Numero de dias Atras, del Reporte que deseas Ver, por ejemplo 0 esto es igual a hoy:", function(btnText, sInput){
                if(btnText === 'ok'){
                if(sInput <= 30){
                Ext.data.StoreManager.lookup('reportcumulativecompany').getProxy().extraParams = { store: 'reportcumulativecompany', days: sInput, company: passedvalue, reportdate: Ext.Date.format(new Date(), 'Y/m/d') }; 
                Ext.data.StoreManager.lookup('reportcumulativecompany').load();
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
        xtype: "reportcumulativecompany",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportcumulativecompany}"
    }]
  
});
