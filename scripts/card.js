"use strict";

class Card{
    constructor(options){
        this._nominal = options.nominal;
        this._color = options.color;
        this._isOpened = options.isOpened;
        this._imgSource = options.url;
        
        this._element = document.createElement("div");
        this._element.className = "card";
    }
    
    get element(){
        return this._element;
    }
}