function createQRCode() {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: 'https://happynature.0xhrsh.com/',
        width: window.screen.availWidth * 0.25,
        height: window.screen.availWidth * 0.25,
        colorDark: "#22272e",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
