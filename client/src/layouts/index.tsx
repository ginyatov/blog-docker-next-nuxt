import DefaultLayout from "./default";
import AdminLayout from "./admin";
import SessionsLayout from "./sessions";

const layouts = {
  default: DefaultLayout,
  admin: AdminLayout,
  sessions: SessionsLayout,
};

const LayoutWrapper = ({ type, children }) => {
  const Layout = layouts[type];

  if (Layout !== null) {
    return <Layout>{children}</Layout>;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
};

export default LayoutWrapper;
