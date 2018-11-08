Ext.define('Admin.view.tablet.email.ReportCompany', {
    extend: 'Ext.Container',
    controller: "email-tablet",
    viewModel: {
        type: "reportcompany"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){
Ext.Msg.prompt("Reporte por Empresa", "Ingrese el Nombre de la Empresa:", function(btnText, sInput){
                if(btnText === 'ok'){
var passedvalue = sInput; 
Ext.Msg.prompt("Numero de Dias", "Ingresa el Numero de dias Atras, del Reporte que deseas Ver, por ejemplo 0 esto es igual a hoy:", function(btnText, sInput){
                if(btnText === 'ok'){
                Ext.data.StoreManager.lookup('reportpercompany').getProxy().extraParams = { store: 'reportpercompany', days: sInput, company: passedvalue, reportdate: Ext.Date.format(new Date(), 'Y/m/d')  }; 
                Ext.data.StoreManager.lookup('reportpercompany').load();
		}
            }, this);

		}
            }, this);

		return void 0;	
	}   
    },
    margin: "20 0 0 20",
    items: [{
        xtype: "reportpercompany",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{reportpercompany}"
    }]

});
