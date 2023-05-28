export function getImageFromBase64(base64 : string){
    console.log("Res data:image/jpeg;base64, " + base64);
    return 'data:image/jpeg;base64, ' + base64;
}
export function encodeImageToBase64(imageData, callback) {
    const reader = new FileReader();
    reader.onloadend = function () {
        const result = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
        callback(result); // Invoke the callback with the modified result
    };
    reader.readAsDataURL(imageData);
}



