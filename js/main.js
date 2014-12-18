
$(document).ready(function() {
  
function fullscreen() {
    $('a').click(function() {
        if(!$(this).hasClass('noeffect')) {
            window.location = $(this).attr('href');
            return false;
        }
    });
}
 
fullscreen();


  var hello = {
    init: function() {
      this.great(); 
    },

    great: function() {
     console.log('world');
    }
  };

  


  (function() {
    hello.init();
  }()); 

}); 