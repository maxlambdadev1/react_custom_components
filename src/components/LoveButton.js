import { useEffect, useState } from "react";
import styles from "../style/LoveButton.module.css";
import classNames from "classnames";

const LoveButton = () => {
    const COUNT = 360 / 6;
    const [arr, setArr] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }

    const [key, setKey] = useState("");
    const [keyArr, setKeyArr] = useState(["", "", ""]);
    const [keyStatus, setKeyStatus] = useState("");

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        let i = 0;
        const temp = [];
        for (i = 0; i < COUNT; i++) {
            temp.push(i);
        }
        setArr(temp);

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
        <button className={classNames(styles["button"], styles[keyStatus], isActive ? styles['button--active'] : '')}
            onClick={handleClick}
        >
            <span className={styles["button__text"]}>Love</span>
            <span className={styles["button__icon"]}>
                <span className={styles["heart__particles"]}>
                    {arr.map((i) => (
                        <span key={100 + i} className={styles["heart__particle"]}
                            style={{
                                "--d": random(30, 60),
                                "--r": (360 / 25) * i,
                                "--h": random(0, 360),
                                "--t": random(25, 50) / 100,
                                "--s": random(20, 60) / 100
                            }}
                        >
                        </span>
                    ))}
                </span>
                <svg className={classNames(styles["heart"], styles["heart--stroke"])} viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
                <svg className={classNames(styles["heart"], styles["heart--fill"])} viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg></span></button>
    )
}

export default LoveButton;