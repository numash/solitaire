"use strict";

function Page(options){
    this._el = options.element;
    this._cards = options.cards;
    
    this.deck = new Deck({
        element: this._el.querySelector('[data-component="deck"]')
    });
    
    this.result = new ResultCards({
        element: this._el.querySelector('[data-component="result-cards"]')
    });
    
    this.solitaire = new Solitaire({
        element: this._el.querySelector('[data-component="solitaire"]')
    });
}