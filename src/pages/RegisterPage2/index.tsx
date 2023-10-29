import styled from "@emotion/styled";
import RegisterForm, { FormFields } from "./RegisterForm";
import RegisterSubmitted from "./RegisterSubmitted";
import React, { useState } from "react";

export const SubmitContext = React.createContext<FormFields | null>(null);

const RegisterPage: React.FC = () => {
  const [value, setValue] = useState<FormFields | null>(null);

  return (
    <SubmitContext.Provider value={value}>
      <Holder>
        <RegisterForm onSubmit={setValue} />
        <RegisterSubmitted />
      </Holder>
    </SubmitContext.Provider>
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
