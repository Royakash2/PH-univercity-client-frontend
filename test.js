export const adminRouterPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "Admin_Dashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create admin",
        path: "create-admin",
        element: "Create_Admin",
      },
      {
        name: "Create student",
        path: "create-student",
        element: "Create_Student",
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: "Create_Faculty",
      },
    ],
  },
];
const newArray = adminRouterPaths.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NavLink",
    });
  }

  if (item.children) {
   
      acc.push({
        key:item.name,
        label:item.name,
        children: item.children.map(child=>({
            key:child.name,
            label: "NavLink"
        }))
      });
    
  }
  return acc;
}, []);
console.log(newArray);


// const newArray = adminRouterPaths.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
// console.log(newArray);
