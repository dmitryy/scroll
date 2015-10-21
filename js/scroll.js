var items = [];
var count = 100000;

for (var i = 0; i < count; i++) {
    var id = Math.random();
    items.push({ ID: id, Name: 'Item ' + id });
}

$(function () {
    $('#btnDraw100').click(function () {
        $('#test').empty();
        for (var i = 0; i < 100; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
    });
    $('#btnDraw1k').click(function () {
        $('#test').empty();
        for (var i = 0; i < 1000; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
    });
    $('#btnDraw10k').click(function () {
        $('#test').empty();
        for (var i = 0; i < 10000; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
    });
    $('#btnDraw100k').click(function () {
        $('#test').empty();
        for (var i = 0; i < 100000; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
    });
});