import { useEffect, useState } from "react";
import styles from "../style/MailNotification.module.css";
import classNames from "classnames";

const MailNotification = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleChecked = () => {
        setIsChecked(!isChecked);
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
        <label className={classNames(styles["email-notification"], styles[keyStatus])}>
            <input type="checkbox" checked = {isChecked ? true : false } onChange={toggleChecked} />
            <svg viewBox="0 0 64 41">
                <path d="M3 2.5L32 21.5L61 2.5" />
            </svg>
            <div className={styles["bell"]}></div>
        </label>
    )
}

export default MailNotification;