import styled from "@emotion/styled";
import RegisterForm from "../components/RegisterForm";
import RegisterSubmitted from "../components/RegisterSubmitted";

function RegisterPage() {
  return (
    <Holder>
      <RegisterForm />
      <RegisterSubmitted />
    </Holder>
  );
}

const Holder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default RegisterPage;
