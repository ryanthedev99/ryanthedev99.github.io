function fixCursor(value) {
    if (value) {
        document.body.style.cursor = "url('res/cursors/hand-pointer.png'), auto";
    }
    if (!value) {
        document.body.style.cursor = "url('res/cursors/plus-outline.png'), auto";
    }
}

export function iterate(items, items2 = [], items3 = [], items4 = [], items5 = []) {
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            fixCursor(false);
        });
        item.addEventListener('mouseleave', function() {
            fixCursor(true);
        });
    });
    if (items2.length > 0) {
        items2.forEach(item => {
            item.addEventListener('mouseenter', function() {
                fixCursor(false);
            });
            item.addEventListener('mouseleave', function() {
                fixCursor(true);
            });
        }); 
    }
    if (items3.length > 0) {
        items3.forEach(item => {
            item.addEventListener('mouseenter', function() {
                fixCursor(false);
            });
            item.addEventListener('mouseleave', function() {
                fixCursor(true);
            });
        }); 
    }
    if (items4.length > 0) {
        items4.forEach(item => {
            item.addEventListener('mouseenter', function() {
                fixCursor(false);
            });
            item.addEventListener('mouseleave', function() {
                fixCursor(true);
            });
        }); 
    }
    if (items5.length > 0) {
        items5.forEach(item => {
            item.addEventListener('mouseenter', function() {
                fixCursor(false);
            });
            item.addEventListener('mouseleave', function() {
                fixCursor(true);
            });
        }); 
    }
}