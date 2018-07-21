if (function(t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
  }(function(t) {
    function e(e) {
      return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipetp.defaults, e), this.each(function() {
        var n = t(this)
          , r = n.data(C);
        r || (r = new i(this, e), n.data(C, r))
      })
    }

    function i(e, i) {
      function n(e) {
        if (!(de() || t(e.target).closest(i.excludedElements, Ye).length > 0)) {
          var n, r = e.originalEvent ? e.originalEvent : e
            , s = r.touches
            , a = s ? s[0] : r;
          return We = b, s ? qe = s.length : e.preventDefault(), Ee = 0, Fe = null, He = null, De = 0, Ne = 0, je = 0, Be = 1, Xe = 0, Ue = fe(), Ve = _e(), oe(), !s || qe === i.fingers || i.fingers === y || V() ? (ue(0, a), Ge = ke(), 2 == qe && (ue(1, s[1]), Ne = je = we(Ue[0].start, Ue[1].start)), (i.swipeStatus || i.pinchStatus) && (n = E(r, We))) : n = !1, n === !1 ? (We = P, E(r, We), n) : (i.hold && (ti = setTimeout(t.proxy(function() {
            Ye.trigger("hold", [r.target]), i.hold && (n = i.hold.call(Ye, r, r.target))
          }, this), i.longTapThreshold)), he(!0), null)
        }
      }

      function A(t) {
        var e = t.originalEvent ? t.originalEvent : t;
        if (We !== T && We !== P && !le()) {
          var n, r = e.touches
            , s = r ? r[0] : e
            , a = ce(s);
          if (Qe = ke(), r && (qe = r.length), i.hold && clearTimeout(ti), We = x, 2 == qe && (0 == Ne ? (ue(1, r[1]), Ne = je = we(Ue[0].start, Ue[1].start)) : (ce(r[1]), je = we(Ue[0].end, Ue[1].end), He = xe(Ue[0].end, Ue[1].end)), Be = be(Ne, je), Xe = Math.abs(Ne - je)), qe === i.fingers || i.fingers === y || !r || V()) {
            if (Fe = Se(a.start, a.end), X(t, Fe), Ee = Te(a.start, a.end), De = ye(), ge(Fe, Ee), (i.swipeStatus || i.pinchStatus) && (n = E(e, We)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
              var o = !0;
              if (i.triggerOnTouchLeave) {
                var l = Oe(this);
                o = Ce(a.end, l)
              }!i.triggerOnTouchEnd && o ? We = z(x) : i.triggerOnTouchLeave && !o && (We = z(T)), (We == P || We == T) && E(e, We)
            }
          } else We = P, E(e, We);
          n === !1 && (We = P, E(e, We))
        }
      }

      function L(t) {
        var e = t.originalEvent ? t.originalEvent : t
          , n = e.touches;
        return n && n.length ? (ae(), !0) : (le() && (qe = $e), Qe = ke(), De = ye(), N() || !D() ? (We = P, E(e, We)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && We === x ? (t.preventDefault(), We = T, E(e, We)) : !i.triggerOnTouchEnd && Z() ? (We = T, F(e, We, f)) : We === x && (We = P, E(e, We)), he(!1), null)
      }

      function R() {
        qe = 0, Qe = 0, Ge = 0, Ne = 0, je = 0, Be = 1, oe(), he(!1)
      }

      function M(t) {
        var e = t.originalEvent ? t.originalEvent : t;
        i.triggerOnTouchLeave && (We = z(T), E(e, We))
      }

      function I() {
        Ye.unbind(Le, n), Ye.unbind(ze, R), Ye.unbind(Re, A), Ye.unbind(Me, L), Ie && Ye.unbind(Ie, M), he(!1)
      }

      function z(t) {
        var e = t
          , n = B()
          , r = D()
          , s = N();
        return !n || s ? e = P : !r || t != x || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !r && t == T && i.triggerOnTouchLeave && (e = P) : e = T, e
      }

      function E(t, e) {
        var i, n = t.touches;
        return U() || q() || Y() || V() ? ((U() || q()) && (i = F(t, e, c)), (Y() || V()) && i !== !1 && (i = F(t, e, p))) : re() && i !== !1 ? i = F(t, e, g) : se() && i !== !1 ? i = F(t, e, m) : ne() && i !== !1 && (i = F(t, e, f)), e === P && R(t), e === T && (n ? n.length || R(t) : R(t)), i
      }

      function F(e, n, h) {
        var u;
        if (h == c) {
          if (Ye.trigger("swipeStatus", [n, Fe || null, Ee || 0, De || 0, qe, Ue]), i.swipeStatus && (u = i.swipeStatus.call(Ye, e, n, Fe || null, Ee || 0, De || 0, qe, Ue), u === !1)) return !1;
          if (n == T && W()) {
            if (Ye.trigger("swipe", [Fe, Ee, De, qe, Ue]), i.swipe && (u = i.swipe.call(Ye, e, Fe, Ee, De, qe, Ue), u === !1)) return !1;
            switch (Fe) {
              case r:
                Ye.trigger("swipeLeft", [Fe, Ee, De, qe, Ue]), i.swipeLeft && (u = i.swipeLeft.call(Ye, e, Fe, Ee, De, qe, Ue));
                break;
              case s:
                Ye.trigger("swipeRight", [Fe, Ee, De, qe, Ue]), i.swipeRight && (u = i.swipeRight.call(Ye, e, Fe, Ee, De, qe, Ue));
                break;
              case a:
                Ye.trigger("swipeUp", [Fe, Ee, De, qe, Ue]), i.swipeUp && (u = i.swipeUp.call(Ye, e, Fe, Ee, De, qe, Ue));
                break;
              case o:
                Ye.trigger("swipeDown", [Fe, Ee, De, qe, Ue]), i.swipeDown && (u = i.swipeDown.call(Ye, e, Fe, Ee, De, qe, Ue))
            }
          }
        }
        if (h == p) {
          if (Ye.trigger("pinchStatus", [n, He || null, Xe || 0, De || 0, qe, Be, Ue]), i.pinchStatus && (u = i.pinchStatus.call(Ye, e, n, He || null, Xe || 0, De || 0, qe, Be, Ue), u === !1)) return !1;
          if (n == T && H()) switch (He) {
            case l:
              Ye.trigger("pinchIn", [He || null, Xe || 0, De || 0, qe, Be, Ue]), i.pinchIn && (u = i.pinchIn.call(Ye, e, He || null, Xe || 0, De || 0, qe, Be, Ue));
              break;
            case d:
              Ye.trigger("pinchOut", [He || null, Xe || 0, De || 0, qe, Be, Ue]), i.pinchOut && (u = i.pinchOut.call(Ye, e, He || null, Xe || 0, De || 0, qe, Be, Ue))
          }
        }
        return h == f ? (n === P || n === T) && (clearTimeout(Je), clearTimeout(ti), $() && !te() ? (Ke = ke(), Je = setTimeout(t.proxy(function() {
          Ke = null, Ye.trigger("tap", [e.target]), i.tap && (u = i.tap.call(Ye, e, e.target))
        }, this), i.doubleTapThreshold)) : (Ke = null, Ye.trigger("tap", [e.target]), i.tap && (u = i.tap.call(Ye, e, e.target)))) : h == g ? (n === P || n === T) && (clearTimeout(Je), Ke = null, Ye.trigger("doubletap", [e.target]), i.doubleTap && (u = i.doubleTap.call(Ye, e, e.target))) : h == m && (n === P || n === T) && (clearTimeout(Je), Ke = null, Ye.trigger("longtap", [e.target]), i.longTap && (u = i.longTap.call(Ye, e, e.target))), u
      }

      function D() {
        var t = !0;
        return null !== i.threshold && (t = Ee >= i.threshold), t
      }

      function N() {
        var t = !1;
        return null !== i.cancelThreshold && null !== Fe && (t = me(Fe) - Ee >= i.cancelThreshold), t
      }

      function j() {
        return null !== i.pinchThreshold ? Xe >= i.pinchThreshold : !0
      }

      function B() {
        var t;
        return t = i.maxTimeThreshold && De >= i.maxTimeThreshold ? !1 : !0
      }

      function X(t, e) {
        if (i.preventDefaultEvents !== !1)
          if (i.allowPageScroll === h) t.preventDefault();
          else {
            var n = i.allowPageScroll === u;
            switch (e) {
              case r:
                (i.swipeLeft && n || !n && i.allowPageScroll != _) && t.preventDefault();
                break;
              case s:
                (i.swipeRight && n || !n && i.allowPageScroll != _) && t.preventDefault();
                break;
              case a:
                (i.swipeUp && n || !n && i.allowPageScroll != v) && t.preventDefault();
                break;
              case o:
                (i.swipeDown && n || !n && i.allowPageScroll != v) && t.preventDefault()
            }
          }
      }

      function H() {
        var t = G()
          , e = Q()
          , i = j();
        return t && e && i
      }

      function V() {
        return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
      }

      function Y() {
        return !(!H() || !V())
      }

      function W() {
        var t = B()
          , e = D()
          , i = G()
          , n = Q()
          , r = N()
          , s = !r && n && i && e && t;
        return s
      }

      function q() {
        return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
      }

      function U() {
        return !(!W() || !q())
      }

      function G() {
        return qe === i.fingers || i.fingers === y || !S
      }

      function Q() {
        return 0 !== Ue[0].end.x
      }

      function Z() {
        return !!i.tap
      }

      function $() {
        return !!i.doubleTap
      }

      function K() {
        return !!i.longTap
      }

      function J() {
        if (null == Ke) return !1;
        var t = ke();
        return $() && t - Ke <= i.doubleTapThreshold
      }

      function te() {
        return J()
      }

      function ee() {
        return (1 === qe || !S) && (isNaN(Ee) || Ee < i.threshold)
      }

      function ie() {
        return De > i.longTapThreshold && w > Ee
      }

      function ne() {
        return !(!ee() || !Z())
      }

      function re() {
        return !(!J() || !$())
      }

      function se() {
        return !(!ie() || !K())
      }

      function ae() {
        Ze = ke(), $e = event.touches.length + 1
      }

      function oe() {
        Ze = 0, $e = 0
      }

      function le() {
        var t = !1;
        if (Ze) {
          var e = ke() - Ze;
          e <= i.fingerReleaseThreshold && (t = !0)
        }
        return t
      }

      function de() {
        return !(Ye.data(C + "_intouch") !== !0)
      }

      function he(t) {
        t === !0 ? (Ye.bind(Re, A), Ye.bind(Me, L), Ie && Ye.bind(Ie, M)) : (Ye.unbind(Re, A, !1), Ye.unbind(Me, L, !1), Ie && Ye.unbind(Ie, M, !1)), Ye.data(C + "_intouch", t === !0)
      }

      function ue(t, e) {
        var i = void 0 !== e.identifier ? e.identifier : 0;
        return Ue[t].identifier = i, Ue[t].start.x = Ue[t].end.x = e.pageX || e.clientX, Ue[t].start.y = Ue[t].end.y = e.pageY || e.clientY, Ue[t]
      }

      function ce(t) {
        var e = void 0 !== t.identifier ? t.identifier : 0
          , i = pe(e);
        return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
      }

      function pe(t) {
        for (var e = 0; e < Ue.length; e++)
          if (Ue[e].identifier == t) return Ue[e]
      }

      function fe() {
        for (var t = [], e = 0; 5 >= e; e++) t.push({
          start: {
            x: 0
            , y: 0
          }
          , end: {
            x: 0
            , y: 0
          }
          , identifier: 0
        });
        return t
      }

      function ge(t, e) {
        e = Math.max(e, me(t)), Ve[t].distance = e
      }

      function me(t) {
        return Ve[t] ? Ve[t].distance : void 0
      }

      function _e() {
        var t = {};
        return t[r] = ve(r), t[s] = ve(s), t[a] = ve(a), t[o] = ve(o), t
      }

      function ve(t) {
        return {
          direction: t
          , distance: 0
        }
      }

      function ye() {
        return Qe - Ge
      }

      function we(t, e) {
        var i = Math.abs(t.x - e.x)
          , n = Math.abs(t.y - e.y);
        return Math.round(Math.sqrt(i * i + n * n))
      }

      function be(t, e) {
        var i = e / t * 1;
        return i.toFixed(2)
      }

      function xe() {
        return 1 > Be ? d : l
      }

      function Te(t, e) {
        return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
      }

      function Pe(t, e) {
        var i = t.x - e.x
          , n = e.y - t.y
          , r = Math.atan2(n, i)
          , s = Math.round(180 * r / Math.PI);
        return 0 > s && (s = 360 - Math.abs(s)), s
      }

      function Se(t, e) {
        var i = Pe(t, e);
        return 45 >= i && i >= 0 ? r : 360 >= i && i >= 315 ? r : i >= 135 && 225 >= i ? s : i > 45 && 135 > i ? o : a
      }

      function ke() {
        var t = new Date;
        return t.getTime()
      }

      function Oe(e) {
        e = t(e);
        var i = e.offset()
          , n = {
            left: i.left
            , right: i.left + e.outerWidth()
            , top: i.top
            , bottom: i.top + e.outerHeight()
          };
        return n
      }

      function Ce(t, e) {
        return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
      }
      var Ae = S || O || !i.fallbackToMouseEvents
        , Le = Ae ? O ? k ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
        , Re = Ae ? O ? k ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
        , Me = Ae ? O ? k ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
        , Ie = Ae ? null : "mouseleave"
        , ze = O ? k ? "MSPointerCancel" : "pointercancel" : "touchcancel"
        , Ee = 0
        , Fe = null
        , De = 0
        , Ne = 0
        , je = 0
        , Be = 1
        , Xe = 0
        , He = 0
        , Ve = null
        , Ye = t(e)
        , We = "start"
        , qe = 0
        , Ue = null
        , Ge = 0
        , Qe = 0
        , Ze = 0
        , $e = 0
        , Ke = 0
        , Je = null
        , ti = null;
      try {
        Ye.bind(Le, n), Ye.bind(ze, R)
      } catch (ei) {
        t.error("events not supported " + Le + "," + ze + " on jQuery.swipetp")
      }
      this.enable = function() {
        return Ye.bind(Le, n), Ye.bind(ze, R), Ye
      }, this.disable = function() {
        return I(), Ye
      }, this.destroy = function() {
        I(), Ye.data(C, null), Ye = null
      }, this.option = function(e, n) {
        if (void 0 !== i[e]) {
          if (void 0 === n) return i[e];
          i[e] = n
        } else t.error("Option " + e + " does not exist on jQuery.swipetp.options");
        return null
      }
    }
    var n = "1.6.9"
      , r = "left"
      , s = "right"
      , a = "up"
      , o = "down"
      , l = "in"
      , d = "out"
      , h = "none"
      , u = "auto"
      , c = "swipe"
      , p = "pinch"
      , f = "tap"
      , g = "doubletap"
      , m = "longtap"
      , _ = "horizontal"
      , v = "vertical"
      , y = "all"
      , w = 10
      , b = "start"
      , x = "move"
      , T = "end"
      , P = "cancel"
      , S = "ontouchstart" in window
      , k = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled
      , O = window.navigator.pointerEnabled || window.navigator.msPointerEnabled
      , C = "TouchSwipe"
      , A = {
        fingers: 1
        , threshold: 75
        , cancelThreshold: null
        , pinchThreshold: 20
        , maxTimeThreshold: null
        , fingerReleaseThreshold: 250
        , longTapThreshold: 500
        , doubleTapThreshold: 200
        , swipe: null
        , swipeLeft: null
        , swipeRight: null
        , swipeUp: null
        , swipeDown: null
        , swipeStatus: null
        , pinchIn: null
        , pinchOut: null
        , pinchStatus: null
        , click: null
        , tap: null
        , doubleTap: null
        , longTap: null
        , hold: null
        , triggerOnTouchEnd: !0
        , triggerOnTouchLeave: !1
        , allowPageScroll: "auto"
        , fallbackToMouseEvents: !0
        , excludedElements: "label, button, input, select, textarea, a, .noSwipe"
        , preventDefaultEvents: !0
      };
    t.fn.swipetp = function(i) {
      var n = t(this)
        , r = n.data(C);
      if (r && "string" == typeof i) {
        if (r[i]) return r[i].apply(this, Array.prototype.slice.call(arguments, 1));
        t.error("Method " + i + " does not exist on jQuery.swipetp")
      } else if (!(r || "object" != typeof i && i)) return e.apply(this, arguments);
      return n
    }, t.fn.swipetp.version = n, t.fn.swipetp.defaults = A, t.fn.swipetp.phases = {
      PHASE_START: b
      , PHASE_MOVE: x
      , PHASE_END: T
      , PHASE_CANCEL: P
    }, t.fn.swipetp.directions = {
      LEFT: r
      , RIGHT: s
      , UP: a
      , DOWN: o
      , IN: l
      , OUT: d
    }, t.fn.swipetp.pageScroll = {
      NONE: h
      , HORIZONTAL: _
      , VERTICAL: v
      , AUTO: u
    }, t.fn.swipetp.fingers = {
      ONE: 1
      , TWO: 2
      , THREE: 3
      , ALL: y
    }
  }), "undefined" == typeof console) {
  var console = {};
  console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (1 == window.tplogs) try {
  console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
  console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (e) {}! function(t, e) {
  "use strict";
  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
  if (!i.TweenLite) {
    var n, r, s, a, o, l = function(t) {
        var e, n = t.split(".")
          , r = i;
        for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
        return r
      }
      , d = l("com.greensock")
      , h = 1e-10
      , u = function(t) {
        var e, i = []
          , n = t.length;
        for (e = 0; e !== n; i.push(t[e++]));
        return i
      }
      , c = function() {}
      , p = function() {
        var t = Object.prototype.toString
          , e = t.call([]);
        return function(i) {
          return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
        }
      }()
      , f = {}
      , g = function(n, r, s, a) {
        this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = s;
        var o = [];
        this.check = function(d) {
          for (var h, u, c, p, m = r.length, _ = m; --m > -1;)(h = f[r[m]] || new g(r[m], [])).gsClass ? (o[m] = h.gsClass, _--) : d && h.sc.push(this);
          if (0 === _ && s)
            for (u = ("com.greensock." + n).split("."), c = u.pop(), p = l(u.join("."))[c] = this.gsClass = s.apply(s, o), a && (i[c] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                return p
              }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
        }, this.check(!0)
      }
      , m = t._gsDefine = function(t, e, i, n) {
        return new g(t, e, i, n)
      }
      , _ = d._class = function(t, e, i) {
        return e = e || function() {}, m(t, [], function() {
          return e
        }, i), e
      };
    m.globals = i;
    var v = [0, 0, 1, 1]
      , y = []
      , w = _("easing.Ease", function(t, e, i, n) {
        this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
      }, !0)
      , b = w.map = {}
      , x = w.register = function(t, e, i, n) {
        for (var r, s, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
          for (s = l[h], r = n ? _("easing." + s, null, !0) : d.easing[s] || {}, a = u.length; --a > -1;) o = u[a], b[s + "." + o] = b[o + s] = r[o] = t.getRatio ? t : t[o] || new t
      };
    for (s = w.prototype, s._calcEnd = !1, s.getRatio = function(t) {
        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
        var e = this._type
          , i = this._power
          , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
      }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, x(new w(null, null, 1, r), s, "easeOut", !0), x(new w(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), x(new w(null, null, 3, r), s, "easeInOut");
    b.linear = d.easing.Linear.easeIn, b.swing = d.easing.Quad.easeInOut;
    var T = _("events.EventDispatcher", function(t) {
      this._listeners = {}, this._eventTarget = t || this
    });
    s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
      r = r || 0;
      var s, l, d = this._listeners[t]
        , h = 0;
      for (null == d && (this._listeners[t] = d = []), l = d.length; --l > -1;) s = d[l], s.c === e && s.s === i ? d.splice(l, 1) : 0 === h && r > s.pr && (h = l + 1);
      d.splice(h, 0, {
        c: e
        , s: i
        , up: n
        , pr: r
      }), this !== a || o || a.wake()
    }, s.removeEventListener = function(t, e) {
      var i, n = this._listeners[t];
      if (n)
        for (i = n.length; --i > -1;)
          if (n[i].c === e) return void n.splice(i, 1)
    }, s.dispatchEvent = function(t) {
      var e, i, n, r = this._listeners[t];
      if (r)
        for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
          type: t
          , target: i
        }) : n.c.call(n.s || i))
    };
    var P = t.requestAnimationFrame
      , S = t.cancelAnimationFrame
      , k = Date.now || function() {
        return (new Date).getTime()
      }
      , O = k();
    for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !P;) P = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
    _("Ticker", function(t, e) {
      var i, n, r, s, l, d = this
        , u = k()
        , p = e !== !1 && P
        , f = 500
        , g = 33
        , m = "tick"
        , _ = function(t) {
          var e, a, o = k() - O;
          o > f && (u += o - g), O += o, d.time = (O - u) / 1e3, e = d.time - l, (!i || e > 0 || t === !0) && (d.frame++, l += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(_)), a && d.dispatchEvent(m)
        };
      T.call(d), d.time = d.frame = 0, d.tick = function() {
        _(!0)
      }, d.lagSmoothing = function(t, e) {
        f = t || 1 / h, g = Math.min(e, f, 0)
      }, d.sleep = function() {
        null != r && (p && S ? S(r) : clearTimeout(r), n = c, r = null, d === a && (o = !1))
      }, d.wake = function() {
        null !== r ? d.sleep() : d.frame > 10 && (O = k() - f + 5), n = 0 === i ? c : p && P ? P : function(t) {
          return setTimeout(t, 0 | 1e3 * (l - d.time) + 1)
        }, d === a && (o = !0), _(2)
      }, d.fps = function(t) {
        return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void d.wake()) : i
      }, d.useRAF = function(t) {
        return arguments.length ? (d.sleep(), p = t, void d.fps(i)) : p
      }, d.fps(t), setTimeout(function() {
        p && 5 > d.frame && d.useRAF(!1)
      }, 1500)
    }), s = d.Ticker.prototype = new d.events.EventDispatcher, s.constructor = d.Ticker;
    var C = _("core.Animation", function(t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, V) {
        o || a.wake();
        var i = this.vars.useFrames ? H : V;
        i.add(this, i._time), this.vars.paused && this.paused(!0)
      }
    });
    a = C.ticker = new d.Ticker, s = C.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
    var A = function() {
      o && k() - O > 2e3 && a.wake(), setTimeout(A, 2e3)
    };
    A(), s.play = function(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, s.pause = function(t, e) {
      return null != t && this.seek(t, e), this.paused(!0)
    }, s.resume = function(t, e) {
      return null != t && this.seek(t, e), this.paused(!1)
    }, s.seek = function(t, e) {
      return this.totalTime(Number(t), e !== !1)
    }, s.restart = function(t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, s.reverse = function(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, s.render = function() {}, s.invalidate = function() {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
    }, s.isActive = function() {
      var t, e = this._timeline
        , i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
    }, s._enabled = function(t, e) {
      return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, s._kill = function() {
      return this._enabled(!1, !1)
    }, s.kill = function(t, e) {
      return this._kill(t, e), this
    }, s._uncache = function(t) {
      for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
      return this
    }, s._swapSelfInParams = function(t) {
      for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
      return i
    }, s._callback = function(t) {
      var e = this.vars;
      e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
    }, s.eventCallback = function(t, e, i, n) {
      if ("on" === (t || "").substr(0, 2)) {
        var r = this.vars;
        if (1 === arguments.length) return r[t];
        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
      }
      return this
    }, s.delay = function(t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, s.duration = function(t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, s.totalDuration = function(t) {
      return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, s.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, s.totalTime = function(t, e, i) {
      if (o || a.wake(), !arguments.length) return this._totalTime;
      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var n = this._totalDuration
            , r = this._timeline;
          if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
        }
        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && W())
      }
      return this
    }, s.progress = s.totalProgress = function(t, e) {
      return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
    }, s.startTime = function(t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, s.endTime = function(t) {
      return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
    }, s.timeScale = function(t) {
      if (!arguments.length) return this._timeScale;
      if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime
          , i = e || 0 === e ? e : this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t
      }
      return this._timeScale = t, this._uncache(!1)
    }, s.reversed = function(t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
    }, s.paused = function(t) {
      if (!arguments.length) return this._paused;
      var e, i, n = this._timeline;
      return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
    };
    var L = _("core.SimpleTimeline", function(t) {
      C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    s = L.prototype = new C, s.constructor = L, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
      var i, n;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
        for (n = t._startTime; i && i._startTime > n;) i = i._prev;
      return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
    }, s._remove = function(t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
    }, s.render = function(t, e, i) {
      var n, r = this._first;
      for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
    }, s.rawTime = function() {
      return o || a.wake(), this._totalTime
    };
    var R = _("TweenLite", function(e, i, n) {
        if (C.call(this, i, n), this.render = R.prototype.render, null == e) throw "Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : R.selector(e) || e;
        var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
          , l = this.vars.overwrite;
        if (this._overwrite = l = null == l ? X[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
          for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(s))) : (this._siblings[r] = q(s, this, !1), 1 === l && this._siblings[r].length > 1 && G(s, this, null, 1, this._siblings[r])) : (s = a[r--] = R.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
        else this._propLookup = {}, this._siblings = q(e, this, !1), 1 === l && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
      }, !0)
      , M = function(e) {
        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
      }
      , I = function(t, e) {
        var i, n = {};
        for (i in t) B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!D[i] || D[i] && D[i]._autoCSS) || (n[i] = t[i], delete t[i]);
        t.css = n
      };
    s = R.prototype = new C, s.constructor = R, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, R.version = "1.17.0", R.defaultEase = s._ease = new w(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = a, R.autoSleep = 120, R.lagSmoothing = function(t, e) {
      a.lagSmoothing(t, e)
    }, R.selector = t.$ || t.jQuery || function(e) {
      var i = t.$ || t.jQuery;
      return i ? (R.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    };
    var z = []
      , E = {}
      , F = R._internals = {
        isArray: p
        , isSelector: M
        , lazyTweens: z
      }
      , D = R._plugins = {}
      , N = F.tweenLookup = {}
      , j = 0
      , B = F.reservedProps = {
        ease: 1
        , delay: 1
        , overwrite: 1
        , onComplete: 1
        , onCompleteParams: 1
        , onCompleteScope: 1
        , useFrames: 1
        , runBackwards: 1
        , startAt: 1
        , onUpdate: 1
        , onUpdateParams: 1
        , onUpdateScope: 1
        , onStart: 1
        , onStartParams: 1
        , onStartScope: 1
        , onReverseComplete: 1
        , onReverseCompleteParams: 1
        , onReverseCompleteScope: 1
        , onRepeat: 1
        , onRepeatParams: 1
        , onRepeatScope: 1
        , easeParams: 1
        , yoyo: 1
        , immediateRender: 1
        , repeat: 1
        , repeatDelay: 1
        , data: 1
        , paused: 1
        , reversed: 1
        , autoCSS: 1
        , lazy: 1
        , onOverwrite: 1
        , callbackScope: 1
      }
      , X = {
        none: 0
        , all: 1
        , auto: 2
        , concurrent: 3
        , allOnStart: 4
        , preexisting: 5
        , "true": 1
        , "false": 0
      }
      , H = C._rootFramesTimeline = new L
      , V = C._rootTimeline = new L
      , Y = 30
      , W = F.lazyRender = function() {
        var t, e = z.length;
        for (E = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
        z.length = 0
      };
    V._startTime = a.time, H._startTime = a.frame, V._active = H._active = !0, setTimeout(W, 1), C._updateRoot = R.render = function() {
      var t, e, i;
      if (z.length && W(), V.render((a.time - V._startTime) * V._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), z.length && W(), a.frame >= Y) {
        Y = a.frame + (parseInt(R.autoSleep, 10) || 120);
        for (i in N) {
          for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
          0 === e.length && delete N[i]
        }
        if (i = V._first, (!i || i._paused) && R.autoSleep && !H._first && 1 === a._listeners.tick.length) {
          for (; i && i._paused;) i = i._next;
          i || a.sleep()
        }
      }
    }, a.addEventListener("tick", C._updateRoot);
    var q = function(t, e, i) {
        var n, r, s = t._gsTweenID;
        if (N[s || (t._gsTweenID = s = "t" + j++)] || (N[s] = {
            target: t
            , tweens: []
          }), e && (n = N[s].tweens, n[r = n.length] = e, i))
          for (; --r > -1;) n[r] === e && n.splice(r, 1);
        return N[s].tweens
      }
      , U = function(t, e, i, n) {
        var r, s, a = t.vars.onOverwrite;
        return a && (r = a(t, e, i, n)), a = R.onOverwrite, a && (s = a(t, e, i, n)), r !== !1 && s !== !1
      }
      , G = function(t, e, i, n, r) {
        var s, a, o, l;
        if (1 === n || n >= 4) {
          for (l = r.length, s = 0; l > s; s++)
            if ((o = r[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
            else if (5 === n) break;
          return a
        }
        var d, u = e._startTime + h
          , c = []
          , p = 0
          , f = 0 === e._duration;
        for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (d = d || Q(e, 0, f), 0 === Q(o, d, f) && (c[p++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (c[p++] = o)));
        for (s = p; --s > -1;)
          if (o = c[s], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
            if (2 !== n && !U(o, e)) continue;
            o._enabled(!1, !1) && (a = !0)
          }
        return a
      }
      , Q = function(t, e, i) {
        for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
          if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
          n = n._timeline
        }
        return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
      };
    s._init = function() {
      var t, e, i, n, r, s = this.vars
        , a = this._overwrittenProps
        , o = this._duration
        , l = !!s.immediateRender
        , d = s.ease;
      if (s.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
        for (n in s.startAt) r[n] = s.startAt[n];
        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = R.to(this.target, 0, r), l)
          if (this._time > 0) this._startAt = null;
          else if (0 !== o) return
      } else if (s.runBackwards && 0 !== o)
        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
        else {
          0 !== this._time && (l = !1), i = {};
          for (n in s) B[n] && "autoCSS" !== n || (i[n] = s[n]);
          if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = R.to(this.target, 0, i), l) {
            if (0 === this._time) return
          } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
        }
      if (this._ease = d = d ? d instanceof w ? d : "function" == typeof d ? new w(d, s.easeParams) : b[d] || R.defaultEase : R.defaultEase, s.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
        for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
      else e = this._initProps(this.target, this._propLookup, this._siblings, a);
      if (e && R._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
        for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
      this._onUpdate = s.onUpdate, this._initted = !0
    }, s._initProps = function(e, i, n, r) {
      var s, a, o, l, d, h;
      if (null == e) return !1;
      E[e._gsTweenID] && W(), this.vars.css || e.style && e !== t && e.nodeType && D.css && this.vars.autoCSS !== !1 && I(this.vars, e);
      for (s in this.vars) {
        if (h = this.vars[s], B[s]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
        else if (D[s] && (l = new D[s])._onInitTween(e, this.vars[s], this)) {
          for (this._firstPT = d = {
              _next: this._firstPT
              , t: l
              , p: "setRatio"
              , s: 0
              , c: 1
              , f: !0
              , n: s
              , pg: !0
              , pr: l._priority
            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
          (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
        } else this._firstPT = i[s] = d = {
          _next: this._firstPT
          , t: e
          , p: s
          , f: "function" == typeof e[s]
          , n: s
          , pg: !1
          , pr: 0
        }, d.s = d.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), d.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - d.s || 0;
        d && d._next && (d._next._prev = d)
      }
      return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && G(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0), o)
    }, s.render = function(t, e, i) {
      var n, r, s, a, o = this._time
        , l = this._duration
        , d = this._rawPrevTime;
      if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > d || d === h && "isPause" !== this.data) && d !== t && (i = !0, d > h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || d === t ? t : h);
      else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && d > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (d !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || d === t ? t : h)), this._initted || (i = !0);
      else if (this._totalTime = this._time = t, this._easeType) {
        var u = t / l
          , c = this._easeType
          , p = this._easePower;
        (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
      } else this.ratio = this._ease.getRatio(t / l);
      if (this._time !== o || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = d, z.push(this), void(this._lazy = [t, e]);
          this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
        }
        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
        this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0))
      }
    }, s._kill = function(t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
      var n, r, s, a, o, l, d, h, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
      if ((p(e) || M(e)) && "number" != typeof e[0])
        for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
      else {
        if (this._targets) {
          for (n = this._targets.length; --n > -1;)
            if (e === this._targets[n]) {
              o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
              break
            }
        } else {
          if (e !== this.target) return !1;
          o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
        }
        if (o) {
          if (d = t || o, h = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
            for (s in d) o[s] && (u || (u = []), u.push(s));
            if ((u || !t) && !U(this, i, e, u)) return !1
          }
          for (s in d)(a = o[s]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(d) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), h && (r[s] = 1);
          !this._firstPT && this._initted && this._enabled(!1, !1)
        }
      }
      return l
    }, s.invalidate = function() {
      return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
    }, s._enabled = function(t, e) {
      if (o || a.wake(), t && this._gc) {
        var i, n = this._targets;
        if (n)
          for (i = n.length; --i > -1;) this._siblings[i] = q(n[i], this, !0);
        else this._siblings = q(this.target, this, !0)
      }
      return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? R._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }, R.to = function(t, e, i) {
      return new R(t, e, i)
    }, R.from = function(t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
    }, R.fromTo = function(t, e, i, n) {
      return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new R(t, e, n)
    }, R.delayedCall = function(t, e, i, n, r) {
      return new R(e, 0, {
        delay: t
        , onComplete: e
        , onCompleteParams: i
        , callbackScope: n
        , onReverseComplete: e
        , onReverseCompleteParams: i
        , immediateRender: !1
        , lazy: !1
        , useFrames: r
        , overwrite: 0
      })
    }, R.set = function(t, e) {
      return new R(t, 0, e)
    }, R.getTweensOf = function(t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t : R.selector(t) || t;
      var i, n, r, s;
      if ((p(t) || M(t)) && "number" != typeof t[0]) {
        for (i = t.length, n = []; --i > -1;) n = n.concat(R.getTweensOf(t[i], e));
        for (i = n.length; --i > -1;)
          for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
      } else
        for (n = q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
      return n
    }, R.killTweensOf = R.killDelayedCallsTo = function(t, e, i) {
      "object" == typeof e && (i = e, e = !1);
      for (var n = R.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
    };
    var Z = _("plugins.TweenPlugin", function(t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Z.prototype
    }, !0);
    if (s = Z.prototype, Z.version = "1.10.1", Z.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
        var a, o;
        return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
          _next: this._firstPT
          , t: t
          , p: e
          , s: i
          , c: a
          , f: "function" == typeof t[e]
          , n: r || e
          , r: s
        }, o._next && (o._next._prev = o), o) : void 0
      }, s.setRatio = function(t) {
        for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
      }, s._kill = function(t) {
        var e, i = this._overwriteProps
          , n = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else
          for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
        for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
        return !1
      }, s._roundProps = function(t, e) {
        for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
      }, R._onPluginEvent = function(t, e) {
        var i, n, r, s, a, o = e._firstPT;
        if ("_onInitAllProps" === t) {
          for (; o;) {
            for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
            (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
          }
          o = e._firstPT = r
        }
        for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
        return i
      }, Z.activate = function(t) {
        for (var e = t.length; --e > -1;) t[e].API === Z.API && (D[(new t[e])._propName] = t[e]);
        return !0
      }, m.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
        var e, i = t.propName
          , n = t.priority || 0
          , r = t.overwriteProps
          , s = {
            init: "_onInitTween"
            , set: "setRatio"
            , kill: "_kill"
            , round: "_roundProps"
            , initAll: "_onInitAllProps"
          }
          , a = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
            Z.call(this, i, n), this._overwriteProps = r || []
          }, t.global === !0)
          , o = a.prototype = new Z(i);
        o.constructor = a, a.API = t.API;
        for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
        return a.version = t.version, Z.activate([a]), a
      }, n = t._gsQueue) {
      for (r = 0; n.length > r; r++) n[r]();
      for (s in f) f[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
    }
    o = !1
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
      var n = function(t) {
          e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
          var i, n, r = this.vars;
          for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
          l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }
        , r = 1e-10
        , s = i._internals
        , a = n._internals = {}
        , o = s.isSelector
        , l = s.isArray
        , d = s.lazyTweens
        , h = s.lazyRender
        , u = []
        , c = _gsScope._gsDefine.globals
        , p = function(t) {
          var e, i = {};
          for (e in t) i[e] = t[e];
          return i
        }
        , f = a.pauseCallback = function(t, e, i, n) {
          var s, a = t._timeline
            , o = a._totalTime
            , l = t._startTime
            , d = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed
            , h = d ? 0 : r
            , c = d ? r : 0;
          if (e || !this._forcingPlayhead) {
            for (a.pause(l), s = t._prev; s && s._startTime === l;) s._rawPrevTime = c, s = s._prev;
            for (s = t._next; s && s._startTime === l;) s._rawPrevTime = h, s = s._next;
            e && e.apply(n || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
          }
        }
        , g = function(t) {
          var e, i = []
            , n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i
        }
        , m = n.prototype = new e;
      return n.version = "1.17.0", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, r) {
        var s = n.repeat && c.TweenMax || i;
        return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
      }, m.from = function(t, e, n, r) {
        return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
      }, m.fromTo = function(t, e, n, r, s) {
        var a = r.repeat && c.TweenMax || i;
        return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
      }, m.staggerTo = function(t, e, r, s, a, l, d, h) {
        var u, c = new n({
          onComplete: l
          , onCompleteParams: d
          , callbackScope: h
          , smoothChildTiming: this.smoothChildTiming
        });
        for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = g(t)), s = s || 0, 0 > s && (t = g(t), t.reverse(), s *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), c.to(t[u], e, p(r), u * s);
        return this.add(c, a)
      }, m.staggerFrom = function(t, e, i, n, r, s, a, o) {
        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, a, o)
      }, m.staggerFromTo = function(t, e, i, n, r, s, a, o, l) {
        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, a, o, l)
      }, m.call = function(t, e, n, r) {
        return this.add(i.delayedCall(0, t, e, n), r)
      }, m.set = function(t, e, n) {
        return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
      }, n.exportRoot = function(t, e) {
        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
        var r, s, a = new n(t)
          , o = a._timeline;
        for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
        return o.add(a, 0), a
      }, m.add = function(r, s, a, o) {
        var d, h, u, c, p, f;
        if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
          if (r instanceof Array || r && r.push && l(r)) {
            for (a = a || "normal", o = o || 0, d = s, h = r.length, u = 0; h > u; u++) l(c = r[u]) && (c = new n({
              tweens: c
            })), this.add(c, d), "string" != typeof c && "function" != typeof c && ("sequence" === a ? d = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), d += o;
            return this._uncache(!0)
          }
          if ("string" == typeof r) return this.addLabel(r, s);
          if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
          r = i.delayedCall(0, r)
        }
        if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
          for (p = this, f = p.rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
        return this
      }, m.remove = function(e) {
        if (e instanceof t) return this._remove(e, !1);
        if (e instanceof Array || e && e.push && l(e)) {
          for (var i = e.length; --i > -1;) this.remove(e[i]);
          return this
        }
        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
      }, m._remove = function(t, i) {
        e.prototype._remove.call(this, t, i);
        var n = this._last;
        return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
      }, m.append = function(t, e) {
        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
      }, m.insert = m.insertMultiple = function(t, e, i, n) {
        return this.add(t, e || 0, i, n)
      }, m.appendMultiple = function(t, e, i, n) {
        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
      }, m.addLabel = function(t, e) {
        return this._labels[t] = this._parseTimeOrLabel(e), this
      }, m.addPause = function(t, e, n, r) {
        var s = i.delayedCall(0, f, ["{self}", e, n, r], this);
        return s.data = "isPause", this.add(s, t)
      }, m.removeLabel = function(t) {
        return delete this._labels[t], this
      }, m.getLabelTime = function(t) {
        return null != this._labels[t] ? this._labels[t] : -1
      }, m._parseTimeOrLabel = function(e, i, n, r) {
        var s;
        if (r instanceof t && r.timeline === this) this.remove(r);
        else if (r && (r instanceof Array || r.push && l(r)))
          for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
        if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
        else {
          if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
          i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
        }
        return Number(e) + i
      }, m.seek = function(t, e) {
        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
      }, m.stop = function() {
        return this.paused(!0)
      }, m.gotoAndPlay = function(t, e) {
        return this.play(t, e)
      }, m.gotoAndStop = function(t, e) {
        return this.pause(t, e)
      }, m.render = function(t, e, i) {
        this._gc && this._enabled(!0, !1);
        var n, s, a, o, l, u = this._dirty ? this.totalDuration() : this._totalDuration
          , c = this._time
          , p = this._startTime
          , f = this._timeScale
          , g = this._paused;
        if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
        else if (1e-7 > t)
          if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
          else {
            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
              for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
            t = 0, this._initted || (l = !0)
          } else this._totalTime = this._time = this._rawPrevTime = t;
        if (this._time !== c && this._first || i || l) {
          if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c)
            for (n = this._first; n && (a = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
          else
            for (n = this._last; n && (a = n._prev, !this._paused || g);)(n._active || c >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
          this._onUpdate && (e || (d.length && h(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (s && (d.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
        }
      }, m._hasPausedChild = function() {
        for (var t = this._first; t;) {
          if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
          t = t._next
        }
        return !1
      }, m.getChildren = function(t, e, n, r) {
        r = r || -9999999999;
        for (var s = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (s[o++] = a) : (n !== !1 && (s[o++] = a), t !== !1 && (s = s.concat(a.getChildren(!0, e, n)), o = s.length))), a = a._next;
        return s
      }, m.getTweensOf = function(t, e) {
        var n, r, s = this._gc
          , a = []
          , o = 0;
        for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
        return s && this._enabled(!1, !0), a
      }, m.recent = function() {
        return this._recent
      }, m._contains = function(t) {
        for (var e = t.timeline; e;) {
          if (e === this) return !0;
          e = e.timeline
        }
        return !1
      }, m.shiftChildren = function(t, e, i) {
        i = i || 0;
        for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
        if (e)
          for (n in s) s[n] >= i && (s[n] += t);
        return this._uncache(!0)
      }, m._kill = function(t, e) {
        if (!t && !e) return this._enabled(!1, !1);
        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
        return r
      }, m.clear = function(t) {
        var e = this.getChildren(!1, !0, !0)
          , i = e.length;
        for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
        return t !== !1 && (this._labels = {}), this._uncache(!0)
      }, m.invalidate = function() {
        for (var e = this._first; e;) e.invalidate(), e = e._next;
        return t.prototype.invalidate.call(this)
      }, m._enabled = function(t, i) {
        if (t === this._gc)
          for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
        return e.prototype._enabled.call(this, t, i)
      }, m.totalTime = function() {
        this._forcingPlayhead = !0;
        var e = t.prototype.totalTime.apply(this, arguments);
        return this._forcingPlayhead = !1, e
      }, m.duration = function(t) {
        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
      }, m.totalDuration = function(t) {
        if (!arguments.length) {
          if (this._dirty) {
            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
            this._duration = this._totalDuration = n, this._dirty = !1
          }
          return this._totalDuration
        }
        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
      }, m.paused = function(e) {
        if (!e)
          for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
        return t.prototype.paused.apply(this, arguments)
      }, m.usesFrames = function() {
        for (var e = this._timeline; e._timeline;) e = e._timeline;
        return e === t._rootFramesTimeline
      }, m.rawTime = function() {
        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
      }, n
    }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()()
  , function(t) {
    "use strict";
    var e = function() {
      return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
  }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
  "use strict";
  _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
    var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope
      , s = r.com.greensock
      , a = 2 * Math.PI
      , o = Math.PI / 2
      , l = s._class
      , d = function(e, i) {
        var n = l("easing." + e, function() {}, !0)
          , r = n.prototype = new t;
        return r.constructor = n, r.getRatio = i, n
      }
      , h = t.register || function() {}
      , u = function(t, e, i, n) {
        var r = l("easing." + t, {
          easeOut: new e
          , easeIn: new i
          , easeInOut: new n
        }, !0);
        return h(r, t), r
      }
      , c = function(t, e, i) {
        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
      }
      , p = function(e, i) {
        var n = l("easing." + e, function(t) {
            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
          }, !0)
          , r = n.prototype = new t;
        return r.constructor = n, r.getRatio = i, r.config = function(t) {
          return new n(t)
        }, n
      }
      , f = u("Back", p("BackOut", function(t) {
        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
      }), p("BackIn", function(t) {
        return t * t * ((this._p1 + 1) * t - this._p1)
      }), p("BackInOut", function(t) {
        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
      }))
      , g = l("easing.SlowMo", function(t, e, i) {
        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
      }, !0)
      , m = g.prototype = new t;
    return m.constructor = g, m.getRatio = function(t) {
      var e = t + (.5 - t) * this._p;
      return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
    }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
      return new g(t, e, i)
    }, e = l("easing.SteppedEase", function(t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
    }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
      return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
    }, m.config = e.config = function(t) {
      return new e(t)
    }, i = l("easing.RoughEase", function(e) {
      e = e || {};
      for (var i, n, r, s, a, o, l = e.taper || "none", d = [], h = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = m ? m.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r = i * i * _ : .5 > i ? (s = 2 * i, r = .5 * s * s * _) : (s = 2 * (1 - i), r = .5 * s * s * _), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), d[h++] = {
        x: i
        , y: n
      };
      for (d.sort(function(t, e) {
          return t.x - e.x
        }), o = new c(1, 1, null), p = u; --p > -1;) a = d[p], o = new c(a.x, a.y, o);
      this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
    }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
      var e = this._prev;
      if (t > e.t) {
        for (; e.next && t >= e.t;) e = e.next;
        e = e.prev
      } else
        for (; e.prev && e.t >= t;) e = e.prev;
      return this._prev = e, e.v + (t - e.t) / e.gap * e.c
    }, m.config = function(t) {
      return new i(t)
    }, i.ease = new i, u("Bounce", d("BounceOut", function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }), d("BounceIn", function(t) {
      return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }), d("BounceInOut", function(t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
    })), u("Circ", d("CircOut", function(t) {
      return Math.sqrt(1 - (t -= 1) * t)
    }), d("CircIn", function(t) {
      return -(Math.sqrt(1 - t * t) - 1)
    }), d("CircInOut", function(t) {
      return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    })), n = function(e, i, n) {
      var r = l("easing." + e, function(t, e) {
          this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
        }, !0)
        , s = r.prototype = new t;
      return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
        return new r(t, e)
      }, r
    }, u("Elastic", n("ElasticOut", function(t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
    }, .3), n("ElasticIn", function(t) {
      return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
    }, .3), n("ElasticInOut", function(t) {
      return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
    }, .45)), u("Expo", d("ExpoOut", function(t) {
      return 1 - Math.pow(2, -10 * t)
    }), d("ExpoIn", function(t) {
      return Math.pow(2, 10 * (t - 1)) - .001
    }), d("ExpoInOut", function(t) {
      return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
    })), u("Sine", d("SineOut", function(t) {
      return Math.sin(t * o)
    }), d("SineIn", function(t) {
      return -Math.cos(t * o) + 1
    }), d("SineInOut", function(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1)
    })), l("easing.EaseLookup", {
      find: function(e) {
        return t.map[e]
      }
    }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
  }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
      var i, n, r, s, a = function() {
          t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
        }
        , o = _gsScope._gsDefine.globals
        , l = {}
        , d = a.prototype = new t("css");
      d.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, d = "px", a.suffixMap = {
        top: d
        , right: d
        , bottom: d
        , left: d
        , width: d
        , height: d
        , fontSize: d
        , padding: d
        , margin: d
        , perspective: d
        , lineHeight: ""
      };
      var h, u, c, p, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g
        , _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g
        , v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi
        , y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g
        , w = /(?:\d|\-|\+|=|#|\.)*/g
        , b = /opacity *= *([^)]*)/i
        , x = /opacity:([^;]*)/i
        , T = /alpha\(opacity *=.+?\)/i
        , P = /^(rgb|hsl)/
        , S = /([A-Z])/g
        , k = /-([a-z])/gi
        , O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi
        , C = function(t, e) {
          return e.toUpperCase()
        }
        , A = /(?:Left|Right|Width)/i
        , L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi
        , R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i
        , M = /,(?=[^\)]*(?:\(|$))/gi
        , I = Math.PI / 180
        , z = 180 / Math.PI
        , E = {}
        , F = document
        , D = function(t) {
          return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t)
        }
        , N = D("div")
        , j = D("img")
        , B = a._internals = {
          _specialProps: l
        }
        , X = navigator.userAgent
        , H = function() {
          var t = X.indexOf("Android")
            , e = D("a");
          return c = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || Number(X.substr(t + 8, 1)) > 3), f = c && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), p = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (g = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
        }()
        , V = function(t) {
          return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }
        , Y = function(t) {
          window.console && console.log(t)
        }
        , W = ""
        , q = ""
        , U = function(t, e) {
          e = e || N;
          var i, n, r = e.style;
          if (void 0 !== r[t]) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
          return n >= 0 ? (q = 3 === n ? "ms" : i[n], W = "-" + q.toLowerCase() + "-", q + t) : null
        }
        , G = F.defaultView ? F.defaultView.getComputedStyle : function() {}
        , Q = a.getStyle = function(t, e, i, n, r) {
          var s;
          return H || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || G(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t)
        }
        , Z = B.convertToPixels = function(t, i, n, r, s) {
          if ("px" === r || !r) return n;
          if ("auto" === r || !n) return 0;
          var o, l, d, h = A.test(i)
            , u = t
            , c = N.style
            , p = 0 > n;
          if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (h ? t.clientWidth : t.clientHeight);
          else {
            if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) c[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
            else {
              if (u = t.parentNode || F.body, l = u._gsCache, d = e.ticker.frame, l && h && l.time === d) return l.width * n / 100;
              c[h ? "width" : "height"] = n + r
            }
            u.appendChild(N), o = parseFloat(N[h ? "offsetWidth" : "offsetHeight"]), u.removeChild(N), h && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = d, l.width = 100 * (o / n)), 0 !== o || s || (o = Z(t, i, n, r, !0))
          }
          return p ? -o : o
        }
        , $ = B.calculateOffset = function(t, e, i) {
          if ("absolute" !== Q(t, "position", i)) return 0;
          var n = "left" === e ? "Left" : "Top"
            , r = Q(t, "margin" + n, i);
          return t["offset" + n] - (Z(t, e, parseFloat(r), r.replace(w, "")) || 0)
        }
        , K = function(t, e) {
          var i, n, r, s = {};
          if (e = e || G(t, null))
            if (i = e.length)
              for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Pe === r) && (s[r.replace(k, C)] = e.getPropertyValue(r));
            else
              for (i in e)(-1 === i.indexOf("Transform") || Te === i) && (s[i] = e[i]);
          else if (e = t.currentStyle || t.style)
            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(k, C)] = e[i]);
          return H || (s.opacity = V(t)), n = Fe(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, ke && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
        }
        , J = function(t, e, i, n, r) {
          var s, a, o, l = {}
            , d = t.style;
          for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(y, "") ? s : 0 : $(t, a), void 0 !== d[a] && (o = new pe(d, a, d[a], o)));
          if (n)
            for (a in n) "className" !== a && (l[a] = n[a]);
          return {
            difs: l
            , firstMPT: o
          }
        }
        , te = {
          width: ["Left", "Right"]
          , height: ["Top", "Bottom"]
        }
        , ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"]
        , ie = function(t, e, i) {
          var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
            , r = te[e]
            , s = r.length;
          for (i = i || G(t, null); --s > -1;) n -= parseFloat(Q(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Q(t, "border" + r[s] + "Width", i, !0)) || 0;
          return n
        }
        , ne = function(t, e) {
          (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
          var i = t.split(" ")
            , n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
            , r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
          return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
        }
        , re = function(t, e) {
          return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }
        , se = function(t, e) {
          return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }
        , ae = function(t, e, i, n) {
          var r, s, a, o, l, d = 1e-6;
          return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e), s.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), d > o && o > -d && (o = 0), o
        }
        , oe = {
          aqua: [0, 255, 255]
          , lime: [0, 255, 0]
          , silver: [192, 192, 192]
          , black: [0, 0, 0]
          , maroon: [128, 0, 0]
          , teal: [0, 128, 128]
          , blue: [0, 0, 255]
          , navy: [0, 0, 128]
          , white: [255, 255, 255]
          , fuchsia: [255, 0, 255]
          , olive: [128, 128, 0]
          , yellow: [255, 255, 0]
          , orange: [255, 165, 0]
          , gray: [128, 128, 128]
          , purple: [128, 0, 128]
          , green: [0, 128, 0]
          , red: [255, 0, 0]
          , pink: [255, 192, 203]
          , cyan: [0, 255, 255]
          , transparent: [255, 255, 255, 0]
        }
        , le = function(t, e, i) {
          return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }
        , de = a.parseColor = function(t) {
          var e, i, n, r, s, a;
          return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (s + 1) : a + s - a * s, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = le(r + 1 / 3, e, i), t[1] = le(r, e, i), t[2] = le(r - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
        }
        , he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
      for (d in oe) he += "|" + d + "\\b";
      he = RegExp(he + ")", "gi");
      var ue = function(t, e, i, n) {
          if (null == t) return function(t) {
            return t
          };
          var r, s = e ? (t.match(he) || [""])[0] : ""
            , a = t.split(s).join("").match(v) || []
            , o = t.substr(0, t.indexOf(a[0]))
            , l = ")" === t.charAt(t.length - 1) ? ")" : ""
            , d = -1 !== t.indexOf(" ") ? " " : ","
            , h = a.length
            , u = h > 0 ? a[0].replace(m, "") : "";
          return h ? r = e ? function(t) {
            var e, c, p, f;
            if ("number" == typeof t) t += u;
            else if (n && M.test(t)) {
              for (f = t.replace(M, "|").split("|"), p = 0; f.length > p; p++) f[p] = r(f[p]);
              return f.join(",")
            }
            if (e = (t.match(he) || [s])[0], c = t.split(e).join("").match(v) || [], p = c.length, h > p--)
              for (; h > ++p;) c[p] = i ? c[0 | (p - 1) / 2] : a[p];
            return o + c.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
          } : function(t) {
            var e, s, c;
            if ("number" == typeof t) t += u;
            else if (n && M.test(t)) {
              for (s = t.replace(M, "|").split("|"), c = 0; s.length > c; c++) s[c] = r(s[c]);
              return s.join(",")
            }
            if (e = t.match(v) || [], c = e.length, h > c--)
              for (; h > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
            return o + e.join(d) + l
          } : function(t) {
            return t
          }
        }
        , ce = function(t) {
          return t = t.split(",")
            , function(e, i, n, r, s, a, o) {
              var l, d = (i + "").split(" ");
              for (o = {}, l = 0; 4 > l; l++) o[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
              return r.parse(e, o, s, a)
            }
        }
        , pe = (B._setPluginRatio = function(t) {
          this.plugin.setRatio(t);
          for (var e, i, n, r, s = this.data, a = s.proxy, o = s.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
          if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t)
            for (o = s.firstMPT; o;) {
              if (i = o.t, i.type) {
                if (1 === i.type) {
                  for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                  i.e = r
                }
              } else i.e = i.s + i.xs0;
              o = o._next
            }
        }, function(t, e, i, n, r) {
          this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
        })
        , fe = (B._parseToProxy = function(t, e, i, n, r, s) {
          var a, o, l, d, h, u = n
            , c = {}
            , p = {}
            , f = i._transform
            , g = E;
          for (i._transform = null, E = e, n = h = i.parse(t, e, n, r), E = g, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
            if (1 >= n.type && (o = n.p, p[o] = n.s + n.c, c[o] = n.s, s || (d = new pe(n, "s", o, d, n.r), n.c = 0), 1 === n.type))
              for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, p[o] = n.data[l], c[o] = n[l], s || (d = new pe(n, l, o, d, n.rxp[l]));
            n = n._next
          }
          return {
            proxy: c
            , end: p
            , firstMPT: d
            , pt: h
          }
        }, B.CSSPropTween = function(t, e, n, r, a, o, l, d, h, u, c) {
          this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof fe || s.push(this.n), this.r = d, this.type = o || 0, h && (this.pr = h, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === c ? n + r : c, a && (this._next = a, a._prev = this)
        })
        , ge = function(t, e, i, n, r, s) {
          var a = new fe(t, e, i, n - i, r, -1, s);
          return a.b = i, a.e = a.xs0 = n, a
        }
        , me = a.parseComplex = function(t, e, i, n, r, s, a, o, l, d) {
          i = i || s || "", a = new fe(t, e, 0, 0, a, d ? 2 : 1, null, !1, o, i, n), n += "";
          var u, c, p, f, g, v, y, w, b, x, T, S, k = i.split(", ").join(",").split(" ")
            , O = n.split(", ").join(",").split(" ")
            , C = k.length
            , A = h !== !1;
          for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), O = O.join(" ").replace(M, ", ").split(" "), C = k.length), C !== O.length && (k = (s || "").split(" "), C = k.length), a.plugin = l, a.setRatio = d, u = 0; C > u; u++)
            if (f = k[u], g = O[u], w = parseFloat(f), w || 0 === w) a.appendXtra("", w, re(g, w), g.replace(_, ""), A && -1 !== g.indexOf("px"), !0);
            else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = de(f), g = de(g), b = f.length + g.length > 6, b && !H && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[u]).join("transparent")) : (H || (b = !1), a.appendXtra(b ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], b ? "," : S, !0), b && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, S, !1)));
          else if (v = f.match(m)) {
            if (y = g.match(_), !y || y.length !== v.length) return a;
            for (p = 0, c = 0; v.length > c; c++) T = v[c], x = f.indexOf(T, p), a.appendXtra(f.substr(p, x - p), Number(T), re(y[c], T), "", A && "px" === f.substr(x + T.length, 2), 0 === c), p = x + T.length;
            a["xs" + a.l] += f.substr(p)
          } else a["xs" + a.l] += a.l ? " " + f : f;
          if (-1 !== n.indexOf("=") && a.data) {
            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
            a.e = S + a["xs" + u]
          }
          return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
        }
        , _e = 9;
      for (d = fe.prototype, d.l = d.pr = 0; --_e > 0;) d["xn" + _e] = 0, d["xs" + _e] = "";
      d.xs0 = "", d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null, d.appendXtra = function(t, e, i, n, r, s) {
        var a = this
          , o = a.l;
        return a["xs" + o] += s && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
          s: e + i
        }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (n || ""), a)
      };
      var ve = function(t, e) {
          e = e || {}, this.p = e.prefix ? U(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }
        , ye = B._registerComplexSpecialProp = function(t, e, i) {
          "object" != typeof e && (e = {
            parser: i
          });
          var n, r, s = t.split(",")
            , a = e.defaultValue;
          for (i = i || [a], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, r = new ve(s[n], e)
        }
        , we = function(t) {
          if (!l[t]) {
            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
            ye(t, {
              parser: function(t, i, n, r, s, a, d) {
                var h = o.com.greensock.plugins[e];
                return h ? (h._cssRegister(), l[n].parse(t, i, n, r, s, a, d)) : (Y("Error: " + e + " js file not loaded."), s)
              }
            })
          }
        };
      d = ve.prototype, d.parseComplex = function(t, e, i, n, r, s) {
        var a, o, l, d, h, u, c = this.keyword;
        if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
          for (d = l.length > o.length ? l.length : o.length, a = 0; d > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (h = e.indexOf(c), u = i.indexOf(c), h !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === h && (o[a] += " " + c)));
          e = o.join(", "), i = l.join(", ")
        }
        return me(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
      }, d.parse = function(t, e, i, n, s, a) {
        return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
      }, a.registerSpecialProp = function(t, e, i) {
        ye(t, {
          parser: function(t, n, r, s, a, o) {
            var l = new fe(t, r, 0, 0, a, 2, r, !1, i);
            return l.plugin = o, l.setRatio = e(t, n, s._tween, r), l
          }
          , priority: i
        })
      }, a.useSVGTransformAttr = c || p;
      var be, xe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",")
        , Te = U("transform")
        , Pe = W + "transform"
        , Se = U("transformOrigin")
        , ke = null !== U("perspective")
        , Oe = B.Transform = function() {
          this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && ke ? a.defaultForce3D || "auto" : !1
        }
        , Ce = window.SVGElement
        , Ae = function(t, e, i) {
          var n, r = F.createElementNS("http://www.w3.org/2000/svg", t)
            , s = /([a-z])([A-Z])/g;
          for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
          return e.appendChild(r), r
        }
        , Le = F.documentElement
        , Re = function() {
          var t, e, i, n = g || /Android/i.test(X) && !window.chrome;
          return F.createElementNS && !n && (t = Ae("svg", Le), e = Ae("rect", t, {
            width: 100
            , height: 50
            , x: 100
          }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[Te] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && ke), Le.removeChild(t)), n
        }()
        , Me = function(t, e, i, n, r) {
          var s, o, l, d, h, u, c, p, f, g, m, _, v, y, w = t._gsTransform
            , b = Ee(t, !0);
          w && (v = w.xOrigin, y = w.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (c = t.getBBox(), e = ne(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = d = parseFloat(s[0]), i.yOrigin = h = parseFloat(s[1]), n && b !== ze && (u = b[0], c = b[1], p = b[2], f = b[3], g = b[4], m = b[5], _ = u * f - c * p, o = d * (f / _) + h * (-p / _) + (p * m - f * g) / _, l = d * (-c / _) + h * (u / _) - (u * m - c * g) / _, d = i.xOrigin = s[0] = o, h = i.yOrigin = s[1] = l), w && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = d - v, l = h - y, w.xOffset += o * b[0] + l * b[2] - o, w.yOffset += o * b[1] + l * b[3] - l) : w.xOffset = w.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
        }
        , Ie = function(t) {
          return !!(Ce && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }
        , ze = [1, 0, 0, 1, 0, 0]
        , Ee = function(t, e) {
          var i, n, r, s, a, o = t._gsTransform || new Oe
            , l = 1e5;
          if (Te ? n = Q(t, Pe, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(L), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (o.svg || t.getBBox && Ie(t)) && (i && -1 !== (t.style[Te] + "").indexOf("matrix") && (n = t.style[Te], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return ze;
          for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _e = r.length; --_e > -1;) s = Number(r[_e]), r[_e] = (a = s - (s |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + s : s;
          return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        }
        , Fe = B.getTransform = function(t, i, n, s) {
          if (t._gsTransform && n && !s) return t._gsTransform;
          var o, l, d, h, u, c, p = n ? t._gsTransform || new Oe : new Oe
            , f = 0 > p.scaleX
            , g = 2e-5
            , m = 1e5
            , _ = ke ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0
            , v = parseFloat(a.defaultTransformPerspective) || 0;
          if (p.svg = !(!t.getBBox || !Ie(t)), p.svg && (Me(t, Q(t, Se, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), be = a.useSVGTransformAttr || Re), o = Ee(t), o !== ze) {
            if (16 === o.length) {
              var y, w, b, x, T, P = o[0]
                , S = o[1]
                , k = o[2]
                , O = o[3]
                , C = o[4]
                , A = o[5]
                , L = o[6]
                , R = o[7]
                , M = o[8]
                , I = o[9]
                , E = o[10]
                , F = o[12]
                , D = o[13]
                , N = o[14]
                , j = o[11]
                , B = Math.atan2(L, E);
              p.zOrigin && (N = -p.zOrigin, F = M * N - o[12], D = I * N - o[13], N = E * N + p.zOrigin - o[14]), p.rotationX = B * z, B && (x = Math.cos(-B), T = Math.sin(-B), y = C * x + M * T, w = A * x + I * T, b = L * x + E * T, M = C * -T + M * x, I = A * -T + I * x, E = L * -T + E * x, j = R * -T + j * x, C = y, A = w, L = b), B = Math.atan2(M, E), p.rotationY = B * z, B && (x = Math.cos(-B), T = Math.sin(-B), y = P * x - M * T, w = S * x - I * T, b = k * x - E * T, I = S * T + I * x, E = k * T + E * x, j = O * T + j * x, P = y, S = w, k = b), B = Math.atan2(S, P), p.rotation = B * z, B && (x = Math.cos(-B), T = Math.sin(-B), P = P * x + C * T, w = S * x + A * T, A = S * -T + A * x, L = k * -T + L * x, S = w), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(P * P + S * S) * m + .5) / m, p.scaleY = (0 | Math.sqrt(A * A + I * I) * m + .5) / m, p.scaleZ = (0 | Math.sqrt(L * L + E * E) * m + .5) / m, p.skewX = 0, p.perspective = j ? 1 / (0 > j ? -j : j) : 0, p.x = F, p.y = D, p.z = N, p.svg && (p.x -= p.xOrigin - (p.xOrigin * P - p.yOrigin * C), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * A))
            } else if (!(ke && !s && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
              var X = o.length >= 6
                , H = X ? o[0] : 1
                , V = o[1] || 0
                , Y = o[2] || 0
                , W = X ? o[3] : 1;
              p.x = o[4] || 0, p.y = o[5] || 0, d = Math.sqrt(H * H + V * V), h = Math.sqrt(W * W + Y * Y), u = H || V ? Math.atan2(V, H) * z : p.rotation || 0, c = Y || W ? Math.atan2(Y, W) * z + u : p.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (f ? (d *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (h *= -1, c += 0 >= c ? 180 : -180)), p.scaleX = d, p.scaleY = h, p.rotation = u, p.skewX = c, ke && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * Y), p.y -= p.yOrigin - (p.xOrigin * V + p.yOrigin * W))
            }
            p.zOrigin = _;
            for (l in p) g > p[l] && p[l] > -g && (p[l] = 0)
          }
          return n && (t._gsTransform = p, p.svg && (be && t.style[Te] ? e.delayedCall(.001, function() {
            Be(t.style, Te)
          }) : !be && t.getAttribute("transform") && e.delayedCall(.001, function() {
            t.removeAttribute("transform")
          }))), p
        }
        , De = function(t) {
          var e, i, n = this.data
            , r = -n.rotation * I
            , s = r + n.skewX * I
            , a = 1e5
            , o = (0 | Math.cos(r) * n.scaleX * a) / a
            , l = (0 | Math.sin(r) * n.scaleX * a) / a
            , d = (0 | Math.sin(s) * -n.scaleY * a) / a
            , h = (0 | Math.cos(s) * n.scaleY * a) / a
            , u = this.t.style
            , c = this.t.currentStyle;
          if (c) {
            i = l, l = -d, d = -i, e = c.filter, u.filter = "";
            var p, f, m = this.t.offsetWidth
              , _ = this.t.offsetHeight
              , v = "absolute" !== c.position
              , y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + d + ", M22=" + h
              , x = n.x + m * n.xPercent / 100
              , T = n.y + _ * n.yPercent / 100;
            if (null != n.ox && (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, f = (n.oyp ? .01 * _ * n.oy : n.oy) - _ / 2, x += p - (p * o + f * l), T += f - (p * d + f * h)), v ? (p = m / 2, f = _ / 2, y += ", Dx=" + (p - (p * o + f * l) + x) + ", Dy=" + (f - (p * d + f * h) + T) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === d && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
              var P, S, k, O = 8 > g ? 1 : -1;
              for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * _)) / 2 + x), n.ieOffsetY = Math.round((_ - ((0 > h ? -h : h) * _ + (0 > d ? -d : d) * m)) / 2 + T), _e = 0; 4 > _e; _e++) S = ee[_e], P = c[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(w, "")) || 0, k = i !== n[S] ? 2 > _e ? -n.ieOffsetX : -n.ieOffsetY : 2 > _e ? p - n.ieOffsetX : f - n.ieOffsetY, u[S] = (n[S] = Math.round(i - k * (0 === _e || 2 === _e ? 1 : O))) + "px"
            }
          }
        }
        , Ne = B.set3DTransformRatio = B.setTransformRatio = function(t) {
          var e, i, n, r, s, a, o, l, d, h, u, c, f, g, m, _, v, y, w, b, x, T, P, S = this.data
            , k = this.t.style
            , O = S.rotation
            , C = S.rotationX
            , A = S.rotationY
            , L = S.scaleX
            , R = S.scaleY
            , M = S.scaleZ
            , z = S.x
            , E = S.y
            , F = S.z
            , D = S.svg
            , N = S.perspective
            , j = S.force3D;
          if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || F || N || A || C) || be && D || !ke) return void(O || S.skewX || D ? (O *= I, T = S.skewX * I, P = 1e5, e = Math.cos(O) * L, r = Math.sin(O) * L, i = Math.sin(O - T) * -R, s = Math.cos(O - T) * R, T && "simple" === S.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, s *= v, S.skewY && (e *= v, r *= v)), D && (z += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, E += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset, be && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), z += .01 * S.xPercent * g.width, E += .01 * S.yPercent * g.height), g = 1e-6, g > z && z > -g && (z = 0), g > E && E > -g && (E = 0)), w = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | s * P) / P + "," + z + "," + E + ")", D && be ? this.t.setAttribute("transform", "matrix(" + w) : k[Te] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + w) : k[Te] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + R + "," + z + "," + E + ")");
          if (p && (g = 1e-4, g > L && L > -g && (L = M = 2e-5), g > R && R > -g && (R = M = 2e-5), !N || S.z || S.rotationX || S.rotationY || (N = 0)), O || S.skewX) O *= I, m = e = Math.cos(O), _ = r = Math.sin(O), S.skewX && (O -= S.skewX * I, m = Math.cos(O), _ = Math.sin(O), "simple" === S.skewType && (v = Math.tan(S.skewX * I), v = Math.sqrt(1 + v * v), m *= v, _ *= v, S.skewY && (e *= v, r *= v))), i = -_, s = m;
          else {
            if (!(A || C || 1 !== M || N || D)) return void(k[Te] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + E + "px," + F + "px)" + (1 !== L || 1 !== R ? " scale(" + L + "," + R + ")" : ""));
            e = s = 1, i = r = 0
          }
          d = 1, n = a = o = l = h = u = 0, c = N ? -1 / N : 0, f = S.zOrigin, g = 1e-6, b = ",", x = "0", O = A * I, O && (m = Math.cos(O), _ = Math.sin(O), o = -_, h = c * -_, n = e * _, a = r * _, d = m, c *= m, e *= m, r *= m), O = C * I, O && (m = Math.cos(O), _ = Math.sin(O), v = i * m + n * _, y = s * m + a * _, l = d * _, u = c * _, n = i * -_ + n * m, a = s * -_ + a * m, d *= m, c *= m, i = v, s = y), 1 !== M && (n *= M, a *= M, d *= M, c *= M), 1 !== R && (i *= R, s *= R, l *= R, u *= R), 1 !== L && (e *= L, r *= L, o *= L, h *= L), (f || D) && (f && (z += n * -f, E += a * -f, F += d * -f + f), D && (z += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, E += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset), g > z && z > -g && (z = x), g > E && E > -g && (E = x), g > F && F > -g && (F = 0)), w = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", w += (g > e && e > -g ? x : e) + b + (g > r && r > -g ? x : r) + b + (g > o && o > -g ? x : o), w += b + (g > h && h > -g ? x : h) + b + (g > i && i > -g ? x : i) + b + (g > s && s > -g ? x : s), C || A ? (w += b + (g > l && l > -g ? x : l) + b + (g > u && u > -g ? x : u) + b + (g > n && n > -g ? x : n), w += b + (g > a && a > -g ? x : a) + b + (g > d && d > -g ? x : d) + b + (g > c && c > -g ? x : c) + b) : w += ",0,0,0,0,1,0,", w += z + b + E + b + F + b + (N ? 1 + -F / N : 1) + ")", k[Te] = w
        };
      d = Oe.prototype, d.x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0, d.scaleX = d.scaleY = d.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
        parser: function(t, e, i, n, s, o, l) {
          if (n._lastParsedTransform === l) return s;
          n._lastParsedTransform = l;
          var d, h, u, c, p, f, g, m, _, v = t._gsTransform
            , y = n._transform = Fe(t, r, !0, l.parseTransform)
            , w = t.style
            , b = 1e-6
            , x = xe.length
            , T = l
            , P = {}
            , S = "transformOrigin";
          if ("string" == typeof T.transform && Te) u = N.style, u[Te] = T.transform, u.display = "block", u.position = "absolute", F.body.appendChild(N), d = Fe(N, null, !1), F.body.removeChild(N), null != T.xPercent && (d.xPercent = se(T.xPercent, y.xPercent)), null != T.yPercent && (d.yPercent = se(T.yPercent, y.yPercent));
          else if ("object" == typeof T) {
            if (d = {
                scaleX: se(null != T.scaleX ? T.scaleX : T.scale, y.scaleX)
                , scaleY: se(null != T.scaleY ? T.scaleY : T.scale, y.scaleY)
                , scaleZ: se(T.scaleZ, y.scaleZ)
                , x: se(T.x, y.x)
                , y: se(T.y, y.y)
                , z: se(T.z, y.z)
                , xPercent: se(T.xPercent, y.xPercent)
                , yPercent: se(T.yPercent, y.yPercent)
                , perspective: se(T.transformPerspective, y.perspective)
              }, g = T.directionalRotation, null != g)
              if ("object" == typeof g)
                for (u in g) T[u] = g[u];
              else T.rotation = g;
              "string" == typeof T.x && -1 !== T.x.indexOf("%") && (d.x = 0, d.xPercent = se(T.x, y.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (d.y = 0, d.yPercent = se(T.y, y.yPercent)), d.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : y.rotation, y.rotation, "rotation", P), ke && (d.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), d.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), d.skewX = null == T.skewX ? y.skewX : ae(T.skewX, y.skewX), d.skewY = null == T.skewY ? y.skewY : ae(T.skewY, y.skewY), (h = d.skewY - y.skewY) && (d.skewX += h, d.rotation += h)
          }
          for (ke && null != T.force3D && (y.force3D = T.force3D, f = !0), y.skewType = T.skewType || y.skewType || a.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == T.scale || (d.scaleZ = 1); --x > -1;) i = xe[x], c = d[i] - y[i], (c > b || -b > c || null != T[i] || null != E[i]) && (f = !0, s = new fe(y, i, y[i], c, s), i in P && (s.e = P[i]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
          return c = T.transformOrigin, y.svg && (c || T.svgOrigin) && (m = y.xOffset, _ = y.yOffset, Me(t, ne(c), d, T.svgOrigin, T.smoothOrigin), s = ge(y, "xOrigin", (v ? y : d).xOrigin, d.xOrigin, s, S), s = ge(y, "yOrigin", (v ? y : d).yOrigin, d.yOrigin, s, S), (m !== y.xOffset || _ !== y.yOffset) && (s = ge(y, "xOffset", v ? m : y.xOffset, y.xOffset, s, S), s = ge(y, "yOffset", v ? _ : y.yOffset, y.yOffset, s, S)), c = be ? null : "0px 0px"), (c || ke && p && y.zOrigin) && (Te ? (f = !0, i = Se, c = (c || Q(t, i, r, !1, "50% 50%")) + "", s = new fe(w, i, 0, 0, s, -1, S), s.b = w[i], s.plugin = o, ke ? (u = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === u || "0px" !== c[2]) ? parseFloat(c[2]) : u) || 0, s.xs0 = s.e = c[0] + " " + (c[1] || "50%") + " 0px", s = new fe(y, "zOrigin", 0, 0, s, -1, s.n), s.b = u, s.xs0 = s.e = y.zOrigin) : s.xs0 = s.e = c) : ne(c + "", y)), f && (n._transformType = y.svg && be || !p && 3 !== this._transformType ? 2 : 3), s
        }
        , prefix: !0
      }), ye("boxShadow", {
        defaultValue: "0px 0px 0px 0px #999"
        , prefix: !0
        , color: !0
        , multi: !0
        , keyword: "inset"
      }), ye("borderRadius", {
        defaultValue: "0px"
        , parser: function(t, e, i, s, a) {
          e = this.format(e);
          var o, l, d, h, u, c, p, f, g, m, _, v, y, w, b, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]
            , P = t.style;
          for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = U(T[l])), u = h = Q(t, T[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (h = u.split(" "), u = h[0], h = h[1]), c = d = o[l], p = parseFloat(u), v = u.substr((p + "").length), y = "=" === c.charAt(1), y ? (f = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), f *= parseFloat(c), _ = c.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(c), _ = c.substr((f + "").length)), "" === _ && (_ = n[i] || v), _ !== v && (w = Z(t, "borderLeft", p, v), b = Z(t, "borderTop", p, v), "%" === _ ? (u = 100 * (w / g) + "%", h = 100 * (b / m) + "%") : "em" === _ ? (x = Z(t, "borderLeft", 1, "em"), u = w / x + "em", h = b / x + "em") : (u = w + "px", h = b + "px"), y && (c = parseFloat(u) + f + _, d = parseFloat(h) + f + _)), a = me(P, T[l], u + " " + h, c + " " + d, !1, "0px", a);
          return a
        }
        , prefix: !0
        , formatter: ue("0px 0px 0px 0px", !1, !0)
      }), ye("backgroundPosition", {
        defaultValue: "0 0"
        , parser: function(t, e, i, n, s, a) {
          var o, l, d, h, u, c, p = "background-position"
            , f = r || G(t, null)
            , m = this.format((f ? g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0")
            , _ = this.format(e);
          if (-1 !== m.indexOf("%") != (-1 !== _.indexOf("%")) && (c = Q(t, "backgroundImage").replace(O, ""), c && "none" !== c)) {
            for (o = m.split(" "), l = _.split(" "), j.setAttribute("src", c), d = 2; --d > -1;) m = o[d], h = -1 !== m.indexOf("%"), h !== (-1 !== l[d].indexOf("%")) && (u = 0 === d ? t.offsetWidth - j.width : t.offsetHeight - j.height, o[d] = h ? parseFloat(m) / 100 * u + "px" : 100 * (parseFloat(m) / u) + "%");
            m = o.join(" ")
          }
          return this.parseComplex(t.style, m, _, s, a)
        }
        , formatter: ne
      }), ye("backgroundSize", {
        defaultValue: "0 0"
        , formatter: ne
      }), ye("perspective", {
        defaultValue: "0px"
        , prefix: !0
      }), ye("perspectiveOrigin", {
        defaultValue: "50% 50%"
        , prefix: !0
      }), ye("transformStyle", {
        prefix: !0
      }), ye("backfaceVisibility", {
        prefix: !0
      }), ye("userSelect", {
        prefix: !0
      }), ye("margin", {
        parser: ce("marginTop,marginRight,marginBottom,marginLeft")
      }), ye("padding", {
        parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
      }), ye("clip", {
        defaultValue: "rect(0px,0px,0px,0px)"
        , parser: function(t, e, i, n, s, a) {
          var o, l, d;
          return 9 > g ? (l = t.currentStyle, d = 8 > g ? " " : ",", o = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a)
        }
      }), ye("textShadow", {
        defaultValue: "0px 0px 0px #999"
        , color: !0
        , multi: !0
      }), ye("autoRound,strictUnits", {
        parser: function(t, e, i, n, r) {
          return r
        }
      }), ye("border", {
        defaultValue: "0px solid #000"
        , parser: function(t, e, i, n, s, a) {
          return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), s, a)
        }
        , color: !0
        , formatter: function(t) {
          var e = t.split(" ");
          return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
        }
      }), ye("borderWidth", {
        parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
      }), ye("float,cssFloat,styleFloat", {
        parser: function(t, e, i, n, r) {
          var s = t.style
            , a = "cssFloat" in s ? "cssFloat" : "styleFloat";
          return new fe(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
        }
      });
      var je = function(t) {
        var e, i = this.t
          , n = i.filter || Q(this.data, "filter") || ""
          , r = 0 | this.s + this.c * t;
        100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
      };
      ye("opacity,alpha,autoAlpha", {
        defaultValue: "1"
        , parser: function(t, e, i, n, s, a) {
          var o = parseFloat(Q(t, "opacity", r, !1, "1"))
            , l = t.style
            , d = "autoAlpha" === i;
          return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), d && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), H ? s = new fe(l, "opacity", o, e - o, s) : (s = new fe(l, "opacity", 100 * o, 100 * (e - o), s), s.xn1 = d ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = je), d && (s = new fe(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
        }
      });
      var Be = function(t, e) {
          e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
        , Xe = function(t) {
          if (this.t._gsClassPT = this, 1 === t || 0 === t) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Be(i, e.p), e = e._next;
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
          } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
      ye("className", {
        parser: function(t, e, n, s, a, o, l) {
          var d, h, u, c, p, f = t.getAttribute("class") || ""
            , g = t.style.cssText;
          if (a = s._classNamePT = new fe(t, n, 0, 0, a, 2), a.setRatio = Xe, a.pr = -11, i = !0, a.b = f, h = K(t, r), u = t._gsClassPT) {
            for (c = {}, p = u.data; p;) c[p.p] = 1, p = p._next;
            u.setRatio(1)
          }
          return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), d = J(t, h, K(t), l, c), t.setAttribute("class", f), a.data = d.firstMPT, t.style.cssText = g, a = a.xfirst = s.parse(t, d.difs, a, o)
        }
      });
      var He = function(t) {
        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
          var e, i, n, r, s, a = this.t.style
            , o = l.transform.parse;
          if ("all" === this.e) a.cssText = "", r = !0;
          else
            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), Be(a, i);
          r && (Be(a, Te), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
        }
      };
      for (ye("clearProps", {
          parser: function(t, e, n, r, s) {
            return s = new fe(t, n, 0, 0, s, 2), s.setRatio = He, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
          }
        }), d = "bezier,throwProps,physicsProps,physics2D".split(","), _e = d.length; _e--;) we(d[_e]);
      d = a.prototype, d._firstPT = d._lastParsedTransform = d._transform = null, d._onInitTween = function(t, e, o) {
        if (!t.nodeType) return !1;
        this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = G(t, ""), s = this._overwriteProps;
        var d, p, g, m, _, v, y, w, b, T = t.style;
        if (u && "" === T.zIndex && (d = Q(t, "zIndex", r), ("auto" === d || "" === d) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, d = K(t, r), T.cssText = m + ";" + e, d = J(t, d, K(t)).difs, !H && x.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, T.cssText = m), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
          for (b = 3 === this._transformType, Te ? c && (u = !0, "" === T.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, g = p; g && g._next;) g = g._next;
          w = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, g), w.setRatio = Te ? Ne : De, w.data = this._transform || Fe(t, r, !0), w.tween = o, w.pr = -1, s.pop()
        }
        if (i) {
          for (; p;) {
            for (v = p._next, g = m; g && g.pr > p.pr;) g = g._next;
            (p._prev = g ? g._prev : _) ? p._prev._next = p: m = p, (p._next = g) ? g._prev = p : _ = p, p = v
          }
          this._firstPT = m
        }
        return !0
      }, d.parse = function(t, e, i, s) {
        var a, o, d, u, c, p, f, g, m, _, v = t.style;
        for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, s, e) : (c = Q(t, a, r) + "", m = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(p) ? (m || (p = de(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = me(v, a, c, p, !0, "transparent", i, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (d = parseFloat(c), f = d || 0 === d ? c.substr((d + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (d = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (d = $(t, a, r), f = "px") : (d = "opacity" !== a ? 0 : 1, f = "")), _ = m && "=" === p.charAt(1), _ ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), g = p.replace(w, "")) : (u = parseFloat(p), g = m ? p.replace(w, "") : ""), "" === g && (g = a in n ? n[a] : f), p = u || 0 === u ? (_ ? u + d : u) + g : e[a], f !== g && "" !== g && (u || 0 === u) && d && (d = Z(t, a, d, f), "%" === g ? (d /= Z(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = d + "%")) : "em" === g ? d /= Z(t, a, 1, "em") : "px" !== g && (u = Z(t, a, u, g), g = "px"), _ && (u || 0 === u) && (p = u + d + g)), _ && (u += d), !d && 0 !== d || !u && 0 !== u ? void 0 !== v[a] && (p || "NaN" != p + "" && null != p) ? (i = new fe(v, a, u || d || 0, 0, i, -1, a, !1, 0, c, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : c) : Y("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, d, u - d, i, 0, a, h !== !1 && ("px" === g || "zIndex" === a), 0, c, p), i.xs0 = g)) : i = me(v, a, c, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
        return i
      }, d.setRatio = function(t) {
        var e, i, n, r = this._firstPT
          , s = 1e-6;
        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
          if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
            for (; r;) {
              if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                if (1 === r.type)
                  if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                  else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
              else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
              else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
              else {
                for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                r.t[r.p] = i
              } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
              else r.t[r.p] = e + r.xs0;
              r = r._next
            } else
              for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
          else
            for (; r;) {
              if (2 !== r.type)
                if (r.r && -1 !== r.type)
                  if (e = Math.round(r.s + r.c), r.type) {
                    if (1 === r.type) {
                      for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                      r.t[r.p] = i
                    }
                  } else r.t[r.p] = e + r.xs0;
              else r.t[r.p] = r.e;
              else r.setRatio(t);
              r = r._next
            }
      }, d._enableTransforms = function(t) {
        this._transform = this._transform || Fe(this._target, r, !0), this._transformType = this._transform.svg && be || !t && 3 !== this._transformType ? 2 : 3
      };
      var Ve = function() {
        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
      };
      d._addLazySet = function(t, e, i) {
        var n = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
        n.e = i, n.setRatio = Ve, n.data = this
      }, d._linkCSSP = function(t, e, i, n) {
        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
      }, d._kill = function(e) {
        var i, n, r, s = e;
        if (e.autoAlpha || e.alpha) {
          s = {};
          for (n in e) s[n] = e[n];
          s.opacity = 1, s.autoAlpha && (s.visibility = 1)
        }
        return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
      };
      var Ye = function(t, e, i) {
        var n, r, s, a;
        if (t.slice)
          for (r = t.length; --r > -1;) Ye(t[r], e, i);
        else
          for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], a = s.type, s.style && (e.push(K(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Ye(s, e, i)
      };
      return a.cascadeTo = function(t, i, n) {
        var r, s, a, o, l = e.to(t, i, n)
          , d = [l]
          , h = []
          , u = []
          , c = []
          , p = e._internals.reservedProps;
        for (t = l._targets || l.target, Ye(t, h, c), l.render(i, !0, !0), Ye(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
          if (s = J(c[r], h[r], u[r]), s.firstMPT) {
            s = s.difs;
            for (a in n) p[a] && (s[a] = n[a]);
            o = {};
            for (a in s) o[a] = h[r][a];
            d.push(e.fromTo(c[r], i, o, s))
          }
        return d
      }, t.activate([a]), a
    }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()()
  , function(t) {
    "use strict";
    var e = function() {
      return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
  }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(t) {
  "use strict";
  var e = t.GreenSockGlobals || t
    , i = function(t) {
      var i, n = t.split(".")
        , r = e;
      for (i = 0; n.length > i; i++) r[n[i]] = r = r[n[i]] || {};
      return r
    }
    , n = i("com.greensock.utils")
    , r = function(t) {
      var e = t.nodeType
        , i = "";
      if (1 === e || 9 === e || 11 === e) {
        if ("string" == typeof t.textContent) return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
      } else if (3 === e || 4 === e) return t.nodeValue;
      return i
    }
    , s = document
    , a = s.defaultView ? s.defaultView.getComputedStyle : function() {}
    , o = /([A-Z])/g
    , l = function(t, e, i, n) {
      var r;
      return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
    }
    , d = function(t) {
      return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
    }
    , h = function(t) {
      var e, i, n, r = []
        , s = t.length;
      for (e = 0; s > e; e++)
        if (i = t[e], d(i))
          for (n = i.length, n = 0; i.length > n; n++) r.push(i[n]);
        else r.push(i);
      return r
    }
    , u = ")eefec303079ad17405c"
    , c = /(?:<br>|<br\/>|<br \/>)/gi
    , p = s.all && !s.addEventListener
    , f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'")
    , g = function(t) {
      t = t || "";
      var e = -1 !== t.indexOf("++")
        , i = 1;
      return e && (t = t.split("++").join(""))
        , function() {
          return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
        }
    }
    , m = n.SplitText = e.SplitText = function(t, e) {
      if ("string" == typeof t && (t = m.selector(t)), !t) throw "cannot split a null element.";
      this.elements = d(t) ? h(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
    }
    , _ = function(t, e, i) {
      var n = t.nodeType;
      if (1 === n || 9 === n || 11 === n)
        for (t = t.firstChild; t; t = t.nextSibling) _(t, e, i);
      else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
    }
    , v = function(t, e) {
      for (var i = e.length; --i > -1;) t.push(e[i])
    }
    , y = function(t, e, i, n, o) {
      c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
      var d, h, p, f, m, y, w, b, x, T, P, S, k, O, C = r(t)
        , A = e.type || e.split || "chars,words,lines"
        , L = -1 !== A.indexOf("lines") ? [] : null
        , R = -1 !== A.indexOf("words")
        , M = -1 !== A.indexOf("chars")
        , I = "absolute" === e.position || e.absolute === !0
        , z = I ? "&#173; " : " "
        , E = -999
        , F = a(t)
        , D = l(t, "paddingLeft", F)
        , N = l(t, "borderBottomWidth", F) + l(t, "borderTopWidth", F)
        , j = l(t, "borderLeftWidth", F) + l(t, "borderRightWidth", F)
        , B = l(t, "paddingTop", F) + l(t, "paddingBottom", F)
        , X = l(t, "paddingLeft", F) + l(t, "paddingRight", F)
        , H = l(t, "textAlign", F, !0)
        , V = t.clientHeight
        , Y = t.clientWidth
        , W = "</div>"
        , q = g(e.wordsClass)
        , U = g(e.charsClass)
        , G = -1 !== (e.linesClass || "").indexOf("++")
        , Q = e.linesClass
        , Z = -1 !== C.indexOf("<")
        , $ = !0
        , K = []
        , J = []
        , te = [];
      for (G && (Q = Q.split("++").join("")), Z && (C = C.split("<").join("{{LT}}")), d = C.length, f = q(), m = 0; d > m; m++)
        if (w = C.charAt(m), ")" === w && C.substr(m, 20) === u) f += ($ ? W : "") + "<BR/>", $ = !1, m !== d - 20 && C.substr(m + 20, 20) !== u && (f += " " + q(), $ = !0), m += 19;
        else if (" " === w && " " !== C.charAt(m - 1) && m !== d - 1 && C.substr(m - 20, 20) !== u) {
        for (f += $ ? W : "", $ = !1;
          " " === C.charAt(m + 1);) f += z, m++;
        (")" !== C.charAt(m + 1) || C.substr(m + 1, 20) !== u) && (f += z + q(), $ = !0)
      } else f += M && " " !== w ? U() + w + "</div>" : w;
      for (t.innerHTML = f + ($ ? W : ""), Z && _(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), d = y.length, b = [], m = 0; d > m; m++) b[m] = y[m];
      if (L || I)
        for (m = 0; d > m; m++) x = b[m], p = x.parentNode === t, (p || I || M && !R) && (T = x.offsetTop, L && p && T !== E && "BR" !== x.nodeName && (h = [], L.push(h), E = T), I && (x._x = x.offsetLeft, x._y = T, x._w = x.offsetWidth, x._h = x.offsetHeight), L && (R !== p && M || (h.push(x), x._x -= D), p && m && (b[m - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && L.push([])));
      for (m = 0; d > m; m++) x = b[m], p = x.parentNode === t, "BR" !== x.nodeName ? (I && (S = x.style, R || p || (x._x += x.parentNode._x, x._y += x.parentNode._y), S.left = x._x + "px", S.top = x._y + "px", S.position = "absolute", S.display = "block", S.width = x._w + 1 + "px", S.height = x._h + "px"), R ? p && "" !== x.innerHTML ? J.push(x) : M && K.push(x) : p ? (t.removeChild(x), b.splice(m--, 1), d--) : !p && M && (T = !L && !I && x.nextSibling, t.appendChild(x), T || t.appendChild(s.createTextNode(" ")), K.push(x))) : L || I ? (t.removeChild(x), b.splice(m--, 1), d--) : R || t.appendChild(x);
      if (L) {
        for (I && (P = s.createElement("div"), t.appendChild(P), k = P.offsetWidth + "px", T = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
        for (O = !I || !R && !M, m = 0; L.length > m; m++) {
          for (h = L[m], P = s.createElement("div"), P.style.cssText = "display:block;text-align:" + H + ";position:" + (I ? "absolute;" : "relative;"), Q && (P.className = Q + (G ? m + 1 : "")), te.push(P), d = h.length, y = 0; d > y; y++) "BR" !== h[y].nodeName && (x = h[y], P.appendChild(x), O && (x._wordEnd || R) && P.appendChild(s.createTextNode(" ")), I && (0 === y && (P.style.top = x._y + "px", P.style.left = D + T + "px"), x.style.top = "0px", T && (x.style.left = x._x - T + "px")));
          0 === d && (P.innerHTML = "&nbsp;"), R || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), I && (P.style.width = k, P.style.height = x._h + "px"), t.appendChild(P)
        }
        t.style.cssText = S
      }
      I && (V > t.clientHeight && (t.style.height = V - B + "px", V > t.clientHeight && (t.style.height = V + N + "px")), Y > t.clientWidth && (t.style.width = Y - X + "px", Y > t.clientWidth && (t.style.width = Y + j + "px"))), v(i, K), v(n, J), v(o, te)
    }
    , w = m.prototype;
  w.split = function(t) {
    this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
    for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
  }, w.revert = function() {
    if (!this._originals) throw "revert() call wasn't scoped properly.";
    for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
  }, m.selector = t.$ || t.jQuery || function(e) {
    var i = t.$ || t.jQuery;
    return i ? (m.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
  }, m.version = "0.3.3"
}(_gsScope)
, function(t) {
  "use strict";
  var e = function() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t]
  };
  "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");
try {
  window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
  window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (1 == window.tplogs) try {
  console.groupEnd()
} catch (e) {}! function(t) {
  t.waitForImages = {
    hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
  }, t.expr[":"].uncached = function(e) {
    var i = document.createElement("img");
    return i.src = e.src, t(e).is('img[src!=""]') && !i.complete
  }, t.fn.waitForImages = function(e, i, n) {
    if (t.isPlainObject(arguments[0]) && (i = e.each, n = e.waitForAll, e = e.finished), e = e || t.noop, i = i || t.noop, n = !!n, !t.isFunction(e) || !t.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
    return this.each(function() {
      var r = t(this)
        , s = [];
      if (n) {
        var a = t.waitForImages.hasImageProperties || []
          , o = /url\((['"]?)(.*?)\1\)/g;
        r.find("*").each(function() {
          var e = t(this);
          e.is("img:uncached") && s.push({
            src: e.attr("src")
            , element: e[0]
          }), t.each(a, function(t, i) {
            var n = e.css(i);
            if (!n) return !0;
            for (var r; r = o.exec(n);) s.push({
              src: r[2]
              , element: e[0]
            })
          })
        })
      } else r.find("img:uncached").each(function() {
        s.push({
          src: this.src
          , element: this
        })
      });
      var l = s.length
        , d = 0;
      0 == l && e.call(r[0]), t.each(s, function(n, s) {
        var a = new Image;
        t(a).bind("load error", function(t) {
          return d++, i.call(s.element, d, l, "load" == t.type), d == l ? (e.call(r[0]), !1) : void 0
        }), a.src = s.src
      })
    })
  }
}(jQuery), ! function(t, e) {
  "use strict";
  t.fn.extend({
    revolution: function(n) {
      var r = {
        delay: 9e3
        , responsiveLevels: 4064
        , gridwidth: 960
        , gridheight: 500
        , minHeight: 0
        , autoHeight: "off"
        , sliderType: "standard"
        , sliderLayout: "auto"
        , fullScreenAutoWidth: "on"
        , fullScreenAlignForce: "off"
        , fullScreenOffsetContainer: ""
        , fullScreenOffset: "0"
        , hideCaptionAtLimit: 0
        , hideAllCaptionAtLimit: 0
        , hideSliderAtLimit: 0
        , disableProgressBar: "off"
        , stopAtSlide: -1
        , stopAfterLoops: -1
        , shadow: 0
        , dottedOverlay: "none"
        , startDelay: 0
        , lazyType: "smart"
        , spinner: "spinner0"
        , shuffle: "off"
        , viewPort: {
          enable: !1
          , outof: "wait"
          , visible_area: "60%"
        }
        , fallbacks: {
          isJoomla: !1
          , panZoomDisableOnMobile: "off"
          , simplifyAll: "on"
          , nextSlideOnWindowFocus: "off"
          , disableFocusListener: !0
        }
        , parallax: {
          type: "off"
          , levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
          , origo: "enterpoint"
          , speed: 400
          , bgparallax: "on"
          , opacity: "on"
          , disable_onmobile: "off"
        }
        , carousel: {
          horizontal_align: "center"
          , vertical_align: "center"
          , infinity: "on"
          , space: 0
          , maxVisibleItems: 3
          , stretch: "off"
          , fadeout: "on"
          , maxRotation: 0
          , minScale: 0
          , vary_fade: "off"
          , vary_rotation: "on"
          , vary_scale: "off"
          , border_radius: "0px"
          , padding_top: 0
          , padding_bottom: 0
        }
        , navigation: {
          keyboardNavigation: "on"
          , keyboard_direction: "horizontal"
          , mouseScrollNavigation: "off"
          , onHoverStop: "on"
          , touch: {
            touchenabled: "off"
            , swipe_treshold: 75
            , swipe_min_touches: 1
            , drag_block_vertical: !1
            , swipe_direction: "horizontal"
          }
          , arrows: {
            style: ""
            , enable: !1
            , hide_onmobile: !1
            , hide_onleave: !0
            , hide_delay: 200
            , hide_delay_mobile: 1200
            , hide_under: 0
            , hide_over: 9999
            , tmp: ""
            , left: {
              h_align: "left"
              , v_align: "center"
              , h_offset: 20
              , v_offset: 0
            }
            , right: {
              h_align: "right"
              , v_align: "center"
              , h_offset: 20
              , v_offset: 0
            }
          }
          , bullets: {
            style: ""
            , enable: !1
            , hide_onmobile: !1
            , hide_onleave: !0
            , hide_delay: 200
            , hide_delay_mobile: 1200
            , hide_under: 0
            , hide_over: 9999
            , direction: "horizontal"
            , h_align: "left"
            , v_align: "center"
            , space: 0
            , h_offset: 20
            , v_offset: 0
            , tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
          }
          , thumbnails: {
            style: ""
            , enable: !1
            , width: 100
            , height: 50
            , min_width: 100
            , wrapper_padding: 2
            , wrapper_color: "#f5f5f5"
            , wrapper_opacity: 1
            , tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>'
            , visibleAmount: 5
            , hide_onmobile: !1
            , hide_onleave: !0
            , hide_delay: 200
            , hide_delay_mobile: 1200
            , hide_under: 0
            , hide_over: 9999
            , direction: "horizontal"
            , span: !1
            , position: "inner"
            , space: 2
            , h_align: "left"
            , v_align: "center"
            , h_offset: 20
            , v_offset: 0
          }
          , tabs: {
            style: ""
            , enable: !1
            , width: 100
            , min_width: 100
            , height: 50
            , wrapper_padding: 10
            , wrapper_color: "#f5f5f5"
            , wrapper_opacity: 1
            , tmp: '<span class="tp-tab-image"></span>'
            , visibleAmount: 5
            , hide_onmobile: !1
            , hide_onleave: !0
            , hide_delay: 200
            , hide_delay_mobile: 1200
            , hide_under: 0
            , hide_over: 9999
            , direction: "horizontal"
            , span: !1
            , space: 0
            , position: "inner"
            , h_align: "left"
            , v_align: "center"
            , h_offset: 20
            , v_offset: 0
          }
        }
        , extensions: "extensions/"
        , extensions_suffix: ".min.js"
        , debugMode: !1
      };

      return n = t.extend(!0, {}, r, n), this.each(function() {
        var r = t(this);
        "hero" == n.sliderType && r.find(">ul>li").each(function(e) {
          e > 0 && t(this).remove()
        }), n.jsFileLocation = n.jsFileLocation || o("themepunch.revolution.min.js"), n.jsFileLocation = n.jsFileLocation + n.extensions, n.scriptsneeded = s(n, r), n.curWinRange = 0, t(this).on("scriptsloaded", function() {
          return n.modulesfailing ? (r.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + n.errorm + "</div>").show(), !1) : (i.migration != e && (n = i.migration(r, n)), punchgs.force3D = !0, "on" !== n.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(r, n), void u(r, n))
        }), a(r, n.scriptsneeded)
      })
    }
    , revaddcallback: function(i) {
      return this.each(function() {
        var n = t(this);
        if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
          var r = n.parent().find(".tp-bannertimer")
            , s = r.data("opt");
          s.callBackArray === e && (s.callBackArray = new Array), s.callBackArray.push(i)
        }
      })
    }
    , revgetparallaxproc: function() {
      var i = t(this);
      if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
        var n = i.parent().find(".tp-bannertimer")
          , r = n.data("opt");
        return r.scrollproc
      }
    }
    , revdebugmode: function() {
      return this.each(function() {
        var i = t(this);
        if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
          var n = i.parent().find(".tp-bannertimer")
            , r = n.data("opt");
          r.debugMode = !0, m(i, r)
        }
      })
    }
    , revscroll: function(i) {
      return this.each(function() {
        var n = t(this);
        n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0 && t("body,html").animate({
          scrollTop: n.offset().top + opt.li.height() - i + "px"
        }, {
          duration: 400
        })
      })
    }
    , revredraw: function() {
      return this.each(function() {
        var i = t(this);
        if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
          var n = i.parent().find(".tp-bannertimer")
            , r = n.data("opt");
          m(i, r)
        }
      })
    }
    , revkill: function() {
      var n = this
        , r = t(this);
      if (punchgs.TweenLite.killDelayedCallsTo(showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), r != e && r.length > 0 && t("body").find("#" + r.attr("id")).length > 0) {
        r.data("conthover", 1), r.data("conthover-changed", 1), r.trigger("revolution.slide.onpause");
        var s = r.parent().find(".tp-bannertimer")
          , a = s.data("opt");
        a.tonpause = !0, r.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), r.unbind("hover, mouseover, mouseenter,mouseleave, resize");
        var o = "resize.revslider-" + r.attr("id");
        t(window).off(o), r.find("*").each(function() {
          var i = t(this);
          i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != e && i.data("tween").kill(), i.data("kenburn") != e && i.data("kenburn").kill(), i.data("timeline_out") != e && i.data("timeline_out").kill(), i.data("timeline") != e && i.data("timeline").kill(), i.remove(), i.empty(), i = null
        }), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), s.remove();
        try {
          r.closest(".forcefullwidth_wrapper_tp_banner").remove()
        } catch (l) {}
        try {
          r.closest(".rev_slider_wrapper").remove()
        } catch (l) {}
        try {
          r.remove()
        } catch (l) {}
        return r.empty(), r.html(), r = null, a = null, delete n.c, delete n.opt, !0
      }
      return !1
    }
    , revpause: function() {
      return this.each(function() {
        var i = t(this);
        if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
          i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
          var n = i.parent().find(".tp-bannertimer")
            , r = n.data("opt");
          r.tonpause = !0, i.trigger("stoptimer")
        }
      })
    }
    , revresume: function() {
      return this.each(function() {
        var i = t(this);
        if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
          i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
          var n = i.parent().find(".tp-bannertimer")
            , r = n.data("opt");
          r.tonpause = !1, i.trigger("starttimer")
        }
      })
    }
    , revnext: function() {
      return this.each(function() {
        var n = t(this);
        if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
          var r = n.parent().find(".tp-bannertimer")
            , s = r.data("opt");
          i.callingNewSlide(s, n, 1)
        }
      })
    }
    , revprev: function() {
      return this.each(function() {
        var n = t(this);
        if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
          var r = n.parent().find(".tp-bannertimer")
            , s = r.data("opt");
          i.callingNewSlide(s, n, -1)
        }
      })
    }
    , revmaxslide: function() {
      return t(this).find(".tp-revslider-mainul >li").length
    }
    , revcurrentslide: function() {
      var i = t(this);
      if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
        var n = i.parent().find(".tp-bannertimer")
          , r = n.data("opt");
        return parseInt(r.act, 0) + 1
      }
    }
    , revlastslide: function() {
      return t(this).find(".tp-revslider-mainul >li").length
    }
    , revshowslide: function(n) {
      return this.each(function() {
        var r = t(this);
        if (r != e && r.length > 0 && t("body").find("#" + r.attr("id")).length > 0) {
          var s = r.parent().find(".tp-bannertimer")
            , a = s.data("opt");
          i.callingNewSlide(a, r, "to" + (n - 1))
        }
      })
    }
    , revcallslidewithid: function(n) {
      return this.each(function() {
        var r = t(this);
        if (r != e && r.length > 0 && t("body").find("#" + r.attr("id")).length > 0) {
          var s = r.parent().find(".tp-bannertimer")
            , a = s.data("opt");
          i.callingNewSlide(a, r, n)
        }
      })
    }
  });
  var i = t.fn.revolution;
  t.extend(!0, i, {
    simp: function(t, e, i) {
      var n = Math.abs(t) - Math.floor(Math.abs(t / e)) * e;
      return i ? n : 0 > t ? -1 * n : n
    }
    , iOSVersion: function() {
      var t = !1;
      return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t
    }
    , isIE: function(e, i) {
      var n = t('<div style="display:none;"/>').appendTo(t("body"));
      n.html("<!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
      var r = n.find("a").length;
      return n.remove(), r
    }
    , is_mobile: function() {
      var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"]
        , e = !1;
      for (var i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
      return e
    }
    , callBackHandling: function(e, i, n) {
      try {
        e.callBackArray && t.each(e.callBackArray, function(t, e) {
          e && e.inmodule && e.inmodule === i && e.atposition && e.atposition === n && e.callback && e.callback.call()
        })
      } catch (r) {
        console.log("Call Back Failed")
      }
    }
    , get_browser: function() {
      var t, e = navigator.appName
        , i = navigator.userAgent
        , n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"], n[0]
    }
    , get_browser_version: function() {
      var t, e = navigator.appName
        , i = navigator.userAgent
        , n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"], n[1]
    }
    , getHorizontalOffset: function(t, e) {
      var i = h(t, ".outer-left")
        , n = h(t, ".outer-right");
      switch (e) {
        case "left":
          return i;
        case "right":
          return n;
        case "both":
          return i + n
      }
    }
    , callingNewSlide: function(e, i, n) {
      var r = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index()
        , s = 0;
      i.find(".next-revslide").removeClass("next-revslide"), n && t.isNumeric(n) || n.match(/to/g) ? (1 === n || -1 === n ? (s = r + n, s = 0 > s ? e.slideamount - 1 : s >= e.slideamount ? 0 : s) : (n = t.isNumeric(n) ? n : parseInt(n.split("to")[1], 0), s = 0 > n ? 0 : n > e.slideamount - 1 ? e.slideamount - 1 : n), i.find(".tp-revslider-slidesli:eq(" + s + ")").addClass("next-revslide")) : n && i.find(".tp-revslider-slidesli").each(function() {
        var e = t(this);
        e.data("index") === n && e.addClass("next-revslide")
      }), s = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), s !== r && -1 != s ? C(i, e) : i.find(".next-revslide").removeClass("next-revslide")
    }
    , slotSize: function(i, n) {
      n.slotw = Math.ceil(n.width / n.slots), n.sloth = Math.ceil("fullscreen" == n.sliderLayout ? t(window).height() / n.slots : n.height / n.slots), "on" == n.autoHeight && i !== e && "" !== i && (n.sloth = Math.ceil(i.height() / n.slots))
    }
    , setSize: function(i) {
      var n = (i.top_outer || 0) + (i.bottom_outer || 0)
        , r = parseInt(i.carousel.padding_top || 0, 0)
        , s = parseInt(i.carousel.padding_bottom || 0, 0)
        , a = i.gridheight[i.curWinRange];
      if (a = a < i.minHeight ? i.minHeight : a, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
          maxHeight: a + "px"
        }), i.c.css({
          marginTop: r
          , marginBottom: s
        }), i.width = i.ul.width(), i.height = i.ul.height(), _(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout) {
        i.height = i.bw * i.gridheight[i.curWinRange];
        var o = (i.c.parent().width(), t(window).height());
        if (i.fullScreenOffsetContainer != e) {
          try {
            var l = i.fullScreenOffsetContainer.split(",");
            l && t.each(l, function(e, i) {
              o = t(i).length > 0 ? o - t(i).outerHeight(!0) : o
            })
          } catch (d) {}
          try {
            i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != e && i.fullScreenOffset.length > 0 ? o -= t(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != e && i.fullScreenOffset.length > 0 && (o -= parseInt(i.fullScreenOffset, 0))
          } catch (d) {}
        }
        o = o < i.minHeight ? i.minHeight : o, o -= n, i.c.parent().height(o), i.c.closest(".rev_slider_wrapper").height(o), i.c.css({
          height: "100%"
        }), i.height = o, i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight)
      } else i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
      var h = {
        height: r + s + n + i.height
      };
      i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(h), i.c.closest(".rev_slider_wrapper").css(h), _(i)
    }
    , enterInViewPort: function(n) {
      n.waitForCountDown && (M(n.c, n), n.waitForCountDown = !1), n.waitForFirstSlide && (C(n.c, n), n.waitForFirstSlide = !1), ("playing" == n.sliderlaststatus || n.sliderlaststatus == e) && n.c.trigger("starttimer"), n.lastplayedvideos != e && n.lastplayedvideos.length > 0 && t.each(n.lastplayedvideos, function(t, e) {
        i.playVideo(e, n)
      })
    }
    , leaveViewPort: function(n) {
      n.sliderlaststatus = n.sliderstatus, n.c.trigger("stoptimer"), n.playingvideos != e && n.playingvideos.length > 0 && (n.lastplayedvideos = t.extend(!0, [], n.playingvideos), n.playingvideos && t.each(n.playingvideos, function(t, e) {
        i.stopVideo && i.stopVideo(e, n)
      }))
    }
  });
  var n = i.is_mobile()
    , r = function(i, n) {
      return t("body").data(i) ? !1 : n.filesystem ? (n.errorm === e && (n.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), n.errorm = n.errorm + '<br>&lt;script type="text/javascript" src="' + n.jsFileLocation + i + n.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(n.jsFileLocation + i + n.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), n.modulesfailing = !0, !1) : (t.ajax({
        url: n.jsFileLocation + i + n.extensions_suffix
        , dataType: "script"
        , cache: !0
        , error: function(t) {
          console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + n.extensions_suffix + " on Path:" + n.jsFileLocation), console.info(t)
        }
      }), void t("body").data(i, !0))
    }
    , s = function(n, s) {
      var a = new Object
        , o = n.navigation;
      return a.kenburns = !1, a.parallax = !1, a.carousel = !1, a.navigation = !1, a.videos = !1, a.actions = !1, a.layeranim = !1, a.migration = !1, s.data("version") && s.data("version").match(/5./gi) ? (s.find("img").each(function() {
        "on" == t(this).data("kenburns") && (a.kenburns = !0)
      }), ("carousel" == n.sliderType || "on" == o.keyboardNavigation || "on" == o.mouseScrollNavigation || "on" == o.touch.touchenabled || o.arrows.enable || o.bullets.enable || o.thumbnails.enable || o.tabs.enable) && (a.navigation = !0), s.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
        var i = t(this);
        (i.data("ytid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (a.videos = !0), (i.data("vimeoid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (a.videos = !0), i.data("actions") !== e && (a.actions = !0), a.layeranim = !0
      }), s.find("li").each(function() {
        t(this).data("link") && t(this).data("link") != e && (a.layeranim = !0, a.actions = !0)
      }), !a.videos && (s.find(".rs-background-video-layer").length > 0 || s.find(".tp-videolayer").length > 0 || s.find("iframe").length > 0 || s.find("video").length > 0) && (a.videos = !0), "carousel" == n.sliderType && (a.carousel = !0), ("off" !== n.parallax.type || n.viewPort.enable || "true" == n.viewPort.enable) && (a.parallax = !0)) : (a.kenburns = !0, a.parallax = !0, a.carousel = !1, a.navigation = !0, a.videos = !0, a.actions = !0, a.layeranim = !0, a.migration = !0), "hero" == n.sliderType && (a.carousel = !1, a.navigation = !1), window.location.href.match(/file:/gi) && (a.filesystem = !0, n.filesystem = !0), a.videos && "undefined" == typeof i.isVideoPlaying && r("revolution.extension.video", n), a.carousel && "undefined" == typeof i.prepareCarousel && r("revolution.extension.carousel", n), a.carousel || "undefined" != typeof i.animateSlide || r("revolution.extension.slideanims", n), a.actions && "undefined" == typeof i.checkActions && r("revolution.extension.actions", n), a.layeranim && "undefined" == typeof i.handleStaticLayers && r("revolution.extension.layeranimation", n), a.kenburns && "undefined" == typeof i.stopKenBurn && r("revolution.extension.kenburn", n), a.navigation && "undefined" == typeof i.createNavigation && r("revolution.extension.navigation", n), a.migration && "undefined" == typeof i.migration && r("revolution.extension.migration", n), a.parallax && "undefined" == typeof i.checkForParallax && r("revolution.extension.parallax", n), a
    }
    , a = function(t, e) {
      e.filesystem || "undefined" != typeof punchgs && (!e.kenburns || e.kenburns && "undefined" != typeof i.stopKenBurn) && (!e.navigation || e.navigation && "undefined" != typeof i.createNavigation) && (!e.carousel || e.carousel && "undefined" != typeof i.prepareCarousel) && (!e.videos || e.videos && "undefined" != typeof i.resetVideo) && (!e.actions || e.actions && "undefined" != typeof i.checkActions) && (!e.layeranim || e.layeranim && "undefined" != typeof i.handleStaticLayers) && (!e.migration || e.migration && "undefined" != typeof i.migration) && (!e.parallax || e.parallax && "undefined" != typeof i.checkForParallax) && (e.carousel || !e.carousel && "undefined" != typeof i.animateSlide) ? t.trigger("scriptsloaded") : setTimeout(function() {
        a(t, e)
      }, 50)
    }
    , o = function() {
      var e = new RegExp("themepunch.revolution.min.js", "gi")
        , i = "";
      return t("script").each(function() {
        var n = t(this).attr("src");
        n && n.match(e) && (i = n)
      }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0]
    }
    , l = function(e) {
      var i = 9999
        , n = 0
        , r = 0
        , s = 0
        , a = t(window).width();
      e.responsiveLevels && e.responsiveLevels.length && t.each(e.responsiveLevels, function(t, e) {
        e > a && (0 == n || n > e) && (i = e, s = t, n = e), a > e && e > n && (n = e, r = t)
      }), i > n && (s = r), e.curWinRange = s
    }
    , d = function(t, e) {
      e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%"
    }
    , h = function(e, i) {
      var n = 0;
      return e.find(i).each(function() {
        var e = t(this);
        !e.hasClass("tp-forcenotvisible") && n < e.outerWidth() && (n = e.outerWidth())
      }), n
    }
    , u = function(r, s) {
      if (r == e) return !1;
      if (r.data("aimg") != e && ("enabled" == r.data("aie8") && i.isIE(8) || "enabled" == r.data("amobile") && n) && r.html('<img class="tp-slider-alternative-image" src="' + r.data("aimg") + '">'), r.find(">ul").addClass("tp-revslider-mainul"), s.c = r, s.ul = r.find(".tp-revslider-mainul"), s.cid = r.attr("id"), s.ul.css({
          visibility: "visible"
        }), s.slideamount = s.ul.find(">li").length, s.slayers = r.find(".tp-static-layers"), s.ul.find(">li").each(function(e) {
          t(this).data("originalindex", e)
        }), "on" == s.shuffle) {
        var a = new Object
          , o = s.ul.find(">li:first-child");
        a.fstransition = o.data("fstransition"), a.fsmasterspeed = o.data("fsmasterspeed"), a.fsslotamount = o.data("fsslotamount");
        for (var d = 0; d < s.slideamount; d++) {
          var h = Math.round(Math.random() * s.slideamount);
          s.ul.find(">li:eq(" + h + ")").prependTo(s.ul)
        }
        var u = s.ul.find(">li:first-child");
        u.data("fstransition", a.fstransition), u.data("fsmasterspeed", a.fsmasterspeed), u.data("fsslotamount", a.fsslotamount), s.li = s.ul.find(">li")
      }
      if (s.li = s.ul.find(">li"), s.thumbs = new Array, s.slots = 4, s.act = -1, s.firststart = 1, s.loadqueue = new Array, s.syncload = 0, s.conw = r.width(), s.conh = r.height(), s.responsiveLevels.length > 1 ? s.responsiveLevels[0] = 9999 : s.responsiveLevels = 9999, t.each(s.li, function(i, n) {
          var n = t(n)
            , r = n.find(".rev-slidebg") || n.find("img").first()
            , a = 0;
          n.addClass("tp-revslider-slidesli"), n.data("index") === e && n.data("index", "rs-" + Math.round(999999 * Math.random()));
          var o = new Object;
          o.params = new Array, o.id = n.data("index"), o.src = n.data("thumb") !== e ? n.data("thumb") : r.data("lazyload") !== e ? r.data("lazyload") : r.attr("src"), n.data("title") !== e && o.params.push({
            from: RegExp("\\{\\{title\\}\\}", "g")
            , to: n.data("title")
          }), n.data("description") !== e && o.params.push({
            from: RegExp("\\{\\{description\\}\\}", "g")
            , to: n.data("description")
          });
          for (var a = 1; 10 >= a; a++) n.data("param" + a) !== e && o.params.push({
            from: RegExp("\\{\\{param" + a + "\\}\\}", "g")
            , to: n.data("param" + a)
          });
          if (s.thumbs.push(o), n.data("origindex", n.index()), n.data("link") != e) {
            var l = n.data("link")
              , d = n.data("target") || "_self"
              , h = "back" === n.data("slideindex") ? 0 : 60
              , u = n.data("linktoslide")
              , c = u;
            u != e && "next" != u && "prev" != u && s.li.each(function() {
              var e = t(this);
              e.data("origindex") + 1 == c && (u = e.index() + 1)
            }), "slide" != l && (u = "no");
            var p = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + h + ';" data-x="center" data-y="center" '
              , f = "scroll_under" === u ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : '[{"event":"click","action":"jumptoslide","slide":"2","delay":"0.2"}]';
            p = "no" == u ? p + ' data-start="0">' : p + "data-actions='" + f + '\' data-start="0">', p += '<a style="width:100%;height:100%;display:block"', p = "slide" != l ? p + ' target="' + d + '" href="' + l + '"' : p, p += '><span style="width:100%;height:100%;display:block"></span></a></div>', n.append(p)
          }
        }), s.rle = s.responsiveLevels.length || 1, s.gridwidth = c(s.gridwidth, s.rle), s.gridheight = c(s.gridheight, s.rle), "on" == s.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (r.find(".tp-caption").each(function() {
          var e = t(this);
          e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400)
        }), s.li.each(function() {
          var e = t(this);
          e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
          var i = e.find(".rev-slidebg") || e.find(">img").first();
          i.data("kenburns", "off")
        })), s.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.autoHeight = "fullscreen" == s.sliderLayout ? "on" : s.autoHeight, "fullwidth" == s.sliderLayout && "off" == s.autoHeight && r.css({
          maxHeight: s.gridheight[s.curWinRange] + "px"
        }), "auto" != s.sliderLayout && 0 == r.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== s.sliderLayout || "on" != s.fullScreenAutoWidth)) {
        var _ = r.parent()
          , y = _.css("marginBottom")
          , w = _.css("marginTop");
        y = y === e ? 0 : y, w = w === e ? 0 : w, _.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + w + ";margin-bottom:" + y + '"></div>'), r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + r.height() + 'px"></div>'), r.parent().css({
          marginTop: "0px"
          , marginBottom: "0px"
        }), r.parent().css({
          position: "absolute"
        })
      }
      if (s.shadow !== e && s.shadow > 0 && (r.parent().addClass("tp-shadow" + s.shadow), r.parent().append('<div class="tp-shadowcover"></div>'), r.parent().find(".tp-shadowcover").css({
          backgroundColor: r.parent().css("backgroundColor")
          , backgroundImage: r.parent().css("backgroundImage")
        })), l(s), !r.hasClass("revslider-initialised")) {
        r.addClass("revslider-initialised"), r.addClass("tp-simpleresponsive"), r.attr("id") == e && r.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), s.firefox13 = !1, s.ie = !t.support.opacity, s.ie9 = 9 == document.documentMode, s.origcd = s.delay;
        var b = t.fn.jquery.split(".")
          , x = parseFloat(b[0])
          , T = parseFloat(b[1]);
        parseFloat(b[2] || "0"), 1 == x && 7 > T && r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), x > 1 && (s.ie = !1);
        var P = new Object;
        P.addedyt = 0, P.addedvim = 0, P.addedvid = 0, r.find(".tp-caption, .rs-background-video-layer").each(function() {
          var r = t(this)
            , a = r.data("autoplayonlyfirsttime")
            , o = r.data("autoplay");
          r.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(r, s);
          var l = 0;
          if (r.find("iframe").each(function() {
              punchgs.TweenLite.set(t(this), {
                autoAlpha: 0
              }), l++
            }), l > 0 && r.data("iframes", !0), r.hasClass("tp-caption")) {
            var d = r.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
            r.wrap('<div class="tp-parallax-wrap" style="' + d + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + d + 'position:absolute;"><div class="tp-mask-wrap" style="' + d + 'position:absolute" ></div></div></div>');
            var h = ["pendulum", "rotate", "slideloop", "pulse", "wave"]
              , u = r.closest(".tp-loop-wrap");
            t.each(h, function(t, e) {
              var i = r.find(".rs-" + e)
                , n = i.data() || "";
              "" != n && (u.data(n), u.addClass("rs-" + e), i.children(0).unwrap(), r.data("loopanimation", "on"))
            }), punchgs.TweenLite.set(r, {
              visibility: "hidden"
            })
          }
          var c = r.data("actions");
          c !== e && i.checkActions(r, s, c), p(r, s), i.checkVideoApis && (P = i.checkVideoApis(r, s, P)), n && ((1 == a || "true" == a) && (r.data("autoplayonlyfirsttime", "false"), a = !1), (1 == o || "true" == o || "on" == o || "1sttime" == o) && (r.data("autoplay", "off"), o = "off")), (1 == a || "true" == a || "1sttime" == o) && r.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == o || "true" == o || "on" == o || "no1sttime" == o) && r.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
        }), r.hover(function() {
          r.trigger("tp-mouseenter"), s.overcontainer = !0
        }, function() {
          r.trigger("tp-mouseleft"), s.overcontainer = !1
        }), r.on("mouseover", function() {
          r.trigger("tp-mouseover"), s.overcontainer = !0
        }), r.find(".tp-caption video").each(function() {
          var e = t(this);
          e.removeClass("video-js vjs-default-skin"), e.attr("preload", ""), e.css({
            display: "none"
          })
        }), "standard" !== s.sliderType && (s.lazyType = "all"), S(r.find(".tp-static-layers"), s, 0), O(r.find(".tp-static-layers img"), s, function() {
          r.find(".tp-static-layers img").each(function() {
            var i = t(this)
              , n = i.data("lazyload") != e ? i.data("lazyload") : i.attr("src")
              , r = k(s, n);
            i.attr("src", r.src)
          })
        }), s.li.each(function(e) {
          var i = t(this);
          ("all" == s.lazyType || "smart" == s.lazyType && (0 == e || 1 == e || e == s.slideamount || e == s.slideamount - 1)) && (S(i, s, e), O(i, s, function() {
            "carousel" == s.sliderType && punchgs.TweenLite.to(i, 1, {
              autoAlpha: 1
              , ease: punchgs.Power3.easeInOut
            })
          }))
        });
        var A = F("#")[0];
        if (A.length < 9 && A.split("slide").length > 1) {
          var L = parseInt(A.split("slide")[1], 0);
          1 > L && (L = 1), L > s.slideamount && (L = s.slideamount), s.startWithSlide = L - 1
        }
        r.append('<div class="tp-loader ' + s.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === r.find(".tp-bannertimer").length && r.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), r.find(".tp-bannertimer").css({
          width: "0%"
        }), r.find(".tp-bannertimer").data("opt", s), s.ul.css({
          display: "block"
        }), v(r, s), "off" !== s.parallax.type && i.checkForParallax(r, s), i.setSize(s), "hero" !== s.sliderType && i.createNavigation(r, s), i.resizeThumbsTabs && i.resizeThumbsTabs(s), f(s);
        var R = s.viewPort;
        s.inviewport = !1, R != e && R.enable && (R.visible_area = parseFloat(R.visible_area) / 100, R.visible_area = R.visible_area < .001 ? 100 * R.visible_area : R.visible_area, i.scrollTicker && i.scrollTicker(s, r)), setTimeout(function() {
          "carousel" == s.sliderType && i.prepareCarousel(s), !R.enable || R.enable && s.inviewport || R.enable && !s.inviewport && "wait" == !R.outof ? C(r, s) : s.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(s), s.slideamount > 1 && (!R.enable || R.enable && s.inviewport ? M(r, s) : s.waitForCountDown = !0), setTimeout(function() {
            r.trigger("revolution.slide.onloaded")
          }, 100)
        }, s.startDelay), s.startDelay = 0, t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
          t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
            t(window).trigger("resize")
          }, 200)
        });
        var I = "resize.revslider-" + r.attr("id");
        t(window).on(I, function() {
          return r == e ? !1 : (0 != t("body").find(r) && f(s), void((r.outerWidth(!0) != s.width || r.is(":hidden") || "fullscreen" == s.sliderLayout && t(window).height() != s.lastwindowheight) && (s.lastwindowheight = t(window).height(), m(r, s))))
        }), g(r, s), f(s), s.disableFocusListener || "true" == s.disableFocusListener || s.disableFocusListener === !0 || E(r, s)
      }
    }
    , c = function(e, i) {
      if (!t.isArray(e)) {
        var n = e;
        e = new Array, e.push(n)
      }
      if (e.length < i)
        for (var n = e[e.length - 1], r = 0; r < i - e.length + 2; r++) e.push(n);
      return e
    }
    , p = function(n, r) {
      "sliderenter" === n.data("start") && (r.layersonhover === e && (r.c.on("tp-mouseenter", function() {
        r.layersonhover && t.each(r.layersonhover, function(t, n) {
          n.data("animdirection", "in");
          var s = n.data("timeline_out")
            , a = "carousel" === r.sliderType ? 0 : r.width / 2 - r.gridwidth[r.curWinRange] * r.bw / 2
            , o = 0
            , l = n.closest(".tp-revslider-slidesli");
          if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) {
            s != e && (s.pause(0), s.kill()), i.animateSingleCaption(n, r, a, o, 0, !1, !0);
            var d = n.data("timeline");
            n.data("triggerstate", "on"), d.play(0)
          }
        })
      }), r.c.on("tp-mouseleft", function() {
        r.layersonhover && t.each(r.layersonhover, function(t, e) {
          e.data("animdirection", "out"), e.data("triggered", !0), e.data("triggerstate", "off"), i.stopVideo && i.stopVideo(e, r), i.endMoveCaption && i.endMoveCaption(e, null, null, r)
        })
      }), r.layersonhover = new Array), r.layersonhover.push(n))
    }
    , f = function(e) {
      if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) {
        var n = i.getHorizontalOffset(e.c, "left");
        punchgs.TweenLite.set(e.ul, {
          left: n
          , width: e.c.width() - i.getHorizontalOffset(e.c, "both")
        })
      } else {
        var n = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i.getHorizontalOffset(e.c, "left"));
        punchgs.TweenLite.set(e.c.parent(), {
          left: 0 - n + "px"
          , width: t(window).width() - i.getHorizontalOffset(e.c, "both")
        })
      }
      e.slayers && punchgs.TweenLite.set(e.slayers, {
        left: n
      })
    }
    , g = function(n, r, s) {
      var a = n.parent();
      t(window).width() < r.hideSliderAtLimit ? (n.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({
        display: "none"
      })) : n.is(":hidden") && s && (a.css(a.data("olddisplay") != e && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? {
        display: a.data("olddisplay")
      } : {
        display: "block"
      }), n.trigger("restarttimer"), setTimeout(function() {
        m(n, r)
      }, 150)), i.hideUnHideNav && i.hideUnHideNav(r)
    }
    , m = function(t, n) {
      if (l(n), !i.resizeThumbsTabs || i.resizeThumbsTabs(n) === !0) {
        if (g(t, n, !0), f(n), "carousel" == n.sliderType && i.prepareCarousel(n, !0), t === e) return !1;
        i.setSize(n), n.conw = n.c.width(), n.conh = n.c.height();
        var r = t.find(".active-revslide .slotholder")
          , s = t.find(".processing-revslide .slotholder");
        y(t, n, t, 2), "standard" === n.sliderType && (punchgs.TweenLite.set(s.find(".defaultimg"), {
          opacity: 0
        }), r.find(".defaultimg").css({
          opacity: 1
        })), "carousel" == n.sliderType && n.lastconw != n.conw && (clearTimeout(n.pcartimer), n.pcartimer = setTimeout(function() {
          i.prepareCarousel(n, !0)
        }, 100), n.lastconw = n.conw), i.manageNavigation && i.manageNavigation(n), i.animateTheCaptions && i.animateTheCaptions(t.find(".active-revslide"), n, !0), "on" == s.data("kenburns") && i.startKenBurn(s, n, s.data("kbtl").progress()), "on" == r.data("kenburns") && i.startKenBurn(r, n, r.data("kbtl").progress())
      }
    }
    , _ = function(t) {
      t.bw = t.width / t.gridwidth[t.curWinRange], t.bh = t.height / t.gridheight[t.curWinRange], t.bh > t.bw ? t.bh = t.bw : t.bw = t.bh, (t.bh > 1 || t.bw > 1) && (t.bw = 1, t.bh = 1)
    }
    , v = function(r, s) {
      if (r.find(".tp-caption").each(function() {
          var i = t(this);
          i.data("transition") !== e && i.addClass(i.data("transition"))
        }), s.ul.css({
          overflow: "hidden"
          , width: "100%"
          , height: "100%"
          , maxHeight: r.parent().css("maxHeight")
        }), "on" == s.autoHeight && (s.ul.css({
          overflow: "hidden"
          , width: "100%"
          , height: "100%"
          , maxHeight: "none"
        }), r.css({
          maxHeight: "none"
        }), r.parent().css({
          maxHeight: "none"
        })), s.li.each(function(i) {
          var n = t(this)
            , r = n.data("originalindex");
          (s.startWithSlide != e && r == s.startWithSlide || s.startWithSlide === e && 0 == i) && n.addClass("next-revslide"), n.css({
            width: "100%"
            , height: "100%"
            , overflow: "hidden"
          })
        }), "carousel" === s.sliderType) {
        s.ul.css({
          overflow: "visible"
        }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
        var a = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
        s.c.parent().prepend(a), s.c.parent().append(a), i.prepareCarousel(s)
      }
      r.parent().css({
        overflow: "visible"
      }), s.li.find(">img").each(function() {
        var i = t(this)
          , r = i.closest("li").find(".rs-background-video-layer");
        i.addClass("defaultimg"), "on" == s.panZoomDisableOnMobile && n && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
        var a = i.data();
        i.closest(".slotholder").data(a), r.length > 0 && a.bgparallax != e && r.data("bgparallax", a.bgparallax), "none" != s.dottedOverlay && s.dottedOverlay != e && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + s.dottedOverlay + '"></div>');
        var o = i.attr("src");
        a.src = o, a.bgfit = a.bgfit || "cover", a.bgrepeat = a.bgrepeat || "no-repeat", a.bgposition = a.bgposition || "center center";
        var l = i.closest(".slotholder");
        i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + a.bgrepeat + ";background-image:url(" + o + ");background-size:" + a.bgfit + ";background-position:" + a.bgposition + ';width:100%;height:100%;"></div>');
        var d = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
        i.replaceWith(d), i = l.find(".tp-bgimg"), i.data(a), i.attr("src", o), ("standard" === s.sliderType || "undefined" === s.sliderType) && i.css({
          opacity: 0
        })
      })
    }
    , y = function(e, i, n, r) {
      i.removePrepare = i.removePrepare + r, n.find(".slot").each(function() {
        t(this).remove()
      }), i.transition = 0, i.removePrepare = 0
    }
    , w = function(t) {
      var i = t;
      return t != e && t.length > 0 && (i = t.split("?")[0]), i
    }
    , b = function(t, e) {
      var i = t.split("/")
        , n = e.split("/");
      i.pop();
      for (var r = 0; r < n.length; r++) "." != n[r] && (".." == n[r] ? i.pop() : i.push(n[r]));
      return i.join("/")
    }
    , x = function(e, i, n) {
      i.syncload--, i.loadqueue && t.each(i.loadqueue, function(t, i) {
        var r = i.src.replace(/\.\.\/\.\.\//gi, "")
          , s = self.location.href
          , a = document.location.origin
          , o = s.substring(0, s.length - 1) + "/" + r
          , l = a + "/" + r
          , d = b(self.location.href, i.src);
        s = s.substring(0, s.length - 1) + r, a += r, (w(a) === w(decodeURIComponent(e.src)) || w(s) === w(decodeURIComponent(e.src)) || w(d) === w(decodeURIComponent(e.src)) || w(l) === w(decodeURIComponent(e.src)) || w(o) === w(decodeURIComponent(e.src)) || w(i.src) === w(decodeURIComponent(e.src)) || w(i.src).replace(/^.*\/\/[^\/]+/, "") === w(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && w(e.src).match(new RegExp(r))) && (i.progress = n, i.width = e.width, i.height = e.height)
      }), T(i)
    }
    , T = function(e) {
      3 != e.syncload && e.loadqueue && t.each(e.loadqueue, function(t, i) {
        if (i.progress.match(/prepared/g) && e.syncload <= 3) {
          e.syncload++;
          var n = new Image;
          n.onload = function() {
            x(this, e, "loaded")
          }, n.onerror = function() {
            x(this, e, "failed")
          }, n.src = i.src, i.progress = "inload"
        }
      })
    }
    , P = function(e, i, n) {
      var r = !1;
      if (i.loadqueue && t.each(i.loadqueue, function(t, i) {
          i.src === e && (r = !0)
        }), !r) {
        var s = new Object;
        s.src = e, s.prio = n, s.progress = "prepared", i.loadqueue.push(s)
      }
    }
    , S = function(i, n, r) {
      i.find("img,.defaultimg").each(function() {
        var i = t(this)
          , s = i.data("lazyload") !== e && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
        i.data("start-to-load", t.now()), P(s, n, r)
      }), T(n)
    }
    , k = function(e, i) {
      var n = new Object;
      return e.loadqueue && t.each(e.loadqueue, function(t, e) {
        e.src == i && (n = e)
      }), n
    }
    , O = function(n, r, s) {
      var a = !1;
      n.find("img,.defaultimg").each(function() {
        var s = t(this)
          , o = s.data("lazyload") != e ? s.data("lazyload") : s.attr("src")
          , l = k(r, o);
        if (s.data("loaded") === e && l !== e && l.progress && l.progress.match(/loaded/g)) {
          if (s.attr("src", l.src), s.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : s.css({
            backgroundImage: 'url("' + l.src + '")'
          }), n.data("owidth", l.width), n.data("oheight", l.height), n.find(".slotholder").data("owidth", l.width), n.find(".slotholder").data("oheight", l.height);
          else {
            var d = s.data("ww")
              , h = s.data("hh");
            s.data("owidth", l.width), s.data("oheight", l.height), d = d == e || "auto" == d || "" == d ? l.width : d, h = h == e || "auto" == h || "" == h ? l.height : h, s.data("ww", d), s.data("hh", h)
          }
          s.data("loaded", !0)
        }
        if (l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (t.now() - s.data("start-to-load") < 5e3 ? a = !0 : console.error(o + "  Could not be loaded !")), 1 == r.youtubeapineeded && (!window.YT || YT.Player == e) && (a = !0, t.now() - r.youtubestarttime > 5e3 && 1 != r.youtubewarning)) {
          r.youtubewarning = !0;
          var u = "YouTube Api Could not be loaded !";
          "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), r.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
        }
        if (1 == r.vimeoapineeded && !window.Froogaloop && (a = !0, t.now() - r.vimeostarttime > 5e3 && 1 != r.vimeowarning)) {
          r.vimeowarning = !0;
          var u = "Vimeo Froogaloop Api Could not be loaded !";
          "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), r.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
        }
      }), a ? setTimeout(function() {
        O(n, r, s)
      }, 19) : s()
    }
    , C = function(e, n) {
      if (clearTimeout(n.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return n.waitWithSwapSlide = setTimeout(function() {
        C(e, n)
      }, 150), !1;
      var r = e.find(".active-revslide")
        , s = e.find(".next-revslide")
        , a = s.find(".defaultimg");
      return s.index() === r.index() ? (s.removeClass("next-revslide"), !1) : (s.removeClass("next-revslide").addClass("processing-revslide"), "on" == n.stopLoop && s.index() == n.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
        visibility: "hidden"
      }), e.trigger("revolution.slide.onstop"), n.noloopanymore = 1), s.index() === n.slideamount - 1 && (n.looptogo = n.looptogo - 1, n.looptogo <= 0 && (n.stopLoop = "on")), n.tonpause = !0, e.trigger("stoptimer"), n.cd = 0, e.find(".tp-loader").css({
        display: "block"
      }), S(s, n, 1), void O(s, n, function() {
        s.find(".rs-background-video-layer").each(function() {
          var e = t(this);
          e.hasClass("HasListener") || (e.data("bgvideo", 1), i.manageVideoLayer(e, n)), e.append('<div class="rs-fullvideo-cover"></div>')
        }), A(n, a, e)
      }))
    }
    , A = function(t, n, r) {
      var s = r.find(".active-revslide")
        , a = r.find(".processing-revslide")
        , o = s.find(".slotholder")
        , l = a.find(".slotholder");
      t.tonpause = !1, t.cd = 0, r.trigger("nulltimer"), r.find(".tp-loader").css({
        display: "none"
      }), i.setSize(t), i.slotSize(n, t), i.manageNavigation && i.manageNavigation(t);
      var d = {};
      d.nextslide = a, d.currentslide = s, r.trigger("revolution.slide.onbeforeswap", d), t.transition = 1, t.videoplaying = !1, a.data("delay") != e ? (t.cd = 0, t.delay = a.data("delay")) : t.delay = t.origcd;
      var h = s.index()
        , u = a.index();
      t.sdir = h > u ? 1 : 0, "arrow" == t.sc_indicator && (0 == h && u == t.slideamount - 1 && (t.sdir = 1), h == t.slideamount - 1 && 0 == u && (t.sdir = 0)), t.lsdir = t.lsdir === e ? t.sdir : t.lsdir, t.dirc = t.lsdir != t.sdir, t.lsdir = t.sdir, s.index() != a.index() && 1 != t.firststart && i.removeTheCaptions && i.removeTheCaptions(s, t), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? t.videoplaying = !0 : r.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
      var c, p;
      if ("carousel" == t.sliderType) p = new punchgs.TimelineLite, i.prepareCarousel(t, p), L(r, t, l, o, a, s, p), t.transition = 0, t.firststart = 0;
      else {
        p = new punchgs.TimelineLite({
          onComplete: function() {
            L(r, t, l, o, a, s, p)
          }
        }), p.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
          opacity: 0
        })), p.pause(), 1 == t.firststart && (punchgs.TweenLite.set(s, {
          autoAlpha: 0
        }), t.firststart = 0), punchgs.TweenLite.set(s, {
          zIndex: 18
        }), punchgs.TweenLite.set(a, {
          autoAlpha: 0
          , zIndex: 20
        }), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != e && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == e && a.data("transition", "random"), c = 0;
        var f = a.data("transition") !== e ? a.data("transition").split(",") : "fade"
          , g = a.data("nexttransid") == e ? -1 : a.data("nexttransid");
        "on" == a.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), a.data("nexttransid", g);
        var m = f[g];
        t.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal")), i.isIE(8) && (m = 11), p = i.animateSlide(c, m, r, t, a, s, l, o, p), "on" == l.data("kenburns") && (i.startKenBurn(l, t), p.add(punchgs.TweenLite.set(l, {
          autoAlpha: 0
        }))), p.pause()
      }
      "off" != t.parallax.type && t.parallax.firstgo == e && i.scrollHandling && (t.parallax.firstgo = !0, t.lastscrolltop = -999, i.scrollHandling(t), setTimeout(function() {
        t.lastscrolltop = -999, i.scrollHandling(t)
      }, 210), setTimeout(function() {
        t.lastscrolltop = -999, i.scrollHandling(t)
      }, 420)), i.animateTheCaptions ? i.animateTheCaptions(a, t, null, p) : p != e && setTimeout(function() {
        p.resume()
      }, 30), punchgs.TweenLite.to(a, .001, {
        autoAlpha: 1
      })
    }
    , L = function(r, s, a, o, l, d, h) {
      "carousel" === s.sliderType || (s.removePrepare = 0, punchgs.TweenLite.to(a.find(".defaultimg"), .001, {
        zIndex: 20
        , autoAlpha: 1
        , onComplete: function() {
          y(r, s, l, 1)
        }
      }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
        zIndex: 18
        , autoAlpha: 0
        , onComplete: function() {
          y(r, s, d, 1)
        }
      })), r.find(".active-revslide").removeClass("active-revslide"), r.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), s.act = l.index(), ("scroll" == s.parallax.type || "scroll+mouse" == s.parallax.type || "mouse+scroll" == s.parallax.type) && (s.lastscrolltop = -999, i.scrollHandling(s)), h.clear(), o.data("kbtl") != e && (o.data("kbtl").reverse(), o.data("kbtl").timeScale(25)), "on" == a.data("kenburns") && (a.data("kbtl") != e ? (a.data("kbtl").timeScale(1), a.data("kbtl").play()) : i.startKenBurn(a, s)), l.find(".rs-background-video-layer").each(function() {
        if (n) return !1;
        var e = t(this);
        i.resetVideo(e, s), punchgs.TweenLite.fromTo(e, 1, {
          autoAlpha: 0
        }, {
          autoAlpha: 1
          , ease: punchgs.Power3.easeInOut
          , delay: .2
          , onComplete: function() {
            i.animcompleted && i.animcompleted(e, s)
          }
        })
      }), d.find(".rs-background-video-layer").each(function() {
        if (n) return !1;
        var e = t(this);
        i.stopVideo && (i.resetVideo(e, s), i.stopVideo(e, s)), punchgs.TweenLite.to(e, 1, {
          autoAlpha: 0
          , ease: punchgs.Power3.easeInOut
          , delay: .2
        })
      });
      var u = {};
      u.slideIndex = l.index() + 1, u.slideLIIndex = l.index(), u.slide = l, u.currentslide = l, u.prevslide = d, r.trigger("revolution.slide.onchange", u), r.trigger("revolution.slide.onafterswap", u)
    }
    , R = function(e, i) {
      e.children().each(function() {
        try {
          t(this).die("click")
        } catch (e) {}
        try {
          t(this).die("mouseenter")
        } catch (e) {}
        try {
          t(this).die("mouseleave")
        } catch (e) {}
        try {
          t(this).unbind("hover")
        } catch (e) {}
      });
      try {
        e.die("click", "mouseenter", "mouseleave")
      } catch (n) {}
      clearInterval(i.cdint), e = null
    }
    , M = function(r, s) {
      if (s.cd = 0, s.loop = 0, s.looptogo = s.stopAfterLoops != e && s.stopAfterLoops > -1 ? s.stopAfterLoops : 9999999, s.lastslidetoshow = s.stopAtSlide != e && s.stopAtSlide > -1 ? s.stopAtSlide : 999, s.stopLoop = "off", 0 == s.looptogo && (s.stopLoop = "on"), s.slideamount > 1 && (0 != s.stopAfterLoops || 1 != s.stopAtSlide)) {
        var a = r.find(".tp-bannertimer");
        r.on("stoptimer", function() {
          var e = t(this).find(".tp-bannertimer");
          e.data("tween").pause(), "on" == s.disableProgressBar && e.css({
            visibility: "hidden"
          }), s.sliderstatus = "paused"
        }), r.on("starttimer", function() {
          1 != s.conthover && 1 != s.videoplaying && s.width > s.hideSliderAtLimit && 1 != s.tonpause && 1 != s.overnav && (1 === s.noloopanymore || s.viewPort.enable && !s.inviewport || (a.css({
            visibility: "visible"
          }), a.data("tween").resume(), s.sliderstatus = "playing")), "on" == s.disableProgressBar && a.css({
            visibility: "hidden"
          })
        }), r.on("restarttimer", function() {
          var e = t(this).find(".tp-bannertimer");
          1 === s.noloopanymore || s.viewPort.enable && !s.inviewport || (e.css({
            visibility: "visible"
          }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, s.delay / 1e3, {
            width: "0%"
          }, {
            force3D: "auto"
            , width: "100%"
            , ease: punchgs.Linear.easeNone
            , onComplete: o
            , delay: 1
          })), s.sliderstatus = "playing"), "on" == s.disableProgressBar && e.css({
            visibility: "hidden"
          })
        }), r.on("nulltimer", function() {
          a.data("tween").pause(0), "on" == s.disableProgressBar && a.css({
            visibility: "hidden"
          }), s.sliderstatus = "paused"
        });
        var o = function() {
          0 == t("body").find(r).length && (R(r, s), clearInterval(s.cdint)), r.trigger("revolution.slide.slideatend"), 1 == r.data("conthover-changed") && (s.conthover = r.data("conthover"), r.data("conthover-changed", 0)), i.callingNewSlide(s, r, 1)
        };
        a.data("tween", punchgs.TweenLite.fromTo(a, s.delay / 1e3, {
          width: "0%"
        }, {
          force3D: "auto"
          , width: "100%"
          , ease: punchgs.Linear.easeNone
          , onComplete: o
          , delay: 1
        })), a.data("opt", s), r.trigger("starttimer"), r.on("tp-mouseenter", function() {
          "on" != s.navigation.onHoverStop || n || (r.trigger("stoptimer"), r.trigger("revolution.slide.onpause"))
        }), r.on("tp-mouseleft", function() {
          1 != r.data("conthover") && "on" == s.navigation.onHoverStop && (1 == s.viewPort.enable && s.inviewport || 0 == s.viewPort.enable) && (r.trigger("revolution.slide.onresume"), r.trigger("starttimer"))
        })
      }
    }
    , I = (function() {
      var t, e, i = {
        hidden: "visibilitychange"
        , webkitHidden: "webkitvisibilitychange"
        , mozHidden: "mozvisibilitychange"
        , msHidden: "msvisibilitychange"
      };
      for (t in i)
        if (t in document) {
          e = i[t];
          break
        }
      return function(i) {
        return i && document.addEventListener(e, i), !document[t]
      }
    }(), function(t) {
      return t == e || t.c == e ? !1 : void punchgs.TweenLite.delayedCall(.3, function() {
        "on" == t.fallbacks.nextSlideOnWindowFocus && t.c.revnext(), t.c.revredraw(), "playing" == t.lastsliderstatus && t.c.revresume()
      })
    })
    , z = function(t) {
      t.lastsliderstatus = t.sliderstatus, t.c.revpause();
      var e = t.c.find(".active-revslide .slotholder")
        , n = t.c.find(".processing-revslide .slotholder");
      "on" == n.data("kenburns") && i.stopKenBurn(n, t), "on" == e.data("kenburns") && i.stopKenBurn(e, t)
    }
    , E = function(i, n) {
      var r = document.documentMode === e
        , s = window.chrome;
      r && !s ? t(window).on("focusin", function() {
        I(n)
      }).on("focusout", function() {
        z(n)
      }) : window.addEventListener ? (window.addEventListener("focus", function() {
        I(n)
      }, !1), window.addEventListener("blur", function() {
        z(n)
      }, !1)) : (window.attachEvent("focus", function() {
        I(n)
      }), window.attachEvent("blur", function() {
        z(n)
      }))
    }
    , F = function(t) {
      for (var e, i = [], n = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), r = 0; r < n.length; r++) n[r] = n[r].replace("%3D", "="), e = n[r].split("="), i.push(e[0]), i[e[0]] = e[1];
      return i
    }
}(jQuery);