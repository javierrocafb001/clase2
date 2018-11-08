Ext.define('Admin.view.email.EmailController', {
    extend: 'Ext.app.ViewController',
    actionsVisible: false,
    onChangeFilter: function(b) {
    },
    onComposeMessage: function() {
        this.doCompose()
    },
    onComposeTo: function(d) {
        var c = d.getRecord();
        this.doCompose(c.get("name"))
    },
    onSelectMessage: function(c, d) {},
    hideActions: function() {
        var b = this.actions;
        if (b) {
            b.hide()
        }
        this.actionsVisible = false
    },
    showActions: function() {
        var d = this,
            c = d.actions;
        if (!c) {
            d.actions = c = Ext.create({
                xtype: "emailactions",
                defaults: {
                    scope: d
                },
                enter: "right",
                exit: "right",
                top: 0,
                hidden: true,
                left: null,
                height: "100%",
                hideOnMaskTap: true,
                width: 250
            });
            Ext.Viewport.add(c)
        }
        c.on("hide", function() {
            d.actionsVisible = false
        }, null, {
            single: true
        });
        c.show();
        d.actionsVisible = true
    }


});
