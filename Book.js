var btn = document.getElementById("btn")
var container = document.querySelector(".container")
var bookname = document.getElementById("book-name")
var author = document.getElementById("author")
var description = document.getElementById("description")
var bookform = document.querySelector(".bookform")
var bookadd = document.querySelector(".book-add")
var bookcancel = document.querySelector(".book-cancel")
var box = document.querySelector(".box")

btn.addEventListener("click", function (event) {
    event.preventDefault();
    bookform.style.display = "block";
    container.style.display = "block";

})


// to prevent the page form reloading by clicking the add and cancel button without filling the
// fields of input. it prevents the page form reloading in everyclick in the first.

bookadd.addEventListener("click", function (event) {
    event.preventDefault();

    // Only proceed if all fields have values (optional)
    if(bookname.value && author.value && description.value) {
        var div = document.createElement("div");
        div.setAttribute("class","box-container");
        div.innerHTML = `
            <h1>${bookname.value}</h1>
            <h2>${author.value}</h2>
            <p>${description.value}</p>
            <button onClick="this.parentElement.remove()">Delete</button>
        `;
        box.append(div);

        // Hide the form
        bookform.style.display = "none";
        container.style.display = "none";

        // **Reset the form fields**
        bookname.value = "";
        author.value = "";
        description.value = "";
    } else {
        alert("Please fill all the fields before adding a book!");
    }
});

bookcancel.addEventListener("click", function (event) {
    event.preventDefault();
    bookform.style.display = "none";
    container.style.display = "none";

})

function bookdlt(event){
    event.target.parentElement.remove();
}

