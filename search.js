// Selecting necessary elements from the DOM
let inputBox = document.querySelector(".input-box"),  
    search = document.querySelector(".search"),       
    closeIcon = document.querySelector(".close-icon"); 

// Checking if the elements are correctly selected (for debugging purposes)
console.log(inputBox, search, closeIcon);

// Event listener to expand the search box when the search icon is clicked
search.addEventListener("click", () => inputBox.classList.add("open"));

// Event listener to collapse the search box when the close icon is clicked
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));
