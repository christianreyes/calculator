$(function(){
  $(window).bind("keydown", function(e){
    var key = e.keyCode ? e.keyCode : e.which;
    
    if(key >= 48 && key <= 57){
      display(display() + String(key - 48));
    } else if(key == 8){
      display(display().substring(0,display().length-1))
    }
  });
  
  $('button.num').click(function(){
    $('p').text($('p').text() + $(this).text());
  });
  
  function display(val){
    if(val){
      $('p').text(val);
    } else {
      return $('p').text();
    }
  }
});