Ext.define('Admin.view.dashboard.Network', {
    extend: 'Ext.Panel',
    xtype: 'network',
    requires: [
        'Ext.Progress',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Area',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],
    height: 380,
    platformConfig: {
        phone: {
            height: 300
        }
    },
    itemId: 'dashboardnetworkpanel',
    id: 'dashboardnetworkpanel',	
    bodyPadding: 15,
    tools:[{type:"refresh", handler: function() { Ext.data.StoreManager.lookup('networkData').load(); }}],
    title: "Reporte Ultima Hora",
    listeners: {
     painted: function(){
     Ext.data.StoreManager.lookup('networkData').load();
     }
    },
    layout: {
        type: "vbox",
        align: "stretch"
    },
    items: [{
        xtype: "chartnetwork",
        flex: 1,
        bind: { store: "{networkData}" }
    }, {
        xtype: "container",
        userCls: "graph-analysis-left",
        height: 138,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items: [{
            xtype: "container",
            flex: 1,
            userCls: "graph-analysis-right",
            margin: "15 0 0 0",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            defaults: {
                margin: "0 0 10 0"
            },
            items: [{
                xtype: "container",
                flex: 1,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                padding: "0 0 10 0",
                items: [{
                    xtype: "component",
                    flex: 1,
                    userCls: "graph-analysis-right-inner-container",
                    html: "Abordan",
		    itemId: 'itemaboarddata',
		    id: 'itemaboarddata'	
                }, {
                    xtype: "chartvisitors",
                    flex: 1,
                    userCls: "graph-analysis-right-inner-container right-value",
                    bind: {
                        store: "{aboardData}"
                    }
                }]
            }, {
                xtype: "container",
                flex: 1,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                padding: "0 0 10 0",
                items: [{
                    xtype: "component",
                    flex: 1,
                    userCls: "graph-analysis-right-inner-container",
                    html: "Cobrados",
		    itemId: 'itemcollecteddata',
		    id: 'itemcollecteddata',
                    listeners: {
		     initialize: function(){
		     		     } 
		    }
                }, {
                    xtype: "chartbounces",
                    flex: 1,
                    userCls: "graph-analysis-right-inner-container right-value",
                    bind: {
                        store: "{charData}"
                    }
                }]
            }, {
                xtype: "container",
                flex: 1,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                padding: "0 0 10 0",
                items: [{
                    xtype: "component",
                    flex: 1,
                    userCls: "graph-analysis-right-inner-container",
                    html: "Abordan"
                }, {
                    xtype: "component",
                    itemId: 'aboardhourindicator',
			id: 'aboardhourindicator',
		    flex: 1,
                    userCls: "graph-analysis-right-inner-container right-value",
                    html: " "
                }]
            }, {
                xtype: "container",
                flex: 1,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                padding: "0 0 10 0",
                items: [{
                    xtype: "component",
                    flex: 1,
                    userCls: "graph-analysis-right-inner-container",
                    html: "Cobrados"
                }, {
                    xtype: "component",
                    itemId: 'chargedhourindicator',
			id: 'chargedhourindicator',
		    flex: 1,
                    userCls: "graph-analysis-right-inner-container right-value",
                    html: ""
                }]
            },{
                xtype: "container",
                flex: 1,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                padding: "0 0 10 0",
                items: [{
                    xtype: "component",
                    itemId: 'cpmtime',
                        id: 'cpmtime',
		    flex: 1,
                    html: "data de hoy arriba de " + Ext.Date.format(new Date(Date.now() - 3600000), 'H:i:s')
                }]
            }]
        }]
    }]

});
