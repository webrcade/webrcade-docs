
{/* <div id="lb-back">
  <div id="lb-img"></div>
</div> */}

const newDiv = document.createElement("div");
newDiv.setAttribute("id", "lb-back");
const imgDiv = document.createElement("div");
imgDiv.setAttribute("id", "lb-img");
newDiv.appendChild(imgDiv);

document.body.appendChild(newDiv);

var zoomImg = function () {
  // (A) CREATE EVIL IMAGE CLONE
  var clone = this.cloneNode();
  clone.classList.remove("zoomD");

  // (B) PUT EVIL CLONE INTO LIGHTBOX
  var lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  lb.appendChild(clone);

  // (C) SHOW LIGHTBOX
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};

window.addEventListener("load", function(){
  // (D) ATTACH ON CLICK EVENTS TO ALL .ZOOMD IMAGES
  var images = document.getElementsByClassName("zoomD");
  if (images.length>0) {
    for (var img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  // (E) CLICK EVENT TO HIDE THE LIGHTBOX
  document.getElementById("lb-back").addEventListener("click", function(){
    this.classList.remove("show");
  })
});