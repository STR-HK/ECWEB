var now = Date.now();
var exam = Date.parse('2021-10-12 09:00:00')
var calced = exam - now
var left = Math.floor(calced / (24 * 60 * 60 * 1000))
var viewer = document.getElementsByClassName('card__preci')[0]
viewer.innerHTML = `${left} Days Left`


function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://112.151.179.200:8123/pull.js', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

httpGet()