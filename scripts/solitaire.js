"use strict";

var SMALL_DECK_NUMBER = 7;

class Solitaire{
    constructor(options){
        this._el = options.element;
        
        for (var i = 0; i < SMALL_DECK_NUMBER; i++){
            var div = document.createElement("div");
            div.className = "col-md-10 smallDecks";
            this._el.appendChild(div);
        }
    }
}