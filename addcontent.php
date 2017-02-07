

<?php  		
	include("db_connect.php");
	$filename_riddle = "riddles2.txt";
	$filename_word = "wordlists2.txt";
	$filename_quote = "quotes2.txt";

	function addcontent($filename, $filename2, $filename3){				
		$quotes = array();
		$words = array();
		$riddles = array();
				
		$quotations = array();
		$wordlist = array();	
		$arRiddles = array();
		
		$regex = "/\n/";
		$regex2 = "/\?/";
	
		$fh = fopen($filename,"r");				
		while(($fh_read = fread($fh, filesize($filename))) != false){		
			$quotes = preg_split($regex, $fh_read);				
		}		
		foreach($quotes as $quote){
			$new = preg_replace("/\d+(\.)/","", $quote);
			$new_quotes = preg_replace("/\s/","",$new);			
			if(!empty($new_quotes)){
				$quotations[] = $new;			
			}			
		}	
		fclose($fh);
		
		$fh = fopen($filename2, "r");
		while(($fh_read = fread($fh, filesize($filename2))) != false){
			$words = preg_split($regex, $fh_read);
		}
		foreach($words as $word){
			$new = preg_replace("/\d+(\.)/","", $word);
			$new_words = preg_replace("/\s/","",$new);			
			if(!empty($new_words)){
				$wordlist[] = $new;			
			}
		}				
		fclose($fh);
		
		$fh = fopen($filename3, "r");
		while(($fh_read = fread($fh, filesize($filename3))) != false){
			$riddles = preg_split($regex, $fh_read);
		}
		foreach($riddles as $riddle){
			$new = preg_replace("/\d+(\.)/","", $riddle);
			$new_riddles = preg_replace("/\s/","",$new);			
			if(!empty($new_riddles)){
				$arRiddles[] = $new;			
		}
	}
		fclose($fh);				
		
	$i = 0;
	while($i < 100){		
		$quote = mysql_real_escape_string($quotations[$i]);
		$word = mysql_real_escape_string($wordlist[$i]);
		$riddle = mysql_real_escape_string($arRiddles[$i]);

		$sqlinsert = "INSERT INTO tbldaystarter (quotes, wordlist, riddles) VALUES ("."'".$quote."',".
			"'".$word."',".
			"'".$riddle."'".")"; 
			$result = mysql_query($sqlinsert);
			$i++;			
	}		
}		
	addcontent($filename_quote, $filename_word, $filename_riddle);

?>