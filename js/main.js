window.onload = function () {
  $("#onload").fadeOut();
  $("body").removeClass("hidden-load");
};

$(".menu-hamburger-open").click(function () {
  $(".nav-enlaces").addClass("nav-enlaces-active");
  $(".menu-hamburger-open").addClass("hidden");
  $(".menu-hamburger-close").addClass("hidden-close");
});
$(".menu-hamburger-close").click(function () {
  $(".nav-enlaces").removeClass("nav-enlaces-active");
  $(".menu-hamburger-open").removeClass("hidden");
  $(".menu-hamburger-close").removeClass("hidden-close");
});

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
