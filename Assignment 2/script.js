function hobbySearch() {
  const input = document.getElementById("searchBox");
  const filter = input.value.toLowerCase();
  const ul = document.getElementById("hobbyList");
  const items = ul.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    items[i].style.display = text.includes(filter) ? "" : "none";
  }
}

// SHOW / HIDE FUNCTION
function toggleList() {
  const ul = document.getElementById("hobbyList");
  ul.style.display = ul.style.display === "none" ? "block" : "none";
}

// EVENT LISTENERS
document.getElementById("searchBox")
        .addEventListener("keyup", hobbySearch);

document.getElementById("toggleBtn")
        .addEventListener("click", toggleList);