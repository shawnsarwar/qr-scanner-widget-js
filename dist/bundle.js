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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=h({},o,t),this.init()}function o(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function s(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&this.opts.closeMethods.indexOf("overlay")!==-1||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),this.opts.closeMethods.indexOf("button")!==-1&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),this.opts.closeMethods.indexOf("button")!==-1&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function i(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function n(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:d.bind(this),resize:o.bind(this),keyboardNav:l.bind(this)},this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function l(t){this.opts.closeMethods.indexOf("escape")!==-1&&27===t.which&&this.isOpen()&&this.close()}function d(t){this.opts.closeMethods.indexOf("overlay")!==-1&&!a(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function a(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function r(){this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function h(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}function c(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}var m=c();return t.prototype.init=function(){this.modal||(s.call(this),n.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(r.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),document.body.classList.add("tingle-enabled"),this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible");var t=this;m?this.modal.addEventListener(m,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(m,o,!1)},!1):"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),o.call(this)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.close=function(){if("function"==typeof this.opts.beforeClose){var t=this.opts.beforeClose.call(this);if(!t)return}document.body.classList.remove("tingle-enabled"),this.modal.classList.remove("tingle-modal--visible");var o=this;m?this.modal.addEventListener(m,function t(){o.modal.removeEventListener(m,t,!1),o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this)},!1):(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this))},t.prototype.setContent=function(t){"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t))},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){i.call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight,o=this.modalBox.clientHeight;return o>=t},{modal:t}});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tingle_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tingle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tingle_js__);



console.log(__WEBPACK_IMPORTED_MODULE_0_exports_loader_WebCodeCamJS_node_modules_webcodecamjs_js_webcodecamjs_js___default.a);


/***/ })
/******/ ]);