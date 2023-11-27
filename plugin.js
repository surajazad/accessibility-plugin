
(function () {
   document.addEventListener('DOMContentLoaded', () => {
    var div = document.createElement('div');
    div.setAttribute('class', 'floating-widget');
    div.setAttribute('id', 'vs-floating-widget');
    document.body.appendChild(div);

    addBody();
    addStyles();
        
   });
  
})();

function addBody() {
    const mainEl = document.getElementById("vs-floating-widget");
    mainEl.innerHTML = `<div>
    <div class="floating_btn">
        <div class="contact_icon">
       <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
        </div>
      <p class="text_icon">Click</p>
    </div>
  <div class="menu-popup">
    <div class="form-container">
      <div class="title">
        <div>Accessibility</div>
        <div class="close" style="color:white;"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
      </div>
    <div class="content">
      <div class="card text-zoom">
        Bigger Text
      </div>
      <div class="card large-cursor">
        Cursor
      </div>
      <div class="card zoom-lens">
        zoom
      </div>
      <div class="card link-highlight">
        Link Highlight
      </div>
      <div class="car pause-animation">
        Pause Animation
      </div>
      <div class="card light-contrast">
        Light Contrast
      </div>
      <div class="card dark-theme">
        Dark Theme
      </div>
      <div class="card hide-image">
        Hide Images
      </div>
    </div>
    </div>
  </div>
 </div>`;
}

function addStyles() {
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css';
    head.appendChild(link);
}

function zoomIn() {
    var page = document.body;
    if(page.style.zoom === '') {
     page.style.zoom = 100;
    }
   //10% can be made as 1% for practical impl
    var zoom = parseInt(page.style.zoom) + 10 + '%';
    page.style.zoom = zoom;
    return false
  }

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
    
    // click of text-zoom

    const txtZoom = document.getElementsByClassName("text-zoom");
    txtZoom[0].addEventListener('click', function (evt) {
        console.log("text-zoom");
        zoomIn();
     });

    // click of large-cursor

    const largeCursor = document.getElementsByClassName("large-cursor");
    largeCursor[0].addEventListener('click', function (evt) {
        console.log("large-cursor")
     });

    // click of zoom-lens

    const zoomLens = document.getElementsByClassName("zoom-lens");
    zoomLens[0].addEventListener('click', function (evt) {
        console.log("zoom-lens")
     });

    // click of link-highlight

    const linkHighLight = document.getElementsByClassName("link-highlight");
    linkHighLight[0].addEventListener('click', function (evt) {
        console.log("link-highlight")
     });

    // click of pause-animation

    const pauseAnimation = document.getElementsByClassName("pause-animation");
    pauseAnimation[0].addEventListener('click', function (evt) {
        console.log("pause-animation")
     });

    // click of light-contrast

    const lightContrast = document.getElementsByClassName("light-contrast");
    lightContrast[0].addEventListener('click', function (evt) {
        console.log("light-contrast")
     });

    // click of dark-theme

    const darkTheme = document.getElementsByClassName("dark-theme");
    darkTheme[0].addEventListener('click', function (evt) {
        console.log("dark-theme")
     });

    // click of hide-image

    const hideImage = document.getElementsByClassName("hide-image");
    hideImage[0].addEventListener('click', function (evt) {
        console.log("hide-image")
     });
});
