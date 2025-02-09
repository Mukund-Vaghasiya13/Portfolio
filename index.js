const ProjectsModle = [
  {
    title: "Uikit",
    project: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
    ],
  },
  {
    title: "SwiftUI",
    project: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1KR-fzeYzPxAII54p8RFZ7cxcpepRVVJrg&s",
        discreption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut fuga sit, obcaecati molestias tempore accusamus laboriosam quam similique ea asperiores quod iste nemo? Eum aliquam explicabo deleniti ipsa sed.",
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
