/***************************************************************  Calculate the distance between two pairs of earth coordinates.  For now this submits the form, next step is to get it working   in a single page app.***************************************************************/function getUrlVars() {	var vars=[],hash;	var hashes = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');	for (var i=0; i<hashes.length;i++) {		hash=hashes[i].split('=');		vars.push(hash[0]);		vars[hash[0]]=hash[1];	}	return vars;}function degreesToRadians(value) {	var radians=value/57.29577951;	return radians;}function calcDist(longA, latA, longB, latB, units) {	var distance=0;	//convert values from degrees to radians	var longA=degreesToRadians(longA);	var latA=degreesToRadians(latA);	var longB=degreesToRadians(longB);	var latB=degreesToRadians(latB);	// here comes the actual formula that does the calculation in radians and then  	// converts to miles	if (longA == latA && latB == longB) {		distance=0;	} else if ((Math.sin(longA) * Math.sin(longB) + Math.cos(longA) * Math.cos(longB) * Math.cos(latA-latB)) > 1 ) {		distance = 3963.1*Math.acos(1); 	    /* this solved a prob that the guy who derived the formula ran into.  He hadn't fully 	   analyzed it by the time I wrote this script.  I got the formula from 	   http://www.mathforum.com/library/drmath/view/51711.html     	   EG	   */	} else {		distance=3963.1 * Math.acos(Math.sin(longA) * Math.sin(longB) + Math.cos(longA) * Math.cos(longB) * Math.cos(latA-latB));	}	if(units=="m") {		 return Math.round(distance);	} else {		 return Math.round(distance*1.609);	} }function sample() {	(function($) {		$("#longA").val("-5.930120");		$("#latA").val("54.597285");		$("#longB").val("-6.260310");		$("#latB").val("53.349805");	})(jQuery);}