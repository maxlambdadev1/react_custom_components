import { useEffect, useState } from "react";
import styles from "../style/GridListToggle.module.css";
import classNames from "classnames";

const GridListToggle = ({ gridTitle, listTitle }) => {
    const [isActive, setIsActive] = useState(false);
    const toggle = () => {
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
        <button className={classNames(styles["grid-list"], styles[keyStatus], (gridTitle || listTitle) ? "" : styles["without-text"], styles["animation"], isActive ? styles["active"] : "")}
            onClick={toggle}
        >
            <div className={styles["icon"]}>
                <div className={styles["dots"]}>
                    <i></i><i></i><i></i><i></i>
                </div>
                <div className={styles["lines"]}>
                    <i></i><i></i><i></i><i></i>
                </div>
            </div>
            {(gridTitle || listTitle) ? (
                <div className={styles["text"]}>
                    <span>{gridTitle}</span>
                    <span>{listTitle}</span>
                </div>) : null
            }
        </button>
    )
}

export default GridListToggle;