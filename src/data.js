export const projects = [
  {
    id: 1,
    img: require("./images/requestForUpdate.jpg"),
    // link: "https://etorosd.github.io/personalblog.github.io/blog.html",
    desc: "I developed a Request for Update module that allows users to add, edit, and modify item details with automatic recalculation of total quantity and amount in real time. The module uses Formik for form handling, Ant Design for UI, MobX for reactive state, and React Query for API synchronization to provide a smooth and accurate user experience.",
  },

  {
    id: 2,
    img: require("./images/sorting.jpg"),
    // link: "https://etorosd.github.io/petcatalog.github.io/petcatalog.html",
    desc: "I built a PPMP Sorting Module to organize procurement data by classification, project, item type, and budget. I implemented typed interfaces including IGetSortPpmpRequest, ISortPpmpRequest, and ISortPpmpValues to ensure consistent data structure, scalable sorting logic, and seamless backend integration.",
  },

  {
    id: 3,
    img: require("./images/monitoring.jpg"),
    // link: "https://pabilify-fe-github-io.vercel.app/",
    desc: "I created a Monitoring Module that displays procurement and budget data in a tree structure with account, classification, and item-level details. The module dynamically updates based on user-selected filters and improves data visibility for better decision-making and analysis.",
  },
];
