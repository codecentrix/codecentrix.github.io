function CheckUpgrade(regToId, prodKeyId)
{
	try
	{
		var regTo   = document.getElementById(regToId).value;
		var prodKey = document.getElementById(prodKeyId).value;
		
		prodKey = prodKey.replace(/^\s+|\s+$/g,""); // Trim.
		regTo   = regTo.replace(/^\s+|\s+$/g,""); // Trim.

		// You're here... Now what?
		return ((regTo.length > 0) && (prodKey.length == 33) && (prodKey[8] == '-') && (prodKey[17] == '-') && (prodKey[26] == '-'));
	}
	catch (ex)
	{
		alert(ex);
		return false;
	}
	
	return false;
}


function OnUpgrade(evt, regToId, prodKeyId)
{
	if (evt.preventDefault)
	{
		evt.preventDefault();
	}
	else
	{
		event.returnValue = false;
	}
		
	if (!CheckUpgrade(regToId, prodKeyId))
	{
		window.alert("Invalid registration information!");
	}
	else
	{
		// Get your discount; you deserve it!
		window.location = "https://www.plimus.com/jsp/buynow.jsp?contractId=2599778&couponCode=twbst268733";
	}
}
