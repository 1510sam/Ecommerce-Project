import React from "react";
import Headers from "../Header/Headers";
import Routers from "../../routes/Routers";
import Footers from "../Footer/Footers";
const Layouts = () => {
  return (
    <div>
      <Headers />
      <div>
        <Routers />
      </div>
      <Footers />
    </div>
  );
};

export default Layouts;
