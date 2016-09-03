(function () {
	'use strict';
	var _config = window.disqus_config;
	window.disqus_config = function () {
		if (_config) _config.call(this);
		this.server_side = {
			"bin": "embed:promoted_discovery:dynamic:network_default_hidden:fallthrough",
			"service": "dynamic",
			"engage_lite_html": "",
			"bottom_placement_url": "",
			"variant": "fallthrough",
			"forum_id": "4526415",
			"inthread_show_after_comment": "4",
			"experiment": "network_default_hidden",
			"inthread_placement_url": "",
			"top_placement_url": "",
			"engage_lite_url": "",
			"inthread_minimum_comment_count": "5"
		};
	};
})();
!function (a, b) {
	var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa = {}, ba = {}, ca = {}, da = {}, ea = {}, fa = {}, ga = {}, ha = {};
	c = $ = function (a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}, d = _ = function () {
		return function (a, b) {
			var c = a.length, d = Array.prototype.forEach;
			if (isNaN(c))for (var e in a)$(a, e) && b(a[e], e, a); else if (d)d.call(a, b); else for (var f = 0; c > f; f++)b(a[f], f, a)
		}
	}(), aa = function (a) {
		var c = d;
		return a = function (a) {
			var d = [];
			return c(a, function (a, c) {
				a !== b && d.push(c + (null === a ? "" : "=" + encodeURIComponent(a)))
			}), d.join("&")
		}
	}(aa), ba = function (a) {
		var b = aa;
		return a = function c(a, d, e) {
			if (d && (-1 === a.indexOf("?") ? a += "?" : "&" !== a.charAt(a.length - 1) && (a += "&"), a += b(d)), e) {
				var f = {};
				return f[(new Date).getTime()] = null, c(a, f)
			}
			var g = a.length;
			return "&" === a.charAt(g - 1) ? a.slice(0, g - 1) : a
		}
	}(ba), ca = function (b) {
		var c = ba, d = a.document, e = d.head || d.getElementsByTagName("head")[0] || d.body;
		return b = function (a, b, f) {
			var g = d.createElement("script");
			g.src = c(a, b, f), g.async = !0, g.charset = "UTF-8", e.appendChild(g)
		}
	}(ca), e = function (a) {
		return function (b) {
			return _(Array.prototype.slice.call(arguments, 1), function (c) {
				for (var d in c)a(c, d) && (b[d] = c[d])
			}), b
		}
	}(c), f = function (a) {
		var b;
		return function () {
			return a && (b = a.apply(this, arguments), a = null), b
		}
	}, g = function () {
		function b(a) {
			var b = a.split("."), c = b.length > 2 ? b[b.length - 2] : "";
			return c.match(/^[0-9a-f]{32}$/i) && c
		}

		function c(b) {
			(new a.Image).src = e(f + "/stat.gif", {event: b})
		}

		function d(b) {
			(new a.Image).src = e(f + "/event.gif", b)
		}

		var e = ba, f = "https://referrer.disqus.com/juggler";
		return {getLoaderVersionFromUrl: b, logStat: c, reportJester: d}
	}(), h = function () {
		function b(b) {
			b = b || {};
			var c = b.Math || a.Math, d = b.Date || a.Date;
			try {
				var e = (new d).getTimezoneOffset(), f = 1, g = a.screen;
				g && g.availWidth ? f = g.availWidth * g.availHeight + g.colorDepth : g && g.width && (f = g.width * g.height);
				var h = a.document.documentElement, i = h.clientWidth * h.clientHeight;
				return c.abs(17 * e + 25 * f - i)
			} catch (j) {
				return 1
			}
		}

		return {get: b}
	}(), i = function (b) {
		function c(b) {
			b = b || {};
			var c = b.Uint32Array || a.Uint32Array, d = b.crypto || a.crypto, e = b.Math || a.Math;
			try {
				var f = new c(1);
				return d.getRandomValues(f), f[0]
			} catch (g) {
				return e.floor(1e9 * e.random())
			}
		}

		function d() {
			var b = a.performance, c = b && b.timing;
			if (!c)return 1e5;
			var d = c.domainLookupEnd - c.domainLookupStart, e = c.connectEnd - c.connectStart, f = c.responseStart - c.navigationStart;
			return 11 * d + 13 * e + 17 * f
		}

		function e(e) {
			e = e || {};
			var f = e.Math || a.Math, g = Number((new Date).getTime().toString().substring(3)), h = f.abs(g + d() - b.get()).toString(32);
			return h += c(e).toString(32)
		}

		return {generate: e}
	}(h), j = function () {
		var b = a.document, c = b.createElement("iframe");
		return c.style.display = "none", b.body.appendChild(c), function (b) {
			try {
				return c.contentWindow[b] || a[b]
			} catch (d) {
				return a[b]
			}
		}
	}(), k = function (a) {
		return "[object String]" === Object.prototype.toString.call(a)
	}, l = function () {
		return a.getComputedStyle ? function (b, c, d) {
			try {
				return a.document.defaultView.getComputedStyle(b, null).getPropertyValue(c)
			} catch (e) {
				return null
			}
		} : function (a, b, c) {
			return a.currentStyle[b] || a.currentStyle[c]
		}
	}(), m = function () {
		function a(a) {
			return a.replace(/\s+/g, "").toLowerCase()
		}

		var b = d, c = k, f = e;
		return function (d, e, g) {
			var h = {};
			c(e) ? h[e] = g : h = e;
			var i = f({}, h);
			b(i, function (b, c) {
				var d = a(c);
				d !== c && (delete i[c], i[d] = b), null === b && (i[d] = ""), void 0 === b && delete i[d]
			});
			var j = d.style;
			b(i, function (a, b) {
				j.setProperty(b, String(a), "important")
			})
		}
	}(), n = function () {
		function b(a) {
			return a.replace(/\s+/g, "").toLowerCase()
		}

		function c(a) {
			return a = a.replace(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/, "#$1$1$2$2$3$3"), a = a.slice(1), {
				red: parseInt(a.slice(0, 2), 16),
				green: parseInt(a.slice(2, 4), 16),
				blue: parseInt(a.slice(4, 6), 16)
			}
		}

		function d(a) {
			var b = a.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
			return {red: parseInt(b[1], 10), green: parseInt(b[2], 10), blue: parseInt(b[3], 10)}
		}

		function e(a) {
			var b = a.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/);
			return {
				red: parseInt(b[1], 10),
				green: parseInt(b[2], 10),
				blue: parseInt(b[3], 10),
				alpha: parseFloat(b[4])
			}
		}

		function f(b, c, d, e) {
			return c = a.document.createElement(c), h(c, {
				visibility: "hidden",
				color: d
			}), b.appendChild(c), d = e(c), b.removeChild(c), d
		}

		function g(c, e) {
			e = e || {};
			var g = e.container || a.document.body;
			return a.getComputedStyle ? (c = f(g, "span", c, function (b) {
				return a.getComputedStyle(b, null).getPropertyValue("color")
			}), d(b(c))) : (c = f(g, "textarea", c, function (a) {
				return a.createTextRange().queryCommandValue("ForeColor")
			}), {red: 255 & c, blue: c >>> 16, green: (65280 & c) >>> 8})
		}

		var h = m;
		return function (a, f) {
			a = b(a);
			var h;
			if ("transparent" === a)return {red: 0, green: 0, blue: 0, alpha: 0};
			if ("#" === a.charAt(0))h = c; else if ("rgba(" === a.slice(0, 5))h = e; else if ("rgb(" === a.slice(0, 4))h = d; else {
				if (!/^[a-z]+$/.test(a))throw new Error("parseColor received unparseable color: " + a);
				h = g
			}
			return h(a, f)
		}
	}(), o = function () {
		var a = 0;
		return function (b) {
			a += 1;
			var c = String(a);
			return b ? b + c : c
		}
	}(), p = function () {
		var a = d, b = c, e = o, f = function (a) {
			var b, c = !1;
			return function () {
				return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
			}
		}, g = Object.keys || function (a) {
				if (a !== Object(a))throw new TypeError("Invalid object");
				var c = [];
				for (var d in a)b(a, d) && (c[c.length] = d);
				return c
			}, h = [].slice, i = {
			on: function (a, b, c) {
				if (!k(this, "on", a, [b, c]) || !b)return this;
				this._events = this._events || {};
				var d = this._events[a] || (this._events[a] = []);
				return d.push({callback: b, context: c, ctx: c || this}), this
			}, once: function (a, b, c) {
				if (!k(this, "once", a, [b, c]) || !b)return this;
				var d = this, e = f(function () {
					d.off(a, e), b.apply(this, arguments)
				});
				return e._callback = b, this.on(a, e, c)
			}, off: function (a, b, c) {
				var d, e, f, h, i, j, l, m;
				if (!this._events || !k(this, "off", a, [b, c]))return this;
				if (!a && !b && !c)return this._events = {}, this;
				for (h = a ? [a] : g(this._events), i = 0, j = h.length; j > i; i++)if (a = h[i], f = this._events[a]) {
					if (this._events[a] = d = [], b || c)for (l = 0, m = f.length; m > l; l++)e = f[l], (c && c !== e.context || b && b !== e.callback && b !== e.callback._callback) && d.push(e);
					d.length || delete this._events[a]
				}
				return this
			}, trigger: function (a) {
				if (!this._events)return this;
				var b = h.call(arguments, 1);
				if (!k(this, "trigger", a, b))return this;
				var c = this._events[a], d = this._events.all;
				return c && l(c, b), d && l(d, arguments), this
			}, stopListening: function (a, b, c) {
				var d = this._listeners;
				if (!d)return this;
				var e = !b && !c;
				"object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
				for (var f in d)d[f].off(b, c, this), e && delete this._listeners[f];
				return this
			}
		}, j = /\s+/, k = function (a, b, c, d) {
			if (!c)return !0;
			if ("object" == typeof c) {
				for (var e in c)a[b].apply(a, [e, c[e]].concat(d));
				return !1
			}
			if (j.test(c)) {
				for (var f = c.split(j), g = 0, h = f.length; h > g; g++)a[b].apply(a, [f[g]].concat(d));
				return !1
			}
			return !0
		}, l = function (a, b) {
			var c, d, e = a.length, f = b[0], g = b[1], h = b[2];
			switch (b.length) {
				case 0:
					for (d = 0; e > d; d++)(c = a[d]).callback.call(c.ctx);
					return;
				case 1:
					for (d = 0; e > d; d++)(c = a[d]).callback.call(c.ctx, f);
					return;
				case 2:
					for (d = 0; e > d; d++)(c = a[d]).callback.call(c.ctx, f, g);
					return;
				case 3:
					for (d = 0; e > d; d++)(c = a[d]).callback.call(c.ctx, f, g, h);
					return;
				default:
					for (d = 0; e > d; d++)(c = a[d]).callback.apply(c.ctx, b)
			}
		}, m = {listenTo: "on", listenToOnce: "once"};
		return a(m, function (a, b) {
			i[b] = function (b, c, d) {
				var f = this._listeners || (this._listeners = {}), g = b._listenerId || (b._listenerId = e("l"));
				return f[g] = b, "object" == typeof c && (d = this), b[a](c, d, this), this
			}
		}), i.bind = i.on, i.unbind = i.off, i
	}(), q = function () {
		function b(a) {
			return e.getElementById(a) || e.body || e.documentElement
		}

		function c(a) {
			return f.href = a, f.hostname
		}

		function d(a, b) {
			b = b || e.documentElement;
			for (var c = a, d = 0, f = 0; c && c !== b;)d += c.offsetLeft, f += c.offsetTop, c = c.offsetParent;
			return {top: f, left: d, height: a.offsetHeight, width: a.offsetWidth}
		}

		var e = a.document, f = e.createElement("a");
		return {getContainer: b, getHost: c, getOffset: d}
	}(), r = function () {
		var b, c = j;
		return b = "[object JSON]" === a.Object.prototype.toString.call(a.JSON) ? a.JSON : c("JSON"), b ? b : {}
	}(), s = function () {
		var a = p, b = e, c = o, d = q, f = r, g = function (a) {
			a = a || {}, this.state = g.INIT, this.uid = a.uid || c("dsq-frame"), this.origin = a.origin, this.host = d.getHost(this.origin), this.target = a.target, this.window = null, g.windows[this.uid] = this, this.on("ready", function () {
				this.state = g.READY
			}, this), this.on("die", function () {
				this.state = g.KILLED
			}, this)
		};
		return b(g, {
			INIT: 0, READY: 1, KILLED: 2, windows: {}, postMessage: function (a, b, c) {
				return a.postMessage(b, c)
			}
		}), b(g.prototype, a), g.prototype.requiresWindow = function (a) {
			var b = this;
			return function () {
				var c = Array.prototype.slice.call(arguments), d = function () {
					var e = b.window;
					e ? a.apply(b, c) : setTimeout(d, 500)
				};
				b.isReady() ? d() : b.on("ready", d)
			}
		}, g.prototype.sendMessage = function (a, b) {
			var c = f.stringify({scope: "client", name: a, data: b});
			this.requiresWindow(function (a) {
				g.postMessage(this.window, a, this.origin)
			})(c)
		}, g.prototype.hide = function () {
		}, g.prototype.show = function () {
		}, g.prototype.url = function () {
			return this.target
		}, g.prototype.destroy = function () {
			this.state = g.KILLED, this.off()
		}, g.prototype.isReady = function () {
			return this.state === g.READY
		}, g.prototype.isKilled = function () {
			return this.state === g.KILLED
		}, g
	}(), t = function () {
		var b = m, c = e, d = s, f = q, g = a.document, h = function (a) {
			d.call(this, a), this.styles = a.styles || {}, this.tabIndex = a.tabIndex || 0, this.title = a.title || "Disqus", this.container = a.container, this.elem = null
		};
		return c(h.prototype, d.prototype), h.prototype.load = function () {
			var a = this.elem = g.createElement("iframe");
			a.setAttribute("id", this.uid), a.setAttribute("name", this.uid), a.setAttribute("allowTransparency", "true"), a.setAttribute("frameBorder", "0"), a.setAttribute("scrolling", "no"), this.role && a.setAttribute("role", this.role), a.setAttribute("tabindex", this.tabIndex), a.setAttribute("title", this.title), this.setInlineStyle(this.styles)
		}, h.prototype.getOffset = function (a) {
			return f.getOffset(this.elem, a)
		}, h.prototype.setInlineStyle = function (a, c) {
			return b(this.elem, a, c)
		}, h.prototype.removeInlineStyle = function (a) {
			var b = this.elem.style;
			return "removeProperty" in b ? void b.removeProperty(a) : void(b[a] = "")
		}, h.prototype.hide = function () {
			this.setInlineStyle("display", "none")
		}, h.prototype.show = function () {
			this.removeInlineStyle("display")
		}, h.prototype.destroy = function () {
			return this.elem && this.elem.parentNode && (this.elem.parentNode.removeChild(this.elem), this.elem = null), d.prototype.destroy.call(this)
		}, h
	}(), u = function (a, b, c) {
		if (a.addEventListener)a.addEventListener(b, c, !1); else {
			if (!a.attachEvent)throw new Error("No event support.");
			a.attachEvent("on" + b, c)
		}
	}, v = function (a, b, c) {
		if (a.removeEventListener)a.removeEventListener(b, c, !1); else {
			if (!a.detachEvent)throw new Error("No event support.");
			a.detachEvent("on" + b, c)
		}
	}, w = function (a, b, c) {
		c || (c = 0);
		var d, e, f, g, h = 0, i = function () {
			h = new Date, f = null, g = a.apply(d, e)
		};
		return function () {
			var j = new Date, k = b - (j - h);
			return d = this, e = arguments, 0 >= k ? (clearTimeout(f), f = null, h = j, g = a.apply(d, e)) : f || (f = setTimeout(i, k + c)), g
		}
	}, da = function (b) {
		var d = p, f = k, g = c, h = e, i = t, j = s, l = q, m = r, n = a.document;
		b.addEvent = u, b.removeEvent = v, b.throttle = w, b.addEvent(a, "message", function (a) {
			var b;
			try {
				b = m.parse(a.data)
			} catch (c) {
				return
			}
			var d = b.sender, e = g(j.windows, d) && j.windows[d];
			e && l.getHost(a.origin) === e.host && (a.origin !== e.origin && (e.origin = a.origin), "host" === b.scope && e.trigger(b.name, b.data))
		}, !1), b.addEvent(a, "hashchange", function () {
			b.trigger("window.hashchange", {hash: a.location.hash})
		}, !1), b.addEvent(a, "resize", b.throttle(function () {
			b.trigger("window.resize")
		}, 250, 50), !1), b.addEvent(n, "mousemove", b.throttle(function () {
			b.trigger("window.mousemove")
		}, 250, 50), !1);
		var o = function () {
			b.trigger("window.scroll")
		};
		b.addEvent(a, "scroll", b.throttle(o, 250, 50)), b.addEvent(n, "click", function () {
			b.trigger("window.click")
		});
		var x = b.Popup = function (a) {
			a.uid = a.windowName, j.call(this, a)
		};
		h(x.prototype, j.prototype), x.prototype.load = function () {
			var b = this.window = a.open("", this.uid || "_blank");
			b.location = this.url()
		}, x.prototype.isKilled = function () {
			return j.prototype.isKilled() || this.window.closed
		};
		var y = b.Channel = function (a) {
			var b = this;
			b.window = null, i.call(b, a), this.insertBeforeEl = a.insertBeforeEl, this.insertAfterEl = a.insertAfterEl, b.styles = h({
				width: "1px",
				"min-width": "100%",
				border: "none",
				overflow: "hidden",
				height: "0"
			}, a.styles || {})
		};
		return h(y.prototype, i.prototype), y.prototype.load = function (a) {
			var c = this;
			i.prototype.load.call(c);
			var d = c.elem;
			d.setAttribute("width", "100%"), d.setAttribute("src", this.url()), b.addEvent(d, "load", function () {
				c.window = d.contentWindow, a && a()
			});
			var e = f(c.container) ? l.getContainer(c.container) : c.container, g = (c.insertAfterEl ? c.insertAfterEl.nextSibling : c.insertBeforeEl) || null;
			e.insertBefore(d, g)
		}, y.prototype.destroy = function () {
			return this.window = null, i.prototype.destroy.call(this)
		}, b.on = d.on, b.off = d.off, b.trigger = d.trigger, b
	}(da), x = function () {
		function c(a) {
			if (!a || "embed.js" !== a.substring(a.length - 8))return null;
			for (var b, c = [/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i, /(https?:)?\/\/(www\.)?([\w_\-]+)\.disqus\.com/i, /(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i, /(https?:)?\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i], d = c.length, e = 0; d > e; e++)if (b = a.match(c[e]), b && b.length && 4 === b.length)return b[3];
			return null
		}

		function d(a, b) {
			var d, e, f, g = a.getElementsByTagName("script"), h = g.length;
			b = b || c;
			for (var i = h - 1; i >= 0; i--)if (d = g[i], e = d.getAttribute ? d.getAttribute("src") : d.src, f = b(e), null !== f)return f.toLowerCase();
			return null
		}

		function e(a, b) {
			var c, d, e = 0, f = new Array(a.length);
			for (c = 0; c <= a.length; c++)for (f[c] = new Array(b.length), d = 0; d <= b.length; d++)f[c][d] = 0;
			for (c = 0; c < a.length; c++)for (d = 0; d < b.length; d++)a[c] === b[d] && (f[c + 1][d + 1] = f[c][d] + 1, f[c + 1][d + 1] > e && (e = f[c + 1][d + 1]));
			return e
		}

		function f() {
			for (var a = v.getElementsByTagName("h1"), c = v.title, d = c.length, f = c, g = .6, h = function (a) {
				var h, i = a.textContent || a.innerText;
				null !== i && i !== b && (h = e(c, i) / d, h > g && (g = h, f = i))
			}, i = 0; i < a.length; i++)h(a[i]);
			return f
		}

		function g(a) {
			return a.toLowerCase().replace(/^\s+|\s+$/g, "").replace(/['"]/g, "")
		}

		function h(a) {
			var b = 0, c = 1, d = 2;
			if (!a.atob)return c;
			try {
				a.postMessage("ping", "*")
			} catch (e) {
				return d
			}
			return b
		}

		function i(a, b, c) {
			c = c || b;
			var d = s(a, b, c);
			return !d || /color/i.test(b) && 0 === t(d).alpha ? a && i(a.parentNode, b, c) || d : d || null
		}

		function j(a, b, c, d) {
			r(b) && (b = v.createElement(b));
			var e = null;
			return b.style.visibility = "hidden", a.appendChild(b), e = i(b, c, d), a.removeChild(b), e
		}

		function m(a) {
			for (var b, c = j(a, "span", "font-family", "fontFamily"), d = c.split(","), e = {
				courier: 1,
				times: 1,
				"times new roman": 1,
				georgia: 1,
				palatino: 1,
				serif: 1
			}, f = 0; f < d.length; f++)if (b = g(d[f]), e.hasOwnProperty(b))return !0;
			return !1
		}

		function o(a) {
			var b = v.createElement("a");
			return b.href = Number(new Date), t(j(a, b, "color"), {container: a})
		}

		function p(a) {
			var b = a.red, c = a.green, d = a.blue;
			if (a.hasOwnProperty("alpha")) {
				var e = a.alpha, f = function (a) {
					return Math.round(a * e + 255 * (1 - e))
				};
				b = f(b), c = f(c), d = f(d)
			}
			return (299 * b + 587 * c + 114 * d) / 1e3
		}

		function q(a) {
			var b = j(a, "span", "background-color", "backgroundColor"), c = t(b, {container: a});
			return 0 === c.alpha ? "light" : p(c) < 128 ? "dark" : "light"
		}

		var r = k, s = l, t = n, u = da, v = a.document, w = function () {
			var a, b, c = function () {
				return !1
			};
			if ("hidden" in v)a = "hidden", b = "visibilitychange"; else {
				if (!("webkitHidden" in v))return {isHidden: c, listen: c, stopListening: c};
				a = "webkitHidden", b = "webkitvisibilitychange"
			}
			return {
				isHidden: function () {
					return v[a]
				}, listen: function (a) {
					return u.addEvent(v, b, a)
				}, stopListening: function (a) {
					return u.removeEvent(v, b, a)
				}
			}
		}(), x = function () {
			var a = v.createElement("div");
			a.style.visibility = "hidden", a.style.width = "100px", a.style.msOverflowStyle = "scrollbar", v.body.appendChild(a);
			var b = a.offsetWidth;
			a.style.overflow = "scroll";
			var c = v.createElement("div");
			c.style.width = "100%", a.appendChild(c);
			var d = c.offsetWidth;
			return a.parentNode.removeChild(a), b - d
		}, y = {
			isIE: function () {
				return Boolean(v.documentMode)
			}, isSafari: function () {
				var b = a.navigator.userAgent.toLowerCase();
				return b.indexOf("safari") > -1 && -1 === b.indexOf("chrome")
			}
		}, z = {
			getItem: function (b) {
				try {
					return a.localStorage.getItem(b)
				} catch (c) {
				}
			}, setItem: function (b, c) {
				try {
					return a.localStorage.setItem(b, c)
				} catch (d) {
				}
			}
		}, A = function () {
			var a = !1;
			return a || "https:" === v.location.protocol
		}, B = 1, C = function (a) {
			if (a.nodeType === B) {
				var b = s(a, "max-height", "maxHeight"), c = s(a, "overflow-y", "overflowY");
				return b && "none" !== b && c && "visible" !== c
			}
		}, D = 4, E = function (a) {
			return a.nodeType === B ? a.scrollHeight - a.clientHeight > D : void 0
		}, F = function () {
			if (v.querySelector) {
				var a = v.querySelector("link[rel=canonical]");
				if (a)return a.href
			}
		};
		return {
			MAX_Z_INDEX: 2147483647,
			getShortnameFromUrl: c,
			getForum: d,
			guessThreadTitle: f,
			getContrastYIQ: p,
			getColorScheme: q,
			getElementStyle: j,
			getAnchorColor: o,
			normalizeFontValue: g,
			isSerif: m,
			getBrowserSupport: h,
			pageVisibility: w,
			getScrollbarWidth: x,
			browser: y,
			storage: z,
			defaultProtocol: A() ? "https:" : "http:",
			appearsToHideContent: C,
			hasOverflow: E,
			getCanonicalUrl: F
		}
	}(), y = function () {
		var a = d, c = i, e = j, f = x, g = function (a, c) {
			this.win = a, this.configurator = c, this.config = {
				page: {
					url: b,
					title: b,
					slug: b,
					category_id: b,
					identifier: b,
					language: b,
					api_key: b,
					remote_auth_s3: b,
					author_s3: b
				},
				experiment: {enable_scroll_container: !0, force_auto_styles: b, sort_order: b, force_mobile: b},
				server_side: {
					service: "static",
					experiment: "default",
					variant: "control",
					top_placement_url: b,
					bottom_placement_url: b,
					engage_lite_html: b,
					engage_lite_url: b,
					forum_id: b
				},
				discovery: {
					disable_all: b,
					disable_promoted: b,
					sponsored_comment_id: b,
					preview: !1,
					adsFixture: b,
					pdFixture: b
				},
				strings: b,
				sso: {},
				callbacks: {
					preData: [],
					preInit: [],
					onInit: [],
					afterRender: [],
					onReady: [],
					onNewComment: [],
					preReset: [],
					onPaginate: [],
					onIdentify: [],
					beforeComment: []
				}
			}
		};
		g.DISQUS_GLOBALS = ["shortname", "identifier", "url", "title", "category_id", "slug"];
		var h = g.prototype;
		return h.getContainer = function () {
			var a = this.win;
			return a.document.getElementById(a.disqus_container_id || "disqus_thread")
		}, h.runConfigurator = function () {
			var a = this.configurator || this.win.disqus_config;
			if ("function" == typeof a)try {
				a.call(this.config)
			} catch (b) {
			}
		}, h.getValuesFromGlobals = function () {
			var b, c = this.win, d = this.config, e = d.page;
			a(g.DISQUS_GLOBALS, function (a) {
				var b = c["disqus_" + a];
				"undefined" != typeof b && (e[a] = b)
			}), this.runConfigurator(), d.forum || (b = e.shortname, d.forum = b ? b.toLowerCase() : f.getForum(c.document))
		}, h.toJSON = function () {
			var a, b = this.win, d = this.config, g = d.page, h = this.getContainer();
			return this.getValuesFromGlobals(), (d.server_side.top_placement_url || d.server_side.bottom_placement_url) && (a = c.generate({
				Math: e("Math"),
				crypto: e("crypto"),
				Uint32Array: e("Uint32Array"),
				Date: e("Date")
			})), {
				impressionId: a || null,
				container: h,
				forum: d.forum,
				sortOrder: d.experiment.sort_order || f.storage.getItem("disqus.sort") || "default",
				language: d.language,
				typeface: f.isSerif(h) ? "serif" : "sans-serif",
				anchorColor: f.getAnchorColor(h),
				colorScheme: f.getColorScheme(h),
				canonicalUrl: f.getCanonicalUrl(),
				url: g.url || b.location.href.replace(/#.*$/, ""),
				title: g.title,
				documentTitle: f.guessThreadTitle(),
				slug: g.slug,
				category: g.category_id,
				identifier: g.identifier,
				discovery: d.discovery,
				experimentName: d.server_side.experiment,
				experimentVariant: d.server_side.variant,
				experimentService: d.server_side.service,
				forumId: d.server_side.forum_id,
				topPlacementUrl: d.server_side.top_placement_url,
				bottomPlacementUrl: d.server_side.bottom_placement_url,
				apiKey: g.api_key,
				remoteAuthS3: g.remote_auth_s3,
				sso: d.sso,
				unsupported: f.getBrowserSupport(b),
				callbacks: d.callbacks,
				enableScrollContainer: d.experiment.enable_scroll_container,
				forceAutoStyles: d.experiment.force_auto_styles,
				forceMobile: d.experiment.force_mobile,
				engageLiteHTML: d.server_side.engage_lite_html,
				engageLiteURL: d.server_side.engage_lite_url
			}
		}, {HostConfig: g}
	}(), z = function () {
		var a;
		return a = "undefined" == typeof console ? function () {
		} : "function" == typeof console.log ? function () {
			return console.log(Array.prototype.slice.call(arguments, 0).join(" "))
		} : function () {
			return console.log.apply(console, arguments)
		}, {log: a}
	}(), A = function (a) {
		try {
			return a.self !== a.top
		} catch (b) {
			return !0
		}
	}, B = function (a) {
		return function (b) {
			return Boolean(b && (b.offsetWidth || b.offsetHeight || b.getClientRects().length) && "hidden" !== a(b, "visibility"))
		}
	}(l), C = function (a, b, c) {
		var d = function () {
			var e = a();
			return e ? void b(e) : void setTimeout(d, c)
		};
		d()
	}, D = function () {
		var b = k, c = e, d = u, f = q, g = t, h = a.document, i = function (a) {
			g.call(this, a), this.contents = a.contents || "", this.styles = c({
				width: "100%",
				border: "none",
				overflow: "hidden"
			}, a.styles || {})
		};
		return c(i.prototype, g.prototype), i.prototype.load = function (a) {
			g.prototype.load.call(this);
			var c = this.elem, d = b(this.container) ? f.getContainer(this.container) : this.container;
			d.appendChild(c), this.window = c.contentWindow;
			try {
				this.window.document.open()
			} catch (e) {
				c.src = 'javascript:var d=document.open();d.domain="' + h.domain + '";void(0);'
			}
			return this.document = this.window.document, this.document.write(this.contents), this.document.close(), this.updateHeight(), a && setTimeout(a, 0), this
		}, i.prototype.updateHeight = function () {
			var a, b = this.document.body;
			b && (a = b.offsetHeight + "px", this.setInlineStyle({height: a, "min-height": a, "max-height": a}))
		}, i.prototype.show = function () {
			this.setInlineStyle("display", "block")
		}, i.prototype.click = function (a) {
			var b = this, c = b.document.body;
			d(c, "click", function (c) {
				a.call(b, c)
			})
		}, i.prototype.setBodyClass = function (a) {
			this.document.body.className = a
		}, i
	}(), E = function () {
		var b = l, c = a.document.body;
		return function () {
			var a = c.offsetHeight, d = parseInt(b(c, "margin-top", "marginTop"), 10);
			d && (a += d);
			var e = parseInt(b(c, "margin-bottom", "marginBottom"), 10);
			return e && (a += e), a
		}
	}(), F = function () {
		var b = e, c = ba, d = "default", f = {
			lounge: "http://disqus.com/embed/comments/",
			home: "https://disqus.com/home/".replace("home/", "")
		}, g = function (a, b) {
			return /^http/.test(b) || (b = "http:"), b + "//" + a.replace(/^\s*(\w+:)?\/\//, "")
		}, h = function (e, h, i) {
			var j = f[e];
			if (!j)throw new Error("Unknown app: " + e);
			var k = g(j, a.document.location.protocol), l = b({base: d}, h || {}), m = i ? "#" + encodeURIComponent(JSON.stringify(i)) : "";
			return c(k, l) + m
		};
		return {BASE: d, apps: f, get: h, ensureHttpBasedProtocol: g}
	}(), G = function () {
		var a = p, b = e, d = c, f = o, g = function (a) {
			this.uid = f("dsq-app"), this.settings = a || {};
			var b = [], c = this.constructor.prototype;
			do b.unshift(c), c = c.constructor.__super__; while (c);
			for (var e = 0, g = b.length; g > e; e++)c = b[e], d(c, "events") && this.on(c.events, this), d(c, "onceEvents") && this.once(c.onceEvents, this)
		};
		return b(g.prototype, a), g.prototype.destroy = function () {
			this.off(), this.stopListening()
		}, g.extend = function (a, c) {
			var e, f = this;
			e = a && d(a, "constructor") ? a.constructor : function () {
				return f.apply(this, arguments)
			}, b(e, f, c);
			var g = function () {
				this.constructor = e
			};
			return g.prototype = f.prototype, e.prototype = new g, a && b(e.prototype, a), e.__super__ = f.prototype, e
		}, g
	}(), H = function () {
		var b = a.document, c = b.location.protocol;
		return c
	}(), I = function () {
		var b = e, c = F, d = G, f = da, g = H, h = x, i = a.document, j = i.querySelector("html"), k = d.extend({
			name: null,
			loaderVersion: null,
			frame: null,
			origin: c.ensureHttpBasedProtocol("http://disqus.com", g),
			state: null,
			getUrl: function (a, d) {
				return a = this.loaderVersion ? b({version: this.loaderVersion}, a) : b({disqus_version: "d6df298"}, a), c.ensureHttpBasedProtocol(c.get(this.name, a, d), g)
			},
			getFrameSettings: function () {
				var a = {target: this.getUrl(), origin: this.origin, uid: this.uid}, b = this.settings;
				return b.windowName ? a.windowName = b.windowName : a.container = b.container || i.body, a
			},
			getFrame: function () {
				var a = this.getFrameSettings(), b = a.windowName ? f.Popup : f.Channel;
				return new b(a)
			},
			setState: function (a) {
				var b = this.constructor;
				return a in b.states ? (this.state = b.states[a], void this.trigger("state:" + a)) : !1
			},
			init: function () {
				var a, b = this;
				b.frame = a = this.getFrame(), b.listenTo(a, "all", function (c, d) {
					b.trigger("frame:" + c, d, a)
				}), b.trigger("change:frame", a), b.frame.load(function () {
					b.setState("LOADED")
				}), b.setState("INIT")
			},
			destroy: function () {
				var a = this.frame;
				a && (this.stopListening(a), a.destroy()), this.setState("KILLED"), this.frame = null, d.prototype.destroy.call(this)
			},
			events: {
				"frame:ready": function () {
					this.setState("READY")
				}
			},
			isHeightRestricted: function (a) {
				function b() {
					return h.appearsToHideContent(d) || f && h.appearsToHideContent(e)
				}

				function c() {
					return h.appearsToHideContent(d) && h.hasOverflow(d) || f && h.appearsToHideContent(e) && h.hasOverflow(e)
				}

				a = a || {};
				var d = this.settings.container, e = d.parentNode, f = e !== j && e !== i.body;
				return a.checkScrollHeight ? c() : b()
			}
		}, {states: {INIT: 0, LOADED: 1, READY: 2, RUNNING: 3, KILLED: 4}});
		return k
	}(), J = function () {
		var b = l, c = E, d = B, e = I, f = da, g = H, h = a.document, i = h.querySelector("html"), j = e.extend({
			getUrl: function () {
				var b = this.settings, c = {
					f: b.forum,
					t_i: b.identifier,
					t_u: b.url || a.location.href,
					t_s: b.slug,
					t_e: b.title,
					t_d: b.documentTitle,
					t_t: b.title || b.documentTitle,
					t_c: b.category,
					s_o: b.sortOrder,
					l: b.language
				};
				return b.unsupported && (c.n_s = b.unsupported), e.prototype.getUrl.call(this, c)
			}, getFrameInitParams: function (b) {
				var c = this.settings, d = {
					permalink: c.permalink,
					anchorColor: c.anchorColor,
					referrer: a.location.href,
					hostReferrer: h.referrer,
					canonicalUrl: c.canonicalUrl,
					colorScheme: c.colorScheme,
					typeface: c.typeface,
					remoteAuthS3: c.remoteAuthS3,
					apiKey: c.apiKey,
					sso: c.sso,
					parentWindowHash: a.location.hash,
					forceAutoStyles: c.forceAutoStyles,
					forceMobile: c.forceMobile,
					layout: c.layout,
					timestamp: this.timestamp,
					embedLoadTime: this.getBootloaderTimingInfo(),
					isHeightRestricted: this.isHeightRestricted()
				};
				return d.initialPosition = this.getViewportAndScrollStatus(), d
			}, listenToScrollEvent: function (a) {
				var b = this, c = b.getScrollContainer();
				if (c === i)return b.listenTo(f, "window.scroll", a), function () {
					b.stopListening(f, "window.scroll", a)
				};
				var d = f.throttle(function () {
					a.call(b)
				}, 250, 50);
				return f.addEvent(c, "scroll", d), function () {
					f.removeEvent(c, "scroll", d)
				}
			}, getScrollContainer: function () {
				if (this.scrollContainer)return this.scrollContainer;
				if (!this.settings.enableScrollContainer)return i;
				var a = this.settings.container;
				do {
					var c = b(a, "overflow-y", "overflowY");
					if (("scroll" === c || "auto" === c) && a.clientHeight < a.scrollHeight)break;
					a = a.parentNode
				} while (a && a !== i);
				return a && a !== h.body || (a = i), this.scrollContainer = a
			}, getViewportCoords: function () {
				return this.getScrollContainer() === i ? this.getWindowCoords() : this.getScrollContainerCoords()
			}, getWindowCoords: function () {
				if ("number" == typeof a.pageYOffset)this.getWindowScroll = function () {
					return a.pageYOffset
				}, this.getWindowHeight = function () {
					return a.innerHeight
				}; else {
					var b = i.clientHeight || i.clientWidth ? i : h.body;
					this.getWindowScroll = function () {
						return b.scrollTop
					}, this.getWindowHeight = function () {
						return b.clientHeight
					}
				}
				return this.getWindowCoords = function () {
					return {top: this.getWindowScroll(), height: this.getWindowHeight()}
				}, this.getWindowCoords()
			}, getScrollContainerCoords: function () {
				var a = this.getScrollContainer();
				return {top: a.scrollTop, height: a.clientHeight}
			}, getBootloaderTimingInfo: function () {
				if (a.performance && a.performance.getEntriesByName) {
					var b = h.currentScript ? h.currentScript.src : g + "//" + this.settings.forum + ".disqus.com/embed.js", c = a.performance.getEntriesByName(b)[0];
					return c && c.duration
				}
			}, getViewportAndScrollStatus: function () {
				var a = this.frame;
				if (!a || !a.getOffset)return null;
				if (!d(a.elem))return null;
				var b = this.getViewportCoords();
				return {frameOffset: a.getOffset(this.getScrollContainer()), pageOffset: b.top, height: b.height}
			}, communicateViewportAndScrollStatus: function () {
				var a = this.getViewportAndScrollStatus();
				if (a) {
					var b = a.frameOffset, c = b.top, d = c + b.height, e = a.pageOffset, f = a.height, g = e + f, h = !1, i = !1;
					g + f >= c && (h = d >= e, i = h && g >= c);
					var j = this.frame;
					j.sendMessage("window.scroll.always", a), h && j.sendMessage("window.scroll", a), i !== this.wasInViewport && (j.sendMessage(i ? "window.inViewport" : "window.scrollOffViewport"), this.wasInViewport = i)
				}
			}, getBestNextFrameHeight: function (a) {
				var b = this.getViewportAndScrollStatus();
				if (!b || this.settings.enableScrollContainer || !this.getScrollContainer())return a;
				var d = b.frameOffset;
				if (a >= d.height)return a;
				var e = c(), f = e - (d.height + d.top), g = b.pageOffset + b.height - (d.top + f);
				return g > a ? g + 1 : a
			}, events: {
				"state:INIT": function () {
					this.settings.unsupported || (this.settings.windowName || (this.listenToScrollEvent(this.communicateViewportAndScrollStatus), this.listenTo(f, "window.resize", this.communicateViewportAndScrollStatus)), this.timestamp = Number(new Date))
				}, "state:LOADED": function () {
					var a = this.frame, b = a.elem;
					this.settings.unsupported ? (a.setInlineStyle("height", "500px"), b.setAttribute("scrolling", "yes"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "yes"), a.show()) : this.settings.windowName || (this.rendered = !1, a.setInlineStyle("height", "0"), b.setAttribute("scrolling", "no"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "no"))
				}, "frame:ready": function (a, b) {
					var c = this.getFrameInitParams(a, b);
					b.sendMessage("init", c)
				}, "frame:resize": function (a, b) {
					var c = a.height;
					b.elem && this.rendered && (c = this.getBestNextFrameHeight(c), b.setInlineStyle("height", c + "px"), b.sendMessage("embed.resized")), this.communicateViewportAndScrollStatus()
				}, "frame:rendered": function (a, b) {
					this.rendered = !0, this.wasInViewport = !1, b.trigger("resize", a), b.sendMessage("embed.rendered")
				}, "frame:fail": function (a, b) {
					b.elem && b.setInlineStyle("height", a && a.height || "75px")
				}, "frame:scrollTo": function (b, c) {
					if (c.elem && c.getOffset) {
						var d = this.getScrollContainer(), e = c.getOffset(d), f = "window" === b.relative ? b.top : e.top + b.top, g = this.getViewportCoords();
						!b.force && f > g.top && f < g.top + g.height || (d === i ? a.scrollTo(0, f) : d.scrollTop = f)
					}
				}
			}
		});
		return j
	}(), K = function () {
		var b = l, c = ba, d = x, e = F, f = I, g = a.document, h = /^calc\((.+)\)$/, i = f.extend({
			name: "home",
			events: {
				"frame:close": function (b, c) {
					c.hide(), a.focus()
				}, "frame:openReady": function () {
					this.frame.show(), this.frame.sendMessage("open"), (d.browser.isIE() || d.browser.isSafari()) && this.preventScrolling()
				}, "state:LOADED": function () {
					this.frame.removeInlineStyle("visibility")
				}, "frame:after:render": function () {
					d.browser.isSafari() && this.triggerHostReflow()
				}
			},
			preventScrolling: function () {
				var a = this.getBodyOverflow(), c = g.body.style.marginRight, d = g.documentElement.style, e = d.overflow;
				this.listenToOnce(this, "frame:close", function () {
					this.setBodyStyles({overflow: a, marginRight: c}), d.overflow = e
				}), this.setBodyStyles({
					overflow: "hidden",
					marginRight: this.calcMargin(b(g.body, "margin-right", "marginRight") || c)
				}), d.overflow = "hidden"
			},
			triggerHostReflow: function () {
				var a = g.createElement("style");
				g.body.appendChild(a), g.body.removeChild(a)
			},
			calcMargin: function (a) {
				var b = a.match(h);
				return b && (a = b[1]), a ? "calc(" + a + " + " + d.getScrollbarWidth() + "px)" : d.getScrollbarWidth() + "px"
			},
			setBodyStyles: function (a) {
				for (var b in a)g.body.style[b] = a[b]
			},
			getBodyOverflow: function () {
				return g.body.style.overflow
			},
			getSecureOrigin: function () {
				var a = e.ensureHttpBasedProtocol("https://disqus.com/home/", "https:"), b = a.split("/"), c = b[0], d = b[2];
				return c + "//" + d
			},
			getFrameSettings: function () {
				var a = f.prototype.getFrameSettings.call(this);
				return a.role = "dialog", a.origin = this.getSecureOrigin(), a.styles = {
					height: "100%",
					position: "fixed",
					top: 0,
					right: 0,
					left: "auto",
					bottom: "auto",
					"z-index": d.MAX_Z_INDEX,
					visibility: "hidden"
				}, a
			},
			getUrl: function () {
				var a = this.settings.path || "", b = this.settings.language, d = {utm_source: "disqus_embed"};
				return b && "en" !== b && (d.l = b), c(e.apps[this.name] + a, d)
			},
			show: function (a) {
				if (!this.frame.isReady())return void this.once("frame:ready", function () {
					this.show(a)
				}, this);
				var b = {path: a};
				this.settings.sso && (b.sso = this.settings.sso), this.frame.sendMessage("showPath", b)
			}
		}, {
			READY_TIMEOUT: 1e4, getInstanceOrLoad: function (a) {
				var b = i.instance;
				return b ? b : (b = i.instance = new i(a), a.preload && b.listenToOnce(b, "state:INIT", function () {
					b.frame.hide()
				}), i.setHomeTimeout(b), b.init(), b)
			}, setHomeTimeout: function (a) {
				i.homeTimeoutId && clearTimeout(i.homeTimeoutId);
				var b = i.homeTimeoutId = setTimeout(function () {
					a.frame.destroy(), a.trigger("timeout")
				}, i.READY_TIMEOUT);
				a.listenToOnce(a, "state:READY", function () {
					clearTimeout(b)
				})
			}, preload: function (a) {
				return a.preload = !0, i.getInstanceOrLoad(a)
			}, destroy: function () {
				var a = i.instance;
				a && (a.destroy(), i.instance = null)
			}, show: function (a) {
				var b = i.getInstanceOrLoad(a);
				return b.show(a.path), b
			}
		});
		return {show: i.show, preload: i.preload, destroy: i.destroy, _HomeApp: i}
	}(), L = function () {
		var b = a.document, c = d, f = A, h = ca, i = e, j = B, k = C, l = g, m = D, n = q, o = J, p = da, r = z, s = x, t = K, u = o.extend({
			name: "lounge",
			loaderVersion: l.getLoaderVersionFromUrl("//a.disquscdn.com/next/embed/lounge.load.74622dc19b1055d1af48a4f378c4b79b.js"),
			indicators: null,
			wasInViewport: !1,
			triggeredSlowEvent: !1,
			events: {
				"state:INIT": function () {
					var a = this.settings, b = a.server_side;
					b && "fallback" === b.service && l.logStat("embed.fallback"), a.unsupported || (this.indicators = {}, this.isContainerVisible() ? this.addLoadingAnim() : this.addLoadingAnimOnContainerVisible(), this.bindPublisherCallbacks(), this.forwardGlobalEvents())
				}, "state:LOADED": function () {
					this.isContainerVisible() && this.addLoadingAnim()
				}, "frame:reload": function () {
					a.location.reload()
				}, "frame:navigate": function (b) {
					a.location.href = b
				}, "frame:session.identify": function (a) {
					this.trigger("session.identify", a)
				}, "frame:posts.paginate": function () {
					this.trigger("posts.paginate")
				}, "frame:posts.count": function (a) {
					this.trigger("posts.count", a)
				}, "frame:posts.create": function (a) {
					this.trigger("posts.create", {id: a.id, text: a.raw_message})
				}, "frame:posts.beforeCreate": function (a) {
					this.onBeforePostCreate(a)
				}, "frame:home.destroy": function () {
					this.destroyHome()
				}, "frame:home.preload": function (a) {
					this.preloadHome(a)
				}, "frame:home.show": function (a) {
					this.showHome(a)
				}, "frame:home.open": function (b) {
					a.location = b
				}, "frame:indicator:init": function (a, b) {
					if (b.getOffset) {
						for (var c, d, e = ["north", "south"], f = this.indicators, g = b.getOffset().width + "px", h = {
							width: g,
							"min-width": g,
							"max-width": g,
							position: "fixed",
							"z-index": s.MAX_Z_INDEX - 1
						}, j = {north: {top: "0"}, south: {bottom: "0"}}, k = function () {
							b.sendMessage("indicator:click", this.uid.split("-")[1])
						}, l = 0; l < e.length; l++) {
							d = e[l], c = new m({
								uid: "indicator-" + d,
								container: this.settings.container,
								contents: a[d].contents,
								styles: i(j[d], h),
								role: "alert",
								type: d
							});
							try {
								c.load()
							} catch (n) {
								continue
							}
							c.hide(), c.click(k), f[d] = c
						}
						this.on({
							"frame:indicator:show": function (a) {
								var b = f[a.type];
								b && (b.document.getElementById("message").innerHTML = a.content, b.show())
							}, "frame:indicator:hide": function (a) {
								var b = a && a.type, c = b && f[b];
								if (c)c.hide(); else if (!b)for (var d = 0; d < e.length; d++)b = e[d], c = f[b], c && c.hide()
							}
						})
					}
				}, "frame:change:sort": function (a) {
					s.storage.setItem("disqus.sort", a)
				}, "frame:fail frame:rendered": function () {
					this.removeLoadingAnim(), this.setState("RUNNING")
				}, "frame:fail": function (a) {
					l.logStat("failed_embed.server." + a.code)
				}, "frame:rendered": function () {
					this.triggeredSlowEvent && l.logStat("rendered_embed.slow")
				}
			},
			onceEvents: {
				"frame:viglink:init": function (b, c) {
					var d = function () {
						for (var b in a)if (0 === b.indexOf("skimlinks") || 0 === b.indexOf("skimwords"))return !0;
						return !1
					};
					if (!(a.vglnk_self || a.vglnk || d())) {
						var e = b.apiUrl, f = b.key, g = String(b.id);
						null != b.clientUrl && null != e && null != f && null != b.id && (this.listenForAffiliationRequests(e, f, g), DISQUS.vglnk = {
							api_url: e,
							key: f,
							sub_id: g,
							onlibready: function () {
								c.sendMessage("viglink:change:timeout", {timeout: DISQUS.vglnk.opt("click_timeout")})
							}
						}, a.vglnk_self = "DISQUS.vglnk", h(b.clientUrl))
					}
				}
			},
			getFrameInitParams: function (b, c) {
				var d = o.prototype.getFrameInitParams.call(this, b, c);
				return d.experiment = {
					experiment: this.settings.experimentName,
					variant: this.settings.experimentVariant,
					service: this.settings.experimentService
				}, d.isBehindClick = this.isHeightRestricted() || !j(c.elem), d.discovery = this.settings.discovery, this.settings.impressionId && (d.impressionId = this.settings.impressionId), (this.settings.discoveryDisabled || f(a)) && (d.discoveryDisabled = !0), d
			},
			onBeforePostCreate: function (a) {
				var b = {text: a.raw_message};
				try {
					var c = this.settings.callbacks.beforeComment;
					if (c)for (var d = 0; d < c.length; d++)b = c[d](b)
				} catch (e) {
					r.log("Error processing Disqus callback: ", e.toString())
				} finally {
					this.frame.sendMessage("posts.beforeCreate.response", b && b.text)
				}
			},
			destroyHome: function () {
				t.destroy()
			},
			preloadHome: function (a) {
				a.path = "home/preload/";
				var b = this.home = t.preload(this.getHomeData(a));
				this.listenToOnce(b, "frame:ready", function () {
					this.frame.sendMessage("home.ready")
				}), this.handleHomeTimeout(b)
			},
			handleHomeTimeout: function (a) {
				this.listenTo(a, "timeout", function () {
					this.frame.sendMessage("home.timeout")
				})
			},
			showHome: function (a) {
				var b = this.home = t.show(this.getHomeData(a));
				this.listenToOnce(b, "frame:openReady", function () {
					this.frame.sendMessage("home.opened")
				}), this.handleHomeTimeout(b)
			},
			getHomeData: function (a) {
				var b = this.settings;
				return a.language || (a.language = b.language), b.apiKey && b.remoteAuthS3 && (a.sso = {
					apiKey: b.apiKey,
					remoteAuthS3: b.remoteAuthS3
				}), a
			},
			listenForAffiliationRequests: function (a, b, c) {
				var d = this.frame;
				this.on("frame:viglink:getaffiliatelink", function (e) {
					function f(a) {
						return function (b) {
							var c = {linkId: a};
							b && (c.url = b), d.sendMessage("viglink:getaffiliatelink:response", c)
						}
					}

					var g = DISQUS.vglnk.$;
					return g ? void g.request(a + "/click", {
						format: "jsonp",
						out: e.url,
						key: b,
						loc: d.target,
						subId: c
					}, {
						fn: f(e.linkId),
						timeout: DISQUS.vglnk.opt("click_timeout")
					}) : void d.sendMessage("viglink:getaffiliatelink:response")
				})
			},
			forwardGlobalEvents: function () {
				var a = this;
				a.settings.windowName || (a.listenTo(p, "window.resize", function () {
					a.frame.sendMessage("window.resize")
				}), a.listenTo(p, "window.click", function () {
					a.frame.sendMessage("window.click")
				}), a.listenTo(p, "window.mousemove", function () {
					a.frame.sendMessage("window.mousemove")
				})), a.listenTo(p, "window.hashchange", function (b) {
					a.frame.sendMessage("window.hashchange", b.hash)
				})
			},
			bindPublisherCallbacks: function () {
				var a = this, b = a.settings, d = u.LEGACY_EVENTS_MAPPING, e = b.callbacks;
				e && c(e, function (b, e) {
					d[e] && c(b, function (b) {
						a.on(d[e], b)
					})
				})
			},
			isContainerVisible: function () {
				var a = this.getViewportCoords(), b = n.getOffset(this.settings.container, this.getScrollContainer()), c = b.top + b.height - a.top;
				return c > 0 && c <= a.height
			},
			pollFullyVisible: function () {
				if (!this.pollingFullVisibility) {
					this.pollingFullVisibility = !0;
					var a = this.isHeightRestricted(), b = {}, c = this;
					k(function () {
						return c.frame && c.frame.elem ? a && !c.rendered ? !1 : j(c.frame.elem) && !c.isHeightRestricted({checkScrollHeight: !0}) : b
					}, function (a) {
						a !== b && (c.fullyVisible = !0, c.trigger("fullyVisible"))
					}, this.constructor.VISIBILITY_POLL_INTERVAL)
				}
			},
			whenFullyVisible: function (a) {
				this.pollFullyVisible(), this.fullyVisible ? a() : this.once("fullyVisible", a)
			},
			showSlowLoadingMessage: function () {
				var a, b = this;
				if (b.loadingElem) {
					if (s.pageVisibility.isHidden())return a = function () {
						s.pageVisibility.stopListening(a), b.setSlowLoadingMessageTimer(2e3)
					}, void s.pageVisibility.listen(a);
					b.triggeredSlowEvent = !0, b.state === b.constructor.states.READY ? l.logStat("slow_embed.got_ready") : b.state === b.constructor.states.LOADED ? l.logStat("slow_embed.loaded") : l.logStat("slow_embed.no_ready"), b.loadingElem.firstChild.insertAdjacentHTML("afterend", '<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>')
				}
			},
			clearSlowLoadingMessageTimer: function () {
				this.timeout && (clearTimeout(this.timeout), this.timeout = null)
			},
			setSlowLoadingMessageTimer: function (a) {
				var b = this;
				b.clearSlowLoadingMessageTimer(), b.timeout = setTimeout(function () {
					b.showSlowLoadingMessage()
				}, a)
			},
			addLoadingAnimOnContainerVisible: function () {
				var a, b = this;
				a = b.listenToScrollEvent(function () {
					var c = b.isContainerVisible();
					(c || b.state >= b.constructor.states.RUNNING) && a(), c && b.addLoadingAnim()
				})
			},
			addLoadingAnim: function () {
				var a, c, d, e = this, f = e.settings.container;
				if (e.loadingElem)return e.loadingElem;
				if (!(e.state >= e.constructor.states.RUNNING)) {
					var g = b.createElement("link");
					g.rel = "stylesheet", g.href = "//a.disquscdn.com/next/embed/styles/loading.8023a7350e47171f7bb79707886cd7c5.css", b.head.appendChild(g), a = b.createElement("div"), c = b.createElement("div"), d = b.createElement("div"), c.appendChild(d), a.appendChild(c), a.dir = "ltr", a.style.overflow = "hidden";
					var h = "dark" === e.settings.colorScheme;
					c.className = "disqus-loader-bubble";
					var i = c.style;
					i.height = "52px", i.width = "54px", i.margin = "0 auto", i.overflow = "hidden", i.position = "relative", h && (i.backgroundPosition = "0 -52px");
					var j = 13, k = h ? "rgba(223, 228, 237, .4)" : "rgba(51, 54, 58, .4)", m = h ? "#6D6F72" : "#A3A7AD", n = d.style;
					return i.boxSizing = n.boxSizing = "border-box", n.height = n.width = 2 * j + "px", n.position = "absolute", n.top = "13px", n.left = "15px", "borderRadius" in n ? (n.borderWidth = "3px", n.borderStyle = "solid", n.borderColor = k + " transparent", n.borderRadius = j + "px", n.transformOrigin = "50% 50% 0px", d.className = "disqus-loader-spinner") : n.borderLeft = "3px solid " + m, f.appendChild(a), e.loadingElem = a, l.logStat("lounge.loading.view"), e.setSlowLoadingMessageTimer(15e3), e.loadingElem
				}
			},
			removeLoadingAnim: function () {
				var a = this.loadingElem, b = this.settings.container;
				this.clearSlowLoadingMessageTimer(), a && a.parentNode === b && (b.removeChild(a), this.loadingElem = null)
			},
			destroy: function () {
				var a = this.indicators;
				this.removeLoadingAnim(), a && a.north && (a.north.destroy(), a.north = null), a && a.south && (a.south.destroy(), a.south = null), o.prototype.destroy.call(this)
			}
		}, {
			LEGACY_EVENTS_MAPPING: {
				onReady: "frame:rendered",
				onNewComment: "posts.create",
				onPaginate: "posts.paginate",
				onCommentCountChange: "posts.count",
				onIdentify: "session.identify"
			}
		}, {VISIBILITY_POLL_INTERVAL: 500}), v = function (a) {
			return new u(a)
		};
		return {Lounge: v}
	}(), M = function (a, b, c) {
		var d, e, f, g, h, i = function () {
			var j = (new Date).getTime() - g;
			b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
		};
		return function () {
			f = this, e = arguments, g = (new Date).getTime();
			var j = c && !d;
			return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
		}
	}, N = function (a, b) {
		for (var c = 0; c < a.length; ++c)if (a[c] === b)return c;
		return -1
	}, O = function (a, b, c) {
		for (var d = 0; d < a.length; ++d)if (b.call(c, a[d], d, a))return !0;
		return !1
	}, P = function (a) {
		return "[object Function]" === Object.prototype.toString.call(a)
	}, Q = function (a) {
		return function (b, c, d) {
			var e = null === b || void 0 === b ? void 0 : b[c];
			return void 0 === e && (e = d), a(e) ? e.call(b) : e
		}
	}(P), R = function (a) {
		return Boolean(a && 1 === a.nodeType)
	}, ea = function (a, b, c) {
		return a.getElement = function (a) {
			return b(a) ? a : a && a.el
		}, a.EL_ID_ATTR = "data-visibility-id", a.OBJ_ID_PROP = "_visibility_id", a.getId = function (d) {
			var e = null;
			return b(d) ? (e = d.getAttribute(a.EL_ID_ATTR) || null, e || (e = c(), d.setAttribute(a.EL_ID_ATTR, e))) : d && (e = d[a.OBJ_ID_PROP] || null, e || (e = d[a.OBJ_ID_PROP] = c())), e
		}, a.visiblePercent = function (a, b) {
			var c = 0;
			if (!b)return c;
			var d = a.top, e = d + a.height, f = b.visibleTop < d, g = b.visibleBottom > e;
			return !f && !g || f && g ? c = 1 : f ? c = (b.height - (d - b.visibleTop)) / b.height : g && (c = (e - b.visibleTop) / b.height), Math.round(100 * c)
		}, a
	}(ea, R, o), fa = function (c, d, e, f, g, h) {
		return h.events = [], h.lastPos = null, h.clearCache = function (a) {
			if (a === b)h.getElementOffset.cache = {}; else {
				var c = g.getId(a);
				c && (h.getElementOffset.cache[c] = null)
			}
		}, h.calculateOffset = function (b) {
			if (!b)return null;
			if (!e(b))return null;
			var c = b.ownerDocument.documentElement;
			return {height: b.offsetHeight, top: b.getBoundingClientRect().top + a.pageYOffset - (c.clientTop || 0)}
		}, h._getElementOffset = function (a) {
			var b = g.getElement(a);
			if (!b)return null;
			var c = h.calculateOffset(b);
			return c ? {
				visibleTop: c.top + (f(a, "topEdgeOffset") || 0),
				visibleBottom: c.top + c.height - (f(a, "bottomEdgeOffset") || 0),
				offsetTop: c.top,
				height: c.height
			} : null
		}, h.getElementOffset = function () {
			var a = function (b) {
				var c = a.cache, d = g.getId(b);
				if (d && c[d])return c[d];
				var e = h._getElementOffset(b);
				return d && e && (c[d] = e), e
			};
			return a.cache = {}, a
		}(), h.EVENT_NAMES = ["enter", "exit", "visible", "invisible", "all"], h.updateTracking = function (a) {
			var e, f = function (a) {
				return a ? function (b) {
					return a[b]
				} : function () {
					return b
				}
			};
			d(h.EVENT_NAMES, f(a._events)) ? (e = c(h.events, a), -1 === e && h.events.push(a)) : (e = c(h.events, a), -1 !== e && h.events.splice(e, 1))
		}, h.processEvents = function (a) {
			h.lastPos = a;
			var b = h.events;
			if (b.length)for (var c = b.length - 1; c >= 0; --c) {
				var d = b[c], e = d.isVisible(a);
				null !== e && (e !== d.lastVisible && d.trigger(e ? "enter" : "exit", d, a), d.trigger(e ? "visible" : "invisible", d, a), d.lastVisible = e)
			}
		}, h
	}(N, O, B, Q, ea, fa), S = function (b, c, d, e, f, g, h) {
		function i(a) {
			return this instanceof i ? (this.obj = a, void(this.lastVisible = !1)) : new i(a)
		}

		var j = c(function () {
			h.processEvents(h.lastPos)
		}, 250);
		return g(i.prototype, b, {
			on: function (a) {
				var c = !(this._events && this._events[a]), d = b.on.apply(this, arguments);
				return c && h.updateTracking(this), j(), d
			}, off: function (a) {
				var c = b.off.apply(this, arguments);
				return this._events && this._events[a] || h.updateTracking(this), c
			}, offset: function () {
				return h.getElementOffset(this.obj)
			}, isVisible: function (a) {
				if (a = a || h.lastPos, !a)return null;
				var b = a.top, c = b + a.height, d = this.offset();
				return d ? d.offsetTop >= b && d.visibleTop < c || d.offsetTop + d.height <= c && d.visibleBottom > b : null
			}, invalidate: function () {
				return h.clearCache(this.obj), this
			}
		}), g(i, {
			invalidate: h.clearCache,
			scroll: h.processEvents,
			_windowScrollHandlerBound: !1,
			_ignoreCache: !1,
			_windowScrollHandler: d(function () {
				i._ignoreCache && i.invalidate(), h.processEvents({
					top: a.pageYOffset,
					height: a.document.documentElement.clientHeight
				})
			}, 250),
			bindWindowEvents: function (b) {
				this._windowScrollHandlerBound || ("undefined" != typeof b && (i._ignoreCache = b), e(a, "scroll", this._windowScrollHandler), e(a, "resize", this._windowScrollHandler), this._windowScrollHandlerBound = !0, this._windowScrollHandler())
			},
			unbindWindowEvents: function () {
				i._ignoreCache = !1, f(a, "scroll", this._windowScrollHandler), f(a, "resize", this._windowScrollHandler), this._windowScrollHandlerBound = !1
			}
		}), i
	}(p, M, w, u, v, e, fa), T = function (a) {
		return a
	}(S), ga = function (a) {
		return a = function (a, b) {
			var c = null, d = !1;
			this.start = function () {
				d || (c = setTimeout(function () {
					d = !0, a()
				}, b))
			}, this.clear = function () {
				clearTimeout(c)
			}
		}
	}(ga), U = function () {
		function a(a) {
			if (a = Number(a), isNaN(a) || a > 255)throw new Error("Color components should be numbers less than 256");
			return a = a.toString(16), 1 === a.length ? "0" + a : String(a)
		}

		return function (b) {
			return "#" + a(b.red) + a(b.green) + a(b.blue)
		}
	}(), V = function () {
		return function (b) {
			"undefined" == typeof b && (b = a.location.search);
			var c = {};
			return _(b.substr(1).split("&"), function (a) {
				var b = a.split("=").map(function (a) {
					return decodeURIComponent(a.replace(/\+/g, "%20"))
				});
				b[0] && (c[b[0]] = b[1])
			}), c
		}
	}(), W = function () {
		var b = {}, c = a.document.createElement("a");
		return b.getOrigin = function (a) {
			c.href = a;
			var b = c.href.split("/");
			return b[0] + "//" + b[2]
		}, b.getHostName = function (a) {
			return c.href = a, c.hostname
		}, b.getDomainPart = function (a, c) {
			"undefined" == typeof c && (c = 0);
			var d = b.getHostName(a), e = d.split(".").reverse();
			return e[c]
		}, b.getQuery = function (a) {
			return c.href = a, c.search
		}, b
	}(), X = function () {
		var c = F, d = I, f = r, h = S, i = ea, j = A, k = ga, l = U, m = e, n = V, o = ba, p = W.getOrigin, q = W.getQuery, t = g, u = s, v = {
			adsnative: 160465,
			gravity: 184723,
			taboola: 184193,
			outbrain: 185359
		}, w = d.extend({
			name: "ads", origin: b, onceEvents: {
				"view:enter": function () {
					this._report({verb: "view", adverb: "0ms-no50perc"})
				}, "view:iab": function () {
					this._report({verb: "view", adverb: "iab-scroll"})
				}
			}, events: {
				"frame:ready": function (a) {
					this.forumId = a.forumId, this._reportOnce({verb: "load"}, "load"), this.bindViewEvents()
				}, "frame:resize": function (a) {
					this.frame.setInlineStyle("height", a.height + "px")
				}, "frame:click": function () {
					this._reportOnce({verb: "click"}, "click")
				}, "frame:error-provider-not-ready": function () {
					this._report({
						verb: "fail",
						object_type: "provider",
						object_id: this.getProvider(),
						adverb: "provider_not_ready"
					})
				}, "frame:error-no-height": function () {
					this._report({
						verb: "fail",
						object_type: "provider",
						object_id: this.getProvider(),
						adverb: "no_height"
					})
				}
			}, constructor: function () {
				d.apply(this, arguments), this.origin = p(this.settings.adUrl), this._reportOnceHistory = {}
			}, init: function () {
				if (!j(a) && (this.settings.forum = n(q(this.settings.adUrl)).shortname, this.settings.forum)) {
					var b = this.settings.discovery, e = 0 === a.location.href.indexOf(c.apps.home);
					(e || !b || !b.disable_all && !b.disable_promoted) && (this._reportOnce({
						verb: "call",
						object_type: "provider",
						object_id: this.getProvider(),
						adjective: 1
					}, "call"), d.prototype.init.call(this))
				}
			}, getProvider: function () {
				if (this._provider)return this._provider;
				var a = this.settings.adUrl.match(/provider=(\w+)/);
				return a && (this._provider = a[1]), this._provider
			}, getUrl: function () {
				var b = this.settings;
				return o(b.adUrl, {
					anchorColor: l(b.anchorColor),
					colorScheme: b.colorScheme,
					sourceUrl: a.document.location.href,
					typeface: b.typeface,
					canonicalUrl: b.canonicalUrl,
					disqus_version: "d6df298"
				})
			}, bindViewEvents: function () {
				if (!this._viewEventsBound) {
					this._viewEventsBound = !0, h.bindWindowEvents(!0);
					var a = this, b = function (b, c) {
						a.postMessageDirect({event: b, percentViewable: c})
					}, c = 1e3, d = new k(function () {
						a.trigger("view:iab"), b("view:iab")
					}, c), e = !1;
					this.listenTo(h({el: this.frame.elem}), {
						enter: function () {
							a.trigger("view:enter"), b("view:enter")
						}, exit: function () {
							b("view:exit"), e && (e = !1, b("view:50out"), d.clear())
						}, visible: function (a, c) {
							var f = i.visiblePercent(c, a.offset());
							f >= 50 && !e ? (e = !0, b("view:50in"), d.start()) : 50 > f && e && (e = !1, b("view:50out"), d.clear()), b("view", f)
						}
					})
				}
			}, postMessageDirect: function (a) {
				this.frame.requiresWindow(function (a) {
					var b = f.stringify(m({}, a, {space: "disqus"}));
					u.postMessage(this.window, b, this.origin), u.postMessage(this.window, "disqus." + a.event, this.origin)
				})(a)
			}, _report: function (b) {
				var c = this.settings, d = this.getProvider(), e = v[d];
				b.forum_id = c.forumId || this.forumId, t.reportJester(m({
					imp: c.impressionId,
					experiment: c.experimentName,
					variant: c.experimentVariant,
					service: c.experimentService,
					bin: "embed:promoted_discovery:" + c.experimentService + ":" + c.experimentName + ":" + c.experimentVariant,
					area: c.placement,
					product: "embed",
					forum: c.forum,
					zone: "thread",
					version: t.getLoaderVersionFromUrl("//a.disquscdn.com/next/embed/lounge.load.74622dc19b1055d1af48a4f378c4b79b.js"),
					page_url: a.document.location.href,
					page_referrer: a.document.referrer,
					object_type: "advertisement",
					object_id: "[" + e + "]",
					provider: d,
					advertisement_id: e,
					ad_product_name: "iab_display",
					ad_product_layout: "iab_display",
					event: "activity",
					section: "default"
				}, b))
			}, _reportOnce: function (a, b) {
				this._reportOnceHistory[b] || (this._report(a), this._reportOnceHistory[b] = !0)
			}, getFrameSettings: function () {
				var a = d.prototype.getFrameSettings.call(this);
				return a.insertBeforeEl = this.settings.insertBeforeEl, a.insertAfterEl = this.settings.insertAfterEl, a
			}
		}), x = function (a) {
			return new w(a)
		};
		return {Ads: x}
	}(), Y = function () {
		var a = W, b = F, c = I, d = D, e = da, f = H, g = c.extend({
			events: {
				"frame:resize": function (a) {
					var b = a.height + "px";
					this.frame.setInlineStyle({height: b, "min-height": b, "max-height": b})
				}
			}, getFrameSettings: function () {
				var c = {
					container: this.settings.container,
					contents: this.settings.engageLiteHTML
				}, d = this.settings.engageLiteURL;
				return d && (d = b.ensureHttpBasedProtocol(d, f), c.origin = a.getOrigin(d), c.target = d), c
			}, getFrame: function () {
				var a = this.getFrameSettings(), b = a.target ? e.Channel : d;
				return new b(a)
			}
		}), h = function (a) {
			return new g(a)
		};
		return h
	}(), ha = function (b) {
		var c = e, d = f, h = g, i = y.HostConfig, j = da, k = z, l = L, m = X, n = Y, o = new i(a);
		b.configAdapter = o;
		var p = [], q = !1, r = b.removeDisqusLink = function () {
			var b = a.document;
			if (b.getElementsByClassName) {
				if ("complete" !== b.readyState)return j.addEvent(a, "load", r);
				var c = b.getElementsByClassName("dsq-brlink"), d = c && c.length && c[0];
				d && d.parentNode.removeChild(d)
			}
		};
		b.loadEmbed = function (a) {
			if (p.length)return t({reload: !0}), k.log("Use DISQUS.reset instead of reloading embed.js please."), void k.log("See https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites");
			o.configurator = a;
			var c = o.toJSON();
			q || (c.container.innerHTML = "", q = !0), b.loadApps(c), b.removeDisqusLink()
		};
		var s = function (a) {
			var b = l.Lounge(c({discoveryDisabled: a.topPlacementUrl || a.bottomPlacementUrl}, a));
			p.push(b), b.init();
			var d = function (a) {
				b.whenFullyVisible(a)
			}, e = null;
			if (a.topPlacementUrl && (e = m.Ads(c({
					adUrl: a.topPlacementUrl,
					placement: "top"
				}, a, {insertBeforeEl: b.frame.elem})), p.push(e), d(function () {
					e.init()
				})), a.bottomPlacementUrl) {
				var f = m.Ads(c({adUrl: a.bottomPlacementUrl, placement: "bottom"}, a, {insertAfterEl: b.frame.elem}));
				p.push(f), d(function () {
					null === e ? f.init() : f.listenToOnce(e, "frame:ready", function () {
						f.init()
					})
				})
			}
		};
		b.loadApps = function (a) {
			var b = a.engageLiteURL;
			if (b && (b = b.replace(/__disqus_identifier__/g, encodeURIComponent(a.identifier || "")).replace(/__disqus_url__/g, encodeURIComponent(a.url || ""))), a.engageLiteHTML || b) {
				var e = new n(c({}, a, {engageLiteURL: b}));
				p.push(e), e.init(), e.on("frame:click", d(function () {
					e.destroy(), s(a)
				}))
			} else s(a)
		};
		var t = b.reset = function (a) {
			a = a || {};
			for (var c = p.pop(); c;)c.triggeredSlowEvent && c.state !== c.constructor.states.RUNNING && h.logStat("reset_embed.slow"), c.destroy(), c = p.pop();
			a.reload && b.loadEmbed(a.config)
		};
		return b
	}(ha), Z = function () {
		var b = a.DISQUS || {}, c = ca;
		b.reset || (b.reset = ha.reset), b.request || (b.request = {}), b.request.get || (b.request.get = function (a, b, d) {
			c(a, b, d)
		}), b.host || (b.host = {}), b.host._loadEmbed || (b.host._loadEmbed = ha.loadEmbed), a.DISQUS = b
	}()
}(this), this.DISQUS.host._loadEmbed();