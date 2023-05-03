//your code here

let words= document.getElementById('wordCount');
function count(text){
let text=document.getElementById('evaluatedText').value;
let  spaces=text.match(/\S+/g);
	let words=spaces? spaces.length+1:0;
	let wordCount=document.getElementById('wordCount');
	wordCount.innerText=words;
	
	
	
	
}