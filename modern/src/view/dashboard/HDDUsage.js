Ext.define('Admin.view.dashboard.HDDUsage', {
    extend: 'Ext.Panel',
    xtype: 'hddusage',
    ui: 'light',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Area',
        'Ext.chart.interactions.PanZoom'
    ],
    ui: "light",
    height: 130,
    layout: "fit",
    title: "Cobrados",
    cls: "quick-graph-panel",
    header: {
        docked: "bottom"
    },
    items: [{
        xtype: "cartesian",
        animation: !Ext.isIE9m && Ext.os.is.Desktop,
        height: "100%",
        width: "100%",
        constrain: true,
        constrainHeader: true,
        background: "#70bf73",
        colors: ["#a9d9ab"],
        bind: {
            store: "{chartotalData}"
        },
        axes: [{
            type: "category",
            fields: ["_id"],
            hidden: true,
            position: "bottom"
        }, {
            type: "numeric",
            fields: ["number"],
            grid: {
                odd: {
                    fill: "#e8e8e8"
                }
            },
            hidden: true,
            position: "left"
        }],
        series: [{
            type: "area",
            style: {
                stroke: "#FFFFFF",
                "stroke-width": "2px"
            },
            useDarkerStrokeColor: false,
            xField: "_id",
            yField: ["number"]
        }],
        interactions: [{
            type: "panzoom"
        }]
    }]

});
