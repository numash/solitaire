"use strict";

class Solitaire{
    constructor(options){
        this._el = options.element;
        
        this._el.innerHTML = '<input type="text"/>';
    }
}