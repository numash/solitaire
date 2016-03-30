"use strict";

class Deck{
    constructor(options){
        this._el = options.element;
    
        this._el.innerHTML = '<input type="text"/>';
        
        this._el.addEventListener('click', this._onDeckClick);
    }

    _onDeckClick(event){
        var currentItem = event.target.closest("");
        
        if (!currentItem){
            return;
        }
        
        
    };
}