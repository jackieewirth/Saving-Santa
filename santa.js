function nextPage(curr) {
      var next, currPage, nextPage;

      next = curr + 1;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
      
      document.getElementById('button2').style.display = 'none';
      document.getElementById('instructions').style.display = 'block';
    }

function start() {
      document.getElementById('page0').style.display = 'block';

    }


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
  
  document.getElementById('page0').innerHTML =
    'Hello ' + name + '! Thank you for helping us find Santa! You have chosen to be a ' +
     characterType + '! You will begin your adventure with the ' + itemStart + '!';
     
    document.getElementById('button').style.display = 'block';

}
}


function gameStart ()
{
  document.getElementById('page0').innerHTML =
  'You currently have the ' + itemStart +
  ', and standing in the Assembly Room of Santa\'s workshop.';
  
   document.getElementById('button').style.display = 'none';
  document.getElementById('button2').style.display = 'block';

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
