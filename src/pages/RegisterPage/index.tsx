import styled from "@emotion/styled";
import RegisterForm, { FormFields } from "./RegisterForm";
import RegisterSubmitted from "./RegisterSubmitted";
import { useState } from "react";

const RegisterPage: React.FC = () => {
  const [value, setValue] = useState<FormFields | null>(null);

  return (
    <Holder>
      <RegisterForm onSubmit={setValue} />
      <RegisterSubmitted values={value} />
    </Holder>
  );
};

const Holder = styled.div`
  height: calc(100vh - calc(1.1em * 2));
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  justify-content: center;
  align-items: center;
`;

export default RegisterPage;
