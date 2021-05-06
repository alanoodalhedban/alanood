alert('Welcome to our store')
/*
prompt("what do you want color flower ?");
var colorflower = prompt("what do you want color flower ?")

  if (colorflower ==='red')
   {
     alert('the price :10JD')
   }
   else if(colorflower === 'white')
   {
     alert('the price :15JD')
   }
   else if (colorflower === 'yellow')
   {
     alert('the price :20JD')
    
   }
   else 
   {
     alert ('You must choose which flower you want to buy')
   }

  confirm('Do you want to buy now?')*/

  //input validation

  var username =prompt("Enter  your username ")
  while(username!=='alanood')
  {
    username= prompt('Incorrect again enter  the correct username')
  }

  var flowersNum =prompt("how many flowers do you want to buy")
  var image=''
  for(var i=0; i< flowersNum ; i++){
    
    image=image +'<img src="c.jpg">'
  }
  document.write(image)







  






