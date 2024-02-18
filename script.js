const quoteText = document.getElementById("quote-text");
const quoteBox = document.getElementById("quote-box");
const colorBtns = document.querySelectorAll(".color-btn");
const quotes = [
  "Embrace the unknown, discover your path. - Olivia Andrews",
  "Chase dreams, not doubts. - Ethan Parker",
  "Dare to begin, courage leads the way. - Maya Thompson",
  "In every challenge lies an opportunity. - Liam Foster",
  "Find joy in the journey, not just the destination. - Ava Reynolds",
  "Create your tomorrow, starting today. - Owen Carter",
  "Small steps, big impact. - Harper Mitchell",
  "Believe, achieve, repeat. - Sofia Bennett",
  "Every setback is a setup for a comeback. - Isaac Hayes",
  "Inspiration is everywhere, just look within. - Stella Campbell"
];


function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function changeQuote() {
  const Dquote = getRandomQuote();
  quoteText.textContent = Dquote;
}

window.addEventListener('load', () => changeQuote());



function changeColor(color) {
  const colors = {
    "color-btn1": ["#B6C4B6", "#163020", "#304D30"],
    "color-btn2": ["#D04848", "#6895D2", "#FDE767"],
    "color-btn3": ["#DCF2F1", "#7FC7D9", "#0F1035"],
    "color-btn4": ["#FF9800", "#820300", "#B80000"],
  };

  const [fontColor, borderColor, backgroundColor] = colors[color];
  quoteBox.style.color = fontColor;
  quoteBox.style.borderColor = borderColor;
  quoteBox.style.backgroundColor = backgroundColor;

  fontChanged = false;
  if (!fontChanged) {
    const currentFont = window.getComputedStyle(quoteText).fontFamily;
    const newFont = currentFont === "Arial, sans-serif" ? "Georgia, serif" : "Arial, sans-serif";
    quoteText.style.fontFamily = newFont;
    fontChanged = true;
  }
}

colorBtns.forEach(btn => {
  btn.addEventListener('click', function(){
    changeColor(this.id)
  });
});



//............................................................

function convert() {
  const weightInput = document.getElementById('weight').value;
  const weight = parseFloat(weightInput);
  const conversionType = document.getElementById('conversionType').value;
  const resultSpan = document.getElementById('result');

  if (!isNaN(weight)) {
    let result;
    if (conversionType === 'kgToLb') {
      result = weight * 2.2046;
      resultSpan.innerText = result + " pounds.";
    } else if (conversionType === 'lbToKg') {
      result = weight * 0.4536;
      resultSpan.innerText =  result.toFixed(2) + " kilograms.";
    } else {
      resultSpan.innerText = "Invalid conversion type.";
    }
  } else {
    resultSpan.innerText = "Invalid input.";
  }
}


//.............................................................

const inputField = document.getElementById('numberSeriesInput');
inputField.addEventListener("input", function() {

    const input = inputField.value.trim(); // Trim space
    if (input === "") {
        clearResults();
        return; 
    }
    const numbers = input.split(",").map(Number);

    var allValid = numbers.every(function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
  });

  if (!allValid) {
      clearResults();
      document.getElementById("sum").innerText = "Invalid type";
      document.getElementById("max").innerText = "Invalid type";
      document.getElementById("min").innerText = "Invalid type";
      document.getElementById("average").innerText = "Invalid type";
      document.getElementById("reverse").innerText = "Invalid type";
      return;
  }

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    document.getElementById("sum").innerText = sum;

    const max = Math.max(...numbers);
    document.getElementById("max").innerText = max;
    
    const min = Math.min(...numbers);
    document.getElementById("min").innerText = min;
    
    const average = sum / numbers.length;
    document.getElementById("average").innerText = average.toFixed(2);

    const reversed = numbers.slice().reverse();
    document.getElementById("reverse").innerText = reversed.join(", ");
});
function clearResults() {
    document.getElementById("sum").innerText = "";
    document.getElementById("max").innerText = "";
    document.getElementById("min").innerText = "";
    document.getElementById("average").innerText = "";
    document.getElementById("reverse").innerText = "";
}



//......................................................

window.onload = function() {
  const defaultText = "Sample item 1\nSample item 2\nSample item 3\nSample item 4\n\nSample item 5\nSample item 6\n\n\nSample item 7";
  document.getElementById('text-area').value = defaultText;
};

function clearAll() {
  document.getElementById('text-area').value = '';
}

const textArea = document.getElementById('text-area')

function CapitaLize() {
  const text = textArea.value;
  if (text === '') return;
  if (text === text.toUpperCase()) {
    textArea.value = text.toLowerCase();
  } else {
    textArea.value = text.toUpperCase();
  }
}

function sortText() {
  const lines = textArea.value.split('\n');
  lines.sort();
  textArea.value = lines.join('\n');
}

function reverseText() {
  const lines = textArea.value.split('\n');
  const reversedLines = [];
  for (let i = lines.length - 1; i >= 0; i--) {
    reversedLines.push(lines[i]);
  }
  textArea.value = reversedLines.join('\n');
}

function stripBlank() {
  let lines = textArea.value.split('\n');
  lines = lines.filter(line => line.trim() !== '');
  textArea.value = lines.join('\n');
}

function addNumbers() {
  const lines = textArea.value.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lines[i] = (i + 1) + '. ' + lines[i];
  }
  textArea.value = lines.join('\n');
}

function shuffleLines() {
  const lines = textArea.value.split('\n');
  for (let i = lines.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  textArea.value = lines.join('\n');
}

