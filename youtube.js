fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=gluten%20free%20vegetarian%20recipes&key=AIzaSyBtVcpEBC7OOCsQxa7h_5TCjeUuaynHiWo"
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    let videos = data.items;
    let videoContainer = document.querySelector(".youtube-container");
    for (video of videos) {
      videoContainer.innerHTML += `
        <h3 class= "video-title">${video.snippet.title}</h3>
        <br>
        <img class="video-img" src="${video.snippet.thumbnails.medium.url}">
        <br>
        <a href="https://www.youtube.com/watch?v=${video.snippet.videoId}" class="btn btn-danger video-btn">Watch on YouTube</a>
        `;
    }
  });
