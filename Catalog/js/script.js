const imagenes = [
  "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg",
  "img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg",
  "img13.jpg","img14.jpg","img15.jpg","img16.jpg","img17.jpg","img18.jpg",
  "img19.jpg","img20.jpg","img21.jpg","img22.jpg","img23.jpg","img24.jpg"
];

// ================= CARRUSEL INTERACTIVO =================
const carousel = document.getElementById("carousel");

// duplicamos para loop infinito
const loopImagenes = [...imagenes, ...imagenes, ...imagenes];

let current = Math.floor(loopImagenes.length / 2); // empezar al centro

loopImagenes.forEach((nombre) => {
    const img = document.createElement("img");
    img.src = "public/" + nombre;
    img.classList.add("cover-img");

    img.onclick = () => {
    const flor = flores.find(f => f.img === nombre);

    if (!flor) return;

    document.getElementById("preview-img").src = img.src;
    document.getElementById("preview-title").textContent = flor.nombre;
    document.getElementById("preview-desc").textContent = flor.desc;
};

    carousel.appendChild(img);
});

// POSICIONAR IMÁGENES (ESTILO COVERFLOW)
function actualizar() {
    const items = document.querySelectorAll(".cover-img");

    items.forEach((img, i) => {
        const offset = i - current;

        let x = offset * 130;
        let scale = offset === 0 ? 1.2 : 0.75;
        let rotate = offset === 0 ? 0 : (offset > 0 ? -40 : 40);
        let opacity = Math.abs(offset) > 6 ? 0 : 1;

        img.style.transform = `
            translateX(${x}px)
            scale(${scale})
            rotateY(${rotate}deg)
        `;

        img.style.zIndex = 100 - Math.abs(offset);
        img.style.opacity = opacity;
    });
}

actualizar();

// ================= DRAG =================
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

    if (move > 60) {
        current--;
        startX = e.pageX;
    } else if (move < -60) {
        current++;
        startX = e.pageX;
    }

    actualizar();
});


// ================= FLORES =================
const flores = [
  { img: "img1.jpg", nombre: "Cerezo Sakura", desc: "Flores de cerezo..." },
  { img: "img2.jpg", nombre: "Capullo Blanco", desc: "Un capullo..." },
  { img: "img3.jpg", nombre: "Nube Romántica", desc: "Flores delicadas..." },
  { img: "img4.jpg", nombre: "Lirio de Agua", desc: "Flor tipo loto..." },
  { img: "img5.jpg", nombre: "Campo Blanco", desc: "Campo lleno..." },
  { img: "img6.jpg", nombre: "Ramo Boho", desc: "Flores secas..." },
  { img: "img7.jpg", nombre: "Azafrán Morado", desc: "Flores moradas..." },
  { img: "img8.jpg", nombre: "Hortensias Azules", desc: "Racimos densos..." },
  { img: "img9.jpg", nombre: "Flor Exótica", desc: "Flor elegante..." },
  { img: "img10.jpg", nombre: "Rosa Minimalista", desc: "Una rosa..." },
  { img: "img11.jpg", nombre: "Amapolas Rojas", desc: "Flores rojas..." },
  { img: "img12.jpg", nombre: "Contraste Floral", desc: "Flor blanca..." },
  { img: "img13.jpg", nombre: "Flor Silvestre", desc: "Flor púrpura..." },
  { img: "img14.jpg", nombre: "Margaritas Macro", desc: "Margaritas..." },
  { img: "img15.jpg", nombre: "Detalle Urbano Floral", desc: "Composición..." },
  { img: "img16.jpg", nombre: "Pradera Amarilla", desc: "Campo amarillo..." },
  { img: "img17.jpg", nombre: "Orquídeas Elegantes", desc: "Orquídeas..." },
  { img: "img18.jpg", nombre: "Composición Colorida", desc: "Flores vibrantes..." },
  { img: "img19.jpg", nombre: "Macro Botánico", desc: "Primer plano..." },
  { img: "img20.jpg", nombre: "Primavera Blanca", desc: "Ramas..." },
  { img: "img21.jpg", nombre: "Corazón Floral", desc: "Manos..." },
  { img: "img22.jpg", nombre: "Ramo Silvestre", desc: "Ramo..." },
  { img: "img23.jpg", nombre: "Lavanda Relajante", desc: "Lavanda..." },
  { img: "img24.jpg", nombre: "Girasol Radiante", desc: "Girasol..." }
];

// ================= CATÁLOGO =================
const contenedor = document.getElementById("lista-flores");

flores.forEach(flor => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="public/${flor.img}">
        <div class="card-body">
            <h3>${flor.nombre}</h3>
            <p>${flor.desc}</p>
        </div>
    `;

    contenedor.appendChild(card);
});