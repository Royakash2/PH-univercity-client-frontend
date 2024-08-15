import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
type TRoute = {
  path: string;
  element: ReactNode;
};
type TSidebarItem = {
  key: string,
  label: ReactNode,
  children?: TSidebarItem[]

}

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create student",
        path: "Create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];
export const AdminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label:<NavLink to={`/admin/${item.path}`}> {item.name}</NavLink>,
    });
  }

  if (item.children) {
   
      acc.push({
        key:item.name,
        label:item.name,
        children: item.children.map(child=>({
            key:child.name,
            label:<NavLink to={`/admin/${child.path}`}> {child.name}</NavLink>
        }))
      });
    
  }
  return acc;
}, []);

export const AdminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

// export const AdminPaths = [
//     {
//       index:true,
//       element: <AdminDashboard></AdminDashboard>,
//     },
//     {
//       path:'dashboard',
//       element: <AdminDashboard/>,
//     },
//     {
//       path: "create-student",
//       element: <CreateStudent/>,
//     },
//     {
//       path: "create-admin",
//       element: <CreateAdmin/>,
//     },
//     {
//       path: "create-faculty",
//       element: <CreateFaculty/>,
//     },
//   ]
