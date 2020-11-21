let options = {
    startAngle: -1.55,
    size: 60,
    value: 0.80,
    fill: {gradient: ['red', 'green']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.99
  });
  $(".react .bar").circleProgress({
    value: 0.20
  });

  $('.show-btn').click(function(){
    $('.modal').toggleClass("show");
    $('.show-btn').addClass("disabled");
  });
  $('.close-icon').click(function(){
    $('.modal').toggleClass("show");
    $('.show-btn').removeClass("disabled");
  });
  $('.close-btn').click(function(){
    $('.modal').toggleClass("show");
    $('.show-btn').removeClass("disabled");
  });
