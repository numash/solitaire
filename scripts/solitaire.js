"use strict";

var SMALL_DECKS_NUMBER = 7;

class Solitaire{
    constructor(options){
        this._el = options.element;
        this._cards = options.cards;
        this._cardsIterator = 0;
        
        for (var i = 0; i < SMALL_DECKS_NUMBER; i++){
            var div = document.createElement("div");
            div.className = "cardSpace";
            this._el.appendChild(div);
            this._fillSmallDecks(div, SMALL_DECKS_NUMBER-i);
        }
    }
    
    _fillSmallDecks(div, number){
        for(var i = 0; i < number; i++){
            var card = this._cards[this._cardsIterator++].element;
            div.appendChild(card);
            card.style.left = div.offsetLeft + 'px';
            card.style.top = div.offsetTop + (card.offsetHeight / 3 * i) + 'px';
            if (i === number-1){      //if the last card
                card.className = "card";
                card.style.backgroundImage = "url('images/2_of_clubs.png')";
            } else{
                card.className = "card closedCards";
            }
        }
    }
}