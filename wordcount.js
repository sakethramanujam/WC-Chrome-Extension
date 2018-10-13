    var mouse = document.getElementById("func");
    
    mouse.onclick=function(){
    console.log("Entered funtion");
    var val = document.getElementById("spaces").value;
    var wordcount =0;
    var spacecount = 0;
    var sentcount =0;
    for(var i=0;i<val.length;i++){
        console.log("Entered for");
        if(val[i]==" "){
            if(val[i+1]!=" ")
            {
                wordcount++;
            }
            spacecount++;
        }
        if(val[i]=="."){
            sentcount++;
        }
   }
    
    document.getElementById("space").innerHTML = spacecount;
    document.getElementById("chars").innerHTML = val.length-spacecount-sentcount;
    document.getElementById("words").innerHTML = wordcount+1;
    document.getElementById("sentences").innerHTML = sentcount;
   // console.log(count+1); commented this out because error shows up in the console
    };
    
