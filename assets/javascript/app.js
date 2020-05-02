// ================================
// click to hide overflowing text, probably will just put this in a new section
// =================================


function hideOverflows() {
    
  var x = document.getElementById("aboutthegnomes");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};


// ================================
// click to animate gifs or pause gifs
// =================================
// $(document).on("click", ".gif", function () {
//     var state = $(this).attr("data-state");
//     // console.log(state);

//     if (state == "animate") {   //movement still and animate
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");  
//       } else if (state == "animate") {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }
//     });
