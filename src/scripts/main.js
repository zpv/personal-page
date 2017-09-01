'use strict';

let title = document.title;
let name = document.querySelector('#name b').innerHTML
let blinked = false;

function blinkingTitle() {
    setTimeout(() => {
        document.title = blinked ? title : (title + "_")
        document.querySelector('#name b').innerHTML = blinked ? name : (name + "_")
        blinked = !blinked
        blinkingTitle()
    }, 1000);
}

var typed = new Typed(".element", {
  // Waits 1000ms after typing "First"
  strings: ["<h2>Computer Science ^250 and Business ^500 Combined.</h2>", "<h2>Programmer.</h2>", "<h2>Crypto Enthusiast.</h2>", "<h2>Software Engineer.</h2>", "<h2>ITSec is fun.</h2>", "<h2>Risk Taker.</h2>"],
  typeSpeed: 25,
  backSpeed: 25,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
  smartBackspace: true, // Default value
  showCursor: false,
  autoInsertCss: true
});

blinkingTitle();

