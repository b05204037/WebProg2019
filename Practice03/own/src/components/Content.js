import React from "react";
import { POINT_CONVERSION_COMPRESSED } from "constants";

function Contain(props) {
  return (
    <section id="one" className={props.classN} data-bg="banner2.jpg">
      <div class="inner">
        <article class="box">
          <header>
            <h2>{props.place}</h2>
            <p>{props.time}</p>
          </header>
          <div className="content">
            <p>{props.main}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contain;
