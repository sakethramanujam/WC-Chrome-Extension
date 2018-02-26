    var mouse = document.getElementById("func");
    
    mouse.onclick=function(){
    console.log("Entered funtion");
    var val = document.getElementById("spaces").value;
    var wordcount =0;
    var sentcount =0;
    for(var i=0;i<val.length;i++){
        console.log("Entered for");
        if(val[i]==" "){
            wordcount++;
        }
        if(val[i]=="."){
            sentcount++;
        }
   }
    
    document.getElementById("space").innerHTML = wordcount;
    document.getElementById("chars").innerHTML = val.length-wordcount;
    document.getElementById("words").innerHTML = wordcount+1;
    document.getElementById("sentences").innerHTML = sentcount;
    console.log(count+1);
    };
    
