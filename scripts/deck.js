"use strict";

class Deck{
    constructor(options){
        this._el = options.element;
        
        this._el.addEventListener('click', this._onDeckClick);
    }

    _onDeckClick(event){
    };
}