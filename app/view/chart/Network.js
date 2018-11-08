Ext.define('Admin.view.chart.Network', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'chartnetwork',
    requires: [
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],
    animation: !Ext.isIE9m && Ext.os.is.Desktop,
    insetPadding: 0,
       itemId: 'chartnetwork',
	   id: 'chartnetwork',
	listeners: {
	  painted: function(){
          var e, i;

          Ext.data.StoreManager.lookup('networkData').load();
          Ext.getCmp('cpmtime').setHtml("actualizado: " + Ext.Date.format(new Date(), 'Y/m/d H:i:s'));
          e = Ext.data.StoreManager.lookup('networkData');
           console.log(e); 
		if (e.getCount()) {
                i = this.chartTaskRunner;
                if (!i) {
                    this.chartTaskRunner = i = new Ext.util.TaskRunner();
                }
                
		i.start({
                    run: function() {
                        var a = e.first();
                        e.remove(a);
                        e.add(a)
                    },
                    interval: 200
                });
            }


	  }
	},
    axes: [{
        type: "category",
        fields: ["_id"],
        hidden: true,
        position: "bottom"
    }, {
        type: "numeric",
        fields: ["aboard", "charged"],
        grid: {
            odd: {
                fill: "#e8e8e8"
            }
        },
        hidden: true,
        position: "left"
    }],
    series: [{
        type: "line",
        colors: ["rgba(103, 144, 199, 0.6)"],
        useDarkerStrokeColor: false,
        xField: "_id",
        yField: ["aboard"],
        fill: true,
        smooth: true
    }, {
        type: "line",
        colors: ["rgba(238, 146, 156, 0.6)"],
        useDarkerStrokeColor: false,
        xField: "_id",
        yField: ["charged"],
        fill: true,
        smooth: true
    }],
    interactions: [{
        type: "panzoom"
    }]

});
