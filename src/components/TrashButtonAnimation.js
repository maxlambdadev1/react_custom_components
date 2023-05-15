import { useEffect, useState } from "react";
import styles from "../style/TrashButtonAnimation.module.css";
import classNames from "classnames";

const TrashButtonAnimation = () => {
    const [isActive, setIsActive] = useState(false);

    const handleAction = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 3200)
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
        <button className={classNames(styles.button, styles[keyStatus], isActive ? styles.delete : '')}
            onClick={handleAction}
        >
            <div className={styles.trash}>
                <div className={styles.top}>
                    <div className={styles.paper}></div>
                </div>
                <div className={styles.box}></div>
                <div className={styles.check}>
                    <svg viewBox="0 0 8 6">
                        <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                    </svg>
                </div>
            </div>
            <span>Delete Item</span>
        </button>
    )
}

export default TrashButtonAnimation;