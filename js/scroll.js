var items = [];
var count = 100000;

for (var i = 0; i < count; i++) {
    var id = Math.random();
    items.push({ ID: id, Name: 'Item ' + id });
}

$(function () {
    $('#btnClear').click(function () {
        $('#test').empty();
        $('#time').text('');
    });
    $('#btnDraw100').click(function () {
        var time = Date.now();
        $('#test').empty();
        for (var i = 0; i < 100; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
        var diff = (Date.now() - time) / 1000;
        $('#time').text('Took: ' + diff + ' seconds');
    });
    $('#btnDraw1k').click(function () {
        var time = Date.now();
        $('#test').empty();
        for (var i = 0; i < 1000; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
        var diff = (Date.now() - time) / 1000;
        $('#time').text('Took: ' + diff + ' seconds');
    });
    $('#btnDraw10k').click(function () {
        var time = Date.now();
        $('#test').empty();
        for (var i = 0; i < 10000; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
        var diff = (Date.now() - time) / 1000;
        $('#time').text('Took: ' + diff + ' seconds');
    });
    $('#btnDraw100k').click(function () {
        var time = Date.now();
        $('#test').empty();
        for (var i = 0; i < 100000; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
        var diff = (Date.now() - time) / 1000;
        $('#time').text('Took: ' + diff + ' seconds');
    });
});