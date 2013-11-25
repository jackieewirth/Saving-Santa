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
 return RandomOneOf (['Tinsel', 'String of Lights', 'Cookies']);
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
   
function problemTwo ()
{
 var ansOne = document.getElementById('answer2').value;
 
 if(ansOne === '3') {
    document.getElementById('outputDiv6').innerHTML =
    'Great Job! You have now moved into the Wrapping Room!';
    
    document.getElementById('button8').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv6').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  }
  
  
  
function itemChooser (chosen, used)
{
  document.getElementById('guards1').innerHTML = 'You have chosen the ' + chosen +
                                                  ' to use against the guards and have' + used +
                                                  '! You have defeated them and will move on to the next room, the Ice Rink';
 }
  
   
function roomAction5 ()
{
  var str = document.getElementById('actionInput5').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv7').innerHTML ='You have picked up Wrapping Paper!';
    document.getElementById('button9').style.display = 'block';
    }    
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv7').innerHTML = 'Uh-Oh! You see from a far that there are guards blocking the door to the next room!' +
                                                      'You must think quickly! You have items that could be used to get passed the guards. Which item would you like to use?';
                                                      
          if (item () === 'Tinsel') {
              document.getElementById('Tinsel').style.display = 'block';
          } else {
          if (item () === 'String of Lights') {
               document.getElementById('Lights').style.display = 'block';
          } else {
          if (item () === 'Cookies') {
               document.getElementById('Cookies').style.display = 'block';
           }
          }
        }                                                         
    }
    else {
    document.getElementById('outputDiv7').innerHTML = 'Invalid move.';
    }
   }
  }
 
 
function roomAction6 ()
{
  var str = document.getElementById('actionInput6').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv8').innerHTML ='You have picked up Wrapping Paper!';
    } else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv8').innerHTML = 'Uh-Oh! You see from a far that there are guards blocking the door to the next room!' +
                                                      'You must think quickly! You have items that could be used to get passed the guards. Which item would you like to use?';
                                                             
          if (item () === 'Tinsel') {
              document.getElementById('Tinsel').style.display = 'block';
           } else {   
          if (item () === 'String of Lights') {
               document.getElementById('Lights').style.display = 'block';
           } else {
          if (item () === 'Cookies') {
               document.getElemetnById('Cookies').style.display = 'block';
              }
            }
        }
      } else {
    document.getElementById('outputDiv8').innerHTML = 'Invalid move.';
    }
   }
  document.getElementById('button10').style.display = 'block';
  }

  
  
  
function problemThree ()
{
 var ansOne = document.getElementById('answer3').value;
 var downstr = ansOne.toLowerCase ();
 
 if(downstr === 'holly') {
    document.getElementById('outputDiv9').innerHTML =
    'Great Job! You have now moved to the Ice Rink!';
    
    document.getElementById('button11').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv9').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  }  
  




function roomAction7 ()
{
  var str = document.getElementById('actionInput7').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv11').innerHTML ='You have picked up Hot Chocolate!';
    document.getElementById('button12').style.display = 'block';
    }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv11').innerHTML = 'You\'re next destination is the Mail Room; however, you must answer the question correctly in order to move on.';
    document.getElementById('button13').style.display = 'block';
    }
    else {
    document.getElementById('outputDiv11').innerHTML = 'Invalid move.';
    }
   }
  }


function roomAction8 ()
{
  var str = document.getElementById('actionInput8').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv12').innerHTML ='You have picked up Hot Chocolate!';    
    
        }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv12').innerHTML = 'You\'re next destination is the Mail Room; however, you must answer the question correctly in order to move on.';
      }
    else {
    document.getElementById('outputDiv12').innerHTML = 'Invalid move.';
    }
   }
   document.getElementById('button13').style.display = 'block';
   }
   
function problemFour ()
{
 var ansOne = document.getElementById('answer4').value;
 
 if(ansOne === '55') {
    document.getElementById('outputDiv13').innerHTML =
    'Great Job! You have now moved to the Mail Room!';
    
    document.getElementById('button14').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv13').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  } 
 
 
 
 
 
 function roomAction9 ()
{
  var str = document.getElementById('actionInput9').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv15').innerHTML ='You have picked up a Letter!';
    document.getElementById('button15').style.display = 'block';
    }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv15').innerHTML = 'You\'re next destination is Santa\'s Office; however, you must answer the question correctly in order to move on.';
    document.getElementById('button16').style.display = 'block';
    }
    else {
    document.getElementById('outputDiv15').innerHTML = 'Invalid move.';
    }
   }
  }


function roomAction10 ()
{
  var str = document.getElementById('actionInput10').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv16').innerHTML ='You have picked up a Letter!';    
    
        }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv16').innerHTML = 'You\'re next destination is Santa\'s Office; however, you must answer the question correctly in order to move on.';
      }
    else {
    document.getElementById('outputDiv16').innerHTML = 'Invalid move.';
    }
   }
   document.getElementById('button16').style.display = 'block';
   }
  
  
