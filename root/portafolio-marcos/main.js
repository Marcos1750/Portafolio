
const projectsData = [
  {
    title: "E-commerce",
    description: "Sitio responsive e-commerce.",
    github: "#",
  },
  {
    title: "To-Do List",
    description: "Aplicación para gestionar tareas con React y LocalStorage.",
    github: " https://github.com/Marcos1750/To-do-list.git",
  },
  {
    title: "Sistema de Inventario",
    description: "CRUD en Java + MySQL para gestionar productos.",
    github: "https://github.com/Marcos1750/Sistema-de-inventario.git",
  }
];


const projectsContainer = document.getElementById("projects-container");


projectsData.forEach(project => {
  
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");


  const cardContent = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p>
      <a href="${project.github}">GitHub</a>
      ${project.demo ? ` | <a href="${project.demo}">Demo</a>` : ''}
    </p>
  `;
  
  projectCard.innerHTML = cardContent;


  projectsContainer.appendChild(projectCard);
});