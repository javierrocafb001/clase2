Ext.define('Admin.model.network.AboardTotal', {
    extend: 'Admin.model.Base',
    fields: ['_id', 'number'] ,
	proxy: {
		type: 'websocket' ,
		storeId: 'aboardTotalData',
                url: 'ws://192.168.1.54:8080',
                communicationType: 'event',
	        keepUnsentMessages: true,
	        autoReconnect: true,
	        autoReconnectInterval: 1000,
		extraParams: { store: 'aboardTotalData', timeelapsed: Ext.Date.format(new Date(), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') }, 
		reader: {
			type: 'json' ,
			rootProperty: 'data'
		}
	}
});
