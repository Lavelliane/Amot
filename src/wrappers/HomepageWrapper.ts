import styled from "styled-components";
import "../index.css";

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Manrope", sans-serif;
  line-height: 1.5;
  font-weight: 800;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #ffffff;
  
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  img.avatar {
    width: 2rem;
    border-radius: 100%;
    box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
  }

  .App {
    position: relative;
    background-color: white;
    height: 700px;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 20px;
    box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.16);
  }

  .header {
    position: relative;
    flex-direction: column;
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-evenly;
    padding: 0rem;
    margin: 0;
    background-color: #0303b7;
    border-radius: 20px 20px 0 0;
    height: 146px;
    box-shadow: 0px 15px 14px -3px rgba(0, 0, 0, 0.16);
  }

  .remove-input-button {
    position: absolute;
    color: #5f5e61;
    border: transparent;
    font-size: 16px;
    font-weight: 900;
    background-color: transparent;
    animation: logo-spin 0.2s ease-in-out;
    translate: 100px 35px;
  }

  .remove-input-button:hover {
    color: #040405;
    cursor: pointer;
  }

  .input {
    outline: none;
    cursor: pointer;
    border: transparent;
    translate: 0px 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9fb;
    border-radius: 50px;
    height: 32px;
    padding: 0px 10px 0px 10px;
    width: 70%;
    color: #040405;
    font-family: inherit;
    font-weight: 700;
    font-size: 13px;
  }
  .input::placeholder {
    color: #c0bec3;
  }

  .add-item-input-style {
    border-bottom: #040405;
    padding-top: 0px;
    height: 50px;
  }

  .logo-container {
    width: 200px;
    height: 50px;
    margin: 0 0;
    padding: 0;
  }

  .logo-container img {
    width: 100%;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #0303b7);
  }
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #0303b7);
  }

  .card {
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-align: left;

    border-radius: 16px;
    background-color: #f9f9fb;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.08);
    animation: fadeUp 0.3s ease-in-out;
  }

  .card-content-small {
    color: #040405;
    display: flex;
    width: 15rem;
    height: 3.5rem;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: space-evenly;
    animation: small 0.3s ease-in-out;
  }

  .card-content-large {
    color: #040405;
    display: inline-flex;
    flex-direction: column;
    width: 18rem;
    height: 19rem;
    padding-left: 14px;
    padding-right: 14px;
    gap: 0px;
    align-items: left;
    animation: enlarge 0.3s ease-in-out;
  }

  .name-container {
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    display: flex;
    width: 70px;
    height: 35px;
    padding: 0em 0em;
    text-align: center;
    justify-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.6rem 0px 0.6rem 0.3rem;
    color: #f9f9fb;
    background-color: #040405;
    border-radius: 10px;
  }

  .name-field {
    font-size: 0.9rem;
    position: relative;
    justify-content: center;
    display: flex;
  }

  .first-row-profile .name-field {
    translate: 0px 2px;
    font-size: 0.7rem;
    position: relative;
    justify-content: center;
    display: flex;
  }

  .first-row .value-field {
    font-size: 2.6rem;
    font-weight: 900;
    position: relative;
    justify-content: left;
    display: flex;
  }

  .value-container {
    translate: 0px 0px;
    position: relative;
    display: flex;
    width: 6rem;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    padding: 0em 0em;
    margin: 0px;
  }

  .first-row .value-container {
    width: 100%;
    translate: 0px -6px;
  }

  .first-row .cashflow-field {
    color: #c0bec3;
  }

  .value-field {
    font-size: 16px;
    font-weight: 800;
    color: #040405;
    margin: 0px;
  }

  .cashflow-field {
    font-size: 10px;
    font-weight: 700;
    color: #c0bec3;
    margin: 0px;
  }

  .vertical-line {
    position: relative;
    background-color: #d9d9d9;
    width: 1.2px;
    height: 46px;
    left: 0rem;
    border-radius: 20px;
  }

  .horizontal-line {
    position: relative;
    align-self: center;
    background-color: #0303b7;
    height: 1.2px;
    width: 90%;

    border-radius: 20px;
  }

  .button-to-large {
    z-index: 10;
    position: relative;
    background-color: transparent;
    outline: none;
    border: none;
    width: max-content;
    color: #040405;
    font-family: "Manrope", sans-serif;
    font-size: 1.5rem;
    margin: 0px;
    animation: logo-spin 0.5s ease-out;
  }

  .button-to-large:hover {
    color: #0303b7;
    cursor: pointer;
  }

  .button-to-small {
    z-index: 10;
    position: relative;
    background-color: transparent;
    outline: none;
    border: none;
    width: max-content;
    color: #c0bec3;
    translate: 15rem 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0px;
    animation: opacity 0.6s ease-in-out;
  }

  .button-to-small:hover {
    color: #0303b7;
    cursor: pointer;
  }

  .card-container {
    scroll-padding-bottom: 0px;
    scroll-padding-top: 0px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 1em 2em 1em 2em;
    width: 260px;
    height: 420px;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    align-content: center;
    vertical-align: top;
    display: inline-flex;
    gap: 0.5rem;
    flex-direction: column;
    box-sizing: content-box;
  }

  .first-row {
    color: #040405;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    gap: 0.2rem;
    width: 100%;
    height: fit-content;

    padding: 0px;
    margin: 0px;
  }

  .first-row-profile {
    translate: 0px -5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .items-container {
    height: 420px;
    overflow-y: scroll;
  }

  .second-row {
    color: #040405;
    display: flex;
    overflow-y: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    gap: 0.5rem;
    width: 100%;
    height: fit-content;
    padding: 0px;
    margin: 0px;
  }

  .second-row-items-container {
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    top: 3px;
    font-size: 0.8rem;
  }
  .second-row-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 900;
  }

  .second-row-items-timestamp {
    font-size: 0.6rem;
    font-weight: 600;
  }

  .second-row .horizontal-line {
    position: relative;
    align-self: center;
    background-color: #d9d9d9;
    height: 1px;
    width: 85%;
    right: -5px;
    border-radius: 20px;
  }

  .third-row-container {
    color: #040405;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    gap: 0.5rem;
    height: 10rem;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }

  .button-to-add {
    z-index: 10;
    position: relative;
    background-color: transparent;
    color: #c0bec3;
    border-radius: 100px;
    outline: none;
    border: none;
    width: 40px;
    height: 40px;
    font-family: "Manrope", sans-serif;
    font-size: 2rem;
    font-weight: 900;
    margin: 0px;
    padding: 0px;
  }

  .bottom {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    justify-items: center;
  }

  .bottom-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    justify-items: center;
    gap: 0rem;
    height: 5rem;
    border-radius: 10px;
    width: 17rem;
    padding: 0px;
    margin: 0px;
    background-color: #0303b7;
  }

  .bottom-container h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .bottom-container h4 {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  .expense-container {
    width: 100%;
    height: 70%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    justify-items: center;
  }

  .split-container {
    width: 100%;
    height: 70%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    justify-items: center;
  }

  .button-to-add:hover {
    color: #0303b7;
    cursor: pointer;
  }

  .card-content-large h1 {
    color: #040405;
  }

  .read-the-docs {
    color: #888;
  }
`;
export default Wrapper;
