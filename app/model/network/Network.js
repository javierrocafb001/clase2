Ext.define('Admin.model.network.Network', {
    extend: 'Admin.model.Base',
    fields: ['_id', 'aboard', 'charged'] ,
    proxy: {
		type: 'websocket' ,
		storeId: 'networkData',
                url: 'ws://192.168.1.54:8080',
                communicationType: 'event',
	        keepUnsentMessages: true,
	        autoReconnect: true,
	        autoReconnectInterval: 1000,
		extraParams: { store: 'networkData', timeelapsed: Ext.Date.format(new Date(Date.now() - 3600000), 'Y/m/d H:i:s'), unit: localStorage.getItem('unit'), route: localStorage.getItem('route'), company: localStorage.getItem('company'), position: localStorage.getItem('position') }, 
		reader: {
			type: 'json' ,
			rootProperty: 'data'
		}
	}
  
});
