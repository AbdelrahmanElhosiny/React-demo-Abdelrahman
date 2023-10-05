import styled from "@emotion/styled";

const ChannelForm = () => {
  return (
    <FormHolder>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel" name="channel" />

      <button>Submit</button>
    </FormHolder>
  );
};
//------------------
//STYLE
//------------------
const FormHolder = styled.form`
  label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 2em;
  }
  .form-control {
    margin-bottom: 20px;
  }
  .error {
    color: red;
  }
`;

export default ChannelForm;
