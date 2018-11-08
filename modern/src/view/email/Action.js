Ext.define('Admin.view.email.Action', {
    extend: 'Ext.ActionSheet',
    xtype: 'emailaction',
    cls: "userProfile-container dashboard",
    scrollable: "y",
	viewModel: {
        type: "userprofile"
    },
	items: [{
            xtype: "accountform"
        }]
});
