
var HomeArr = function(arr) {
    var array = arr;

    this.getFullArr = function() {
        if (Array.isArray(array)) {
            array.forEach(function(item) {
                return item;
            });
        } else if (typeof array === 'string'){
            array.split(', ');
        } else {
            return "- Please write correct ARRAY or STRING";
        }

        return array;
    };

    this.getStringArr = function() {
        var stringArr = [];
        array.forEach(function(item) {
            if(typeof item === 'string') {
                stringArr.push(item);
            }
        });

        return stringArr;
    };

    this.getNumberArr = function() {
        var numberArr = [];
        array.forEach(function(item) {
            if(typeof item === 'number') {
                numberArr.push(item);
            }
        });

        return numberArr;
    };

    //removeArr
    var removeArr = function() {
        var removeArr = [];

        array.forEach(function(item) {
            if(typeof item === 'number' || typeof item === 'string') {
                removeArr.push(item);
            }
        });

        return removeArr;
    };
    //SORT
    this.sort = function(kind) {
        if(kind === 'other'){
            return removeArr().sort();
        } else if(kind === 'number') {
            function compareNumbers(a, b) {
                return a - b;
            }
            return removeArr().sort(compareNumbers);
        }  else if(kind === 'string'){
            return removeArr().join().sort();
        }
    };
    //To STRING
    this.toStr = function() {
        return removeArr().toString();
    };

    this.setArr = function(setArray) {
        array = setArray;
    };
};


var customArr = [undefined, null, 1, 30,  'd', false, true, 20, 'c', 10, '94', 'a', 'b'];

var readyArr = new HomeArr(customArr);

console.log('get all:', readyArr.getFullArr());
console.log('get string:', readyArr.getStringArr());
console.log('get string sort:', readyArr.getStringArr().sort('string'));
console.log('get number:', readyArr.getNumberArr());
console.log('get number sort:', readyArr.getNumberArr().sort('number'));

console.log('sort:', readyArr.sort('other'));

console.log('to STR:', readyArr.toStr());

var newArr = ('Maria, Pavel, Dmitry, Oleg, 2, 3');
readyArr.setArr(newArr);

console.log('Set New Array:', readyArr.getFullArr());
