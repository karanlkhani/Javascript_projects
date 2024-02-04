function processText(){
   document.getElementById('word').innerHTML = document.getElementById('text').value.split(' ').filter(e=>e).length;
   document.getElementById('chars').innerHTML = document.getElementById('text').value.length;
   document.getElementById('sents').innerHTML = document.getElementById('text').value.split('.').filter(e=>e).length;
   document.getElementById('paras').innerHTML = document.getElementById('text').value.split('\n').filter(e=>e).length;
}
processText();
