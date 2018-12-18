var commish = "0000" == franchise_id, alNorth = "0001" == franchise_id || "0002" == franchise_id || "0006" == franchise_id || "0008" == franchise_id || "0010" == franchise_id || "0012" == franchise_id, alSouth = "0003" == franchise_id || "0004" == franchise_id || "0005" == franchise_id || "0007" == franchise_id || "0009" == franchise_id || "0011" == franchise_id, nlEast = commish || "0015" == franchise_id || "0017" == franchise_id || "0019" == franchise_id || "0022" == franchise_id || "0023" == franchise_id || "0024" == franchise_id, nlWest = "0013" == franchise_id || "0014" == franchise_id || "0016" == franchise_id || "0018" == franchise_id || "0020" == franchise_id || "0021" == franchise_id, pl = "0001" == franchise_id || "0002" == franchise_id || "0005" == franchise_id || "0006" == franchise_id || "0009" == franchise_id || "0010" == franchise_id || "0011" == franchise_id || "0012" == franchise_id || "0013" == franchise_id || "0014" == franchise_id || "0021" == franchise_id || "0022" == franchise_id, dl = "0003" == franchise_id || "0004" == franchise_id || "0007" == franchise_id || "0008" == franchise_id || "0015" == franchise_id || "0016" == franchise_id || "0017" == franchise_id || "0018" == franchise_id || "0019" == franchise_id || "0020" == franchise_id || "0023" == franchise_id || "0024" == franchise_id;

if (alNorth && $("body").addClass("al-north"), alSouth && $("body").addClass("al-south"), 
(alNorth || alSouth) && ($(".nl-standings").hide(), $("body").addClass("al")), nlEast && $("body").addClass("nl-east"), 
nlWest && $("body").addClass("nl-west"), nlEast || nlWest) {
    $(".al-standings").hide(), $("body").addClass("nl");
    var target = "&DISPLAY=CONFERENCE01";
    $("#DraftResults").attr("href", function(i, a) {
        return a + target;
    });
}

pl && $("body").addClass("pl"), dl && $("body").addClass("dl");