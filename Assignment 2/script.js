// Function to filter the hobby list based on user input
function hobbySearch() {
    //get the input value
    const input = document.getElementById("searchBox");
    //convert the input value to lowercase for case-insensitive comparison
    const lowercaseInput = input.value.toLowerCase();
    //get the hobby list and its items
    const hobbyList = document.getElementById("hobbyList");
    const hobbyListItems = hobbyList.getElementsByTagName("li");

    // Loop through the hobby list items
    for (let i = 0; i < hobbyListItems.length; i++) {
        // Get the text content of each item and convert it to lowercase for comparison
        const lowercaseHobbyText = hobbyListItems[i].textContent.toLowerCase();
        // Show or hide the item based on whether it includes the filter text   
        hobbyListItems[i].style.display = lowercaseHobbyText.includes(lowercaseInput) ? "" : "none";
    }
}

// Function to toggle the visibility of the hobby list
function toggleList() {
    // Get the hobby list element
    const myHobbyList = document.getElementById("hobbyList");
    // Toggle the display property between "none" and "block" using ternary operator
    myHobbyList.style.display = myHobbyList.style.display === "none" ? "block" : "none";
}

// event listener for search box
document.getElementById("searchBox").addEventListener("keyup", hobbySearch);

// event listener for toggle button
document.getElementById("toggleBtn").addEventListener("click", toggleList);