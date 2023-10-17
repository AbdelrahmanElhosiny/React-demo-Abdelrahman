import styled from "@emotion/styled";
import color from "../../styles/color";

function RegisterSubmitted() {
  return (
    <SubmittedHolder>
      <div className="text">
        <h1>submitted form</h1>
      </div>
    </SubmittedHolder>
  );
}

const SubmittedHolder = styled.div`
  display: flex;
  justify-content: center;

  .text {
    border-radius: 1em;
    background-color: ${color.gray};
  }
`;

export default RegisterSubmitted;
