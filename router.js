define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "shop": "shopFn",
        "order": "orderFn",
        "cart": "cartFn",
        "mine": "mineFn",
        "*actions":'defaultAction',
        "soso":"sosoFn"
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
          })
      },
      shopFn: function() {
        require(['./modules/shop/shop.js'],function(shop){
          shop.render();
          
        })
      },
      orderFn: function() {
				require(['./modules/order/order.js'],function(order){
       	 order.render();
       	 order.tempApp();
       	 order.tempAjax();
        })
      },
      cartFn: function() {
				require(['./modules/cart/car.js'],function(car){
          car.render();
          car.tempCar();
          car.tempWay();
        })
      },
      mineFn: function() {
				require(['./modules/mine/mine.js'],function(mine){
          mine.render();
          
        })
      },
      sosoFn: function(){
      	require(['./modules/soso/soso.js'],function(soso){
          soso.render();
          
        })
      },
      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
