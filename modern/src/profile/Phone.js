Ext.define('Admin.profile.Phone', {
    extend: 'Ext.app.Profile',
    requires: [
        'Admin.view.phone.*'
    ],
    views: {
    
    },
    isActive: function() {
        return Ext.platformTags.phone
    },
    launch: function() {
        Ext.getBody().addCls("phone")
    }
});
