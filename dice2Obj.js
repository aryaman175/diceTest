let a = 150 // side length of cube
let dur = 100;   // for rolling time
let durImg =20; // for switching images

var sketch = function(p)
{
  p.x;
  p.y;
  p.clicked = false; // rolling button pressed
  p.img1,p.img2,p.img3,p.img4,p.img5,p.img6;
  p.imgList =[];
  p.imgCount =0;  // for switching images
  p.time =0;     // for rolling time
  p.angle = 0;
  p.currentImg;
  p.openIndex =-1;
  p.cnvIndex;  // ID number
  p.heading;

  p.preload = function()
  {
    // pushing cnv into list and giving thier id no.
    cnvList.push(p);
    p.cnvIndex = cnvList.length -1;
  //loading images
   console.log(p.cnvIndex)
   p.img1 = p.loadImage(links[p.cnvIndex][0])
   p.img2 = p.loadImage(links[p.cnvIndex][1])
   p.img3 = p.loadImage(links[p.cnvIndex][2])
   p.img4 = p.loadImage(links[p.cnvIndex][3])
   p.img5 = p.loadImage(links[p.cnvIndex][4])
   p.img6 = p.loadImage(links[p.cnvIndex][5])
   // pushing images & shuffling
   p.imgList.push(p.img1,p.img2,p.img3,p.img4,p.img5,p.img6)
   p.imgList = p.shuffleImg(p.imgList)
   p.currentImg = p.imgList[0];

  }

   p.setup = function()
   {
     p.cnv = p.createCanvas(1.9*a, 1.9*a, p.WEBGL);
   }

  p.draw = function()
  {
      if(p.openIndex>=0)
      {
        p.background(255);
        p.cnv.position(p.x,p.y);
        p.writeHead();

      if(p.clicked)
      {
        p.diceRoll();
        p.rotateX(p.angle);
        p.rotateY(p.angle);
      }

      p.texture(p.currentImg);
      p.box(a)
   }
   else
   {
     p.x = -500    // removing from screen
     p.background(255);
     p.cnv.position(p.x,p.y);
   }
}


  p.diceRoll = function()
  {
    if(p.time>dur)
       {
          // pasuing spin
          p.angle= 0
          // resetting variables
          p.clicked = false;
          p.imgCount=0;
          p.time =0;
          // shuffling images
          p.imgList = p.shuffleImg(p.imgList)
       }
      else
      {
        if(p.imgCount<=durImg)
        {
          p.currentImg = p.imgList[0]
        }
        else if(p.imgCount<=durImg*2)
        {
          p.currentImg = p.imgList[1];
        }
        else if (p.imgCount<=durImg*3)
        {
          p.currentImg =p.imgList[2];
        }
        else if (p.imgCount<=durImg*4)
        {
          p.currentImg = p.imgList[3];
         }
        else if (p.imgCount<=durImg*5)
        {
          p.currentImg = p.imgList[4];
        }
        else
        {
          p.currentImg = p.imgList[5];
           if (p.imgCount>=durImg*6)
           {
             p.imgCount =0;
           }
        }

      }
      p.angle += 0.05;
      p.imgCount++;
      p.time++;
  }
   p.shuffleImg = function(myArray)
  {
    let tempArray =[];
    while(myArray.length>0)
    {
      let tempIndex = Math.floor(Math.random() * (myArray.length - 1 - 0) + 0)
      tempArray.push(myArray[tempIndex])
      myArray.splice(tempIndex,1)
    }
    return tempArray;
  }

  p.writeHead = function()
  {
    parasList[p.openIndex].innerHTML = p.heading;
  }
}
