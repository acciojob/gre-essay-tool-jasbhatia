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

	let text = document.getElementById("evaluatedText").value.trim();
			let wordCount = text.split(/\s+/).length;
			document.getElementById("wordCount").innerHTML = wordCount;
// }
	
	
	
	
}