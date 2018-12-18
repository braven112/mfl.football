var commish = franchise_id == "0000";
var northwest = franchise_id == "0001" || franchise_id == "0002" || franchise_id == "0010" || franchise_id == "0012";
var southwwest = franchise_id == "0004" || franchise_id == "0006" || franchise_id == "0011" || franchise_id == "0013";
var central = franchise_id == "0003" || franchise_id == "0005" || franchise_id == "0008" || franchise_id == "0014";
var east = franchise_id == "0007" || franchise_id == "0009" || franchise_id == "0015" || franchise_id == "0016";

$('#division00').parent().parent().parent().addClass('hidden');
$('#division01').parent().parent().parent().addClass('hidden');
$('#division02').parent().parent().parent().addClass('hidden');
$('#division03').parent().parent().parent().addClass('hidden');

//Get NW Teams
if (northwest || commish) {
    $('body').addClass('northwest');
    $('#division00').parent().parent().parent().removeClass('hidden');
};

//Get SW Teams
if (southwwest) {
    $('body').addClass('southwwest');
    $('#division01').parent().parent().parent().removeClass('hidden');
};

//Get Central Teams
if (central) {
    $('body').addClass('central');
    $('#division02').parent().parent().parent().removeClass('hidden');
};

//Get East Teams
if (east) {
    $('body').addClass('east');
    $('#division03').parent().parent().parent().removeClass('hidden');
};
