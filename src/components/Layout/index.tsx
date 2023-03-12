import React from "react";
import { Footer, CommonFooter } from "components/Footer";
import SideBar from "components/SideBar";
import { Header, CommonHeader } from "components/Header";
interface Page {
  children: React.ReactNode;
  showFooter?: boolean;
  isLogin?: boolean;
  className?: string;
  showSideBar?: boolean;
  subHeader?: boolean;
  sideBarTitle?: string;
  sideBarBreadcrumb?: string;
}
const Layout = ({
  children,
  showFooter = true,
  isLogin = false,
  className = "pb-0",
  showSideBar = false,
  subHeader = true,
  sideBarTitle = "",
  sideBarBreadcrumb = "",
}: Page) => {
  const styles = {
    background: "#F7F7F8",
  };
  return (
    <div style={styles} className={`${className} min-h-screen`}>
      {isLogin ? <Header /> : <CommonHeader subHeader={subHeader} />}
      {isLogin ? (
        children
      ) : showSideBar ? (
        <SideBar title={sideBarTitle} breadcrumb={sideBarBreadcrumb}>
          {children}
        </SideBar>
      ) : (
        children
      )}
      {showFooter && (isLogin ? <Footer /> : <CommonFooter />)}
    </div>
  );
};

export default Layout;
