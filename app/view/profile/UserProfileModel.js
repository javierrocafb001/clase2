Ext.define('Admin.view.profile.UserProfileModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userprofile',
    stores: {
     userTimeline: {
            autoLoad: false,
            model: 'Admin.model.timeline.TimeLine',
	    storeId: 'timelinestore'
        }
     }
});
