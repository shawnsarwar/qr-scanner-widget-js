import WebCodeCamJS from 'exports-loader?WebCodeCamJS!../node_modules/webcodecamjs/js/webcodecamjs.js';
import qrcode from 'exports-loader?qrcode!../node_modules/webcodecamjs/js/qrcodelib.js';
import tingle from "tingle.js";

console.log(WebCodeCamJS);
console.log(qrcode);

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
        this.modal = new tingle.modal(this.modalArgs);
        this.modal.setContent("<canvas id='qr-canvas' style='width:100%; padding-bottom: 75%'></canvas>");
        this.scanner = new WebCodeCamJS("canvas").init(this.qrArgs).play()
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





















