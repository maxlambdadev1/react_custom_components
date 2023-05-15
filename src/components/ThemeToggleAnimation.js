import { useEffect, useState } from "react";
import styles from "../style/ThemeToggleAnimation.module.css";
import classNames from "classnames";
import IonIcon from '@reacticons/ionicons';

const ThemeToggleAnimation = () => {
    const [isDay, setIsDay] = useState(true);
    const handleClick = () => {
        console.log('isDay', isDay)
        document.body.classList.toggle('dark');
        setIsDay(!isDay);
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
        <div className={classNames(styles["toggle-wrapper"], styles[keyStatus])}
            onClick={handleClick}
        >
            <IonIcon name="sunny-outline"  className={styles["sun"]} />
            <IonIcon name="moon-outline" className={styles["moon"]} />
        </div>
    )
}

export default ThemeToggleAnimation;