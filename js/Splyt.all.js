/**
 * Copyright Row Sham Bow, Inc. 2014
 * Includes portions of code from the following libraries. See the uncompressed, development
 * libraries included in the SPLYT SDK for Javascript for additional license information.
 *
 * 1. Underscore.js 1.6.0
 *    http://underscorejs.org
 *    Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *
 * 2. Zepto.js 1.1.3
 *    http://zeptojs.com/
 *    Copyright (c) 2010-2014 Thomas Fuchs
 *
 * 3. php.js
 *    http://phpjs.org
 *    Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io) and Contributors (http://phpjs.org/authors)
 *
 * 4. Highcharts JS
 *    http://www.highcharts.com/
 *    Copyright (c) 2009-2014 Torstein Honsi
 */
function strcmp(str1, str2) {
    return str1 == str2 ? 0 : str1 > str2 ? 1 : -1;
}

function strnatcmp(f_string1, f_string2, f_version) {
    var i = 0;
    void 0 == f_version && (f_version = !1);
    var __strnatcmp_split = function(f_string) {
        var result = [], buffer = "", chr = "", i = 0, f_stringl = 0, text = !0;
        for (f_stringl = f_string.length, i = 0; f_stringl > i; i++) chr = f_string.substring(i, i + 1),
        chr.match(/\d/) ? (text && (buffer.length > 0 && (result[result.length] = buffer,
        buffer = ""), text = !1), buffer += chr) : 0 == text && "." === chr && i < f_string.length - 1 && f_string.substring(i + 1, i + 2).match(/\d/) ? (result[result.length] = buffer,
        buffer = "") : (0 == text && (buffer.length > 0 && (result[result.length] = parseInt(buffer, 10),
        buffer = ""), text = !0), buffer += chr);
        return buffer.length > 0 && (text ? result[result.length] = buffer : result[result.length] = parseInt(buffer, 10)),
        result;
    }, array1 = __strnatcmp_split(f_string1 + ""), array2 = __strnatcmp_split(f_string2 + ""), len = array1.length, text = !0, result = -1, r = 0;
    for (len > array2.length && (len = array2.length, result = 1), i = 0; len > i; i++) if (isNaN(array1[i])) {
        if (!isNaN(array2[i])) return text ? 1 : -1;
        if (text = !0, 0 != (r = this.strcmp(array1[i], array2[i]))) return r;
    } else {
        if (isNaN(array2[i])) return text ? -1 : 1;
        if (text || f_version) {
            if (0 != (r = array1[i] - array2[i])) return r;
        } else if (0 != (r = this.strcmp(array1[i].toString(), array2[i].toString()))) return r;
        text = !1;
    }
    return result;
}

function CurrencyService() {
    "use strict";
    var currencyMap = {
        ALL: "Lek",
        AFN: "؋",
        ARS: "$",
        AWG: "ƒ",
        AUD: "$",
        AZN: "ман",
        BSD: "$",
        BBD: "$",
        BYR: "p.",
        BZD: "BZ$",
        BMD: "$",
        BOB: "$b",
        BAM: "KM",
        BWP: "P",
        BGN: "лв",
        BRL: "R$",
        BND: "$",
        KHR: "៛",
        CAD: "$",
        KYD: "$",
        CLP: "$",
        CNY: "¥",
        COP: "$",
        CRC: "₡",
        HRK: "kn",
        CUP: "₱",
        CZK: "Kč",
        DKK: "kr",
        DOP: "RD$",
        XCD: "$",
        EGP: "£",
        SVC: "$",
        EEK: "kr",
        EUR: "€",
        FKP: "£",
        FJD: "$",
        GHC: "¢",
        GIP: "£",
        GTQ: "Q",
        GGP: "£",
        GYD: "$",
        HNL: "L",
        HKD: "$",
        HUF: "Ft",
        ISK: "kr",
        INR: "",
        IDR: "Rp",
        IRR: "﷼",
        IMP: "£",
        ILS: "₪",
        JMD: "J$",
        JPY: "¥",
        JEP: "£",
        KZT: "лв",
        KPW: "₩",
        KRW: "₩",
        KGS: "лв",
        LAK: "₭",
        LVL: "Ls",
        LBP: "£",
        LRD: "$",
        LTL: "Lt",
        MKD: "ден",
        MYR: "RM",
        MUR: "₨",
        MXN: "$",
        MNT: "₮",
        MZN: "MT",
        NAD: "$",
        NPR: "₨",
        ANG: "ƒ",
        NZD: "$",
        NIO: "C$",
        NGN: "₦",
        NOK: "kr",
        OMR: "﷼",
        PKR: "₨",
        PAB: "B/.",
        PYG: "Gs",
        PEN: "S/.",
        PHP: "₱",
        PLN: "zł",
        QAR: "﷼",
        RON: "lei",
        RUB: "руб",
        SHP: "£",
        SAR: "﷼",
        RSD: "Дин.",
        SCR: "₨",
        SGD: "$",
        SBD: "$",
        SOS: "S",
        ZAR: "R",
        LKR: "₨",
        SEK: "kr",
        CHF: "Fr.",
        SRD: "$",
        SYP: "£",
        TWD: "NT$",
        THB: "฿",
        TTD: "TT$",
        TRY: "",
        TRL: "₤",
        TVD: "$",
        UAH: "₴",
        GBP: "£",
        USD: "$",
        UYU: "$U",
        UZS: "лв",
        VEF: "Bs",
        VND: "₫",
        YER: "﷼",
        ZWD: "Z$"
    };
    this.intlSupported = "object" == typeof window.Intl, this.getPrefix = function(currencyCode, locale) {
        if (currencyCode) if (this.intlSupported) try {
            var priceFormatted = Intl.NumberFormat(locale, {
                style: "currency",
                currency: currencyCode
            }).format(0);
            if (0 !== priceFormatted.indexOf(currencyCode)) {
                var index = priceFormatted.search(/\d/);
                if (index > 0) {
                    var retVal = priceFormatted.substring(0, index);
                    if (currencyCode !== retVal) return retVal;
                }
            }
        } catch (e) {} else if (currencyMap.hasOwnProperty(currencyCode)) return currencyMap[currencyCode];
        return "";
    }, this.getSuffix = function(currencyCode, locale) {
        if (currencyCode && this.intlSupported) try {
            var priceFormatted = Intl.NumberFormat(locale, {
                style: "currency",
                currency: currencyCode
            }).format(0), index = priceFormatted.search(/[^\d\.,]/);
            if (index > 0) return priceFormatted.substring(index);
        } catch (e) {}
        return "";
    }, this.format = function(price, currencyCode, numDecimalPlaces, locale) {
        var priceFormatted = Number(price).toFixed("undefined" == typeof numDecimalPlaces ? 2 : numDecimalPlaces).toString();
        if (currencyCode) if (this.intlSupported) try {
            var formatted = Intl.NumberFormat(locale, {
                style: "currency",
                currency: currencyCode,
                minimumFractionDigits: numDecimalPlaces,
                maximumFractionDigits: numDecimalPlaces
            }).format(price);
            0 !== formatted.indexOf(currencyCode) && (priceFormatted = formatted);
        } catch (e) {} else currencyMap.hasOwnProperty(currencyCode) && (priceFormatted = currencyMap[currencyCode] + priceFormatted);
        return priceFormatted;
    };
}

function VisualizationFormatParams() {
    "use strict";
    this.mRenderType = null, this.mCaptionFormat = null, this.mYAxisType = null, this.mYAxisFormat = null,
    this.mXAxisFormat = null, this.mLegendVisible = null, this.mLegendFormat = null;
}

function VisualizationParams() {
    "use strict";
    this.mLegacyParams = {}, this.mTitle = null, this.mSubTitle = null, this.mHeight = 229,
    this.mHideBorder = !1, this.mLegendPosition = null, this.mMarkerSymbol = null, this.mFormatParams = new VisualizationFormatParams(),
    this.mFormatParams.mRenderType = "line", this.mFormatParams.mCaptionFormat = "int",
    this.mFormatParams.mYAxisType = "linear", this.mFormatParams.mYAxisFormat = "int",
    this.mFormatParams.mXAxisFormat = "int", this.mFormatParams.mLegendVisible = !1,
    this.mFormatParams.mLegendFormat = null;
}

function Visualization() {
    "use strict";
}

function LabelIndex(labels, searchValue) {
    if (labels) for (var i = 0; i < labels.length; ++i) {
        var l = labels[i];
        if (l == searchValue || String(l) == String(searchValue)) return i;
    }
    return -1;
}

function IsosVisAxisLabelKVFormatter(raw, format, labels, captions) {
    var idx = LabelIndex(labels, raw);
    -1 != idx && (raw = captions[idx]);
    for (var key in format) if (key == raw) return format[key];
    return raw;
}

function IsosVisAxisLabelFormatter(raw, format, labels, captions) {
    if ("" === raw) return "";
    if ("object" == typeof format) return IsosVisAxisLabelKVFormatter(raw, format, labels, captions);
    var formatted = "undefined";
    switch (format) {
      case "epochday":
        var epochDay = parseInt(raw), epochTime = 1e3 * epochDay * 24 * 60 * 60;
        formatted = Highcharts.dateFormat("%b %e", epochTime);
        break;

      case "epochtime":
        formatted = Highcharts.dateFormat("%b %e", parseInt(raw));
        break;

      case "use-caption":
        var idx = LabelIndex(labels, raw);
        -1 != idx && (formatted = captions[idx], null === formatted && (formatted = "unspecified"));
        break;

      case "use-index":
        formatted = LabelIndex(labels, raw);
        break;

      case "none":
        break;

      case "use-label":
      default:
        var maxStringLength = 12;
        formatted = null === raw || " " === raw ? "unspecified" : raw.length > maxStringLength ? raw.substr(0, maxStringLength) + "..." : raw;
    }
    return String(formatted);
}

function IsosVisDataPointLabelFormatter(x, y, xAxisFormat, labels, captions, numberStyle, seriesName, seriesFormat, ypct) {
    var xLabel = IsosVisAxisLabelFormatter(x, xAxisFormat, labels, captions), numDecimalPlaces = 2;
    y % 1 === 0 ? numDecimalPlaces = 0 : 1e-4 > y ? numDecimalPlaces = 5 : .001 > y ? numDecimalPlaces = 4 : .01 > y && (numDecimalPlaces = 3);
    var yLabel = Highcharts.numberFormat(y, numDecimalPlaces);
    if (numberStyle && 0 === numberStyle.indexOf("cur|")) {
        var parts = numberStyle.split("|");
        yLabel = new CurrencyService().format(y, parts[1], numDecimalPlaces);
    } else "pct" == numberStyle && (yLabel += "%");
    var seriesNameDisplay = "";
    seriesName && !_.contains([ "?column?", "values" ], seriesName) && (seriesNameDisplay = void 0 !== seriesFormat && seriesName in seriesFormat ? "<br>(" + seriesFormat[seriesName] + ")" : "<br>(" + seriesName + ")");
    var ttlabel = "";
    switch (xAxisFormat) {
      case "use-index":
        for (var i = 0; i < labels.length && labels[i] != x; ++i) ;
        ttlabel = "<b>" + captions[i] + ": </b>" + yLabel + seriesNameDisplay;
        break;

      default:
        ttlabel = "<b>" + xLabel + ": </b>" + yLabel + seriesNameDisplay;
    }
    return void 0 !== ypct && (ttlabel += " (" + ypct.toFixed(2) + "%)"), ttlabel;
}

function isos_vis(div, xAxisType, params) {}

function HighchartsWrapper(div, xAxisType, params) {
    console.log(div, xAxisType, params);
    this.tooltipFormatter = function() {
        var x, labels, captions, yformat, ypct, y = this.y, ttformat = this.series.chart.userOptions.tooltip.userFormat, seriesName = this.series.name, legendFormat = this.series.chart.userOptions.legend.userFormat;
        return "pie" == this.series.type ? (x = this.key, labels = captions = _.pluck(this.series.userOptions.data, "name"),
        yformat = void 0, ypct = this.percentage) : (x = this.x, labels = this.series.xAxis.userOptions.userLabels,
        captions = this.series.xAxis.userOptions.userCaptions, yformat = this.series.yAxis.userOptions.userFormat,
        ypct = void 0), IsosVisDataPointLabelFormatter(x, y, ttformat, labels, captions, yformat, seriesName, legendFormat, ypct);
    }, this.xAxisFormatter = function() {
        return IsosVisAxisLabelFormatter(this.value, this.axis.userOptions.userFormat, this.axis.userOptions.userLabels, this.axis.userOptions.userCaptions);
    }, this.yAxisFormatter = function() {
        return "pct" === this.axis.userOptions.userFormat ? this.value + "%" : Highcharts.Axis.prototype.defaultLabelFormatter.call(this);
    }, this.legendFormatter = function() {
        var chart = this.series ? this.series.chart : this.chart;
        return null !== chart.userOptions.legend.userFormat ? IsosVisAxisLabelFormatter(this.name, chart.userOptions.legend.userFormat, chart.get("xaxis").userOptions.userLabels, chart.get("xaxis").userOptions.userCaptions) : this.name;
    }, this.computeYAxisMin = function(type) {
        if ("logarithmic" === type) return 1;
        if (this.mChart && this.mChart.series.length > 0) {
            var seriesMin = _.min(_.pluck(this.mChart.series, "dataMin")), visualMin = _.min([ 0, seriesMin ]);
            return visualMin;
        }
        return 0;
    }, this.mChart = new Highcharts.Chart(this.buildOptions(div, xAxisType, params));
}

function Series(ssfType) {
    this.error = ssfType.errorCode, null !== ssfType.data && void 0 !== ssfType.data && (this.labels = ssfType.data.series.labels,
    this.captions = ssfType.data.series.captions, this.series = ssfType.data.series.series, this.transpose = ssfType.data.transpose);
}

/*
 Highcharts JS v4.1.7 (2015-06-26)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(){function z(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function D(a,b){return parseInt(a,b||10)}function Da(a){return typeof a==="string"}function da(a){return a&&
typeof a==="object"}function Ha(a){return Object.prototype.toString.call(a)==="[object Array]"}function ra(a){return typeof a==="number"}function Ea(a){return W.log(a)/W.LN10}function ia(a){return W.pow(10,a)}function ja(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function q(a){return a!==y&&a!==null}function J(a,b,c){var d,e;if(Da(b))q(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(q(b)&&da(b))for(d in b)a.setAttribute(d,b[d]);return e}function sa(a){return Ha(a)?
a:[a]}function L(a,b){if(ya&&!ca&&b&&b.opacity!==y)b.filter="alpha(opacity="+b.opacity*100+")";x(a.style,b)}function $(a,b,c,d,e){a=B.createElement(a);b&&x(a,b);e&&L(a,{padding:0,border:P,margin:0});c&&L(a,c);d&&d.appendChild(a);return a}function ka(a,b){var c=function(){return y};c.prototype=new a;x(c.prototype,b);return c}function Ia(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Wa(a){return(eb&&eb(a)||ob||0)*6E4}function Ja(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==
-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=T.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=A.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=Oa(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function pb(a){return W.pow(10,V(W.log(a)/W.LN10))}function qb(a,b,c,d,e){var f,g=a,c=p(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===
1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function rb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Pa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Fa(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Qa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),
delete a[c]}function Ra(a){fb||(fb=$(Ka));a&&fb.appendChild(a);fb.innerHTML=""}function la(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;K.console&&console.log(c)}function ea(a){return parseFloat(a.toPrecision(14))}function Sa(a,b){za=p(a,b.animation)}function Db(){var a=T.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";Aa=a.Date||window.Date;ob=b&&a.timezoneOffset;eb=b&&a.getTimezoneOffset;gb=function(a,c,d,h,i,j){var k;b?(k=Aa.UTC.apply(0,arguments),k+=
Wa(k)):k=(new Aa(a,c,p(d,1),p(h,0),p(i,0),p(j,0))).getTime();return k};sb=c+"Minutes";tb=c+"Hours";ub=c+"Day";Xa=c+"Date";Ya=c+"Month";Za=c+"FullYear";Eb=d+"Milliseconds";Fb=d+"Seconds";Gb=d+"Minutes";Hb=d+"Hours";vb=d+"Date";wb=d+"Month";xb=d+"FullYear"}function Q(){}function Ta(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Ib(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=
e;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var y,B=document,K=window,W=Math,r=W.round,V=W.floor,ta=W.ceil,u=W.max,C=W.min,O=W.abs,X=W.cos,aa=W.sin,ma=W.PI,ha=ma*2/360,Ba=navigator.userAgent,Jb=K.opera,ya=/(msie|trident)/i.test(Ba)&&!Jb,hb=B.documentMode===8,ib=/AppleWebKit/.test(Ba),La=/Firefox/.test(Ba),Kb=/(Mobile|Android|Windows Phone)/.test(Ba),
Ca="http://www.w3.org/2000/svg",ca=!!B.createElementNS&&!!B.createElementNS(Ca,"svg").createSVGRect,Ob=La&&parseInt(Ba.split("Firefox/")[1],10)<4,fa=!ca&&!ya&&!!B.createElement("canvas").getContext,$a,ab,Lb={},yb=0,fb,T,Oa,za,zb,E,na=function(){return y},Y=[],bb=0,Ka="div",P="none",Pb=/^[0-9]+$/,jb=["plotTop","marginRight","marginBottom","plotLeft"],Qb="stroke-width",Aa,gb,ob,eb,sb,tb,ub,Xa,Ya,Za,Eb,Fb,Gb,Hb,vb,wb,xb,M={},A;A=K.Highcharts=K.Highcharts?la(16,!0):{};A.seriesTypes=M;var x=A.extend=function(a,
b){var c;a||(a={});for(c in b)a[c]=b[c];return a},p=A.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==y&&c!==null)return c},cb=A.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Oa=function(a,b,c){if(!q(b)||isNaN(b))return"Invalid date";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new Aa(b-Wa(b)),e,f=d[tb](),g=d[ub](),h=d[Xa](),i=d[Ya](),j=d[Za](),k=T.lang,l=k.weekdays,d=x({a:l[g].substr(0,3),A:l[g],
d:Ia(h),e:h,w:g,b:k.shortMonths[i],B:k.months[i],m:Ia(i+1),y:j.toString().substr(2,2),Y:j,H:Ia(f),I:Ia(f%12||12),l:f%12||12,M:Ia(d[sb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ia(d.getSeconds()),L:Ia(r(b%1E3),3)},A.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};E={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};A.numberFormat=function(a,b,
c,d){var e=T.lang,a=+a||0,f=b===-1?C((a.toString().split(".")[1]||"").length,20):isNaN(b=O(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(D(a=O(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+O(a-c).toFixed(f).slice(2):"")};zb={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+
1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:
c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){K.HighchartsAdapter=K.HighchartsAdapter||a&&{init:function(b){var c=a.fx;a.extend(a.easing,{easeOutQuad:function(a,b,c,g,h){return-g*(b/=h)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(b,e){var f=c.step,g;e==="cur"?f=c.prototype:e==="_default"&&a.Tween&&(f=a.Tween.propHooks[e],e="set");(g=f[e])&&(f[e]=function(a){var c,a=b?a:this;if(a.prop!=="align")return c=a.elem,c.attr?c.attr(a.prop,e==="cur"?y:a.now):g.apply(this,
arguments)})});cb(a.cssHooks.opacity,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});this.addAnimSetter("d",function(a){var c=a.elem,f;if(!a.started)f=b.init(c,c.d,c.toD),a.start=f[0],a.end=f[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))});this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){var c,g=a.length;for(c=0;c<g;c++)if(b.call(a[c],a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,
c,g;if(this[0]){Da(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==y)c.chart=c.chart||{},c.chart.renderTo=this[0],new A[a](c,b[1]),g=this;c===y&&(g=Y[J(this[0],"data-highcharts-chart")])}return g}},addAnimSetter:function(b,c){a.Tween?a.Tween.propHooks[b]={set:c}:a.fx.step[b]=c},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},
addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=B.removeEventListener?"removeEventListener":"detachEvent";B[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!ya&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);x(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);
b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===y)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==y&&b.attr&&(c.opacity+="px");b.hasAnim=1;e.animate(c,d)},stop:function(b){b.hasAnim&&a(b).stop()}}})(K.jQuery);var U=K.HighchartsAdapter,F=U||{};U&&U.init.call(U,zb);var kb=F.adapterRun,Rb=F.getScript,Ma=F.inArray,o=A.each=F.each,
lb=F.grep,Sb=F.offset,Ua=F.map,H=F.addEvent,Z=F.removeEvent,I=F.fireEvent,Tb=F.washMouseEvent,mb=F.animate,db=F.stop;T={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/4.1.7/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.1.7/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",
formatter:function(){return this.y===null?"":A.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,
textAlign:"center"}},tooltip:{enabled:!0,animation:ca,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,snap:Kb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ba=T.plotOptions,U=ba.line;Db();var Ub=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,Vb=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
Wb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,oa=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Ua(a.stops,function(a){return oa(a[1])}):(c=Ub.exec(a))?b=[D(c[1]),D(c[2]),D(c[3]),parseFloat(c[4],10)]:(c=Vb.exec(a))?b=[D(c[1],16),D(c[2],16),D(c[3],16),1]:(c=Wb.exec(a))&&(b=[D(c[1]),D(c[2]),D(c[3]),1])})(a);return{get:function(c){var f;d?(f=z(a),f.stops=[].concat(f.stops),o(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+
b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)o(d,function(b){b.brighten(a)});else if(ra(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=D(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this},raw:a}};Q.prototype={opacity:1,textProps:"fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textShadow".split(","),init:function(a,b){this.element=b==="span"?$(b):B.createElementNS(Ca,b);
this.renderer=a},animate:function(a,b,c){b=p(b,za,!0);db(this);if(b){b=z(b,{});if(c)b.complete=c;mb(this,a,b)}else this.attr(a),c&&c();return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,m,n,v=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];h=d.gradients;j=a.stops;m=c.radialReference;Ha(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&m&&!q(g.gradientUnits)&&(g=z(g,{cx:m[0]-m[2]/
2+g.cx*m[2],cy:m[1]-m[2]/2+g.cy*m[2],r:g.r*m[2],gradientUnits:"userSpaceOnUse"}));for(n in g)n!=="id"&&v.push(n,g[n]);for(n in j)v.push(j[n]);v=v.join(",");h[v]?a=h[v].attr("id"):(g.id=a="highcharts-"+yb++,h[v]=i=d.createElement(f).attr(g).add(d.defs),i.stops=[],o(j,function(a){a[1].indexOf("rgba")===0?(e=oa(a[1]),k=e.get("rgb"),l=e.get("a")):(k=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":l}).add(i);i.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},
applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport||b.style.textShadow!==y&&!ya;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(ib)e.textRendering="geometricPrecision";f?L(b,e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),o(a.split(/\s?,\s?/g),function(a){var d=b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&o(c,function(a,c){var g;c===0&&
(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);J(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/u(D(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b){var c,d,e=this.element,f,g=this,h;typeof a==="string"&&b!==y&&(c=a,a={},a[c]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(c in a){d=a[c];h=!1;this.symbolName&&
/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(c==="x"||c==="y"))this.doTransform=!0;h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}return g},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;d--;)c[d].setAttribute(a,a==="height"?u(b-(c[d].cutHeight||
0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,c=J(b,"class")||"";c.indexOf(a)===-1&&J(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":P)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||0;
d=r(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&D(a.width)||this.textWidth;b&&(a=x(b,c));this.styles=a;e&&(fa||!ca&&this.renderer.forExport)&&
delete a.width;if(ya&&!ca)L(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";J(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;ab&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=Aa.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(Ba.indexOf("Android")===-1||Aa.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=
a;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");
(q(c)||q(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Da(c))this.alignTo=d=c||"renderer",ja(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||
0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=r(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=r(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a){var b,c=this.renderer,d,e=this.rotation,f=this.element,g=this.styles,h=e*ha;d=this.textStr;var i,j=f.style,k,l;d!==y&&(l=["",e||0,g&&g.fontSize,f.style.width].join(","),
l=d===""||Pb.test(d)?"num:"+d.toString().length+l:d+l);l&&!a&&(b=c.cache[l]);if(!b){if(f.namespaceURI===Ca||c.forExport){try{k=this.fakeTS&&function(a){o(f.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},La&&j.textShadow?(i=j.textShadow,j.textShadow=""):k&&k(P),b=f.getBBox?x({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},i?j.textShadow=i:k&&k("")}catch(m){}if(!b||b.width<0)b={width:0,height:0}}else b=this.htmlGetBBox();if(c.isSVG){a=b.width;d=b.height;if(ya&&
g&&g.fontSize==="11px"&&d.toPrecision(3)==="16.9")b.height=d=14;if(e)b.width=O(d*aa(h))+O(a*X(h)),b.height=O(d*X(h))+O(a*aa(h))}c.cache[l]=b}return b},show:function(a){a&&this.element.namespaceURI===Ca?this.element.removeAttribute("visibility"):this.attr({visibility:a?"inherit":"visible"});return this},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,
c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=
null;db(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&o(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&ja(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=p(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?
"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;J(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:P});if(c)J(f,"height",u(J(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=
p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(b=a.length;b--;)a[b]=D(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=B.createElementNS(Ca,"title"),this.element.appendChild(b));b.appendChild(B.createTextNode(String(p(a),
"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;q(a)&&(g.setAttribute(b,a),a=+a,this[b]===a&&(e=!1),this[b]=a);if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<
d.length&&!h;i++)if(e=d[i],f=J(e,"zIndex"),e!==g&&(D(f)>a||!q(a)&&q(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};Q.prototype.yGetter=Q.prototype.xGetter;Q.prototype.translateXSetter=Q.prototype.translateYSetter=Q.prototype.rotationSetter=Q.prototype.verticalAlignSetter=Q.prototype.scaleXSetter=Q.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};Q.prototype["stroke-widthSetter"]=Q.prototype.strokeSetter=function(a,
b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],Q.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var ua=function(){this.init.apply(this,arguments)};ua.prototype={Element:Q,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));
g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&J(g,"xmlns",Ca);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(La||ib)&&B.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(B.createTextNode("Created with Highcharts 4.1.7"));this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;
if(La&&a.getBoundingClientRect)this.subPixelFix=b=function(){L(a,{left:0,top:0});h=a.getBoundingClientRect();L(a,{left:ta(h.left)-h.left+"px",top:ta(h.top)-h.top+"px"})},b(),H(K,"resize",b)},getStyle:function(a){return this.style=x({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Qa(this.gradients||
{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&Z(K,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=J(b,"x"),k=a.styles,l=a.textWidth,m=k&&k.lineHeight,n=k&&k.textShadow,v=k&&k.textOverflow==="ellipsis",s=g.length,S=l&&!a.added&&this.box,N=function(a){return m?
D(m):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:k&&k.fontSize||c.style.fontSize||12,a).h},t=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};s--;)b.removeChild(g[s]);!f&&!n&&!v&&e.indexOf(" ")===-1?b.appendChild(B.createTextNode(t(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,S&&S.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,
"</span>").split(/<br.*?>/g):[e],e[e.length-1]===""&&e.pop(),o(e,function(e,f){var g,m=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");o(g,function(e){if(e!==""||g.length===1){var n={},s=B.createElementNS(Ca,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),J(s,"style",p));i.test(e)&&!d&&(J(s,"onclick",'location.href="'+e.match(i)[1]+'"'),L(s,{cursor:"pointer"}));e=t(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){s.appendChild(B.createTextNode(e));
if(m)n.dx=0;else if(f&&j!==null)n.x=j;J(s,n);b.appendChild(s);!m&&f&&(!ca&&d&&L(s,{display:"block"}),J(s,"dy",N(s)));if(l){for(var n=e.replace(/([^\^])-/g,"$1- ").split(" "),o=g.length>1||f||n.length>1&&k.whiteSpace!=="nowrap",S,w,q,u=[],y=N(s),r=1,x=a.rotation,z=e,C=z.length;(o||v)&&(n.length||u.length);)a.rotation=0,S=a.getBBox(!0),q=S.width,!ca&&c.forExport&&(q=c.measureSpanWidth(s.firstChild.data,a.styles)),S=q>l,w===void 0&&(w=S),v&&w?(C/=2,z===""||!S&&C<0.5?n=[]:(S&&(w=!0),z=e.substring(0,z.length+
(S?-1:1)*ta(C)),n=[z+(l>3?"â€¦":"")],s.removeChild(s.firstChild))):!S||n.length===1?(n=u,u=[],n.length&&(r++,s=B.createElementNS(Ca,"tspan"),J(s,{dy:y,x:j}),p&&J(s,"style",p),b.appendChild(s)),q>l&&(l=q)):(s.removeChild(s.firstChild),u.unshift(n.pop())),n.length&&s.appendChild(B.createTextNode(n.join(" ").replace(/- /g,"-")));w&&a.attr("title",a.textStr);a.rotation=x}m++}}})}),S&&S.removeChild(b),n&&a.applyTextShadow&&a.applyTextShadow(n))},getContrast:function(a){a=oa(a).rgba;return a[0]+a[1]+a[2]>
384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,m,n,v,s,p,a={x1:0,y1:0,x2:0,y2:1},e=z({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=z(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);v=f.style;delete f.style;g=z(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);
s=g.style;delete g.style;h=z(e,{style:{color:"#CCC"}},h);p=h.style;delete h.style;H(j.element,ya?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(v)});H(j.element,ya?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],m=[n,v,s][k],j.attr(l).css(m))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(s):a===3&&j.attr(h).css(p):j.attr(e).css(n)};return j.on("click",function(){k!==3&&d.call(j)}).attr(e).css(x({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=
r(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=r(a[2])+b%2/2);return a},path:function(a){var b={fill:P};Ha(a)?b.d=a:da(a)&&x(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=da(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(da(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||
0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=da(a)?a.r:e,g=this.createElement("rect"),a=da(a)?a:a===y?{}:{x:a,y:b,width:u(c,0),height:u(d,0)};if(f!==y)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){J(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");
return q(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:P};arguments.length>1&&x(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(r(b),r(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),x(g,{symbolName:a,x:b,y:c,width:d,height:e}),
f&&x(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(r((d-b[0])/2),r((e-b[1])/2)))},j=a.match(i)[1],a=Lb[j]||f&&f.width&&f.height&&[f.width,f.height],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),$("img",{onload:function(){k(g,Lb[j]=[this.width,this.height])},src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/
2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=X(f),j=aa(f),k=X(g),g=aa(g),e=e.end-f<ma?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*
k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=C(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+
f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+yb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=fa||!ca&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});
if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;b&&K.getComputedStyle&&(b=b.element||b,a=(c=K.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?D(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:r(a*1.2);d=r(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=u(d*X(b*ha),4));
return{x:-a/3*aa(b*ha),y:d}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=v.element.style;p=(ga===void 0||u===void 0||n.styles.textAlign)&&q(v.textStr)&&v.getBBox();n.width=(ga||p.width||0)+2*t+w;n.height=(u||p.height||0)+2*t;A=t+m.fontMetrics(a&&a.fontSize,v).b;if(D){if(!s)a=r(-N*t)+B,b=(h?-A:0)+B,n.box=s=d?m.symbol(d,a,b,n.width,n.height,G):m.rect(a,b,n.width,n.height,0,G[Qb]),s.attr("fill",P).add(n);s.isImg||s.attr(x({width:r(n.width),height:r(n.height)},G));G=null}}function k(){var a=
n.styles,a=a&&a.textAlign,b=w+t*(1-N),c;c=h?0:A;if(q(ga)&&p&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(ga-p.width);if(b!==v.x||c!==v.y)v.attr("x",b),c!==y&&v.attr("y",c);v.x=b;v.y=c}function l(a,b){s?s.attr(a,b):G[a]=b}var m=this,n=m.g(i),v=m.text("",0,0,g).attr({zIndex:1}),s,p,N=0,t=3,w=0,ga,u,Ab,C,B=0,G={},A,D;n.onAdd=function(){v.add(n);n.attr({text:a||a===0?a:"",x:b,y:c});s&&q(e)&&n.attr({anchorX:e,anchorY:f})};n.widthSetter=function(a){ga=a};n.heightSetter=function(a){u=a};n.paddingSetter=
function(a){if(q(a)&&a!==t)t=n.padding=a,k()};n.paddingLeftSetter=function(a){q(a)&&a!==w&&(w=a,k())};n.alignSetter=function(a){N={left:0,center:0.5,right:1}[a]};n.textSetter=function(a){a!==y&&v.textSetter(a);j();k()};n["stroke-widthSetter"]=function(a,b){a&&(D=!0);B=a%2/2;l(b,a)};n.strokeSetter=n.fillSetter=n.rSetter=function(a,b){b==="fill"&&a&&(D=!0);l(b,a)};n.anchorXSetter=function(a,b){e=a;l(b,r(a)-B-Ab)};n.anchorYSetter=function(a,b){f=a;l(b,a-C)};n.xSetter=function(a){n.x=a;N&&(a-=N*((ga||
p.width)+t));Ab=r(a);n.attr("translateX",Ab)};n.ySetter=function(a){C=n.y=r(a);n.attr("translateY",C)};var F=n.css;return x(n,{css:function(a){if(a){var b={},a=z(a);o(n.textProps,function(c){a[c]!==y&&(b[c]=a[c],delete a[c])});v.css(b)}return F.call(n,a)},getBBox:function(){return{width:p.width+2*t,height:p.height+2*t,x:p.x-t,y:p.y-t}},shadow:function(a){s&&s.shadow(a);return n},destroy:function(){Z(n.element,"mouseenter");Z(n.element,"mouseleave");v&&(v=v.destroy());s&&(s=s.destroy());Q.prototype.destroy.call(n);
n=m=j=k=l=null}})}};$a=ua;x(Q.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=x(this.styles,a);L(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=
this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,j=this.styles;L(b,{marginLeft:c,marginTop:d});i&&o(i,function(a){L(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&o(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var k=this.rotation,l,m=D(this.textWidth),n=[k,g,b.innerHTML,this.textWidth].join(",");if(n!==this.cTT){l=a.fontMetrics(b.style.fontSize).b;q(k)&&
this.setSpanRotation(k,h,l);i=p(this.elemWidth,b.offsetWidth);if(i>m&&/[ \-]/.test(b.textContent||b.innerText))L(b,{width:m+"px",display:"block",whiteSpace:j&&j.whiteSpace||"normal"}),i=m;this.getSpanCorrection(i,l,h,k,g)}L(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(ib)l=b.offsetHeight;this.cTT=n}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=ya?"-ms-transform":ib?"-webkit-transform":La?"MozTransform":Jb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";
d[e+(La?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";L(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});x(ua.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a};d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:r(b),y:r(c)}).css({position:"absolute",
fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;o(j.reverse(),function(a){var d,e=J(a.element,"class");e&&(e={className:e});b=a.div=a.div||$(Ka,e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;x(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=
!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0},visibilitySetter:function(a,b){d[b]=a}})})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});if(!ca&&!fa){F={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Ka;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?
c.join(""):a.prepVML(c),this.element=$(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:Q.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=X(a*ha),c=aa(a*ha);L(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,
", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):P})},getSpanCorrection:function(a,b,c,d,e){var f=d?X(d*ha):1,g=d?aa(d*ha):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),L(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ra(a[b]))c[b]=r(a[b]*10)-5;else if(a[b]===
"Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,ja(c,b),c.push(b),b.destroyClip=function(){ja(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:hb?"inherit":"rect(auto)"});return b.css(a)},css:Q.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Ra(a)},destroy:function(){this.destroyClip&&this.destroyClip();
return Q.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=K.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=D(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,m,n,v;k&&typeof k.value!=="string"&&(k="x");m=k;if(a){n=p(a.width,3);v=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(k.value,
l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=$(g.prepVML(j),null,{left:D(i.left)+p(a.offsetX,1),top:D(i.top)+p(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',v*e,'"/>'];$(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:na,setAttr:function(a,b){hb?this.element[a]=b:this.element.setAttribute(a,
b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||$(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=
a!==P,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},opacitySetter:na,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-r(aa(a*ha)+1)+"px";c.top=r(X(a*ha))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;ra(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&
o(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,hb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};A.VMLElement=F=ka(Q,F);F.prototype.ySetter=F.prototype.widthSetter=F.prototype.heightSetter=F.prototype.xSetter;var Na={Element:F,isIE8:Ba.indexOf("MSIE 8.0")>-1,init:function(a,
b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ka).css(x(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!B.namespaces.hcv){B.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{B.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){B.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=da(a);return x(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+r(a?e:d)+"px,"+r(a?f:b)+"px,"+r(a?b:f)+"px,"+r(a?d:e)+"px)"};!a&&hb&&c==="DIV"&&x(d,{width:b+"px",height:f+"px"});return d},
updateClipping:function(){o(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=P;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,m=a.linearGradient||a.radialGradient,n,v,s,p,N,t="",a=a.stops,w,ga=[],q=function(){h=['<fill colors="'+ga.join(",")+'" opacity="',s,'" o:opacity2="',v,'" type="',i,'" ',t,'focus="100%" method="any" />'];$(e.prepVML(h),null,null,b)};n=a[0];w=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);
w[0]<1&&a.push([1,w[1]]);o(a,function(a,b){g.test(a[1])?(f=oa(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);ga.push(a[0]*100+"% "+k);b?(s=l,p=k):(v=l,N=k)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,t='angle="'+(90-W.atan((m-a)/(n-c))*180/ma)+'"',q();else{var j=m.r,u=j*2,y=j*2,r=m.cx,x=m.cy,C=b.radialReference,z,j=function(){C&&(z=d.getBBox(),r+=(C[0]-z.x)/z.width-0.5,x+=(C[1]-z.y)/z.height-0.5,u*=C[2]/z.width,y*=C[2]/z.height);t='src="'+T.global.VMLRadialGradientURL+
'" size="'+u+","+y+'" origin="0.5,0.5" position="'+r+","+x+'" color2="'+N+'" ';q()};d.added?j():d.onAdd=j;j=p}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=oa(a),h=["<",c,' opacity="',f.get("a"),'"/>'],$(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ua.prototype.html,path:function(a){var b={coordsize:"10 10"};Ha(a)?b.d=a:da(a)&&x(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(da(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ka).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ua.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;L(a,{flip:"x",left:D(d.width)-(e?D(e.top):1),top:D(d.height)-(e?D(e.left):1),rotation:-90});o(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d,c=e.innerR,d=X(f),i=aa(f),j=X(g),k=aa(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ua.prototype.symbols[!q(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};A.VMLRenderer=F=function(){this.init.apply(this,
arguments)};F.prototype=z(ua.prototype,Na);$a=F}ua.prototype.measureSpanWidth=function(a,b){var c=B.createElement("span"),d;d=B.createTextNode(a);c.appendChild(d);L(c,b);this.box.appendChild(c);d=c.offsetWidth;Ra(c);return d};var Mb;if(fa)A.CanVGRenderer=F=function(){Ca="http://www.w3.org/1999/xhtml"},F.prototype.symbols={},Mb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Rb(d,a);b.push(c)}}}(),$a=F;Ta.prototype={addLabel:function(){var a=
this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],j=f===h[h.length-1],e=d?p(d[f],e[f],f):f,d=this.label,h=h.info,k;a.isDatetimeAxis&&h&&(k=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);this.isFirst=i;this.isLast=j;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:j,dateTimeLabelFormat:k,value:a.isLog?ea(ia(e)):e});q(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=q(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(z(g.style)).add(a.labelGroup):
null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,e=b.chart.spacing,f=p(b.labelLeft,C(b.pos,e[3])),e=p(b.labelRight,u(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],j=g.getBBox().width,k=b.slotWidth,l=1,m,n={};if(h)h<0&&c-i*j<f?m=r(c/X(h*ha)-f):h>0&&c+i*j>e&&(m=r((d-c)/X(h*ha)));else if(d=c+
(1-i)*j,c-i*j<f?k=a.x+k*(1-i)-f:d>e&&(k=e-a.x+k*i,l=-1),k=C(b.slotWidth,k),k<b.slotWidth&&b.labelAlign==="center"&&(a.x+=l*(b.slotWidth-k-i*(b.slotWidth-C(j,k)))),j>k||b.autoRotation&&g.styles.width)m=k;if(m){n.width=m;if(!b.options.labels.style.textOverflow)n.textOverflow="ellipsis";g.css(n)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-
e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,m=i.tickRotCorr||{x:0,y:0},c=p(e.y,m.y+(i.side===2?8:-(c.getBBox().height/2))),a=a+e.x+m.x-(f&&d?f*j*(k?-1:1):0),b=b+c-(f&&!d?f*j*(k?1:-1):0);l&&(b+=g/(h||1)%l*(i.labelOffset/l));return{x:a,y:r(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,
b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":"tick",v=e[m+"LineWidth"],s=e[m+"LineColor"],o=e[m+"LineDashStyle"],N=e[n+"Length"],m=e[n+"Width"]||0,t=e[n+"Color"],w=e[n+"Position"],n=this.mark,ga=k.step,q=!0,u=d.tickmarkOffset,r=this.getPosition(g,j,u,b),x=r.x,r=r.y,z=g&&x===d.pos+d.len||!g&&r===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(v){j=d.getPlotLinePath(j+u,v*z,b,!0);if(l===y){l={stroke:s,
"stroke-width":v};if(o)l.dashstyle=o;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=v?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(m&&N)w==="inside"&&(N=-N),d.opposite&&(N=-N),h=this.getMarkPath(x,r,N,m*z,g,f),n?n.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:t,"stroke-width":m,opacity:c}).add(d.axisGroup);if(i&&!isNaN(x))i.xy=r=this.getLabelPosition(x,r,i,g,k,u,a,ga),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&
!this.isFirst&&!p(e.showLastLabel,1)?q=!1:g&&!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&this.handleOverflow(r),ga&&a%ga&&(q=!1),q&&!isNaN(r.y)?(r.opacity=c,i[this.isNew?"attr":"animate"](r),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Qa(this,this.axis)}};A.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};A.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,j=q(i)&&q(h),k=d.value,
l=d.dashStyle,m=a.svgElem,n=[],v,s=d.color,p=d.zIndex,o=d.events,t={},w=b.chart.renderer;b.isLog&&(i=Ea(i),h=Ea(h),k=Ea(k));if(g){if(n=b.getPlotLinePath(k,g),t={stroke:s,"stroke-width":g},l)t.dashstyle=l}else if(j){n=b.getPlotBandPath(i,h,d);if(s)t.fill=s;if(d.borderWidth)t.stroke=d.borderColor,t["stroke-width"]=d.borderWidth}else return;if(q(p))t.zIndex=p;if(m)if(n)m.animate({d:n},null,m.onGetPath);else{if(m.hide(),m.onGetPath=function(){m.show()},f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=
m=w.path(n).attr(t).add(),o))for(v in d=function(b){m.on(b,function(c){o[b].apply(a,[c])})},o)d(v);if(e&&q(e.text)&&n&&n.length&&b.width>0&&b.height>0){e=z({align:c&&j&&"center",x:c?!j&&4:10,verticalAlign:!c&&j&&"middle",y:c?j?16:10:j?6:-4,rotation:c&&!j&&90},e);if(!f){t={align:e.textAlign||e.align,rotation:e.rotation};if(q(p))t.zIndex=p;a.label=f=w.text(e.text,0,0,e.useHTML).attr(t).css(e.style).add()}b=[n[1],n[4],j?n[6]:n[1]];j=[n[2],n[5],j?n[7]:n[2]];n=Pa(b);c=Pa(j);f.align(e,!1,{x:n,y:c,width:Fa(b)-
n,height:Fa(j)-c});f.show()}else f&&f.hide();return a},destroy:function(){ja(this.axis.plotLinesAndBands,this);delete this.axis;Qa(this)}};var va=A.Axis=function(){this.init.apply(this,arguments)};va.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0,y:15},lineColor:"#C0D0E0",
lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,
minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return A.numberFormat(this.total,-1)},style:z(ba.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0,y:null},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0,y:-15},title:{rotation:0}},
init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=
e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=q(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=p(d.crosshair,sa(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;Ma(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,
0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===y)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)H(this,f,d[f]);if(this.isLog)this.val2lin=Ea,this.lin2val=ia},setOptions:function(a){this.options=z(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],z(T[this.coll],
a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=T.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ja(h,this);else if(c)g=b;else if(d)g=Oa(d,b);else if(f&&a>=1E3)for(;f--&&g===y;)c=Math.pow(1E3,f+1),a>=c&&b*10%c===0&&e[f]!==null&&(g=A.numberFormat(b/c,-1)+e[f]);g===y&&(g=O(b)>=1E4?A.numberFormat(b,-1):A.numberFormat(b,-1,y,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=
!1;a.dataMin=a.dataMax=a.ignoreMinPadding=a.ignoreMaxPadding=null;a.buildStacks&&a.buildStacks();o(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=C(p(a.dataMin,d[0]),Pa(d)),a.dataMax=u(p(a.dataMax,d[0]),Fa(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(q(c)&&q(e))a.dataMin=C(p(a.dataMin,c),c),a.dataMax=u(p(a.dataMax,e),e);if(q(d))if(a.dataMin>=
d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=!0}}})},translate:function(a,b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,j=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,k=g.minPixelPadding,e=(g.doPostTranslate||g.isLog&&e)&&g.lin2val;if(!j)j=g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=k,a=a/j+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*j+i+h*k+(ra(f)?j*f*g.pointRange:0));return a},toPixels:function(a,
b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=C(u(b,a),c):m=!0;return a},e=p(e,this.translate(a,null,null,c)),a=c=r(e+i);i=j=r(k-e-i);isNaN(e)?m=!0:this.horiz?(i=h,j=k-this.bottom,a=c=n(a,
g,g+this.width)):(a=g,c=l-this.right,i=j=n(i,h,h+this.height));return m&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ea(V(b/a)*a),f=ea(ta(c/a)*a),g=[];if(b===c&&ra(b))return[b];for(b=e;b<=f;){g.push(b);b=ea(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.min;e=this.max;var g=e-f;if(g&&g/c<this.len/3)if(this.isLog){a=b.length;for(e=1;e<a;e++)d=d.concat(this.getLogTickPositions(c,
b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),f,e,a.startOfWeek));else for(b=f+(b[0]-f)%c;b<=e;b+=c)d.push(b);this.trimTicks(d);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===y&&!this.isLog)q(a.min)||q(a.max)?this.minRange=null:(o(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:
i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===y||h<f)f=h}),this.minRange=C(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;d=(k-c+b)/2;d=[b-d,p(a.min,b-d)];if(e)d[2]=this.dataMin;b=Fa(d);c=[b+k,p(a.max,b+k)];if(e)c[2]=this.dataMax;c=Pa(c);c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Fa(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA,k=b.isXAxis;if(k||i||d)if(h?(f=h.minPointOffset,
g=h.pointRangePadding):o(b.series,function(a){var h=i?1:k?a.pointRange:b.axisPointRange||0,j=a.options.pointPlacement,v=a.closestPointRange;h>c&&(h=0);d=u(d,h);b.single||(f=u(f,Da(j)?0:h/2),g=u(g,j==="on"?0:h));!a.noSharedTooltip&&q(v)&&(e=q(e)?C(e,v):v)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=C(d,c),k)b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=
j*f},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=d.maxPadding,j=d.minPadding,k=d.tickInterval,l=d.tickPixelInterval,m=b.categories;!f&&!m&&!h&&this.getTickAmount();h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&la(11,1)):(b.min=p(b.userMin,d.min,b.dataMin),b.max=p(b.userMax,d.max,b.dataMax));if(e)!a&&C(b.min,p(b.dataMin,
b.min))<=0&&la(10,1),b.min=ea(Ea(b.min)),b.max=ea(Ea(b.max));if(b.range&&q(b.max))b.userMin=b.min=u(b.min,b.max-b.range),b.userMax=b.max,b.range=null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!m&&!b.axisPointRange&&!b.usePercentage&&!h&&q(b.min)&&q(b.max)&&(c=b.max-b.min)){if(!q(d.min)&&!q(b.userMin)&&j&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*j;if(!q(d.max)&&!q(b.userMax)&&i&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*i}if(ra(d.floor))b.min=u(b.min,d.floor);if(ra(d.ceiling))b.max=
C(b.max,d.ceiling);b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:h&&!k&&l===b.linkedParent.options.tickPixelInterval?k=b.linkedParent.tickInterval:p(k,this.tickAmount?(b.max-b.min)/u(this.tickAmount-1,1):void 0,m?1:(b.max-b.min)*l/u(b.len,l));g&&!a&&o(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);
if(b.pointRange)b.tickInterval=u(b.pointRange,b.tickInterval);a=p(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!k&&b.tickInterval<a)b.tickInterval=a;if(!f&&!e&&!k)b.tickInterval=qb(b.tickInterval,null,pb(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,
e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();if(!b&&(this.tickPositions=b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,
this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&q(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;b?this.min=d:this.min-f>d&&a.shift();c?this.max=e:this.max+f<e&&a.pop();a.length===0&&q(d)&&a.push((e+
d)/2)},getTickAmount:function(){var a={},b,c=this.options,d=c.tickAmount,e=c.tickPixelInterval;!q(c.tickInterval)&&this.len<e&&!this.isRadial&&!this.isLog&&c.startOnTick&&c.endOnTick&&(d=2);!d&&this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&(o(this.chart[this.coll],function(c){var d=c.options,e=c.horiz,d=[e?d.left:d.top,e?d.width:d.height,d.pane].join(",");a[d]?c.series.length&&(b=!0):a[d]=1}),b&&(d=ta(this.len/e)+1));if(d<4)this.finalTickAmt=d,d=5;this.tickAmount=d},adjustTickAmount:function(){var a=
this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(ea(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(q(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=y}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;
o(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=!1;this.getSeriesExtremes();this.setTickInterval();this.oldUserMin=this.userMin;this.oldUserMax=this.userMax;if(!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax}else if(!this.isXAxis){if(this.oldStacks)a=
this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=p(c,!0);o(f.series,function(a){delete a.kdTree});e=x(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;this.allowZoomOutside||(q(c)&&a<=C(c,p(e.min,c))&&(a=y),q(d)&&b>=u(d,p(e.max,d))&&(b=y));this.displayBtn=a!==y||b!==y;this.setExtremes(a,
b,!1,y,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=p(b.width,a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseFloat(f)/100*a.plotHeight);c.test(g)&&(g=parseFloat(g)/100*a.plotHeight+a.plotTop);this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=u(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=
this.isLog;return{min:a?ea(ia(this.min)):this.min,max:a?ea(ia(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?ia(this.min):this.min,b=b?ia(this.max):this.max;a===null?a=b<0?b:c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},unsquish:function(){var a=this.ticks,b=this.options.labels,
c=this.horiz,d=this.tickInterval,e=d,f=this.len/(((this.categories?1:0)+this.max-this.min)/d),g,h=b.rotation,i=this.chart.renderer.fontMetrics(b.style.fontSize,a[0]&&a[0].label),j,k=Number.MAX_VALUE,l,m=function(a){a/=f||1;a=a>1?ta(a):1;return a*d};c?(l=q(h)?[h]:f<p(b.autoRotationLimit,80)&&!b.staggerLines&&!b.step&&b.autoRotation)&&o(l,function(a){var b;if(a===h||a&&a>=-90&&a<=90)j=m(O(i.h/aa(ha*a))),b=j+O(a/360),b<k&&(k=b,g=a,e=j)}):e=m(i.h);this.autoRotation=l;this.labelRotation=g;return e},renderUnsquish:function(){var a=
this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=a.margin,h=this.categories?c.length:c.length-1,i=this.slotWidth=f&&!e.step&&!e.rotation&&(this.staggerLines||1)*a.plotWidth/h||!f&&(g[3]&&g[3]-a.spacing[3]||a.chartWidth*0.33),j=u(1,r(i-2*(e.padding||5))),k={},g=b.fontMetrics(e.style.fontSize,d[0]&&d[0].label),h=e.style.textOverflow,l,m=0;if(!Da(e.rotation))k.rotation=e.rotation;if(this.autoRotation)o(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength}),
m>j&&m>g.h?k.rotation=this.labelRotation:this.labelRotation=0;else if(i&&(l={width:j+"px"},!h)){l.textOverflow="clip";for(i=c.length;!f&&i--;)if(j=c[i],j=d[j].label)if(j.styles.textOverflow==="ellipsis"&&j.css({textOverflow:"clip"}),j.getBBox().height>this.len/c.length-(g.h-g.f))j.specCss={textOverflow:"ellipsis"}}if(k.rotation&&(l={width:(m>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!h))l.textOverflow="ellipsis";this.labelAlign=k.align=e.align||this.autoLabelAlign(this.labelRotation);
o(c,function(a){var b=(a=d[a])&&a.label;if(b)l&&b.css(z(l,b.specCss)),delete b.specCss,b.attr(k),a.rotation=k.rotation});this.tickRotCorr=b.rotCorr(g.b,this.labelRotation||0,this.side===2)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,m,n=0,v=d.title,s=d.labels,S=0,N=b.axisOffset,b=b.clipOffset,t=[-1,
1,1,-1][h],w;j=a.hasData();a.showAxis=k=j||p(d.showEmpty,!0);a.staggerLines=a.horiz&&s.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:s.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){if(o(e,function(b){f[b]?f[b].addLabel():f[b]=new Ta(a,b)}),a.renderUnsquish(),o(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===
a.labelAlign)S=u(f[b].getLabelSize(),S)}),a.staggerLines)S*=a.staggerLines,a.labelOffset=S}else for(w in f)f[w].destroy(),delete f[w];if(v&&v.text&&v.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(v.text,0,0,v.useHTML).attr({zIndex:7,rotation:v.rotation||0,align:v.textAlign||{low:"left",middle:"center",high:"right"}[v.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(v.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=a.axisTitle.getBBox()[g?"height":"width"],m=v.offset,n=
q(m)?0:p(v.margin,g?5:10);a.axisTitle[k?"show":"hide"]()}a.offset=t*p(d.offset,N[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===2?a.tickRotCorr.y:0;g=S+n+(S&&t*(g?p(s.y,a.tickRotCorr.y+8):s.x)-c);a.axisTitleMargin=p(m,g);N[h]=u(N[h],a.axisTitleMargin+l+t*a.offset,g);l=V(d.lineWidth/2)*2;d.offset&&(l=u(0,l-d.offset));b[i]=u(b[i],l)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&
(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,j=e.y||0,k=D(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?k:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+j-(g?
this.height:0)+h:d+j}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.isLinked,g=a.tickPositions,h=a.axisTitle,i=a.ticks,j=a.minorTicks,k=a.alternateBands,l=d.stackLabels,m=d.alternateGridColor,n=a.tickmarkOffset,v=d.lineWidth,s,p=b.hasRendered&&q(a.oldMin)&&!isNaN(a.oldMin),N=a.showAxis,t,w;a.labelEdge.length=0;a.overlap=!1;o([i,j,k],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||f){a.minorTickInterval&&!a.categories&&o(a.getMinorTickPositions(),function(b){j[b]||
(j[b]=new Ta(a,b,"minor"));p&&j[b].isNew&&j[b].render(null,!0);j[b].render(null,!1,1)});if(g.length&&(o(g,function(b,c){if(!f||b>=a.min&&b<=a.max)i[b]||(i[b]=new Ta(a,b)),p&&i[b].isNew&&i[b].render(c,!0,0.1),i[b].render(c)}),n&&(a.min===0||a.single)))i[-1]||(i[-1]=new Ta(a,-1,null,!0)),i[-1].render(-1);m&&o(g,function(b,c){if(c%2===0&&b<a.max)k[b]||(k[b]=new A.PlotLineOrBand(a)),t=b+n,w=g[c+1]!==y?g[c+1]+n:a.max,k[b].options={from:e?ia(t):t,to:e?ia(w):w,color:m},k[b].render(),k[b].isActive=!0});if(!a._addedPlotLB)o((d.plotLines||
[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0}o([i,j,k],function(a){var c,d,e=[],f=za?za.duration||500:0,g=function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])};for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);a===k||!b.hasRendered||!f?g():f&&setTimeout(g,f)});if(v)s=a.getLinePath(v),a.axisLine?a.axisLine.animate({d:s}):a.axisLine=c.path(s).attr({stroke:d.lineColor,"stroke-width":v,zIndex:7}).add(a.axisGroup),
a.axisLine[N?"show":"hide"]();if(h&&N)h[h.isNew?"attr":"animate"](a.getTitlePosition()),h.isNew=!1;l&&l.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.render();o(this.plotLinesAndBands,function(a){a.render()});o(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||Z(b);for(d in c)Qa(c[d]),c[d]=null;o([b.ticks,b.minorTicks,b.alternateBands],function(a){Qa(a)});for(a=e.length;a--;)e[a].destroy();o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),
function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e=d.animation;if(!this.crosshair||(q(b)||!p(this.crosshair.snap,!0))===!1||b&&b.series&&b.series[this.coll]!==this)this.hideCrosshair();else if(p(d.snap,!0)?q(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,
null,c)||null,c===null)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?"animate":"attr"]({d:c},e);else{e=this.categories&&!this.isRadial;e={"stroke-width":d.width||(e?this.transA:1),stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};x(va.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,
null,null,!0),d=this.getPlotLinePath(a,null,null,!0);d&&c&&d.toString()!==c.toString()?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new A.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,
c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();o([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&ja(b,b[e])})}});va.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=T.global.useUTC,h,i=new Aa(b-Wa(b)),j=a.unitRange,k=a.count;if(q(b)){i[Eb](j>=E.second?0:k*V(i.getMilliseconds()/k));if(j>=E.second)i[Fb](j>=E.minute?0:k*V(i.getSeconds()/k));if(j>=E.minute)i[Gb](j>=E.hour?0:k*V(i[sb]()/k));if(j>=E.hour)i[Hb](j>=
E.day?0:k*V(i[tb]()/k));if(j>=E.day)i[vb](j>=E.month?1:k*V(i[Xa]()/k));j>=E.month&&(i[wb](j>=E.year?0:k*V(i[Ya]()/k)),h=i[Za]());j>=E.year&&(h-=h%k,i[xb](h));if(j===E.week)i[vb](i[Xa]()-i[ub]()+p(d,1));b=1;if(ob||eb)i=i.getTime(),i=new Aa(i+Wa(i));h=i[Za]();for(var d=i.getTime(),l=i[Ya](),m=i[Xa](),n=(E.day+(g?Wa(i):i.getTimezoneOffset()*6E4))%E.day;d<c;)e.push(d),j===E.year?d=gb(h+b*k,0):j===E.month?d=gb(h,l+b*k):!g&&(j===E.day||j===E.week)?d=gb(h,l,m+b*k*(j===E.day?1:7)):d+=j*k,b++;e.push(d);o(lb(e,
function(a){return j<=E.hour&&a%E.day===n}),function(a){f[a]="day"})}e.info=x(a,{higherRanks:f,totalRange:j*k});return e};va.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=E[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=E[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+E[c[g+1][0]])/
2)break;e===E.year&&a<5*e&&(f=[1,2,5]);c=qb(a/e,f,d[0]==="year"?u(pb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};va.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=r(a),g=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)j=Ea(ia(f)*e[h]),j>b&&(!d||k<=c)&&k!==y&&g.push(k),k>c&&(l=!0),
k=j}else if(b=ia(b),c=ia(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=qb(a,null,pb(a)),g=Ua(this.getLinearTickPositions(a,b,c),Ea),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return g};var Nb=A.Tooltip=function(){this.init.apply(this,arguments)};Nb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=D(d.padding);this.chart=a;this.options=b;this.crosshairs=
[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});fa||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==
!1&&!e.isHidden&&(O(a-f.x)>1||O(b-f.y)>1),h=e.followPointer||e.len>1;x(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?y:g?(2*f.anchorX+c)/3:c,anchorY:h?y:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);if(!this.isHidden)this.hideTimer=setTimeout(function(){b.label.fadeOut();b.isHidden=!0},p(a,this.options.hideDelay,500))},getAnchor:function(a,b){var c,
d=this.chart,e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,j,k,a=sa(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===y&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(o(a,function(a){j=a.series.yAxis;k=a.series.xAxis;h+=a.plotX+(!e&&k?k.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&j?j.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ua(c,r)},getPosition:function(a,b,c){var d=this.chart,
e=this.distance,f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop],j=["x",d.chartWidth,a,c.plotX+d.plotLeft],k=p(c.ttBelow,d.inverted&&!c.negative||!d.inverted&&c.negative),l=function(a,b,c,d){var h=c<d-e,i=d+e+c<b,j=d-e-c;d+=e;if(k&&i)f[a]=d;else if(!k&&h)f[a]=j;else if(h)f[a]=j-g<0?j:j-g;else if(i)f[a]=d+g+c>b?d:d+g;else return!1},m=function(a,b,c,d){if(d<e||d>b-e)return!1;else f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},n=function(a){var b=i;i=j;j=b;h=a},v=function(){l.apply(0,i)!==!1?m.apply(0,j)===
!1&&!h&&(n(!0),v()):h?f.x=f.y=0:(n(!0),v())};(d.inverted||this.len>1)&&n();v();return f},defaultFormatter:function(a){var b=this.points||sa(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h,i={},j,k=[];j=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;clearTimeout(this.hideTimer);this.followPointer=sa(a)[0].series.tooltipOptions.followPointer;
h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&o(i,function(a){a.setState()}),o(a,function(a){a.setState("hover");k.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=k,this.len=k.length,a=a[0]):i=a.getLabelConfig();j=j.call(i,this);i=a.series;this.distance=p(i.tooltipOptions.distance,16);j===!1?this.hide():(this.isHidden&&(db(d),d.attr("opacity",1).show()),d.attr({text:j}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),
this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);I(c,"tooltipRefresh",{text:j,x:f+c.plotLeft,y:g+c.plotTop,borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(r(c.x),r(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,
hour:6,day:3},h,i="millisecond";if(e){h=Oa("%m-%d %H:%M:%S.%L",a.x);for(f in E){if(e===E.week&&+Oa("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}else if(E[f]>e){f=i;break}else if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&ra(a.key),
c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Ja(c,{point:a,series:d})},bodyFormatter:function(a){return Ua(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};var pa;ab=B.documentElement.ontouchstart!==y;var Va=A.Pointer=function(a,b){this.init(a,b)};Va.prototype={init:function(a,b){var c=b.chart,d=c.events,e=fa?"":c.zoomType,c=a.inverted,f;this.options=
b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(A.Tooltip&&b.tooltip.enabled)a.tooltip=new Nb(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||window.event,a=Tb(a);if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:
a;if(!b)this.chartPosition=b=Sb(this.chart.container);d.pageX===y?(c=u(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return x(a,{chartX:r(c),chartY:r(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};o(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,g=b.hoverSeries,h,i=b.chartWidth,j,k,l=[],m,
n;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];!e&&g&&g.directTouch&&f?m=f:(o(c,function(b){j=b.noSharedTooltip&&e;k=!e&&b.directTouch;b.visible&&!j&&!k&&p(b.options.enableMouseTracking,!0)&&(n=b.searchPoint(a,!j&&b.kdDimensions===1))&&l.push(n)}),o(l,function(a){if(a&&typeof a.dist==="number"&&a.dist<i)i=a.dist,m=a}));if(m&&(m!==this.prevKDPoint||d&&d.isHidden)){if(e&&!m.series.noSharedTooltip){for(h=l.length;h--;)(l[h].clientX!==m.clientX||l[h].series.noSharedTooltip)&&
l.splice(h,1);l.length&&d&&d.refresh(l,a);o(l,function(b){if(b!==m)b.onMouseOver(a)});(g&&g.directTouch&&f||m).onMouseOver(a)}else d&&d.refresh(m,a),m.onMouseOver(a);this.prevKDPoint=m}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(Y[pa])Y[pa].pointer.onDocumentMouseMove(a)},H(B,"mousemove",this._onDocumentMouseMove);o(b.axes,function(b){b.drawCrosshair(a,
p(m,f))})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;(a=a&&g&&h)&&sa(h)[0].plotX===y&&(a=!1);if(a)g.refresh(h),e&&(e.setState(e.state,!0),o(c.axes,function(a){p(a.options.crosshair&&a.options.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()}));else{if(e)e.onMouseOut();f&&o(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);if(this._onDocumentMouseMove)Z(B,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=
null;o(c.axes,function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;o(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=
this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,m=this.mouseDownX,n=this.mouseDownY,v=c.panKey&&a[c.panKey+"Key"];d<h?d=h:d>h+j&&(d=h+j);e<i?e=i:e>i+k&&(e=i+k);this.hasDragged=Math.sqrt(Math.pow(m-d,2)+Math.pow(n-e,2));if(this.hasDragged>10){l=b.isInsidePlot(m-h,n-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!v&&!this.selectionMarker)this.selectionMarker=
b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&f&&(d-=m,this.selectionMarker.attr({width:O(d),x:(d>0?0:d)+m}));this.selectionMarker&&g&&(d=e-n,this.selectionMarker.attr({height:O(d),y:(d>0?0:d)+n}));l&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},f=this.selectionMarker,
g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,j=f.attr?f.attr("height"):f.height,k;if(this.hasDragged||d)o(c.axes,function(c){if(c.zoomEnabled&&q(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type==="touchend"?c.minPixelPadding:0,v=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+j)-n);e[c.coll].push({axis:c,min:C(v,f),max:u(v,f)});k=!0}}),k&&I(c,"selection",e,function(a){c.zoom(x(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();
d&&this.scaleGroups()}if(c)L(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){Y[pa]&&Y[pa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,
a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){var a=Y[pa];if(a)a.pointer.reset(),a.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;pa=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=J(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==
-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);a.originalEvent=a;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(I(c.series,"click",x(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",
a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};H(b,"mouseleave",a.onContainerMouseLeave);bb===1&&H(B,"mouseup",a.onDocumentMouseUp);if(ab)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},bb===1&&
H(B,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;Z(this.chart.container,"mouseleave",this.onContainerMouseLeave);bb||(Z(B,"mouseup",this.onDocumentMouseUp),Z(B,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};x(A.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,
b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],v,s,p=h||1,o=i.inverted,t=i.bounds[a?"h":"v"],w=b.length===1,q=b[0][l],u=c[0][l],r=!w&&b[1][l],y=!w&&c[1][l],x,c=function(){!w&&O(q-r)>20&&(p=h||O(u-y)/O(q-r));s=(n-u)/p+q;v=i["plot"+(a?"Width":"Height")]/p};c();b=s;b<t.min?(b=t.min,x=!0):b+v>t.max&&(b=t.max-v,x=!0);x?(u-=0.8*(u-g[j][0]),w||(y-=0.8*(y-g[j][1])),c()):g[j]=[u,y];o||(f[j]=s-n,f[m]=v);f=o?1/p:p;e[m]=v;e[j]=b;d[o?a?"scaleY":
"scaleX":"scale"+k]=p;d["translate"+k]=f*n+(u-f*q)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,j={},k=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!k&&a.preventDefault();Ua(e,function(a){return b.normalize(a)});if(a.type==="touchstart")o(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=
[d[0].chartY,d[1]&&d[1].chartY],o(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=C(e,f),e=u(e,f);b.min=C(a.pos,g-d);b.max=u(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=x({destroy:na},c.plotBox);b.pinchTranslate(d,e,j,i,l,g);b.hasPinched=h;b.scaleGroups(j,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=
!1,this.reset(!1,0)}},touch:function(a,b){var c=this.chart;pa=c.index;a.touches.length===1?(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu?(b&&this.runPointActions(a),this.pinch(a)):b&&this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(a){Y[pa]&&Y[pa].pointer.drop(a)}});if(K.PointerEvent||K.MSPointerEvent){var wa={},Bb=!!K.PointerEvent,
Xb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in wa)wa.hasOwnProperty(a)&&b.push({pageX:wa[a].pageX,pageY:wa[a].pageY,target:wa[a].target});return b},Cb=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&Y[pa])d(a),d=Y[pa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:na,touches:Xb()})};x(Va.prototype,{onContainerPointerDown:function(a){Cb(a,"onContainerTouchStart","touchstart",function(a){wa[a.pointerId]={pageX:a.pageX,
pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Cb(a,"onContainerTouchMove","touchmove",function(a){wa[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!wa[a.pointerId].target)wa[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Cb(a,"onDocumentTouchEnd","touchend",function(a){delete wa[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,Bb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Bb?"pointermove":
"MSPointerMove",this.onContainerPointerMove);a(B,Bb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});cb(Va.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&L(b.container,{"-ms-touch-action":P,"touch-action":P})});cb(Va.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(H)});cb(Va.prototype,"destroy",function(a){this.batchMSEvents(Z);a.call(this)})}var nb=A.Legend=function(a,b){this.init(a,b)};nb.prototype={init:function(a,
b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=z(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=p(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),H(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:
g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==y&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;o(["legendItem","legendLine",
"legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Ra(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,o(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,L(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":P}))})},renderTitle:function(){var a=
this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?Ja(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=
this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?p(d.itemDistance,20):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,v=this.itemMarginTop,s=this.initialItemX,o=a.legendItem,q=a.series&&a.series.drawLegendSymbol?a.series:a,t=q.options,t=this.createCheckboxForItem&&t&&t.showCheckbox,w=d.useHTML;if(!o){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=o=c.text("",l?f+g:-g,this.baseline||
0,w).css(z(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,o),this.baseline=this.fontMetrics.f+3+v,o.attr("y",this.baseline);q.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,o,w,h,i);this.colorizeItem(a,a.visible);t&&this.createCheckboxForItem(a)}this.setText(a);c=o.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(t?20:0);this.itemHeight=g=r(a.legendItemHeight||c.height);
if(e&&this.itemX-s+f>(m||b.chartWidth-2*j-s-d.x))this.itemX=s,this.itemY+=v+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=u(this.maxItemWidth,f);this.lastItemY=v+this.itemY+n;this.lastLineHeight=u(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=v+g+n,this.lastLineHeight=g);this.offsetWidth=m||u((e?this.itemX-s-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];o(this.chart.series,function(b){var c=b.options;if(p(c.showInLegend,!q(c.linkedTo)?
y:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align[0]+d.verticalAlign[0]+d.layout[0];this.display&&!d.floating&&o([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!q(a[g])&&(c[jb[g]]=u(c[jb[g]],c.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+p(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,
g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,m=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();rb(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;
o(e,function(b){a.renderItem(b)});g=(j.width||a.offsetWidth)+k;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=k;if(l||m){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:m||P}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;o(e,function(b){a.positionItem(b)});f&&d.align(x({width:g,height:h},j),!0,
"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=p(j.animation,!0),l=j.arrowSize||12,m=this.nav,n=this.pages,v=this.padding,s,q=this.allItems,N=function(a){i.attr({height:a});if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+v+"px,9999px,"+(v+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);
g&&(f=C(f,g));n.length=0;if(a>f){this.clipHeight=h=u(f-20-this.titleHeight-v,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;o(q,function(a,b){var c=a._legendItemPos[1],d=r(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(s||c)!==n[e-1])n.push(s||c),e++;b===q.length-1&&c+d-n[e-1]>h&&n.push(c);c!==s&&(s=c)});if(!i)i=b.clipRect=d.clipRect(0,v,9999,0),b.contentGroup.clip(i);N(h);if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",
function(){b.scroll(-1,k)}).add(m),this.pager=d.text("",15,10).css(j.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(m);b.scroll(0);a=f}else if(m)N(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==y&&Sa(b,this.chart),
this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};Na=A.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;
b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-r(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,
d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(Ba)||La)&&cb(nb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});F=A.Chart=function(){this.init.apply(this,arguments)};F.prototype={callbacks:[],init:function(a,b){var c,d=a.series;a.series=null;c=z(T,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};
this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=Y.length;Y.push(f);bb++;d.reflow!==!1&&H(f,"load",function(){f.initReflow()});if(e)for(g in e)H(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=fa?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=M[a.type||b.type||b.defaultSeriesType])||la(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,
b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,k=c.length,l=k,m=this.renderer,n=m.isHidden(),p=[];Sa(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;o(c,function(a){a.isDirty&&a.options.legendType===
"point"&&(a.updateTotals&&a.updateTotals(),f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=null,o(b,function(a){a.setScale()});this.getMargins();i&&(o(b,function(a){a.isDirty&&(j=!0)}),o(b,function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,p.push(function(){I(a,"afterSetExtremes",x(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();o(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||
a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();I(this,"redraw");n&&this.cloneRenderTo(!0);o(p,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=sa(b.xAxis||{}),b=b.yAxis=sa(b.yAxis||{});o(c,function(a,
b){a.index=b;a.isX=!0});o(b,function(a,b){a.index=b});c=c.concat(b);o(c,function(b){new va(a,b)})},getSelectedPoints:function(){var a=[];o(this.series,function(b){a=a.concat(lb(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return lb(this.series,function(a){return a.selected})},getStacks:function(){var a=this;o(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});o(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===
!1))b.stackKey=b.type+p(b.options.stack,"")})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=z(e.title,a);g=e.subtitle=z(e.subtitle,b),e=g;o([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,
f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(x({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(x({y:b+(f.margin-13)+g.fontMetrics(f.style.fontSize,d).b},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=ta(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&
p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!q(b))this.containerWidth=kb(c,"width");if(!q(a))this.containerHeight=kb(c,"height");this.chartWidth=u(0,b||this.containerWidth||600);this.chartHeight=u(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Ra(b),delete this.renderToClone):(c&&
c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),L(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),B.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+yb++;if(Da(a))this.renderTo=a=B.getElementById(a);a||la(13,!0);c=D(J(a,"data-highcharts-chart"));!isNaN(c)&&Y[c]&&Y[c].hasRendered&&
Y[c].destroy();J(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=$(Ka,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},x({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=
b.forExport?new ua(a,c,d,b.style,!0):new $a(a,c,d,b.style);fa&&this.renderer.create(this,a,c,d);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!q(c[0]))this.plotTop=u(this.plotTop,d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=
this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&o(a.axes,function(a){a.getOffset()});o(jb,function(d,e){q(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||kb(d,"width"),f=c.height||kb(d,"height"),c=a?a.target:K,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===K||c===B)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=
setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};H(K,"resize",b);H(a,"destroy",function(){Z(K,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})};Sa(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(q(a))d.chartWidth=e=u(0,r(a)),d.hasUserSize=!!e;if(q(b))d.chartHeight=f=u(0,r(b));(za?mb:L)(d.container,{width:e+"px",height:f+
"px"},za);d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;o(d.axes,function(a){a.isDirty=!0;a.setScale()});o(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;I(d,"resize");za===!1?g():setTimeout(g,za&&za.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=r(this.plotLeft);
this.plotTop=j=r(this.plotTop);this.plotWidth=k=u(0,r(d-i-this.marginRight));this.plotHeight=l=u(0,r(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*V(this.plotBorderWidth/2);b=ta(u(d,h[3])/2);c=ta(u(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-u(d,h[1])/2-b),height:u(0,V(this.plotSizeY-u(d,h[2])/
2-c))};a||o(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;o(jb,function(b,c){a[b]=p(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||
0,n,p=this.plotLeft,o=this.plotTop,q=this.plotWidth,u=this.plotHeight,t=this.plotBox,w=this.clipRect,r=this.clipBox;n=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-n,height:d-n}));else{e={fill:j||P};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(t):this.plotBackground=b.rect(p,o,q,u,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(t):
this.plotBGImage=b.image(l,p,o,q,u).add();w?w.animate({width:r.width,height:r.height}):this.clipRect=b.clipRect(r);if(m)g?g.animate(g.crisp({x:p,y:o,width:q,height:u,strokeWidth:-m})):this.plotBorder=b.rect(p,o,q,u,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:P,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;o(["inverted","angular","polar"],function(g){c=M[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];
for(e=d&&d.length;!f&&e--;)(c=M[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;o(b,function(a){a.linkedSeries.length=0});o(b,function(b){var d=b.options.linkedTo;if(Da(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d})},renderSeries:function(){o(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&o(b.items,function(c){var d=x(b.style,c.style),e=D(d.left)+
a.plotLeft,f=D(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new nb(this,c.legend);this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=13;o(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.1;if(f||g)this.maxTicks=null,o(a,function(a){(a.horiz&&f||!a.horiz&&
g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&o(a,function(a){a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},
destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");Y[a.index]=y;bb--;a.renderTo.removeAttribute("data-highcharts-chart");Z(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML=
"",Z(d),f&&Ra(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ca&&K==K.top&&B.readyState!=="complete"||fa&&!K.canvg?(fa?Mb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):B.attachEvent("onreadystatechange",function(){B.detachEvent("onreadystatechange",a.firstRender);B.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();I(a,"init");a.resetMargins();a.setChartSize();
a.propFromSeries();a.getAxes();o(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,"beforeRender");if(A.Pointer)a.pointer=new Va(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);o(a.callbacks,function(b){a.index!==y&&b.apply(a,[a])});I(a,"load");a.cloneRenderTo(!0)}},splashArray:function(a,b){var c=b[a],c=da(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};var Yb=A.CenteredSeriesMixin={getCenter:function(){var a=this.options,
b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[p(e[0],"50%"),p(e[1],"50%"),a.size||"100%",a.innerSize||0],f=C(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);return e}},Ga=function(){};Ga.prototype={init:function(a,b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=
this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ga.prototype.optionsToObject.call(this,a);x(this,a);this.options=this.options?x(this.options,a):a;if(d)this.y=this[d];if(this.x===y&&c)this.x=b===y?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(typeof a===
"number"||a===null)b[e[0]]=a;else if(Ha(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;)b[e[h++]]=a[g++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),ja(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)Z(this),
this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,
d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";o(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ja(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,
a,b,c)}};var R=A.Series=function(){};R.prototype={isCartesian:!0,type:"line",pointClass:Ga,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return p(a.options.index,a._i)-p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();x(c,{name:b.name,state:"",pointAttr:{},
visible:b.visible!==!1,selected:b.selected===!0});if(fa)b.animation=!1;e=b.events;for(d in e)H(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();o(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;rb(f,g);this.yAxis&&rb(this.yAxis.series,g);o(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=
this,b=a.options,c=a.chart,d;o(a.axisTypes||[],function(e){o(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==y&&b[e]===d.id||b[e]===y&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&la(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;o(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=
this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=p(b,a.pointStart,0);this.pointInterval=c=p(this.pointInterval,a.pointInterval,1);if(d==="month"||d==="year")a=new Aa(b),a=d==="month"?+a[wb](a[Ya]()+c):+a[xb](a[Za]()+c),c=a-b;this.xIncrement=b+c;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else o(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&
b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=z(e,c.series,a);this.tooltipOptions=z(T.tooltip,T.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+
"Threshold"]||c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&q(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(q(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint||this.getCyclic("color",this.options.color||ba[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=
this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:Na.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,m=l&&!!l.categories,n=i.turboThreshold,v=this.xData,s=this.yData,q=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)o(a,function(a,b){f[b].update&&f[b].update(a,!1,null,
!1)});else{e.xIncrement=null;e.pointRange=m?1:i.pointRange;e.colorCounter=0;o(this.parallelArrays,function(a){e[a+"Data"].length=0});if(n&&h>n){for(c=0;k===null&&c<h;)k=a[c],c++;if(ra(k)){m=p(i.pointStart,0);i=p(i.pointInterval,1);for(c=0;c<h;c++)v[c]=m,s[c]=a[c],m+=i;e.xIncrement=m}else if(Ha(k))if(q)for(c=0;c<h;c++)i=a[c],v[c]=i[0],s[c]=i.slice(1,q+1);else for(c=0;c<h;c++)i=a[c],v[c]=i[0],s[c]=i[1];else la(12)}else for(c=0;c<h;c++)if(a[c]!==y&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,
[a[c]]),e.updateParallelArrays(i,c),m&&i.name))l.names[i.x]=i.name;Da(s[0])&&la(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=this.isCartesian,l,m;if(k&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),l=a.min,
m=a.max;if(k&&this.sorted&&(!i||d>i||this.forceCrop))if(b[d-1]<l||b[0]>m)b=[],c=[];else if(b[0]<l||b[d-1]>m)e=this.cropData(this.xData,this.yData,l,m),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length-1;i>=0;i--)d=b[i]-b[i-1],d>0&&(g===y||d<g)?g=d:d<0&&this.requireSorting&&la(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;if(j.pointRange===null)this.pointRange=g||1;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,1),
i;for(i=0;i<e;i++)if(a[i]>=c){f=u(0,i-h);break}for(;i<e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],m;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=h+m,j?l[m]=(new f).init(this,[d[m]].concat(sa(e[m]))):(b[i]?k=b[i]:a[i]!==y&&(b[i]=k=(new f).init(this,
a[i],d[m])),l[m]=k),l[m].index=i;if(b&&(g!==(c=b.length)||j))for(m=0;m<c;m++)if(m===h&&!j&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=y;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==y&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||
(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=Pa(e);this.dataMax=Fa(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||ra(i),k=a.threshold,l=a.startFromThreshold?k:0,m,n,v,o=Number.MAX_VALUE,a=0;a<g;a++){var r=f[a],x=r.x,t=r.y;n=r.low;var w=
b&&e.stacks[(this.negStacks&&t<(l?0:k)?"-":"")+this.stackKey];if(e.isLog&&t!==null&&t<=0)r.y=t=null,la(10);r.plotX=m=C(u(-1E5,c.translate(x,0,0,0,1,i,this.type==="flags")),1E5);if(b&&this.visible&&w&&w[x])w=w[x],t=w.points[this.index+","+a],n=t[0],t=t[1],n===l&&(n=p(k,e.min)),e.isLog&&n<=0&&(n=null),r.total=r.stackTotal=w.total,r.percentage=w.total&&r.y/w.total*100,r.stackY=t,w.setOffset(this.pointXOffset||0,this.barW||0);r.yBottom=q(n)?e.translate(n,0,1,0,1):null;h&&(t=this.modifyValue(t,r));r.plotY=
n=typeof t==="number"&&t!==Infinity?C(u(-1E5,e.translate(t,0,1,0,1)),1E5):y;r.isInside=n!==y&&n>=0&&n<=e.len&&m>=0&&m<=c.len;r.clientX=j?c.translate(x,0,0,0,1):m;r.negative=r.y<(k||0);r.category=d&&d[r.x]!==y?d[r.x]:r.x;a&&(o=C(o,O(m-v)));v=m}this.closestPointRangePx=o;this.getSegments()},setClip:function(a){var b=this.chart,c=b.renderer,d=b.inverted,e=this.clipBox,f=e||b.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height].join(","),h=b[g],i=b[g+"m"];if(!h){if(a)f.width=
0,b[g+"m"]=i=c.clipRect(-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight);b[g]=h=c.clipRect(f)}a&&(h.count+=1);if(this.options.clip!==!1)this.group.clip(a||e?h:b.clipRect),this.markerGroup.clip(i),this.sharedClipKey=g;a||(h.count-=1,h.count<=0&&g&&b[g]&&(e||(b[g]=b[g].destroy()),b[g+"m"]&&(b[g+"m"]=b[g+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,d;if(c&&!da(c))c=ba[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},
c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();I(this,"afterAnimate")},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,m=this.pointAttr[""],n,v,o,r=this.markerGroup,q=p(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,k=g.graphic,n=g.marker||{},v=!!g.marker,a=q&&n.enabled===y||
n.enabled,o=g.isInside,a&&e!==y&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=p(n.symbol,this.symbol),j=i.indexOf("url")===0,k)k[o?"show":"hide"](!0).animate(x({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(o&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,v?n:l).attr(a).add(r)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],
c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ba[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor;f={stroke:g,fill:g};var i=a.points||[],j,k=[],l,m=a.pointAttrToOptions;l=a.hasPointSpecificOptions;var n=c.lineColor,p=c.fillColor;j=b.turboThreshold;var s=a.zones,r=a.zoneAxis||"y",u;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||oa(e.color||g).brighten(e.brightness).get(),
e.negativeColor=e.negativeColor||oa(e.negativeColor||h).brighten(e.brightness).get());k[""]=a.convertAttribs(c,f);o(["hover","select"],function(b){k[b]=a.convertAttribs(d[b],k[""])});a.pointAttr=k;g=i.length;if(!j||g<j||l)for(;g--;){j=i[g];if((c=j.options&&j.options.marker||j.options)&&c.enabled===!1)c.radius=0;if(s.length){l=0;for(f=s[l];j[r]>=f.value;)f=s[++l];j.color=j.fillColor=f.color}l=b.colorByPoint||j.color;if(j.options)for(u in m)q(c[m[u]])&&(l=!0);if(l){c=c||{};l=[];d=c.states||{};f=d.hover=
d.hover||{};if(!b.marker)f.color=f.color||!j.options.color&&e[j.negative&&h?"negativeColor":"color"]||oa(j.color).brighten(f.brightness||e.brightness).get();f={color:j.color};if(!p)f.fillColor=j.color;if(!n)f.lineColor=j.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;l[""]=a.convertAttribs(x(f,c),k[""]);l.hover=a.convertAttribs(d.hover,k.hover,l[""]);l.select=a.convertAttribs(d.select,k.select,l[""])}else l=k;j.pointAttr=l}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(Ba),
d,e=a.data||[],f,g,h;I(a,"destroy");Z(a);o(a.axisTypes||[],function(b){if(h=a[b])ja(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof Q&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;ja(b.series,a);for(g in a)delete a[g]},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;o(a,
function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];o(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",
b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=this.getGraphPath(),g=this.fillGraph&&this.color||P;o(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});o(c,function(c,i){var j=c[0],k=a[j];if(k)db(k),k.animate({d:f});else if((d||g)&&f.length)k={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?k.dashstyle=c[2]:e&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),a[j]=a.chart.renderer.path(f).attr(k).add(a.group).shadow(i<2&&
b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,j=this.area,k=u(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],m,n=l.reversed,v=b.inverted,s=l.horiz,q,x,t,w=!1;if(d.length&&(i||j))i&&i.hide(),j&&j.hide(),m=l.getExtremes(),o(d,function(d,o){e=n?s?b.plotWidth:0:s?0:l.toPixels(m.min);e=C(u(p(f,e),0),k);f=C(u(r(l.toPixels(p(d.value,m.max),!0)),0),k);w&&(e=f=l.toPixels(m.max));q=Math.abs(e-f);x=C(e,f);t=u(e,f);if(l.isXAxis){if(h=
{x:v?t:x,y:0,width:q,height:k},!s)h.x=b.plotHeight-h.x}else if(h={x:0,y:v?t:x,width:k,height:q},s)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:n?x:t,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[o]?g[o].animate(h):(g[o]=c.clipRect(h),i&&a["zoneGraph"+o].clip(g[o]),j&&a["zoneArea"+o].clip(g[o]));w=d.value>m.max}),this.clips=g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};o(["group",
"markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)H(c,"resize",a),H(b,"destroy",function(){Z(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:
a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&p(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());o(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&
a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)e?a.animationTimeout=setTimeout(function(){a.afterAnimate()},e):a.afterAnimate();a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.isDirty,d=this.group,e=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),
d.animate({translateX:p(e&&e.left,a.plotLeft),translateY:p(f&&f.top,a.plotTop)}));this.translate();this.render();b&&I(this,"updatedData");(c||b)&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(b,d,g){var h,i;if(i=b&&b.length)return h=c.kdAxisArray[d%
g],b.sort(function(a,b){return a[h]-b[h]}),i=Math.floor(i/2),{point:b[i],left:a(b.slice(0,i),d+1,g),right:a(b.slice(i+1),d+1,g)}}function b(){var b=lb(c.points,function(a){return a.y!==null});c.kdTree=a(b,d,d)}var c=this,d=c.kdDimensions;delete c.kdTree;c.options.kdSync?b():setTimeout(b)},searchKDTree:function(a,b){function c(a,b,j,k){var l=b.point,m=d.kdAxisArray[j%k],n,p,o=l;p=q(a[e])&&q(l[e])?Math.pow(a[e]-l[e],2):null;n=q(a[f])&&q(l[f])?Math.pow(a[f]-l[f],2):null;n=(p||0)+(n||0);l.dist=q(n)?Math.sqrt(n):
Number.MAX_VALUE;l.distX=q(p)?Math.sqrt(p):Number.MAX_VALUE;m=a[m]-l[m];n=m<0?"left":"right";p=m<0?"right":"left";b[n]&&(n=c(a,b[n],j+1,k),o=n[g]<o[g]?n:l);b[p]&&Math.sqrt(m*m)<o[g]&&(a=c(a,b[p],j+1,k),o=a[g]<o[g]?a:o);return o}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Ib.prototype={destroy:function(){Qa(this,this.axis)},render:function(a){var b=this.options,
c=b.format,c=c?Ja(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=O(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,
f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};va.prototype.buildStacks=function(){var a=this.series,b=p(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};va.prototype.renderStackTotals=function(){var a=
this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};R.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,
e=e.stacking,i=this.stackKey,j="-"+i,k=this.negStacks,l=this.yAxis,m=l.stacks,n=l.oldStacks,o,s,q,r,t,w;for(r=0;r<d;r++){t=a[r];w=b[r];q=this.index+","+r;s=(o=k&&w<(g?0:f))?j:i;m[s]||(m[s]={});if(!m[s][t])n[s]&&n[s][t]?(m[s][t]=n[s][t],m[s][t].total=null):m[s][t]=new Ib(l,l.options.stackLabels,o,t,h);s=m[s][t];s.points[q]=[p(s.cum,g)];e==="percent"?(o=o?i:j,k&&m[o]&&m[o][t]?(o=m[o][t],s.total=o.total=u(o.total,s.total)+O(w)||0):s.total=ea(s.total+(O(w)||0))):s.total=ea(s.total+(w||0));s.cum=p(s.cum,
g)+(w||0);s.points[q].push(s.cum);c[r]=s.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=c;l.oldStacks={}}};R.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;o([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index+","+f],g=e)h=h.total?100/h.total:0,g[0]=ea(g[0]*h),g[1]=ea(g[1]*h),a.stackedYData[f]=g[1]})};x(F.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),I(e,"addSeries",
{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new va(this,z(a,{index:this[e].length,isX:b}));f[e]=sa(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&L(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=$(Ka,{className:"highcharts-loading"},
x(e.style,{zIndex:10,display:P}),b.container),b.loadingSpan=$("span",null,e.labelStyle,d),H(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)L(d,{opacity:0,display:""}),mb(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&mb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){L(b,{display:P})}});this.loadingShown=!1}});x(Ga.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);
if(f.y===null&&h)f.graphic=h.destroy();if(da(a)&&!Ha(a))f.redraw=function(){if(h)if(a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();else h.attr(f.pointAttr[f.state||""])[f.visible===!1?"hide":"show"]();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;k.data[i]=f.options;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;if(k.legendType==="point")j.isDirtyLegend=!0;b&&j.redraw(c)}
var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,l=g.xAxis&&g.xAxis.names,b=p(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(Ma(this,this.series.data),a,b)}});x(R.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,j=e.chart,k=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,m=["graph","area"],h=f.data,n,v=e.xData;Sa(d,j);if(c){for(d=e.zones.length;d--;)m.push("zoneGraph"+d,"zoneArea"+d);o(m,function(a){if(e[a])e[a].shift=
l+1})}if(i)i.isArea=!0;b=p(b,!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);m=i.x;d=v.length;if(e.requireSorting&&m<v[d-1])for(n=!0;d&&v[d-1]>m;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(k&&i.name)k[m]=i.name;h.splice(d,0,a);n&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),
j.redraw())},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){e.length===g.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};Sa(c,h);b=p(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart,a=p(a,!0);if(!c.isRemoving)c.isRemoving=!0,I(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=
!0;d.linkSeries();a&&d.redraw(b)});c.isRemoving=!1},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=M[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;o(h,function(a){h[a]=c[a];delete c[a]});a=z(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=y;x(this,M[a.type||f].prototype);o(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,
!0)&&d.redraw(!1)}});x(va.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=z(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=y;this.init(c,x(a,{events:y}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);ja(b.axes,this);ja(b[c],this);b.options[c].splice(this.options.index,1);o(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=
!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var xa=ka(R);M.line=xa;ba.area=z(U,{threshold:0});var qa=ka(R,{type:"area",getSegments:function(){var a=this,b=[],c=[],d=[],e=this.xAxis,f=this.yAxis,g=f.stacks[this.stackKey],h={},i,j,k=this.points,l=this.options.connectNulls,m,n;if(this.options.stacking&&!this.cropped){for(m=0;m<k.length;m++)h[k[m].x]=k[m];for(n in g)g[n].total!==null&&d.push(+n);d.sort(function(a,
b){return a-b});o(d,function(b){var d=0,k;if(!l||h[b]&&h[b].y!==null)if(h[b])c.push(h[b]);else{for(m=a.index;m<=f.series.length;m++)if(k=g[b].points[m+","+b]){d=k[1];break}i=e.translate(b);j=f.toPixels(d,!0);c.push({y:null,plotX:i,clientX:i,plotY:j,yBottom:j,onMouseOver:na})}});c.length&&b.push(c)}else R.prototype.getSegments.call(this),b=this.segments;this.segments=b},getSegmentPath:function(a){var b=R.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),
g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)g=p(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];R.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];o(this.zones,function(b,
f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});o(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):a[f]=a.chart.renderer.path(b).attr({fill:p(d[2],oa(d[1]).setOpacity(p(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:Na.drawRectangle});M.area=qa;ba.spline=z(U);xa=ka(R,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,l;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*
d+j)/2.5;k=(1.5*e+g)/2.5;l=(k-i)*(j-d)/(j-h)+e-k;i+=l;k+=l;i>a&&i>e?(i=u(a,e),k=2*e-i):i<a&&i<e&&(i=C(a,e),k=2*e-i);k>g&&k>e?(k=u(g,e),i=2*e-k):k<g&&k<e&&(k=C(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});M.spline=xa;ba.areaspline=z(ba.area);qa=qa.prototype;xa=ka(xa,{type:"areaspline",closedStacks:!0,getSegmentPath:qa.getSegmentPath,closeSegment:qa.closeSegment,drawGraph:qa.drawGraph,
drawLegendSymbol:Na.drawRectangle});M.areaspline=xa;ba.column=z(U,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});xa=ka(R,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",
r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){R.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,i=0;b.grouping===!1?i=1:o(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,
g[f]===y&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=h});var c=C(O(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=c*b.groupPadding,k=(c-2*j)/i,l=b.pointWidth,b=q(l)?(k-l)/2:k*b.pointPadding,l=p(l,k-2*b);return a.columnMetrics={width:l,offset:b+(j+((e?i-(a.columnIndex||0):a.columnIndex)||0)*k-c/2)*(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,
f=a.translatedThreshold=e.getThreshold(c.threshold),g=p(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,j=a.barW=u(i,1+2*d),k=a.pointXOffset=h.offset,l=-(d%2?0.5:0),m=d%2?0.5:1;b.inverted&&(f-=0.5,b.renderer.isVML&&(m+=1));c.pointPadding&&(j=ta(j));R.prototype.translate.apply(a);o(a.points,function(c){var d=p(c.yBottom,f),h=999+O(d),h=C(u(-h,c.plotY),e.len+h),o=c.plotX+k,q=j,t=C(h,d),w,x;w=u(h,d)-t;O(w)<g&&g&&(w=g,x=!e.reversed&&!c.negative||e.reversed&&c.negative,t=r(O(t-f)>g?d-g:f-(x?g:0)));
c.barX=o;c.pointWidth=i;q=r(o+q)+l;o=r(o)+l;q-=o;d=O(t)<0.5;w=C(r(t+w)+m,9E4);t=r(t)+m;w-=t;d&&(t-=1,w+=1);c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-o-q/2,w]:[o+q/2,h+e.pos-b.plotTop,w];c.shapeType="rect";c.shapeArgs={x:o,y:t,width:q,height:w}})},getSymbol:na,drawLegendSymbol:Na.drawRectangle,drawGraph:na,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;o(a.points,function(h){var i=h.plotY,j=h.graphic;if(i!==y&&!isNaN(i)&&h.y!==
null)f=h.shapeArgs,i=q(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],j?(db(j),j.attr(i)[b.pointCount<e?"animate":"attr"](z(f))):h.graphic=d[h.shapeType](f).attr(i).attr(g).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(j)h.graphic=j.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(ca)a?(e.scaleY=0.001,a=C(b.pos+b.len,u(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:
e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0});R.prototype.remove.apply(a,arguments)}});M.column=xa;ba.bar=z(ba.column);qa=ka(xa,{type:"bar",inverted:!0});M.bar=qa;ba.scatter=z(U,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{series.color}">\u25CF</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});qa=ka(R,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&R.prototype.drawGraph.call(this)}});M.scatter=qa;ba.pie=z(U,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name},x:0},
ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});U={type:"pie",isCartesian:!1,pointClass:ka(Ga,{init:function(){Ga.prototype.init.apply(this,arguments);var a=this,b;x(a,{visible:a.visible!==!1,name:p(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};H(a,"select",b);H(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,
b=p(b,f);if(a!==c.visible){c.visible=c.options.visible=a=a===y?!c.visible:a;d.options.data[Ma(c,d.data)]=c.options;o(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;Sa(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=q(a)?a:!this.sliced;d.options.data[Ma(this,d.data)]=this.options;a=a?this.slicedTranslation:
{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",
fill:"color"},getColor:na,animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)o(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){R.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();p(b,!0)&&this.chart.redraw(c)},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;
for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){R.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=ma/180*(i-90),i=(this.endAngleRad=ma/180*(p(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,
n=k.length,o;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=W.asin(C((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*X(h)*(a[2]/2+l)};for(m=0;m<n;m++){o=k[m];f=j+b*i;if(!c||o.visible)b+=o.percentage/100;g=j+b*i;o.shapeType="arc";o.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:r(f*1E3)/1E3,end:r(g*1E3)/1E3};h=(g+f)/2;h>1.5*ma?h-=2*ma:h<-ma/2&&(h+=2*ma);o.slicedTranslation={translateX:r(X(h)*d),translateY:r(aa(h)*d)};f=X(h)*a[2]/2;g=aa(h)*a[2]/2;o.tooltipPos=[a[0]+f*0.7,a[1]+g*
0.7];o.half=h<-ma/2||h>ma/2?1:0;o.angle=h;e=C(e,l/2);o.labelPos=[a[0]+f+X(h)*l,a[1]+g+aa(h)*l,a[0]+f+X(h)*e,a[1]+g+aa(h)*e,a[0]+f,a[1]+g,l<0?"center":o.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g,h;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);o(a.points,function(i){d=i.graphic;g=i.shapeArgs;f=i.shadowGroup;if(e&&!f)f=i.shadowGroup=b.g("shadow").add(a.shadowGroup);c=i.sliced?i.slicedTranslation:{translateX:0,
translateY:0};f&&f.attr(c);if(d)d.animate(x(g,c));else{h={"stroke-linejoin":"round"};if(!i.visible)h.visibility="hidden";i.graphic=d=b[i.shapeType](g).setRadialReference(a.center).attr(i.pointAttr[i.selected?"select":""]).attr(h).attr(c).add(a.group).shadow(e,f)}})},searchPoint:na,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:Na.drawRectangle,getCenter:Yb.getCenter,getSymbol:na};U=ka(R,U);M.pie=U;R.prototype.drawDataLabels=function(){var a=
this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j,k=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),j=a.plotGroup("dataLabelsGroup","data-labels",d.defer?"hidden":"visible",d.zIndex||6),p(d.defer,!0)&&(j.attr({opacity:+h}),h||H(a,"afterAnimate",function(){a.visible&&j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,o(e,function(e){var h,n=e.dataLabel,o,s,r=e.connector,u=!0,t,w={};f=e.dlOptions||e.options&&
e.options.dataLabels;h=p(f&&f.enabled,g.enabled);if(n&&!h)e.dataLabel=n.destroy();else if(h){d=z(g,f);t=d.style;h=d.rotation;o=e.getLabelConfig();i=d.format?Ja(d.format,o):d.formatter.call(o,d);t.color=p(d.color,t.color,a.color,"black");if(n)if(q(i))n.attr({text:i}),u=!1;else{if(e.dataLabel=n=n.destroy(),r)e.connector=r.destroy()}else if(q(i)){n={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(t.color==="contrast")w.color=
d.inside||d.distance<0||b.stacking?k.getContrast(e.color||a.color):"#000000";if(c)w.cursor=c;for(s in n)n[s]===y&&delete n[s];n=e.dataLabel=k[h?"text":"label"](i,0,-999,d.shape,null,null,d.useHTML).attr(n).css(x(t,w)).add(j).shadow(d.shadow)}n&&a.alignDataLabel(e,n,d,null,u)}})};R.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-999),i=p(a.plotY,-999),j=b.getBBox(),k=f.renderer.fontMetrics(c.style.fontSize).b,l=this.visible&&(a.series.forceDL||f.isInsidePlot(h,
r(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g));if(l)d=x({x:g?f.plotWidth-i:h,y:r(g?f.plotHeight-h:i),width:0,height:0},d),x(c,{width:j.width,height:j.height}),c.rotation?(a=f.renderer.rotCorr(k,c.rotation),b[e?"attr":"animate"]({x:d.x+c.x+d.width/2+a.x,y:d.y+c.y+d.height/2}).attr({align:c.align})):(b.align(c,null,d),g=b.alignAttr,p(c.overflow,"justify")==="justify"?this.justifyDataLabel(b,c,g,j,d,e):p(c.crop,!0)&&(l=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)),c.shape&&
b.attr({anchorX:a.plotX,anchorY:a.plotY}));if(!l)b.attr({y:-999}),b.placed=!1};R.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k,l=a.box?0:a.padding||0;j=c.x+l;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width-l;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y+l;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height-l;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=
!f,a.align(b,null,e)};if(M.pie)M.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,l=p(e.softConnector,!0),m=e.distance,n=a.center,q=n[2]/2,s=n[1],x=m>0,y,t,w,z=[[],[]],B,A,D,F,G,E=[0,0,0,0],L=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){R.prototype.drawDataLabels.apply(a);o(b,function(a){a.dataLabel&&a.visible&&z[a.half].push(a)});for(F=2;F--;){var I=
[],M=[],H=z[F],K=H.length,J;if(K){a.sortByAngle(H,F-0.5);for(G=b=0;!b&&H[G];)b=H[G]&&H[G].dataLabel&&(H[G].dataLabel.getBBox().height||21),G++;if(m>0){t=C(s+q+m,d.plotHeight);for(G=u(0,s-q-m);G<=t;G+=b)I.push(G);t=I.length;if(K>t){c=[].concat(H);c.sort(L);for(G=K;G--;)c[G].rank=G;for(G=K;G--;)H[G].rank>=t&&H.splice(G,1);K=H.length}for(G=0;G<K;G++){c=H[G];w=c.labelPos;c=9999;var Q,P;for(P=0;P<t;P++)Q=O(I[P]-w[1]),Q<c&&(c=Q,J=P);if(J<G&&I[G]!==null)J=G;else for(t<K-G+J&&I[G]!==null&&(J=t-K+G);I[J]===
null;)J++;M.push({i:J,y:I[J]});I[J]=null}M.sort(L)}for(G=0;G<K;G++){c=H[G];w=c.labelPos;y=c.dataLabel;D=c.visible===!1?"hidden":"inherit";c=w[1];if(m>0){if(t=M.pop(),J=t.i,A=t.y,c>A&&I[J+1]!==null||c<A&&I[J-1]!==null)A=C(u(0,c),d.plotHeight)}else A=c;B=e.justify?n[0]+(F?-1:1)*(q+m):a.getX(A===s-q-m||A===s+q+m?c:A,F);y._attr={visibility:D,align:w[6]};y._pos={x:B+e.x+({left:f,right:-f}[w[6]]||0),y:A+e.y-10};y.connX=B;y.connY=A;if(this.options.size===null)t=y.width,B-t<f?E[3]=u(r(t-B+f),E[3]):B+t>h-
f&&(E[1]=u(r(B+t-h+f),E[1])),A-b/2<0?E[0]=u(r(-A+b/2),E[0]):A+b/2>i&&(E[2]=u(r(A+b/2-i),E[2]))}}}if(Fa(E)===0||this.verifyDataLabelOverflow(E))this.placeDataLabels(),x&&g&&o(this.points,function(b){j=b.connector;w=b.labelPos;if((y=b.dataLabel)&&y._pos&&b.visible)D=y._attr.visibility,B=y.connX,A=y.connY,k=l?["M",B+(w[6]==="left"?5:-5),A,"C",B,A,2*w[2]-w[4],2*w[3]-w[5],w[2],w[3],"L",w[4],w[5]]:["M",B+(w[6]==="left"?5:-5),A,"L",w[2],w[3],"L",w[4],w[5]],j?(j.animate({d:k}),j.attr("visibility",D)):b.connector=
j=a.chart.renderer.path(k).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:D}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},M.pie.prototype.placeDataLabels=function(){o(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-999})})},M.pie.prototype.alignDataLabel=na,M.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||
80,f=e,g;d[0]!==null?f=u(b[2]-u(a[1],a[3]),e):(f=u(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=u(C(f,b[2]-u(a[0],a[2])),e):(f=u(C(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),this.translate(b),o(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(M.column)M.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=
this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=p(a.below,a.plotY>p(this.translatedThreshold,g.yAxis.len)),j=p(c.inside,!!this.options.stacking);if(h&&(d=z(h),f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width}),!j))f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=p(c.align,!f||j?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,f||j?"middle":i?"top":"bottom");R.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=
a.Chart,c=a.each,d=a.pick,e=HighchartsAdapter.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels;(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(a.points,function(a){if(a.dataLabel)a.dataLabel.labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a.dataLabel)})});a.hideOverlappingLabels(e)}b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,c,d,e,k;for(d=0;d<b;d++)if(c=a[d])c.oldOpacity=
c.opacity,c.newOpacity=1;a.sort(function(a,b){return b.labelrank-a.labelrank});for(d=0;d<b;d++){e=a[d];for(c=d+1;c<b;++c)if(k=a[c],e&&k&&e.placed&&k.placed&&e.newOpacity!==0&&k.newOpacity!==0&&!(k.alignAttr.x>e.alignAttr.x+e.width||k.alignAttr.x+k.width<e.alignAttr.x||k.alignAttr.y>e.alignAttr.y+e.height||k.alignAttr.y+k.height<e.alignAttr.y))(e.labelrank<k.labelrank?e:k).newOpacity=0}for(d=0;d<b;d++)if(c=a[d]){if(c.oldOpacity!==c.newOpacity&&c.placed)c.alignAttr.opacity=c.newOpacity,c[c.isOld&&c.newOpacity?
"animate":"attr"](c.alignAttr);c.isOld=!0}}})(A);U=A.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==y&&d!==b.hoverPoint)d.onMouseOver(a)};o(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)o(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",
function(a){c.onTrackerMouseOut(a)}).css(e),ab))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},k=a.singlePoints,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(ca?1.0E-4:0.002)+")";if(e&&!c)for(m=e+1;m--;)d[m]==="M"&&d.splice(m+1,0,d[m+1]-i,d[m+2],"L"),(m&&d[m]===
"M"||m===e)&&d.splice(m,0,"L",d[m-2]+i,d[m-1]);for(m=0;m<k.length;m++)e=k[m],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:p,fill:c?p:P,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),o([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if(ab)a.on("touchstart",n)}))}};if(M.column)xa.prototype.drawTracker=
U.drawTrackerPoint;if(M.pie)M.pie.prototype.drawTracker=U.drawTrackerPoint;if(M.scatter)qa.prototype.drawTracker=U.drawTrackerPoint;x(nb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",
b,c)})},createCheckboxForItem:function(a){a.checkbox=$("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);H(a.checkbox,"click",function(b){I(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});T.legend.itemStyle.cursor="pointer";x(F.prototype,{showResetZoom:function(){var a=this,b=T.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=
a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?o(this.axes,function(a){b=a.zoom()}):o(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&
(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&da(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&o(d,function(a){a.setState()});o(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),l=h.toValue(i-d,!0)+j,j=h.toValue(i+c[b?"plotWidth":"plotHeight"]-
d,!0)-j,i=i>d;if(h.series.length&&(i||l>C(k.dataMin,k.min))&&(!i||j<u(k.dataMax,k.max)))h.setExtremes(l,j,!1,!1,{trigger:"pan"}),e=!0;c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);L(c.container,{cursor:"move"})}});x(Ga.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Ma(c,d.data)]=c.options;c.setState(a&&"select");b||o(e.getSelectedPoints(),function(a){if(a.selected&&
a!==c)a.selected=a.options.selected=!1,d.options.data[Ma(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;if(c.hoverSeries!==b)b.onMouseOver();if(e&&e!==this)e.onMouseOut();if(this.series)this.firePointEvent("mouseOver"),d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a),this.setState("hover"),c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");
if(!b||Ma(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=z(this.series.options.point,this.options).events,b;this.events=a;for(b in a)H(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=ba[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,n=e.halo,o,a=a||"";o=this.pointAttr[a]||
e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(z(o,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=k=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),
k.currentSymbol=l;if(k)k[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),k.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(m.seriesGroup);n.attr(x({fill:oa(this.color||e.color).setOpacity(c.opacity).get()},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-
a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,a*2,a*2)}});x(R.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&I(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},
setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===y?!h:a)?"show":"hide";o(["group","dataLabelsGroup",
"markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&o(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});o(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===y?!this.selected:a;if(this.checkbox)this.checkbox.checked=
a;I(this,a?"select":"unselect")},drawTracker:U.drawTrackerGraph});x(A,{Color:oa,Point:Ga,Tick:Ta,Renderer:$a,SVGElement:Q,SVGRenderer:ua,arrayMin:Pa,arrayMax:Fa,charts:Y,dateFormat:Oa,error:la,format:Ja,pathAnim:zb,getOptions:function(){return T},hasBidiBug:Ob,isTouchDevice:Kb,setOptions:function(a){T=z(!0,T,a);Db();return T},addEvent:H,removeEvent:Z,createElement:$,discardElement:Ra,css:L,each:o,map:Ua,merge:z,splat:sa,extendClass:ka,pInt:D,svg:ca,canvas:fa,vml:!ca&&!fa,product:"Highcharts",version:"4.1.7"})})(),
(function(k,D){function K(a,b,c){this.init.call(this,a,b,c)}var P=k.arrayMin,Q=k.arrayMax,t=k.each,H=k.extend,o=k.merge,R=k.map,q=k.pick,x=k.pInt,p=k.getOptions().plotOptions,h=k.seriesTypes,v=k.extendClass,L=k.splat,u=k.wrap,M=k.Axis,y=k.Tick,I=k.Point,S=k.Pointer,T=k.CenteredSeriesMixin,z=k.TrackerMixin,s=k.Series,w=Math,E=w.round,B=w.floor,N=w.max,U=k.Color,r=function(){};H(K.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b;d.options=a=o(e,b.angular?{background:{}}:void 0,
a);(a=a.background)&&t([].concat(L(a)).reverse(),function(a){var b=a.backgroundColor,g=c.userOptions,a=o(d.defaultBackgroundOptions,a);if(b)a.backgroundColor=b;a.color=a.backgroundColor;c.options.plotBands.unshift(a);g.plotBands=g.plotBands||[];g.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,
innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var G=M.prototype,y=y.prototype,V={getOffset:r,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:r,setCategories:r,setTitle:r},O={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,
labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=o(this.defaultOptions,this.defaultRadialOptions,a);if(!a.plotBands)a.plotBands=[]},getOffset:function(){G.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=T.getCenter.call(this.pane)},getLinePath:function(a,
b){var c=this.center,b=q(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){G.setAxisTranslation.call(this);if(this.center)this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0},beforeSetTickPositions:function(){this.autoConnect&&
(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){G.setAxisSize.call(this);if(this.isRadial){this.center=this.pane.center=k.CenteredSeriesMixin.getCenter.call(this.pane);if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;this.len=this.width=this.height=this.center[2]*q(this.sector,1)/2}},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,q(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)},
postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,i=[q(c.outerRadius,"100%"),c.innerRadius,q(c.thickness,10)],g=/%$/,l,m=this.isCircular;this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(a=Math.max(a,this.min),b=Math.min(b,this.max),m||(i[0]=this.translate(a),
i[1]=this.translate(b)),i=R(i,function(a){g.test(a)&&(a=x(a,10)*f/100);return a}),c.shape==="circle"||!m?(a=-Math.PI/2,b=Math.PI*1.5,l=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],i[0],i[0],{start:Math.min(a,b),end:Math.max(a,b),innerR:q(i[1],i[0]-i[2]),open:l}));return d},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),i,g,l;c.isCircular?l=["M",d[0]+e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:c.options.gridLineInterpolation===
"circle"?(a=c.translate(a))&&(l=c.getLinePath(0,a)):(t(e.xAxis,function(a){a.pane===c.pane&&(i=a)}),l=[],a=c.translate(a),d=i.tickPositions,i.autoConnect&&(d=d.concat([d[0]])),b&&(d=[].concat(d).reverse()),t(d,function(f,c){g=i.getPosition(f,a);l.push(c?"L":"M",g.x,g.y)}));return l},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:0.5,middle:0.25,low:0}[c.align]*a[2]+(c.y||0)}}};u(G,"init",function(a,b,c){var j;
var d=b.angular,e=b.polar,f=c.isX,i=d&&f,g,l;l=b.options;var m=c.pane||0;if(d){if(H(this,i?V:O),g=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else if(e)H(this,O),this.defaultRadialOptions=(g=f)?this.defaultRadialXOptions:o(this.defaultYAxisOptions,this.defaultRadialYOptions);a.call(this,b,c);if(!i&&(d||e)){a=this.options;if(!b.panes)b.panes=[];this.pane=(j=b.panes[m]=b.panes[m]||new K(L(l.pane)[m],b,this),m=j);m=m.options;b.inverted=!1;l.chart.zoomType=null;this.startAngleRad=b=(m.startAngle-
90)*Math.PI/180;this.endAngleRad=l=(q(m.endAngle,m.startAngle+360)-90)*Math.PI/180;this.offset=a.offset||0;if((this.isCircular=g)&&c.max===D&&l-b===2*Math.PI)this.autoConnect=!0}});u(y,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)});u(y,"getLabelPosition",function(a,b,c,d,e,f,i,g,l){var m=this.axis,j=f.y,n=20,h=f.align,A=(m.translate(this.pos)+m.startAngleRad+Math.PI/2)/Math.PI*180%360;m.isRadial?(a=m.getPosition(this.pos,m.center[2]/
2+q(f.distance,-25)),f.rotation==="auto"?d.attr({rotation:A}):j===null&&(j=m.chart.renderer.fontMetrics(d.styles.fontSize).b-d.getBBox().height/2),h===null&&(m.isCircular?(this.label.getBBox().width>m.len*m.tickInterval/(m.max-m.min)&&(n=0),h=A>n&&A<180-n?"left":A>180+n&&A<360-n?"right":"center"):h="center",d.attr({align:h})),a.x+=f.x,a.y+=j):a=a.call(this,b,c,d,e,f,i,g,l);return a});u(y,"getMarkPath",function(a,b,c,d,e,f,i){var g=this.axis;g.isRadial?(a=g.getPosition(this.pos,g.center[2]/2+d),b=
["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,i);return b});p.arearange=o(p.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});h.arearange=v(h.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,
highToXY:function(a){var b=this.chart,c=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=c.x-b.plotLeft;a.plotHigh=c.y-b.plotTop},getSegments:function(){var a=this;t(a.points,function(b){if(!a.options.connectNulls&&(b.low===null||b.high===null))b.y=null;else if(b.low===null&&b.high!==null)b.y=b.high});s.prototype.getSegments.call(this)},translate:function(){var a=this,b=a.yAxis;h.area.prototype.translate.apply(a);t(a.points,function(a){var d=a.low,e=a.high,f=a.plotY;e===
null&&d===null?a.y=null:d===null?(a.plotLow=a.plotY=null,a.plotHigh=b.translate(e,0,1,0,1)):e===null?(a.plotLow=f,a.plotHigh=null):(a.plotLow=f,a.plotHigh=b.translate(e,0,1,0,1))});this.chart.polar&&t(this.points,function(c){a.highToXY(c)})},getSegmentPath:function(a){var b,c=[],d=a.length,e=s.prototype.getSegmentPath,f,i;i=this.options;var g=i.step;for(b=HighchartsAdapter.grep(a,function(a){return a.plotLow!==null});d--;)f=a[d],f.plotHigh!==null&&c.push({plotX:f.plotHighX||f.plotX,plotY:f.plotHigh});
a=e.call(this,b);if(g)g===!0&&(g="left"),i.step={left:"right",center:"center",right:"left"}[g];c=e.call(this,c);i.step=g;i=[].concat(a,c);this.chart.polar||(c[0]="L");this.areaPath=this.areaPath.concat(a,c);return i},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=s.prototype,f=this.options.dataLabels,i=f.align,g,l,m=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(c=b;c--;)if(g=a[c])if(l=g.plotHigh>g.plotLow,g.y=g.high,g._plotY=g.plotY,g.plotY=g.plotHigh,d[c]=g.dataLabel,
g.dataLabel=g.dataLabelUpper,g.below=l,m){if(!i)f.align=l?"right":"left";f.x=f.xHigh}else f.y=f.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(c=b;c--;)if(g=a[c])if(l=g.plotHigh>g.plotLow,g.dataLabelUpper=g.dataLabel,g.dataLabel=d[c],g.y=g.low,g.plotY=g._plotY,g.below=!l,m){if(!i)f.align=l?"left":"right";f.x=f.xLow}else f.y=f.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}f.align=i},alignDataLabel:function(){h.column.prototype.alignDataLabel.apply(this,arguments)},
setStackedPoints:r,getSymbol:r,drawPoints:r});p.areasplinerange=o(p.arearange);h.areasplinerange=v(h.arearange,{type:"areasplinerange",getPointSpline:h.spline.prototype.getPointSpline});(function(){var a=h.column.prototype;p.columnrange=o(p.column,p.arearange,{lineWidth:1,pointRange:null});h.columnrange=v(h.arearange,{type:"columnrange",translate:function(){var b=this,c=b.yAxis,d;a.translate.apply(b);t(b.points,function(a){var f=a.shapeArgs,i=b.options.minPointLength,g;a.tooltipPos=null;a.plotHigh=
d=c.translate(a.high,0,1,0,1);a.plotLow=a.plotY;g=d;a=a.plotY-d;Math.abs(a)<i?(i-=a,a+=i,g-=i/2):a<0&&(a*=-1,g-=a);f.height=a;f.y=g})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:r,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})})();p.gauge=o(p.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2},dial:{},
pivot:{},tooltip:{headerFormat:""},showInLegend:!1});z={type:"gauge",pointClass:v(I,{setState:function(a){this.state=a}}),angular:!0,drawGraph:r,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();t(this.points,function(d){var e=o(b.dial,d.dial),f=x(q(e.radius,80))*c[2]/200,i=x(q(e.baseLength,70))*f/100,g=x(q(e.rearLength,10))*f/100,l=e.baseWidth||3,m=e.topWidth||1,j=b.overshoot,n=a.startAngleRad+a.translate(d.y,
null,null,null,!0);j&&typeof j==="number"?(j=j/180*Math.PI,n=Math.max(a.startAngleRad-j,Math.min(a.endAngleRad+j,n))):b.wrap===!1&&(n=Math.max(a.startAngleRad,Math.min(a.endAngleRad,n)));n=n*180/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-g,-l/2,"L",i,-l/2,f,-m/2,f,m/2,i,l/2,-g,l/2,"z"],translateX:c[0],translateY:c[1],rotation:n};d.plotX=c[0];d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;t(a.points,function(c){var b=
c.graphic,e=c.shapeArgs,m=e.d,j=o(d.dial,c.dial);b?(b.animate(e),e.d=m):c.graphic=f[c.shapeType](e).attr({stroke:j.borderColor||"none","stroke-width":j.borderWidth||0,fill:j.backgroundColor||"black",rotation:e.rotation}).add(a.group)});c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,q(e.radius,5)).attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;if(!a)t(b.points,
function(a){var d=a.graphic;d&&(d.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);s.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(a,b){s.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();q(b,!0)&&this.chart.redraw()},
drawTracker:z&&z.drawTrackerPoint};h.gauge=v(h.line,z);p.boxplot=o(p.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2});h.boxplot=v(h.column,{type:"boxplot",pointArrayMap:["low","q1",
"median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:r,translate:function(){var a=this.yAxis,b=this.pointArrayMap;h.column.prototype.translate.apply(this);t(this.points,function(c){t(b,function(b){c[b]!==null&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=this,b=a.points,c=a.options,d=a.chart.renderer,e,f,i,g,l,m,j,n,h,A,k,J,p,o,
u,r,v,s,w,x,z,y,F=a.doQuartiles!==!1,C=parseInt(a.options.whiskerLength,10)/100;t(b,function(b){h=b.graphic;z=b.shapeArgs;k={};o={};r={};y=b.color||a.color;if(b.plotY!==D)if(e=b.pointAttr[b.selected?"selected":""],v=z.width,s=B(z.x),w=s+v,x=E(v/2),f=B(F?b.q1Plot:b.lowPlot),i=B(F?b.q3Plot:b.lowPlot),g=B(b.highPlot),l=B(b.lowPlot),k.stroke=b.stemColor||c.stemColor||y,k["stroke-width"]=q(b.stemWidth,c.stemWidth,c.lineWidth),k.dashstyle=b.stemDashStyle||c.stemDashStyle,o.stroke=b.whiskerColor||c.whiskerColor||
y,o["stroke-width"]=q(b.whiskerWidth,c.whiskerWidth,c.lineWidth),r.stroke=b.medianColor||c.medianColor||y,r["stroke-width"]=q(b.medianWidth,c.medianWidth,c.lineWidth),j=k["stroke-width"]%2/2,n=s+x+j,A=["M",n,i,"L",n,g,"M",n,f,"L",n,l],F&&(j=e["stroke-width"]%2/2,n=B(n)+j,f=B(f)+j,i=B(i)+j,s+=j,w+=j,J=["M",s,i,"L",s,f,"L",w,f,"L",w,i,"L",s,i,"z"]),C&&(j=o["stroke-width"]%2/2,g+=j,l+=j,p=["M",n-x*C,g,"L",n+x*C,g,"M",n-x*C,l,"L",n+x*C,l]),j=r["stroke-width"]%2/2,m=E(b.medianPlot)+j,u=["M",s,m,"L",w,
m],h)b.stem.animate({d:A}),C&&b.whiskers.animate({d:p}),F&&b.box.animate({d:J}),b.medianShape.animate({d:u});else{b.graphic=h=d.g().add(a.group);b.stem=d.path(A).attr(k).add(h);if(C)b.whiskers=d.path(p).attr(o).add(h);if(F)b.box=d.path(J).attr(e).add(h);b.medianShape=d.path(u).attr(r).add(h)}})},setStackedPoints:r});p.errorbar=o(p.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
whiskerWidth:null});h.errorbar=v(h.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:h.arearange?h.arearange.prototype.drawDataLabels:r,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||h.column.prototype.getColumnMetrics.call(this)}});p.waterfall=o(p.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",dataLabels:{inside:!0},states:{hover:{lineWidthPlus:0}}});
h.waterfall=v(h.column,{type:"waterfall",upColorProp:"fill",pointValKey:"y",translate:function(){var a=this.options,b=this.yAxis,c,d,e,f,i,g,l,m,j,n=a.threshold,k=a.stacking;h.column.prototype.translate.apply(this);l=m=n;d=this.points;for(c=0,a=d.length;c<a;c++){e=d[c];g=this.processedYData[c];f=e.shapeArgs;j=(i=k&&b.stacks[(this.negStacks&&g<n?"-":"")+this.stackKey])?i[e.x].points[this.index+","+c]:[0,g];if(e.isSum)e.y=g;else if(e.isIntermediateSum)e.y=g-m;i=N(l,l+e.y)+j[0];f.y=b.translate(i,0,1);
if(e.isSum)f.y=b.translate(j[1],0,1),f.height=Math.min(b.translate(j[0],0,1),b.len)-f.y;else if(e.isIntermediateSum)f.y=b.translate(j[1],0,1),f.height=Math.min(b.translate(m,0,1),b.len)-f.y,m=j[1];else{if(l!==0)f.height=g>0?b.translate(l,0,1)-f.y:b.translate(l,0,1)-b.translate(l-g,0,1);l+=g}f.height<0&&(f.y+=f.height,f.height*=-1);e.plotY=f.y=E(f.y)-this.borderWidth%2/2;f.height=N(E(f.height),0.001);e.yBottom=f.y+f.height;f=e.plotY+(e.negative?f.height:0);this.chart.inverted?e.tooltipPos[0]=b.len-
f:e.tooltipPos[1]=f}},processData:function(a){var b=this.yData,c=this.options.data,d,e=b.length,f,i,g,l,m,j;i=f=g=l=this.options.threshold||0;for(j=0;j<e;j++)m=b[j],d=c&&c[j]?c[j]:{},m==="sum"||d.isSum?b[j]=i:m==="intermediateSum"||d.isIntermediateSum?b[j]=f:(i+=m,f+=m),g=Math.min(i,g),l=Math.max(i,l);s.prototype.processData.call(this,a);this.dataMin=g;this.dataMax=l},toYData:function(a){if(a.isSum)return a.x===0?null:"sum";else if(a.isIntermediateSum)return a.x===0?null:"intermediateSum";return a.y},
getAttribs:function(){h.column.prototype.getAttribs.apply(this,arguments);var a=this,b=a.options,c=b.states,d=b.upColor||a.color,b=k.Color(d).brighten(0.1).get(),e=o(a.pointAttr),f=a.upColorProp;e[""][f]=d;e.hover[f]=c.hover.upColor||b;e.select[f]=c.select.upColor||d;t(a.points,function(b){if(!b.options.color)b.y>0?(b.pointAttr=e,b.color=d):b.pointAttr=a.pointAttr})},getGraphPath:function(){var a=this.data,b=a.length,c=E(this.options.lineWidth+this.borderWidth)%2/2,d=[],e,f,i;for(i=1;i<b;i++)f=a[i].shapeArgs,
e=a[i-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[i-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f);return d},getExtremes:r,drawGraph:s.prototype.drawGraph});p.polygon=o(p.scatter,{marker:{enabled:!1}});h.polygon=v(h.scatter,{type:"polygon",fillGraph:!0,getSegmentPath:function(a){return s.prototype.getSegmentPath.call(this,a).concat("z")},drawGraph:s.prototype.drawGraph,drawLegendSymbol:k.LegendSymbolMixin.drawRectangle});p.bubble=o(p.scatter,{dataLabels:{formatter:function(){return this.point.z},
inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"});z=v(I,{haloPath:function(){return I.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)},ttBelow:!1});h.bubble=v(h.scatter,{type:"bubble",pointClass:z,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],
bubblePadding:!0,zoneAxis:"z",pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=this.options.marker,c=q(b.fillOpacity,0.5),a=a||b.fillColor||this.color;c!==1&&(a=U(a).setOpacity(c).get("rgba"));return a},convertAttribs:function(){var a=s.prototype.convertAttribs.apply(this,arguments);a.fill=this.applyOpacity(a.fill);return a},getRadii:function(a,b,c,d){var e,f,i,g=this.zData,l=[],m=this.options.sizeBy!=="width";for(f=0,e=g.length;f<
e;f++)i=b-a,i=i>0?(g[f]-a)/(b-a):0.5,m&&i>=0&&(i=Math.sqrt(i)),l.push(w.ceil(c+i*(d-c))/2);this.radii=l},animate:function(a){var b=this.options.animation;if(!a)t(this.points,function(a){var d=a.graphic,a=a.shapeArgs;d&&a&&(d.attr("r",1),d.animate({r:a.r},b))}),this.animate=null},translate:function(){var a,b=this.data,c,d,e=this.radii;h.scatter.prototype.translate.call(this);for(a=b.length;a--;)c=b[a],d=e?e[a]:0,d>=this.minPxSize/2?(c.shapeType="circle",c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox=
{x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=D},drawLegendSymbol:function(a,b){var c=x(a.itemStyle.fontSize)/2;b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup);b.legendSymbol.isMarker=!0},drawPoints:h.column.prototype.drawPoints,alignDataLabel:h.column.prototype.alignDataLabel,buildKDTree:r,applyZones:r});M.prototype.beforePadding=function(){var a=this,b=this.len,c=this.chart,d=0,e=b,f=this.isXAxis,i=f?"xData":"yData",g=
this.min,l={},m=w.min(c.plotWidth,c.plotHeight),j=Number.MAX_VALUE,n=-Number.MAX_VALUE,h=this.max-g,k=b/h,p=[];t(this.series,function(b){var g=b.options;if(b.bubblePadding&&(b.visible||!c.options.chart.ignoreHiddenSeries))if(a.allowZoomOutside=!0,p.push(b),f)t(["minSize","maxSize"],function(a){var b=g[a],f=/%$/.test(b),b=x(b);l[a]=f?m*b/100:b}),b.minPxSize=l.minSize,b=b.zData,b.length&&(j=q(g.zMin,w.min(j,w.max(P(b),g.displayNegative===!1?g.zThreshold:-Number.MAX_VALUE))),n=q(g.zMax,w.max(n,Q(b))))});
t(p,function(a){var b=a[i],c=b.length,m;f&&a.getRadii(j,n,l.minSize,l.maxSize);if(h>0)for(;c--;)typeof b[c]==="number"&&(m=a.radii[c],d=Math.min((b[c]-g)*k-m,d),e=Math.max((b[c]-g)*k+m,e))});p.length&&h>0&&q(this.options.min,this.userMin)===D&&q(this.options.max,this.userMax)===D&&(e-=b,k*=(b+d-e)/b,this.min+=d/k,this.max+=e/k)};(function(){function a(a,b,c){a.call(this,b,c);if(this.chart.polar)this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},this.closedStacks=!0}function b(a,
b){var c=this.chart,d=this.options.animation,e=this.group,j=this.markerGroup,n=this.xAxis.center,h=c.plotLeft,k=c.plotTop;if(c.polar){if(c.renderer.isSVG)d===!0&&(d={}),b?(c={translateX:n[0]+h,translateY:n[1]+k,scaleX:0.001,scaleY:0.001},e.attr(c),j&&j.attr(c)):(c={translateX:h,translateY:k,scaleX:1,scaleY:1},e.animate(c,d),j&&j.animate(c,d),this.animate=null)}else a.call(this,b)}var c=s.prototype,d=S.prototype,e;c.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;return this.searchKDTree({clientX:180+
Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)*(-180/Math.PI)})};u(c,"buildKDTree",function(a){if(this.chart.polar)this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.kdDimensions=2;a.apply(this)});c.toXY=function(a){var b,c=this.chart,d=a.plotX;b=a.plotY;a.rectPlotX=d;a.rectPlotY=b;b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-c.plotLeft;a.plotY=a.polarPlotY=b.y-c.plotTop;this.kdByAngle?(c=(d/Math.PI*180+this.xAxis.pane.options.startAngle)%360,
c<0&&(c+=360),a.clientX=c):a.clientX=a.plotX};h.area&&u(h.area.prototype,"init",a);h.areaspline&&u(h.areaspline.prototype,"init",a);h.spline&&u(h.spline.prototype,"getPointSpline",function(a,b,c,d){var e,j,n,h,k,p,o;if(this.chart.polar){e=c.plotX;j=c.plotY;a=b[d-1];n=b[d+1];this.connectEnds&&(a||(a=b[b.length-2]),n||(n=b[1]));if(a&&n)h=a.plotX,k=a.plotY,b=n.plotX,p=n.plotY,h=(1.5*e+h)/2.5,k=(1.5*j+k)/2.5,n=(1.5*e+b)/2.5,o=(1.5*j+p)/2.5,b=Math.sqrt(Math.pow(h-e,2)+Math.pow(k-j,2)),p=Math.sqrt(Math.pow(n-
e,2)+Math.pow(o-j,2)),h=Math.atan2(k-j,h-e),k=Math.atan2(o-j,n-e),o=Math.PI/2+(h+k)/2,Math.abs(h-o)>Math.PI/2&&(o-=Math.PI),h=e+Math.cos(o)*b,k=j+Math.sin(o)*b,n=e+Math.cos(Math.PI+o)*p,o=j+Math.sin(Math.PI+o)*p,c.rightContX=n,c.rightContY=o;d?(c=["C",a.rightContX||a.plotX,a.rightContY||a.plotY,h||e,k||j,e,j],a.rightContX=a.rightContY=null):c=["M",e,j]}else c=a.call(this,b,c,d);return c});u(c,"translate",function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,
!this.preventPostTranslate)){a=this.points;for(b=a.length;b--;)this.toXY(a[b])}});u(c,"getSegmentPath",function(a,b){var c=this.points;if(this.chart.polar&&this.options.connectEnds!==!1&&b[b.length-1]===c[c.length-1]&&c[0].y!==null)this.connectEnds=!0,b=[].concat(b,[c[0]]);return a.call(this,b)});u(c,"animate",b);if(h.column)e=h.column.prototype,u(e,"animate",b),u(e,"translate",function(a){var b=this.xAxis,c=this.yAxis.len,d=b.center,e=b.startAngleRad,j=this.chart.renderer,h,k;this.preventPostTranslate=
!0;a.call(this);if(b.isRadial){b=this.points;for(k=b.length;k--;)h=b[k],a=h.barX+e,h.shapeType="path",h.shapeArgs={d:j.symbols.arc(d[0],d[1],c-h.plotY,null,{start:a,end:a+h.pointWidth,innerR:c-q(h.yBottom,c)})},this.toXY(h),h.tooltipPos=[h.plotX,h.plotY],h.ttBelow=h.plotY>d[1]}}),u(e,"alignDataLabel",function(a,b,d,e,h,j){if(this.chart.polar){a=b.rectPlotX/Math.PI*180;if(e.align===null)e.align=a>20&&a<160?"left":a>200&&a<340?"right":"center";if(e.verticalAlign===null)e.verticalAlign=a<45||a>315?"bottom":
a>135&&a<225?"top":"middle";c.alignDataLabel.call(this,b,d,e,h,j)}else a.call(this,b,d,e,h,j)});u(d,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?t(c.axes,function(a){var e=a.isXAxis,f=a.center,h=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(h,f):Math.sqrt(Math.pow(h,2)+Math.pow(f,2)),!0)})}):d=a.call(this,b);return d})})()})(Highcharts),
function() {
    function n(n, t, e) {
        e = (e || 0) - 1;
        for (var r = n ? n.length : 0; ++e < r; ) if (n[e] === t) return e;
        return -1;
    }
    function t(n) {
        return n.charCodeAt(0);
    }
    function e() {
        return R.pop() || [];
    }
    function r(n) {
        return "function" != typeof n.toString && "string" == typeof (n + "");
    }
    function o(n) {
        n.length = 0, R.length < $ && R.push(n);
    }
    function u(n, t, e) {
        t || (t = 0), "undefined" == typeof e && (e = n ? n.length : 0);
        var r = -1;
        e = e - t || 0;
        for (var o = Array(0 > e ? 0 : e); ++r < e; ) o[r] = n[t + r];
        return o;
    }
    function i(n) {
        return n && "object" == typeof n && !Pt(n) && _t.call(n, "__wrapped__") ? n : new a(n);
    }
    function a(n, t) {
        this.__chain__ = !!t, this.__wrapped__ = n;
    }
    function c(n) {
        function t() {
            if (r) {
                var n = u(r);
                dt.apply(n, arguments);
            }
            if (this instanceof t) {
                var i = l(e.prototype), n = e.apply(i, n || arguments);
                return x(n) ? n : i;
            }
            return e.apply(o, n || arguments);
        }
        var e = n[0], r = n[2], o = n[4];
        return kt(t, n), t;
    }
    function f(n, t, i, a, c) {
        if (i) {
            var l = i(n);
            if ("undefined" != typeof l) return l;
        }
        if (!x(n)) return n;
        var p = st.call(n);
        if (!Z[p] || !St.nodeClass && r(n)) return n;
        var s = At[p];
        switch (p) {
          case H:
          case V:
            return new s(+n);

          case Q:
          case Y:
            return new s(n);

          case X:
            return l = s(n.source, T.exec(n)), l.lastIndex = n.lastIndex, l;
        }
        if (p = Pt(n), t) {
            var y = !a;
            a || (a = e()), c || (c = e());
            for (var h = a.length; h--; ) if (a[h] == n) return c[h];
            l = p ? s(n.length) : {};
        } else l = p ? u(n) : Lt({}, n);
        return p && (_t.call(n, "index") && (l.index = n.index), _t.call(n, "input") && (l.input = n.input)),
        t ? (a.push(n), c.push(l), (p ? Bt : Rt)(n, function(n, e) {
            l[e] = f(n, t, i, a, c);
        }), y && (o(a), o(c)), l) : l;
    }
    function l(n) {
        return x(n) ? jt(n) : {};
    }
    function p(n, t, e) {
        if ("function" != typeof n) return F;
        if ("undefined" == typeof t || !("prototype" in n)) return n;
        var r = n.__bindData__;
        if ("undefined" == typeof r && (St.funcNames && (r = !n.name), r = r || !St.funcDecomp,
        !r)) {
            var o = gt.call(n);
            St.funcNames || (r = !K.test(o)), r || (r = G.test(o), kt(n, r));
        }
        if (!1 === r || !0 !== r && 1 & r[1]) return n;
        switch (e) {
          case 1:
            return function(e) {
                return n.call(t, e);
            };

          case 2:
            return function(e, r) {
                return n.call(t, e, r);
            };

          case 3:
            return function(e, r, o) {
                return n.call(t, e, r, o);
            };

          case 4:
            return function(e, r, o, u) {
                return n.call(t, e, r, o, u);
            };
        }
        return D(n, t);
    }
    function s(n) {
        function t() {
            var n = f ? a : this;
            if (o) {
                var v = u(o);
                dt.apply(v, arguments);
            }
            return (i || y) && (v || (v = u(arguments)), i && dt.apply(v, i), y && v.length < c) ? (r |= 16,
            s([ e, h ? r : -4 & r, v, null, a, c ])) : (v || (v = arguments), p && (e = n[g]),
            this instanceof t ? (n = l(e.prototype), v = e.apply(n, v), x(v) ? v : n) : e.apply(n, v));
        }
        var e = n[0], r = n[1], o = n[2], i = n[3], a = n[4], c = n[5], f = 1 & r, p = 2 & r, y = 4 & r, h = 8 & r, g = e;
        return kt(t, n), t;
    }
    function y(n, t, u, i, a, c) {
        if (u) {
            var f = u(n, t);
            if ("undefined" != typeof f) return !!f;
        }
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (n === n && !(n && et[typeof n] || t && et[typeof t])) return !1;
        if (null == n || null == t) return n === t;
        var l = st.call(n), p = st.call(t);
        if (l == M && (l = U), p == M && (p = U), l != p) return !1;
        switch (l) {
          case H:
          case V:
            return +n == +t;

          case Q:
            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;

          case X:
          case Y:
            return n == t + "";
        }
        if (p = l == q, !p) {
            var s = _t.call(n, "__wrapped__"), h = _t.call(t, "__wrapped__");
            if (s || h) return y(s ? n.__wrapped__ : n, h ? t.__wrapped__ : t, u, i, a, c);
            if (l != U || !St.nodeClass && (r(n) || r(t))) return !1;
            if (l = !St.argsObject && m(n) ? Object : n.constructor, s = !St.argsObject && m(t) ? Object : t.constructor,
            l != s && !(j(l) && l instanceof l && j(s) && s instanceof s) && "constructor" in n && "constructor" in t) return !1;
        }
        for (l = !a, a || (a = e()), c || (c = e()), s = a.length; s--; ) if (a[s] == n) return c[s] == t;
        var g = 0, f = !0;
        if (a.push(n), c.push(t), p) {
            if (s = n.length, g = t.length, (f = g == s) || i) for (;g--; ) if (p = s, h = t[g],
            i) for (;p-- && !(f = y(n[p], h, u, i, a, c)); ) ; else if (!(f = y(n[g], h, u, i, a, c))) break;
        } else Nt(t, function(t, e, r) {
            return _t.call(r, e) ? (g++, f = _t.call(n, e) && y(n[e], t, u, i, a, c)) : void 0;
        }), f && !i && Nt(n, function(n, t, e) {
            return _t.call(e, t) ? f = -1 < --g : void 0;
        });
        return a.pop(), c.pop(), l && (o(a), o(c)), f;
    }
    function h(n, t, e, r, o) {
        (Pt(t) ? A : Rt)(t, function(t, u) {
            var i, a, c = t, f = n[u];
            if (t && ((a = Pt(t)) || zt(t))) {
                for (c = r.length; c--; ) if (i = r[c] == t) {
                    f = o[c];
                    break;
                }
                if (!i) {
                    var l;
                    e && (c = e(f, t), l = "undefined" != typeof c) && (f = c), l || (f = a ? Pt(f) ? f : [] : zt(f) ? f : {}),
                    r.push(t), o.push(f), l || h(f, t, e, r, o);
                }
            } else e && (c = e(f, t), "undefined" == typeof c && (c = t)), "undefined" != typeof c && (f = c);
            n[u] = f;
        });
    }
    function g(n, t, e, r, o, i) {
        var a = 1 & t, f = 4 & t, l = 16 & t, p = 32 & t;
        if (!(2 & t || j(n))) throw new TypeError();
        l && !e.length && (t &= -17, l = e = !1), p && !r.length && (t &= -33, p = r = !1);
        var y = n && n.__bindData__;
        return y && !0 !== y ? (y = u(y), y[2] && (y[2] = u(y[2])), y[3] && (y[3] = u(y[3])),
        !a || 1 & y[1] || (y[4] = o), !a && 1 & y[1] && (t |= 8), !f || 4 & y[1] || (y[5] = i),
        l && dt.apply(y[2] || (y[2] = []), e), p && mt.apply(y[3] || (y[3] = []), r), y[1] |= t,
        g.apply(null, y)) : (1 == t || 17 === t ? c : s)([ n, t, e, r, o, i ]);
    }
    function v() {
        tt.h = J, tt.b = tt.c = tt.g = tt.i = "", tt.e = "t", tt.j = !0;
        for (var n, t = 0; n = arguments[t]; t++) for (var e in n) tt[e] = n[e];
        t = tt.a, tt.d = /^[^,]+/.exec(t)[0], n = Function, t = "return function(" + t + "){",
        e = tt;
        var r = "var n,t=" + e.d + ",E=" + e.e + ";if(!t)return E;" + e.i + ";";
        e.b ? (r += "var u=t.length;n=-1;if(" + e.b + "){", St.unindexedChars && (r += "if(s(t)){t=t.split('')}"),
        r += "while(++n<u){" + e.g + ";}}else{") : St.nonEnumArgs && (r += "var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';" + e.g + ";}}else{"),
        St.enumPrototypes && (r += "var G=typeof t=='function';"), St.enumErrorProps && (r += "var F=t===k||t instanceof Error;");
        var o = [];
        if (St.enumPrototypes && o.push('!(G&&n=="prototype")'), St.enumErrorProps && o.push('!(F&&(n=="message"||n=="name"))'),
        e.j && e.f) r += "var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",
        o.length && (r += "if(" + o.join("&&") + "){"), r += e.g + ";", o.length && (r += "}"),
        r += "}"; else if (r += "for(n in t){", e.j && o.push("m.call(t, n)"), o.length && (r += "if(" + o.join("&&") + "){"),
        r += e.g + ";", o.length && (r += "}"), r += "}", St.nonEnumShadows) {
            for (r += "if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",
            k = 0; 7 > k; k++) r += "n='" + e.h[k] + "';if((!(r&&x[n])&&m.call(t,n))", e.j || (r += "||(!x[n]&&t[n]!==A[n])"),
            r += "){" + e.g + "}";
            r += "}";
        }
        return (e.b || St.nonEnumArgs) && (r += "}"), r += e.c + ";return E", n("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L", t + r + "}")(p, W, ft, _t, z, m, Pt, O, tt.f, lt, et, Ct, Y, pt, st);
    }
    function _() {
        var t = (t = i.indexOf) === S ? n : t;
        return t;
    }
    function d(n) {
        return "function" == typeof n && yt.test(n);
    }
    function b(n) {
        var t, e;
        return !n || st.call(n) != U || (t = n.constructor, j(t) && !(t instanceof t)) || !St.argsClass && m(n) || !St.nodeClass && r(n) ? !1 : St.ownLast ? (Nt(n, function(n, t, r) {
            return e = _t.call(r, t), !1;
        }), !1 !== e) : (Nt(n, function(n, t) {
            e = t;
        }), "undefined" == typeof e || _t.call(n, e));
    }
    function m(n) {
        return n && "object" == typeof n && "number" == typeof n.length && st.call(n) == M || !1;
    }
    function w(n) {
        var t = [];
        return Nt(n, function(n, e) {
            j(n) && t.push(e);
        }), t.sort();
    }
    function j(n) {
        return "function" == typeof n;
    }
    function x(n) {
        return !(!n || !et[typeof n]);
    }
    function O(n) {
        return "string" == typeof n || n && "object" == typeof n && st.call(n) == Y || !1;
    }
    function E(n, t, e) {
        var r = -1, o = _(), u = n ? n.length : 0, i = !1;
        return e = (0 > e ? Et(0, u + e) : e) || 0, Pt(n) ? i = -1 < o(n, t, e) : "number" == typeof u ? i = -1 < (O(n) ? n.indexOf(t, e) : o(n, t, e)) : Bt(n, function(n) {
            return ++r < e ? void 0 : !(i = n === t);
        }), i;
    }
    function A(n, t, e) {
        if (t && "undefined" == typeof e && Pt(n)) {
            e = -1;
            for (var r = n.length; ++e < r && !1 !== t(n[e], e, n); ) ;
        } else Bt(n, t, e);
        return n;
    }
    function C(n, t, e) {
        var r = -1, o = n ? n.length : 0, u = Array("number" == typeof o ? o : 0);
        if (t = i.createCallback(t, e, 3), Pt(n)) for (;++r < o; ) u[r] = t(n[r], r, n); else Bt(n, function(n, e, o) {
            u[++r] = t(n, e, o);
        });
        return u;
    }
    function S(t, e, r) {
        if ("number" == typeof r) {
            var o = t ? t.length : 0;
            r = 0 > r ? Et(0, o + r) : r || 0;
        } else if (r) return r = P(t, e), t[r] === e ? r : -1;
        return n(t, e, r);
    }
    function P(n, t, e, r) {
        var o = 0, u = n ? n.length : o;
        for (e = e ? i.createCallback(e, r, 1) : F, t = e(t); u > o; ) r = o + u >>> 1,
        e(n[r]) < t ? o = r + 1 : u = r;
        return o;
    }
    function D(n, t) {
        return 2 < arguments.length ? g(n, 17, u(arguments, 2), null, t) : g(n, 1, null, null, t);
    }
    function F(n) {
        return n;
    }
    function I(n, t, e) {
        var r = !0, o = t && w(t);
        t && (e || o.length) || (null == e && (e = t), u = a, t = n, n = i, o = w(t)), !1 === e ? r = !1 : x(e) && "chain" in e && (r = e.chain);
        var u = n, c = j(u);
        A(o, function(e) {
            var o = n[e] = t[e];
            c && (u.prototype[e] = function() {
                var t = this.__chain__, e = this.__wrapped__, i = [ e ];
                if (dt.apply(i, arguments), i = o.apply(n, i), r || t) {
                    if (e === i && x(i)) return this;
                    i = new u(i), i.__chain__ = t;
                }
                return i;
            });
        });
    }
    function B() {}
    function L(n) {
        return function(t) {
            return t[n];
        };
    }
    function N() {
        return this.__wrapped__;
    }
    var R = [], z = {}, $ = 40, T = /\w*$/, K = /^\s*function[ \n\r\t]+\w/, G = /\bthis\b/, J = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), M = "[object Arguments]", q = "[object Array]", H = "[object Boolean]", V = "[object Date]", W = "[object Error]", Q = "[object Number]", U = "[object Object]", X = "[object RegExp]", Y = "[object String]", Z = {
        "[object Function]": !1
    };
    Z[M] = Z[q] = Z[H] = Z[V] = Z[Q] = Z[U] = Z[X] = Z[Y] = !0;
    var nt = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
    }, tt = {
        a: "",
        b: null,
        c: "",
        d: "",
        e: "",
        v: null,
        g: "",
        h: null,
        support: null,
        i: "",
        j: !1
    }, et = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, rt = et[typeof window] && window || this, ot = et[typeof exports] && exports && !exports.nodeType && exports, ut = et[typeof module] && module && !module.nodeType && module, it = ut && ut.exports === ot && ot, at = et[typeof global] && global;
    !at || at.global !== at && at.window !== at || (rt = at);
    var ct = [], ft = Error.prototype, lt = Object.prototype, pt = String.prototype, st = lt.toString, yt = RegExp("^" + (st + "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), ht = Math.ceil, gt = Function.prototype.toString, vt = d(vt = Object.getPrototypeOf) && vt, _t = lt.hasOwnProperty, dt = ct.push, bt = lt.propertyIsEnumerable, mt = ct.unshift, wt = function() {
        try {
            var n = {}, t = d(t = Object.defineProperty) && t, e = t(n, n, n) && t;
        } catch (r) {}
        return e;
    }(), jt = d(jt = Object.create) && jt, xt = d(xt = Array.isArray) && xt, Ot = d(Ot = Object.keys) && Ot, Et = Math.max, At = {};
    At[q] = Array, At[H] = Boolean, At[V] = Date, At["[object Function]"] = Function,
    At[U] = Object, At[Q] = Number, At[X] = RegExp, At[Y] = String;
    var Ct = {};
    Ct[q] = Ct[V] = Ct[Q] = {
        constructor: !0,
        toLocaleString: !0,
        toString: !0,
        valueOf: !0
    }, Ct[H] = Ct[Y] = {
        constructor: !0,
        toString: !0,
        valueOf: !0
    }, Ct[W] = Ct["[object Function]"] = Ct[X] = {
        constructor: !0,
        toString: !0
    }, Ct[U] = {
        constructor: !0
    }, function() {
        for (var n = J.length; n--; ) {
            var t, e = J[n];
            for (t in Ct) _t.call(Ct, t) && !_t.call(Ct[t], e) && (Ct[t][e] = !1);
        }
    }(), a.prototype = i.prototype;
    var St = i.support = {};
    !function() {
        function n() {
            this.x = 1;
        }
        var t = {
            0: 1,
            length: 1
        }, e = [];
        n.prototype = {
            valueOf: 1,
            y: 1
        };
        for (var r in new n()) e.push(r);
        for (r in arguments) ;
        St.argsClass = st.call(arguments) == M, St.argsObject = arguments.constructor == Object && !(arguments instanceof Array),
        St.enumErrorProps = bt.call(ft, "message") || bt.call(ft, "name"), St.enumPrototypes = bt.call(n, "prototype"),
        St.funcDecomp = !d(rt.k) && G.test(function() {
            return this;
        }), St.funcNames = "string" == typeof Function.name, St.nonEnumArgs = 0 != r, St.nonEnumShadows = !/valueOf/.test(e),
        St.ownLast = "x" != e[0], St.spliceObjects = (ct.splice.call(t, 0, 1), !t[0]), St.unindexedChars = "xx" != "x"[0] + Object("x")[0];
        try {
            St.nodeClass = !(st.call(document) == U && !({
                toString: 0
            } + ""));
        } catch (o) {
            St.nodeClass = !0;
        }
    }(1), jt || (l = function() {
        function n() {}
        return function(t) {
            if (x(t)) {
                n.prototype = t;
                var e = new n();
                n.prototype = null;
            }
            return e || rt.Object();
        };
    }());
    var kt = wt ? function(n, t) {
        nt.value = t, wt(n, "__bindData__", nt);
    } : B;
    St.argsClass || (m = function(n) {
        return n && "object" == typeof n && "number" == typeof n.length && _t.call(n, "callee") && !bt.call(n, "callee") || !1;
    });
    var Pt = xt || function(n) {
        return n && "object" == typeof n && "number" == typeof n.length && st.call(n) == q || !1;
    }, Dt = v({
        a: "z",
        e: "[]",
        i: "if(!(B[typeof z]))return E",
        g: "E.push(n)"
    }), Ft = Ot ? function(n) {
        return x(n) ? St.enumPrototypes && "function" == typeof n || St.nonEnumArgs && n.length && m(n) ? Dt(n) : Ot(n) : [];
    } : Dt, at = {
        a: "g,e,K",
        i: "e=e&&typeof K=='undefined'?e:d(e,K,3)",
        b: "typeof u=='number'",
        v: Ft,
        g: "if(e(t[n],n,g)===false)return E"
    }, xt = {
        a: "z,H,l",
        i: "var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",
        v: Ft,
        g: "if(typeof E[n]=='undefined')E[n]=t[n]",
        c: "}}"
    }, It = {
        i: "if(!B[typeof t])return E;" + at.i,
        b: !1
    }, Bt = v(at), Lt = v(xt, {
        i: xt.i.replace(";", ";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),
        g: "E[n]=e?e(E[n],t[n]):t[n]"
    }), Nt = v(at, It, {
        j: !1
    }), Rt = v(at, It);
    j(/x/) && (j = function(n) {
        return "function" == typeof n && "[object Function]" == st.call(n);
    });
    var zt = vt ? function(n) {
        if (!n || st.call(n) != U || !St.argsClass && m(n)) return !1;
        var t = n.valueOf, e = d(t) && (e = vt(t)) && vt(e);
        return e ? n == e || vt(n) == e : b(n);
    } : b;
    i.assign = Lt, i.bind = D, i.chain = function(n) {
        return n = new a(n), n.__chain__ = !0, n;
    }, i.createCallback = function(n, t, e) {
        var r = typeof n;
        if (null == n || "function" == r) return p(n, t, e);
        if ("object" != r) return L(n);
        var o = Ft(n), u = o[0], i = n[u];
        return 1 != o.length || i !== i || x(i) ? function(t) {
            for (var e = o.length, r = !1; e-- && (r = y(t[o[e]], n[o[e]], null, !0)); ) ;
            return r;
        } : function(n) {
            return n = n[u], i === n && (0 !== i || 1 / i == 1 / n);
        };
    }, i.forEach = A, i.forIn = Nt, i.forOwn = Rt, i.functions = w, i.invoke = function(n, t) {
        var e = u(arguments, 2), r = -1, o = "function" == typeof t, i = n ? n.length : 0, a = Array("number" == typeof i ? i : 0);
        return A(n, function(n) {
            a[++r] = (o ? t : n[t]).apply(n, e);
        }), a;
    }, i.keys = Ft, i.map = C, i.merge = function(n) {
        var t = arguments, r = 2;
        if (!x(n)) return n;
        if ("number" != typeof t[2] && (r = t.length), r > 3 && "function" == typeof t[r - 2]) var i = p(t[--r - 1], t[r--], 2); else r > 2 && "function" == typeof t[r - 1] && (i = t[--r]);
        for (var t = u(arguments, 1, r), a = -1, c = e(), f = e(); ++a < r; ) h(n, t[a], i, c, f);
        return o(c), o(f), n;
    }, i.min = function(n, e, r) {
        var o = 1 / 0, u = o;
        if ("function" != typeof e && r && r[e] === n && (e = null), null == e && Pt(n)) {
            r = -1;
            for (var a = n.length; ++r < a; ) {
                var c = n[r];
                u > c && (u = c);
            }
        } else e = null == e && O(n) ? t : i.createCallback(e, r, 3), Bt(n, function(n, t, r) {
            t = e(n, t, r), o > t && (o = t, u = n);
        });
        return u;
    }, i.pluck = C, i.property = L, i.range = function(n, t, e) {
        n = +n || 0, e = "number" == typeof e ? e : +e || 1, null == t && (t = n, n = 0);
        var r = -1;
        t = Et(0, ht((t - n) / (e || 1)));
        for (var o = Array(t); ++r < t; ) o[r] = n, n += e;
        return o;
    }, i.collect = C, i.each = A, i.extend = Lt, i.methods = w, I(i), i.cloneDeep = function(n, t, e) {
        return f(n, !0, "function" == typeof t && p(t, e, 1));
    }, i.contains = E, i.identity = F, i.indexOf = S, i.isArguments = m, i.isArray = Pt,
    i.isFunction = j, i.isObject = x, i.isPlainObject = zt, i.isString = O, i.mixin = I,
    i.noop = B, i.size = function(n) {
        var t = n ? n.length : 0;
        return "number" == typeof t ? t : Ft(n).length;
    }, i.sortedIndex = P, i.include = E, I(function() {
        var n = {};
        return Rt(i, function(t, e) {
            i.prototype[e] || (n[e] = t);
        }), n;
    }(), !1), Rt(i, function(n, t) {
        var e = "sample" !== t;
        i.prototype[t] || (i.prototype[t] = function(t, r) {
            var o = this.__chain__, u = n(this.__wrapped__, t, r);
            return o || null != t && (!r || e && "function" == typeof t) ? new a(u, o) : u;
        });
    }), i.VERSION = "2.4.1", i.prototype.chain = function() {
        return this.__chain__ = !0, this;
    }, i.prototype.toString = function() {
        return this.__wrapped__ + "";
    }, i.prototype.value = N, i.prototype.valueOf = N, Bt([ "join", "pop", "shift" ], function(n) {
        var t = ct[n];
        i.prototype[n] = function() {
            var n = this.__chain__, e = t.apply(this.__wrapped__, arguments);
            return n ? new a(e, n) : e;
        };
    }), Bt([ "push", "reverse", "sort", "unshift" ], function(n) {
        var t = ct[n];
        i.prototype[n] = function() {
            return t.apply(this.__wrapped__, arguments), this;
        };
    }), Bt([ "concat", "slice", "splice" ], function(n) {
        var t = ct[n];
        i.prototype[n] = function() {
            return new a(t.apply(this.__wrapped__, arguments), this.__chain__);
        };
    }), St.spliceObjects || Bt([ "pop", "shift", "splice" ], function(n) {
        var t = ct[n], e = "splice" == n;
        i.prototype[n] = function() {
            var n = this.__chain__, r = this.__wrapped__, o = t.apply(r, arguments);
            return 0 === r.length && delete r[0], n || e ? new a(o, n) : o;
        };
    }), "function" == typeof define && "object" == typeof define.amd && define.amd ? (rt._ = i,
    define(function() {
        return i;
    })) : ot && ut ? it ? (ut.exports = i)._ = i : ot._ = i : rt._ = i;
}.call(this), _.mixin({
    deepGet: function() {
        var obj = arguments[0], props = _.rest(arguments);
        return _.reduce(props, function(memo, prop) {
            return _.isObject(memo) && _.has(memo, prop) ? _.result(memo, prop) : void 0;
        }, obj);
    },
    isEmptyObject: function(obj) {
        for (var prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) return !1;
        return !0;
    },
    tiedSort: function(arrayPair, compareFunction) {
        for (var array1 = arrayPair[0], array2 = arrayPair[1], all = [], i = 0; i < array2.length; i++) all.push({
            A: array1[i],
            B: array2[i]
        });
        for (compareFunction || (compareFunction = function(a1, a2) {
            return a1 - a2;
        }), all.sort(function(a, b) {
            return compareFunction(a.A, b.A);
        }), array1 = [], array2 = [], i = 0; i < all.length; i++) array1.push(all[i].A),
        array2.push(all[i].B);
        return [ array1, array2 ];
    },
    replaceArrayContents: function(arr, replacer) {
        return arr.length = 0, Array.prototype.push.apply(arr, replacer), arr;
    },
    isLoggedIn: function() {
        return !!$.cookie("ssf_auth");
    },
    getPropertyNameHint: function(name) {
        var hints = {
            duration: "Seconds",
            progress: "Percentage"
        }, ret = _.deepGet(hints, name) || "";
        return ret;
    },
    getPropertyNameUnit: function(name) {
        var units = {
            duration: "s",
            progress: "%"
        }, ret = _.deepGet(units, name) || "";
        return ret;
    }
});

var chartDarkColor = "#f5f5f5", chartLineColor = "#7f818d", chartAxisColor = "#7f818d", chartTitleColor = "#444859", chartSubtitleColor = "#8b8d97";

Highcharts.theme = {
    chart: {
        zoomType: "xy",
        backgroundColor: chartDarkColor,
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 5,
        plotBackgroundColor: null,
        plotShadow: !1,
        plotBorderWidth: 0
    },
    credits: {
        enabled: !1
    },
    xAxis: {
        lineColor: chartLineColor,
        tickColor: chartLineColor,
        lineWidth: 1,
        labels: {
            style: {
                color: chartAxisColor
            },
            rotation: -45,
            align: "right"
        },
        id: "xaxis"
    },
    yAxis: {
        lineColor: chartLineColor,
        tickColor: chartLineColor,
        title: {
            text: ""
        },
        lineWidth: 1,
        gridLineWidth: 0,
        min: 0,
        id: "yaxis",
        labels: {
            style: {
                color: chartAxisColor
            }
        }
    },
    plotOptions: {
        series: {
            pointPadding: .05,
            groupPadding: .05,
            borderWidth: 0,
            shadow: !1
        }
    },
    loading: {
        hideDuration: 1e3,
        showDuration: 100,
        labelStyle: {
            color: chartTitleColor,
            top: "35%"
        },
        style: {
            backgroundColor: chartDarkColor
        }
    },
    title: {
        align: "center",
        style: {
            color: chartTitleColor,
            fontSize: "14px",
            fontfamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: "600"
        }
    },
    subtitle: {
        align: "center",
        style: {
            color: chartSubtitleColor,
            fontfamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        }
    },
    colors: [ "#ffbf40", "#395ea3", "#4f9566", "#9c1d1d", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a" ],
    plotline: {
        color: "#a6a6a6",
        dashStyle: "ShortDashDot",
        width: 3,
        label: {
            rotation: 270,
            verticalAlign: "bottom",
            textAlign: "left",
            y: -5,
            x: 12,
            style: {
                color: chartTitleColor
            }
        },
        zIndex: 99
    },
    goalLine: {
        color: "#a6a6a6",
        dashStyle: "shortdash",
        label: {
            style: {
                color: chartTitleColor
            }
        },
        width: 2,
        zIndex: 99
    }
}, Highcharts.setOptions(Highcharts.theme), VisualizationParams.prototype.setLegacyParam = function(_key, _value) {
    "use strict";
    this.mLegacyParams[_key] = _value;
}, VisualizationParams.prototype.getLegacyParam = function(_key) {
    "use strict";
    return this.mLegacyParams[_key] || void 0;
}, Visualization.prototype.destroy = function() {
    "use strict";
}, Visualization.prototype.create = function(visualizationType, div, xAxisType, params) {
    "use strict";
    if ("highchart" !== visualizationType) throw "Only Highcharts is currently supported!";
    return new HighchartsWrapper(div, xAxisType, params);
}, isos_vis.prototype.format = function(params) {}, isos_vis.prototype.showLoading = function() {},
isos_vis.prototype.hideLoading = function() {}, isos_vis.prototype.addSeries = function(series, renderType) {},
isos_vis.prototype.clear = function() {}, isos_vis.prototype.addAnnotations = function(annotations, onClick) {},
isos_vis.prototype.removeAnnotations = function() {}, isos_vis.prototype.setHeight = function(height) {},
isos_vis.prototype.setTitle = function(title, subtitle) {}, isos_vis.prototype.addGoals = function(data) {},
isos_vis.prototype.removeGoals = function(data) {}, isos_vis.prototype.changeBaseAggregateType = function(type, params) {},
HighchartsWrapper.prototype = new isos_vis(), HighchartsWrapper.prototype.constructor = HighchartsWrapper,
HighchartsWrapper.prototype.changeBaseAggregateType = function(type, params) {
    var options = this.buildOptions(this.mChart.userOptions.chart.div, type, params);
    this.mChart.get("xaxis").update(options.xAxis, !0);
}, HighchartsWrapper.prototype.format = function(params) {
    var redraw = !1;
    if (params.mRenderType || null !== params.mLegendVisible) {
        var update = {};
        params.mRenderType && (update.type = params.mRenderType), null !== params.mLegendVisible && (update.showInLegend = params.mLegendVisible);
        for (var i = 0; i < this.mChart.series.length; i++) this.mChart.series[i].update(update, !1);
        "pie" === params.mRenderType ? (this.mChart.get("yaxis").update({
            lineWidth: 0
        }), this.mChart.get("xaxis").update({
            lineWidth: 0
        })) : (this.mChart.get("yaxis").update({
            lineWidth: Highcharts.theme.yAxis.lineWidth
        }), this.mChart.get("xaxis").update({
            lineWidth: Highcharts.theme.xAxis.lineWidth
        })), this.mChart.userOptions.legend.userVisibility = params.mLegendVisible, redraw = !0;
    }
    params.mYAxisType && (this.mChart.get("yaxis").update({
        type: params.mYAxisType,
        min: this.computeYAxisMin(params.mYAxisType)
    }), redraw = !0), params.mYAxisFormat && (this.mChart.get("yaxis").update({
        userFormat: params.mYAxisFormat
    }), redraw = !0), params.mXAxisFormat && (this.mChart.get("xaxis").update({
        userFormat: params.mXAxisFormat
    }), redraw = !0), params.mCaptionFormat ? (this.mChart.userOptions.tooltip.userFormat = params.mCaptionFormat,
    redraw = !1) : params.mXAxisFormat && (this.mChart.userOptions.tooltip.userFormat = params.mXAxisFormat,
    redraw = !1), params.mLegendFormat && (this.mChart.userOptions.legend.userFormat = params.mLegendFormat,
    redraw = !1), redraw && this.mChart.redraw();
}, HighchartsWrapper.prototype.buildOptions = function(div, xAxisType, params) {
    var height = params.mHeight, enablezoom = params.getLegacyParam("enablezoom"), linecolor = params.getLegacyParam("linecolor"), linewidth = params.getLegacyParam("linewidth"), markerson = params.getLegacyParam("markerson"), xaxison = params.getLegacyParam("xaxison"), yaxison = params.getLegacyParam("yaxison"), formatParams = params.mFormatParams, options = {};
    return options.chart = {}, options.chart.renderTo = div, options.chart.height = height,
    options.chart.events = {}, options.chart.ignoreHiddenSeries = "datetime" === xAxisType,
    params.mHideBorder && (options.chart.borderWidth = 0), enablezoom && "false" === enablezoom && (options.chart.zoomType = ""),
    options.chart.type = formatParams.mRenderType, options.xAxis = {}, options.xAxis.userFormat = formatParams.mXAxisFormat,
    options.xAxis.id = "xaxis", options.xAxis.labels = {}, options.xAxis.labels.formatter = this.xAxisFormatter,
    options.xAxis.type = xAxisType, options.xAxis.minRange = "datetime" === xAxisType && 864e5 || void 0,
    options.xAxis.minTickInterval = "datetime" === xAxisType && 864e5 || void 0, options.yAxis = {},
    options.yAxis.userFormat = formatParams.mYAxisFormat, options.yAxis.type = formatParams.mYAxisType || "linear",
    options.yAxis.min = this.computeYAxisMin(options.yAxis.type), options.yAxis.id = "yaxis",
    options.yAxis.labels = {}, options.yAxis.labels.formatter = this.yAxisFormatter,
    options.title = {}, options.title.text = params.mTitle || void 0, options.subtitle = {},
    options.subtitle.text = params.mSubTitle || void 0, options.legend = {}, options.legend.enabled = !0,
    options.legend.labelFormatter = this.legendFormatter, options.legend.userFormat = params.mFormatParams.mLegendFormat,
    params.mLegendPosition && ("left" === params.mLegendPosition || "right" === params.mLegendPosition ? (options.legend.verticalAlign = "middle",
    options.legend.layout = "vertical", options.legend.align = params.mLegendPosition) : "vertical" === params.mLegendPosition && (options.legend.layout = "vertical")),
    options.legend.userVisibility = formatParams.mLegendVisible, options.tooltip = {},
    options.tooltip.userFormat = formatParams.mCaptionFormat || formatParams.mXAxisFormat,
    options.tooltip.formatter = this.tooltipFormatter, options.plotOptions = {}, options.plotOptions.column = {},
    options.plotOptions.line = {}, options.plotOptions.spline = {}, options.plotOptions.spline.marker = {},
    options.plotOptions.spline.marker.enabled = !1, options.plotOptions.series = {},
    options.plotOptions.series.color = linecolor, linewidth && (options.plotOptions.series.lineWidth = parseInt(linewidth)),
    options.plotOptions.series.marker = {}, options.plotOptions.series.marker.symbol = params.mMarkerSymbol || void 0,
    markerson && ("false" === markerson ? options.plotOptions.series.marker.enabled = !1 : "true" === markerson && (options.plotOptions.series.marker.enabled = !0)),
    void 0 !== xaxison && ("false" === xaxison && (options.xAxis.lineWidth = 0, options.xAxis.minorGridLineWidth = 0,
    options.xAxis.lineColor = "transparent", options.xAxis.minorTickLength = 0, options.xAxis.tickLength = 0),
    ("false" === xaxison || "nolabels" === xaxison) && (options.xAxis.labels.enabled = !1)),
    void 0 !== yaxison && ("false" === yaxison && (options.yAxis.lineWidth = 0, options.yAxis.minorGridLineWidth = 0,
    options.yAxis.lineColor = "transparent", options.yAxis.minorTickLength = 0, options.yAxis.tickLength = 0),
    ("false" === yaxison || "nolabels" === yaxison) && (options.yAxis.labels.enabled = !1)),
    options.wrapper = this, options;
}, HighchartsWrapper.prototype.addSeries = function(seriesObj, seriesType) {
    var i = 0, labels = seriesObj.labels, data = seriesObj.series, error = seriesObj.error, xaxis = this.mChart.get("xaxis"), yaxis = this.mChart.get("yaxis");
    xaxis.update({
        userLabels: seriesObj.labels,
        userCaptions: seriesObj.captions
    }, !1);
    var xaxistype = xaxis.userOptions.type, yaxistype = yaxis.userOptions.type, seriesToAdd = [];
    if ("boxplot" == this.mChart.userOptions.chart.type) {
        var boxplotData = [];
        for (i = 0; i < labels.length; i++) boxplotData[i] = [], boxplotData[i].push(data.group_min[i]),
        boxplotData[i].push(data.group_q1[i]), boxplotData[i].push(data.group_median[i]),
        boxplotData[i].push(data.group_q3[i]), boxplotData[i].push(data.group_max[i]);
        this.mChart.get("xaxis").setCategories(labels, !1), seriesToAdd.push({
            data: boxplotData
        });
    } else {
        for (var series in data) {
            var theSeries = [];
            for (i = 0; i < data[series].length; i++) {
                var x = labels[i], y = data[series][i];
                "datetime" === xaxistype && (x *= 1e3), "pct" == yaxis.userOptions.userFormat && null !== y && (y *= 100),
                "logarithmic" === yaxistype && 0 === y && null !== y && (y = 1e-5);
                var name = null;
                if ("datetime" === xaxistype ? name = x : (name = labels[i], name = "" === name || null === name ? " " : name.toString()),
                true) {
                    var pointObj = {
                        name: name,
                        y: y
                    };
                    "category" !== xaxistype && (pointObj.x = x), theSeries.push(pointObj);
                }
            }
            seriesToAdd.push({
                name: series,
                type: seriesType,
                data: theSeries
            });
        }
        "category" === xaxistype && this.mChart.get("xaxis").setCategories(labels, !1);
    }
    for (var s = 0; s < seriesToAdd.length; s++) this.mChart.addSeries(seriesToAdd[s], !1);
    for (var sil = 1 == this.mChart.series.length ? !1 : this.mChart.userOptions.legend.userVisibility, es = 0; es < this.mChart.series.length; es++) this.mChart.series[es].update({
        showInLegend: sil
    }, !1);
    this.mChart.get("yaxis").update({
        min: this.computeYAxisMin(yaxistype)
    }), this.handleError(error), this.mChart.redraw();
}, HighchartsWrapper.prototype.handleError = function(error) {
    switch (error) {
      case 0:
        break;

      case -5:
        this.mChart.setTitle(null, {
            text: "There is no data for this graph yet.",
            style: {
                color: "#FF0000"
            }
        });
        break;

      default:
        this.mChart.setTitle(null, {
            text: "An error occurred loading " + this.mChart.userOptions.title.text + ". Please refresh.",
            style: {
                color: "#FF0000"
            }
        });
    }
}, HighchartsWrapper.prototype.setTitle = function(title, subtitle) {
    this.mChart.setTitle(title, subtitle);
}, HighchartsWrapper.prototype.setHeight = function(height) {
    this.mChart.setSize(this.mChart.chartWidth, height);
}, HighchartsWrapper.prototype.clear = function() {
    for (;this.mChart.series.length > 0; ) this.mChart.series[0].remove(!1);
    this.mChart.colorCounter = 0, this.mChart.symbolCounter = 0, this.mChart.redraw();
}, HighchartsWrapper.prototype.showLoading = function() {
    this.mChart && this.mChart.showLoading();
}, HighchartsWrapper.prototype.hideLoading = function() {
    this.mChart && this.mChart.hideLoading();
}, HighchartsWrapper.prototype.removeAnnotations = function() {
    var xaxis = this.mChart.get("xaxis"), numBands = xaxis.plotLinesAndBands.length, idListToRemove = [], i = 0;
    for (i = 0; numBands > i; i++) idListToRemove[i] = xaxis.plotLinesAndBands[i].id;
    for (i = 0; numBands > i; i++) xaxis.removePlotBand(idListToRemove[i]);
}, HighchartsWrapper.prototype.addAnnotations = function(annotations, onClick) {
    var xaxis = this.mChart.get("xaxis"), annotation_list = {};
    _.each(annotations, function(curAnnotationData) {
        var ts = 1e3 * dayifyTimestamp(parseInt(curAnnotationData.epoch));
        if (annotation_list[ts]) annotation_list[ts].count++, annotation_list[ts].plotline.label.text = "<i>" + annotation_list[ts].count + " events</i>"; else {
            var plotline = {
                id: ts,
                value: ts,
                events: {
                    click: function(e) {
                        onClick(curAnnotationData);
                    },
                    mouseover: function(e) {
                        document.body.style.cursor = "pointer";
                    },
                    mouseout: function(e) {
                        document.body.style.cursor = "default";
                    }
                },
                label: {
                    text: curAnnotationData.label
                }
            };
            annotation_list[ts] = {
                count: 1,
                plotline: Highcharts.merge(plotline, Highcharts.theme.plotline)
            };
        }
    }), _.each(annotation_list, function(annotation) {
        xaxis.addPlotLine(annotation.plotline);
    });
}, HighchartsWrapper.prototype.addGoals = function(data) {
    var yaxis = this.mChart.get("yaxis");
    _.each(data, function(goal) {
        yaxis.removePlotLine(goal.id), yaxis.addPlotLine(Highcharts.merge({
            id: goal.id,
            label: {
                text: ""
            },
            value: plotline.value
        }, Highcharts.theme.goalLine));
    });
}, HighchartsWrapper.prototype.removeGoals = function(data) {
    var yaxis = this.mChart.get("yaxis");
    _.each(data, function(goal) {
        yaxis.removePlotLine(goal.id);
    });
}, Series.prototype.getFirstSeries = function() {
    for (var i in this.series) return this.series[i];
}, Series.prototype.getElementsWithIndices = function(arr, indices) {
    return _.map(indices, function(i) {
        return arr[i];
    });
}, Series.prototype.getValuesColumn = function() {
    var transposeCol = this.series[this.transpose], valueCol = null;
    for (var s in this.series) if (s != this.transpose) {
        var series = this.series[s];
        if (_.isArray(series) && series.length == transposeCol.length) {
            if (null !== valueCol) throw new Error("Could not determine value column for transpose; multiple columns exist.");
            valueCol = series;
        }
    }
    if (null === valueCol) throw new Error("Could not find a value column for transpose.");
    return valueCol;
}, Series.prototype.getUnique = function(arr) {
    for (var unique = [], i = 0; i < arr.length; i++) _.contains(unique, arr[i]) || unique.push(arr[i]);
    return unique;
}, Series.prototype.getUniqueFirstIndices = function(arr) {
    for (var unique = [], uniqueIndices = [], i = 0; i < arr.length; i++) _.contains(unique, arr[i]) || (uniqueIndices.push(i),
    unique.push(arr[i]));
    return uniqueIndices;
}, Series.prototype.applyTransforms = function() {
    if (this.transpose && this.series.hasOwnProperty(this.transpose)) {
        var valuesColumn = this.getValuesColumn(), uniqueLabelIndices = this.getUniqueFirstIndices(this.labels);
        this.getUnique(this.series[this.transpose]);
        for (var newLabels = this.getElementsWithIndices(this.labels, uniqueLabelIndices), newCaptions = this.getElementsWithIndices(this.captions, uniqueLabelIndices), newSeries = {}, i = 0; i < this.series[this.transpose].length; i++) {
            var label = this.labels[i], xformColName = this.series[this.transpose][i], xformColVal = valuesColumn[i], xformRowIndex = newLabels.indexOf(label);
            if (!newSeries.hasOwnProperty(xformColName)) {
                newSeries[xformColName] = [];
                for (var j = 0; j < newLabels.length; j++) newSeries[xformColName][j] = 0;
            }
            newSeries[xformColName][xformRowIndex] += xformColVal;
        }
        this.labels = newLabels, this.captions = newCaptions, this.series = newSeries, this.transpose = void 0;
    }
}, Series.prototype.tiedSort = function(sortArray, sortType) {
    var comparator = null;
    if ("naturalSort" == sortType && _.isArray(sortArray) && sortArray.length == this.labels.length) {
        comparator = strnatcmp;
        var sortedLabels = _.tiedSort([ sortArray, this.labels ], comparator)[1], sortedCaptions = _.tiedSort([ sortArray, this.captions ], comparator)[1];
        _.replaceArrayContents(this.labels, sortedLabels), _.replaceArrayContents(this.captions, sortedCaptions);
        for (var s in this.series) {
            var sortedSeries = _.tiedSort([ sortArray, this.series[s] ], comparator)[1];
            _.replaceArrayContents(this.series[s], sortedSeries);
        }
        return this;
    }
}, function() {
    "use strict";
    function capitalize(string) {
        return string = String(string), string.charAt(0).toUpperCase() + string.slice(1);
    }
    function each(object, callback) {
        var index = -1, length = object.length;
        if (length == length >>> 0) for (;++index < length; ) callback(object[index], index, object); else forOwn(object, callback);
    }
    function format(string) {
        return string = trim(string), /^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string);
    }
    function forOwn(object, callback) {
        for (var key in object) hasKey(object, key) && callback(object[key], key, object);
    }
    function getClassOf(value) {
        return null == value ? capitalize(value) : toString.call(value).slice(8, -1);
    }
    function hasKey() {
        return hasKey = function(object, key) {
            var parent = null != object && (object.constructor || Object).prototype;
            return !!parent && key in Object(object) && !(key in parent && object[key] === parent[key]);
        }, "Function" == getClassOf(hasOwnProperty) ? hasKey = function(object, key) {
            return null != object && hasOwnProperty.call(object, key);
        } : {}.__proto__ == Object.prototype && (hasKey = function(object, key) {
            var result = !1;
            return null != object && (object = Object(object), object.__proto__ = [ object.__proto__, object.__proto__ = null, result = key in object ][0]),
            result;
        }), hasKey.apply(this, arguments);
    }
    function isHostType(object, property) {
        var type = null != object ? typeof object[property] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(type) && ("object" == type ? !!object[property] : !0);
    }
    function qualify(string) {
        return String(string).replace(/([ -])(?!$)/g, "$1?");
    }
    function reduce(array, callback) {
        var accumulator = null;
        return each(array, function(value, index) {
            accumulator = callback(accumulator, value, index, array);
        }), accumulator;
    }
    function trim(string) {
        return String(string).replace(/^ +| +$/g, "");
    }
    function parse(ua) {
        function getLayout(guesses) {
            return reduce(guesses, function(result, guess) {
                return result || RegExp("\\b" + (guess.pattern || qualify(guess)) + "\\b", "i").exec(ua) && (guess.label || guess);
            });
        }
        function getManufacturer(guesses) {
            return reduce(guesses, function(result, value, key) {
                return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp("\\b" + qualify(key) + "(?:\\b|\\w*\\d)", "i").exec(ua)) && key;
            });
        }
        function getName(guesses) {
            return reduce(guesses, function(result, guess) {
                return result || RegExp("\\b" + (guess.pattern || qualify(guess)) + "\\b", "i").exec(ua) && (guess.label || guess);
            });
        }
        function getOS(guesses) {
            return reduce(guesses, function(result, guess) {
                var pattern = guess.pattern || qualify(guess);
                return !result && (result = RegExp("\\b" + pattern + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(ua)) && (data = {
                    "6.3": "8.1",
                    "6.2": "8",
                    "6.1": "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    "5.2": "Server 2003 / XP 64-bit",
                    "5.1": "XP",
                    "5.01": "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME"
                }, /^Win/i.test(result) && (data = data[/[\d.]+$/.exec(result)]) && (result = "Windows " + data),
                result = format(String(result).replace(RegExp(pattern, "i"), guess.label || guess).replace(/ ce$/i, " CE").replace(/hpw/i, "web").replace(/Macintosh/, "Mac OS").replace(/_PowerPC/i, " OS").replace(/(OS X) [^ \d]+/i, "$1").replace(/Mac (OS X)/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/x86\.64/gi, "x86_64").split(" on ")[0])),
                result;
            });
        }
        function getProduct(guesses) {
            return reduce(guesses, function(result, guess) {
                var pattern = guess.pattern || qualify(guess);
                return !result && (result = RegExp("\\b" + pattern + " *\\d+[.\\w_]*", "i").exec(ua) || RegExp("\\b" + pattern + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(ua)) && ((result = String(guess.label && !RegExp(pattern, "i").test(guess.label) ? guess.label : result).split("/"))[1] && !/[\d.]+/.test(result[0]) && (result[0] += " " + result[1]),
                guess = guess.label || guess, result = format(result[0].replace(RegExp(pattern, "i"), guess).replace(RegExp("; *(?:" + guess + "[_-])?", "i"), " ").replace(RegExp("(" + guess + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                result;
            });
        }
        function getVersion(patterns) {
            return reduce(patterns, function(result, pattern) {
                return result || (RegExp(pattern + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(ua) || 0)[1] || null;
            });
        }
        function toStringPlatform() {
            return this.description || "";
        }
        ua || (ua = userAgent);
        var data, arch = ua, description = [], prerelease = null, useFeatures = ua == userAgent, version = useFeatures && opera && "function" == typeof opera.version && opera.version(), layout = getLayout([ {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "Trident", "KHTML", "Gecko" ]), name = getName([ "Adobe AIR", "Arora", "Avant Browser", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", {
            label: "SRWare Iron",
            pattern: "Iron"
        }, "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
            label: "Silk",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", "Opera", {
            label: "Opera",
            pattern: "OPR"
        }, "Chrome", {
            label: "Chrome Mobile",
            pattern: "(?:CriOS|CrMo)"
        }, {
            label: "Firefox",
            pattern: "(?:Firefox|Minefield)"
        }, {
            label: "IE",
            pattern: "MSIE"
        }, "Safari" ]), product = getProduct([ {
            label: "BlackBerry",
            pattern: "BB10"
        }, "BlackBerry", {
            label: "Galaxy S",
            pattern: "GT-I9000"
        }, {
            label: "Galaxy S2",
            pattern: "GT-I9100"
        }, {
            label: "Galaxy S3",
            pattern: "GT-I9300"
        }, {
            label: "Galaxy S4",
            pattern: "GT-I9500"
        }, "Google TV", "iPad", "iPod", "iPhone", "Kindle", {
            label: "Kindle Fire",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nook", "PlayBook", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "TouchPad", "Transformer", {
            label: "Wii U",
            pattern: "WiiU"
        }, "Wii", "Xbox One", {
            label: "Xbox 360",
            pattern: "Xbox"
        }, "Xoom" ]), manufacturer = getManufacturer({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {},
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                "PlayStation 4": 1,
                "PlayStation 3": 1,
                "PlayStation Vita": 1
            }
        }), os = getOS([ "Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows " ]);
        if (layout && (layout = [ layout ]), manufacturer && !product && (product = getProduct([ manufacturer ])),
        (data = /Google TV/.exec(product)) && (product = data[0]), /\bSimulator\b/i.test(ua) && (product = (product ? product + " " : "") + "Simulator"),
        /^iP/.test(product) ? (name || (name = "Safari"), os = "iOS" + ((data = / OS ([\d_]+)/i.exec(ua)) ? " " + data[1].replace(/_/g, ".") : "")) : "Konqueror" != name || /buntu/i.test(os) ? manufacturer && "Google" != manufacturer && (/Chrome/.test(name) && !/Mobile Safari/.test(ua) || /Vita/.test(product)) ? (name = "Android Browser",
        os = /Android/.test(os) ? os : "Android") : (!name || (data = !/\bMinefield\b|\(Android;/i.test(ua) && /Firefox|Safari/.exec(name))) && (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + "/") + 8)) && (name = null),
        (data = product || manufacturer || os) && (product || manufacturer || /Android|Symbian OS|Tablet OS|webOS/.test(os)) && (name = /[a-z]+(?: Hat)?/i.exec(/Android/.test(os) ? os : data) + " Browser")) : os = "Kubuntu",
        (data = /\((Mobile|Tablet).*?Firefox/i.exec(ua)) && data[1] && (os = "Firefox OS",
        product || (product = data[1])), version || (version = getVersion([ "(?:Cloud9|CriOS|CrMo|Iron|Opera ?Mini|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", qualify(name), "(?:Firefox|Minefield|NetFront)" ])),
        "iCab" == layout && parseFloat(version) > 3 ? layout = [ "WebKit" ] : (data = /Opera/.test(name) && (/OPR/.test(ua) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && "WebKit" || !layout && /\bMSIE\b/i.test(ua) && ("Mac OS" == os ? "Tasman" : "Trident")) ? layout = [ data ] : /PlayStation(?! Vita)/i.test(name) && "WebKit" == layout && (layout = [ "NetFront" ]),
        name || "Trident" != layout || (name = "IE", version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]),
        useFeatures) {
            if (isHostType(root, "global")) if (java && (data = java.lang.System, arch = data.getProperty("os.arch"),
            os = os || data.getProperty("os.name") + " " + data.getProperty("os.version")),
            freeExports) if (thisBinding == oldRoot && "object" == typeof system && (data = [ system ])[0]) {
                os || (os = data[0].os || null);
                try {
                    data[1] = (data[1] = require) && data[1]("ringo/engine").version, version = data[1].join("."),
                    name = "RingoJS";
                } catch (e) {
                    data[0].global == freeGlobal && (name = "Narwhal");
                }
            } else "object" == typeof process && (data = process) ? (name = "Node.js", arch = data.arch,
            os = data.platform, version = /[\d.]+/.exec(data.version)[0]) : rhino && (name = "Rhino"); else rhino && (name = "Rhino"); else "ScriptBridgingProxyObject" == getClassOf(data = root.runtime) ? (name = "Adobe AIR",
            os = data.flash.system.Capabilities.os) : "RuntimeObject" == getClassOf(data = root.phantom) ? (name = "PhantomJS",
            version = (data = data.version || null) && data.major + "." + data.minor + "." + data.patch) : "number" == typeof doc.documentMode && (data = /\bTrident\/(\d+)/i.exec(ua)) && (version = [ version, doc.documentMode ],
            (data = +data[1] + 4) != version[1] && (description.push("IE " + version[1] + " mode"),
            layout && (layout[1] = ""), version[1] = data), version = "IE" == name ? String(version[1].toFixed(1)) : version[0]);
            os = os && format(os);
        }
        return version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ";" + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && "a") && (prerelease = /b/i.test(data) ? "beta" : "alpha",
        version = version.replace(RegExp(data + "\\+?$"), "") + ("beta" == prerelease ? beta : alpha) + (/\d+\+?/.exec(data) || "")),
        "Fennec" == name || "Firefox" == name && /Android|Firefox OS/.test(os) ? name = "Firefox Mobile" : "Maxthon" == name && version ? version = version.replace(/\.[\d.]+/, ".x") : "Silk" == name ? (/Mobi/i.test(ua) || (os = "Android",
        description.unshift("desktop mode")), /Accelerated *= *true/i.test(ua) && description.unshift("accelerated")) : "IE" == name && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1]) ? (name += " Mobile",
        os = "Windows Phone OS " + data + ".x", description.unshift("desktop mode")) : /Xbox/i.test(product) ? (os = null,
        "Xbox 360" == product && /IEMobile/.test(ua) && description.unshift("mobile mode")) : "Chrome" != name && "IE" != name && (!name || product || /Browser|Mobi/.test(name)) || "Windows CE" != os && !/Mobi/i.test(ua) ? "IE" == name && useFeatures && "object" == typeof external && !external ? description.unshift("platform preview") : (/BlackBerry/.test(product) || /BB10/.test(ua)) && (data = (RegExp(product.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(ua) || 0)[1] || version) ? (data = [ data, /BB10/.test(ua) ],
        os = (data[1] ? (product = null, manufacturer = "BlackBerry") : "Device Software") + " " + data[0],
        version = null) : this != forOwn && "Wii" != product && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || "Firefox" == name && /OS X (?:\d+\.){2,}/.test(os) || "IE" == name && (os && !/^Win/.test(os) && version > 5.5 || /Windows XP/.test(os) && version > 8 || 8 == version && !/Trident/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, "") + ";")) && data.name && (data = "ing as " + data.name + ((data = data.version) ? " " + data : ""),
        reOpera.test(name) ? (/IE/.test(data) && "Mac OS" == os && (os = null), data = "identify" + data) : (data = "mask" + data,
        name = operaClass ? format(operaClass.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
        /IE/.test(data) && (os = null), useFeatures || (version = null)), layout = [ "Presto" ],
        description.push(data)) : name += " Mobile", (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) && (data = [ parseFloat(data.replace(/\.(\d)$/, ".0$1")), data ],
        "Safari" == name && "+" == data[1].slice(-1) ? (name = "WebKit Nightly", prerelease = "alpha",
        version = data[1].slice(0, -1)) : (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) && (version = null),
        data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1], 537.36 == data[0] && 537.36 == data[2] && parseFloat(data[1]) >= 28 && (layout = [ "Blink" ]),
        !useFeatures || /internal|\n/i.test(toString.toString()) && !data[1] ? (layout && (layout[1] = "like Safari"),
        data = data[0], data = 400 > data ? 1 : 500 > data ? 2 : 526 > data ? 3 : 533 > data ? 4 : 534 > data ? "4+" : 535 > data ? 5 : 537 > data ? 6 : 538 > data ? 7 : "7") : (layout && (layout[1] = "like Chrome"),
        data = data[1] || (data = data[0], 530 > data ? 1 : 532 > data ? 2 : 532.05 > data ? 3 : 533 > data ? 4 : 534.03 > data ? 5 : 534.07 > data ? 6 : 534.1 > data ? 7 : 534.13 > data ? 8 : 534.16 > data ? 9 : 534.24 > data ? 10 : 534.3 > data ? 11 : 535.01 > data ? 12 : 535.02 > data ? "13+" : 535.07 > data ? 15 : 535.11 > data ? 16 : 535.19 > data ? 17 : 536.05 > data ? 18 : 536.1 > data ? 19 : 537.01 > data ? 20 : 537.11 > data ? "21+" : 537.13 > data ? 23 : 537.18 > data ? 24 : 537.24 > data ? 25 : 537.36 > data ? 26 : "Blink" != layout ? "27" : "28")),
        layout && (layout[1] += " " + (data += "number" == typeof data ? ".x" : /[.+]/.test(data) ? "" : "+")),
        "Safari" == name && (!version || parseInt(version) > 45) && (version = data)), "Opera" == name && (data = /(?:zbov|zvav)$/.exec(os)) ? (name += " ",
        description.unshift("desktop mode"), "zvav" == data ? (name += "Mini", version = null) : name += "Mobile") : "Safari" == name && /Chrome/.exec(layout && layout[1]) && (description.unshift("desktop mode"),
        name = "Chrome Mobile", version = null, /OS X/.test(os) ? (manufacturer = "Apple",
        os = "iOS 4.3+") : os = null), version && 0 == version.indexOf(data = /[\d.]+$/.exec(os)) && ua.indexOf("/" + data + "-") > -1 && (os = trim(os.replace(data, ""))),
        layout && !/Avant|Nook/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || /^(?:Adobe|Arora|Midori|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1]) && (data = layout[layout.length - 1]) && description.push(data),
        description.length && (description = [ "(" + description.join("; ") + ")" ]), manufacturer && product && product.indexOf(manufacturer) < 0 && description.push("on " + manufacturer),
        product && description.push((/^on /.test(description[description.length - 1]) ? "" : "on ") + product),
        os && (data = / ([\d.+]+)$/.exec(os), os = {
            architecture: 32,
            family: data ? os.replace(data[0], "") : os,
            version: data ? data[1] : null,
            toString: function() {
                var version = this.version;
                return this.family + (version ? " " + version : "") + (64 == this.architecture ? " 64-bit" : "");
            }
        }), (data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch) && (os && (os.architecture = 64,
        os.family = os.family.replace(RegExp(" *" + data), "")), name && (/WOW64/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform)) && description.unshift("32-bit")),
        ua || (ua = null), {
            version: name && version && (description.unshift(version), version),
            name: name && (description.unshift(name), name),
            os: os ? (name && !(os == String(os).split(" ")[0] && (os == name.split(" ")[0] || product)) && description.push(product ? "(" + os + ")" : "on " + os),
            os) : {
                architecture: null,
                family: null,
                version: null,
                toString: function() {
                    return "null";
                }
            },
            description: description.length ? description.join(" ") : ua,
            layout: layout && layout[0],
            manufacturer: manufacturer,
            prerelease: prerelease,
            product: product,
            ua: ua,
            parse: parse,
            toString: toStringPlatform
        };
    }
    var objectTypes = {
        "function": !0,
        object: !0
    }, root = objectTypes[typeof window] && window || this, oldRoot = root, freeExports = objectTypes[typeof exports] && exports, freeModule = objectTypes[typeof module] && module && !module.nodeType && module, freeGlobal = freeExports && freeModule && "object" == typeof global && global;
    !freeGlobal || freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal && freeGlobal.self !== freeGlobal || (root = freeGlobal);
    var reOpera = /Opera/, toString = Object.prototype.toString, java = /Java/.test(getClassOf(root.java)) && root.java, rhino = java && "Environment" == getClassOf(root.environment), alpha = java ? "a" : "α", beta = java ? "b" : "β", doc = root.document || {}, hasOwnProperty = {}.hasOwnProperty, nav = root.navigator || {}, opera = root.operamini || root.opera, operaClass = reOpera.test(operaClass = getClassOf(opera)) ? operaClass : opera = null, thisBinding = this, userAgent = nav.userAgent || "";
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return parse();
    }) : freeExports && freeModule ? forOwn(parse(), function(value, key) {
        freeExports[key] = value;
    }) : root.platform = parse();
}.call(this);

var SplytUtil = function() {
    function type(obj) {
        return null == obj ? String(obj) : class2type[toString.call(obj)] || "object";
    }
    function isWindow(obj) {
        return null != obj && obj == obj.window;
    }
    function isObject(obj) {
        return "object" == type(obj);
    }
    function isPlainObject(obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }
    var $ = {}, ArrayProto = Array.prototype, slice = ArrayProto.slice, nativeForEach = ArrayProto.forEach;
    window.JSON && ($.parseJSON = JSON.parse);
    var each = $.each = $.forEach = function(obj, iterator, context) {
        if (null == obj) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context); else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; length > i; i++) if (iterator.call(context, obj[i], i, obj) === breaker) return;
        } else for (var keys = _.keys(obj), i = 0, length = keys.length; length > i; i++) if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
        return obj;
    };
    $.extend = function(obj) {
        return each(slice.call(arguments, 1), function(source) {
            if (source) for (var prop in source) obj[prop] = source[prop];
        }), obj;
    };
    var class2type = {}, toString = class2type.toString, isArray = Array.isArray || function(object) {
        return object instanceof Array;
    };
    return $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(name, i) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    }), $.type = type, $.isWindow = isWindow, $.isArray = isArray, $.isPlainObject = isPlainObject,
    $;
}();

!function($) {
    function triggerAndReturn(context, eventName, data) {}
    function triggerGlobal(settings, context, eventName, data) {
        return settings.global ? triggerAndReturn(context || document, eventName, data) : void 0;
    }
    function ajaxStart(settings) {
        settings.global && 0 === $.active++ && triggerGlobal(settings, null, "ajaxStart");
    }
    function ajaxStop(settings) {
        settings.global && !--$.active && triggerGlobal(settings, null, "ajaxStop");
    }
    function ajaxBeforeSend(xhr, settings) {
        var context = settings.context;
        return settings.beforeSend.call(context, xhr, settings) === !1 || triggerGlobal(settings, context, "ajaxBeforeSend", [ xhr, settings ]) === !1 ? !1 : void triggerGlobal(settings, context, "ajaxSend", [ xhr, settings ]);
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
        var context = settings.context, status = "success";
        settings.success.call(context, data, status, xhr), deferred && deferred.resolveWith(context, [ data, status, xhr ]),
        triggerGlobal(settings, context, "ajaxSuccess", [ xhr, settings, data ]), ajaxComplete(status, xhr, settings);
    }
    function ajaxError(error, type, xhr, settings, deferred) {
        var context = settings.context;
        settings.error.call(context, xhr, type, error), deferred && deferred.rejectWith(context, [ xhr, type, error ]),
        triggerGlobal(settings, context, "ajaxError", [ xhr, settings, error || type ]),
        ajaxComplete(type, xhr, settings);
    }
    function ajaxComplete(status, xhr, settings) {
        var context = settings.context;
        settings.complete.call(context, xhr, status), triggerGlobal(settings, context, "ajaxComplete", [ xhr, settings ]),
        ajaxStop(settings);
    }
    function empty() {}
    function mimeToDataType(mime) {
        return mime && (mime = mime.split(";", 2)[0]), mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text";
    }
    function appendQuery(url, query) {
        return "" == query ? url : (url + "&" + query).replace(/[&?]{1,2}/, "?");
    }
    function serializeData(options) {
        options.processData && options.data && "string" != $.type(options.data) && (options.data = $.param(options.data, options.traditional)),
        !options.data || options.type && "GET" != options.type.toUpperCase() || (options.url = appendQuery(options.url, options.data),
        options.data = void 0);
    }
    function parseArguments(url, data, success, dataType) {
        return $.isFunction(data) && (dataType = success, success = data, data = void 0),
        $.isFunction(success) || (dataType = success, success = void 0), {
            url: url,
            data: data,
            success: success,
            dataType: dataType
        };
    }
    function serialize(params, obj, traditional, scope) {
        var type, array = $.isArray(obj), hash = $.isPlainObject(obj);
        $.each(obj, function(key, value) {
            type = $.type(value), scope && (key = traditional ? scope : scope + "[" + (hash || "object" == type || "array" == type ? key : "") + "]"),
            !scope && array ? params.add(value.name, value.value) : "array" == type || !traditional && "object" == type ? serialize(params, value, traditional, key) : params.add(key, value);
        });
    }
    var key, name, jsonpID = 0, document = window.document, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/;
    $.active = 0, $.ajaxJSONP = function(options, deferred) {
        if (!("type" in options)) return $.ajax(options);
        var responseData, abortTimeout, _callbackName = options.jsonpCallback, callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || "jsonp" + ++jsonpID, script = document.createElement("script"), originalCallback = window[callbackName], abort = function(errorType) {
            $(script).triggerHandler("error", errorType || "abort");
        }, xhr = {
            abort: abort
        };
        return deferred && deferred.promise(xhr), $(script).on("load error", function(e, errorType) {
            clearTimeout(abortTimeout), $(script).off().remove(), "error" != e.type && responseData ? ajaxSuccess(responseData[0], xhr, options, deferred) : ajaxError(null, errorType || "error", xhr, options, deferred),
            window[callbackName] = originalCallback, responseData && $.isFunction(originalCallback) && originalCallback(responseData[0]),
            originalCallback = responseData = void 0;
        }), ajaxBeforeSend(xhr, options) === !1 ? (abort("abort"), xhr) : (window[callbackName] = function() {
            responseData = arguments;
        }, script.src = options.url.replace(/\?(.+)=\?/, "?$1=" + callbackName), document.head.appendChild(script),
        options.timeout > 0 && (abortTimeout = setTimeout(function() {
            abort("timeout");
        }, options.timeout)), xhr);
    }, $.ajaxSettings = {
        type: "GET",
        beforeSend: empty,
        success: empty,
        error: empty,
        complete: empty,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest();
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: jsonType,
            xml: "application/xml, text/xml",
            html: htmlType,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, $.ajax = function(options) {
        var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred();
        for (key in $.ajaxSettings) void 0 === settings[key] && (settings[key] = $.ajaxSettings[key]);
        ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host),
        settings.url || (settings.url = window.location.toString()), serializeData(settings),
        settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
        var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url);
        if ("jsonp" == dataType || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === !1 ? "" : "callback=?")),
        $.ajaxJSONP(settings, deferred);
        var abortTimeout, mime = settings.accepts[dataType], headers = {}, setHeader = function(name, value) {
            headers[name.toLowerCase()] = [ name, value ];
        }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader;
        if (deferred && deferred.promise(xhr), settings.crossDomain || setHeader("X-Requested-With", "XMLHttpRequest"),
        setHeader("Accept", mime || "*/*"), (mime = settings.mimeType || mime) && (mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]),
        xhr.overrideMimeType && xhr.overrideMimeType(mime)), (settings.contentType || settings.contentType !== !1 && settings.data && "GET" != settings.type.toUpperCase()) && setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded"),
        settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
        if (xhr.setRequestHeader = setHeader, xhr.onreadystatechange = function() {
            if (4 == xhr.readyState) {
                xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
                var result, error = !1;
                if (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status || 0 == xhr.status && "file:" == protocol) {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")),
                    result = xhr.responseText;
                    try {
                        "script" == dataType ? (1, eval)(result) : "xml" == dataType ? result = xhr.responseXML : "json" == dataType && (result = blankRE.test(result) ? null : $.parseJSON(result));
                    } catch (e) {
                        error = e;
                    }
                    error ? ajaxError(error, "parsererror", xhr, settings, deferred) : ajaxSuccess(result, xhr, settings, deferred);
                } else ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred);
            }
        }, ajaxBeforeSend(xhr, settings) === !1) return xhr.abort(), ajaxError(null, "abort", xhr, settings, deferred),
        xhr;
        if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];
        var async = "async" in settings ? settings.async : !0;
        xhr.open(settings.type, settings.url, async, settings.username, settings.password);
        for (name in headers) nativeSetHeader.apply(xhr, headers[name]);
        return settings.timeout > 0 && (abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings, deferred);
        }, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr;
    }, $.get = function() {
        return $.ajax(parseArguments.apply(null, arguments));
    }, $.post = function() {
        var options = parseArguments.apply(null, arguments);
        return options.type = "POST", $.ajax(options);
    }, $.getJSON = function() {
        var options = parseArguments.apply(null, arguments);
        return options.dataType = "json", $.ajax(options);
    };
    var escape = encodeURIComponent;
    $.param = function(obj, traditional) {
        var params = [];
        return params.add = function(k, v) {
            this.push(escape(k) + "=" + escape(v));
        }, serialize(params, obj, traditional), params.join("&").replace(/%20/g, "+");
    };
}(SplytUtil), function($) {
    $.is_float = function(mixed_var) {
        "use strict";
        return !(+mixed_var !== mixed_var || isFinite(mixed_var) && !(mixed_var % 1));
    }, $.gettype = function(mixed_var) {
        "use strict";
        var name, s = typeof mixed_var, getFuncName = function(fn) {
            var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
            return name ? name[1] : "(Anonymous)";
        };
        return "object" === s ? null !== mixed_var ? "number" != typeof mixed_var.length || mixed_var.propertyIsEnumerable("length") || "function" != typeof mixed_var.splice ? mixed_var.constructor && getFuncName(mixed_var.constructor) && (name = getFuncName(mixed_var.constructor),
        "Date" === name ? s = "date" : "RegExp" === name ? s = "regexp" : "PHPJS_Resource" === name && (s = "resource")) : s = "array" : s = "null" : "number" === s && (s = this.is_float(mixed_var) ? "double" : "integer"),
        s;
    }, $.settype = function(vr, type) {
        "use strict";
        var v, mtch, i, obj, is_array = function(arr) {
            return "object" == typeof arr && "number" == typeof arr.length && !arr.propertyIsEnumerable("length") && "function" == typeof arr.splice;
        };
        v = this[vr] ? this[vr] : vr;
        var retVal = !0;
        try {
            switch (type) {
              case "boolean":
                if (is_array(v) && 0 === v.length) this[vr] = !1; else if ("0" === v) this[vr] = !1; else if ("object" != typeof v || is_array(v)) this[vr] = !!v; else {
                    var lgth = !1;
                    for (i in v) lgth = !0;
                    this[vr] = lgth;
                }
                break;

              case "integer":
                "number" == typeof v ? this[vr] = parseInt(v, 10) : "string" == typeof v ? (mtch = v.match(/^([+\-]?)(\d+)/),
                mtch ? this[vr] = parseInt(v, 10) : this[vr] = 0) : v === !0 ? this[vr] = 1 : v === !1 || null === v ? this[vr] = 0 : is_array(v) && 0 === v.length ? this[vr] = 0 : "object" == typeof v && (this[vr] = 1);
                break;

              case "double":
              case "float":
                "string" == typeof v ? (mtch = v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/),
                mtch ? this[vr] = parseFloat(v, 10) : this[vr] = 0) : v === !0 ? this[vr] = 1 : v === !1 || null === v ? this[vr] = 0 : is_array(v) && 0 === v.length ? this[vr] = 0 : "object" == typeof v && (this[vr] = 1);
                break;

              case "string":
                null === v || v === !1 ? this[vr] = "" : is_array(v) ? this[vr] = "Array" : "object" == typeof v ? this[vr] = "Object" : v === !0 ? this[vr] = "1" : this[vr] += "";
                break;

              case "array":
                null === v ? this[vr] = [] : "object" != typeof v ? this[vr] = [ v ] : retVal = !1;
                break;

              case "object":
                if (null === v) this[vr] = {}; else if (is_array(v)) {
                    for (i = 0, obj = {}; i < v.length; i++) obj[i] = v;
                    this[vr] = obj;
                } else "object" != typeof v && (this[vr] = {
                    scalar: v
                });
                break;

              case "null":
                delete this[vr];
                break;

              default:
                retVal = !1;
            }
        } catch (e) {
            retVal = !1;
        }
        return retVal;
    };
}(SplytUtil);

var Splyt = {
    TXN_SUCCESS: "success",
    TXN_ERROR: "error",
    ERROR_CID: "Missing or bad Customer ID",
    ERROR_ARGUMENT: "Bad Arguments",
    init: function(params, callback, context) {
        "use strict";
        if (Splyt.usedVars = {}, void 0 === params || "object" !== SplytUtil.gettype(params)) throw new Error(Splyt.ERROR_ARGUMENT);
        if (params.hasOwnProperty("host")) {
            if ("string" !== SplytUtil.gettype(params.host) || "" === params.host) throw new Error(Splyt.ERROR_ARGUMENT);
            Splyt.params.host = params.host;
        }
        if (!params.hasOwnProperty("customerId")) throw new Error(Splyt.ERROR_CID);
        if ("string" !== SplytUtil.gettype(params.customerId) || "" === params.customerId) throw new Error(Splyt.ERROR_CID);
        if (Splyt.params.customerId = params.customerId, params.hasOwnProperty("apikey") && "string" === SplytUtil.gettype(params.apikey) && "" !== params.apikey && (Splyt.params.apikey = params.apikey),
        params.hasOwnProperty("user")) {
            var userT = SplytUtil.gettype(params.user);
            if ("object" === userT) {
                if (!params.user.hasOwnProperty("id")) throw new Error(Splyt.ERROR_ARGUMENT);
                if (Splyt.params.user = params.user, params.user.hasOwnProperty("properties")) {
                    if ("object" !== SplytUtil.gettype(params.user.properties)) throw new Error(Splyt.ERROR_ARGUMENT);
                } else Splyt.params.user.properties = {};
            } else {
                if ("string" !== userT && "integer" !== userT) throw new Error(Splyt.ERROR_ARGUMENT);
                Splyt.params.user = {
                    id: params.user,
                    properties: {}
                };
            }
        } else Splyt.params.user = {
            id: null,
            properties: {}
        };
        if (params.hasOwnProperty("device")) {
            var deviceT = SplytUtil.gettype(params.device);
            if ("object" === deviceT) {
                if (!params.device.hasOwnProperty("id")) throw new Error(Splyt.ERROR_ARGUMENT);
                if (Splyt.params.device = params.device, params.device.hasOwnProperty("properties")) {
                    if ("object" !== SplytUtil.gettype(params.device.properties)) throw new Error(Splyt.ERROR_ARGUMENT);
                } else Splyt.params.device.properties = {};
            } else {
                if ("string" !== deviceT && "integer" !== deviceT) throw new Error(Splyt.ERROR_ARGUMENT);
                Splyt.params.device = {
                    id: params.device,
                    properties: {}
                };
            }
        } else localStorage ? (void 0 !== localStorage[Splyt.LOCAL_STORAGE_KEY] ? Splyt.params.device = {
            id: localStorage[Splyt.LOCAL_STORAGE_KEY],
            properties: {}
        } : Splyt.params.device = {
            id: null,
            properties: {}
        }, null !== Splyt.params.device.id && (localStorage[Splyt.LOCAL_STORAGE_KEY] = Splyt.params.device.id)) : Splyt.params.device = {
            id: null,
            properties: {}
        };
        var platform = window.platform;
        if ((!params.hasOwnProperty("scrape") || params.scrape) && platform && (platform.name && (Splyt.params.device.properties.browser = platform.name),
        platform.version && (Splyt.params.device.properties.browserversion = platform.version),
        platform.os && (platform.os.family && (Splyt.params.device.properties.osname = platform.os.family),
        platform.os.version && (Splyt.params.device.properties.osversion = platform.os.version)),
        platform.description && (Splyt.params.device.properties.description = platform.description),
        navigator && navigator.language && (Splyt.params.device.properties.language = navigator.language.toLowerCase())),
        params.hasOwnProperty("chartOnly") && params.chartOnly) Splyt.params.chartOnly = !0; else {
            Splyt.params.chartOnly = !1;
            var cachedInitParams = Splyt.getCachedInitParams();
            params.hasOwnProperty("alwaysFetchTuning") && !params.alwaysFetchTuning || !Splyt.needFullInit(cachedInitParams) ? (Splyt.entityStateChanged("device", cachedInitParams) && Splyt.Instrumentation.updateDeviceState(Splyt.params.device.properties, context),
            Splyt.entityStateChanged("user", cachedInitParams) && Splyt.Instrumentation.updateUserState(Splyt.params.user.properties, context),
            callback && callback(null)) : Splyt.fullInit(callback, context);
        }
        Splyt.params.vishost = params.vishost || Splyt.params.vishost;
    },
    clearActiveUser: function() {
        "use strict";
        Splyt.params.user = {
            id: null,
            properties: {}
        };
    },
    registerUser: function(user, context, callback) {
        "use strict";
        if (!Splyt.params.chartOnly) {
            sessionStorage.removeItem(Splyt.SESSION_PREVIOUS_INIT_KEY);
            var userT = SplytUtil.gettype(user);
            if ("object" === userT) {
                if (!user.hasOwnProperty("id")) throw new Error(Splyt.ERROR_ARGUMENT);
                if (Splyt.params.user = user, user.hasOwnProperty("properties")) {
                    if ("object" !== SplytUtil.gettype(user.properties)) throw new Error(Splyt.ERROR_ARGUMENT);
                } else Splyt.params.user.properties = {};
            } else {
                if ("string" !== userT && "integer" !== userT) throw new Error(Splyt.ERROR_ARGUMENT);
                Splyt.params.user = {
                    id: user,
                    properties: {}
                };
            }
            var ts = Splyt.getTimeStamp(), obj = Splyt.xhrObj("application_updateuser", Splyt.PERSONALIZATION, context, [ ts, ts, Splyt.params.user.id, Splyt.params.device.id, Splyt.params.user.properties ]);
            obj.success = function(ssfType) {
                var data = ssfType.data;
                data && (data.hasOwnProperty("userid") && null !== data.userid && (Splyt.params.user.id = data.userid),
                data.hasOwnProperty("usertuning") && null !== data.usertuning && "object" === SplytUtil.gettype(data.usertuning) && (Splyt.userVars = data.usertuning),
                data.hasOwnProperty("deviceid") && null !== data.deviceid && (Splyt.params.device.id = data.deviceid,
                localStorage && (localStorage[Splyt.LOCAL_STORAGE_KEY] = data.deviceid)), data.hasOwnProperty("devicetuning") && null !== data.devicetuning && "object" === SplytUtil.gettype(data.devicetuning) && (Splyt.deviceVars = data.devicetuning),
                callback && callback(data));
            }, obj.error = function() {
                callback && callback(null);
            }, Splyt.xhr(obj);
        }
    },
    sendDataPoint: function(hook, args, contextName) {
        "use strict";
        if (!Splyt.params.chartOnly) {
            var timestamp = Splyt.getTimeStamp(), completeArgs = [];
            if (completeArgs.push(timestamp), completeArgs.push(timestamp), completeArgs.push(Splyt.params.user.id),
            completeArgs.push(Splyt.params.device.id), args) for (var argIdx = 0; argIdx < args.length; argIdx++) completeArgs.push(args[argIdx]);
            var obj = Splyt.xhrObj(hook, Splyt.PERSONALIZATION, contextName, completeArgs);
            Splyt.xhr(obj);
        }
    },
    fullInit: function(callback, context) {
        var ts = Splyt.getTimeStamp(), obj = Splyt.xhrObj("application_init_with_entitystate_telem", Splyt.PERSONALIZATION, context, [ ts, ts, Splyt.params.user.id, Splyt.params.device.id, Splyt.params.user.properties, Splyt.params.device.properties ]);
        obj.success = function(ssfType) {
            var data = ssfType.data;
            data && (data.hasOwnProperty("userid") && null !== data.userid && (Splyt.params.user.id = data.userid),
            data.hasOwnProperty("usertuning") && null !== data.usertuning && "object" === SplytUtil.gettype(data.usertuning) && (Splyt.userVars = data.usertuning),
            data.hasOwnProperty("deviceid") && null !== data.deviceid && (Splyt.params.device.id = data.deviceid,
            localStorage && (localStorage[Splyt.LOCAL_STORAGE_KEY] = data.deviceid)), data.hasOwnProperty("devicetuning") && null !== data.devicetuning && "object" === SplytUtil.gettype(data.devicetuning) && (Splyt.deviceVars = data.devicetuning),
            sessionStorage.setItem(Splyt.SESSION_PREVIOUS_INIT_KEY, JSON.stringify(Splyt.params)),
            callback && callback(data));
        }, obj.error = function() {
            callback && callback(null);
        }, Splyt.xhr(obj);
    },
    needFullInit: function(cachedInitParams) {
        return !cachedInitParams || cachedInitParams.apikey !== Splyt.params.apikey || cachedInitParams.customerId !== Splyt.params.customerId || cachedInitParams.host !== Splyt.params.host || Splyt.params.hasOwnProperty("user") && cachedInitParams.hasOwnProperty("user") && cachedInitParams.user.id !== Splyt.params.user.id || Splyt.params.hasOwnProperty("device") && cachedInitParams.hasOwnProperty("device") && cachedInitParams.device.id !== Splyt.params.device.id;
    },
    entityStateChanged: function(entityType, cachedInitParams) {
        var changed = !1;
        return Splyt.params.hasOwnProperty(entityType) && (changed = !cachedInitParams || !cachedInitParams.hasOwnProperty(entityType) || JSON.stringify(Splyt.params[entityType]) !== JSON.stringify(cachedInitParams[entityType])),
        changed;
    },
    getCachedInitParams: function() {
        var cachedInitParams = null;
        try {
            cachedInitParams = JSON.parse(sessionStorage.getItem(Splyt.SESSION_PREVIOUS_INIT_KEY));
        } catch (err) {}
        return cachedInitParams;
    },
    updateCachedInitParamsProperties: function(entityType, properties) {
        var cachedInitParams = Splyt.getCachedInitParams();
        if (cachedInitParams) {
            if (cachedInitParams.hasOwnProperty(entityType) && "object" == typeof cachedInitParams[entityType].properties) for (var p in properties) cachedInitParams[entityType].properties.hasOwnProperty(p) && properties.hasOwnProperty(p) && (cachedInitParams[entityType].properties[p] = properties[p]);
            sessionStorage.setItem(Splyt.SESSION_PREVIOUS_INIT_KEY, JSON.stringify(cachedInitParams));
        }
    },
    params: {
        host: "https://data.splyt.com",
        vishost: "https://dashboard.splyt.com",
        customerId: null,
        user: {},
        device: {}
    },
    xhr: SplytUtil.ajax,
    userVars: {},
    deviceVars: {},
    usedVars: {},
    PERSONALIZATION: "isos-personalization",
    TOOLS: "isos-tools",
    TIME_RECORDAGAIN: 28800,
    SDK_VERSION: "4.0.6",
    WS_VERSION: "4",
    TOOLS_VERSION: "-1",
    LOCAL_STORAGE_KEY: "splyt.device.id",
    SESSION_PREVIOUS_INIT_KEY: "splyt.initParams",
    TIMEOUT_MODE_TRANSACTION: "TXN",
    TIMEOUT_MODE_ANY: "ANY",
    getQueryParms: function(service, contextName) {
        "use strict";
        if (null === Splyt.params.customerId) return "";
        var version = Splyt.WS_VERSION;
        service === Splyt.TOOLS && (version = Splyt.TOOLS_VERSION);
        var qs = "?ssf_ws_version=" + version + "&ssf_cust_id=" + Splyt.params.customerId + "&ssf_output=json&ssf_sdk=js&ssf_sdk_version=" + Splyt.SDK_VERSION;
        return service === Splyt.TOOLS && Splyt.params.apikey && Splyt.params.apikey.length > 0 && (qs += "&ssf_api_key=" + Splyt.params.apikey),
        contextName && contextName.length > 0 && (qs += "&ssf_sdk_contextname=" + contextName),
        qs;
    },
    buildURL: function(api, service, context) {
        console.log(api, service, context, Splyt.params);
        "use strict";
        var URI = "/" + service + "/ws/interface/", url = Splyt.params.host;
        return service === Splyt.TOOLS && (url = Splyt.params.vishost), url = url.replace(/\/$/, ""),
        url = url.replace(/^\//, ""), api = api.replace(/\/$/, ""), api = api.replace(/^\//, ""),
        url + URI + api + Splyt.getQueryParms(service, context);
    },
    xhrObj: function(api, service, context, data, dataType) {
        "use strict";
        return dataType = dataType || "json", {
            type: "POST",
            url: Splyt.buildURL(api, service, context),
            data: JSON.stringify(data),
            dataType: dataType,
            processData: !1,
            headers: {
                "ssf-use-positional-post-params": "true",
                "ssf-contents-not-url-encoded": "true"
            }
        };
    },
    getTimeStamp: function() {
        "use strict";
        var date = new Date();
        return date.getTime() / 1e3;
    },
    Instrumentation: {
        updateUserState: function(properties, context) {
            "use strict";
            Splyt.sendDataPoint("datacollector_updateUserState", [ properties ], context), Splyt.updateCachedInitParamsProperties("user", properties);
        },
        updateDeviceState: function(properties, context) {
            "use strict";
            Splyt.sendDataPoint("datacollector_updateDeviceState", [ properties ], context),
            Splyt.updateCachedInitParamsProperties("device", properties);
        },
        beginTransaction: function(category, timeout, properties, context, transactionid) {
            "use strict";
            Splyt.sendDataPoint("datacollector_beginTransaction", [ category, Splyt.TIMEOUT_MODE_TRANSACTION, timeout, transactionid, properties ], context);
        },
        updateTransaction: function(category, progress, properties, context, transactionid) {
            "use strict";
            Splyt.sendDataPoint("datacollector_updateTransaction", [ category, progress, transactionid, properties ], context);
        },
        endTransaction: function(category, result, properties, context, transactionid) {
            "use strict";
            Splyt.sendDataPoint("datacollector_endTransaction", [ category, result, transactionid, properties ], context);
        },
        updateCollection: function(name, balance, balanceModification, isCurrency, context) {
            "use strict";
            Splyt.sendDataPoint("datacollector_updateCollection", [ name, balance, balanceModification, isCurrency ], context);
        },
        beginAndEnd: function(category, result, properties, context) {
            "use strict";
            Splyt.sendDataPoint("datacollector_endTransaction", [ category, result, void 0, properties ], context);
        }
    },
    Tuning: {
        getVar: function(varName, defaultValue) {
            "use strict";
            var f = function(varName) {
                (!Splyt.usedVars[varName] || Splyt.getTimeStamp() > Splyt.usedVars[varName] + Splyt.TIME_RECORDAGAIN) && (Splyt.usedVars[varName] = Splyt.getTimeStamp(),
                Splyt.sendDataPoint("tuner_recordUsed", [ varName, defaultValue ]));
            };
            f(varName);
            var result = defaultValue;
            return null !== Splyt.params.user.id ? Splyt.userVars.hasOwnProperty(varName) && (result = Splyt.userVars[varName]) : null !== Splyt.params.device.id && Splyt.deviceVars.hasOwnProperty(varName) && (result = Splyt.deviceVars[varName]),
            SplytUtil.result = result, result = "undefined" == typeof result || !1 === SplytUtil.settype("result", SplytUtil.gettype(defaultValue)) ? defaultValue : SplytUtil.result,
            delete SplytUtil.result, result;
        },
        refresh: function(context, callback) {
            "use strict";
            if (!Splyt.params.chartOnly) {
                var ts = Splyt.getTimeStamp(), obj = Splyt.xhrObj("tuner_refresh", Splyt.PERSONALIZATION, context, [ ts, ts, Splyt.params.device.id, [ Splyt.params.user.id ] ]);
                obj.success = function(ssfType) {
                    var data = ssfType.data;
                    data && (data.hasOwnProperty("deviceTuning") && data.deviceTuning.hasOwnProperty("data") && "object" === SplytUtil.gettype(data.deviceTuning.data) && data.deviceTuning.data.hasOwnProperty("value") && "object" === SplytUtil.gettype(data.deviceTuning.data.value) && (Splyt.deviceVars = data.deviceTuning.data.value),
                    data.hasOwnProperty("userTuning") && data.userTuning.hasOwnProperty("data") && "object" === SplytUtil.gettype(data.userTuning.data) && data.userTuning.data.hasOwnProperty("value") && "object" === SplytUtil.gettype(data.userTuning.data.value) && data.userTuning.data.value.hasOwnProperty(Splyt.params.user.id) && "object" === SplytUtil.gettype(data.userTuning.data.value[Splyt.params.user.id]) && (Splyt.userVars = data.userTuning.data.value[Splyt.params.user.id])),
                    callback && callback();
                }, obj.error = function() {
                    callback && callback();
                }, Splyt.xhr(obj);
            }
        }
    }
}, Splyt_Purchasing = {
    PURCHASE_CATEGORY: "purchase",
    purchase: function(item, offer, pos, currency, price, result, context) {
        "use strict";
        var data = {
            offerId: offer,
            itemName: item,
            pointOfSale: pos
        };
        data.price = {}, data.price[currency] = price, Splyt.Instrumentation.beginAndEnd(Splyt_Purchasing.PURCHASE_CATEGORY, result, data, context);
    }
};

Splyt.Purchasing = Splyt_Purchasing;

var Splyt_Session = {
    SESSION_CATEGORY: "session",
    begin: function(timeout, context) {
        "use strict";
        Splyt.sendDataPoint("datacollector_beginTransaction", [ Splyt_Session.SESSION_CATEGORY, Splyt.TIMEOUT_MODE_ANY, timeout, void 0, {} ], context);
    },
    end: function(result, context) {
        "use strict";
        Splyt.Instrumentation.endTransaction(Splyt_Session.SESSION_CATEGORY, result, {}, context);
    }
};

Splyt.Session = Splyt_Session, Splyt.Web = function() {
    var splytCache, pub = {}, endPageViewIfInProgress = function() {
        !splytCache.session.isExpiredOrInvalid() && splytCache.session.pageViewId && splytCache.session.pageViewInProgress && (Splyt.Instrumentation.endTransaction("pageView", Splyt.TXN_SUCCESS, null, null, splytCache.session.pageViewId),
        splytCache.session.pageViewInProgress = !1, updateSplytCache());
    }, track = function() {
        "use strict";
        initSplytCache(), started = !0, opts.automaticPageViews && pub.beginPageView();
    }, updateSession = function() {
        "use strict";
        var beginNewSession = !1;
        if (splytCache.session.isExpiredOrInvalid() && createSplytSession(splytCache), splytCache.session.isNew ? beginNewSession = !0 : (splytCache.session.sessionProgress += 1,
        splytCache.session.sessionProgress < 100 ? (splytCache.session.sessionPageViewCount += 1,
        Splyt.Instrumentation.updateTransaction("session", splytCache.session.sessionProgress, {
            pageViewCount: splytCache.session.sessionPageViewCount
        }, null, splytCache.session.sessionId)) : (Splyt.Instrumentation.endTransaction("session", Splyt.TXN_SUCCESS, null, null, splytCache.session.sessionId),
        createSplytSession(splytCache), beginNewSession = !0)), beginNewSession) {
            if (Splyt.Instrumentation.beginTransaction("session", opts.sessionTimeoutMinutes, {
                pageViewCount: splytCache.session.sessionPageViewCount
            }, null, splytCache.session.sessionId), opts.updateDeviceState) {
                var cachedDeviceState = getCachedStateForCurrentEntity("device");
                cachedDeviceState && Splyt.Instrumentation.updateDeviceState({
                    sessionCount: cachedDeviceState.sessionCount
                });
            }
            if (opts.updateUserState) {
                var cachedUserState = getCachedStateForCurrentEntity("user");
                cachedUserState && Splyt.Instrumentation.updateUserState({
                    sessionCount: cachedUserState.sessionCount
                });
            }
        }
        updateSplytCache();
    }, createSplytSession = function() {
        "use strict";
        incrementSessionCount("device"), incrementSessionCount("user"), splytCache.session.deviceid = getId("device"),
        splytCache.session.userid = getId("user"), splytCache.session.expiryTimeMs = getFutureExpiryEpoch(opts.sessionTimeoutMinutes / 1440),
        splytCache.session.isNew = !0, splytCache.session.pageViewInProgress = !1, splytCache.session.pageViewId = getNewTransactionId(splytCache.session.pageViewId),
        splytCache.session.pageViewProgress = 0, splytCache.session.sessionId = getNewTransactionId(splytCache.session.sessionId),
        splytCache.session.sessionProgress = 0, splytCache.session.sessionPageViewCount = 1;
    }, initSplytCache = function() {
        "use strict";
        splytCache = null;
        var objStr = localStorage.splytWebCacheState;
        if (objStr) try {
            splytCache = JSON.parse(objStr);
        } catch (err) {}
        splytCache || (splytCache = {
            device: {},
            user: {},
            session: {}
        }), splytCache.session.isExpiredOrInvalid = isExpiredOrInvalid, splytCache.session.isExpiredOrInvalid() && createSplytSession(splytCache);
    }, isExpiredOrInvalid = function() {
        "use strict";
        if (this.deviceid !== getId("device")) return !0;
        if (this.userid !== getId("user")) return !0;
        var expiryTimeMs = this.expiryTimeMs;
        return !expiryTimeMs || expiryTimeMs - new Date().getTime() < 5e3;
    }, updateSplytCache = function() {
        "use strict";
        splytCache.session.expiryTimeMs = getFutureExpiryEpoch(opts.sessionTimeoutMinutes / 1440),
        splytCache.session.isNew = !1, localStorage.splytWebCacheState = JSON.stringify(splytCache);
    }, getId = function(entityType) {
        "use strict";
        var entityId = null;
        try {
            entityId = Splyt.params[entityType].id;
        } catch (e) {}
        return entityId;
    }, getCachedStateForCurrentEntity = function(entityType) {
        "use strict";
        var id = getId(entityType);
        return id ? (splytCache[entityType].hasOwnProperty(id) && splytCache[entityType][id] || (splytCache[entityType][id] = {
            sessionCount: 0
        }), splytCache[entityType][id]) : null;
    }, incrementSessionCount = function(entityType, newSessionCount) {
        "use strict";
        var entityId = getId(entityType);
        if (entityId) {
            var entityState = getCachedStateForCurrentEntity(entityType);
            (!entityState || isNaN(parseFloat(entityState.sessionCount))) && (entityState = {
                sessionCount: 0
            }), entityState.sessionCount = entityState.sessionCount + 1, splytCache[entityType][entityId] = entityState;
        }
    }, getNewTransactionId = function(currentTrxId) {
        var newTrxId = new Date().getTime();
        return newTrxId.toString() === currentTrxId && newTrxId++, newTrxId.toString();
    }, getFutureExpiryEpoch = function(daysFromNow) {
        "use strict";
        return new Date().getTime() + 24 * daysFromNow * 60 * 60 * 1e3;
    }, getPathName = function() {
        "use strict";
        var pathname = window.location.pathname;
        return "/" == pathname.charAt(0) ? pathname : "/" + pathname;
    }, ready = function(fn) {
        "use strict";
        "interactive" === document.readyState || "complete" === document.readyState ? fn() : document.addEventListener ? document.addEventListener("DOMContentLoaded", fn) : document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && fn();
        });
    }, opts = {
        automaticPageViews: !0,
        sessionTimeoutMinutes: 30,
        updateDeviceState: !0,
        updateUserState: !1
    }, started = !1;
    return pub.startTracking = function(options) {
        "use strict";
        void 0 !== options && (void 0 !== options.automaticPageViews && (opts.automaticPageViews = options.automaticPageViews),
        void 0 !== options.sessionTimeoutMinutes && (opts.sessionTimeoutMinutes = options.sessionTimeoutMinutes),
        void 0 !== options.updateDeviceState && (opts.updateDeviceState = options.updateDeviceState),
        void 0 !== options.updateUserState && (opts.updateUserState = options.updateUserState)),
        ready(track);
    }, pub.hasStarted = function() {
        return started;
    }, pub.beginPageView = function(properties) {
        "use strict";
        pub.hasStarted() && (properties || (properties = {}), properties.hasOwnProperty("path") || (properties.path = getPathName()),
        endPageViewIfInProgress(), updateSession(), splytCache.session.pageViewId = getNewTransactionId(splytCache.session.pageViewId),
        splytCache.session.pageViewProgress = 0, Splyt.Instrumentation.beginTransaction("pageView", opts.sessionTimeoutMinutes, properties, null, splytCache.session.pageViewId),
        splytCache.session.pageViewInProgress = !0, updateSplytCache());
    }, pub.updatePageView = function(properties) {
        "use strict";
        pub.hasStarted() && (!splytCache.session.isExpiredOrInvalid() && splytCache.session.pageViewProgress < 99 ? (splytCache.session.pageViewProgress += 1,
        Splyt.Instrumentation.updateTransaction("pageView", splytCache.session.pageViewProgress, properties, null, splytCache.session.pageViewId)) : pub.beginPageView(properties),
        updateSplytCache());
    }, pub;
}();

var Splyt_Charts = {
    render: function(div, id, from, to, options) {
        if (Visualization) {
            var v = new Visualization(), chart = v.create("highchart", div, div, new VisualizationParams());
            chart.showLoading();
            var obj = Splyt.xhrObj("xvault", Splyt.TOOLS, void 0, [ id, from, to ]);
            obj.success = function(ssf) {
                console.log(ssf);
                var info = ssf.data.info;
                var config = info.plotconfig == null ? {} : info.plotconfig;
                var params = config.params || {
                    sort: null
                };
                info.sort = params.sort || null, info.numberStyle = info.yformat || "int",
                info.xaxis = info.xformat, info.caption = info.infoformat;
                var seriesObj = new Series(ssf);
                console.log("series", seriesObj);
                seriesObj.applyTransforms(), chart.mChart.destroy(), chart = v.create("highchart", div, info, new VisualizationParams()),
                chart.addSeries(seriesObj, "line");
            }, Splyt.xhr(obj);
        }
    }
};

Splyt.Charts = Splyt_Charts;
