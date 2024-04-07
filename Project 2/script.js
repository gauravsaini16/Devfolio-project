// Get the popup container and the popup window
var popupContainer = document.getElementById("popupContainer");
var popupWindow = document.getElementById("popupWindow");

// Function to open the popup
function openPopup() {
    popupWindow.style.display = "block";
}

// Function to close the popup
function closePopup() {
    popupWindow.style.display = "none";
}

// Show the popup when the user clicks on the box
popupContainer.addEventListener("click", openPopup);



