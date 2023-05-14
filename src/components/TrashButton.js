import { useEffect, useState } from "react";
import styles from "../style/TrashButton.module.css";
import classNames from "classnames";

const TrashButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    let title = 'Delete';

    const onDelete = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2400)
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
        <>
            <button className={classNames(styles["button"], styles[keyStatus], isLoading ? styles['delete'] : '')} 
                onClick={onDelete}
            >
                <div className={styles["icon"]}>
                    <svg className={styles["top"]}>
                        <use xlinkHref={`#${styles['top']}`} />
                    </svg>
                    <svg className={styles["bottom"]}>
                        <use xlinkHref={`#${styles['bottom']}`} />
                    </svg>
                </div>
                <div className={styles["text"]}>
                    { title.trim().split('').map(i => (<span>{i}</span>)) }
                </div>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} >
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id={styles["top"]} >
                    <path d="M15,3.75 C15.5522847,3.75 16,4.19771525 16,4.75 L16,5.75 L18.25,5.75 C18.6642136,5.75 19,6.08578644 19,6.5 C19,6.91421356 18.6642136,7.25 18.25,7.25 L5.75,7.25 C5.33578644,7.25 5,6.91421356 5,6.5 C5,6.08578644 5.33578644,5.75 5.75,5.75 L8,5.75 L8,4.75 C8,4.19771525 8.44771525,3.75 9,3.75 L15,3.75 Z M14,5 L10,5 C9.72385763,5 9.5,5.22385763 9.5,5.5 C9.5,5.74545989 9.67687516,5.94960837 9.91012437,5.99194433 L10,6 L14,6 C14.2761424,6 14.5,5.77614237 14.5,5.5 C14.5,5.25454011 14.3231248,5.05039163 14.0898756,5.00805567 L14,5 Z"></path>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id={styles["bottom"]} >
                    <path d="M7.02498527,8.25 L16.9751371,8.25 C17.5411532,8.25 18,8.69771525 18,9.25 C18,9.2951932 17.9968602,9.34033442 17.9906022,9.3851132 L16.6878729,18.7066989 C16.6389095,19.0569074 16.4041276,19.3558931 16.0703039,19.4931212 C14.8428392,19.9977071 13.4860916,20.25 12.0000612,20.25 C10.5140229,20.25 9.1572688,19.9977044 7.92979891,19.4931132 C7.59597391,19.3558774 7.36118974,19.0568881 7.31224574,18.7066728 L6.00952014,9.3851132 C5.93304388,8.83789281 6.32568685,8.33379079 6.88651275,8.25916983 C6.93240487,8.25306363 6.97866843,8.25 7.02498527,8.25 Z"></path>
                </symbol>
            </svg>
        </>
    )
}

export default TrashButton;