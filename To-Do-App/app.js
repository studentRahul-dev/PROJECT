// TO_DO_APP USING JS

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");    

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;



  let delBnt = document.createElement("button");
  delBnt.innerText = "delete";
  delBnt.classList.add("dlete");


  item.appendChild(delBnt);

  ul.appendChild(item);
  input.value = "";
});

ul.addEventListener("click" , function(event){
  if(event.target.nodeName =="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted!")
  }
})