let nextPageToken=""
console.log("Hello");
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCA295QVkf9O1RQ8_-s3FVXg&maxResults=10&order=date&key=AIzaSyAkd58XR0BnfaQvGCPzbHKDjtQCHstVd-k&pageToken="+nextPageToken)
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    nextPageToken = data.nextPageToken
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += `
            <h3> ${video.snippet.title}</h3>
            <img src = "${video.snippet.thumbnails.high.url}">
        `
    }
})