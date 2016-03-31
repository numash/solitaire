"use strict";

var CARD_NUMBER = 52;
var NOMINAL_CARDS_NUMBER = 9;
var COLORS_NUMBER = 4;
var JACK_CARDS = 4;
var QUEEN_CARDS = 4;
var KING_CARDS = 4;
var ACE_CARDS = 4;

class CardsGenerator{
    
    static generateCards(){
        var cards = [];
    
        var color = ["clubs", "diamonds", "hearts", "spades"];
        var colorCounter = 0;
        for(var i = 0; i < NOMINAL_CARDS_NUMBER; i++){
            for(var j = 0; j < COLORS_NUMBER; j++){
                cards.push(new Card({
                    nominal: i+2,
                    color: color[colorCounter],
                    isOpened: false,
                    url: i+2 + "_of_" + color[colorCounter] + ".png"
                }));
                if (++colorCounter === 4){
                    colorCounter = 0;
                }
            }
        }
        
        var colorCounter = 0;
        for(var i = 0; i < JACK_CARDS; i++){
            cards.push(new Card({
                nominal: "jack",
                color: color[colorCounter],
                isOpened: false,
                url: "jack_of_" + color[colorCounter] + ".png"
            }));
            if (++colorCounter === 4){
                colorCounter = 0;
            }
        }
        
        var colorCounter = 0;
        for(var i = 0; i < QUEEN_CARDS; i++){
            cards.push(new Card({
                nominal: "queen",
                color: color[colorCounter],
                isOpened: false,
                url: "queen_of_" + color[colorCounter] + ".png"
            }));
            if (++colorCounter === 4){
                colorCounter = 0;
            }
        }
        
        var colorCounter = 0;
        for(var i = 0; i < KING_CARDS; i++){
            cards.push(new Card({
                nominal: "king",
                color: color[colorCounter],
                isOpened: false,
                url: "king_of_" + color[colorCounter] + ".png"
            }));
            if (++colorCounter === 4){
                colorCounter = 0;
            }
        }
        
        var colorCounter = 0;
        for(var i = 0; i < ACE_CARDS; i++){
            cards.push(new Card({
                nominal: "ace",
                color: color[colorCounter],
                isOpened: false,
                url: "ace_of_" + color[colorCounter] + ".png"
            }));
            if (++colorCounter === 4){
                colorCounter = 0;
            }
        }
        
        return cards;    
    }
}