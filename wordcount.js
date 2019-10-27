const inputArea = document.getElementById('inputArea');

inputArea.addEventListener('keyup', (event) => {
    console.log('Entered function');
    
    const val = inputArea.value;
    let wordcount = 0;
    let spacecount = 0;
    let sentcount = 0;
    
    for (let i = 0; i < val.length; i++) {
        console.log('Entered for');
        
        if (val[i] == ' ') {
            if (val[i + 1] != ' ') {
                wordcount++;
            }
            spacecount++;
        }
        
        if (val[i] == '.') {
            sentcount++;
        }
   }
    
    document.getElementById('space').innerHTML = spacecount;
    document.getElementById('chars').innerHTML = val.length - spacecount - sentcount;
    document.getElementById('words').innerHTML = wordcount + 1;
    document.getElementById('sentences').innerHTML = sentcount;
});
