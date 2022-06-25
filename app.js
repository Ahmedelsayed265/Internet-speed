document.querySelector("button").addEventListener("click", (e) => {
  document.querySelector(".loader_content").classList.add("hide");
  document.querySelector(".loader").classList.remove("hide");
  let imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG",
    downLoadSize = 8185374,
    timeStart,
    timeEnd,
    downloadSRC = new Image();
  timeStart = new Date().getTime();
  let cacheTmg = "?nn" + timeStart;
  downloadSRC.src = imageLink + cacheTmg;
  downloadSRC.onload = function () {
    timeEnd = new Date().getTime();
    let timeDuration = (timeEnd - timeStart) / 1000,
      loadedByBytes = downLoadSize * 8,
      totalDownloadSpeed = (loadedByBytes / timeDuration / 1024 / 1024).toFixed(
        2
      );
    let i = 0,
      speedOut;
    const animate = () => {
      if (i < totalDownloadSpeed) {
        document.querySelector(".content").innerHTML =
          i.toFixed(2) + "<small>Mbps</small>";
        setTimeout(animate, 30);
        i += 1.02;
      } else {
        document.querySelector(".content").innerHTML =
          totalDownloadSpeed + "<small>Mbps</small>";
      }
    };
    animate();
    document.querySelector(".loader").classList.add("hide");
    document.querySelector(".loader_content").classList.remove("hide");
    document.querySelector(".content").classList.remove("hide");
    e.target.innerHTML = "Check Again";
  };
});
let smallCursor = document.querySelector(".small-cursor"),
  largeCursor = document.querySelector(".large-cursor");
document.onmousemove = function (e) {
  smallCursor.style.left = e.pageX - 4 + "px";
  smallCursor.style.top = e.pageY - 4 + "px";
  smallCursor.style.display = "block";
  largeCursor.style.left = e.pageX - 18 + "px";
  largeCursor.style.top = e.pageY - 18 + "px";
  largeCursor.style.display = "block";
};
