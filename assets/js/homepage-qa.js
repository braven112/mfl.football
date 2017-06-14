jQuery('#curr_auctions').prepend($('#curr_auctions .reportfooter:last'));
jQuery("#curr_auctions .reportfooter td[colspan=3]").attr('colspan',4);
jQuery("#curr_auctions .reportfooter:first").removeClass().addClass('btn-primary');

//swap out chat icon
jQuery('#league_chat caption span a').html('<svg class="icon-comments"><use xlink:href="#icon-comments"></use></svg>');

//Move login button info
jQuery('.welcome').children().detach().appendTo('#loginlink .svg-text');
jQuery('#loginlink .svg-text a').eq(1).addClass('commish-link');