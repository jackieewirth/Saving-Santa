function RandomInt (low, high)
{
  return Math.floor(Math.random()*(high-low+1)) + low;
}


function RandomOneOf (list)
{
  return list[RandomInt(0, list.length-1)];
}

function item ()
{
 return RandomOneOf (['Yo-Yo', 'Wrapping Paper', 'Sugar Cubes']);
}



function userCreate (characterType)
{
  var name;
  
  name = document.getElementById('nameBox').value;
  itemStart = item ();

        if (name == '') {
   alert('Please type your name into the textbox!');
    } else {
  
  document.getElementById('outputDiv').innerHTML =
    'Hello ' + name + '! Thank you for helping us find Santa! You have chosen to be a ' +
     characterType + '! You will begin your adventure with the ' + itemStart + '!';

  document.getElementById('inputDiv').style.display = 'none';
  document.getElementById('continue').style.display = 'block';
}
}


function gameStart ()
{
  document.getElementById('outputDiv').innerHTML =
  'You currently have the ' + itemStart +
  ', and standing in the Assembly Room of Santa\'s workshop. What would you like to do?';

 document.getElementById('backStory').style.display = 'none';
 document.getElementById('continue').style.display = 'none';
 document.getElementById('enterButton1').style.display = 'block';
 document.getElementById('instructions').style.display = 'block';
 document.getElementById('actionText').style.display = 'block';
}

function roomAction ()
{
  var str = document.getElementById('actionInput').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv').innerHTML ='You have picked up a Yo-Yo!';
    }
    else {
       if (downstr === 'go right') {
    document.getElementById('outputDiv').innerHTML = 'You are now in the Breakroom.';
    
    document.getElementById('break').style.display = 'block';
    }
    else {
       if (downstr === 'go left') {
    document.getElementById('outputDiv').innerHTML ='You are now in the Wrapping Room.';
    }
    else {
    document.getElementById('outputDiv').innerHTML = 'Invalid move.';
    }
   }
  }
 }


function breakAction ()
{
  var str = document.getElementById('actionInput').value;
  var downstr = str.toLowerCase ();
  
  if (downstr === 'go right') {
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv').innerHTML ='You have picked up Sugar Cubes!';
    }
    else {
       if (downstr === 'go right') {
    document.getElementById('outputDiv').innerHTML = 'You are now in the Assembly Room.';
    }
    else {
       if (downstr === 'go left') {
    document.getElementById('outputDiv').innerHTML ='You are now in the Mail Room.';
    }
    else {
    document.getElementById('outputDiv').innerHTML = 'Invalid move.';
    }
   }
  }
 }
}
