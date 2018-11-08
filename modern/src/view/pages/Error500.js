Ext.define('Admin.view.pages.Error500', {
    extend: 'Admin.view.pages.ErrorBase',
    xtype:'page500',
    items: [{
        cls: "error-page-desc",
        html: '<p>Desconectando...</p><p> <a href="#login"> Desconectarse </a></p>'
    }],
     listeners: {
     painted: function(){
            localStorage.removeItem('iduser'); 
            localStorage.removeItem('user'); 
            localStorage.removeItem('firstname');
	    localStorage.removeItem('secondname');
            localStorage.removeItem('firstlastname');
            localStorage.removeItem('secondlastname');
            localStorage.removeItem('company');
            localStorage.removeItem('assignedid');
	    localStorage.removeItem('route');
	    localStorage.removeItem('position');
	    localStorage.removeItem('unit');
            localStorage.removeItem('priceofroute');
	    localStorage.removeItem('userlocationlongitude');
	    localStorage.removeItem('userlocationlatitude');

	    Admin.view.main.MainController.prototype.onResetForm.apply(this, arguments);
	    Admin.view.main.MainController.prototype.onCancelButton.apply(this, arguments);

	    window.location.href = "#login" 
     }	
    }
});
