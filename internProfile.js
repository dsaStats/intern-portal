// Edit Mode Toggle Functionality
document.getElementById("edit-mode").addEventListener("change", function () {
  const isEditable = this.checked;

  // Toggle input fields for editing
  document.getElementById("full-name").disabled = !isEditable;
  document.getElementById("role").disabled = !isEditable;
  document.getElementById("bio").disabled = !isEditable;
  document.getElementById("linkedin").disabled = !isEditable;
  document.getElementById("github").disabled = !isEditable;

  // Toggle achievements buttons and inputs
  document.querySelectorAll(".remove-achievement").forEach((btn) => {
    btn.disabled = !isEditable;
  });
  document.getElementById("add-achievement").disabled = !isEditable;

  // Toggle profile photo upload
  document.getElementById("photo-upload").style.display = isEditable
    ? "block"
    : "none";
});

// Handle Profile Photo Upload
const photoUploadInput = document.getElementById("photo-upload");
const profileImg = document.getElementById("profile-img");

photoUploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Handle Achievement Addition
document
  .getElementById("add-achievement")
  .addEventListener("click", function () {
    const achievementsList = document.getElementById("achievements-list");

    // Prompt for new achievement text
    const newAchievementText = prompt("Enter your new achievement:");

    if (newAchievementText) {
      // Create new list item
      const newAchievement = document.createElement("li");
      newAchievement.innerHTML = `${newAchievementText} <button class="remove-achievement">Remove</button>`;

      // Append new achievement to list
      achievementsList.appendChild(newAchievement);

      // Enable remove functionality
      newAchievement
        .querySelector(".remove-achievement")
        .addEventListener("click", function () {
          achievementsList.removeChild(newAchievement);
        });
    }
  });

// Handle Achievement Removal
document.querySelectorAll(".remove-achievement").forEach((button) => {
  button.addEventListener("click", function () {
    const listItem = this.parentElement;
    listItem.remove();
  });
});
