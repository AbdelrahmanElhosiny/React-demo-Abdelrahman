import styled from "@emotion/styled";
import FormSubmit from "./FormSubmit";

function FormPage() {
  return (
    <Holder>
      <FormSubmit />
    </Holder>
  );
}

const Holder = styled.div`
  height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FormPage;
