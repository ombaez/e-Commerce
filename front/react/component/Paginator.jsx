import React from "react";

export default ({ result, handleClick }) => (
  <div className="paginatorContainer">
    <div className="paginatorItem">{`${result} resultados`}</div>
    <div
      id="back"
      onClick={e => {
        handleClick(e);
      }}
      className="paginatorItem"
    >
      {"<"}
    </div>
    <div
      id="1"
      onClick={e => {
        handleClick(e);
      }}
      className="paginatorItem"
    >
      {"1"}
    </div>
    <div
      id="2"
      onClick={e => {
        handleClick(e);
      }}
      className="paginatorItem"
    >
      {"2"}
    </div>
    <div
      id="3"
      onClick={e => {
        handleClick(e);
      }}
      className="paginatorItem"
    >
      {"3"}
    </div>
    <div
      id="forward"
      onClick={e => {
        handleClick(e);
      }}
      className="paginatorItem"
    >
      {">"}
    </div>
  </div>
);
