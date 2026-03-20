export function iterate(items, items2 = [], items3 = []) {
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            fixCusor(false);
        });
        item.addEventListener('mouseleave', function() {
            fixCusor(true);
        });
    });
    if (items2.length > 0) {
        items2.forEach(item => {
            item.addEventListener('mouseenter', function() {
                fixCusor(false);
            });
            item.addEventListener('mouseleave', function() {
                fixCusor(true);
            });
        }); 
    }
    if (items3.length > 0) {
        items3.forEach(item => {
            item.addEventListener('mouseenter', function() {
                fixCusor(false);
            });
            item.addEventListener('mouseleave', function() {
                fixCusor(true);
            });
        }); 
    }
}

module.exports = { iterate };