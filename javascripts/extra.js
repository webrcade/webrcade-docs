
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

var updateCapabilityMarkers = function () {
  var tables = document.querySelectorAll(".md-typeset table:not([class])");
  for (var table of tables) {
    var headers = table.querySelectorAll("thead th");
    var isCapabilityTable = false;
    for (var th of headers) {
      if (th.innerHTML.indexOf("Retro<br>Achievements") !== -1) {
        isCapabilityTable = true;
        break;
      }
    }
    if (!isCapabilityTable) {
      continue;
    }

    var cells = table.querySelectorAll("tbody td");
    for (var cell of cells) {
      if (cell.textContent.trim() === "x") {
        cell.innerHTML = '<span class="capability-negative">❌</span>';
      }
    }
  }
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
  });

  updateCapabilityMarkers();
});