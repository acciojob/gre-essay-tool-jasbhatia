//your code here

// let words= document.getElementById('wordCount');
function count() {
  // let text = document.getElementById("evaluatedText").value.trim();
  // let spaces = self.value.match(/\S+/g);
  // let words = spaces ? spaces.length : 0;
  // // console.log(words);
  // let wordCount = document.getElementById("wordCount");
  // // console.log(wordCount);
  // wordCount.innerText = words;

	const evaluatedText = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

evaluatedText.addEventListener('input', () => {
  const text = evaluatedText.value.trim();
  if (text === '') {
    wordCount.textContent = '0';
  } else {
    const count = text.split(/\s+/).length;
    wordCount.textContent = count;
  }
});
// }
	
	
	
	
}