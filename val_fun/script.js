let scaleFactor = 1;

function zoomin() {
    scaleFactor += 0.3;
    document.querySelector('.zoomin-btn').style.transform = `scale(${scaleFactor})`;
}

function zoomout() {
    scaleFactor -= 0.3;
    document.querySelector('.zoomout-btn').style.transform = `scale(${scaleFactor})`;
}
