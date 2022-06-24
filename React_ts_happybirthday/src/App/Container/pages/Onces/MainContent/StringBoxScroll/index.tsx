import React, { useEffect, useState } from "react";

import style from "./StringBoxScroll.module.less";
interface Props {
    str: string;
}
const index: React.FC<Props> = ({ str }) => {
    return <p className={style["StringBoxScroll"]}>{str}</p>;
};

export default index;
