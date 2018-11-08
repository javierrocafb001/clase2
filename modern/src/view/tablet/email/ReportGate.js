Ext.define('Admin.view.tablet.email.ReportGate', {
    extend: 'Ext.grid.Grid',
    itemConfig: {
        viewModel: true
    },
    rowLines: false,
    striped: false,
    columns: [{
        text: "Empresa",
        dataIndex: "company",
        width: 190,
        cell: {
            innerCls: "inbox-from"
        }
    },  {
        text: "Unidad",
        dataIndex: "unit",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    },{
        text: "Ruta",
        dataIndex: "route",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    },{
        text: "Cuenta",
        dataIndex: "count",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    },{
        text: "Status",
        dataIndex: "status",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
	   
    }]

});
