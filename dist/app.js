/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=h({},o,t),this.init()}function o(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function s(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&this.opts.closeMethods.indexOf("overlay")!==-1||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),this.opts.closeMethods.indexOf("button")!==-1&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),this.opts.closeMethods.indexOf("button")!==-1&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function i(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function n(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:d.bind(this),resize:o.bind(this),keyboardNav:l.bind(this)},this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function l(t){this.opts.closeMethods.indexOf("escape")!==-1&&27===t.which&&this.isOpen()&&this.close()}function d(t){this.opts.closeMethods.indexOf("overlay")!==-1&&!a(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function a(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function r(){this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function h(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}function c(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}var m=c();return t.prototype.init=function(){this.modal||(s.call(this),n.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(r.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),document.body.classList.add("tingle-enabled"),this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible");var t=this;m?this.modal.addEventListener(m,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(m,o,!1)},!1):"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),o.call(this)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.close=function(){if("function"==typeof this.opts.beforeClose){var t=this.opts.beforeClose.call(this);if(!t)return}document.body.classList.remove("tingle-enabled"),this.modal.classList.remove("tingle-modal--visible");var o=this;m?this.modal.addEventListener(m,function t(){o.modal.removeEventListener(m,t,!1),o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this)},!1):(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this))},t.prototype.setContent=function(t){"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t))},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){i.call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight,o=this.modalBox.clientHeight;return o>=t},{modal:t}});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*!
 * WebCodeCamJS 2.5.0 javascript Bar code and QR code decoder 
 * Author: Tóth András
 * Web: http://atandrastoth.co.uk
 * email: atandrastoth@gmail.com
 * Licensed under the MIT license
 */
var WebCodeCamJS = function(element) {
    'use strict';
    this.Version = {
        name: 'WebCodeCamJS',
        version: '2.5.0',
        author: 'Tóth András',
    };
    var mediaDevices = window.navigator.mediaDevices;
    mediaDevices.getUserMedia = function(c) {
        return new Promise(function(y, n) {
            (window.navigator.getUserMedia || window.navigator.mozGetUserMedia || window.navigator.webkitGetUserMedia).call(navigator, c, y, n);
        });
    }
    HTMLVideoElement.prototype.streamSrc = ('srcObject' in HTMLVideoElement.prototype) ? function(stream) {
        this.srcObject = !!stream ? stream : null;
    } : function(stream) {
        if (!!stream) {
            this.src = (window.URL || window.webkitURL).createObjectURL(stream);
        } else {
            this.removeAttribute('src');
        }
    };
    var videoSelect, lastImageSrc, con, beepSound, w, h, lastCode;
    var display = Q(element),
        DecodeWorker = null,
        video = html('<video muted autoplay></video>'),
        sucessLocalDecode = false,
        localImage = false,
        flipMode = [1, 3, 6, 8],
        isStreaming = false,
        delayBool = false,
        initialized = false,
        localStream = null,
        options = {
            decodeQRCodeRate: 5,
            decodeBarCodeRate: 3,
            successTimeout: 500,
            codeRepetition: true,
            tryVertical: true,
            frameRate: 15,
            width: 320,
            height: 240,
            constraints: {
                video: {
                    mandatory: {
                        maxWidth: 1280,
                        maxHeight: 720
                    },
                    optional: [{
                        sourceId: true
                    }]
                },
                audio: false
            },
            flipVertical: false,
            flipHorizontal: false,
            zoom: 0,
            beep: 'audio/beep.mp3',
            decoderWorker: 'js/DecoderWorker.js',
            brightness: 0,
            autoBrightnessValue: 0,
            grayScale: 0,
            contrast: 0,
            threshold: 0,
            sharpness: [],
            resultFunction: function(res) {
                console.log(res.format + ": " + res.code);
            },
            cameraSuccess: function(stream) {
                console.log('cameraSuccess');
            },
            canPlayFunction: function() {
                console.log('canPlayFunction');
            },
            getDevicesError: function(error) {
                console.log(error);
            },
            getUserMediaError: function(error) {
                console.log(error);
            },
            cameraError: function(error) {
                console.log(error);
            }
        };

    function init() {
        var constraints = changeConstraints();
        try {
            mediaDevices.getUserMedia(constraints).then(cameraSuccess).catch(function(error) {
                options.cameraError(error);
                return false;
            });
        } catch (error) {
            options.getUserMediaError(error);
            return false;
        }
        return true;
    }

    function play() {
        if (!localImage) {
            if (!localStream) {
                init();
            }
            const p = video.play();
            if (p && (typeof Promise !== 'undefined') && (p instanceof Promise)) {
                p.catch(e => null);
            }
            delay();
        }
    }

    function stop() {
        delayBool = true;
        const p = video.pause();
        if (p && (typeof Promise !== 'undefined') && (p instanceof Promise)) {
            p.catch(e => null);
        }
        video.streamSrc(null);
        con.clearRect(0, 0, w, h);
        if (localStream) {
            for (var i = 0; i < localStream.getTracks().length; i++) {
                localStream.getTracks()[i].stop();
            }
        }
        localStream = null;
    }

    function pause() {
        delayBool = true;
        const p = video.pause();
        if (p && (typeof Promise !== 'undefined') && (p instanceof Promise)) {
            p.catch(e => null);
        }
    }

    function delay() {
        delayBool = true;
        if (!localImage) {
            setTimeout(function() {
                delayBool = false;
                if (options.decodeBarCodeRate) {
                    tryParseBarCode();
                }
                if (options.decodeQRCodeRate) {
                    tryParseQRCode();
                }
            }, options.successTimeout);
        }
    }

    function beep() {
        if (options.beep) {
            beepSound.play();
        }
    }

    function cameraSuccess(stream) {
        localStream = stream;
        video.streamSrc(stream);
        options.cameraSuccess(stream);
    }

    function cameraError(error) {
        options.cameraError(error);
    }

    function setEventListeners() {
        video.addEventListener('canplay', function(e) {
            if (!isStreaming) {
                if (video.videoWidth > 0) {
                    h = video.videoHeight / (video.videoWidth / w);
                }
                display.setAttribute('width', w);
                display.setAttribute('height', h);
                isStreaming = true;
                if (options.decodeQRCodeRate || options.decodeBarCodeRate) {
                    delay();
                }
            }
        }, false);
        video.addEventListener('play', function() {
            setInterval(function() {
                if (!video.paused && !video.ended) {
                    var z = options.zoom;
                    if (z === 0) {
                        z = optimalZoom();
                    }
                    con.drawImage(video, (w * z - w) / -2, (h * z - h) / -2, w * z, h * z);
                    var imageData = con.getImageData(0, 0, w, h);
                    if (options.grayScale) {
                        imageData = grayScale(imageData);
                    }
                    if (options.brightness !== 0 || options.autoBrightnessValue) {
                        imageData = brightness(imageData, options.brightness);
                    }
                    if (options.contrast !== 0) {
                        imageData = contrast(imageData, options.contrast);
                    }
                    if (options.threshold !== 0) {
                        imageData = threshold(imageData, options.threshold);
                    }
                    if (options.sharpness.length !== 0) {
                        imageData = convolute(imageData, options.sharpness);
                    }
                    con.putImageData(imageData, 0, 0);
                }
            }, 1E3 / options.frameRate);
        }, false);
    }

    function setCallBack() {
        DecodeWorker.onmessage = function(e) {
            if (localImage || (!delayBool && !video.paused)) {
                if (e.data.success === true && e.data.success != 'localization') {
                    sucessLocalDecode = true;
                    delayBool = true;
                    delay();
                    setTimeout(function() {
                        if (options.codeRepetition || lastCode != e.data.result[0].Value) {
                            beep();
                            lastCode = e.data.result[0].Value;
                            options.resultFunction({
                                format: e.data.result[0].Format,
                                code: e.data.result[0].Value,
                                imgData: lastImageSrc
                            });
                        }
                    }, 0);
                }
                if ((!sucessLocalDecode || !localImage) && e.data.success != 'localization') {
                    if (!localImage) {
                        setTimeout(tryParseBarCode, 1E3 / options.decodeBarCodeRate);
                    }
                }
            }
        };
        qrcode.callback = function(a) {
            if (localImage || (!delayBool && !video.paused)) {
                sucessLocalDecode = true;
                delayBool = true;
                delay();
                setTimeout(function() {
                    if (options.codeRepetition || lastCode != a) {
                        beep();
                        lastCode = a;
                        options.resultFunction({
                            format: 'QR Code',
                            code: a,
                            imgData: lastImageSrc
                        });
                    }
                }, 0);
            }
        };
    }

    function tryParseBarCode() {
        display.style.transform = 'scale(' + (options.flipHorizontal ? '-1' : '1') + ', ' + (options.flipVertical ? '-1' : '1') + ')';
        if (options.tryVertical && !localImage) {
            flipMode.push(flipMode[0]);
            flipMode.splice(0, 1);
        } else {
            flipMode = [1, 3, 6, 8];
        }
        lastImageSrc = display.toDataURL();
        DecodeWorker.postMessage({
            scan: con.getImageData(0, 0, w, h).data,
            scanWidth: w,
            scanHeight: h,
            multiple: false,
            decodeFormats: ["Code128", "Code93", "Code39", "EAN-13", "2Of5", "Inter2Of5", "Codabar"],
            rotation: flipMode[0]
        });
    }

    function tryParseQRCode() {
        display.style.transform = 'scale(' + (options.flipHorizontal ? '-1' : '1') + ', ' + (options.flipVertical ? '-1' : '1') + ')';
        try {
            lastImageSrc = display.toDataURL();
            qrcode.decode();
        } catch (e) {
            if (!localImage && !delayBool) {
                setTimeout(tryParseQRCode, 1E3 / options.decodeQRCodeRate);
            }
        }
    }

    function optimalZoom() {
        return video.videoHeight / h;
    }

    function getImageLightness() {
        var pixels = con.getImageData(0, 0, w, h),
            d = pixels.data,
            colorSum = 0,
            r, g, b, avg;
        for (var x = 0, len = d.length; x < len; x += 4) {
            r = d[x];
            g = d[x + 1];
            b = d[x + 2];
            avg = Math.floor((r + g + b) / 3);
            colorSum += avg;
        }
        return Math.floor(colorSum / (w * h));
    }

    function brightness(pixels, adjustment) {
        adjustment = adjustment === 0 && options.autoBrightnessValue ? Number(options.autoBrightnessValue) - getImageLightness() : adjustment;
        var d = pixels.data;
        for (var i = 0; i < d.length; i += 4) {
            d[i] += adjustment;
            d[i + 1] += adjustment;
            d[i + 2] += adjustment;
        }
        return pixels;
    }

    function grayScale(pixels) {
        var d = pixels.data;
        for (var i = 0; i < d.length; i += 4) {
            var r = d[i],
                g = d[i + 1],
                b = d[i + 2],
                v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            d[i] = d[i + 1] = d[i + 2] = v;
        }
        return pixels;
    }

    function contrast(pixels, cont) {
        var data = pixels.data;
        var factor = (259 * (cont + 255)) / (255 * (259 - cont));
        for (var i = 0; i < data.length; i += 4) {
            data[i] = factor * (data[i] - 128) + 128;
            data[i + 1] = factor * (data[i + 1] - 128) + 128;
            data[i + 2] = factor * (data[i + 2] - 128) + 128;
        }
        return pixels;
    }

    function threshold(pixels, thres) {
        var average, d = pixels.data;
        for (var i = 0, len = w * h * 4; i < len; i += 4) {
            average = d[i] + d[i + 1] + d[i + 2];
            if (average < thres) {
                d[i] = d[i + 1] = d[i + 2] = 0;
            } else {
                d[i] = d[i + 1] = d[i + 2] = 255;
            }
            d[i + 3] = 255;
        }
        return pixels;
    }

    function convolute(pixels, weights, opaque) {
        var sw = pixels.width,
            sh = pixels.height,
            w = sw,
            h = sh,
            side = Math.round(Math.sqrt(weights.length)),
            halfSide = Math.floor(side / 2),
            src = pixels.data,
            tmpCanvas = document.createElement('canvas'),
            tmpCtx = tmpCanvas.getContext('2d'),
            output = tmpCtx.createImageData(w, h),
            dst = output.data,
            alphaFac = opaque ? 1 : 0;
        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                var sy = y,
                    sx = x,
                    r = 0,
                    g = 0,
                    b = 0,
                    a = 0,
                    dstOff = (y * w + x) * 4;
                for (var cy = 0; cy < side; cy++) {
                    for (var cx = 0; cx < side; cx++) {
                        var scy = sy + cy - halfSide,
                            scx = sx + cx - halfSide;
                        if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                            var srcOff = (scy * sw + scx) * 4,
                                wt = weights[cy * side + cx];
                            r += src[srcOff] * wt;
                            g += src[srcOff + 1] * wt;
                            b += src[srcOff + 2] * wt;
                            a += src[srcOff + 3] * wt;
                        }
                    }
                }
                dst[dstOff] = r;
                dst[dstOff + 1] = g;
                dst[dstOff + 2] = b;
                dst[dstOff + 3] = a + alphaFac * (255 - a);
            }
        }
        return output;
    }

    function buildSelectMenu(selectorVideo, ind) {
        videoSelect = Q(selectorVideo);
        videoSelect.innerHTML = '';
        try {
            if (mediaDevices && mediaDevices.enumerateDevices) {
                mediaDevices.enumerateDevices().then(function(devices) {
                    devices.forEach(function(device) {
                        gotSources(device);
                    });
                    if (typeof ind === 'string') {
                        Array.prototype.find.call(videoSelect.children, function(a, i) {
                            if (a['innerText' in HTMLElement.prototype ? 'innerText' : 'textContent'].toLowerCase().match(new RegExp(ind, 'g'))) {
                                videoSelect.selectedIndex = i;
                            }
                        });
                    } else {
                        videoSelect.selectedIndex = videoSelect.children.length <= ind ? 0 : ind;
                    }
                }).catch(function(error) {
                    options.getDevicesError(error);
                });
            } else if (mediaDevices && !mediaDevices.enumerateDevices) {
                html('<option value="true">On</option>', videoSelect);
                options.getDevicesError(new NotSupportError('enumerateDevices Or getSources is Not supported'));
            } else {
                throw new NotSupportError('getUserMedia is Not supported');
            }
        } catch (error) {
            options.getDevicesError(error);
        }
    }

    function gotSources(device) {
        if (device.kind === 'video' || device.kind === 'videoinput') {
            var face = (!device.facing || device.facing === '') ? 'unknown' : device.facing;
            var text = device.label || 'camera ' + (videoSelect.length + 1) + ' (facing: ' + face + ')';
            html('<option value="' + (device.id || device.deviceId) + '">' + text + '</option>', videoSelect);
        }
    }

    function changeConstraints() {
        var constraints = JSON.parse(JSON.stringify(options.constraints));
        if (videoSelect && videoSelect.length !== 0) {
            switch (videoSelect[videoSelect.selectedIndex].value.toString()) {
                case 'true':
                    constraints.video.optional = [{
                        sourceId: true
                    }];
                    break;
                case 'false':
                    constraints.video = false;
                    break;
                default:
                    constraints.video.optional = [{
                        sourceId: videoSelect[videoSelect.selectedIndex].value
                    }];
                    break;
            }
        }
        constraints.audio = false;
        return constraints;
    }

    function Q(el) {
        if (typeof el === 'string') {
            var els = document.querySelectorAll(el);
            return typeof els === 'undefined' ? undefined : els.length > 1 ? els : els[0];
        }
        return el;
    }

    function decodeLocalImage(url) {
        stop();
        localImage = true;
        sucessLocalDecode = false;
        var img = new Image();
        img.onload = function() {
            con.fillStyle = '#fff';
            con.fillRect(0, 0, w, h);
            con.drawImage(this, 5, 5, w - 10, h - 10);
            tryParseQRCode();
            tryParseBarCode();
        };
        if (url) {
            download("temp", url);
            decodeLocalImage();
        } else {
            if (FileReaderHelper) {
                new FileReaderHelper().Init('jpg|png|jpeg|gif', 'dataURL', function(e) {
                    img.src = e.data;
                }, true);
            } else {
                alert("fileReader class not found!");
            }
        }
    }

    function download(filename, url) {
        var a = window.document.createElement('a'),
            bd = document.querySelector('body');
        bd.appendChild(a);
        a.setAttribute('href', url);
        a.setAttribute('download', filename);
        a.click();
        bd.removeChild(a);
    }

    function mergeRecursive(target, source) {
        if (typeof target !== 'object') {
            target = {};
        }
        for (var property in source) {
            if (source.hasOwnProperty(property)) {
                var sourceProperty = source[property];
                if (typeof sourceProperty === 'object') {
                    target[property] = mergeRecursive(target[property], sourceProperty);
                    continue;
                }
                target[property] = sourceProperty;
            }
        }
        for (var a = 2, l = arguments.length; a < l; a++) {
            mergeRecursive(target, arguments[a]);
        }
        return target;
    }

    function html(innerhtml, appendTo) {
        var item = document.createElement('div');
        if (innerhtml) {
            item.innerHTML = innerhtml;
        }
        if (appendTo) {
            appendTo.appendChild(item.children[0]);
            return item;
        }
        return item.children[0];
    }

    function NotSupportError(message) {
        this.name = 'NotSupportError';
        this.message = (message || '');
    }
    NotSupportError.prototype = Error.prototype;
    return {
        init: function(opt) {
            if (initialized) {
                return this;
            }
            if (!display || display.tagName.toLowerCase() !== 'canvas') {
                console.log('Element type must be canvas!');
                alert('Element type must be canvas!');
                return false;
            }
            con = display.getContext('2d');
            if (opt) {
                options = mergeRecursive(options, opt);
                if (options.beep) {
                    beepSound = new Audio(options.beep);
                }
            }
            display.width = w = options.width;
            display.height = h = options.height;
            qrcode.sourceCanvas = display;
            initialized = true;
            setEventListeners();
            DecodeWorker = new Worker(options.decoderWorker);
            if (options.decodeQRCodeRate || options.decodeBarCodeRate) {
                setCallBack();
            }
            return this;
        },
        play: function() {
            localImage = false;
            setTimeout(play, 100);
            return this;
        },
        stop: function() {
            stop();
            return this;
        },
        pause: function() {
            pause();
            return this;
        },
        buildSelectMenu: function(selector, ind) {
            buildSelectMenu(selector, ind ? ind : 0);
            return this;
        },
        getOptimalZoom: function() {
            return optimalZoom();
        },
        getLastImageSrc: function() {
            return display.toDataURL();
        },
        decodeLocalImage: function(url) {
            decodeLocalImage(url);
        },
        isInitialized: function() {
            return initialized;
        },
        getWorker: function () {
            return DecodeWorker;
        },
        options: options
    };
};


/*** EXPORTS FROM exports-loader ***/
module.exports = WebCodeCamJS;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

GridSampler={};
GridSampler.checkAndNudgePoints=function(image,points){var width=qrcode.width;var height=qrcode.height;var nudged=true;for(var offset=0;offset<points.length&&nudged;offset+=2){var x=Math.floor(points[offset]);var y=Math.floor(points[offset+1]);if(x<-1||x>width||y<-1||y>height)throw"Error.checkAndNudgePoints ";nudged=false;if(x==-1){points[offset]=0;nudged=true}else if(x==width){points[offset]=width-1;nudged=true}if(y==-1){points[offset+1]=0;nudged=true}else if(y==height){points[offset+1]=height-1;
nudged=true}}nudged=true;for(var offset=points.length-2;offset>=0&&nudged;offset-=2){var x=Math.floor(points[offset]);var y=Math.floor(points[offset+1]);if(x<-1||x>width||y<-1||y>height)throw"Error.checkAndNudgePoints ";nudged=false;if(x==-1){points[offset]=0;nudged=true}else if(x==width){points[offset]=width-1;nudged=true}if(y==-1){points[offset+1]=0;nudged=true}else if(y==height){points[offset+1]=height-1;nudged=true}}};
GridSampler.sampleGrid3=function(image,dimension,transform){var bits=new BitMatrix(dimension);var points=new Array(dimension<<1);for(var y=0;y<dimension;y++){var max=points.length;var iValue=y+.5;for(var x=0;x<max;x+=2){points[x]=(x>>1)+.5;points[x+1]=iValue}transform.transformPoints1(points);GridSampler.checkAndNudgePoints(image,points);try{for(var x=0;x<max;x+=2){var xpoint=Math.floor(points[x])*4+Math.floor(points[x+1])*qrcode.width*4;var bit=image[Math.floor(points[x])+qrcode.width*Math.floor(points[x+
1])];qrcode.imagedata.data[xpoint]=bit?255:0;qrcode.imagedata.data[xpoint+1]=bit?255:0;qrcode.imagedata.data[xpoint+2]=0;qrcode.imagedata.data[xpoint+3]=255;if(bit)bits.set_Renamed(x>>1,y)}}catch(aioobe){throw"Error.checkAndNudgePoints";}}return bits};
GridSampler.sampleGridx=function(image,dimension,p1ToX,p1ToY,p2ToX,p2ToY,p3ToX,p3ToY,p4ToX,p4ToY,p1FromX,p1FromY,p2FromX,p2FromY,p3FromX,p3FromY,p4FromX,p4FromY){var transform=PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX,p1ToY,p2ToX,p2ToY,p3ToX,p3ToY,p4ToX,p4ToY,p1FromX,p1FromY,p2FromX,p2FromY,p3FromX,p3FromY,p4FromX,p4FromY);return GridSampler.sampleGrid3(image,dimension,transform)};
function ECB(count,dataCodewords){this.count=count;this.dataCodewords=dataCodewords;this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("DataCodewords",function(){return this.dataCodewords})}
function ECBlocks(ecCodewordsPerBlock,ecBlocks1,ecBlocks2){this.ecCodewordsPerBlock=ecCodewordsPerBlock;if(ecBlocks2)this.ecBlocks=new Array(ecBlocks1,ecBlocks2);else this.ecBlocks=new Array(ecBlocks1);this.__defineGetter__("ECCodewordsPerBlock",function(){return this.ecCodewordsPerBlock});this.__defineGetter__("TotalECCodewords",function(){return this.ecCodewordsPerBlock*this.NumBlocks});this.__defineGetter__("NumBlocks",function(){var total=0;for(var i=0;i<this.ecBlocks.length;i++)total+=this.ecBlocks[i].length;
return total});this.getECBlocks=function(){return this.ecBlocks}}
function Version(versionNumber,alignmentPatternCenters,ecBlocks1,ecBlocks2,ecBlocks3,ecBlocks4){this.versionNumber=versionNumber;this.alignmentPatternCenters=alignmentPatternCenters;this.ecBlocks=new Array(ecBlocks1,ecBlocks2,ecBlocks3,ecBlocks4);var total=0;var ecCodewords=ecBlocks1.ECCodewordsPerBlock;var ecbArray=ecBlocks1.getECBlocks();for(var i=0;i<ecbArray.length;i++){var ecBlock=ecbArray[i];total+=ecBlock.Count*(ecBlock.DataCodewords+ecCodewords)}this.totalCodewords=total;this.__defineGetter__("VersionNumber",
function(){return this.versionNumber});this.__defineGetter__("AlignmentPatternCenters",function(){return this.alignmentPatternCenters});this.__defineGetter__("TotalCodewords",function(){return this.totalCodewords});this.__defineGetter__("DimensionForVersion",function(){return 17+4*this.versionNumber});this.buildFunctionPattern=function(){var dimension=this.DimensionForVersion;var bitMatrix=new BitMatrix(dimension);bitMatrix.setRegion(0,0,9,9);bitMatrix.setRegion(dimension-8,0,8,9);bitMatrix.setRegion(0,
dimension-8,9,8);var max=this.alignmentPatternCenters.length;for(var x=0;x<max;x++){var i=this.alignmentPatternCenters[x]-2;for(var y=0;y<max;y++){if(x==0&&(y==0||y==max-1)||x==max-1&&y==0)continue;bitMatrix.setRegion(this.alignmentPatternCenters[y]-2,i,5,5)}}bitMatrix.setRegion(6,9,1,dimension-17);bitMatrix.setRegion(9,6,dimension-17,1);if(this.versionNumber>6){bitMatrix.setRegion(dimension-11,0,3,6);bitMatrix.setRegion(0,dimension-11,6,3)}return bitMatrix};this.getECBlocksForLevel=function(ecLevel){return this.ecBlocks[ecLevel.ordinal()]}}
Version.VERSION_DECODE_INFO=new Array(31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089,167017);Version.VERSIONS=buildVersions();Version.getVersionForNumber=function(versionNumber){if(versionNumber<1||versionNumber>40)throw"ArgumentException";return Version.VERSIONS[versionNumber-1]};
Version.getProvisionalVersionForDimension=function(dimension){if(dimension%4!=1)throw"Error getProvisionalVersionForDimension";try{return Version.getVersionForNumber(dimension-17>>2)}catch(iae){throw"Error getVersionForNumber";}};
Version.decodeVersionInformation=function(versionBits){var bestDifference=4294967295;var bestVersion=0;for(var i=0;i<Version.VERSION_DECODE_INFO.length;i++){var targetVersion=Version.VERSION_DECODE_INFO[i];if(targetVersion==versionBits)return this.getVersionForNumber(i+7);var bitsDifference=FormatInformation.numBitsDiffering(versionBits,targetVersion);if(bitsDifference<bestDifference){bestVersion=i+7;bestDifference=bitsDifference}}if(bestDifference<=3)return this.getVersionForNumber(bestVersion);
return null};
function buildVersions(){return new Array(new Version(1,new Array,new ECBlocks(7,new ECB(1,19)),new ECBlocks(10,new ECB(1,16)),new ECBlocks(13,new ECB(1,13)),new ECBlocks(17,new ECB(1,9))),new Version(2,new Array(6,18),new ECBlocks(10,new ECB(1,34)),new ECBlocks(16,new ECB(1,28)),new ECBlocks(22,new ECB(1,22)),new ECBlocks(28,new ECB(1,16))),new Version(3,new Array(6,22),new ECBlocks(15,new ECB(1,55)),new ECBlocks(26,new ECB(1,44)),new ECBlocks(18,new ECB(2,17)),new ECBlocks(22,new ECB(2,13))),new Version(4,
new Array(6,26),new ECBlocks(20,new ECB(1,80)),new ECBlocks(18,new ECB(2,32)),new ECBlocks(26,new ECB(2,24)),new ECBlocks(16,new ECB(4,9))),new Version(5,new Array(6,30),new ECBlocks(26,new ECB(1,108)),new ECBlocks(24,new ECB(2,43)),new ECBlocks(18,new ECB(2,15),new ECB(2,16)),new ECBlocks(22,new ECB(2,11),new ECB(2,12))),new Version(6,new Array(6,34),new ECBlocks(18,new ECB(2,68)),new ECBlocks(16,new ECB(4,27)),new ECBlocks(24,new ECB(4,19)),new ECBlocks(28,new ECB(4,15))),new Version(7,new Array(6,
22,38),new ECBlocks(20,new ECB(2,78)),new ECBlocks(18,new ECB(4,31)),new ECBlocks(18,new ECB(2,14),new ECB(4,15)),new ECBlocks(26,new ECB(4,13),new ECB(1,14))),new Version(8,new Array(6,24,42),new ECBlocks(24,new ECB(2,97)),new ECBlocks(22,new ECB(2,38),new ECB(2,39)),new ECBlocks(22,new ECB(4,18),new ECB(2,19)),new ECBlocks(26,new ECB(4,14),new ECB(2,15))),new Version(9,new Array(6,26,46),new ECBlocks(30,new ECB(2,116)),new ECBlocks(22,new ECB(3,36),new ECB(2,37)),new ECBlocks(20,new ECB(4,16),new ECB(4,
17)),new ECBlocks(24,new ECB(4,12),new ECB(4,13))),new Version(10,new Array(6,28,50),new ECBlocks(18,new ECB(2,68),new ECB(2,69)),new ECBlocks(26,new ECB(4,43),new ECB(1,44)),new ECBlocks(24,new ECB(6,19),new ECB(2,20)),new ECBlocks(28,new ECB(6,15),new ECB(2,16))),new Version(11,new Array(6,30,54),new ECBlocks(20,new ECB(4,81)),new ECBlocks(30,new ECB(1,50),new ECB(4,51)),new ECBlocks(28,new ECB(4,22),new ECB(4,23)),new ECBlocks(24,new ECB(3,12),new ECB(8,13))),new Version(12,new Array(6,32,58),
new ECBlocks(24,new ECB(2,92),new ECB(2,93)),new ECBlocks(22,new ECB(6,36),new ECB(2,37)),new ECBlocks(26,new ECB(4,20),new ECB(6,21)),new ECBlocks(28,new ECB(7,14),new ECB(4,15))),new Version(13,new Array(6,34,62),new ECBlocks(26,new ECB(4,107)),new ECBlocks(22,new ECB(8,37),new ECB(1,38)),new ECBlocks(24,new ECB(8,20),new ECB(4,21)),new ECBlocks(22,new ECB(12,11),new ECB(4,12))),new Version(14,new Array(6,26,46,66),new ECBlocks(30,new ECB(3,115),new ECB(1,116)),new ECBlocks(24,new ECB(4,40),new ECB(5,
41)),new ECBlocks(20,new ECB(11,16),new ECB(5,17)),new ECBlocks(24,new ECB(11,12),new ECB(5,13))),new Version(15,new Array(6,26,48,70),new ECBlocks(22,new ECB(5,87),new ECB(1,88)),new ECBlocks(24,new ECB(5,41),new ECB(5,42)),new ECBlocks(30,new ECB(5,24),new ECB(7,25)),new ECBlocks(24,new ECB(11,12),new ECB(7,13))),new Version(16,new Array(6,26,50,74),new ECBlocks(24,new ECB(5,98),new ECB(1,99)),new ECBlocks(28,new ECB(7,45),new ECB(3,46)),new ECBlocks(24,new ECB(15,19),new ECB(2,20)),new ECBlocks(30,
new ECB(3,15),new ECB(13,16))),new Version(17,new Array(6,30,54,78),new ECBlocks(28,new ECB(1,107),new ECB(5,108)),new ECBlocks(28,new ECB(10,46),new ECB(1,47)),new ECBlocks(28,new ECB(1,22),new ECB(15,23)),new ECBlocks(28,new ECB(2,14),new ECB(17,15))),new Version(18,new Array(6,30,56,82),new ECBlocks(30,new ECB(5,120),new ECB(1,121)),new ECBlocks(26,new ECB(9,43),new ECB(4,44)),new ECBlocks(28,new ECB(17,22),new ECB(1,23)),new ECBlocks(28,new ECB(2,14),new ECB(19,15))),new Version(19,new Array(6,
30,58,86),new ECBlocks(28,new ECB(3,113),new ECB(4,114)),new ECBlocks(26,new ECB(3,44),new ECB(11,45)),new ECBlocks(26,new ECB(17,21),new ECB(4,22)),new ECBlocks(26,new ECB(9,13),new ECB(16,14))),new Version(20,new Array(6,34,62,90),new ECBlocks(28,new ECB(3,107),new ECB(5,108)),new ECBlocks(26,new ECB(3,41),new ECB(13,42)),new ECBlocks(30,new ECB(15,24),new ECB(5,25)),new ECBlocks(28,new ECB(15,15),new ECB(10,16))),new Version(21,new Array(6,28,50,72,94),new ECBlocks(28,new ECB(4,116),new ECB(4,
117)),new ECBlocks(26,new ECB(17,42)),new ECBlocks(28,new ECB(17,22),new ECB(6,23)),new ECBlocks(30,new ECB(19,16),new ECB(6,17))),new Version(22,new Array(6,26,50,74,98),new ECBlocks(28,new ECB(2,111),new ECB(7,112)),new ECBlocks(28,new ECB(17,46)),new ECBlocks(30,new ECB(7,24),new ECB(16,25)),new ECBlocks(24,new ECB(34,13))),new Version(23,new Array(6,30,54,74,102),new ECBlocks(30,new ECB(4,121),new ECB(5,122)),new ECBlocks(28,new ECB(4,47),new ECB(14,48)),new ECBlocks(30,new ECB(11,24),new ECB(14,
25)),new ECBlocks(30,new ECB(16,15),new ECB(14,16))),new Version(24,new Array(6,28,54,80,106),new ECBlocks(30,new ECB(6,117),new ECB(4,118)),new ECBlocks(28,new ECB(6,45),new ECB(14,46)),new ECBlocks(30,new ECB(11,24),new ECB(16,25)),new ECBlocks(30,new ECB(30,16),new ECB(2,17))),new Version(25,new Array(6,32,58,84,110),new ECBlocks(26,new ECB(8,106),new ECB(4,107)),new ECBlocks(28,new ECB(8,47),new ECB(13,48)),new ECBlocks(30,new ECB(7,24),new ECB(22,25)),new ECBlocks(30,new ECB(22,15),new ECB(13,
16))),new Version(26,new Array(6,30,58,86,114),new ECBlocks(28,new ECB(10,114),new ECB(2,115)),new ECBlocks(28,new ECB(19,46),new ECB(4,47)),new ECBlocks(28,new ECB(28,22),new ECB(6,23)),new ECBlocks(30,new ECB(33,16),new ECB(4,17))),new Version(27,new Array(6,34,62,90,118),new ECBlocks(30,new ECB(8,122),new ECB(4,123)),new ECBlocks(28,new ECB(22,45),new ECB(3,46)),new ECBlocks(30,new ECB(8,23),new ECB(26,24)),new ECBlocks(30,new ECB(12,15),new ECB(28,16))),new Version(28,new Array(6,26,50,74,98,
122),new ECBlocks(30,new ECB(3,117),new ECB(10,118)),new ECBlocks(28,new ECB(3,45),new ECB(23,46)),new ECBlocks(30,new ECB(4,24),new ECB(31,25)),new ECBlocks(30,new ECB(11,15),new ECB(31,16))),new Version(29,new Array(6,30,54,78,102,126),new ECBlocks(30,new ECB(7,116),new ECB(7,117)),new ECBlocks(28,new ECB(21,45),new ECB(7,46)),new ECBlocks(30,new ECB(1,23),new ECB(37,24)),new ECBlocks(30,new ECB(19,15),new ECB(26,16))),new Version(30,new Array(6,26,52,78,104,130),new ECBlocks(30,new ECB(5,115),
new ECB(10,116)),new ECBlocks(28,new ECB(19,47),new ECB(10,48)),new ECBlocks(30,new ECB(15,24),new ECB(25,25)),new ECBlocks(30,new ECB(23,15),new ECB(25,16))),new Version(31,new Array(6,30,56,82,108,134),new ECBlocks(30,new ECB(13,115),new ECB(3,116)),new ECBlocks(28,new ECB(2,46),new ECB(29,47)),new ECBlocks(30,new ECB(42,24),new ECB(1,25)),new ECBlocks(30,new ECB(23,15),new ECB(28,16))),new Version(32,new Array(6,34,60,86,112,138),new ECBlocks(30,new ECB(17,115)),new ECBlocks(28,new ECB(10,46),
new ECB(23,47)),new ECBlocks(30,new ECB(10,24),new ECB(35,25)),new ECBlocks(30,new ECB(19,15),new ECB(35,16))),new Version(33,new Array(6,30,58,86,114,142),new ECBlocks(30,new ECB(17,115),new ECB(1,116)),new ECBlocks(28,new ECB(14,46),new ECB(21,47)),new ECBlocks(30,new ECB(29,24),new ECB(19,25)),new ECBlocks(30,new ECB(11,15),new ECB(46,16))),new Version(34,new Array(6,34,62,90,118,146),new ECBlocks(30,new ECB(13,115),new ECB(6,116)),new ECBlocks(28,new ECB(14,46),new ECB(23,47)),new ECBlocks(30,
new ECB(44,24),new ECB(7,25)),new ECBlocks(30,new ECB(59,16),new ECB(1,17))),new Version(35,new Array(6,30,54,78,102,126,150),new ECBlocks(30,new ECB(12,121),new ECB(7,122)),new ECBlocks(28,new ECB(12,47),new ECB(26,48)),new ECBlocks(30,new ECB(39,24),new ECB(14,25)),new ECBlocks(30,new ECB(22,15),new ECB(41,16))),new Version(36,new Array(6,24,50,76,102,128,154),new ECBlocks(30,new ECB(6,121),new ECB(14,122)),new ECBlocks(28,new ECB(6,47),new ECB(34,48)),new ECBlocks(30,new ECB(46,24),new ECB(10,
25)),new ECBlocks(30,new ECB(2,15),new ECB(64,16))),new Version(37,new Array(6,28,54,80,106,132,158),new ECBlocks(30,new ECB(17,122),new ECB(4,123)),new ECBlocks(28,new ECB(29,46),new ECB(14,47)),new ECBlocks(30,new ECB(49,24),new ECB(10,25)),new ECBlocks(30,new ECB(24,15),new ECB(46,16))),new Version(38,new Array(6,32,58,84,110,136,162),new ECBlocks(30,new ECB(4,122),new ECB(18,123)),new ECBlocks(28,new ECB(13,46),new ECB(32,47)),new ECBlocks(30,new ECB(48,24),new ECB(14,25)),new ECBlocks(30,new ECB(42,
15),new ECB(32,16))),new Version(39,new Array(6,26,54,82,110,138,166),new ECBlocks(30,new ECB(20,117),new ECB(4,118)),new ECBlocks(28,new ECB(40,47),new ECB(7,48)),new ECBlocks(30,new ECB(43,24),new ECB(22,25)),new ECBlocks(30,new ECB(10,15),new ECB(67,16))),new Version(40,new Array(6,30,58,86,114,142,170),new ECBlocks(30,new ECB(19,118),new ECB(6,119)),new ECBlocks(28,new ECB(18,47),new ECB(31,48)),new ECBlocks(30,new ECB(34,24),new ECB(34,25)),new ECBlocks(30,new ECB(20,15),new ECB(61,16))))}
function PerspectiveTransform(a11,a21,a31,a12,a22,a32,a13,a23,a33){this.a11=a11;this.a12=a12;this.a13=a13;this.a21=a21;this.a22=a22;this.a23=a23;this.a31=a31;this.a32=a32;this.a33=a33;this.transformPoints1=function(points){var max=points.length;var a11=this.a11;var a12=this.a12;var a13=this.a13;var a21=this.a21;var a22=this.a22;var a23=this.a23;var a31=this.a31;var a32=this.a32;var a33=this.a33;for(var i=0;i<max;i+=2){var x=points[i];var y=points[i+1];var denominator=a13*x+a23*y+a33;points[i]=(a11*
x+a21*y+a31)/denominator;points[i+1]=(a12*x+a22*y+a32)/denominator}};this.transformPoints2=function(xValues,yValues){var n=xValues.length;for(var i=0;i<n;i++){var x=xValues[i];var y=yValues[i];var denominator=this.a13*x+this.a23*y+this.a33;xValues[i]=(this.a11*x+this.a21*y+this.a31)/denominator;yValues[i]=(this.a12*x+this.a22*y+this.a32)/denominator}};this.buildAdjoint=function(){return new PerspectiveTransform(this.a22*this.a33-this.a23*this.a32,this.a23*this.a31-this.a21*this.a33,this.a21*this.a32-
this.a22*this.a31,this.a13*this.a32-this.a12*this.a33,this.a11*this.a33-this.a13*this.a31,this.a12*this.a31-this.a11*this.a32,this.a12*this.a23-this.a13*this.a22,this.a13*this.a21-this.a11*this.a23,this.a11*this.a22-this.a12*this.a21)};this.times=function(other){return new PerspectiveTransform(this.a11*other.a11+this.a21*other.a12+this.a31*other.a13,this.a11*other.a21+this.a21*other.a22+this.a31*other.a23,this.a11*other.a31+this.a21*other.a32+this.a31*other.a33,this.a12*other.a11+this.a22*other.a12+
this.a32*other.a13,this.a12*other.a21+this.a22*other.a22+this.a32*other.a23,this.a12*other.a31+this.a22*other.a32+this.a32*other.a33,this.a13*other.a11+this.a23*other.a12+this.a33*other.a13,this.a13*other.a21+this.a23*other.a22+this.a33*other.a23,this.a13*other.a31+this.a23*other.a32+this.a33*other.a33)}}
PerspectiveTransform.quadrilateralToQuadrilateral=function(x0,y0,x1,y1,x2,y2,x3,y3,x0p,y0p,x1p,y1p,x2p,y2p,x3p,y3p){var qToS=this.quadrilateralToSquare(x0,y0,x1,y1,x2,y2,x3,y3);var sToQ=this.squareToQuadrilateral(x0p,y0p,x1p,y1p,x2p,y2p,x3p,y3p);return sToQ.times(qToS)};
PerspectiveTransform.squareToQuadrilateral=function(x0,y0,x1,y1,x2,y2,x3,y3){dy2=y3-y2;dy3=y0-y1+y2-y3;if(dy2==0&&dy3==0)return new PerspectiveTransform(x1-x0,x2-x1,x0,y1-y0,y2-y1,y0,0,0,1);else{dx1=x1-x2;dx2=x3-x2;dx3=x0-x1+x2-x3;dy1=y1-y2;denominator=dx1*dy2-dx2*dy1;a13=(dx3*dy2-dx2*dy3)/denominator;a23=(dx1*dy3-dx3*dy1)/denominator;return new PerspectiveTransform(x1-x0+a13*x1,x3-x0+a23*x3,x0,y1-y0+a13*y1,y3-y0+a23*y3,y0,a13,a23,1)}};
PerspectiveTransform.quadrilateralToSquare=function(x0,y0,x1,y1,x2,y2,x3,y3){return this.squareToQuadrilateral(x0,y0,x1,y1,x2,y2,x3,y3).buildAdjoint()};function DetectorResult(bits,points){this.bits=bits;this.points=points}
function Detector(image){this.image=image;this.resultPointCallback=null;this.sizeOfBlackWhiteBlackRun=function(fromX,fromY,toX,toY){var steep=Math.abs(toY-fromY)>Math.abs(toX-fromX);if(steep){var temp=fromX;fromX=fromY;fromY=temp;temp=toX;toX=toY;toY=temp}var dx=Math.abs(toX-fromX);var dy=Math.abs(toY-fromY);var error=-dx>>1;var ystep=fromY<toY?1:-1;var xstep=fromX<toX?1:-1;var state=0;for(var x=fromX,y=fromY;x!=toX;x+=xstep){var realX=steep?y:x;var realY=steep?x:y;if(state==1){if(this.image[realX+
realY*qrcode.width])state++}else if(!this.image[realX+realY*qrcode.width])state++;if(state==3){var diffX=x-fromX;var diffY=y-fromY;return Math.sqrt(diffX*diffX+diffY*diffY)}error+=dy;if(error>0){if(y==toY)break;y+=ystep;error-=dx}}var diffX2=toX-fromX;var diffY2=toY-fromY;return Math.sqrt(diffX2*diffX2+diffY2*diffY2)};this.sizeOfBlackWhiteBlackRunBothWays=function(fromX,fromY,toX,toY){var result=this.sizeOfBlackWhiteBlackRun(fromX,fromY,toX,toY);var scale=1;var otherToX=fromX-(toX-fromX);if(otherToX<
0){scale=fromX/(fromX-otherToX);otherToX=0}else if(otherToX>=qrcode.width){scale=(qrcode.width-1-fromX)/(otherToX-fromX);otherToX=qrcode.width-1}var otherToY=Math.floor(fromY-(toY-fromY)*scale);scale=1;if(otherToY<0){scale=fromY/(fromY-otherToY);otherToY=0}else if(otherToY>=qrcode.height){scale=(qrcode.height-1-fromY)/(otherToY-fromY);otherToY=qrcode.height-1}otherToX=Math.floor(fromX+(otherToX-fromX)*scale);result+=this.sizeOfBlackWhiteBlackRun(fromX,fromY,otherToX,otherToY);return result-1};this.calculateModuleSizeOneWay=
function(pattern,otherPattern){var moduleSizeEst1=this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern.X),Math.floor(pattern.Y),Math.floor(otherPattern.X),Math.floor(otherPattern.Y));var moduleSizeEst2=this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.X),Math.floor(otherPattern.Y),Math.floor(pattern.X),Math.floor(pattern.Y));if(isNaN(moduleSizeEst1))return moduleSizeEst2/7;if(isNaN(moduleSizeEst2))return moduleSizeEst1/7;return(moduleSizeEst1+moduleSizeEst2)/14};this.calculateModuleSize=
function(topLeft,topRight,bottomLeft){return(this.calculateModuleSizeOneWay(topLeft,topRight)+this.calculateModuleSizeOneWay(topLeft,bottomLeft))/2};this.distance=function(pattern1,pattern2){xDiff=pattern1.X-pattern2.X;yDiff=pattern1.Y-pattern2.Y;return Math.sqrt(xDiff*xDiff+yDiff*yDiff)};this.computeDimension=function(topLeft,topRight,bottomLeft,moduleSize){var tltrCentersDimension=Math.round(this.distance(topLeft,topRight)/moduleSize);var tlblCentersDimension=Math.round(this.distance(topLeft,bottomLeft)/
moduleSize);var dimension=(tltrCentersDimension+tlblCentersDimension>>1)+7;switch(dimension&3){case 0:dimension++;break;case 2:dimension--;break;case 3:throw"Error";}return dimension};this.findAlignmentInRegion=function(overallEstModuleSize,estAlignmentX,estAlignmentY,allowanceFactor){var allowance=Math.floor(allowanceFactor*overallEstModuleSize);var alignmentAreaLeftX=Math.max(0,estAlignmentX-allowance);var alignmentAreaRightX=Math.min(qrcode.width-1,estAlignmentX+allowance);if(alignmentAreaRightX-
alignmentAreaLeftX<overallEstModuleSize*3)throw"Error";var alignmentAreaTopY=Math.max(0,estAlignmentY-allowance);var alignmentAreaBottomY=Math.min(qrcode.height-1,estAlignmentY+allowance);var alignmentFinder=new AlignmentPatternFinder(this.image,alignmentAreaLeftX,alignmentAreaTopY,alignmentAreaRightX-alignmentAreaLeftX,alignmentAreaBottomY-alignmentAreaTopY,overallEstModuleSize,this.resultPointCallback);return alignmentFinder.find()};this.createTransform=function(topLeft,topRight,bottomLeft,alignmentPattern,
dimension){var dimMinusThree=dimension-3.5;var bottomRightX;var bottomRightY;var sourceBottomRightX;var sourceBottomRightY;if(alignmentPattern!=null){bottomRightX=alignmentPattern.X;bottomRightY=alignmentPattern.Y;sourceBottomRightX=sourceBottomRightY=dimMinusThree-3}else{bottomRightX=topRight.X-topLeft.X+bottomLeft.X;bottomRightY=topRight.Y-topLeft.Y+bottomLeft.Y;sourceBottomRightX=sourceBottomRightY=dimMinusThree}var transform=PerspectiveTransform.quadrilateralToQuadrilateral(3.5,3.5,dimMinusThree,
3.5,sourceBottomRightX,sourceBottomRightY,3.5,dimMinusThree,topLeft.X,topLeft.Y,topRight.X,topRight.Y,bottomRightX,bottomRightY,bottomLeft.X,bottomLeft.Y);return transform};this.sampleGrid=function(image,transform,dimension){var sampler=GridSampler;return sampler.sampleGrid3(image,dimension,transform)};this.processFinderPatternInfo=function(info){var topLeft=info.TopLeft;var topRight=info.TopRight;var bottomLeft=info.BottomLeft;var moduleSize=this.calculateModuleSize(topLeft,topRight,bottomLeft);
if(moduleSize<1)throw"Error";var dimension=this.computeDimension(topLeft,topRight,bottomLeft,moduleSize);var provisionalVersion=Version.getProvisionalVersionForDimension(dimension);var modulesBetweenFPCenters=provisionalVersion.DimensionForVersion-7;var alignmentPattern=null;if(provisionalVersion.AlignmentPatternCenters.length>0){var bottomRightX=topRight.X-topLeft.X+bottomLeft.X;var bottomRightY=topRight.Y-topLeft.Y+bottomLeft.Y;var correctionToTopLeft=1-3/modulesBetweenFPCenters;var estAlignmentX=
Math.floor(topLeft.X+correctionToTopLeft*(bottomRightX-topLeft.X));var estAlignmentY=Math.floor(topLeft.Y+correctionToTopLeft*(bottomRightY-topLeft.Y));for(var i=4;i<=16;i<<=1){alignmentPattern=this.findAlignmentInRegion(moduleSize,estAlignmentX,estAlignmentY,i);break}}var transform=this.createTransform(topLeft,topRight,bottomLeft,alignmentPattern,dimension);var bits=this.sampleGrid(this.image,transform,dimension);var points;if(alignmentPattern==null)points=new Array(bottomLeft,topLeft,topRight);
else points=new Array(bottomLeft,topLeft,topRight,alignmentPattern);return new DetectorResult(bits,points)};this.detect=function(){var info=(new FinderPatternFinder).findFinderPattern(this.image);return this.processFinderPatternInfo(info)}}var FORMAT_INFO_MASK_QR=21522;
var FORMAT_INFO_DECODE_LOOKUP=new Array(new Array(21522,0),new Array(20773,1),new Array(24188,2),new Array(23371,3),new Array(17913,4),new Array(16590,5),new Array(20375,6),new Array(19104,7),new Array(30660,8),new Array(29427,9),new Array(32170,10),new Array(30877,11),new Array(26159,12),new Array(25368,13),new Array(27713,14),new Array(26998,15),new Array(5769,16),new Array(5054,17),new Array(7399,18),new Array(6608,19),new Array(1890,20),new Array(597,21),new Array(3340,22),new Array(2107,23),
new Array(13663,24),new Array(12392,25),new Array(16177,26),new Array(14854,27),new Array(9396,28),new Array(8579,29),new Array(11994,30),new Array(11245,31));var BITS_SET_IN_HALF_BYTE=new Array(0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4);
function FormatInformation(formatInfo){this.errorCorrectionLevel=ErrorCorrectionLevel.forBits(formatInfo>>3&3);this.dataMask=formatInfo&7;this.__defineGetter__("ErrorCorrectionLevel",function(){return this.errorCorrectionLevel});this.__defineGetter__("DataMask",function(){return this.dataMask});this.GetHashCode=function(){return this.errorCorrectionLevel.ordinal()<<3|dataMask};this.Equals=function(o){var other=o;return this.errorCorrectionLevel==other.errorCorrectionLevel&&this.dataMask==other.dataMask}}
FormatInformation.numBitsDiffering=function(a,b){a^=b;return BITS_SET_IN_HALF_BYTE[a&15]+BITS_SET_IN_HALF_BYTE[URShift(a,4)&15]+BITS_SET_IN_HALF_BYTE[URShift(a,8)&15]+BITS_SET_IN_HALF_BYTE[URShift(a,12)&15]+BITS_SET_IN_HALF_BYTE[URShift(a,16)&15]+BITS_SET_IN_HALF_BYTE[URShift(a,20)&15]+BITS_SET_IN_HALF_BYTE[URShift(a,24)&15]+BITS_SET_IN_HALF_BYTE[URShift(a,28)&15]};
FormatInformation.decodeFormatInformation=function(maskedFormatInfo){var formatInfo=FormatInformation.doDecodeFormatInformation(maskedFormatInfo);if(formatInfo!=null)return formatInfo;return FormatInformation.doDecodeFormatInformation(maskedFormatInfo^FORMAT_INFO_MASK_QR)};
FormatInformation.doDecodeFormatInformation=function(maskedFormatInfo){var bestDifference=4294967295;var bestFormatInfo=0;for(var i=0;i<FORMAT_INFO_DECODE_LOOKUP.length;i++){var decodeInfo=FORMAT_INFO_DECODE_LOOKUP[i];var targetInfo=decodeInfo[0];if(targetInfo==maskedFormatInfo)return new FormatInformation(decodeInfo[1]);var bitsDifference=this.numBitsDiffering(maskedFormatInfo,targetInfo);if(bitsDifference<bestDifference){bestFormatInfo=decodeInfo[1];bestDifference=bitsDifference}}if(bestDifference<=
3)return new FormatInformation(bestFormatInfo);return null};function ErrorCorrectionLevel(ordinal,bits,name){this.ordinal_Renamed_Field=ordinal;this.bits=bits;this.name=name;this.__defineGetter__("Bits",function(){return this.bits});this.__defineGetter__("Name",function(){return this.name});this.ordinal=function(){return this.ordinal_Renamed_Field}}ErrorCorrectionLevel.forBits=function(bits){if(bits<0||bits>=FOR_BITS.length)throw"ArgumentException";return FOR_BITS[bits]};
var L=new ErrorCorrectionLevel(0,1,"L");var M=new ErrorCorrectionLevel(1,0,"M");var Q=new ErrorCorrectionLevel(2,3,"Q");var H=new ErrorCorrectionLevel(3,2,"H");var FOR_BITS=new Array(M,L,H,Q);
function BitMatrix(width,height){if(!height)height=width;if(width<1||height<1)throw"Both dimensions must be greater than 0";this.width=width;this.height=height;var rowSize=width>>5;if((width&31)!=0)rowSize++;this.rowSize=rowSize;this.bits=new Array(rowSize*height);for(var i=0;i<this.bits.length;i++)this.bits[i]=0;this.__defineGetter__("Width",function(){return this.width});this.__defineGetter__("Height",function(){return this.height});this.__defineGetter__("Dimension",function(){if(this.width!=this.height)throw"Can't call getDimension() on a non-square matrix";
return this.width});this.get_Renamed=function(x,y){var offset=y*this.rowSize+(x>>5);return(URShift(this.bits[offset],x&31)&1)!=0};this.set_Renamed=function(x,y){var offset=y*this.rowSize+(x>>5);this.bits[offset]|=1<<(x&31)};this.flip=function(x,y){var offset=y*this.rowSize+(x>>5);this.bits[offset]^=1<<(x&31)};this.clear=function(){var max=this.bits.length;for(var i=0;i<max;i++)this.bits[i]=0};this.setRegion=function(left,top,width,height){if(top<0||left<0)throw"Left and top must be nonnegative";if(height<
1||width<1)throw"Height and width must be at least 1";var right=left+width;var bottom=top+height;if(bottom>this.height||right>this.width)throw"The region must fit inside the matrix";for(var y=top;y<bottom;y++){var offset=y*this.rowSize;for(var x=left;x<right;x++)this.bits[offset+(x>>5)]|=1<<(x&31)}}}
function DataBlock(numDataCodewords,codewords){this.numDataCodewords=numDataCodewords;this.codewords=codewords;this.__defineGetter__("NumDataCodewords",function(){return this.numDataCodewords});this.__defineGetter__("Codewords",function(){return this.codewords})}
DataBlock.getDataBlocks=function(rawCodewords,version,ecLevel){if(rawCodewords.length!=version.TotalCodewords)throw"ArgumentException";var ecBlocks=version.getECBlocksForLevel(ecLevel);var totalBlocks=0;var ecBlockArray=ecBlocks.getECBlocks();for(var i=0;i<ecBlockArray.length;i++)totalBlocks+=ecBlockArray[i].Count;var result=new Array(totalBlocks);var numResultBlocks=0;for(var j=0;j<ecBlockArray.length;j++){var ecBlock=ecBlockArray[j];for(var i=0;i<ecBlock.Count;i++){var numDataCodewords=ecBlock.DataCodewords;
var numBlockCodewords=ecBlocks.ECCodewordsPerBlock+numDataCodewords;result[numResultBlocks++]=new DataBlock(numDataCodewords,new Array(numBlockCodewords))}}var shorterBlocksTotalCodewords=result[0].codewords.length;var longerBlocksStartAt=result.length-1;while(longerBlocksStartAt>=0){var numCodewords=result[longerBlocksStartAt].codewords.length;if(numCodewords==shorterBlocksTotalCodewords)break;longerBlocksStartAt--}longerBlocksStartAt++;var shorterBlocksNumDataCodewords=shorterBlocksTotalCodewords-
ecBlocks.ECCodewordsPerBlock;var rawCodewordsOffset=0;for(var i=0;i<shorterBlocksNumDataCodewords;i++)for(var j=0;j<numResultBlocks;j++)result[j].codewords[i]=rawCodewords[rawCodewordsOffset++];for(var j=longerBlocksStartAt;j<numResultBlocks;j++)result[j].codewords[shorterBlocksNumDataCodewords]=rawCodewords[rawCodewordsOffset++];var max=result[0].codewords.length;for(var i=shorterBlocksNumDataCodewords;i<max;i++)for(var j=0;j<numResultBlocks;j++){var iOffset=j<longerBlocksStartAt?i:i+1;result[j].codewords[iOffset]=
rawCodewords[rawCodewordsOffset++]}return result};
function BitMatrixParser(bitMatrix){var dimension=bitMatrix.Dimension;if(dimension<21||(dimension&3)!=1)throw"Error BitMatrixParser";this.bitMatrix=bitMatrix;this.parsedVersion=null;this.parsedFormatInfo=null;this.copyBit=function(i,j,versionBits){return this.bitMatrix.get_Renamed(i,j)?versionBits<<1|1:versionBits<<1};this.readFormatInformation=function(){if(this.parsedFormatInfo!=null)return this.parsedFormatInfo;var formatInfoBits=0;for(var i=0;i<6;i++)formatInfoBits=this.copyBit(i,8,formatInfoBits);
formatInfoBits=this.copyBit(7,8,formatInfoBits);formatInfoBits=this.copyBit(8,8,formatInfoBits);formatInfoBits=this.copyBit(8,7,formatInfoBits);for(var j=5;j>=0;j--)formatInfoBits=this.copyBit(8,j,formatInfoBits);this.parsedFormatInfo=FormatInformation.decodeFormatInformation(formatInfoBits);if(this.parsedFormatInfo!=null)return this.parsedFormatInfo;var dimension=this.bitMatrix.Dimension;formatInfoBits=0;var iMin=dimension-8;for(var i=dimension-1;i>=iMin;i--)formatInfoBits=this.copyBit(i,8,formatInfoBits);
for(var j=dimension-7;j<dimension;j++)formatInfoBits=this.copyBit(8,j,formatInfoBits);this.parsedFormatInfo=FormatInformation.decodeFormatInformation(formatInfoBits);if(this.parsedFormatInfo!=null)return this.parsedFormatInfo;throw"Error readFormatInformation";};this.readVersion=function(){if(this.parsedVersion!=null)return this.parsedVersion;var dimension=this.bitMatrix.Dimension;var provisionalVersion=dimension-17>>2;if(provisionalVersion<=6)return Version.getVersionForNumber(provisionalVersion);
var versionBits=0;var ijMin=dimension-11;for(var j=5;j>=0;j--)for(var i=dimension-9;i>=ijMin;i--)versionBits=this.copyBit(i,j,versionBits);this.parsedVersion=Version.decodeVersionInformation(versionBits);if(this.parsedVersion!=null&&this.parsedVersion.DimensionForVersion==dimension)return this.parsedVersion;versionBits=0;for(var i=5;i>=0;i--)for(var j=dimension-9;j>=ijMin;j--)versionBits=this.copyBit(i,j,versionBits);this.parsedVersion=Version.decodeVersionInformation(versionBits);if(this.parsedVersion!=
null&&this.parsedVersion.DimensionForVersion==dimension)return this.parsedVersion;throw"Error readVersion";};this.readCodewords=function(){var formatInfo=this.readFormatInformation();var version=this.readVersion();var dataMask=DataMask.forReference(formatInfo.DataMask);var dimension=this.bitMatrix.Dimension;dataMask.unmaskBitMatrix(this.bitMatrix,dimension);var functionPattern=version.buildFunctionPattern();var readingUp=true;var result=new Array(version.TotalCodewords);var resultOffset=0;var currentByte=
0;var bitsRead=0;for(var j=dimension-1;j>0;j-=2){if(j==6)j--;for(var count=0;count<dimension;count++){var i=readingUp?dimension-1-count:count;for(var col=0;col<2;col++)if(!functionPattern.get_Renamed(j-col,i)){bitsRead++;currentByte<<=1;if(this.bitMatrix.get_Renamed(j-col,i))currentByte|=1;if(bitsRead==8){result[resultOffset++]=currentByte;bitsRead=0;currentByte=0}}}readingUp^=true}if(resultOffset!=version.TotalCodewords)throw"Error readCodewords";return result}}DataMask={};
DataMask.forReference=function(reference){if(reference<0||reference>7)throw"System.ArgumentException";return DataMask.DATA_MASKS[reference]};function DataMask000(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){return(i+j&1)==0}}
function DataMask001(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){return(i&1)==0}}function DataMask010(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){return j%3==0}}
function DataMask011(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){return(i+j)%3==0}}function DataMask100(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){return(URShift(i,1)+j/3&1)==0}}
function DataMask101(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){var temp=i*j;return(temp&1)+temp%3==0}}function DataMask110(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){var temp=i*j;return((temp&1)+temp%3&1)==0}}
function DataMask111(){this.unmaskBitMatrix=function(bits,dimension){for(var i=0;i<dimension;i++)for(var j=0;j<dimension;j++)if(this.isMasked(i,j))bits.flip(j,i)};this.isMasked=function(i,j){return((i+j&1)+i*j%3&1)==0}}DataMask.DATA_MASKS=new Array(new DataMask000,new DataMask001,new DataMask010,new DataMask011,new DataMask100,new DataMask101,new DataMask110,new DataMask111);
function ReedSolomonDecoder(field){this.field=field;this.decode=function(received,twoS){var poly=new GF256Poly(this.field,received);var syndromeCoefficients=new Array(twoS);for(var i=0;i<syndromeCoefficients.length;i++)syndromeCoefficients[i]=0;var dataMatrix=false;var noError=true;for(var i=0;i<twoS;i++){var eval=poly.evaluateAt(this.field.exp(dataMatrix?i+1:i));syndromeCoefficients[syndromeCoefficients.length-1-i]=eval;if(eval!=0)noError=false}if(noError)return;var syndrome=new GF256Poly(this.field,
syndromeCoefficients);var sigmaOmega=this.runEuclideanAlgorithm(this.field.buildMonomial(twoS,1),syndrome,twoS);var sigma=sigmaOmega[0];var omega=sigmaOmega[1];var errorLocations=this.findErrorLocations(sigma);var errorMagnitudes=this.findErrorMagnitudes(omega,errorLocations,dataMatrix);for(var i=0;i<errorLocations.length;i++){var position=received.length-1-this.field.log(errorLocations[i]);if(position<0)throw"ReedSolomonException Bad error location";received[position]=GF256.addOrSubtract(received[position],
errorMagnitudes[i])}};this.runEuclideanAlgorithm=function(a,b,R){if(a.Degree<b.Degree){var temp=a;a=b;b=temp}var rLast=a;var r=b;var sLast=this.field.One;var s=this.field.Zero;var tLast=this.field.Zero;var t=this.field.One;while(r.Degree>=Math.floor(R/2)){var rLastLast=rLast;var sLastLast=sLast;var tLastLast=tLast;rLast=r;sLast=s;tLast=t;if(rLast.Zero)throw"r_{i-1} was zero";r=rLastLast;var q=this.field.Zero;var denominatorLeadingTerm=rLast.getCoefficient(rLast.Degree);var dltInverse=this.field.inverse(denominatorLeadingTerm);
while(r.Degree>=rLast.Degree&&!r.Zero){var degreeDiff=r.Degree-rLast.Degree;var scale=this.field.multiply(r.getCoefficient(r.Degree),dltInverse);q=q.addOrSubtract(this.field.buildMonomial(degreeDiff,scale));r=r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff,scale))}s=q.multiply1(sLast).addOrSubtract(sLastLast);t=q.multiply1(tLast).addOrSubtract(tLastLast)}var sigmaTildeAtZero=t.getCoefficient(0);if(sigmaTildeAtZero==0)throw"ReedSolomonException sigmaTilde(0) was zero";var inverse=this.field.inverse(sigmaTildeAtZero);
var sigma=t.multiply2(inverse);var omega=r.multiply2(inverse);return new Array(sigma,omega)};this.findErrorLocations=function(errorLocator){var numErrors=errorLocator.Degree;if(numErrors==1)return new Array(errorLocator.getCoefficient(1));var result=new Array(numErrors);var e=0;for(var i=1;i<256&&e<numErrors;i++)if(errorLocator.evaluateAt(i)==0){result[e]=this.field.inverse(i);e++}if(e!=numErrors)throw"Error locator degree does not match number of roots";return result};this.findErrorMagnitudes=function(errorEvaluator,
errorLocations,dataMatrix){var s=errorLocations.length;var result=new Array(s);for(var i=0;i<s;i++){var xiInverse=this.field.inverse(errorLocations[i]);var denominator=1;for(var j=0;j<s;j++)if(i!=j)denominator=this.field.multiply(denominator,GF256.addOrSubtract(1,this.field.multiply(errorLocations[j],xiInverse)));result[i]=this.field.multiply(errorEvaluator.evaluateAt(xiInverse),this.field.inverse(denominator));if(dataMatrix)result[i]=this.field.multiply(result[i],xiInverse)}return result}}
function GF256Poly(field,coefficients){if(coefficients==null||coefficients.length==0)throw"System.ArgumentException";this.field=field;var coefficientsLength=coefficients.length;if(coefficientsLength>1&&coefficients[0]==0){var firstNonZero=1;while(firstNonZero<coefficientsLength&&coefficients[firstNonZero]==0)firstNonZero++;if(firstNonZero==coefficientsLength)this.coefficients=field.Zero.coefficients;else{this.coefficients=new Array(coefficientsLength-firstNonZero);for(var i=0;i<this.coefficients.length;i++)this.coefficients[i]=
0;for(var ci=0;ci<this.coefficients.length;ci++)this.coefficients[ci]=coefficients[firstNonZero+ci]}}else this.coefficients=coefficients;this.__defineGetter__("Zero",function(){return this.coefficients[0]==0});this.__defineGetter__("Degree",function(){return this.coefficients.length-1});this.__defineGetter__("Coefficients",function(){return this.coefficients});this.getCoefficient=function(degree){return this.coefficients[this.coefficients.length-1-degree]};this.evaluateAt=function(a){if(a==0)return this.getCoefficient(0);
var size=this.coefficients.length;if(a==1){var result=0;for(var i=0;i<size;i++)result=GF256.addOrSubtract(result,this.coefficients[i]);return result}var result2=this.coefficients[0];for(var i=1;i<size;i++)result2=GF256.addOrSubtract(this.field.multiply(a,result2),this.coefficients[i]);return result2};this.addOrSubtract=function(other){if(this.field!=other.field)throw"GF256Polys do not have same GF256 field";if(this.Zero)return other;if(other.Zero)return this;var smallerCoefficients=this.coefficients;
var largerCoefficients=other.coefficients;if(smallerCoefficients.length>largerCoefficients.length){var temp=smallerCoefficients;smallerCoefficients=largerCoefficients;largerCoefficients=temp}var sumDiff=new Array(largerCoefficients.length);var lengthDiff=largerCoefficients.length-smallerCoefficients.length;for(var ci=0;ci<lengthDiff;ci++)sumDiff[ci]=largerCoefficients[ci];for(var i=lengthDiff;i<largerCoefficients.length;i++)sumDiff[i]=GF256.addOrSubtract(smallerCoefficients[i-lengthDiff],largerCoefficients[i]);
return new GF256Poly(field,sumDiff)};this.multiply1=function(other){if(this.field!=other.field)throw"GF256Polys do not have same GF256 field";if(this.Zero||other.Zero)return this.field.Zero;var aCoefficients=this.coefficients;var aLength=aCoefficients.length;var bCoefficients=other.coefficients;var bLength=bCoefficients.length;var product=new Array(aLength+bLength-1);for(var i=0;i<aLength;i++){var aCoeff=aCoefficients[i];for(var j=0;j<bLength;j++)product[i+j]=GF256.addOrSubtract(product[i+j],this.field.multiply(aCoeff,
bCoefficients[j]))}return new GF256Poly(this.field,product)};this.multiply2=function(scalar){if(scalar==0)return this.field.Zero;if(scalar==1)return this;var size=this.coefficients.length;var product=new Array(size);for(var i=0;i<size;i++)product[i]=this.field.multiply(this.coefficients[i],scalar);return new GF256Poly(this.field,product)};this.multiplyByMonomial=function(degree,coefficient){if(degree<0)throw"System.ArgumentException";if(coefficient==0)return this.field.Zero;var size=this.coefficients.length;
var product=new Array(size+degree);for(var i=0;i<product.length;i++)product[i]=0;for(var i=0;i<size;i++)product[i]=this.field.multiply(this.coefficients[i],coefficient);return new GF256Poly(this.field,product)};this.divide=function(other){if(this.field!=other.field)throw"GF256Polys do not have same GF256 field";if(other.Zero)throw"Divide by 0";var quotient=this.field.Zero;var remainder=this;var denominatorLeadingTerm=other.getCoefficient(other.Degree);var inverseDenominatorLeadingTerm=this.field.inverse(denominatorLeadingTerm);
while(remainder.Degree>=other.Degree&&!remainder.Zero){var degreeDifference=remainder.Degree-other.Degree;var scale=this.field.multiply(remainder.getCoefficient(remainder.Degree),inverseDenominatorLeadingTerm);var term=other.multiplyByMonomial(degreeDifference,scale);var iterationQuotient=this.field.buildMonomial(degreeDifference,scale);quotient=quotient.addOrSubtract(iterationQuotient);remainder=remainder.addOrSubtract(term)}return new Array(quotient,remainder)}}
function GF256(primitive){this.expTable=new Array(256);this.logTable=new Array(256);var x=1;for(var i=0;i<256;i++){this.expTable[i]=x;x<<=1;if(x>=256)x^=primitive}for(var i=0;i<255;i++)this.logTable[this.expTable[i]]=i;var at0=new Array(1);at0[0]=0;this.zero=new GF256Poly(this,new Array(at0));var at1=new Array(1);at1[0]=1;this.one=new GF256Poly(this,new Array(at1));this.__defineGetter__("Zero",function(){return this.zero});this.__defineGetter__("One",function(){return this.one});this.buildMonomial=
function(degree,coefficient){if(degree<0)throw"System.ArgumentException";if(coefficient==0)return zero;var coefficients=new Array(degree+1);for(var i=0;i<coefficients.length;i++)coefficients[i]=0;coefficients[0]=coefficient;return new GF256Poly(this,coefficients)};this.exp=function(a){return this.expTable[a]};this.log=function(a){if(a==0)throw"System.ArgumentException";return this.logTable[a]};this.inverse=function(a){if(a==0)throw"System.ArithmeticException";return this.expTable[255-this.logTable[a]]};
this.multiply=function(a,b){if(a==0||b==0)return 0;if(a==1)return b;if(b==1)return a;return this.expTable[(this.logTable[a]+this.logTable[b])%255]}}GF256.QR_CODE_FIELD=new GF256(285);GF256.DATA_MATRIX_FIELD=new GF256(301);GF256.addOrSubtract=function(a,b){return a^b};Decoder={};Decoder.rsDecoder=new ReedSolomonDecoder(GF256.QR_CODE_FIELD);
Decoder.correctErrors=function(codewordBytes,numDataCodewords){var numCodewords=codewordBytes.length;var codewordsInts=new Array(numCodewords);for(var i=0;i<numCodewords;i++)codewordsInts[i]=codewordBytes[i]&255;var numECCodewords=codewordBytes.length-numDataCodewords;try{Decoder.rsDecoder.decode(codewordsInts,numECCodewords)}catch(rse){throw rse;}for(var i=0;i<numDataCodewords;i++)codewordBytes[i]=codewordsInts[i]};
Decoder.decode=function(bits){var parser=new BitMatrixParser(bits);var version=parser.readVersion();var ecLevel=parser.readFormatInformation().ErrorCorrectionLevel;var codewords=parser.readCodewords();var dataBlocks=DataBlock.getDataBlocks(codewords,version,ecLevel);var totalBytes=0;for(var i=0;i<dataBlocks.length;i++)totalBytes+=dataBlocks[i].NumDataCodewords;var resultBytes=new Array(totalBytes);var resultOffset=0;for(var j=0;j<dataBlocks.length;j++){var dataBlock=dataBlocks[j];var codewordBytes=
dataBlock.Codewords;var numDataCodewords=dataBlock.NumDataCodewords;Decoder.correctErrors(codewordBytes,numDataCodewords);for(var i=0;i<numDataCodewords;i++)resultBytes[resultOffset++]=codewordBytes[i]}var reader=new QRCodeDataBlockReader(resultBytes,version.VersionNumber,ecLevel.Bits);return reader};qrcode={};qrcode.imagedata=null;qrcode.width=0;qrcode.height=0;qrcode.qrCodeSymbol=null;qrcode.debug=false;qrcode.maxImgSize=1024*1024;qrcode.sourceCanvas=null;
qrcode.sizeOfDataLengthInfo=[[10,9,8,8],[12,11,16,10],[14,13,16,12]];qrcode.callback=null;
qrcode.decode=function(src){if(arguments.length==0){var canvas_qr=qrcode.sourceCanvas?qrcode.sourceCanvas:document.getElementById("qr-canvas");var context=canvas_qr.getContext("2d");qrcode.width=canvas_qr.width;qrcode.height=canvas_qr.height;qrcode.imagedata=context.getImageData(0,0,qrcode.width,qrcode.height);qrcode.result=qrcode.process(context);if(qrcode.callback!=null)qrcode.callback(qrcode.result);return qrcode.result}else{var image=new Image;image.onload=function(){var canvas_qr=document.createElement("canvas");
var context=canvas_qr.getContext("2d");var nheight=image.height;var nwidth=image.width;if(image.width*image.height>qrcode.maxImgSize){var ir=image.width/image.height;nheight=Math.sqrt(qrcode.maxImgSize/ir);nwidth=ir*nheight}canvas_qr.width=nwidth;canvas_qr.height=nheight;context.drawImage(image,0,0,canvas_qr.width,canvas_qr.height);qrcode.width=canvas_qr.width;qrcode.height=canvas_qr.height;try{qrcode.imagedata=context.getImageData(0,0,canvas_qr.width,canvas_qr.height)}catch(e){qrcode.result="Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
if(qrcode.callback!=null)qrcode.callback(qrcode.result);return}try{qrcode.result=qrcode.process(context)}catch(e){qrcode.result="error decoding QR Code"}if(qrcode.callback!=null)qrcode.callback(qrcode.result)};image.src=src}};qrcode.isUrl=function(s){var regexp=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return regexp.test(s)};
qrcode.decode_url=function(s){var escaped="";try{escaped=escape(s)}catch(e){escaped=s}var ret="";try{ret=decodeURIComponent(escaped)}catch(e){ret=escaped}return ret};qrcode.decode_utf8=function(s){if(qrcode.isUrl(s))return qrcode.decode_url(s);else return s};
qrcode.process=function(ctx){var start=(new Date).getTime();var image=qrcode.grayScaleToBitmap(qrcode.grayscale());if(qrcode.debug){for(var y=0;y<qrcode.height;y++)for(var x=0;x<qrcode.width;x++){var point=x*4+y*qrcode.width*4;qrcode.imagedata.data[point]=image[x+y*qrcode.width]?0:0;qrcode.imagedata.data[point+1]=image[x+y*qrcode.width]?0:0;qrcode.imagedata.data[point+2]=image[x+y*qrcode.width]?255:0}ctx.putImageData(qrcode.imagedata,0,0)}var detector=new Detector(image);var qRCodeMatrix=detector.detect();
if(qrcode.debug)ctx.putImageData(qrcode.imagedata,0,0);var reader=Decoder.decode(qRCodeMatrix.bits);var data=reader.DataByte;var str="";for(var i=0;i<data.length;i++)for(var j=0;j<data[i].length;j++)str+=String.fromCharCode(data[i][j]);var end=(new Date).getTime();var time=end-start;return qrcode.decode_utf8(str)};
qrcode.getPixel=function(x,y){if(qrcode.width<x)throw"point error";if(qrcode.height<y)throw"point error";point=x*4+y*qrcode.width*4;p=(qrcode.imagedata.data[point]*33+qrcode.imagedata.data[point+1]*34+qrcode.imagedata.data[point+2]*33)/100;return p};qrcode.binarize=function(th){var ret=new Array(qrcode.width*qrcode.height);for(var y=0;y<qrcode.height;y++)for(var x=0;x<qrcode.width;x++){var gray=qrcode.getPixel(x,y);ret[x+y*qrcode.width]=gray<=th?true:false}return ret};
qrcode.getMiddleBrightnessPerArea=function(image){var numSqrtArea=4;var areaWidth=Math.floor(qrcode.width/numSqrtArea);var areaHeight=Math.floor(qrcode.height/numSqrtArea);var minmax=new Array(numSqrtArea);for(var i=0;i<numSqrtArea;i++){minmax[i]=new Array(numSqrtArea);for(var i2=0;i2<numSqrtArea;i2++)minmax[i][i2]=new Array(0,0)}for(var ay=0;ay<numSqrtArea;ay++)for(var ax=0;ax<numSqrtArea;ax++){minmax[ax][ay][0]=255;for(var dy=0;dy<areaHeight;dy++)for(var dx=0;dx<areaWidth;dx++){var target=image[areaWidth*
ax+dx+(areaHeight*ay+dy)*qrcode.width];if(target<minmax[ax][ay][0])minmax[ax][ay][0]=target;if(target>minmax[ax][ay][1])minmax[ax][ay][1]=target}}var middle=new Array(numSqrtArea);for(var i3=0;i3<numSqrtArea;i3++)middle[i3]=new Array(numSqrtArea);for(var ay=0;ay<numSqrtArea;ay++)for(var ax=0;ax<numSqrtArea;ax++)middle[ax][ay]=Math.floor((minmax[ax][ay][0]+minmax[ax][ay][1])/2);return middle};
qrcode.grayScaleToBitmap=function(grayScale){var middle=qrcode.getMiddleBrightnessPerArea(grayScale);var sqrtNumArea=middle.length;var areaWidth=Math.floor(qrcode.width/sqrtNumArea);var areaHeight=Math.floor(qrcode.height/sqrtNumArea);var bitmap=new Array(qrcode.height*qrcode.width);for(var ay=0;ay<sqrtNumArea;ay++)for(var ax=0;ax<sqrtNumArea;ax++)for(var dy=0;dy<areaHeight;dy++)for(var dx=0;dx<areaWidth;dx++)bitmap[areaWidth*ax+dx+(areaHeight*ay+dy)*qrcode.width]=grayScale[areaWidth*ax+dx+(areaHeight*
ay+dy)*qrcode.width]<middle[ax][ay]?true:false;return bitmap};qrcode.grayscale=function(){var ret=new Array(qrcode.width*qrcode.height);for(var y=0;y<qrcode.height;y++)for(var x=0;x<qrcode.width;x++){var gray=qrcode.getPixel(x,y);ret[x+y*qrcode.width]=gray}return ret};function URShift(number,bits){if(number>=0)return number>>bits;else return(number>>bits)+(2<<~bits)}
var MIN_SKIP=3;var MAX_MODULES=57;var INTEGER_MATH_SHIFT=8;var CENTER_QUORUM=2;
qrcode.orderBestPatterns=function(patterns){function distance(pattern1,pattern2){xDiff=pattern1.X-pattern2.X;yDiff=pattern1.Y-pattern2.Y;return Math.sqrt(xDiff*xDiff+yDiff*yDiff)}function crossProductZ(pointA,pointB,pointC){var bX=pointB.x;var bY=pointB.y;return(pointC.x-bX)*(pointA.y-bY)-(pointC.y-bY)*(pointA.x-bX)}var zeroOneDistance=distance(patterns[0],patterns[1]);var oneTwoDistance=distance(patterns[1],patterns[2]);var zeroTwoDistance=distance(patterns[0],patterns[2]);var pointA,pointB,pointC;
if(oneTwoDistance>=zeroOneDistance&&oneTwoDistance>=zeroTwoDistance){pointB=patterns[0];pointA=patterns[1];pointC=patterns[2]}else if(zeroTwoDistance>=oneTwoDistance&&zeroTwoDistance>=zeroOneDistance){pointB=patterns[1];pointA=patterns[0];pointC=patterns[2]}else{pointB=patterns[2];pointA=patterns[0];pointC=patterns[1]}if(crossProductZ(pointA,pointB,pointC)<0){var temp=pointA;pointA=pointC;pointC=temp}patterns[0]=pointA;patterns[1]=pointB;patterns[2]=pointC};
function FinderPattern(posX,posY,estimatedModuleSize){this.x=posX;this.y=posY;this.count=1;this.estimatedModuleSize=estimatedModuleSize;this.__defineGetter__("EstimatedModuleSize",function(){return this.estimatedModuleSize});this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("X",function(){return this.x});this.__defineGetter__("Y",function(){return this.y});this.incrementCount=function(){this.count++};this.aboutEquals=function(moduleSize,i,j){if(Math.abs(i-this.y)<=
moduleSize&&Math.abs(j-this.x)<=moduleSize){var moduleSizeDiff=Math.abs(moduleSize-this.estimatedModuleSize);return moduleSizeDiff<=1||moduleSizeDiff/this.estimatedModuleSize<=1}return false}}
function FinderPatternInfo(patternCenters){this.bottomLeft=patternCenters[0];this.topLeft=patternCenters[1];this.topRight=patternCenters[2];this.__defineGetter__("BottomLeft",function(){return this.bottomLeft});this.__defineGetter__("TopLeft",function(){return this.topLeft});this.__defineGetter__("TopRight",function(){return this.topRight})}
function FinderPatternFinder(){this.image=null;this.possibleCenters=[];this.hasSkipped=false;this.crossCheckStateCount=new Array(0,0,0,0,0);this.resultPointCallback=null;this.__defineGetter__("CrossCheckStateCount",function(){this.crossCheckStateCount[0]=0;this.crossCheckStateCount[1]=0;this.crossCheckStateCount[2]=0;this.crossCheckStateCount[3]=0;this.crossCheckStateCount[4]=0;return this.crossCheckStateCount});this.foundPatternCross=function(stateCount){var totalModuleSize=0;for(var i=0;i<5;i++){var count=
stateCount[i];if(count==0)return false;totalModuleSize+=count}if(totalModuleSize<7)return false;var moduleSize=Math.floor((totalModuleSize<<INTEGER_MATH_SHIFT)/7);var maxVariance=Math.floor(moduleSize/2);return Math.abs(moduleSize-(stateCount[0]<<INTEGER_MATH_SHIFT))<maxVariance&&Math.abs(moduleSize-(stateCount[1]<<INTEGER_MATH_SHIFT))<maxVariance&&Math.abs(3*moduleSize-(stateCount[2]<<INTEGER_MATH_SHIFT))<3*maxVariance&&Math.abs(moduleSize-(stateCount[3]<<INTEGER_MATH_SHIFT))<maxVariance&&Math.abs(moduleSize-
(stateCount[4]<<INTEGER_MATH_SHIFT))<maxVariance};this.centerFromEnd=function(stateCount,end){return end-stateCount[4]-stateCount[3]-stateCount[2]/2};this.crossCheckVertical=function(startI,centerJ,maxCount,originalStateCountTotal){var image=this.image;var maxI=qrcode.height;var stateCount=this.CrossCheckStateCount;var i=startI;while(i>=0&&image[centerJ+i*qrcode.width]){stateCount[2]++;i--}if(i<0)return NaN;while(i>=0&&!image[centerJ+i*qrcode.width]&&stateCount[1]<=maxCount){stateCount[1]++;i--}if(i<
0||stateCount[1]>maxCount)return NaN;while(i>=0&&image[centerJ+i*qrcode.width]&&stateCount[0]<=maxCount){stateCount[0]++;i--}if(stateCount[0]>maxCount)return NaN;i=startI+1;while(i<maxI&&image[centerJ+i*qrcode.width]){stateCount[2]++;i++}if(i==maxI)return NaN;while(i<maxI&&!image[centerJ+i*qrcode.width]&&stateCount[3]<maxCount){stateCount[3]++;i++}if(i==maxI||stateCount[3]>=maxCount)return NaN;while(i<maxI&&image[centerJ+i*qrcode.width]&&stateCount[4]<maxCount){stateCount[4]++;i++}if(stateCount[4]>=
maxCount)return NaN;var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+stateCount[3]+stateCount[4];if(5*Math.abs(stateCountTotal-originalStateCountTotal)>=2*originalStateCountTotal)return NaN;return this.foundPatternCross(stateCount)?this.centerFromEnd(stateCount,i):NaN};this.crossCheckHorizontal=function(startJ,centerI,maxCount,originalStateCountTotal){var image=this.image;var maxJ=qrcode.width;var stateCount=this.CrossCheckStateCount;var j=startJ;while(j>=0&&image[j+centerI*qrcode.width]){stateCount[2]++;
j--}if(j<0)return NaN;while(j>=0&&!image[j+centerI*qrcode.width]&&stateCount[1]<=maxCount){stateCount[1]++;j--}if(j<0||stateCount[1]>maxCount)return NaN;while(j>=0&&image[j+centerI*qrcode.width]&&stateCount[0]<=maxCount){stateCount[0]++;j--}if(stateCount[0]>maxCount)return NaN;j=startJ+1;while(j<maxJ&&image[j+centerI*qrcode.width]){stateCount[2]++;j++}if(j==maxJ)return NaN;while(j<maxJ&&!image[j+centerI*qrcode.width]&&stateCount[3]<maxCount){stateCount[3]++;j++}if(j==maxJ||stateCount[3]>=maxCount)return NaN;
while(j<maxJ&&image[j+centerI*qrcode.width]&&stateCount[4]<maxCount){stateCount[4]++;j++}if(stateCount[4]>=maxCount)return NaN;var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+stateCount[3]+stateCount[4];if(5*Math.abs(stateCountTotal-originalStateCountTotal)>=originalStateCountTotal)return NaN;return this.foundPatternCross(stateCount)?this.centerFromEnd(stateCount,j):NaN};this.handlePossibleCenter=function(stateCount,i,j){var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+
stateCount[3]+stateCount[4];var centerJ=this.centerFromEnd(stateCount,j);var centerI=this.crossCheckVertical(i,Math.floor(centerJ),stateCount[2],stateCountTotal);if(!isNaN(centerI)){centerJ=this.crossCheckHorizontal(Math.floor(centerJ),Math.floor(centerI),stateCount[2],stateCountTotal);if(!isNaN(centerJ)){var estimatedModuleSize=stateCountTotal/7;var found=false;var max=this.possibleCenters.length;for(var index=0;index<max;index++){var center=this.possibleCenters[index];if(center.aboutEquals(estimatedModuleSize,
centerI,centerJ)){center.incrementCount();found=true;break}}if(!found){var point=new FinderPattern(centerJ,centerI,estimatedModuleSize);this.possibleCenters.push(point);if(this.resultPointCallback!=null)this.resultPointCallback.foundPossibleResultPoint(point)}return true}}return false};this.selectBestPatterns=function(){var startSize=this.possibleCenters.length;if(startSize<3)throw"Couldn't find enough finder patterns";if(startSize>3){var totalModuleSize=0;var square=0;for(var i=0;i<startSize;i++){var centerValue=
this.possibleCenters[i].EstimatedModuleSize;totalModuleSize+=centerValue;square+=centerValue*centerValue}var average=totalModuleSize/startSize;this.possibleCenters.sort(function(center1,center2){var dA=Math.abs(center2.EstimatedModuleSize-average);var dB=Math.abs(center1.EstimatedModuleSize-average);if(dA<dB)return-1;else if(dA==dB)return 0;else return 1});var stdDev=Math.sqrt(square/startSize-average*average);var limit=Math.max(.2*average,stdDev);for(var i=0;i<this.possibleCenters.length&&this.possibleCenters.length>
3;i++){var pattern=this.possibleCenters[i];if(Math.abs(pattern.EstimatedModuleSize-average)>limit){this.possibleCenters.splice(i, 1);i--;}}}if(this.possibleCenters.length>3)this.possibleCenters.sort(function(a,b){if(a.count>b.count)return-1;if(a.count<b.count)return 1;return 0});return new Array(this.possibleCenters[0],this.possibleCenters[1],this.possibleCenters[2])};this.findRowSkip=function(){var max=this.possibleCenters.length;if(max<=1)return 0;var firstConfirmedCenter=null;for(var i=0;i<max;i++){var center=
this.possibleCenters[i];if(center.Count>=CENTER_QUORUM)if(firstConfirmedCenter==null)firstConfirmedCenter=center;else{this.hasSkipped=true;return Math.floor((Math.abs(firstConfirmedCenter.X-center.X)-Math.abs(firstConfirmedCenter.Y-center.Y))/2)}}return 0};this.haveMultiplyConfirmedCenters=function(){var confirmedCount=0;var totalModuleSize=0;var max=this.possibleCenters.length;for(var i=0;i<max;i++){var pattern=this.possibleCenters[i];if(pattern.Count>=CENTER_QUORUM){confirmedCount++;totalModuleSize+=
pattern.EstimatedModuleSize}}if(confirmedCount<3)return false;var average=totalModuleSize/max;var totalDeviation=0;for(var i=0;i<max;i++){pattern=this.possibleCenters[i];totalDeviation+=Math.abs(pattern.EstimatedModuleSize-average)}return totalDeviation<=.05*totalModuleSize};this.findFinderPattern=function(image){var tryHarder=false;this.image=image;var maxI=qrcode.height;var maxJ=qrcode.width;var iSkip=Math.floor(3*maxI/(4*MAX_MODULES));if(iSkip<MIN_SKIP||tryHarder)iSkip=MIN_SKIP;var done=false;
var stateCount=new Array(5);for(var i=iSkip-1;i<maxI&&!done;i+=iSkip){stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;stateCount[3]=0;stateCount[4]=0;var currentState=0;for(var j=0;j<maxJ;j++)if(image[j+i*qrcode.width]){if((currentState&1)==1)currentState++;stateCount[currentState]++}else if((currentState&1)==0)if(currentState==4)if(this.foundPatternCross(stateCount)){var confirmed=this.handlePossibleCenter(stateCount,i,j);if(confirmed){iSkip=2;if(this.hasSkipped)done=this.haveMultiplyConfirmedCenters();
else{var rowSkip=this.findRowSkip();if(rowSkip>stateCount[2]){i+=rowSkip-stateCount[2]-iSkip;j=maxJ-1}}}else{do j++;while(j<maxJ&&!image[j+i*qrcode.width]);j--}currentState=0;stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;stateCount[3]=0;stateCount[4]=0}else{stateCount[0]=stateCount[2];stateCount[1]=stateCount[3];stateCount[2]=stateCount[4];stateCount[3]=1;stateCount[4]=0;currentState=3}else stateCount[++currentState]++;else stateCount[currentState]++;if(this.foundPatternCross(stateCount)){var confirmed=
this.handlePossibleCenter(stateCount,i,maxJ);if(confirmed){iSkip=stateCount[0];if(this.hasSkipped)done=haveMultiplyConfirmedCenters()}}}var patternInfo=this.selectBestPatterns();qrcode.orderBestPatterns(patternInfo);return new FinderPatternInfo(patternInfo)}}
function AlignmentPattern(posX,posY,estimatedModuleSize){this.x=posX;this.y=posY;this.count=1;this.estimatedModuleSize=estimatedModuleSize;this.__defineGetter__("EstimatedModuleSize",function(){return this.estimatedModuleSize});this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("X",function(){return Math.floor(this.x)});this.__defineGetter__("Y",function(){return Math.floor(this.y)});this.incrementCount=function(){this.count++};this.aboutEquals=function(moduleSize,
i,j){if(Math.abs(i-this.y)<=moduleSize&&Math.abs(j-this.x)<=moduleSize){var moduleSizeDiff=Math.abs(moduleSize-this.estimatedModuleSize);return moduleSizeDiff<=1||moduleSizeDiff/this.estimatedModuleSize<=1}return false}}
function AlignmentPatternFinder(image,startX,startY,width,height,moduleSize,resultPointCallback){this.image=image;this.possibleCenters=new Array;this.startX=startX;this.startY=startY;this.width=width;this.height=height;this.moduleSize=moduleSize;this.crossCheckStateCount=new Array(0,0,0);this.resultPointCallback=resultPointCallback;this.centerFromEnd=function(stateCount,end){return end-stateCount[2]-stateCount[1]/2};this.foundPatternCross=function(stateCount){var moduleSize=this.moduleSize;var maxVariance=
moduleSize/2;for(var i=0;i<3;i++)if(Math.abs(moduleSize-stateCount[i])>=maxVariance)return false;return true};this.crossCheckVertical=function(startI,centerJ,maxCount,originalStateCountTotal){var image=this.image;var maxI=qrcode.height;var stateCount=this.crossCheckStateCount;stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;var i=startI;while(i>=0&&image[centerJ+i*qrcode.width]&&stateCount[1]<=maxCount){stateCount[1]++;i--}if(i<0||stateCount[1]>maxCount)return NaN;while(i>=0&&!image[centerJ+i*qrcode.width]&&
stateCount[0]<=maxCount){stateCount[0]++;i--}if(stateCount[0]>maxCount)return NaN;i=startI+1;while(i<maxI&&image[centerJ+i*qrcode.width]&&stateCount[1]<=maxCount){stateCount[1]++;i++}if(i==maxI||stateCount[1]>maxCount)return NaN;while(i<maxI&&!image[centerJ+i*qrcode.width]&&stateCount[2]<=maxCount){stateCount[2]++;i++}if(stateCount[2]>maxCount)return NaN;var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2];if(5*Math.abs(stateCountTotal-originalStateCountTotal)>=2*originalStateCountTotal)return NaN;
return this.foundPatternCross(stateCount)?this.centerFromEnd(stateCount,i):NaN};this.handlePossibleCenter=function(stateCount,i,j){var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2];var centerJ=this.centerFromEnd(stateCount,j);var centerI=this.crossCheckVertical(i,Math.floor(centerJ),2*stateCount[1],stateCountTotal);if(!isNaN(centerI)){var estimatedModuleSize=(stateCount[0]+stateCount[1]+stateCount[2])/3;var max=this.possibleCenters.length;for(var index=0;index<max;index++){var center=
this.possibleCenters[index];if(center.aboutEquals(estimatedModuleSize,centerI,centerJ))return new AlignmentPattern(centerJ,centerI,estimatedModuleSize)}var point=new AlignmentPattern(centerJ,centerI,estimatedModuleSize);this.possibleCenters.push(point);if(this.resultPointCallback!=null)this.resultPointCallback.foundPossibleResultPoint(point)}return null};this.find=function(){var startX=this.startX;var height=this.height;var maxJ=startX+width;var middleI=startY+(height>>1);var stateCount=new Array(0,
0,0);for(var iGen=0;iGen<height;iGen++){var i=middleI+((iGen&1)==0?iGen+1>>1:-(iGen+1>>1));stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;var j=startX;while(j<maxJ&&!image[j+qrcode.width*i])j++;var currentState=0;while(j<maxJ){if(image[j+i*qrcode.width])if(currentState==1)stateCount[currentState]++;else if(currentState==2){if(this.foundPatternCross(stateCount)){var confirmed=this.handlePossibleCenter(stateCount,i,j);if(confirmed!=null)return confirmed}stateCount[0]=stateCount[2];stateCount[1]=1;
stateCount[2]=0;currentState=1}else stateCount[++currentState]++;else{if(currentState==1)currentState++;stateCount[currentState]++}j++}if(this.foundPatternCross(stateCount)){var confirmed=this.handlePossibleCenter(stateCount,i,maxJ);if(confirmed!=null)return confirmed}}if(!(this.possibleCenters.length==0))return this.possibleCenters[0];throw"Couldn't find enough alignment patterns";}}
function QRCodeDataBlockReader(blocks,version,numErrorCorrectionCode){this.blockPointer=0;this.bitPointer=7;this.dataLength=0;this.blocks=blocks;this.numErrorCorrectionCode=numErrorCorrectionCode;if(version<=9)this.dataLengthMode=0;else if(version>=10&&version<=26)this.dataLengthMode=1;else if(version>=27&&version<=40)this.dataLengthMode=2;this.getNextBits=function(numBits){var bits=0;if(numBits<this.bitPointer+1){var mask=0;for(var i=0;i<numBits;i++)mask+=1<<i;mask<<=this.bitPointer-numBits+1;bits=
(this.blocks[this.blockPointer]&mask)>>this.bitPointer-numBits+1;this.bitPointer-=numBits;return bits}else if(numBits<this.bitPointer+1+8){var mask1=0;for(var i=0;i<this.bitPointer+1;i++)mask1+=1<<i;bits=(this.blocks[this.blockPointer]&mask1)<<numBits-(this.bitPointer+1);this.blockPointer++;bits+=this.blocks[this.blockPointer]>>8-(numBits-(this.bitPointer+1));this.bitPointer=this.bitPointer-numBits%8;if(this.bitPointer<0)this.bitPointer=8+this.bitPointer;return bits}else if(numBits<this.bitPointer+
1+16){var mask1=0;var mask3=0;for(var i=0;i<this.bitPointer+1;i++)mask1+=1<<i;var bitsFirstBlock=(this.blocks[this.blockPointer]&mask1)<<numBits-(this.bitPointer+1);this.blockPointer++;var bitsSecondBlock=this.blocks[this.blockPointer]<<numBits-(this.bitPointer+1+8);this.blockPointer++;for(var i=0;i<numBits-(this.bitPointer+1+8);i++)mask3+=1<<i;mask3<<=8-(numBits-(this.bitPointer+1+8));var bitsThirdBlock=(this.blocks[this.blockPointer]&mask3)>>8-(numBits-(this.bitPointer+1+8));bits=bitsFirstBlock+
bitsSecondBlock+bitsThirdBlock;this.bitPointer=this.bitPointer-(numBits-8)%8;if(this.bitPointer<0)this.bitPointer=8+this.bitPointer;return bits}else return 0};this.NextMode=function(){if(this.blockPointer>this.blocks.length-this.numErrorCorrectionCode-2)return 0;else return this.getNextBits(4)};this.getDataLength=function(modeIndicator){var index=0;while(true){if(modeIndicator>>index==1)break;index++}return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][index])};this.getRomanAndFigureString=
function(dataLength){var length=dataLength;var intData=0;var strData="";var tableRomanAndFigure=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":");do if(length>1){intData=this.getNextBits(11);var firstLetter=Math.floor(intData/45);var secondLetter=intData%45;strData+=tableRomanAndFigure[firstLetter];strData+=tableRomanAndFigure[secondLetter];length-=2}else if(length==
1){intData=this.getNextBits(6);strData+=tableRomanAndFigure[intData];length-=1}while(length>0);return strData};this.getFigureString=function(dataLength){var length=dataLength;var intData=0;var strData="";do{if(length>=3){intData=this.getNextBits(10);if(intData<100)strData+="0";if(intData<10)strData+="0";length-=3}else if(length==2){intData=this.getNextBits(7);if(intData<10)strData+="0";length-=2}else if(length==1){intData=this.getNextBits(4);length-=1}strData+=intData}while(length>0);return strData};
this.get8bitByteArray=function(dataLength){var length=dataLength;var intData=0;var output=new Array;do{intData=this.getNextBits(8);output.push(intData);length--}while(length>0);return output};this.getKanjiString=function(dataLength){var length=dataLength;var intData=0;var unicodeString="";do{intData=getNextBits(13);var lowerByte=intData%192;var higherByte=intData/192;var tempWord=(higherByte<<8)+lowerByte;var shiftjisWord=0;if(tempWord+33088<=40956)shiftjisWord=tempWord+33088;else shiftjisWord=tempWord+
49472;unicodeString+=String.fromCharCode(shiftjisWord);length--}while(length>0);return unicodeString};this.__defineGetter__("DataByte",function(){var output=new Array;var MODE_NUMBER=1;var MODE_ROMAN_AND_NUMBER=2;var MODE_8BIT_BYTE=4;var MODE_KANJI=8;do{var mode=this.NextMode();if(mode==0)if(output.length>0)break;else throw"Empty data block";if(mode!=MODE_NUMBER&&mode!=MODE_ROMAN_AND_NUMBER&&mode!=MODE_8BIT_BYTE&&mode!=MODE_KANJI)throw"Invalid mode: "+mode+" in (block:"+this.blockPointer+" bit:"+
this.bitPointer+")";dataLength=this.getDataLength(mode);if(dataLength<1)throw"Invalid data length: "+dataLength;switch(mode){case MODE_NUMBER:var temp_str=this.getFigureString(dataLength);var ta=new Array(temp_str.length);for(var j=0;j<temp_str.length;j++)ta[j]=temp_str.charCodeAt(j);output.push(ta);break;case MODE_ROMAN_AND_NUMBER:var temp_str=this.getRomanAndFigureString(dataLength);var ta=new Array(temp_str.length);for(var j=0;j<temp_str.length;j++)ta[j]=temp_str.charCodeAt(j);output.push(ta);
break;case MODE_8BIT_BYTE:var temp_sbyteArray3=this.get8bitByteArray(dataLength);output.push(temp_sbyteArray3);break;case MODE_KANJI:var temp_str=this.getKanjiString(dataLength);output.push(temp_str);break}}while(true);return output})};


/*** EXPORTS FROM exports-loader ***/
module.exports = qrcode;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_exports_loader_qrcode_node_modules_webcodecamjs_js_qrcodelib_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_exports_loader_qrcode_node_modules_webcodecamjs_js_qrcodelib_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_exports_loader_qrcode_node_modules_webcodecamjs_js_qrcodelib_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tingle_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tingle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tingle_js__);




console.log(__WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js___default.a);
console.log(__WEBPACK_IMPORTED_MODULE_1_exports_loader_qrcode_node_modules_webcodecamjs_js_qrcodelib_js___default.a);

var Scanner = {
	modal: null,
    modalArgs : {
        footer: false,
	    stickyFooter: false,
	    closeMethods: ['overlay','escape'],
	    closeLabel: "Close",
	    cssClass: ['tingle-modal--noOverlayClose'],
	    onClose: function() {
            window.qrscanner.close();
	    },
	    beforeClose: function() {
		    // here's goes some logic
		    // e.g. save content before closing the modal
		    return true; // close the modal
	        	//return false; // nothing happens
	    }
    },
    qrArgs:{
        flipHorizontal: true,  
	    grayScale: true,
	    zoom: 1.7,
	    width: 400,
	    height: 400,
	    successTimeout: 250,
        resultFunction: function(result) {
            window.qrscanner.returnResult(result);
        }
    },
    init: function(qArgs = null, modalArgs = null){
        console.log("init scanner", qArgs, modalArgs);
        if(qArgs != null){
            Object.assign(this.qrArgs, qArgs);
        }
        if (modalArgs != null){
            Object.assign(this.modalArgs, modalArgs);
        }
        this.modal = new __WEBPACK_IMPORTED_MODULE_2_tingle_js___default.a.modal(this.modalArgs);
        this.modal.setContent("<canvas id='qr-canvas' style='width:100%; padding-bottom: 75%'></canvas>");
        this.scanner = new __WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js___default.a("canvas").init(this.qrArgs).play()
        this.scanner.stop();
        return this;
    },
    open: function(event, caller){
        console.log(event, caller);
        try{
            if (caller.matches('[name=qrtarget]')){
                this.outputTarget = caller;
            }else{
                this.outputTarget = caller.querySelectorAll('[name=qrtarget]')[0];
            }

        }catch (err){
            console.log("error:" , err)
        }
        if (!this.isOpen){
            this.scannedValue = null;
            this.modal.open();
            this.isOpen = true;
            this.scanner.play();
        }    
    }, 
    close: function(){
        this.scanner.pause();
		console.log('modal closed');
        this.scanner.stop();
        this.isOpen = false;
    },
    isOpen: false,
    returnResult: function(result){
        if (this.isOpen){
            this.scannedValue = result.code;
            console.log(result)
            try{
                console.log(this.outputTarget)
                this.outputTarget.value = this.scannedValue;
            }catch (err) {
              console.log("couldn't write value: " ,err)
            }
            this.modal.close();
        }
    },
    scannedValue: null,
    outputTarget: null
}

//Load options and init
var qrArgs = null;
var modalArgs = null;
try{
    qrArgs = document.querySelectorAll('[data-qrargs]')[0].getAttribute('data-qrargs');
    qrArgs = JSON.parse(qrArgs);
}catch (err){
    console.log("error loading qr arguments, using defaults\n", err, Scanner.qrArgs);

}
try{
    modalArgs = document.querySelectorAll('[data-modalargs]')[0].getAttribute('data-modalargs');
    modalArgs = JSON.parse(modalArgs);
}catch (err) {
    console.log("error loading modal arguments, using defaults\n", err, Scanner.modalArgs);
}
window.qrscanner = Scanner.init(qrArgs, modalArgs);























/***/ })
/******/ ]);