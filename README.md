
<!DOCTYPE html>
<html><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Saving Santa</title>

<script type="text/javascript" src="number1.js"></script>
</head>

<body style="text-align:center">

	<p>
		<h1>SAVING SANTA</h1>
	<div id="backStory">
		WE NEED YOUR HELP! Santa has been kidnapped with only two days until Christmas!<br>
	Santa has been missing for two days; a note was found in his home stating: <br>
	"There will be no Christmas this year if I can not work for Santa in his workshop - <br>
	good luck trying to save Christmas, you'll need it!" The letter was signed by Cookie, <br>
	an elf who had just recently been fired from Santa's workshop for constantly eating on <br>
	the job. We know that Santa is somewhere inside of the Workshop. It is up to YOU, as Santa's <br>
	first-hand man (well, elf), to find Santa and save him in time for Christmas! <br>
   </div>

  <div id="inputDiv">
    <p>First, please Enter Your Name:</p>
    <label for="nameBox">Name:</label>
    <input type="text" id="nameBox"> <br>
<br>
  Now, choose an item to start the game with - you will need <br>
  atleast two of the three items in order to successfully <br>
  win the game. <br>

   <input type="button" id="itemOne" value="Yo-Yo"
	onclick="userCreate('Yo-Yo')";>
   <input type="button" id="itemTwo" value="Sugar Cubes"
	onclick="userCreate('Sugar Cubes')";>
   <input type="button" id="itemThree" value="Wrapping Paper"
	onclick="userCreate('Wrapping Paper')";>  

  </div>
        <hr>
  

  <div id="outputDiv"></div>

<div id="continue" style="display:none">
   <input type="button" value="Click to Start the Game!"
	onclick="gameStart()";>

</div>


</body></html>
