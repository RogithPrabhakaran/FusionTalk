/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const joinButton = document.querySelector(".join-button");
  
    // Toggle dropdowns for each chat message
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        const message = event.target.closest(".chat-message");
        message.classList.toggle("expanded");
        alert("Dropdown clicked: Additional options could be added here!");
      });
    });
  
    // Handle Join Button Click
    joinButton.addEventListener("click", () => {
      alert("Joining the conversation...");
    });
  });
  