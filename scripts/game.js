"use strict";

var myPage = new Page({
    element: document.querySelector('[data-component="page"]'),
    cards: CardsGenerator.generateCards(document.querySelector('[data-component="page"]'))
});

