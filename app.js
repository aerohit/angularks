'use strict';

(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict:    'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict:    'E',
      templateUrl: 'product-panels.html',
      controller:  function() {
        this.tabNo = 3;

        this.selectTab = function(setTab) {
          this.tabNo = setTab;
        };

        this.isSelected = function(tab) {
          return this.tabNo === tab;
        };
      },
      controllerAs: 'panelCtrl'
    };
  });

  var gems = [
    {
      name:          'Dodecahedron',
      price:         2.95,
      description:   '...',
      specification: '...',
      reviews:       [
        {
          stars:    1,
          body:     'This product sucks.',
          author:   'abc@pqr.com'
        },
        {
          stars:    5,
          body:     'I love this product.',
          author:   'xyz@pqr.com'
        },
      ],
      images:        { full: 'gem-01.gif' },
      canPurchase:   true,
      soldOut:       false
    },
    {
      name:          'Pentagonal',
      price:         5.95,
      description:   '...',
      specification: '...',
      reviews:       [
        {
          stars:    1,
          body:     'This product sucks.',
          author:   'abc@pqr.com'
        },
        {
          stars:    5,
          body:     'I love this product.',
          author:   'xyz@pqr.com'
        },
      ],
      images:        { full: 'gem-02.gif' },
      canPurchase:   false,
      soldOut:       false
    }
  ];
})();
