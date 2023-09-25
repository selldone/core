export class Screenshot {
  static FromVideo(video, des_image,flash) {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURI = canvas.toDataURL("image/jpeg"); // can also use 'image/png'

    if (des_image) des_image.src = dataURI;

    // Animate flash:
    if(flash){
      video.classList.add("fadeIn");
      setTimeout(() => {
        video.classList.remove("fadeIn");
      }, 300);
    }


    return dataURI;
  }




}
