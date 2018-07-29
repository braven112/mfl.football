$(document).ready(function() {
    window.location.href.indexOf("SORT=ALLPLAY&DISPLAY=LEAGUE") > -1 && ($("body").addClass("pro-relpage"), 
    $("#franchiseicon_0001, #franchiseicon_0004, #franchiseicon_0005, #franchiseicon_0009, #franchiseicon_0010, #franchiseicon_0011, #franchiseicon_0013, #franchiseicon_0014, #franchiseicon_0016, #franchiseicon_0017, #franchiseicon_0021, #franchiseicon_0022").closest("tr").removeClass().addClass("premierleague--row"), 
    $("#franchiseicon_0002, #franchiseicon_0003, #franchiseicon_0006, #franchiseicon_0007, #franchiseicon_0008, #franchiseicon_0012, #franchiseicon_0015, #franchiseicon_0018, #franchiseicon_0019, #franchiseicon_0020, #franchiseicon_0023, #franchiseicon_0024").closest("tr").removeClass().addClass("dleague--row"), 
    $(".report-wrapper").attr("id", "premierleague").addClass("premierleague pro-rel").clone().removeClass().attr("id", "dleague").addClass("report-wrapper dleague pro-rel").appendTo(".mobile-wrap"), 
    $(".premierleague caption span").text("Premier League"), $(".dleague caption span").text("D-League"), 
    $(".dleague .premierleague--row, .premierleague .dleague--row").detach());
});