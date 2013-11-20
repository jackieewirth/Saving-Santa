function RandomInt (low, high)
{
  return Math.floor(Math.random()*(high-low+1)) + low;
}


function RandomOneOf (list)
{
  return list[RandomInt(0, list.length-1)];
}

function room ()
{
 return RandomOneOf (['Assembly Room', 'Wrapping Room', 'Break Room', 'Mail Room']);
}



function userCreate (itemName)
{
  var name;
  
  name = document.getElementById('nameBox').value;
  roomStart = room ();

	if (name == '') {
   alert('Please type your name into the textbox!');
    } else {
  
  document.getElementById('outputDiv').innerHTML =
    'Hello ' + name + '! Thank you for helping us find Santa! You have chosen the ' +
     itemName + ' to start with! You will begin your adventure in the ' + roomStart + '!';

  document.getElementById('inputDiv').style.display = 'none';
  document.getElementById('continue').style.display = 'block';
}
}


function gameStart ()
{
  document.getElementById('outputDiv').innerHTML =
  'You are currently standing in the ' + roomStart +
  '. What would you like to do?';

 document.getElementById('backStory').style.display = 'none';
}
