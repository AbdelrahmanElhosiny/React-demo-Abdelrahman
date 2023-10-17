import styled from "@emotion/styled";
import RegisterForm from "./RegisterForm";
import RegisterSubmitted from "./RegisterSubmitted";

function RegisterPage() {
  return (
    <Holder>
      <RegisterForm />
      <RegisterSubmitted />
    </Holder>
  );
}

const Holder = styled.div`
  height: calc(100vh - calc(1.1em * 2));
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  justify-content: center;
  align-items: center;
`;

export default RegisterPage;
