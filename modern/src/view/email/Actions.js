Ext.define('Admin.view.email.Actions', {
    extend: 'Ext.ActionSheet',
    xtype: 'emailactions',
    cls: 'userProfile-container dashboard',
    scrollable: "y",
	viewModel: {
        type: 'userprofile'
    },
	items: [{
        xtype: 'timelineprofile'
    }]

});
