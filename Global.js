document.querySelector("#maplist").addEventListener("click", function(event) {
    var target = event.target;
    var chooseMap = document.querySelector("#choose_map");

    if(target.tagName != 'LI') return;

            if(target.id == "forest") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Forest();

            }

            if(target.id == "editor") {
                chooseMap.parentElement.removeChild(chooseMap);
                new MapEditor();
            }

            if(target.id == "storage") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Storage();
            }

            if(target.id == "building") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Building();
            }

            if(target.id == "factory") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Factory();
            }

            if(target.id == "mansion") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Mansion();
            }

            if(target.id == "area") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Area();
            }

            if(target.id == "first") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_First();
            }

            if(target.id == "final") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Final();
            }

            if(target.id == "bonus") {
                chooseMap.parentElement.removeChild(chooseMap);
                a_map_timer_id = new Map_Bonus();
            }

            a_current_map = target.id;

});

/**
Последовательность карт‚:

Map_First -> Map_Area -> Map_Forest -> Map_Building -> Map_Mansion -> Map_Factory -> Map_Storage -> Map_Final -> Map_Bonus

*/