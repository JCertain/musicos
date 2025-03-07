function toggleInfo(element, artist) {
    let info = element.querySelector('.info');
    let album = element.querySelector('.album');
    let img = element.querySelector('img');

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        img.style.display = "none";
        album.style.display = "block";
    } else {
        info.style.display = "none";
        img.style.display = "block";
        album.style.display = "none";
    }
}
