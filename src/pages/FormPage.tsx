import styled from "@emotion/styled";
import ChannelForm from "../components/ChannelForm";

function FormPage() {
  return (
    <Holder>
      <ChannelForm />
    </Holder>
  );
}

const Holder = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;
`;

export default FormPage;
