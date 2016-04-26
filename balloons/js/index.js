var balloon1On = false;
var balloon2On = false;
var balloon3On = false;

$("#balloon1").click(animateBallon1);
$("#balloon2").click(animateBallon2);
$("#balloon3").click(animateBallon3);

function animateBallon1() {
  closeOthers(1);
  balloon1On = !balloon1On;
  $("#balloon1").toggleClass("active", 1000, "easeOutSine");
  if (balloon1On) {
    $("#content1").fadeTo(2000, 1, function() {
      $(".subline1").fadeTo(500, 1, function() {
        $(".box1").fadeTo(250, 1);
      });
    });
    $('html, body').animate({
      scrollTop: $(".box1").offset().top-50
    }, 2000);
  } else {
    $('html, body').animate({scrollTop: 0}, 200);
    $(".subline1").fadeTo(100, 0);
    $("#content1").fadeTo(200, 0);

    $(".content").css({
      'pointer-events': 'none'
    });
  }
}

function animateBallon2() {
  closeOthers(2);
  balloon2On = !balloon2On;
  $("#balloon2").toggleClass("active", 1000, "easeOutSine");
  if (balloon2On) {
    $("#content2").fadeTo(2000, 1, function(){
      $(".subline2").fadeTo(500, 1, function() {
        $(".box2").fadeTo(250, 1);
        $(".subline2-1").fadeTo(1000, 1, function(){
          $(".box2-1").fadeTo(500, 1);
        });
      });
    });
    $('html, body').animate({
      scrollTop: $(".box2").offset().top-50
    }, 2000);
  } else {
    $('html, body').animate({scrollTop: 0}, 200);
    $(".subline2").fadeTo(100, 0);
    $("#content2").fadeTo(100, 0);

    $(".content").css({
      'pointer-events': 'none'
    });
  }
}

function animateBallon3() {
  closeOthers(3);
  balloon3On = !balloon3On;
  $("#balloon3").toggleClass("active", 1000, "easeOutSine");
  if (balloon3On) {
    $("#content3").fadeTo(2000, 1, function(){
      $(".subline3").fadeTo(500, 1, function() {
        $(".box3").fadeTo(250, 1);
      });
    });
    $('html, body').animate({
      scrollTop: $(".box3").offset().top-50
    }, 2000);
  } else {
    $('html, body').animate({scrollTop: 0}, 200);
    $(".subline3").fadeTo(100, 0);
    $("#content3").fadeTo(100, 0);

    $(".content").css({
      'pointer-events': 'none'
    });
  }
}

function closeOthers(balloon) {
  $(".content").css({
    'pointer-events': 'auto'
  });
  switch(balloon) {
    case 1:
          if(balloon2On) {
            animateBallon2();
          }
          if(balloon3On) {
            animateBallon3();
          }
          break;
    case 2:
          if(balloon1On) {
            animateBallon1();
          }
          if(balloon3On) {
            animateBallon3();
          }
          break;
    case 3:
          if(balloon1On) {
            animateBallon1();
          }
          if(balloon2On) {
            animateBallon2();
          }
          break;
  }
}