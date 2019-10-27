const inputArea = document.getElementById('inputArea');
const spaceElem = document.getElementById('space');
const charsElem = document.getElementById('chars');
const wordsElem = document.getElementById('words');
const sentencesElem = document.getElementById('sentences');

inputArea.addEventListener('keyup', () => {
    console.log('Entered function');
    
    const val = inputArea.value;
    let wordcount = 0;
    let spacecount = 0;
    let sentcount = 0;
    
    for (let i = 0; i < val.length; i++) {
        console.log('Entered for');
        
        if (val[i] === ' ') {
            if (val[i + 1] !== ' ') {
                wordcount++;
            }
            spacecount++;
        }
        
        if (val[i] === '.') {
            sentcount++;
        }
   }
    
    spaceElem.textContent = spacecount;
    charsElem.textContent = val.length - spacecount - sentcount;
    wordsElem.textContent = wordcount + 1;
    sentencesElem.textContent = sentcount;
});
