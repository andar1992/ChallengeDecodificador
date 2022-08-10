

const inputTexto = document.querySelector(".input-text");
inputTexto.value="";
inputTexto.focus();


const mensaje = document.querySelector(".input-text-area");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){

    if(inputTexto.value ==""){

        alert  ("Debe Ingresar Datos");
        inputTexto.focus();
        
    }

    else{

        alert("estamos en else");

        const image = document.createElement('img')
        image.src  = '/Imagenes/infAlura.png'


      
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

          
        }
    
    }
    return StringParaEncriptar;
}


}









function btndesencriptar(){
    const textoDesencriptado = Desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}


function Desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for(let i=0; i< matrizCodigo.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
           
        }
    
    }
    return StringParaDesencriptar;
   
}