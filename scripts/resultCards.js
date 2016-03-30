"use strict";

var RESULT_CARD_NUMBER = 4;

class ResultCards{
    constructor(options){
        this._el = options.element;
    
        for (var i = 0; i < RESULT_CARD_NUMBER; i++){
            var div = document.createElement("div");
            div.className = "resultDiv";
            div.id = "resultDiv" + i;
            this._el.appendChild(div);
        }
    }
}
