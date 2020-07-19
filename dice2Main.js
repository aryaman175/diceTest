 let x = screen.width/3 -70  ; // coordinates of first guy
 let y = 100;  //
 let f =3.5; //multipling factor for y coords
 let openList =[];    // all canvases on screen
 let cnvList =[];     // all canvases
 let parasList;       // all 6 paras

$(document).ready(function() {

  let myButton = document.getElementById("roll")      // rolling
  let listButton = document.getElementById("bList")   // Customize
  let myList = document.querySelector("ul")
   parasList = document.querySelectorAll("p");

  // constant position for all 6 paras
  for (let i=0;i<parasList.length;i++)
  {
    parasList[i].style.left = (i%3 + 1)*x - 1.5*a + "px";
    parasList[i].style.top = (Math.floor(i/3)*f + 1)*y - 65 + "px";
  }

  // position elements
  myButton.style.left = 3*x + 50 + "px";  // 50 pixels left of 3rd guy
  myButton.style.top = y + 2*a +150 + "px"; // 2*a to avoid getting hidden by canvas
  myButton.style.fontSize = "30px";

  myList.style.left = 3*x + 50 + "px"; // 50 pixels left of 3rd guy
  myList.style.top = y +a/4 +"px";   // aligning with boxes

  listButton.style.left = 3*x + 50 + "px"; // 50 pixels left of 3rd guy
  listButton.style.top = y +2+"px";  // just above list

  // rolling button
  $(myButton).on("click",function()
 {
    for (let k=0;k<openList.length;k++)
    {
      openList[k].clicked = true;
    }
  })
  // button for opening list
  $(listButton).on("click",function()
 {
    $(myList).slideToggle()
  })

  // buttons in the list
  $("li button").on("click",function()
  {
    // resetiing all headers
    for (let i=0;i<parasList.length;i++)
    {
      parasList[i].innerHTML = "";
    }

    let tempIndex = this.id[1];
    // cnv index
    let myCnv =cnvList[tempIndex];
      if(myCnv.openIndex>=0)
      {
        // closing the button
        // changing button look
        (this).style.color = "black";
        // array stuff
        openList.splice(myCnv.openIndex,1)
        myCnv.openIndex =-1;
        //resetting other indices
        for(let j=0;j<openList.length;j++)
        {
          openList[j].openIndex = j;
          //updating pos
          openList[j].x = (j%3 + 1)*x - 2*a;
          openList[j].y = (Math.floor(j/3)*f + 1)*y
        }
      }
      else
      {
        // chnging button look
        (this).style.color = "#0050b3"
        // array stuff
        openList.push(myCnv)
        // updating index
        let myIndex = openList.length-1;
        myCnv.openIndex = myIndex;
        // updating pos
        myCnv.x = (myIndex %3 + 1)*x - 2*a;
        myCnv.y = (Math.floor(myIndex/3) * f + 1)*y                //Math.floor(((myIndex/3)*f + 1)*y);
      }
  })
});

// creating 2D links array
var links =[]
for(let i=0;i<6;i++)
{
  links[i]=[]
}


//CANVAS 1
links[0].push(f1,f2,f3,f4,f5,f6)
var c1 = new p5(sketch)
c1.heading = "Food"

// CANVAS 2
links[1].push(a1,a2,a3,a4,a5,a6)
var c2 = new p5(sketch)
c2.heading = "Animals"

//CANAVAS 3
links[2].push(v1,v2,v3,v4,v5,v6)
var c3 = new p5(sketch)
c3.heading = "Vehicles"

//CANAVAS 4
links[3].push(ac1,ac2,ac3,ac4,ac5,ac6)
var c4 = new p5(sketch)
c4.heading = "Actions"

//CANAVAS 5
links[4].push(t1,t2,t3,t4,t5,t6)
var c5 = new p5(sketch)
c5.heading = "Toys";

//CANAVAS 5
links[5].push(pl1,pl2,pl3,pl4,pl5,pl6)
var c6 = new p5(sketch)
c6.heading = "Places";
