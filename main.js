var div = document.createElement('div');
div.id = "filtro-svg"
var body = document.querySelector('body');
body.appendChild(div);
$('div#filtro-svg').append('<svg> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="1.3 0 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0 0 0 1 0" /> <feColorMatrix type="saturate" values="2" /> </filter> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.9 0 0 0 0 0 0.9 0 0 0 0 0 1.3 0 0 0 0 0 1 0" /> <feColorMatrix type="saturate" values="2" /> </filter> <filter id="tritanopia"> <feColorMatrix type="matrix" values="1.3 0 0 0 0 0 0.9 0 0 0 0 0 1.3 0 0 0 0 0 1 0" /> <feColorMatrix type="saturate" values="2" /> </filter> <feColorMatrix type="saturate" values="2" /> </filter> <filter id="normal"> <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /> </filter> </defs> </svg>');
$('#filtro-svg').css('display','none');

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "protanopia" ) {
            protanopia();
        } else if( request.message === "deuteranopia" ) {
            deuteranopia();
        } else if( request.message === "tritanopia" ) {
            tritanopia();
        } else {
            normal();
        }
    }
  );

function protanopia(){
    var imgs = document.querySelectorAll('img');
    for(img of imgs) {
        var filtro = '-webkit-filter: url(#protanopia); filter: url(#protanopia);';
        img.style.cssText = filtro;
    }
}

function tritanopia(){
    var imgs = document.querySelectorAll('img');
    for(img of imgs) {
        var filtro = '-webkit-filter: url(#tritanopia); filter: url(#tritanopia);';
        img.style.cssText = filtro;
    }
}

function deuteranopia(){
    var imgs = document.querySelectorAll('img');
    for(img of imgs) {
        var filtro = '-webkit-filter: url(#deuteranopia); filter: url(#deuteranopia);';
        img.style.cssText = filtro;
    }
}

function normal(){
    var imgs = document.querySelectorAll('img');
    for(img of imgs) {
        var filtro = '-webkit-filter: url(#normal); filter: url(#normal);';
        img.style.cssText = filtro;
    }
}