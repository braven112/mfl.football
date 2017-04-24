$(document).ready(function() {
  //make submit lineup simpler
  $("#body_options_02 .reportnavigation:contains('Looking for lineup advice?')").text('Select 9 starters: 1QB, 1RB, 1WR, 1TE, 1K, 1Def, 3Flex(RB,WR,TE)').addClass('alert alert-info');
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

  //remove empty td's on add/drop page
  $("#body_options_43 td").filter(function() {

    var html = $(this).html();

    if (html == '' || html == '&nbsp;')
      return true;

  }).remove();
  //remove empty td's on draft page
  $("#body_options_52 td[colspan='3'] table > td").filter(function() {

    var html2 = $(this).html();

    if (html2 == '' || html2 == '&nbsp;')
      return true;

  }).addClass("empty");
});

//Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-97923590-1', 'auto');
  ga('send', 'pageview');
