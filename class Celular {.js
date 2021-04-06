class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert( `foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert( `grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>;
        Resolución de Video: <b>${this.resolucionDeCamara}</b></br>`;
    }
}


class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram,rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estras grabando en camara lente")
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}


// Celular1 = new Celular("rojo","150g","5'","hd","1GB");
// Celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
// Celular3 = new Celular("blanco","146g","5.9'","full hd","2GB");


Celular1 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","full hd");
Celular2 = new CelularAltaGama("negro","142g","6","4K","4GB","hd");




document.write(`
    ${Celular1.infoAltaGama()} <br><br>
    ${Celular2.infoAltaGama()} <br>

`);





// celular1.mobileInfo();
// celular2.mobileInfo();
// celular3.mobileInfo();





// Celular1.presionarBotonEncendido();
// Celular1.tomarFoto();
// Celular1.grabarVideo();
// Celular1.reiniciar();
// Celular1.presionarBotonEncendido();