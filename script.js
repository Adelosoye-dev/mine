function changeImage(imageId){
    var image =document.getElementById(imageId);
    if(image.scroll.match("image1")) {
        image.src = "IMG_6517.JPG";
    }
    else{
        image.src ="IMG_E6442.JPG";
    }
}
console.log("");