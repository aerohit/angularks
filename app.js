'use strict';

(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name:          'Dodecahedron',
      price:         2.95,
      description:   '...',
      images:        [ { full: 'gem-01.gif' } ],
      canPurchase:   true,
      soldOut:       false
    },
    {
      name:          'Pentagonal',
      price:         5.95,
      description:   '...',
      images:        { full: 'gem-02.gif' },
      canPurchase:   false,
      soldOut:       false
    }
  ];
})();
