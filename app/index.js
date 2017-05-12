import WebCodeCamJS from 'exports-loader?WebCodeCamJS!../node_modules/webcodecamjs/js/webcodecamjs.js';
import qrcode from 'exports-loader?qrcode!../node_modules/webcodecamjs/js/qrcodelib.js';

import tingle from "tingle.js";

console.log(WebCodeCamJS);
console.log(qrcode);

var arg = {
	flipHorizontal: false,  
	grayScale: true,
	zoom: 1.5,
	width: 640,
	height: 480,
	successTimeout: 250,
        resultFunction: function(result) {
        	var aChild = document.createElement('li');
        	aChild[txt] = result.format + ': ' + result.code;
            document.querySelector('body').appendChild(aChild);
        }
    };

window.modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
    	//return false; // nothing happens
    }
});

window.modal.setContent('<p>Modal!</p><canvas width=400 height=400></canvas>');
window.modal.onOpen = function(){
        console.log('modal open');
	//new WebCodeCamJS("canvas").init(arg).play();
}
new WebCodeCamJS("canvas").init(arg).play();
