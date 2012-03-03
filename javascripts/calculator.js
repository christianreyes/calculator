var answer = 0;
var evalstr = "";
var op_in_progress = false;

$(function(){
  $(window).bind("keydown", function(e){
    var key = e.keyCode ? e.keyCode : e.which;
  
    if(key >= 48 && key <= 57){
      display(display() + String(key - 48));
    } else if(key == 8){
      back();
    } 
    
    return false;
  });
  
  $('.operation').click(function(){
    var id = $(this).attr('id');
    
    evalstr += display();
    op_in_progress = true;
    display("");
    
    switch(id){
      case "plus":
        evalstr += "+";
        break;
      case "minus":
        evalstr += "-";
        break;
      case "times":
        evalstr += "*";
        break;
      case "divide":
        evalstr += "/";
        break;
      default:
        break;
    }
    
  });
  
  $('#equals').click(function(){
    evalstr += display();
    answer = eval(evalstr);
    $('p').text(String(answer));
    evalstr = "";
    op_in_progress = false;
  });
  
  $('button.num').click(function(){
    num_pressed($(this).text());
  });
  
  $('#larrow').click(function(){
    back();
  });
});

function display(val){
  if(typeof(val) != "undefined"){
    $('p').text(val);
  } else {
    return $('p').text();
  }
}

function num_pressed(num){
  if(display() == "0"){
    display(num);
  } else {
    display( display() + String(num) );
  }
}

function back(){
  if(display != "0"){
    if( display().length == 1){
      display("0");
    } else {
      display( display().substring(0, display().length - 1 ));
    }
  }
}