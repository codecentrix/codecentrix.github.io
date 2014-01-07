// FREE code from CODECENTRIX
// http://www.codecentrix.com/
// http://codecentrix.blogspot.com/

var shell          = WScript.CreateObject("WScript.Shell");
var quickLaunchDir = shell.ExpandEnvironmentStrings("%userprofile%") + "\\Application Data\\Microsoft\\Internet Explorer\\Quick Launch";
var oShellLink     = shell.CreateShortcut(quickLaunchDir + "\\" + "Codecentrix.lnk");

oShellLink.TargetPath       = "http://www.codecentrix.com/";
oShellLink.IconLocation     = "http://www.codecentrix.com/favicon.ico";
oShellLink.WindowStyle      = 1;
oShellLink.Description      = "Web Site";
oShellLink.Save();
