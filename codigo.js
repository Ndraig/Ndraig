// ``

const getInfo = async()=>{
    resultado = await axios("informacion.txt");
    resultado = resultado.data;
    console.log(resultado);

}

document.getElementById(".getInfo").addEventListener("click",getInfo);