import { Outlet } from "react-router-dom";

const StudentViewCommonLayout = () => {
  return (
    <div>
      common-layout <Outlet />
    </div>
  );
};

export default StudentViewCommonLayout;
