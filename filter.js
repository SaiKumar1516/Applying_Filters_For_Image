function editImage() {
    var blurval = document.getElementById("blur").value;
    var brival = document.getElementById("brightness").value;
    var contval = document.getElementById("contrast").value;
    var grayval = document.getElementById("grayscale").value;
    var hueval = document.getElementById("hue-rotate").value;
    var inveval = document.getElementById("invert").value;
    var opacval = document.getElementById("opacity").value;
    var satuval = document.getElementById("saturate").value;
    var sepval = document.getElementById("sepia").value;




    document.getElementById("img").style.filter = 
        "blur(" + blurval + "px) " + 
        "brightness(" + brival + "%) " + 
        "contrast(" + contval + "%) " + 
        "grayscale(" + grayval + "%) " + 
        "hue-rotate(" + hueval + "deg) " + 
        "invert(" + inveval + "%) " + 
        "opacity(" + opacval + "%) " + 
        "saturate(" + satuval + "%) " + 
        "sepia(" + sepval + "%)";   



      
}
function applyTransform() {
    // Get the transformation values from the input sliders
    var rotateVal = document.getElementById("rotate").value;
    var rotateXVal = document.getElementById("rotateX").value;
    var rotateYVal = document.getElementById("rotateY").value;
    var skewXVal = document.getElementById("skewX").value;
    var skewYVal = document.getElementById("skewY").value;
    var scaleVal = document.getElementById("scale").value;
    var scaleXVal = document.getElementById("scaleX").value;
    var scaleYVal = document.getElementById("scaleY").value;
    var translateXVal = document.getElementById("translateX").value;
    var translateYVal = document.getElementById("translateY").value;

    // Construct the transform property value
    var transformValue = 
        "rotate(" + rotateVal + "deg) " +
        "rotateX(" + rotateXVal + "deg) " +
        "rotateY(" + rotateYVal + "deg) " +
        "skewX(" + skewXVal + "deg) " +
        "skewY(" + skewYVal + "deg) " +
        "scale(" + scaleVal + ") " +
        "scaleX(" + scaleXVal + ") " +
        "scaleY(" + scaleYVal + ") " +
        "translateX(" + translateXVal + "px) " +
        "translateY(" + translateYVal + "px)";

    // Apply the transformations to the img element (or any other element)
    document.getElementById("img").style.transform = transformValue;
}




