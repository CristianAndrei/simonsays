function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
var start = document.getElementById('start');
var order=[];
var currentItem=0;
var buttons=[];
var index=0;
var difficulty={"Easy":"800","Medium":"600","Hard":"400"};
var time={"Easy":"20","Medium":"15","Easy":"10"};

function clickButton(number)
{
    if(order!=[]) 
    {
        if(order.length-1==index && order[index]==number)
        {
              alert("you won");
        }    
       else 
       if(number!=order[index]) 
       {
          order=[];
          index=0;
          alert("you lost");
        }  
    }
    index++;    
}
start.onclick = async function () {
 
    const numberOfTiles=Math.floor(Math.random() * 7)+1;
    document.getElementById('start').disabled = true;
    
    var e= document.getElementById("selectDifficulty");
    dif=e.options[e.selectedIndex].value;

    var i=0;
    order=[];
    while (i < numberOfTiles) {
        
        const tileNumber=Math.floor(Math.random() * 8)+1;
        var tile = document.getElementById(tileNumber);
        tile.style.backgroundColor= "rgb(250,128,114)";
        await sleep(difficulty[dif]);
        tile.style.backgroundColor="rgb(255,255,0)";
        order[i]=tileNumber;
        i++;
    }
    console.log(order);
    document.getElementById('start').disabled = false;
    index=0;
};
