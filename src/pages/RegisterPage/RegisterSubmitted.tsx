import styled from "@emotion/styled";
import color from "../../styles/color";
import { FormFields } from "./RegisterForm";

interface Props {
  values: FormFields | null;
}

const RegisterSubmitted: React.FC<Props> = ({ values }) => {
  if (!values) return null;

  const {
    firstName,
    lastName,
    password,
    confirmPassword,
    accountType,
    country,
    email,
    tos,
  } = values;

  return (
    <SubmittedHolder>
      <div className="text">
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <h1>{email}</h1>
        <h1>{country}</h1>
        <h1>{password}</h1>
        <h1>{confirmPassword}</h1>
        <h1>{accountType}</h1>
        <h1>{tos}</h1>
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
