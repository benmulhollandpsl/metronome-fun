function hideOverflows() {
    
    var x = document.getElementById("aboutthegnomes");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };


  // songs that will play in an array
  var songs = [
      "the-trolls-polka-100bpm.wav","quaranrelax.mp3","spiral shell.mp3","undertow.mp3"
  
  ];
  //for more songs just add to array
  
  //array of posters
  
  var poster = [
      "troll1.png", "quaranrelaxcover.jpg", "spiralshellcover.jpg", "undertow.gif"
  ];

//   change troll1.png to a gif, and consider updating gifs for other ones
  // for more posters just add to array
  
  var songTitle = document.getElementById("songTitle");
  var fillBar = document.getElementById("fill");
  
  // object of audio class
  var song = new Audio();
  var currentSong = 0;  // starts on current song
  
  window.onload = playSong;   
  // calls function playSong when window loads 
  
  function playSong(){
      song.src = songs[currentSong];  //sets the source of the 0th song
      songTitle.textContent = songs[currentSong]; //set the title of song
  
      song.play();// this is breaking cannot autoplay
  }
  
  function playOrPauseSong(){
      if(song.paused){
          song.play();
          $("#play img").attr("src","./assets/images/pause.png")
      }
      else{
          song.pause();
          $("#play img").attr("src","./assets/images/playbuttton.png")
          // check src
  
      }
  }
  song.addEventListener('timeupdate',function(){
      var position = song.currentTime / song.duration;
  
      fillBar.style.width = position * 100 + '%';
  });
  
  //next song button
  function next(){
      currentSong++;
      if(currentSong > 2){
          currentSong = 0;
      
      }
      playSong();
      $("#play img").attr("src","./assets/audio/pause.png");
      $("#imageAlbum img").attr("src",poster[currentSong]); //should change background poster
      $("#bg img").attr("src",poster[currentSong]);
  
  }
  //previous button
  function prev(){
      currentSong--;
      if(currentSong < 0){
          currentSong = 2;
      
      }
      playSong();
      $("#play img").attr("src","./assets/audio/pause.png");
      $("#imageAlbum img").attr("src",poster[currentSong]); 
      $("#bg img").attr("src",poster[currentSong]);
  
  }
  
  //calling next on button click 
  //posters need to be set to each song
  
  
  
  
  
  // keylogger for frenchhorn to open facebook artist page
  const pressed = [];
  const secretCode = 'troll';
  
  window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
      if(pressed.join('').includes(secretCode)){
        console.log('youdidit');
        window.open("https://soundcloud.com/tabbycraft/herr-mannelig-sneak-peak", "Herr Mannelig");
          
      }
      //add other codes to other pages as I go
    console.log(pressed);
  });
  
  
  
  
  
  
  