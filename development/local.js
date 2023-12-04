 document.addEventListener('DOMContentLoaded', () => {
 
     // click of accessibility button
     const el = document.getElementsByClassName("floating_btn");
     el[0].addEventListener('click', function (evt) {
        let menuEl = document.getElementsByClassName("menu-popup");
        menuEl[0].style.display = "inline";
     });
 
     // click of x button
     const closeEl = document.getElementsByClassName("close");
     closeEl[0].addEventListener('click', function (evt) {
         let menuEl = document.getElementsByClassName("menu-popup");
         menuEl[0].style.display = "none";
      });

      //   click of text-zoom
     const textZoom = document.getElementsByClassName("text-zoom");
     const checkmark = document.getElementsByClassName('checkmark');
     let counter = 0;
     function resizeText(multiplier) {
      counter = counter + 1;
      if(counter > 4) {
         document.body.style.fontSize = "";
         checkmark[0].style.visibility = 'hidden';
         textZoom[0].style.border = '2px solid #fff';
         counter = 0;
      } else if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
        checkmark[0].style.visibility = 'visible';
        textZoom[0].style.border = '2px solid rgb(0, 107, 230)';
      }
         document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
      }
     textZoom[0].addEventListener('click', function () {
         resizeText(1);
      });

      // click of link-highlight
      const linkHighLight = document.getElementsByClassName("link-highlight");
         linkHighLight[0].addEventListener('click', function () {
            const element = document.querySelectorAll('a');
            element.forEach(function(el) {
            if (el.classList.contains('highLight-links')) {
               el.classList.remove('highLight-links');
            } else {
               el.classList.add('highLight-links');
            }
         });
      });

      // click of hide-image
      const hideImage = document.getElementsByClassName("hide-image");
         hideImage[0].addEventListener('click', function () {
            const element = document.querySelectorAll('img');
            element.forEach(function(el) {
            if (el.style.visibility == 'hidden') {
               el.style.visibility = 'visible';
            } else {
               el.style.visibility = 'hidden';
            }
         });
      });

       // click of text-spacing
       const letterSpacing = document.getElementsByClassName("letter-spacing");
       let textSpacing = .00;
       let wordSpacing = .00;
       let spacingCounter = 0;
       letterSpacing[0].addEventListener('click', function () {
         spacingCounter = spacingCounter + 1;
          const element = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p, div, button, a');
          if(spacingCounter > 3) {
            textSpacing = .00;
            wordSpacing = .00;
            spacingCounter = 0; 
         } else {
            textSpacing = textSpacing + .12;
            wordSpacing = wordSpacing + .16;
          }
          element.forEach(function(el) {
            el.style.letterSpacing = `${textSpacing}em`;
            el.style.wordSpacing = `${wordSpacing}em`;
       });
      });

       // click of text-align
       const textAlign = document.getElementsByClassName("text-align");
       let alignCounter = 0;
       let textAlignment;
       textAlign[0].addEventListener('click', function () {
         alignCounter = alignCounter + 1;
          const element = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p, div, button, a');
          switch(alignCounter) {
            case 1:
               textAlignment = 'left';
               break;
            case 2:
               textAlignment = 'right';
               break;
            case 3:
               textAlignment = 'center';
               break;
            case 4:
               textAlignment = 'justify';
               alignCounter = 0;
               break;
            default:
               textAlignment = 'center';
          }
          element.forEach(function(el) {
            el.style.textAlign = textAlignment;
         });
      });

      // click of pause-animation
     const pauseAnimation = document.getElementsByClassName("pause-animation");
     pauseAnimation[0].addEventListener('click', function () {
         const element = document.querySelectorAll('video');
         element.forEach(function(el) {
            if(el.paused) {
               el.play();
            } else {
               el.pause();
            }
         });
      });
   
      // click of mute-sounds
     const muteSounds = document.getElementsByClassName("mute-sounds");
     muteSounds[0].addEventListener('click', function () {
         const videos = document.querySelectorAll('video');
         videos.forEach(function(video) {
            video.muted = !video.muted;
         });
      });
   
 
     // click of large-cursor
 
   //   const largeCursor = document.getElementsByClassName("large-cursor");
   //   largeCursor[0].addEventListener('click', function (evt) {
   //       console.log("large-cursor")
   //    });
 
     // click of zoom-lens
 
   //   const zoomLens = document.getElementsByClassName("zoom-lens");
   //   zoomLens[0].addEventListener('click', function (evt) {
   //       console.log("zoom-lens")
   //    });
 
     
 
     // click of light-contrast
 
   //   const lightContrast = document.getElementsByClassName("light-contrast");
   //   lightContrast[0].addEventListener('click', function (evt) {
   //       console.log("light-contrast")
   //    });
 
     // click of dark-theme
 
   //   const darkTheme = document.getElementsByClassName("dark-theme");
   //   darkTheme[0].addEventListener('click', function (evt) {
   //       console.log("dark-theme")
   //    });
 
     
 });