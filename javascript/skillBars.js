(function(){

  //animate progress bars width
  $( '.skill-bars' ).each(function() {
    $( this ).animate({
      width: $( this ).attr( 'data-percent' )
    },2000)});


    //animate percentage increase
  $( '.skill-bars' ).each(function() {
    var percent = 0;
    var elem = $( this );
    var target = parseInt( elem.attr( 'data-percent' ));
    var interval = setInterval(function() {
    if(percent >= target) clearInterval(interval);
    else {
      percent += 1;
      elem.text(percent + '%');
    }
}, 27)});


})();
