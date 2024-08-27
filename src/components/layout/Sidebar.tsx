import { Layout, Menu } from "antd";
const {Sider,} = Layout;
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../routes/Admin.routes";
import { FacultyPaths } from "../../routes/Faculty.routes";
import { StudentPaths } from "../../routes/Student.routes";

const userRole ={
    ADMIN : "admin",
    FACULTY : "faculty",
    STUDENT : "student"
}
const Sidebar = () => {
const role = "student";
let sidebarItems ;
switch (role) {
    case userRole.ADMIN:
        sidebarItems =sidebarItemsGenerator(AdminPaths, userRole.ADMIN)
        break;
    case userRole.FACULTY:
        sidebarItems =sidebarItemsGenerator(FacultyPaths, userRole.FACULTY)
        break;
    case userRole.STUDENT:
        sidebarItems =sidebarItemsGenerator(StudentPaths, userRole.STUDENT)
        
        break;

    default:
        break;
}

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          alignItems: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
