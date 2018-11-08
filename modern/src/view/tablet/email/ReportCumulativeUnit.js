Ext.define('Admin.view.tablet.email.ReportCumulativeUnit', {
    extend: 'Ext.grid.Grid',
    itemConfig: {
        viewModel: true
    },
    rowLines: false,
    striped: false,
    columns: [{
        text: "Unidad de Transporte",
        dataIndex: "unit",
        width: 190,
        cell: {
            innerCls: "inbox-from"
        }
    },  {
        text: "Abordan",
        dataIndex: "aboard",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    },{
        text: "Cobrados",
        dataIndex: "charged",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    },{
        text: "Porcentaje Cobrado",
        dataIndex: "percentage",
	renderer: function(v, record){
	    return  Ext.util.Format.percent(record.get('charged') / record.get('aboard'));
	    },
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    },{
        text: "Colectado",
        dataIndex: "collected",
	renderer: function(v, record){
	    return  Ext.util.Format.currency((record.get('charged') * record.get('price')), 'Q', 2);
	    },
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    }]

});
