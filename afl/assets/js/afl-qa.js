var commish = franchise_id == "0000";
var alNorth = franchise_id == "0001" || franchise_id == "0002" || franchise_id == "0006" ||  franchise_id == "0008" || franchise_id == "0010" || franchise_id == "0012";
var alSouth = franchise_id == "0003" || franchise_id == "0004" || franchise_id == "0005" || franchise_id == "0007" || franchise_id == "0009" || franchise_id == "0011";
var nlEast = commish || franchise_id == "0015" || franchise_id == "0017" || franchise_id == "0019" || franchise_id == "0022" || franchise_id == "0023" || franchise_id == "0024";
var nlWest = franchise_id == "0013" || franchise_id == "0014" || franchise_id == "0016" || franchise_id == "0018" || franchise_id == "0020" || franchise_id == "0021";
var pl = franchise_id == "0001" || franchise_id == "0002" || franchise_id == "0005" ||  franchise_id == "0006" || franchise_id == "0009" || franchise_id == "0010" || franchise_id == "0011" || franchise_id == "0012" || franchise_id == "0013" ||   franchise_id == "0014" || franchise_id == "0021" || franchise_id == "0022";
var dl = franchise_id == "0003" || franchise_id == "0004" || franchise_id == "0007" ||  franchise_id == "0008" || franchise_id == "0015" || franchise_id == "0016" || franchise_id == "0017" || franchise_id == "0018" || franchise_id == "0019" ||   franchise_id == "0020" || franchise_id == "0023" || franchise_id == "0024";

//Get AL North Teams
if (alNorth) {
    $('body').addClass('al-north');
};

//Get AL South Teams
if (alSouth) {
    $('body').addClass('al-south');
};
if (alNorth || alSouth) {
    $('.nl-standings').hide();
    $('body').addClass('al');

};

//Get NL East Teams
if (nlEast) {
    $('body').addClass('nl-east');
};

//Get NL West Teams
if (nlWest) {
    $('body').addClass('nl-west');
};

if (nlEast || nlWest) {
    $('.al-standings').hide();
    $('body').addClass('nl');

    //Change the draft link for NL Teams
    var target="&DISPLAY=CONFERENCE01";
    $('#DraftResults').attr('href', function(i, currentAttribute){
        return currentAttribute + target;
    });
};

if (pl) {
    $('body').addClass('pl');
};

if (dl) {
    $('body').addClass('dl');
};