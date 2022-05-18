console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById("masterSongName")
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName: "Pihanr", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Diggar", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Pio", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Anju", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kaashu", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Zamun", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "LoLo", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Lahray", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tissu", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Lippo", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play')
         masterPlay.classList.add('fa-circle-pause')
         gif.style.opacity =0 ;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
     }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
console.log('updatetime')
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100
})

     const makeALLPlays= ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-circle-pause')
     element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeALLPlays();
      songIndex = parseInt(e.target.id)
      e.target.classList.remove('fa-circle-play')
      e.target.classList.add('fa-circle-pause')
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName; 
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.add('fa-circle-pause')
      masterPlay.classList.remove('fa-circle-play')
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
     if(songIndex>=9){
         songIndex = 0
     }
     else{
        songIndex += 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')
    
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
       songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')
   
})