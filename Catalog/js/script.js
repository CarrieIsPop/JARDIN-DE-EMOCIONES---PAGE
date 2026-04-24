const imagenes = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
  "img23.jpg",
  "img24.jpg"
];


// ================= CARRUSEL =================
const carousel = document.getElementById("carousel");
const total = imagenes.length;
const angulo = 360 / total;
const radio = 350;

imagenes.forEach((nombre, i) => {
    const img = document.createElement("img");
    img.src = "img/" + nombre;

    const altura = 60; // separación vertical entre imágenes

const rot = i * angulo;
const y = (i - total / 2) * altura;

img.style.transform = `
    rotateY(${rot}deg)
    translateY(${y}px)
    translateZ(${radio}px)
`;

    img.onclick = () => {
        const flor = flores.find(f => f.img === nombre);

    document.getElementById("preview-img").src = img.src;
    document.getElementById("preview-title").innerText = flor.nombre;
    document.getElementById("preview-desc").innerText = flor.desc;

    };

    carousel.appendChild(img);
});
carousel.style.transform = `rotateY(${rotacion}deg) rotateX(-10deg)`;

// ROTACIÓN
let rotacion = 0;
let isDown = false;
let startX;

carousel.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX;
});

document.addEventListener("mouseup", () => isDown = false);

document.addEventListener("mousemove", e => {
    if (!isDown) return;

    let move = e.pageX - startX;
    rotacion += move * 0.3;

    carousel.style.transform = `rotateY(${rotacion}deg)`;

    startX = e.pageX;
});



// ================= FLORES =================
const flores = [
  {
    img: "img1.jpg",
    nombre: "Cerezo Sakura",
    desc: "Flores de cerezo en tonos rosados suaves que simbolizan la primavera y la renovación."
  },
  {
    img: "img2.jpg",
    nombre: "Capullo Blanco",
    desc: "Un capullo en proceso de apertura rodeado de hojas verdes frescas."
  },
  {
    img: "img3.jpg",
    nombre: "Nube Romántica",
    desc: "Pequeñas flores blancas delicadas con iluminación cálida y suave."
  },
  {
    img: "img4.jpg",
    nombre: "Lirio de Agua",
    desc: "Flor tipo loto flotando en el agua, símbolo de pureza y tranquilidad."
  },
  {
    img: "img5.jpg",
    nombre: "Campo Blanco",
    desc: "Un amplio campo lleno de flores blancas bajo luz natural brillante."
  },
  {
    img: "img6.jpg",
    nombre: "Ramo Boho",
    desc: "Flores secas en tonos neutros con estilo rústico y elegante."
  },
  {
    img: "img7.jpg",
    nombre: "Azafrán Morado",
    desc: "Flores moradas con centro naranja vibrante cubiertas de rocío."
  },
  {
    img: "img8.jpg",
    nombre: "Hortensias Azules",
    desc: "Racimos densos de hortensias en tonos azul profundo y violeta."
  },
  {
    img: "img9.jpg",
    nombre: "Flor Exótica",
    desc: "Flor blanca elegante con pétalos finos vista desde ángulo inferior."
  },
  {
    img: "img10.jpg",
    nombre: "Rosa Minimalista",
    desc: "Una sola rosa rosa sobre fondo neutro, estilo limpio y moderno."
  },
  {
    img: "img11.jpg",
    nombre: "Amapolas Rojas",
    desc: "Flores rojas intensas que destacan sobre un fondo claro y limpio."
  },
  {
    img: "img12.jpg",
    nombre: "Contraste Floral",
    desc: "Flor blanca con centro rojo sobre fondo oscuro dramático."
  },
  {
    img: "img13.jpg",
    nombre: "Flor Silvestre",
    desc: "Flor en tonos púrpura con estética suave y fondo degradado."
  },
  {
    img: "img14.jpg",
    nombre: "Margaritas Macro",
    desc: "Pequeñas margaritas blancas con centros amarillos en detalle macro."
  },
  {
    img: "img15.jpg",
    nombre: "Detalle Urbano Floral",
    desc: "Composición moderna que mezcla naturaleza con estética urbana."
  },
  {
    img: "img16.jpg",
    nombre: "Pradera Amarilla",
    desc: "Campo abierto lleno de flores amarillas bajo luz natural."
  },
  {
    img: "img17.jpg",
    nombre: "Orquídeas Elegantes",
    desc: "Orquídeas púrpura en cascada con un diseño elegante y sofisticado."
  },
  {
    img: "img18.jpg",
    nombre: "Composición Colorida",
    desc: "Flores vibrantes organizadas en una composición creativa y alegre."
  },
  {
    img: "img19.jpg",
    nombre: "Macro Botánico",
    desc: "Primer plano de flor blanca con detalles finos de polen."
  },
  {
    img: "img20.jpg",
    nombre: "Primavera Blanca",
    desc: "Ramas florecidas en tonos blancos bajo luz suave de atardecer."
  },
  {
    img: "img21.jpg",
    nombre: "Corazón Floral",
    desc: "Manos formando un corazón lleno de flores sobre fondo rosa."
  },
  {
    img: "img22.jpg",
    nombre: "Ramo Silvestre",
    desc: "Ramo blanco silvestre con estética natural y fresca."
  },
  {
    img: "img23.jpg",
    nombre: "Lavanda Relajante",
    desc: "Tallos de lavanda silvestre que aportan un aroma visual de calma y serenidad."
  },
  {
    img: "img24.jpg",
    nombre: "Girasol Radiante",
    desc: "Un girasol imponente buscando la luz del sol con pétalos amarillos brillantes."
  }
];
// ================= CATÁLOGO =================
const contenedor = document.getElementById("lista-flores");

flores.forEach(flor => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="img/${flor.img}">
        <div class="card-body">
            <h3>${flor.nombre}</h3>
            <p>${flor.desc}</p>
        </div>
    `;

    contenedor.appendChild(card);
});