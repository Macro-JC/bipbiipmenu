const formMenu = document.querySelector('#form-menu');


const text = formMenu['menu-text']    
const fontSize = formMenu['menu-fontsize']    
const lineHeight = formMenu['menu-lineheight']    
const x = formMenu['menu-x']    
const y = formMenu['menu-y']    

window.addEventListener('DOMContentLoaded', async (e) => {
            

        console.log(x.value,y.value);


        var canvas = document.getElementById("menu");
        var ctx = canvas.getContext("2d");
        
        function draw(){
            ctx.save();
            ctx.clearRect(0,0,600,600);
            ctx.fillStyle = "#FFF";
            ctx.font = fontSize.value  + 'px Arial';
            var img = new Image();
            img.onload = function(){
            ctx.drawImage(img,0, 0,600,600);
            // ctx.fillText(inptext.value,100,270);

            var txt = text.value;
            var lines = txt.split('\n');

            for (var i = 0; i<lines.length; i++)
                ctx.fillText(lines[i], parseInt(x.value), parseInt(y.value) + (i*parseInt(lineHeight.value)) );

            document.getElementById("imgMenu").src =  canvas.toDataURL("image/png");
            ctx.restore();
        }
            img.src = 'srgusto.png'

        }

        draw();


        text.onkeyup = (e)=>{
            draw();
        }
        fontSize.onkeyup = (e)=>{
            draw();
        }
        lineHeight.onkeyup = (e)=>{
            draw();
        }
        x.onkeyup = (e)=>{
            draw();
        }
        y.onkeyup = (e)=>{
            draw();
        }


        canvas.onclick = function(e) {
            console.log(e.clientX, e.clientY);
            // if (hasInput) return;
            // addInput(e.clientX, e.clientY);
        }
    


})