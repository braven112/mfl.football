jQuery(document).ready(function() {
  //Update standings accronyms
  $('th.divpct').text('Div %');
  $('th.all_play_wlt').text('All-Play');
  $('th.h2hpct').text('%');
  //hambuger menu
  $('.myfantasyleague_menu > label span').html('<span class="top-bun"></span><span class="burger"></span><span class="double-burger"></span><span class="bottom-bun"></span>');

  //turn hints into new style
  $(".reportnavigation:contains('Hint:')").removeClass().addClass('alert alert-info');
  $(".reportnavigation:contains('Weekly NFL Injury Status is in this color.')").hide();

  //customer wrapper
  $(".report").wrap("<div class='report-wrapper'></div>");
  $("#outerMFLScoreboardDiv .report-wrapper .report,#lineup-form .report-wrapper .report").unwrap();

  //remove empty td's on add/drop page
  $("#body_options_43 td").filter(function() {

    var html = $(this).html();

    if (html == '' || html == ' ')
      return true;

  }).remove();
  //remove empty td's on draft page
  $("#body_options_52 td[colspan='3'] table > td").filter(function() {

    var html2 = $(this).html();

    if (html2 == '' || html2 == ' ')
      return true;

  }).addClass("empty");
});

///// Custom Tabs //////////////////
jQuery('.tabbed-reports li').on('click',function(e){
    $('.reports-content>.'+ e.target.classList[0]).show().siblings().hide();
});

var selector = '.tabbed-reports li';

jQuery(selector).on('click', function(){
    $(this).parent().find('li').removeClass('active');
    $(this).parent().find('li').removeClass('current');
    $(this).addClass('active');
});