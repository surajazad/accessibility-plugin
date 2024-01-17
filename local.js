document.addEventListener('DOMContentLoaded', () => {

   // Utility functions

   const initialFontValues = () => {
      let initialValue = {};

      // H1
      const h1Elem = document.getElementsByTagName('h1')[0];
      if (h1Elem) {
         const h1elemSize = window.getComputedStyle(h1Elem, null).getPropertyValue('font-size');
         const h1Value = parseFloat(h1elemSize);
         initialValue['h1'] = h1Value;
      }
      
      // H2
      const h2Elem = document.getElementsByTagName('h2')[0];
      if (h2Elem) {
         const h2elemSize = window.getComputedStyle(h2Elem, null).getPropertyValue('font-size');
         const h2Value = parseFloat(h2elemSize);
         initialValue['h2'] = h2Value;
      }

      // H3
      const h3Elem = document.getElementsByTagName('h3')[0];
      if (h3Elem) {
         const h3elemSize = window.getComputedStyle(h3Elem, null).getPropertyValue('font-size');
         const h3Value = parseFloat(h3elemSize);
         initialValue['h3'] = h3Value;
      }
      
      // H4
      const h4Elem = document.getElementsByTagName('h4')[0];
      if (h4Elem) {
         const h4elemSize = window.getComputedStyle(h4Elem, null).getPropertyValue('font-size');
         const h4Value = parseFloat(h4elemSize);
         initialValue['h4'] = h4Value;        
      }

      // H5
      const h5Elem = document.getElementsByTagName('h5')[0];
      if (h5Elem) {
         const h5elemSize = window.getComputedStyle(h5Elem, null).getPropertyValue('font-size');
         const h5Value = parseFloat(h5elemSize);
         initialValue['h5'] = h5Value;
      }
      
      // H6
      const h6Elem = document.getElementsByTagName('h6')[0];
      if (h6Elem) {
         const h6elemSize = window.getComputedStyle(h6Elem, null).getPropertyValue('font-size');
         const h6Value = parseFloat(h6elemSize);
         initialValue['h6'] = h6Value;
      } 

      // SPAN
      const spanElem = document.getElementsByTagName('h6')[0];
      if (spanElem) {
         const spanelemSize = window.getComputedStyle(spanElem, null).getPropertyValue('font-size');
         const spanValue = parseFloat(spanelemSize);
         initialValue['span'] = spanValue;
      }

      // P
      const pElem = document.getElementsByTagName('p')[0];
      if (pElem) {
         const pelemSize = window.getComputedStyle(pElem, null).getPropertyValue('font-size');
         const pValue = parseFloat(pelemSize);
         initialValue['p'] = pValue;
      }
      
      return initialValue;
   }
 
   // Default values
   const initFontValues = initialFontValues();

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
       document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (val * 0.2) + "em";
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

   // How this helps people with Dyslexia?
   // The letters are more rounded and spaced out, which can help make them easier to distinguish from each other.
   // Additionally, the font has a unique feature where the lowercase "b" and "d" letters are different in shape, making it easier for dyslexic readers to tell them apart.

   // click of Dyslexia
   const dyslexia = document.getElementsByClassName("dyslexia");
   dyslexia[0].addEventListener('click', function () {
      const dyslexiaStylesApplied = document.getElementsByClassName("dyslexia-support").length > 0;
      const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const text = document.querySelectorAll('span, p, div, button, a');
      const textElements = [...headers, ...text];

      if (dyslexiaStylesApplied) {
         textElements.forEach(elem => {
            elem.classList.remove('dyslexia-support'); 
         })
         headers.forEach(headerElem => {
            const elemName = headerElem.nodeName.toLowerCase();
            const fontVal = initFontValues[elemName];
            headerElem.style.fontSize = fontVal + 'px';
         })
      } else {
         textElements.forEach(elem => {
            elem.classList.add('dyslexia-support');
            headers.forEach(headerElem => {
               const elemName = headerElem.nodeName.toLowerCase();
               const fontVal = initFontValues[elemName];
               let percentValue = fontVal * 0.20;
               headerElem.style.fontSize = (fontVal + percentValue) + 'px';
            })
         })
      }
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