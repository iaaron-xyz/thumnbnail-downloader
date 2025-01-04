// Get the button element
const getThumbnailBtn = document.getElementById("get-thumbnail-btn");

// Main Event listener on click
getThumbnailBtn.addEventListener("click", () => {
  const videoUrl = document.getElementById("input-video-url");
  const thumbnailUrl = generateThumbnailUrl(videoUrl.value);
  if (thumbnailUrl === undefined) {
    videoUrl.value = "";
    return;
  } else {
    addThumnailInfo(thumbnailUrl);
    showThumnailInfo();
  }
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

function addThumnailInfo(url) {
  const thumbnailUrl = document.getElementById("thumbnail-url");
  const thumbnailImg = document.getElementById("thumbnail-img");
  const thumbnailLink = document.getElementById("thumbnail-link");
  thumbnailUrl.value = url;
  thumbnailLink.href = url;
  thumbnailImg.src = url;
}

function showThumnailInfo() {
  const thumbnailInfoDiv = document.getElementById("thumbnail-info");
  thumbnailInfoDiv.classList.remove("hidden");
}
