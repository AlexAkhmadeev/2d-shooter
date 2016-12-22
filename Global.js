

document.querySelector("#maplist").addEventListener("click", function(event) {
    var target = event.target;
    var chooseMap = document.querySelector("#choose_map");



    if(target.tagName != 'LI') return;

    if(target.id == "forest") {
        chooseMap.parentElement.removeChild(chooseMap);
        new Map_Forest();
    }

    if(target.id == "editor") {
        chooseMap.parentElement.removeChild(chooseMap);
        new MapEditor();
    }

    if(target.id == "storage") {
        chooseMap.parentElement.removeChild(chooseMap);
        new Map_Storage();
    }

    if(target.id == "building") {
        chooseMap.parentElement.removeChild(chooseMap);
        new Map_Building();
    }

    if(target.id == "factory") {
        chooseMap.parentElement.removeChild(chooseMap);
        new Map_Factory();
    }

});