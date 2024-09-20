const projects = [
  {
    title: "GeoGuessr AI",
    description: "A CNN that predicts the geolocation of images.",
    imgSrc: "assets/img/GeoGuessr_Logo.svg",
    tools: "Jupyter Notebook, Python, Google Maps API",
    details: [
      "Leading a team of 4 in semester-long design project, to design a Deep Learning algorithm for image geolocation",
      "Implementing CNN on dataset of Google Street View images taken from locations on adaptively partitioned map",
      "Presenting results in a report and presentation, using rigorous industry-standard performance measures",
    ],
    urlDemo: "https://youtu.be/BbcyZr8XOnY",
    urlSource: "https://github.com/NOBODIDI/APS360_GeoGuessr_NN",
  },
  {
    title: "Map Application Project",
    description: "A C++ application based on OpenStreetMap.",
    imgSrc: "/assets/img/openstreetmap.png",
    tools: "C++, OpenStreetMap",
    details: [
      "Developed app like Google Maps in C++ with 2 partners, using: databases and APIs, pathfinding algorithms, STL templates & data structures to compete for best performance in class, finished 17 out of 100",
      "Collaborated using Git & code review process, & design & communication skills for large software projects",
      "Designed Graphical User Interface to search, move, and zoom to any desired location defined in the map",
    ],
    urlDemo: "",
    urlSource: "",
  },
  {
    title: "SFS Website",
    description: "A website for the Skule French Society",
    imgSrc: "/assets/img/sfs_sc.png",
    tools: "HTML, CSS, JavaScript",
    details: [
      "Designed a website for the Skule French Society, according to the specifications of the President",
      "Used JavaScript to make elements dynamic, used API to load forms from Google and photos from Instagram",
    ],
    urlDemo: "https://skule-french-society.netlify.app/",
    urlSource: "https://github.com/NOBODIDI/SFS_Website",
  },
  {
    title: "Study Buddy",
    description: "A web app to help students manage their workload",
    imgSrc: "/assets/img/calendar.jpeg",
    tools: "Agile, Android Development (Kotlin)",
    details: [
      "Started a mobile productivity application project with two partners, to help students apply learning practices",
      "Established a work environment promoting collaboration, quality, & innovation by using Agile principles",
      "Used the learning techniques to be implemented in the app, learned Android development, created prototypes",
    ],
    urlDemo: "",
    urlSource: "",
  },
  {
    title: "Properties of TEVGs",
    description: "Mechanical Properties of Tissue Engineered Vascular Grafts",
    imgSrc: "/assets/img/tevg.png",
    tools: "Research",
    details: [
      "Researched on the mechanical properties of tissue-engineered vascular grafts (TEVGs)",
      "Presented the results to my class, outlining the importance of properties such as mechanical strength, elasticity, & compliance to obtain a functional graft",
    ],
    urlDemo: "",
    urlSource: "",
  },
];

let displayedProjects = 1;

function loadProjects() {
  const projectContainer = document.getElementById("projects-container");

  projectContainer.innerHTML = ""; // reset the container

  for (let i = 0; i < displayedProjects; i++) {
    const project = projects[i];
    let detailsHTML = "";
    project.details.forEach((detail) => {
      detailsHTML += `<li>${detail}</li>`;
    });

    const projectHTML = `
          <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="${project.title}" src="${
      project.imgSrc
    }" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${
                  project.title
                }<i class="mdi-navigation-more-vert right"></i></span>
                <p>${project.description}</p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> ${project.tools}</li>
                  ${detailsHTML}
                </ul>
                <div class="card-action">
                  ${
                    project.urlDemo
                      ? `<a href="${project.urlDemo}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>`
                      : ""
                  }
                  ${
                    project.urlSource
                      ? `<a href="${project.urlSource}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>`
                      : ""
                  }
                </div>
              </div>
            </div>
          </div>
        `;

    projectContainer.innerHTML += projectHTML;
  }
}

loadProjects();

document.getElementById("load-more").addEventListener("click", function () {
  if (displayedProjects < projects.length) {
    displayedProjects += 1;
    loadProjects();
  } else {
    this.style.display = "none";
  }
});
