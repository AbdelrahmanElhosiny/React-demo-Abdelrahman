import styled from "@emotion/styled";
import FormSubmit from "../components/FormSubmit";

function FormPage() {
  return (
    <Holder>
      <FormSubmit />
    </Holder>
  );
}

const Holder = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;
`;

export default FormPage;
