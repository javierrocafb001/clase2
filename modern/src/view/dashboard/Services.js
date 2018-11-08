Ext.define('Admin.view.dashboard.Services', {
    extend: 'Ext.Panel',
    xtype: 'services',
    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.series.sprite.PieSlice',
        'Ext.chart.interactions.Rotate'
    ],
    height: 100,
    bodyPadding: 5,
    title: "Porcentaje de Pasajeros.",
    layout: "vbox",
    items: [{
                xtype: "component",
		itemId: 'collectedpercentagebarlabel',
		id: 'collectedpercentagebarlabel',
                data: {
                    name: "Cobrados",
                    value: " "
                },
                tpl: '<div class="left-aligned-div">{name}</div><div class="right-aligned-div">{value}</div>'
            }, {
                xtype: "progress",
                ui: "finance",
		itemId: 'collectedpercentagebar',
		id: 'collectedpercentagebar',    
                userCls: "bottom-indent service-finance",
                height: 4,
                minHeight: 4,
                value: 0.2
            }]

});
