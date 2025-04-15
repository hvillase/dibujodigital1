const canvas=document.getElementById("mi-canvas");
const ctx=canvas.getContext("2d");

//texto sin relleno
ctx.letterSpacing="10px";
ctx.font = "bold 25px serif";
ctx.strokeText("Un texto en mi canvas", 5, 240);

//texto con relleno y sombra
ctx.shadowColor="blue";
ctx.shadowBlur=10;

ctx.font="italic 30px sans";
ctx.fillText("Otro texto en el canvas", 5, 280);

// círculo
ctx.beginPath();
ctx.arc(320, 100, 30, 0, 2*Math.PI);
ctx.stroke();