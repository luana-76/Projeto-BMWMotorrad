let redBut = document.querySelector('#red');
let blueBut = document.querySelector('#blue');
let blackBut = document.querySelector('#black');

let main = document.querySelector('main');
let img = document.querySelector('#image img');

//Função da parte da imagem

const image = (parentTag, tag, opc)=>{

    tag.addEventListener('click', e=>{

        switch(opc){

            case 'red':
    
                parentTag.style.backgroundImage = "url(./imagens/BMW1.png)";
                break;
            case 'blue':
    
                parentTag.style.backgroundImage = "url(./imagens/BMW2.png)";
                break;

            case 'black':
    
                parentTag.style.backgroundImage = "url(./imagens/BMW3.png)";
                break;
        
        };

    });

}

//Função da parte responsiva da imagem

const responsiveImage = (tag, opc)=>{

    tag.addEventListener('click', e=>{

        switch(opc){

            case 'red':
    
                img.src = "./imagens/BMW1.png";
                break;
            case 'blue':
    
                img.src = "imagens/BMW2.png";
                break;

            case 'black':
    
                img.src= "imagens/BMW3.png";
                break;
        
        };

    });

}

//Executando funções

let confirmation;

setInterval(()=>{

    if(window.innerWidth < 1063){
        
        responsiveImage(redBut, 'red');
        responsiveImage(blueBut, 'blue');
        responsiveImage(blackBut, 'black');

        main.style.background = '#fff';
        confirmation = true;

    }else{

        image(main, redBut, 'red');
        image(main, blueBut, 'blue');
        image(main, blackBut, 'black');

        if(confirmation == true){

            main.style.background =  "url(./imagens/BMW1.png)";
            main.style.backgroundPosition = 'center center';
            main.style.backgroundSize = '90%';

        }

        confirmation = false;

    };

},100);
