function isTouching(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
      ob2.x-ob1.x<ob1.width/2+ob2.width/2&&
      ob2.y-ob1.y<ob1.height/2+ob2.height/2&&
      ob1.y-ob2.y<ob1.height/2+ob2.height/2
        ){
      ob1.shapeColor="green";
      ob2.shapeColor = "green";
    }
    else{
      ob2.shapeColor = "red";
      ob1.shapeColor = "red";
    }
  }
  function bounceOff(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
      ob2.x-ob1.x<ob1.width/2+ob2.width/2){
        ob1.velocityX=ob1.velocityX*(-1);
        ob2.velocityX=ob2.velocityX*(-1);
      }
      if(ob1.y-ob2.y<ob1.height/2+ob2.height/2 &&
        ob2.y-ob1.y<ob1.height/2+ob2.height/2){
          ob1.velocityY=ob1.velocityY*(-1);
          ob2.velocityY=ob2.velocityY*(-1);
        }
  }