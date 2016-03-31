"use strict";

class Page{
    constructor(options){
        this._el = options.element;
        this._cards = options.cards;
        
        this.deck = new Deck({
            element: this._el.querySelector('[data-component="deck"]')
        });
        
        this.deckCards = new DeckCards({
            element: this._el.querySelector('[data-component="deckCards"]')
        });
        
        this.result = new ResultCards({
            element: this._el.querySelector('[data-component="result-cards"]')
        });
        
        this.solitaire = new Solitaire({
            element: this._el.querySelector('[data-component="solitaire"]'),
            cards: this._cards
        });
    }
}