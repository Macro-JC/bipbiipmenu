const menu = document.querySelector('#menu-form');
const menuConfig = document.querySelector('#menu-config');
const btnCapture = document.querySelector('#btn-capture');


menuConfig.addEventListener('submit',(e)=>{
    e.preventDefault();
})

window.addEventListener('DOMContentLoaded', async (e) => {
    const config = {
        fontSize: menuConfig['config-fontsize']
    }
    function sizeFont() {
        menu['menu-text'].style.fontSize = config.fontSize.value + 'px'
    }

    config.fontSize.onkeyup = (e) => {
        sizeFont()
    }

    sizeFont()

    btnCapture.onclick= (e)=>{

        domtoimage.toBlob(document.getElementById('menu'))
        .then(function (blob) {
            const blobUrl = window.URL.createObjectURL(blob);
            // window.location=link;
            // console.log(link);
            // window.saveAs(blob, 'my-node.png');

            var name = 'menu.png'
             // Create a link element
            const link = document.createElement("a");

            // Set link's href to point to the Blob URL
            link.href = blobUrl;
            link.download = name;

            // Append link to the body
            document.body.appendChild(link);

            // Dispatch click event on the link
            // This is necessary as link.click() does not work on the latest firefox
            link.dispatchEvent(
                new MouseEvent('click', { 
                bubbles: true, 
                cancelable: true, 
                view: window 
                })
            );

            // Remove link from body
            document.body.removeChild(link);
        });
    }



})



