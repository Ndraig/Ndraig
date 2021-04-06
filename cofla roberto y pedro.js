dineroCofla = prompt("cuanto dinero tienes Cofla?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla > 0.6 && dineroCofla <1) {
    alert("cofla; comprate un helado de agua");
    alert(" y te sobran + (dineroCofla - 0.6");
}

else if (dineroCofla > 1 && dineroCofla <1.6) {
    alert("cofla; comprate un helado de crena");
    alert(" y te sobran + (dineroCofla - 1");
    
}

else if (dineroCofla > 1.6 && dineroCofla <1.7) {
    alert("cofla; comprate un helado de heladix");
    alert(" y te sobran + (dineroCofla - 1.6");
}

else if (dineroCofla > 1.7 && dineroCofla <1.8) {
    alert("cofla; comprate un helado de heladovich");
    alert(" y te sobran + (dineroCofla - 1.7");
}

else if (dineroCofla > 1.8 && dineroCofla <2.9) {
    alert("cofla; comprate un helado de helardo");
    alert(" y te sobran + (dineroCofla - 1.8");
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate helado con confites o el pote de 1/4kg");
    alert(" y te sobran + (dineroCofla - 2.9");
} else {
    alert("lo siento cofla, pobre de mierda, no te alcanza para ningun helado");
}

if (dineroPedro > 0.6 && dineroPedro <1) {
    alert("Pedro; comprate un helado de agua");
}
if (dineroPedro > 1 && dineroPedro <1.6) {
    alert("Pedro; comprate un helado de crema");
}
if (dineroPedro > 1.6 && dineroPedro <1.7) {
    alert("Pedro; comprate un helado de heladix");
}
if (dineroPedro > 1.7 && dineroPedro <1.8) {
    alert("Pedro; comprate un helado de heladovich");
}
if (dineroPedro > 1.8 && dineroPedro <2.9) {
    alert("Pedro; comprate un helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate helado con confites o el pote de 1/4kg");
} else {
    alert("lo siento Pedro, pobre de mierda, no te alcanza para ningun helado");
}