import styled from "@emotion/styled";
import color from "../../styles/color";
import { useContext } from "react";
import { SubmitContext } from ".";

const RegisterSubmitted: React.FC = () => {
  const value = useContext(SubmitContext);

  if (!value) return; // quick exit if no value is available

  return (
    <SubmittedHolder>
      <div className="text">
        {Object.values(value).map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </SubmittedHolder>
  );
};

const SubmittedHolder = styled.div`
  display: flex;
  justify-content: center;

  .text {
    border-radius: 1em;
    background-color: ${color.gray};
  }
`;

export default RegisterSubmitted;
