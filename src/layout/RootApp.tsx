import SideNav from "../components/SideNav";
import RouterIndex from "../routes/Index";
import style from "../styles";
import styled from "@emotion/styled/macro";

function RootApp() {
  return (
    <>
      <SideNav />
      <RouterIndex />
    </>
  );
}



export default RootApp;
