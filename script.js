// Printing line in HTML page using h1 element id as title1
document.getElementById("title1").innerHTML="Add your To Do List here "
// Printing line in HTML page using h1 element id as title2
document.getElementById("title2").innerHTML="To Do List :"
// creating function to take inout from text box and create the list item & add the delete button for list item
function add_item(){
    let item = document.getElementById("input");
    let list_item = document.getElementById("list_item");
    if(item.value != ""){
        // create li element and assign it to make_li
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value = ""; // for reset input in text box
        // create button and assign to del & add properties to the button
        var del = document.createElement("button");
        del.innerHTML = "Delete";
        del.style.marginLeft ="10px";
        del.style.marginBottom = "4px";
        del.type = "button";
        make_li.append(del);
        // delete the button and li by clicking on delete
        del.onclick = function(){
            this.parentNode.remove(this);
        }
    }
    else{
        // create alert message if user clicked add button without entering any input
        alert("Please enter data");
    }
    
}