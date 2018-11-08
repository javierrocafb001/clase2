Ext.define('Admin.view.profile.Timeline', {
    extend: 'Ext.DataView',
    xtype: 'timelineprofile',
    cls: "timeline-items-wrap",
    scrollable: false,
    bind: "{userTimeline}",
    listeners: {
       painted: function(){
        Ext.data.StoreManager.lookup('timelinestore').load();
	return void 0;       
       }
    },
    itemSelector: ".timeline-item",
    itemTpl: ['<div class="timeline-item{userId:this.cls(values,parent[xindex-2],xindex-1,xcount)}">{date:this.epoch(values,parent[xindex-2],xindex-1,xcount)}<div class="profile-pic-wrap"><div class="shared-by"><a href="#">{firstname} {firstlastname}</a></div><div>{date:this.elapsed} ago</div></div><div class="line-wrap"><div class="contents-wrap">reporta {number} pasajeros</div></div></div>', {
        cls: function(i, g, j, l, k) {
            var h = "";
            if (!l) {
                h += " timeline-item-first"
            }
            if (l + 1 === k) {
                h += " timeline-item-last"
            }
            return h
        },
        elapsed: function(l) {
            var s = Date.now();
            s = new Date();
            var m = Math.floor((s - l) / 1000),
                q = Math.floor(m / 60),
                n = Math.floor(q / 60),
                k = Math.floor(n / 24),
                t = Math.floor(k / 7),
                r = Math.floor(k / 30),
                p = Math.floor(k / 365),
                o;
            r %= 12;
            t %= 52;
            k %= 365;
            n %= 24;
            q %= 60;
            m %= 60;
            if (p) {
                o = this.part(p, "Year");
                o += this.part(r, "Month", " ")
            } else {
                if (r) {
                    o = this.part(r, "Month");
                    o += this.part(k, "Day", " ")
                } else {
                    if (t) {
                        o = this.part(t, "Week");
                        o += this.part(k, "Day", " ")
                    } else {
                        if (k) {
                            o = this.part(k, "Day");
                            o += this.part(n, "Hour", " ")
                        } else {
                            if (n) {
                                o = this.part(n, "Hour")
                            } else {
                                if (q) {
                                    o = this.part(q, " Minute")
                                } else {
                                    o = this.part(m, "Second")
                                }
                            }
                        }
                    }
                }
            }
            return o
        },
        epoch: function(i, g, j, l, k) {
            var h = j && (j.isModel ? j.data : j)["date"];
            if (l === 4) {
                return '<div class="timeline-epoch">Tiempo Atras</div>'
            }
            return ""
        },
        part: function(h, e, g) {
            var f = h ? (g || "") + h + " " + e : "";
            if (h > 1) {
                f += "s"
            }
            return f
        }
    }]


});
