//import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circlemousefollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.tranform =
      "translate(${dets.c})";
  });
}
circlemousefollower();
