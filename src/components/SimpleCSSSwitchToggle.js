import { useEffect, useState } from "react";
import styles from "../style/SimpleCSSSwitchToggle.module.css";
import classNames from "classnames";

const SimpleCSSSwitchToggle = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheck = () => {
        console.log('checked', isChecked)
        setIsChecked(!isChecked);
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
        if (keyArr[0].toLowerCase() === " ") setKeyStatus("");
        if (keyArr[0].toLowerCase() === "c") setKeyStatus('keyC');
        if (keyArr[1] === "5" && keyArr[0] === "4") setKeyStatus("key54");
        //    if(keyArr[2].toLowerCase() === "s" && keyArr[1].toLowerCase() === "b" && keyArr[0].toLowerCase() === "f") setKeyStatus("keySBF");
    }, [keyArr]);

    return (
        <label className={classNames(styles["switch"], styles[keyStatus])}>
            <input type="checkbox" />
            <div>
                <span></span>
            </div>
        </label>
    )
}

export default SimpleCSSSwitchToggle;