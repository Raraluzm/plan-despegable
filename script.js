const plan = [
  {
    nombre: "Primer Cuatrimestre",
    asignaturas: [
      "Introducción al Derecho",
      "Historia del Derecho",
      "Interpretación Económica del Derecho",
      "Teoría del Estado",
      "Taller de Argumentación Jurídica y Oratoria"
    ]
  },
  {
    nombre: "Segundo Cuatrimestre",
    asignaturas: [
      "Derecho Privado (PG)",
      "Psico Sociología Jurídica",
      "Derecho Constitucional",
      "Derecho Internacional Público",
      "Derechos Humanos"
    ]
  },
  {
    nombre: "Tercer Cuatrimestre",
    asignaturas: [
      "Derecho de las Obligaciones",
      "Teoría General del Proceso",
      "Derecho Penal I (PG)",
      "Derecho de los Negocios",
      "Derecho de Daños"
    ]
  },
  {
    nombre: "Cuarto Cuatrimestre",
    asignaturas: [
      "Derecho del Consumidor",
      "Derechos Reales",
      "Derecho Penal II (PE)",
      "Metodología de la Investigación",
      "Ética y Deontología Jurídica"
    ]
  },
  {
    nombre: "Quinto Cuatrimestre",
    asignaturas: [
      "Derecho Laboral y de la Seguridad Social",
      "Derecho de las Familias",
      "Derecho Administrativo I",
      "Derecho de los Contratos I",
      "Sociedades"
    ]
  },
  {
    nombre: "Sexto Cuatrimestre",
    asignaturas: [
      "Derecho de los Contratos II",
      "Derecho Procesal Civil, Comercial y Familia",
      "Derecho Administrativo II",
      "Finanzas y Derecho Tributario",
      "Práctica Profesional I - Estudio de Casos"
    ]
  },
  {
    nombre: "Séptimo Cuatrimestre",
    asignaturas: [
      "Derecho Ambiental",
      "Derecho de la Integración",
      "Derecho Concursal",
      "Filosofía del Derecho",
      "Práctica Profesional II Taller de Litigación"
    ]
  },
  {
    nombre: "Octavo Cuatrimestre",
    asignaturas: [
      "Sucesiones",
      "Derecho Procesal Penal",
      "Derecho Internacional Privado",
      "Derecho Procesal Constitucional",
      "Práctica Profesional III Consultorio Jurídico Gral."
    ]
  }
];

const container = document.getElementById("plan-container");

// Cargar progreso guardado
let progreso = JSON.parse(localStorage.getItem("progresoMaterias")) || {};

plan.forEach((cuatri, idxCuatri) => {
  const cuatriDiv = document.createElement("div");
  cuatriDiv.className = "cuatrimestre";
  cuatriDiv.innerHTML = `<h2>${cuatri.nombre}</h2>`;
  
  cuatri.asignaturas.forEach((asig, idxAsig) => {
    const asigDiv = document.createElement("div");
    asigDiv.className = "asignatura";
    asigDiv.textContent = asig;
    
    // Verificar si está marcada
    const key = idxCuatri + "-" + idxAsig;
    if (progreso[key]) {
      asigDiv.classList.add("tachada");
    }

    asigDiv.addEventListener("click", () => {
      asigDiv.classList.toggle("tachada");
      progreso[key] = asigDiv.classList.contains("tachada");
      localStorage.setItem("progresoMaterias", JSON.stringify(progreso));
    });
    
    cuatriDiv.appendChild(asigDiv);
  });
  
  container.appendChild(cuatriDiv);
});
