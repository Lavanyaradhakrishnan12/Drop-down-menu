
let availableKeywords = ["biriyani","South Indian Meals","Dhalrice and potato fry",
"Chicken chettinad" ,
"Appam", 
"Paneer Rice" ,
"Hydrabed Biriyani",
"Curd and Tomato Rice"];

const resultbox =  document.querySelector(".result-box");
const inputbox  =  document.getElementById('input-box');
const imgbox = document.getElementById('img-addr');

inputbox.addEventListener("click",function(){
    imgbox.classList.remove("hidden");
});
inputbox.onkeyup = function() {
    let results = [];
    let input  = inputbox.value;
  
    if(input.length){
      
        results = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(results);
    }
    

    display(results);
    if(!results.length){
        resultbox.innerHTML ="";
    }
   
}
function display(results){
    const content = results.map((list) => {
        return "<li onclick= selectInput(this)>" + list + "</li>";

    }).join("");
    resultbox.innerHTML = "<ul>"  + content + "</ul>";
  

}
function selectInput(list){
    inputbox.value = list.innerHTML;
    resultbox.innerHTML ="";
    
}
