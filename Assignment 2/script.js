// Function to filter the hobby list based on user input
function hobbySearch() {
    //get the input value
    const input = document.getElementById("searchBox");
    //convert the input value to lowercase for case-insensitive comparison
    const filter = input.value.toLowerCase();
    //get the hobby list and its items
    const ul = document.getElementById("hobbyList");
    const items = ul.getElementsByTagName("li");

    // Loop through the hobby list items
    for (let i = 0; i < items.length; i++) {
        // Get the text content of each item and convert it to lowercase
        const text = items[i].textContent.toLowerCase();
        // Show or hide the item based on whether it includes the filter text   
        items[i].style.display = text.includes(filter) ? "" : "none";
    }
}

// Function to toggle the visibility of the hobby list
function toggleList() {
    // Get the hobby list element
    const ul = document.getElementById("hobbyList");
    // Toggle the display property between "none" and "block" using ternary operator
    ul.style.display = ul.style.display === "none" ? "block" : "none";
}

// event listener for search box
document.getElementById("searchBox").addEventListener("keyup", hobbySearch);

// event listener for toggle button
document.getElementById("toggleBtn").addEventListener("click", toggleList);