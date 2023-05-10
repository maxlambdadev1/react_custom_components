import { useEffect, useState } from "react";
import styles from "../style/ButtonHoldToConfirm.module.css";
import classNames from "classnames";

const ButtonHoldToConfirm = ({ gridTitle, listTitle }) => {
    const duration = 1600;
    const [isProcess, setIsProcess] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleProcess = () => {
        setIsProcess(true);
    }
    const cancelProcess = () => {
        setIsProcess(false);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(true);
        }, duration);

        if (!isProcess) clearTimeout(timeout);

        return () => {
            clearTimeout(timeout);
        }
    }, [isProcess])

    const [key, setKey] = useState("");
    const [keyArr, setKeyArr] = useState(["", "", ""]);
    const [keyStatus, setKeyStatus] = useState("");

    useEffect(() => {
        window.addEventListener("keydown", (evt) => {
            setKey(evt.key);
        });
    })
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
        <button className={classNames(styles["button-hold"], styles[keyStatus], isProcess ? styles['process'] : '', isSuccess ? styles['success'] : '')}
            style={{ '--duration': duration + 'ms' }}
            onMouseDown={handleProcess}
            onKeyDown={(e) => { if (e.which == 32 || e.keyCode == 32) handleProcess() }}
            onTouchStart={handleProcess}
            onMouseUp={cancelProcess}
            onMouseOut={cancelProcess}
            onKeyUp={(e) => { if (e.which == 32 || e.keyCode == 32) cancelProcess() }}
            onTouchEnd={cancelProcess}
        >
            <div>
                <svg className={styles["icon"]} viewBox="0 0 16 16">
                    <polygon points="1.3,6.7 2.7,8.1 7,3.8 7,16 9,16 9,3.8 13.3,8.1 14.7,6.7 8,0"></polygon>
                </svg>
                <svg className={styles["progress"]} viewBox="0 0 32 32">
                    <circle r="8" cx="16" cy="16" />
                </svg>
                <svg className={styles["tick"]} viewBox="0 0 24 24">
                    <polyline points="18,7 11,16 6,12" />
                </svg>
            </div>
            Publish
        </button>
    )
}

export default ButtonHoldToConfirm;