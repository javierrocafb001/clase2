Ext.define('Admin.view.dashboard.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'admindashboard',
    viewModel: {
        type: 'dashboard'
    },
    cls: 'dashboard',
    scrollable: true,
    items: [{
        xtype: "network",
        userCls: "big-60 small-100 dashboard-item shadow"
    }, {
        xtype: "hddusage",
        userCls: "big-20 small-50 dashboard-item shadow"
    }, {
        xtype: "earnings",
        userCls: "big-20 small-50 dashboard-item shadow"
    },{
        xtype: "services",
        height: 150,
        userCls: "big-40 small-100 dashboard-item shadow"
    },{
        xtype: "statustile",
        height: 170,
        userCls: "big-33 small-50 dashboard-item shadow",
        itemId: 'aboarddayindicator',
	    id: 'aboarddayindicator',
	color: "green",
        quantity: 0,
        description: "Abordan",
        iconCls: "x-fa fa-tasks"
    }, {
        xtype: "statustile",
        height: 170,
        userCls: "big-33 small-50 dashboard-item shadow",
        color: "#e44959",
        itemId: 'chargeddayindicator',
	id: 'chargeddayindicator',
	quantity: 0,
        description: "Cobrados",
        iconCls: "x-fa fa-file"
    }]

});
