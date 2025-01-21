// Get the triggering element
const copyUrlBtn = document.getElementById("copy-url-btn");

// Action to copy to clipboard
copyUrlBtn.addEventListener("click", () => copyToClipboard());

// Copy to clipboard function
function copyToClipboard() {
  const thumbnailUrl = document.getElementById("thumbnail-url");
  thumbnailUrl.select();
  thumbnailUrl.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(thumbnailUrl.value)
    .then(() => {
      console.log("URL thumbnail copied: ", thumbnailUrl.value);
    })
    .catch((err) => {
      console.log("Failed to copy the URL", err);
    });
}
