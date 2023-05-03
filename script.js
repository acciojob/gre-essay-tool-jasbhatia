//your code here

// let words= document.getElementById('wordCount');
function count(self) {
  let text = document.getElementById("evaluatedText").value;
  let spaces = self.value.match(/\S+/g);
  let words = spaces ? spaces.length : 0;
  // console.log(words);
  let wordCount = document.getElementById("wordCount");
  // console.log(wordCount);
  wordCount.innerText = words;
}
	
	
	
	
}