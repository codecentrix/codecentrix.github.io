// This script might not work in Windows Vista with IE7 protected mode ON unless you launch the script
// from an elevated console or launch with low integrity level !!!

// Create an IE automation object.
var ie = new ActiveXObject("InternetExplorer.Application");

// Make it visible and navigate to a given URL.
ie.Visible = true;
ie.Navigate("http://www.google.com/");

// Give it some time to load the page and then get the document.
WScript.Sleep(3000);
var doc = ie.Document;

// Fill out search field.
var edit = doc.getElementsByName("q").item(0);
edit.value = "codecentrix";

// ... and press the submit button.
var submit = doc.getElementsByName("btnG").item(0);
submit.click();
