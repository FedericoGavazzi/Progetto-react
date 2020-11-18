import React from "react";
import "./styles.css";

export function App() {
  return (
    <div className="App">
      <h1>Calcolatrice</h1>
      <div>
        <form>
          <input type="text" placeholder="0"></input>
        </form>
        <br></br>
        <div className="row">
          <button className="btn btn-est-sx num">7</button>
          <button className="btn btn-center num">8</button>
          <button className="btn btn-center num">9</button>
          <button className="btn btn-est-dx oper">/</button>
        </div>
        <div className="row">
          <button className="btn btn-est-sx num">4</button>
          <button className="btn btn-center num">5</button>
          <button className="btn btn-center num">6</button>
          <button className="btn btn-est-dx oper">*</button>
        </div>
        <div className="row">
          <button className="btn btn-est-sx num">1</button>
          <button className="btn btn-center num">2</button>
          <button className="btn btn-center num">3</button>
          <button className="btn btn-est-dx oper">-</button>
        </div>
        <div className="row">
          <button className="btn btn-est-sx oper">%</button>
          <button className="btn btn-center num">0</button>
          <button className="btn btn-center oper">.</button>
          <button className="btn btn-est-dx oper">+</button>
        </div>
      </div>
    </div>
  );
}
