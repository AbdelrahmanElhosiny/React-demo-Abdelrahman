import SideNav from "../components/SideNav";
import RouterIndex from "../routes/Index";
import styled from "@emotion/styled";
import style from "../styles";

const { color, font } = style;

const RootApp = () => {
  return (
    <Holder>
      <SideNav />
      <div className="routes-holder">
        <RouterIndex />
      </div>
    </Holder>
  );
};

const Holder = styled.div`
  display: grid;
  grid-template-columns: 15em 1fr;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 1.1em 1em;
  margin: 0;
  background-color: ${color.violet};
  ${font.regular};

  .routes-holder {
    background-color: ${color.white};
    border-radius: 2em;
  }
`;

export default RootApp;
