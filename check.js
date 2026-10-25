const showModalButton = document.getElementById("showModalButton");
const modal = document.getElementById("myModalBNB");

showModalButton.addEventListener("click", function() {
    modal.style.display = "block"; // Show the modal
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
});

// Add an event listener for the close button
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
});
