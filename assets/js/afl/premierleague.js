$(document).ready(function() {

    var premierteams2 = ".pro-relpage #franchiseicon_0001, .pro-relpage #franchiseicon_0002, .pro-relpage #franchiseicon_0005, .pro-relpage #franchiseicon_0006, .pro-relpage #franchiseicon_0009, .pro-relpage #franchiseicon_0010, .pro-relpage #franchiseicon_0011, .pro-relpage #franchiseicon_0012, .pro-relpage #franchiseicon_0013, .pro-relpage #franchiseicon_0014, .pro-relpage #franchiseicon_0021, .pro-relpage #franchiseicon_0022"
    var dleagueteams2 = ".pro-relpage #franchiseicon_0003, .pro-relpage #franchiseicon_0004, .pro-relpage #franchiseicon_0007, .pro-relpage #franchiseicon_0008, .pro-relpage #franchiseicon_0015, .pro-relpage #franchiseicon_0016, .pro-relpage #franchiseicon_0017, .pro-relpage #franchiseicon_0018, .pro-relpage #franchiseicon_0019, .pro-relpage #franchiseicon_0020, .pro-relpage #franchiseicon_0023, .pro-relpage #franchiseicon_0024"
    var premierteams = "#franchiseicon_0001, #franchiseicon_0002, #franchiseicon_0005, #franchiseicon_0006, #franchiseicon_0009, #franchiseicon_0010, #franchiseicon_0011, #franchiseicon_0012, #franchiseicon_0013, #franchiseicon_0014, #franchiseicon_0021, #franchiseicon_0022"
    var dleagueteams = "#franchiseicon_0003, #franchiseicon_0004, #franchiseicon_0007, #franchiseicon_0008, #franchiseicon_0015, #franchiseicon_0016, #franchiseicon_0017, #franchiseicon_0018, #franchiseicon_0019, #franchiseicon_0020, #franchiseicon_0023, #franchiseicon_0024"
    if (window.location.href.indexOf("SORT=ALLPLAY&DISPLAY=LEAGUE") > -1) {
        $('body').addClass('pro-relpage');
        $(premierteams).closest('tr').removeClass().addClass('premierleague--row');
        $(dleagueteams).closest('tr').removeClass().addClass('dleague--row');

        


        $('.report-wrapper').attr('id', 'premierleague').addClass('premierleague pro-rel').clone().removeClass().attr('id', 'dleague').addClass('report-wrapper dleague pro-rel').appendTo('.mobile-wrap');

        $('.premierleague caption span').text('Premier League');
        $('.dleague caption span').text('D-League');
        $('.dleague .premierleague--row, .premierleague .dleague--row').detach();
    }

});

// var premierteams = "#franchiseicon_0001, #franchiseicon_0002, #franchiseicon_0005, #franchiseicon_0006, #franchiseicon_0009, #franchiseicon_0010, #franchiseicon_0011, #franchiseicon_0012, #franchiseicon_0013, #franchiseicon_0014, #franchiseicon_0021, #franchiseicon_0022"
// var dleagueteams = "#franchiseicon_0003, #franchiseicon_0004, #franchiseicon_0007, #franchiseicon_0008, #franchiseicon_0015, #franchiseicon_0016, #franchiseicon_0017, #franchiseicon_0018, #franchiseicon_0019, #franchiseicon_0020, #franchiseicon_0023, #franchiseicon_0024"
// if (window.location.href.indexOf("SORT=ALLPLAY&DISPLAY=LEAGUE") > -1) {
// $('body').addClass('pro-relpage');
// $(premierteams).parent().parent().parent().removeClass().addClass('premierleague--row');
// $(dleagueteams).parent().parent().parent().removeClass().addClass('dleague--row');


// $('.report-wrapper').addClass('premierleague pro-rel').clone().removeClass().addClass('report-wrapper dleague pro-rel').appendTo('.mobile-wrap');

// $('.premierleague caption span').text('Premier League');
// $('.dleague caption span').text('D-League');
// }