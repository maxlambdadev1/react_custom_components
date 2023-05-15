import { useEffect, useState } from "react";
import styles from "../style/UploadAnimation.module.css";
import classNames from "classnames";

const UploadAnimation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const handleClick = () => {
        if (!isLoading) {
            setIsLoading(true);
            setTimeout(() => {
                setIsEnd(true);
            }, 4000);
        } else {
            setIsLoading(false);
            setIsEnd(false);
        }
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
        <div className={classNames(styles["upload"], styles[keyStatus], isLoading? styles['do'] : '', isEnd ? styles['animateEnd'] : '')} 
            onClick = {handleClick}
        >
            <svg className={styles["circle"]} viewBox="0 0 164 164">
                <circle cx="82" cy="82" r="80"></circle>
                <circle className={styles["active"]} cx="82" cy="82" r="80"></circle>
            </svg>
            <svg className={styles["image"]} viewBox="0 0 60 60">
                <rect fill="currentColor" x="0" y="0" width="60" height="60" rx="11.9999993"></rect>
                <circle fill="#FFFFFF" cx="15" cy="15" r="5"></circle>
                <path d="M50,54 L10,54 C7.790861,54 6,52.209139 6,50 L6,44.2867962 C6,44.0993765 6.05266944,43.9157289 6.1520017,43.7567973 L12.6080068,33.4271891 C12.9299296,32.9121126 13.3649277,32.4771145 13.8800042,32.1551917 C15.7533504,30.9843504 18.2211519,31.553843 19.3919932,33.4271891 L26,44 L36.3752674,21.7672841 C36.7726106,20.9158345 37.4570086,20.2314365 38.3084581,19.8340934 C40.3103427,18.8998806 42.6905198,19.7653995 43.6247326,21.7672841 L53.9061831,43.7989639 C53.9679765,43.9313783 54,44.0757261 54,44.2218493 L54,50 C54,52.209139 52.209139,54 50,54 Z" fill="#FFFFFF"></path>
            </svg>
        </div>
    )
}

export default UploadAnimation;