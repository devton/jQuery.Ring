(function($){
  $.fn.extend({
    ring: function(options) {
      var defaults = {
        timeInterval: 5000
      }

      var options = $.extend(defaults,options)

      return this.each(function(){
        var o = options;
        var obj = $(this);
        var timeInterval = o.timeInterval;

        var animate_effect = function(){
          obj.animate({"left": "+=5px"}, "fast").
              animate({"left": "-=10px"}, "fast").
              animate({"left": "+=15px"}, "fast").
              animate({"left": "-=10px"}, "fast");
        };

        setInterval('animate_effect()', timeInterval);
      });
    }
  });
})(jQuery);