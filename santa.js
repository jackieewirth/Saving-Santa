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
    document.getElementById('button3').style.display = 'block';
    }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv').innerHTML = 'You\'re next destination is the Breakroom; however, you must answer the question correctly in order to move on.';
    document.getElementById('button4').style.display = 'block';
    }
    else {
    document.getElementById('outputDiv').innerHTML = 'Invalid move.';
    }
   }
  }

function roomAction2 ()
{
  var str = document.getElementById('actionInput2').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv2').innerHTML ='You have picked up a Yo-Yo!';
    }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv2').innerHTML = 'You\'re next destination is the Breakroom; however, you must answer the question correctly in order to move on.';
        }
    else {
    document.getElementById('outputDiv2').innerHTML = 'Invalid move.';
    }
   }
  document.getElementById('button4').style.display = 'block';
  
  }
  
function problemOne ()
{
 var ansOne = document.getElementById('answer1').value;
 
 if(ansOne === '1840') {
    document.getElementById('outputDiv3').innerHTML =
    'Great Job! You have now moved into the Breakroom!';
    
    document.getElementById('button5').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv3').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  }


function roomAction3 ()
{
  var str = document.getElementById('actionInput3').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv4').innerHTML ='You have picked up Sugar Cubes!';
    document.getElementById('button6').style.display = 'block';
    }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv4').innerHTML = 'You\'re next destination is the Wrapping Room; however, you must answer the question correctly in order to move on.';
    document.getElementById('button7').style.display = 'block';
    }
    else {
    document.getElementById('outputDiv4').innerHTML = 'Invalid move.';
    }
   }
  }


function roomAction4 ()
{
  var str = document.getElementById('actionInput4').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv5').innerHTML ='You have picked up Sugar Cubes!';    
    
        }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv5').innerHTML = 'You\'re next destination is the Wrapping Room; however, you must answer the question correctly in order to move on.';
      }
    else {
    document.getElementById('outputDiv5').innerHTML = 'Invalid move.';
    }
   }
   document.getElementById('button7').style.display = 'block';
  }
