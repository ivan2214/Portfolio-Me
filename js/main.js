window.onload = function () {
  
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
};

const typed = new Typed(".typed", {
  strings: ["Ivan Bongiovanni"],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 500,
  startDelay: 900,
  loop: false,
  cursorChar: "|",
});

const typed2 = new Typed(".typed2", {
  strings: ["Soy"],
  typeSpeed: 20,
  backSpeed: 40,
  backDelay: 500,
  startDelay: 1000,
  loop: false,
  showCursor: false,
});

const type3 = new Typed(".typed3", {
  strings: ["Front End developer"],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 500,
  startDelay: 1000,
  loop: false,
  showCursor: false,
});
