'use strict';

(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tabNo = 1;

    this.selectTab = function(setTab) {
      this.tabNo = setTab;
    };

    this.isSelected = function(tab) {
      return this.tabNo === tab;
    };
  });

  var gems = [
    {
      name:          'Dodecahedron',
      price:         2.95,
      description:   '...',
      specification: '...',
      review:        '...',
      images:        { full: 'gem-01.gif' },
      canPurchase:   true,
      soldOut:       false
    },
    {
      name:          'Pentagonal',
      price:         5.95,
      description:   '...',
      specification: '...',
      review:        '...',
      images:        { full: 'gem-02.gif' },
      canPurchase:   false,
      soldOut:       false
    }
  ];
})();
