//Helper functions
function Ajax(url, cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            cb(xhttp.responseText);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

var overlay = document.getElementById('overlay');

//Open overlay
document.getElementById('open').addEventListener('click', function() {
    overlay.classList.add('show');
});

//Hide overlay
overlay.addEventListener('click', function(e) {
    if(e.target.classList.contains('show')) overlay.classList.remove('show');
});

//Customize theme
var a = document.getElementById('download');
document.getElementById('customize').addEventListener('submit', function(e) {
    e.preventDefault();
    Ajax('https://raw.githubusercontent.com/NekuNeku/Discord-Theme/master/Neku%20AT.theme.css', function(data) {
        data = data.replace(new RegExp('#e53232', 'g'), document.querySelector('input[type="color"]').value);

        var blob = new Blob([data], {type: 'text/css'});
        var url = window.URL.createObjectURL(blob);
        a.download = 'Neku AT.theme.css';
        a.href = url;
        a.click();
        window.URL.revokeObjectURL(url);
    });
});