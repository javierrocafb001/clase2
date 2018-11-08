Ext.define('Admin.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',
    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],
    stores: {
        charData: {
            autoLoad: false,
            model: 'Admin.model.network.Char',
	    storeId: 'charData',
	    listeners: {
	     load: function(){
	     Ext.data.StoreManager.lookup('chartotalData').load();
             Ext.websocket.send('chargedhourindicator', { timeelapsed: Ext.Date.format(new Date(Date.now() - 3600000), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') });

	     }
	    }	
	
	},
	chartotalData: {
            autoLoad: false,
            model: 'Admin.model.network.CharTotal',
	    storeId: 'chartotalData',
	    listeners: {
	     load: function(){
	     Ext.data.StoreManager.lookup('aboardTotalData').load();
             Ext.websocket.send('aboarddayindicator', { timeelapsed: Ext.Date.format(new Date(), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') });

	     }
	    }	
	},
	    aboardTotalData: {
            autoLoad: false,
            model: 'Admin.model.network.AboardTotal',
	    storeId: 'aboardTotalData',
	    listeners: {
	     load: function(){
	     Ext.websocket.send('chargeddayindicator', { timeelapsed: Ext.Date.format(new Date(), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') });

	     Ext.websocket.send('collectedpercentagebar', { timeelapsed: Ext.Date.format(new Date(), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') });
     

	     }
	    }	    

        },
            networkData: {
            autoLoad: false,
	    model: 'Admin.model.network.Network',
	    storeId: 'networkData',
	    listeners: {
	      load: function(){
	      Ext.data.StoreManager.lookup('aboardData').load();
              	      }
	    }
        },
        aboardData: {
            autoLoad: false,
            model: 'Admin.model.network.Aboard',
	    storeId: 'aboardData',
	    listeners: {
	     load: function(){
	     Ext.data.StoreManager.lookup('charData').load();
             Ext.websocket.send('aboardhourindicator', { timeelapsed: Ext.Date.format(new Date(Date.now() - 3600000), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') });

	     }
	    }
        }
       }
    });
