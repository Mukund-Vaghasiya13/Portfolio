const ProjectsModle = [
  {
    title: "Uikit",
    project: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        link: "https://github.com/Mukund-Vaghasiya13/UIKit_GitHubApi",
        discreption:
          "<b>UIKit_GitHubApi</b>: is iOS app which is build using UIKit ,it uses GitHub Api to fetch the data of the user and repositories of the user. And This Project is inspired by the <b>Sean Allen's UIKit course.</b>",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        link: "https://github.com/Mukund-Vaghasiya13/ProgrammaticRecipes",
        discreption:
          "<b>ProgrammaticRecipes</b>: is iOS app which is build using UIKit ,it uses the programmatic approach to build the UI of the app. And This Project is inspired by the <b>Sean Allen's UIKit course.</b>",
      },
    ],
  },
];

const div = document.querySelector(".List-Projects");
ProjectsModle.forEach((e) => {
  let childDive = document.createElement("div");
  childDive.className = "project";

  let titleOfChildDiv = document.createElement("h1");
  titleOfChildDiv.innerHTML = e.title;

  childDive.appendChild(titleOfChildDiv);

  let innerDiv = document.createElement("div");
  innerDiv.className = "ProjectActualList";
  e.project.forEach((e) => {
    let actualProject = document.createElement("div");
    actualProject.className = "each-Item";

    let p = document.createElement("p");
    p.innerHTML = e.discreption;

    let img = document.createElement("img");
    img.src = e.image;
    img.alt = "image";
    img.className = "ProjectImage";

    actualProject.appendChild(img);
    actualProject.appendChild(p);
    innerDiv.appendChild(actualProject);
  });

  childDive.append(innerDiv);

  div.appendChild(childDive);
});

//TODO: Project Styles
