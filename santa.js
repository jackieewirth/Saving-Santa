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
    
  var name = document.getElementById('nameBox').value;
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
  strYoyo = document.getElementById('actionInput').value;
  downstrYoyo = strYoyo.toLowerCase ();
  
    if (downstrYoyo === 'look around') {
    document.getElementById('outputDiv').innerHTML ='You have picked up a Yo-Yo!';
    document.getElementById('button3').style.display = 'block';
    document.getElementById('yoyoPic').style.display = 'block';
    }
    else {
       if (downstrYoyo === 'next room') {
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
    document.getElementById('outputDiv2').innerHTML ='You have already picked up a Yo-Yo, and there is nothing else in the room. Would you like to go to the next room?';
    document.getElementById('choice1').style.display = 'block';

     }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv2').innerHTML = 'You\'re next destination is the Breakroom; however, you must answer the question correctly in order to move on.';
         document.getElementById('button4').style.display = 'block';
    }
    else {
    document.getElementById('outputDiv2').innerHTML = 'Invalid move.';
    }
   }
  
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
  strSugar = document.getElementById('actionInput3').value;
  downstrSugar = strSugar.toLowerCase ();
  
    if (downstrSugar === 'look around') {
    document.getElementById('outputDiv4').innerHTML ='You have picked up Sugar Cubes!';
    document.getElementById('button6').style.display = 'block';
    document.getElementById('sugarPic').style.display = 'block';
    }
    else {
       if (downstrSugar === 'next room') {
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
    document.getElementById('outputDiv5').innerHTML ='You have already picked up Sugar Cubes and you have found nothing else in the room; would you like to move on to the next room?';    
    document.getElementById('choice2').style.display = 'block';
        }
    else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv5').innerHTML = 'You\'re next destination is the Wrapping Room; however, you must answer the question correctly in order to move on.';
    document.getElementById('button7').style.display = 'block';

        }
    else {
    document.getElementById('outputDiv5').innerHTML = 'Invalid move.';
    }
   }
  
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
                                                  '! You have defeated them and will move on to the next room, the Ice Rink!';
 }
 
 
 function itemChooser2 (chosen, used)
{
  document.getElementById('guards2').innerHTML = 'You have chosen the ' + chosen +
                                                  ' to use against the guards and have' + used +
                                                  '! You have defeated them and will move on to the next room, Santa\'s Office.' + 
                                                  ' However, you notice that there are a series of problems that you must answer correctly inorder to enter the office.';
 }
  
   
function roomAction5 ()
{
  strPaper = document.getElementById('actionInput5').value;
  downstrPaper = strPaper.toLowerCase ();
  
    if (downstrPaper === 'look around') {
    document.getElementById('outputDiv7').innerHTML ='You have picked up Wrapping Paper!';
    document.getElementById('button9').style.display = 'block';
    document.getElementById('paperPic').style.display = 'block';
    
     } else {
      
     if (downstrPaper === 'next room') {
           document.getElementById('outputDiv7').innerHTML = 
          'Uh-Oh! You see from a far that there are guards blocking the door to the next room! You must think quickly! You have items that could be used to get passed the guards. Which item would you like to use?';
                    
          
     
          if (itemStart === 'Tinsel') {
            document.getElementById('Tinsel').style.display = 'block';
           
          
          } else {

           if (itemStart === 'String of Lights') {
                       document.getElementById('Lights').style.display = 'block';
                    
          
           } else {

            if (itemStart === 'Cookies') {
                document.getElementById('Cookies').style.display = 'block';
               
          
                   }
                  }
                }
          
          if (downstrYoyo === 'look around') {
              document.getElementById('yoYo').style.display = 'block';
                  
          }

          if (downstrSugar === 'look around') {
              document.getElementById('sugarCubes').style.display = 'block';
 
          } else {
            document.getElementById('Invalid').innerHTML = 'Invalid move.';
         
      }
    }
  }
 }
  
 
 
function roomAction6 ()
{
  var str = document.getElementById('actionInput6').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv8').innerHTML ='You have already picked up Wrapping Paper; there is no more objects in the room. Would you like to go to the next room?';
    document.getElementById('choice3').style.display = 'block';

        } else {
       if (downstr === 'next room') {
    document.getElementById('outputDiv8').innerHTML = 'Uh-Oh! You see from a far that there are guards blocking the door to the next room!' +
                                                      'You must think quickly! You have items that could be used to get passed the guards. Which item would you like to use?';
              
                       
                
                      
                  if (itemStart === 'Tinsel') {
                      document.getElementById('Tinsel').style.display = 'block';

                   } else {   

                  if (itemStart === 'String of Lights') {
                       document.getElementById('Lights').style.display = 'block';

                   } else {

                  if (itemStart === 'Cookies') {
                       document.getElementById('Cookies').style.display = 'block';
                    }
                }
               }
                
          if (downstrYoyo === 'look around') {
              document.getElementById('yoYo').style.display = 'block';
         } 

          if (downstrSugar === 'look around') {
              document.getElementById('sugarCubes').style.display = 'block';
         } 

          if (downstrPaper === 'look around') {
              document.getElementById('wrappingPaper').style.display = 'block';
         
        } else {
                    document.getElementById('Invalid2').innerHTML = 'Invalid move.';
       }
     }
   }
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
  strHot = document.getElementById('actionInput7').value;
  downstrHot = strHot.toLowerCase ();
  
    if (downstrHot === 'look around') {
    document.getElementById('outputDiv11').innerHTML ='You have picked up Hot Chocolate! This will keep you warm!';
    document.getElementById('button12').style.display = 'block';
    document.getElementById('chocoPic').style.display = 'block';
    }
    else {
       if (downstrHot === 'next room') {
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
    document.getElementById('outputDiv12').innerHTML ='You have already picked up Hot Chocolate; Would you like to move on to the next room?';    
    document.getElementById('choice4').style.display = 'block';

    } else {
       if (downstr === 'next room') {
       document.getElementById('outputDiv12').innerHTML = 'You\'re next destination is the Mail Room; however, you must answer the question correctly in order to move on.';
       document.getElementById('button13').style.display = 'block';  

     } else {
    document.getElementById('outputDiv12').innerHTML = 'Invalid move.';
    }
   }
   
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
    alert('You have picked up a Letter! The Letter says: Be prepared to answer some difficult questions if you want to find Santa.');
    document.getElementById('button15').style.display = 'block';
    }
    else {
       if (downstr === 'next room') {
    
    document.getElementById('outputDiv15').innerHTML = 'Uh-Oh! You see from a far that there are guards blocking the door to the next room!' +
                                                      'You must think quickly! You have items that could be used to get passed the guards. Which item would you like to use?';
                                              
                                               
                 if (itemStart === 'Tinsel') {
                           document.getElementById('Tinsel2').style.display = 'block';

                   } else {

                  if (itemStart === 'String of Lights') {
                       document.getElementById('Lights2').style.display = 'block';

                   } else {

                  if (itemStart === 'Cookies') {
                       document.getElementById('Cookies2').style.display = 'block';
                   }
                  }
                }
         
          
          if (downstrYoyo === 'look around') {
              document.getElementById('yoYo2').style.display = 'block';
          }

          if (downstrSugar === 'look around') {
              document.getElementById('sugarCubes2').style.display = 'block';
          }
          
          if (downstrPaper === 'look around') {
              document.getElementById('wrappingPaper2').style.display = 'block';
          }
          
          if (downstrHot === 'look around') {
              document.getElementById('hotChocolate').style.display = 'block';
    } else {
    document.getElementById('Invalid3').innerHTML = 'Invalid move.';
    }
   }
  }
 }


function roomAction10 ()
{
  var str = document.getElementById('actionInput10').value;
  var downstr = str.toLowerCase ();
  
    if (downstr === 'look around') {
    document.getElementById('outputDiv16').innerHTML ='You have already picked up a Letter; Would you like to move on to the next room? The next room is Santa\'s office!' + 
                                                      'You notice that there are many guards inside of the office and Cookie! Santa must be in there! Answer the questions correctly in order to move into the office.';
    document.getElementById('choice5').style.display = 'block';
    
        }
    else {
       if (downstr === 'next room') {
    
      document.getElementById('outputDiv16').innerHTML = 'Uh-Oh! You see from a far that there are guards blocking the door to the next room!' +
                                                      'You must think quickly! You have items that could be used to get passed the guards. Which item would you like to use?';
                                              
                                              
                 if (itemStart === 'Tinsel') {
                           document.getElementById('Tinsel2').style.display = 'block';

                   } else {

                  if (itemStart === 'String of Lights') {
                       document.getElementById('Lights2').style.display = 'block';

                   } else {

                  if (itemStart === 'Cookies') {
                       document.getElementById('Cookies2').style.display = 'block';
                   }
                  }
                }
         
          
          if (downstrYoyo === 'look around') {
              document.getElementById('yoYo2').style.display = 'block';
          }

          if (downstrSugar === 'look around') {
              document.getElementById('sugarCubes2').style.display = 'block';
         }
                   
          if (downstrPaper === 'look around') {
              document.getElementById('wrappingPaper2').style.display = 'block';
          }
          
          if (downstrHot === 'look around') {
              document.getElementById('hotChocolate').style.display = 'block';
         
         } else {
    document.getElementById('Invalid4').innerHTML = 'Invalid move.';
    }
   }
  }
 }  


function problemFive ()
{
 var ansOne = document.getElementById('answer5').value;
 
 if(ansOne === '6') {
    document.getElementById('outputDiv17').innerHTML =
    'Great Job! You still have two more questions to answer!';
    
    document.getElementById('button17').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv17').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  } 
  
 function problemSix ()
{
 var ansOne = document.getElementById('answer6').value;
 
 if(ansOne === '30' || '10') {
    document.getElementById('outputDiv19').innerHTML =
    'Great Job! You still have one more questions to answer!';
    
    document.getElementById('button18').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv19').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  } 
  
function problemSeven ()
{
 var ansOne = document.getElementById('answer7').value;
 var downansOne = ansOne.toLowerCase ();
  
 if(downansOne === 'claustrophobic') {
    document.getElementById('outputDiv21').innerHTML =
    'Great Job! You have now entered Santa\'s Office!';
    
    document.getElementById('button19').style.display = 'block';
    }
    else {
     document.getElementById('outputDiv21').innerHTML =
     'I\'m sorry, that answer is incorrect. Please try again.';
   }
  }
