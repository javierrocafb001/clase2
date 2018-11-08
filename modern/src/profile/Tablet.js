Ext.define('Admin.profile.Tablet', {
    extend: 'Ext.app.Profile',
    requires: [
        'Admin.view.tablet.*'
    ],
    views: {
    
    },
    isActive: function() {
        return !Ext.platformTags.phone
    }
});
