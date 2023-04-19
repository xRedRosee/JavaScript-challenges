var R;
var G;
var B;
var r= document.querySelector(':root');

function checkIfRGBisRight(){
    R = document.querySelector('#r').value;
    G = document.querySelector('#g').value;
    B = document.querySelector('#b').value;

    if (R < 0 || R > 255)
    {
        console.log("false");
        document.querySelector('#outcome').innerText = 'RGB color is not right';
        return false;
    }
    else if (G < 0 || G > 255){
        console.log("false");
        document.querySelector('#outcome').innerText = 'RGB color is not right';
        return false;
    }
    else if (B < 0 || B > 255){
        console.log("false");
        document.querySelector('#outcome').innerText = 'RGB color is not right';
        return false;
    }
    else
    console.log("true");
    document.querySelector('#outcome').innerText = 'RGB color is right';
    document.querySelector('#rgbcolorcode').innerText = 'RGB(' + R +","+G+","+B+ ")";
    r.style.setProperty('--r', R);
    r.style.setProperty('--g', G);
    r.style.setProperty('--b', B);
    return true;
}
