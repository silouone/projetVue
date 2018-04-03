// import store from './store'
let chrome

/* alert(`Hello ${store.getters.foo}!`);
alert(window.location.href)
alert(tab.url) */
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test"; alert("works");console.log("foo");'
  })
})
/*
chrome.tabs.query({
  'active': true,
  'currentWindow': true,
  'windowId': chrome.windows.WINDOW_ID_CURRENT
}, function (tabs) {
  var tab = tabs[0]
  if (tab.url === 'https://www.azureva-vacances.com/') {
  // RegExperssion recupérer seulement url de base :
    console.log(tab.url) // api des occurance addidas.fr ==> addidas.fr/macif
    chrome.tabs.update({url: 'https://macif.azureva-vacances.com/'})
    window.close() // Note: window.close(), not this.close()
  }
 }
)
*/
