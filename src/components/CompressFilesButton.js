import { useEffect, useState } from "react";
import styles from "../style/CompressFilesButton.module.css";
import classNames from "classnames";

const CompressFilesButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCompress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 4000)
    }

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
    <button className={classNames(styles["button"], styles[keyStatus], isLoading ? styles['compress'] : '')}
        onClick={handleCompress}
    >
        <div className={classNames(styles["paper"], styles['left'])}></div>
        <div className={classNames(styles["paper"], styles['middle'])}></div>
        <div className={classNames(styles["paper"], styles['right'])}></div>
        <div className={styles["inner"]}>
            <div className={styles["zipper"]}>
                <div className={styles["line"]}></div>
                <div className={styles["gradient"]}></div>
            </div>
            <span>Compress files</span>
            <svg viewBox="0 0 20 16">
                <polyline points="3 8.75 7.75 13.5 17 2.5"></polyline>
            </svg>
        </div>
    </button>
)
}

export default CompressFilesButton;