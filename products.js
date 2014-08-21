'use strict';

(function() {
  var app = angular.module('store-products', [ ]);

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
})();
