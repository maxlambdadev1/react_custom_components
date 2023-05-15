import { useEffect, useState } from "react";
import styles from "../style/IOS15Button.module.css";
import classNames from "classnames";

const IOS15Button = () => {

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
        <button className={classNames(styles["ios-15"], styles[keyStatus])}>
            <div className={styles["wrapper"]}>
                <span>iOS 15</span>
                <div className={classNames(styles["circle"], styles["circle-12"])}></div>
                <div className={classNames(styles["circle"], styles["circle-11"])}></div>
                <div className={classNames(styles["circle"], styles["circle-10"])}></div>
                <div className={classNames(styles["circle"], styles["circle-9"])}></div>
                <div className={classNames(styles["circle"], styles["circle-8"])}></div>
                <div className={classNames(styles["circle"], styles["circle-7"])}></div>
                <div className={classNames(styles["circle"], styles["circle-6"])}></div>
                <div className={classNames(styles["circle"], styles["circle-5"])}></div>
                <div className={classNames(styles["circle"], styles["circle-4"])}></div>
                <div className={classNames(styles["circle"], styles["circle-3"])}></div>
                <div className={classNames(styles["circle"], styles["circle-2"])}></div>
                <div className={classNames(styles["circle"], styles["circle-1"])}></div>
            </div>
        </button>
    )
}

export default IOS15Button;