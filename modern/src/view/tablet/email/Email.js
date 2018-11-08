Ext.define('Admin.view.tablet.email.Email', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.DataView',
        'Ext.Panel',
        'Ext.plugin.Responsive'
    ],
    controller: "email-tablet",
    itemId: 'tabletemail',
    id: 'tabletemail',
    viewModel: {
        type: "email"
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    listeners: {
	painted: function(){
	Ext.getCmp('tabletinboxgrid').setTitle('actualizado: ' + Ext.Date.format(new Date(), 'Y/m/d H:i:s'));	
	Ext.data.StoreManager.lookup('inbox').load();
	return void 0;	
	},   
        element: "element",
        edgeswipeend: "onSwipe"
    },
    margin: "20 0 0 20",
    items: [{
        xtype: "inbox",
        margin: "0 20 20 0",
        flex: 1,
        bind: "{inbox}"
    }]
   
});
