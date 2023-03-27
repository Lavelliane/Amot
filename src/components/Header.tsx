import { useState } from "react";
import Logo from "../assets/LogoSample.png";

const Header = () => {
  return (
    <div className="header">
      <LogoBox />
      <InputBox />
    </div>
  );
};

const LogoBox = () => {
  return (
    <div className="logo-container">
      <img src={Logo}></img>
    </div>
  );
};

const InputBox = () => {
  const [text, setText] = useState("");

  function InputText(text: any) {
    const inputText = text;
    let name = inputText.toString();
    setText(name);
  }

  return (
    <>
      <input
        type="text"
        onChange={(text) => {
          InputText(text);
        }}
        value={text}
        placeholder="Who's in the party?"
        className="input drop-shadow-lg"></input>
      <button
        style={{ display: text.length > 0 ? "block" : "none" }}
        id="button"
        className="remove-input-button">
        X
      </button>
    </>
  );
};

export default Header;
