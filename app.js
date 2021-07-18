 let firstWord = document.querySelector(".firstword")
//  console.log(firstWord.innerText)
document.body.append(firstWord)
 let input = document.querySelector("input")
//  console.log(input.innerText)
 const form = document.querySelector("form")
//  console.log(form)
 
 let result = document.createElement("span");
 document.body.append(result);

 form.addEventListener("submit", (e) => {
     e.preventDefault();
     if (firstWord.innerText[firstWord.innerText.length - 1] === input.value[0]) {
         result.innerText = "딩동댕"
         firstWord.innerText = input.value;
         input.value = "";
         input.focus();
     } else {
         result.innerText = "땡"
         input.value = "";
         input.focus();
     }
 })