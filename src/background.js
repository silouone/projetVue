import store from './store';

/* alert(`Hello ${store.getters.foo}!`);
alert(window.location.href)
alert(tab.url) */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test"; alert("works");'
    });
});