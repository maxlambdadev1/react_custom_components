import { useEffect, useState } from "react";
import styles from "../style/CardContentReveal.module.css";
import classNames from "classnames";
import 'material-icons/iconfont/material-icons.css';

const CardContentReveal = () => {
    const [isActive, setIsActive] = useState(false);

    const onclick = () => {
        setIsActive(!isActive);
    }


    const [key, setKey] = useState("");
    const [keyArr, setKeyArr] = useState(["", "", ""]);
    const [keyStatus, setKeyStatus] = useState("");

    useEffect(() => {
        window.addEventListener("keydown", (evt) => {
            setKey(evt.key);
        });
    }, [])
    useEffect(() => {
        let arr = keyArr;
        arr.unshift(key);
        arr = arr.slice(0, 3);
        setKeyArr([...arr]);
    }, [key]);

    useEffect(() => {
        if (keyArr[0].toLowerCase() === "f") setKeyStatus("");
        if (keyArr[0].toLowerCase() === "c") setKeyStatus('keyC');
        if (keyArr[1] === "5" && keyArr[0] === "4") setKeyStatus("key54");
        //    if(keyArr[2].toLowerCase() === "s" && keyArr[1].toLowerCase() === "b" && keyArr[0].toLowerCase() === "f") setKeyStatus("keySBF");
    }, [keyArr]);

    return (
        <div className={classNames(styles["card"], styles[keyStatus], isActive? styles['fondo'] : '')} >
            <div className={classNames(styles["btn-floating"], styles["z-depth-0"], isActive ? styles['rotar'] : '')}
                onClick={onclick}
            >
                <i className="material-icons">add</i>
            </div>
        </div>
    )
}

export default CardContentReveal;