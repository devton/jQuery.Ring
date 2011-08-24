(function($){
  $.fn.extend({
    ring: function(options) {
      var defaults = {
        timeInterval: 5000,
        position: 'relative',
        loopInterval: true,
        animateDistanceInPixels: 5,
        animateVelocity: 'fast'
      }

      var options = $.extend(defaults,options)

      return this.each(function(){
        var o = options;
        var obj = $(this);

        var animate = {
          run: function(object) {
            object.animate({"left": "+="+o.animateDistanceInPixels+"px"}, o.animateVelocity).
                    animate({"left": "-="+(o.animateDistanceInPixels*2)+"px"}, o.animateVelocity).
                    animate({"left": "+="+(o.animateDistanceInPixels*3)+"px"}, o.animateVelocity).
                    animate({"left": "-="+(o.animateDistanceInPixels*2)+"px"}, o.animateVelocity);
          }
        }

        obj.css({'position': o.position});

        if(o.loopInterval) {
          setInterval(function(){ animate.run(obj) }, o.timeInterval);
        } else {
          setTimeout(function(){ animate.run(obj) }, o.timeInterval);
        }

      });
    }
  });
})(jQuery);