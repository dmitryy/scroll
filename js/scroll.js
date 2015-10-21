var items = [];
var count = 100000;

for (var i = 0; i < count; i++) {
    var id = Math.random();
    items.push({ ID: id, Name: 'Item ' + id });
}

$(function () {
    $('#btnDraw').click(function () {
        $('#test').empty();
        for (var i = 0; i < items.length; i++) {
            $('#test').append('<div>' + items[i].Name + '</div>');
        }
    });
});