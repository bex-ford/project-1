console.log("Hello!");

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=gluten%20free%20vegetarian%20recipes&key=AIzaSyBtVcpEBC7OOCsQxa7h_5TCjeUuaynHiWo")
.then((result) => {
    return(result.json())
}).then((data)=> {
    console.log(data);
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += `
        <img src="${video.snippet.thumbnails.default.high.url}">
        `
    }
});    
 