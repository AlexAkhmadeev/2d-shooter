function MapEditor() {

    document.querySelector('#menu').innerHTML = '';
    var area = document.createElement('TEXTAREA');
    area.id = 'compiled_map';
    area.style.zIndex = '1205';
    area.style.maxWidth = '200px';
    document.querySelector('#menu').appendChild(area);



    //сетка
    (function makeGreed() {
        var step = 25;
        var fieldHeight = 800;
        var fieldWidth = 1500;
        var trsCount = fieldHeight/step;
        var tdsCount = fieldWidth/step;
        var table = document.createElement('TABLE');
        table.style.position = 'absolute';
        table.classList.add('grid');
        table.style.top = '50px';
        table.style.left = '250px';
        table.style.width = fieldWidth;
        table.style.height = fieldHeight;
        var inner = "";
        for(var i = 0; i < trsCount; i++) {
            inner+="<tr class='grid'>\n";
            for(var j = 0 ; j < tdsCount; j++) {
                inner+="<td class='grid'></td>\n";
            }
            inner+='</tr>\n';
        }
        table.innerHTML = inner;
        document.body.appendChild(table);
    })();

    var isMouseDown = false;
    var x1, x2, y1, y2;

    /** Нчальный заготовок */
    var block = new Block();
    var box = new BlockBreakable(); // Разбивающийся блок
    var smallBox = new BlockBreakable(); // Разбивающийся блок
    var healthkit = new HealthKit("hk"); // Аптечки
    var launcherbox = new Weaponbox('launcher'); // Новый weaponbox
    var laserbox = new Weaponbox('laser'); // Новый weaponbox
    var antitankbox = new Weaponbox('antitank'); // Новый weaponbox

    block.opacity = 0.7;
    block.backgroundImage = 'url(textures/wood1.jpg)';
    //рамка
    block.appear(250, 1750, 50, 75);
    block.appear(1725, 1750, 50, 900);
    block.appear(250, 275, 75, 900);
    block.appear(250, 1750, 890, 915);

    var selectedObject = {
        isSelected: false,
        selectedElement: null
    };

    var border = {
        currentBorder: null
    };

    //Свой курсор
    var myCursor = document.createElement('div');
    myCursor.style.position = 'absolute';
    myCursor.classList.add('grid');
    myCursor.style.height = '15px';
    myCursor.style.width = '15px';
    myCursor.style.zIndex = '201';
    myCursor.style.backgroundSize = '100% 100%';
    myCursor.style.cursor = 'none';
    myCursor.style.backgroundImage = 'url(textures/cross.png)';
    document.body.appendChild(myCursor);

    document.addEventListener('mousedown', goMouseDown);
    document.addEventListener('mouseup', goMouseUp);
    document.addEventListener('mousemove', goMouseMove);
    document.addEventListener('keydown', goKeyDown);


    var border = document.createElement('DIV');
    border.classList.add('border');
    border.classList.add('grid');

    function goKeyDown(event) {
        var keyCode = event.keyCode;
        console.log(keyCode);
        if( keyCode == 46) {
            if(selectedObject.selectedElement) {
                document.body.removeChild(selectedObject.selectedElement);
            }
        }

        if( keyCode == 120) {
          compile();
        }

        if( keyCode == 13) {
            setBlock();
        }

        if( keyCode == 27) { // Отмена выделений
           if(selectedObject.isSelected) {
               select(selectedObject.selectedElement, true);
           }
        }

    }


    function goMouseDown(event) {
        var target = event.target;
        if(border.isBorder) {
            document.body.removeChild(border.currentBorder);
            border.currentBorder = null;
        }

        isMouseDown = true;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.elementFromPoint(x, y);
        select(elem, false);

        if(!document.elementFromPoint(x, y).classList.contains('grid')) return;

        x1 = myCursor.getBoundingClientRect().left + myCursor.offsetHeight/2;
        y1 = myCursor.getBoundingClientRect().top + myCursor.offsetHeight/2;

        border.style.top = y1 + 'px';
        border.style.left = x1 + 'px';
        border.style.width = 1 + 'px';
        border.style.height = 1 + 'px';
        myCursor.hidden = true;
        document.body.appendChild(border);
        border.currentBorder = border;

        if(target.id == 'menu' || target.id == 'compiled_map') return;
        event.preventDefault();
    }


    function goMouseMove(event) {
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.elementFromPoint(x, y);

        if( !elem.classList.contains('grid') ) {
            myCursor.hidden = true;
            return;
        }
        myCursor.hidden = false;
        if( elem.tagName == 'TABLE' || elem.tagName == 'DIV') return;

        myCursor.style.left = elem.getBoundingClientRect().left - myCursor.offsetWidth/2 - 2 + 'px';
        myCursor.style.top = elem.getBoundingClientRect().top - myCursor.offsetHeight/2 - 2  + 'px';

        x2 = myCursor.getBoundingClientRect().left + myCursor.offsetHeight/2;
        y2 = myCursor.getBoundingClientRect().top + myCursor.offsetHeight/2;

        if(isMouseDown) {
            border.style.height = y2 - y1 - 2  + 'px';
            border.style.width = x2 - x1 - 2 + 'px';
        }


    }

    function goMouseUp(event) {
        isMouseDown = false;
        myCursor.hidden = false;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.elementFromPoint(x, y);

    }

    function select(elem, unselect) {

        if(unselect) {
            console.log('Отмена выделения');
            selectedObject.selectedElement.style.border = '';
            selectedObject.selectedElement.style.opacity = '0.7';
            selectedObject.selectedElement = null;
            return;
        }

        if(selectedObject.selectedElement) {
            selectedObject.selectedElement.style.border = '';
            selectedObject.selectedElement.style.opacity = '0.7';
            selectedObject.selectedElement = null;
        }

        if( !elem.classList.contains('block') ) {
            return;
        }
        if(selectedObject.selectedElement) {
            selectedObject.selectedElement = null;
        }
        selectedObject.selectedElement = elem;
        selectedObject.isSelected = true;

        elem.style.border = '1px solid yellow';
        elem.style.opacity = '1';
    }

    function setBlock() {

        if( !border.currentBorder ) return;

        var coords = border.currentBorder.getBoundingClientRect();
        var a, b, c, d;
        a = coords.left;
        b = coords.right;
        c = coords.top;
        d = coords.bottom;
        block.appear(a, b, c, d);
        document.body.removeChild(border.currentBorder);
        border.currentBorder = null;

    }


    function compile() {
        var totalCode = "var block = new Block(); // Статичный блок\n" +
        "block.backgroundImage = 'url(textures/wood1.jpg)';\n" +
        "var box = new BlockBreakable(); // Разбивающийся блок\n" +
        "var smallBox = new BlockBreakable(); // Разбивающийся блок\n" +
        "var healthkit = new HealthKit(\"hk\"); // Аптечки\n" +
        "var launcherbox = new Item_Weaponbox('launcher'); // Новый weaponbox\n" +
        "var laserbox = new Item_Weaponbox('laser'); // Новый weaponbox\n" +
        "var antitankbox = new Item_Weaponbox('antitank'); // Новый weaponbox\n";

        var blocks = document.querySelectorAll('.block');

        for(var i = 0 ; i < blocks.length; i++) {
            var coords = blocks[i].getBoundingClientRect();
            var x1, x2, y1, y2;

            x1 = coords.left;
            x2 = coords.right;
            y1 = coords.top;
            y2 = coords.bottom;

            totalCode += "block.appear(" + x1 + ", " + x2 + " ," + y1 + ", " + y2 + ");\n";

        }

        alert('The map was successfully compiled!');
        area.value = totalCode; // "<div><pre style='color: white'>" + totalCode + "</pre></div>";

    }

}