const posts = [
  {
    title: "Rosas",
    content: "Necesitan sol directo al menos 6 horas al día. Riégalas 2-3 veces por semana sin mojar las hojas para evitar hongos. Poda regularmente para estimular nuevas flores.",
    img: "public/rosas.jpg"
  },
  {
    title: "Orquídeas",
    content: "Colócalas en luz indirecta brillante. Riégalas una vez por semana y asegúrate de que la maceta drene bien. Evita el exceso de agua.",
    img: "public/orquideas.jpg"
  },
  {
    title: "Tulipanes",
    content: "Prefieren climas frescos y suelos bien drenados. Riégalos moderadamente y colócalos en lugares con buena luz.",
    img: "public/tulipanes.jpg"
  },
  {
    title: "Girasoles",
    content: "Requieren mucho sol directo y riego frecuente. Crecen mejor en exteriores con espacio amplio.",
    img: "public/girasoles.jpg"
  },
  {
    title: "Lavanda",
    content: "Necesita sol directo y poco riego. Ideal para climas secos. Evita el exceso de humedad en las raíces.",
    img: "public/lavanda.jpg"
  },
  {
    title: "Cactus",
    content: "Riégalos solo cuando la tierra esté completamente seca. Necesitan mucha luz y poco cuidado.",
    img: "public/cactus.jpg"
  },
  {
    title: "Suculentas",
    content: "Requieren poca agua y mucha luz. Usa macetas con buen drenaje para evitar que se pudran.",
    img: "public/suculentas.jpg"
  },
  {
    title: "Helechos",
    content: "Prefieren ambientes húmedos y sombra. Mantén el suelo húmedo sin encharcar.",
    img: "public/helechos.jpg"
  },
  {
    title: "Aloe Vera",
    content: "Necesita luz directa y riego cada 10-15 días. Sus hojas almacenan agua, así que evita el exceso.",
    img: "public/aloe.jpg"
  },
  {
    title: "Jazmín",
    content: "Requiere sol parcial y riego frecuente. Ideal para exteriores por su aroma.",
    img: "public/jazmin.jpg"
  },
  {
    title: "Begonias",
    content: "Prefieren luz indirecta y riego moderado. Evita mojar las hojas para prevenir enfermedades.",
    img: "public/begonias.jpg"
  },
  {
    title: "Geranios",
    content: "Son resistentes y necesitan sol directo. Riégalos cuando el suelo esté seco.",
    img: "public/geranios.jpg"
  },
  {
    title: "Hortensias",
    content: "Prefieren sombra parcial y suelos húmedos. Cambian de color según el pH del suelo.",
    img: "public/hortensias.jpg"
  },
  {
    title: "Claveles",
    content: "Necesitan sol directo y suelo bien drenado. Riégalos moderadamente.",
    img: "public/claveles.jpg"
  },
  {
    title: "Lirios",
    content: "Prefieren luz indirecta y riego constante. Evita el encharcamiento.",
    img: "public/lirios.jpg"
  },
  {
    title: "Margaritas",
    content: "Fáciles de cuidar. Necesitan sol directo y riego regular.",
    img: "public/margaritas.jpg"
  },
  {
    title: "Bambú",
    content: "Ideal para interiores. Mantén sus raíces en agua limpia y cambia el agua cada semana.",
    img: "public/bambu.jpg"
  },
  {
    title: "Palmera",
    content: "Prefiere luz indirecta y riego moderado. Evita corrientes de aire frío.",
    img: "public/palmera.jpg"
  },
  {
    title: "Ficus",
    content: "Colócalo en luz indirecta. Riégalo cuando la tierra esté seca en la superficie.",
    img: "public/ficus.jpg"
  },
  {
    title: "Monstera",
    content: "Necesita luz indirecta y humedad. Limpia sus hojas para mantenerlas sanas.",
    img: "public/monstera.jpg"
  }
];

const container = document.getElementById("blog-container");

posts.forEach(post => {
  const article = document.createElement("article");
  article.className = "blog-post";

  article.innerHTML = `
    <img src="${post.img}" alt="${post.title}">
    <div class="card-content">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    </div>
  `;

  container.appendChild(article);
});

/* 🌸 Loader animado */
function drawFlower(ctx, rotation) {
  const petals = 6;

  ctx.clearRect(0, 0, 200, 200);
  ctx.save();
  ctx.translate(100, 100);
  ctx.rotate(rotation);

  for (let i = 0; i < petals; i++) {
    const angle = (i * 2 * Math.PI) / petals;
    const x = Math.cos(angle) * 50;
    const y = Math.sin(angle) * 50;

    ctx.beginPath();
    ctx.fillStyle = "#ff69b4";
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.beginPath();
  ctx.fillStyle = "#ffd700";
  ctx.arc(0, 0, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

(function animateFlower() {
  const canvas = document.getElementById("flowerCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let rotation = 0;
  let time = 0; // Nueva variable para el tiempo

  function loop() {
    ctx.clearRect(0, 0, 200, 200);
    ctx.save();
    ctx.translate(100, 100);
    
    // Efecto de "respiración" (escala dinámica)
    const scale = 1 + Math.sin(time) * 0.08; 
    ctx.scale(scale, scale);
    
    ctx.rotate(rotation);
    
    // Aquí reutilizamos tu función de dibujado, pero sin que traslade ni rote de nuevo
    drawFlowerOnly(ctx); 
    
    ctx.restore();

    rotation += 0.02;
    time += 0.08; // Controla la velocidad de la "respiración"
    requestAnimationFrame(loop);
  }

  // Separamos la lógica de dibujar los pétalos para que no interfiera con el nuevo transform
  function drawFlowerOnly(ctx) {
    const petals = 6;
    for (let i = 0; i < petals; i++) {
      const angle = (i * 2 * Math.PI) / petals;
      const x = Math.cos(angle) * 50;
      const y = Math.sin(angle) * 50;

      ctx.beginPath();
      ctx.fillStyle = "#ff69b4";
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.beginPath();
    ctx.fillStyle = "#ffd700";
    ctx.arc(0, 0, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  loop();
})();

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.visibility = "hidden"; // Asegura que ya no intercepte clics
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});