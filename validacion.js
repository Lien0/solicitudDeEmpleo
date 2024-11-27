const arregloDatos = [];

window.onload = function () {
  document.getElementById("formulario").addEventListener("submit", enviar);
  
  document.getElementById("name").addEventListener("focus", changeFocus);
  document.getElementById("name").addEventListener("blur", changeBlur);

  document.getElementById("lastName").addEventListener("focus", changeFocus);
  document.getElementById("lastName").addEventListener("blur", changeBlur);

  document.getElementById("mail").addEventListener("focus", changeFocus);
  document.getElementById("mail").addEventListener("blur", changeBlur);

  document.getElementById("number").addEventListener("focus", changeFocus);
  document.getElementById("number").addEventListener("blur", changeBlur);

  document.getElementById("description").addEventListener("focus", changeFocus);
  document.getElementById("description").addEventListener("blur", changeBlur);
};

class Solicitud {
  constructor(nombre, apellido, correo, telefono, descripcion) {
    this.name = nombre;
    this.lastName = apellido;
    this.mail = correo;
    this.phone = telefono;
    this.description = descripcion;
    this.objeto = {
      name: this.name,
      lastName: this.lastName,
      mail: this.mail,
      phone: this.phone,
      description: this.description,
    };
  }
}

function enviar(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let mail = document.getElementById("mail").value;
  let phone = document.getElementById("number").value;
  let description = document.getElementById("description").value;
  let bandera = 0;

  if (name.length < 5 || name.length > 20) {
    document.getElementById("nombre").innerHTML =
      "El nombre debe contener entre 5 y 20 caracteres";
    document.getElementById("nombre").style.color = "yellow";
    document.getElementById("nombre").style.fontSize = "15px";
    document.getElementById("nombre").style.marginLeft = "15%";
  } else {
    document.getElementById("nombre").innerHTML = "";
    bandera++;
  }

  if (lastName.length < 5 || lastName.length > 20) {
    document.getElementById("apellido").innerHTML =
      "El apellido debe contener entre 5 y 20 caracteres";
    document.getElementById("apellido").style.color = "yellow";
    document.getElementById("apellido").style.fontSize = "15px";
    document.getElementById("apellido").style.marginLeft = "15%";
  } else {
    document.getElementById("apellido").innerHTML = "";
    bandera++;
  }

  let regMail = /^[^\s@]+@[^\s@]+.\.[^\s@]+$/;
  if (!regMail.test(mail)) {
    document.getElementById("correo").innerHTML =
      "El email debe tener un formato similar a name@mail.com";
    document.getElementById("correo").style.color = "yellow";
    document.getElementById("correo").style.fontSize = "15px";
    document.getElementById("correo").style.marginLeft = "15%";
  } else {
    document.getElementById("correo").innerHTML = "";
    bandera++;
  }

  if (phone.length < 5 || phone.length > 20 || isNaN(phone)) {
    document.getElementById("numero").innerHTML =
      "El telefono debe ser un numero y contener entre 5 y 20 numeros";
    document.getElementById("numero").style.color = "yellow";
    document.getElementById("numero").style.fontSize = "15px";
    document.getElementById("numero").style.marginLeft = "15%";
  } else {
    document.getElementById("numero").innerHTML = "";
    bandera++;
  }

  if (description.length < 5) {
    document.getElementById("descripcion").innerHTML =
      "La descripcion debe contener mas de 100 caracteres";
    document.getElementById("descripcion").style.color = "yellow";
    document.getElementById("descripcion").style.fontSize = "15px";
    document.getElementById("descripcion").style.marginLeft = "15%";
  } else {
    document.getElementById("descripcion").innerHTML = "";
    bandera++;
  }

  if (bandera === 5) {
    arregloDatos.push(new Solicitud(name, lastName, mail, phone, description));
    bandera = 0;
    console.log(arregloDatos);
  }
}
