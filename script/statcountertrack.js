function TrackSOD()
{
    var initScriptTextSOD = 'var sc_project=4128259; var sc_invisible=1; var sc_partition=49; var sc_click_stat=1; var sc_security="50dfe4b1";';
    TrackDownload(initScriptTextSOD);
}

function TrackTwebstFree()
{
    var initScriptTextFree = 'var sc_project=4126259; var sc_invisible=1; var sc_partition=49; var sc_click_stat=1; var sc_security="17e5e01a";';
    TrackDownload(initScriptTextFree);
}

function TrackTwebstPro()
{
    var initScriptTextPro = 'var sc_project=4126249; var sc_invisible=1; var sc_partition=49; var sc_click_stat=1; var sc_security="7ed0a2ea";'
    TrackDownload(initScriptTextPro);
}

function IEInsertTrackingScripts(initScriptText)
{
    var initScript = document.createElement("script");
    initScript.type = "text/javascript";
    initScript.text = initScriptText;

    var logScript = document.createElement("script");
    logScript.type = "text/javascript";
    logScript.src  = "http://www.statcounter.com/counter/counter.js";

    document.body.appendChild(initScript);
    document.body.appendChild(logScript);
}

function TrackDownload(initScriptText)
{
    try
    {
	    if (navigator.userAgent.indexOf("MSIE") != -1)
	    {
		    // IE browser.
            IEInsertTrackingScripts(initScriptText);
	    }
	    else
	    {
		    // Other browsers (hope it works though it was tested only on FF).
		    FFTrackDownload(initScriptText);
	    }
    }
    catch (e)
    {
    }
}


// Firefox specific.
function FFInsertTrackingScripts(initScriptText)
{
    var initScript = document.createElement("script");
    initScript.setAttribute("type", "text/javascript");
    initScript.textContent = initScriptText;

    var logScript = document.createElement("script");
    logScript.setAttribute("type", "text/javascript");
    logScript.setAttribute("src", "http://www.statcounter.com/counter/counter.js");

    document.body.appendChild(initScript);
    document.body.appendChild(logScript);
}


function FFTrackDownload(initScriptText)
{
    // Delay 3 seconds the script insertion after the download begins.
    window.setTimeout(FFInsertTrackingScripts, 3000, initScriptText);
}
