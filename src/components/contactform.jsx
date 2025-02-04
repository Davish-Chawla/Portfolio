import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form">
            <p className="form-heading">Get In Touch</p>
            <div className="form-field">
              <input required placeholder="Name" className="input-field" type="text" />
            </div>
            <div className="form-field">
              <input required placeholder="Email" className="input-field" type="email" />
            </div>
            <div className="form-field">
              <input required placeholder="Subject" className="input-field" type="text" />
            </div>
            <div className="form-field">
              <textarea required placeholder="Message" cols={30} rows={3} className="input-field" defaultValue={""} />
            </div>
            <button className="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #0a1a3f;
    border-radius: 20px;
  }

  .form-heading {
    text-align: center;
    margin: 2em;
    color: #5ac8fa;
    font-size: 1.2em;
    background-color: transparent;
    align-self: center;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #0a1a3f;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 50, 0.5);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #dce4f7;
    padding-inline: 1em;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #5ac8fa;
    font-weight: bold;
    outline: 1px solid #5ac8fa;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #5ac8fa;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 50, 0.5);
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #5ac8fa 0%, #00509e 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px rgba(90, 200, 250, 0.3);
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export default Form;
