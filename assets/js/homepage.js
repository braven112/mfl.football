$('#curr_auctions').prepend($('#curr_auctions .reportfooter:last'));
$("#curr_auctions .reportfooter td[colspan=3]").attr('colspan',4);
$("#curr_auctions .reportfooter:first").removeClass().addClass('btn-primary');

//swap out chat icon
$('#league_chat caption span a').html('<svg class="icon-comments"><use xlink:href="#icon-comments"></use></svg>');

//Move login button info
$('.welcome').children().detach().appendTo('#loginlink .svg-text');
$('#loginlink .svg-text a').eq(1).addClass('commish-link');

setTimeout( function(){ 
    // Do something after 1 second 
    $('#league_chat b').parent().addClass('personal-im');
  }  , 1000 );
$(document).ready(function() {
$('#power_rank caption span').text('All-Play Record');
});