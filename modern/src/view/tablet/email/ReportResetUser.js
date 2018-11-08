Ext.define('Admin.view.tablet.email.ReportResetUser', {
    extend: 'Ext.grid.Grid',
    itemConfig: {
        viewModel: true
    },
    itemId: 'gridresetuser',
    id: 'gridresetuser',
    rowLines: false,
    striped: false,
    columns: [{
        text: "Usuario",
        dataIndex: "user",
        width: 190,
        cell: {
            innerCls: "inbox-from"
        }
    }, {
        text: "Fecha de Solicitud",
        dataIndex: "reportdate",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    }]
});
