document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Create a new comment element
    const newComment = document.createElement("div");
    newComment.classList.add("single-comment");

    // Add comment content with Delete and Edit buttons
    newComment.innerHTML = `
    <strong>${name}</strong>
    <p class="comment-text">${comment}</p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

    // Add the comment to the comments container
    document.getElementById("commentsContainer").appendChild(newComment);

    // Add event listener to the Delete button
    newComment
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        newComment.remove(); // Removes the comment from the DOM
      });

    // Add event listener to the Edit button
    newComment
      .querySelector(".edit-btn")
      .addEventListener("click", function () {
        const commentText = newComment.querySelector(".comment-text");
        const newText = prompt("Edit your comment:", commentText.textContent);
        if (newText !== null) {
          commentText.textContent = newText; // Update the comment content
        }
      });

    // Clear the form
    document.getElementById("commentForm").reset();
  });
