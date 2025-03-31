//User click a button- add event listener and start function
//Function is started and request is sent to the API
//API information is retuned and converted into JSON Format
//Recent feed of videos is returned and displayed in the DOM


document.querySelector('button').addEventListener('click', getVideo)
function getVideo(){

const url = 'https://www.scorebat.com/video-api/v3/feed/?token=MjA1MDAwXzE3NDI5NTcwNjFfNjI1MjlkZTlmNGMzYzhiMDQ4M2Q4OGViYTUwNWU3NmY2N2MzNWM5NQ=='

fetch (url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const responseArray = data.response;
        document.querySelector('section').src = data.video
        if(Array.isArray(responseArray) && responseArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * responseArray.length);
        
            let randomItem = responseArray[randomIndex];
            let videoUrl = randomItem.videos[0].embed
            if(randomItem.videos && randomItem.videos.length > 0) {
                const videoEmbed = randomItem.videos[0].embed;
                document.getElementById("video").innerHTML = videoEmbed
        }
        
        else {
            console.error("No video found in this item");
            document.getElementById("video").innerHTML = "<p> No video available";
            
        }  
    }   else {
        console.error("Response does not contain an array");
    }
})
        .catch(error => console.error('Error fetching data:'));
   
}



