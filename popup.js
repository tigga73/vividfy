function protanopia() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "protanopia"});
   });
}

function deuteranopia() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "deuteranopia"});
   });
}

function tritanopia() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "tritanopia"});
   });
}

function normal() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "normal"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("protanopia").addEventListener("click", protanopia);
    document.getElementById("deuteranopia").addEventListener("click", deuteranopia);
    document.getElementById("tritanopia").addEventListener("click", tritanopia);
    document.getElementById("normal").addEventListener("click", normal);
});


