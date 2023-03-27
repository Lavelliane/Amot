import React, { useState } from "react";

const Cards = () => {
  const [cardSize, setCardSize] = useState(false);
  const nameplate = "Vincent Abella";
  const nickname = "Vince";
  const value = "₱" + (150).toFixed(2);
  const cashflow = "To Receive";
  const item = "Item Name";
  const itemVal = "₱" + (150).toFixed(2);
  const timeStamp = "2021-01-01 12:00:00";
  return (
    <>
      <div className="card">
        <div
          style={{
            display: cardSize ? "none" : "flex",
          }}
          className="card-content-small">
          <div className="name-container">
            <h1 className="name-field">{nickname}</h1>
          </div>
          <div className="value-container">
            <h1 className="value-field">{value}</h1>
            <h1 className="cashflow-field">{cashflow}</h1>
          </div>
          <div className="vertical-line"></div>
          <button onClick={() => setCardSize(true)} className="button-to-large">
            {">"}
          </button>
        </div>

        <div
          style={{
            display: cardSize ? "flex" : "none",
          }}
          className="card-content-large">
          <button
            onClick={() => setCardSize(false)}
            className="button-to-small">
            {"ⓧ"}
          </button>
          <div className="first-row">
            <div className="first-row-profile">
              <img
                className="avatar"
                src="/src/assets/avatars/avatars1.png"></img>
              <h1 className="name-field">{nameplate}</h1>
            </div>
            <div className="value-container">
              <h1 className="value-field">{value}</h1>
              <h1 className="cashflow-field">{cashflow}</h1>
            </div>
            <div className="horizontal-line"></div>
          </div>
          <div className="items-container">
            <div className="second-row">
              <div className="second-row-items-container">
                <div className="second-row-items">
                  <div>{item}</div>
                  <div>{itemVal}</div>
                </div>
                <div className="second-row-items-timestamp">{timeStamp}</div>
              </div>
              <div className="horizontal-line"></div>
            </div>
            <div className="second-row">
              <div className="second-row-items-container">
                <div className="second-row-items">
                  <div>{item}</div>
                  <div>{itemVal}</div>
                </div>
                <div className="second-row-items-timestamp">{timeStamp}</div>
              </div>
              <div className="horizontal-line"></div>
            </div>
            <div className="second-row">
              <div className="second-row-items-container">
                <div className="second-row-items">
                  <div>{item}</div>
                  <div>{itemVal}</div>
                </div>
                <div className="second-row-items-timestamp">{timeStamp}</div>
              </div>
              <div className="horizontal-line"></div>
            </div>
            <div className="second-row">
              <div className="second-row-items-container">
                <div className="second-row-items">
                  <div>{item}</div>
                  <div>{itemVal}</div>
                </div>
                <div className="second-row-items-timestamp">{timeStamp}</div>
              </div>
              <div className="horizontal-line"></div>
            </div>{" "}
            <div className="second-row">
              <div className="second-row-items-container">
                <div className="second-row-items">
                  <div>{item}</div>
                  <div>{itemVal}</div>
                </div>
                <div className="second-row-items-timestamp">{timeStamp}</div>
              </div>
              <div className="horizontal-line"></div>
            </div>
          </div>
          <div className="third-row-container">
            <input
              placeholder="Add item..."
              className=" add-item-input-style input"></input>
            <button className="button-to-add">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
