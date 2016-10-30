// JavaScript Document

/*
	This snippet is a utility that enables you to integrate timing features into your web app. It's supported by various web browsers including Internet Explorer 9.0 above, Google Chrome, Mozilla Firefox, etc.

*/
if( localStorage !== undefined ){
	
	if(localStorage.getItem('stime') != NaN && localStorage.getItem('mtime') != NaN){
		minutes, mins = Number(localStorage.getItem('mtime'));
		seconds, secs = Number(localStorage.getItem('stime'));	
		timer();
	}	
	else{
		var secs = 0;				
		var mins = 0;
		var minutes = 0;
		var seconds = 0;		
		timer();
	}
	function timing(){		
		secs = secs + 1;

		if(secs == 60){
			secs = 0;
			mins += 1;		
							
				
			localStorage.setItem('mtime', mins);
			localStorage.setItem('stime', secs);
			var minutes = Number(localStorage.getItem('mtime'));			
			var seconds = Number(localStorage.getItem('stime'));	
		//Before displaying values check whether Seconds was less than 10, then display it with a leading 0 otherwise display it as it was 
		//Before displaying values check whether Minutes was less than 10, then display it with a leading 0 otherwise display it as it was 
		if(seconds < 10 )
			seconds = '0'+secs;			
		if(minutes < 10)
			minutes = '0'+mins;
		document.getElementById("duration").value = minutes + ' : ' + seconds;
			
		//Updating the values of minutes and seconds
		minutes, mins = Number(localStorage.getItem('mtime'));
		seconds, secs = Number(localStorage.getItem('stime'));	
		}else{			
			localStorage.setItem('mtime', mins);
			localStorage.setItem('stime', secs);	
			minutes = Number(localStorage.getItem('mtime'));
			seconds = Number(localStorage.getItem('stime'));
			//If Seconds was less than 10 display it with a leading 0 otherwise display it as it was 
			//If Minutes was less than 10 display it with a leading 0 otherwise display it as it was 
			if(seconds < 10 )
				seconds = '0'+seconds;			
			if(mins < 10)
			minutes = '0'+minutes;
			document.getElementById("duration").value = 
					minutes + ' : ' + seconds;
			
			//Updating the values of minutes and seconds
			minutes, mins = Number(localStorage.getItem('mtime'));
			seconds, secs = Number(localStorage.getItem('stime'));
		}		
	}
	
}
	function timer(){
		setInterval('timing();',1000);	
		if(window.close()){
			localStorage.clear();	
		}
	}

//27836