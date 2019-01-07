// // chrome.browserAction.onClicked.addListener(function(tab){
// // 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
// // 		chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
// // 	});
// // });

function checkBlock(requestDetails) {
	//console.log("Loading: " + requestDetails.url.hostname);
	//console.log( requestDetails );

	var _uri = requestDetails.url;
	if( _uri.indexOf("evidon") != -1 ) {
		console.log( "blocking: " +  requestDetails.url);
		
		return { cancel: true };
	} else {
		return { cancel: false };
	}
}

chrome.webRequest.onBeforeRequest.addListener(
  checkBlock,
  {
    urls: ["<all_urls>"], // Change this to a more specific pattern
    types: ["script"]
  },
  ["blocking"]
);