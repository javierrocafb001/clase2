Ext.define('Admin.view.tablet.email.Inbox', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Ext.grid.plugin.MultiSelection'
    ],
    itemConfig: {
        viewModel: true,
    },
    title: ' ',	
    itemId: 'tabletinboxgrid',
    id: 'tabletinboxgrid',	
    rowLines: false,
    striped: false,
    columns: [{
        text: "No. Unidad de Transporte",
        dataIndex: "unit",
        width: 190,
        cell: {
            innerCls: "inbox-from"
        }
    }, {
        text: "Distancia en Metros",
        dataIndex: "distance",
        flex: 1,
        cell: {
            innerCls: "inbox-title"
        }
    }, {
        text: "Ultima Actualizacion",
        dataIndex: "lastupdate",
        width: 190
    }]

});
