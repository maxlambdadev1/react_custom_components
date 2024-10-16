import { useEffect, useState } from "react";
import styles from "../style/RunningMan.module.css";
import classNames from "classnames";

const RunningMan = () => {

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
        <>
            <div className={classNames(styles["running"], styles[keyStatus])}>
                <div className={styles["outer"]}>
                    <div className={styles["body"]}>
                        <div className={classNames(styles["arm"], styles['behind'])}></div>
                        <div className={classNames(styles["arm"], styles['front'])}></div>
                        <div className={classNames(styles["leg"], styles['behind'])}></div>
                        <div className={classNames(styles["leg"], styles['front'])}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RunningMan;