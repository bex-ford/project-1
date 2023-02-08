// GET request to the Youtube API to search for videos with "gluten free vegetarian receipes" keyword (max 6)
fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=gluten%20free%20vegetarian%20recipes&key=xxx"
)
  
// Take the response from the API and converts it to JSON format
.then((result) => {
    return result.json();
  
// Logs the JSON data to the console and then stores the "items" array in a variable named "videos"
})
  .then((data) => {
    console.log(data);
    let videos = data.items;
    // Selects the element with the id of "youtube" and stores it in a variable named videocontainer 
    let videoContainer = document.querySelector("#youtube")
    // Loops over the "videos" array and 1. adds the video title (h3) 2. thumbnail (img) 3.link to the video 
    // Videos info is added as HTML content to the "videoContainer" element;
    for (video of videos) {
      videoContainer.innerHTML += `
      <div class="video-container">
      <h3 class= "video-title">${video.snippet.title}</h3>
      <br>
      <img class="video-img" src="${video.snippet.thumbnails.medium.url}">
      <br>
      <a href="https://www.youtube.com/watch?v=${video.id.videoId}" class="video-link">
        <button class="btn video-btn">Watch on YouTube</button>
      </a>
    </div>
        `
    }
});    