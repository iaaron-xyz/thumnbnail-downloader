// Get the button element
const getThumbnailBtn = document.getElementById("get-thumbnail-btn");

// Event listener on click
getThumbnailBtn.addEventListener("click", () => {
  const videoUrl = document.getElementById("video-url");
  //   console.log(`Getting thumbnail from: ${videoUrl.value}`);
  const thumbnailUrl = generateThumbnailUrl(videoUrl.value);
  console.log(thumbnailUrl);
});

// Extract the video id
function extractVideoId(url) {
  const urlParams = new URL(url).searchParams;
  return urlParams.get("v");
}
// Generate the thumbnail url
function generateThumbnailUrl(url) {
  try {
    const videoId = extractVideoId(url);
    if (!videoId) {
      throw new Error("Invalid YouTube Url");
    }
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    return thumbnailUrl;
  } catch (error) {
    alert("Please enter a valid YouTube URL");
  }
}
