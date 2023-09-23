import styled from "@emotion/styled";
import SVG from "../assets/svg";
import Logo from "../assets/svg/logo";

const SideNav = () => {
  return (
    <Holder>
      <div className="logo">
        <SVG.Logo.monotone />
      </div>

      <ul></ul>
    </Holder>
  );
};

const Holder = styled.div``;

export default SideNav;
