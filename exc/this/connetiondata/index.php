<!doctype html>
<html>
<script type="text/javascript">
	document.onkeydown = function(e) {
		if(event.keyCode == 123) {
			return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
			/*alert('Website ini dilindungi Ono_Mouse')*/
			window.location.href= '#';
			return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
			/*alert('Website ini dilindungi Ono_Mouse')*/
			window.location.href= '#';
			return false;
		}
		if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
			/*alert('Website ini dilindungi Ono_Mouse')*/
			window.location.href= '#';
			return false;
		}
	}
</script>
<script language="JavaScript">
/**
  * Disable mouse right-click on page
  * By Arthur Gareginyan (arthurgareginyan@gmail.com)
  * For full source code, visit http://www.mycyberuniverse.com
  */
  document.addEventListener("contextmenu", function(e){
  	e.preventDefault();
  }, false);
</script>
<head>
	<meta charset="utf-8">
	<title>Untitled Document</title>
</head>

<body>
	<?php
	$_HOST = "srv27.niagahoster.com";
	$_USER ="u9043330";
	$_PASS ="Sukses2018";
	$_DBNM="u9043330_best";
	$koneksi = mysqli_connect ($_HOST,$_USER,$_PASS,$_DBNM) or die ("Gagal Koneksi Anda MYSQL-I")

	?>
</body>
</html>