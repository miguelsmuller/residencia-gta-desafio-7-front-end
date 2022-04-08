import React, { useState } from "react";

import HistoricItem from "./HistoricItem";
import './styles.css'

const Historic = (props) => {
    const [length, setLength] = useState(0)

    return(
    <div className="wrapper">
        <HistoricItem />
    </div>
    )
}

export default Historic