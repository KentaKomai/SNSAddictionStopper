var BlockList = (function () {
    var my = {};
    my.get = function (key) { return localStorage.getItem(key); };
    my.put = function (key, value) { return localStorage.setItem(key, value); };
    my.delete = function (key) { return localStorage.removeItem(key); };
    return my;
}());
