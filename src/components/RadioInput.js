import { useEffect, useState } from "react";
import styles from "../style/RadioInput.module.css";
import classNames from "classnames";

const RadioInput = () => {
    const [value, setValue] = useState(1);

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
        <div className={classNames(styles['radio-container'], styles[keyStatus])}>
            <label className={styles["radio"]}>
                <input type="radio" name="r" value="1" 
                    onChange={() => setValue(1)}
                    checked={value == 1 ? true : false} />
                <span>Radio #1</span>
            </label>
            <label className={styles["radio"]}>
                <input type="radio" name="r" value="2" 
                    onChange={() => setValue(2)}
                    checked={value == 2 ? true : false} />
                <span>Radio #2</span>
            </label>
            <label className={styles["radio"]}>
                <input type="radio" name="r" value="3" 
                    onChange={() => setValue(3)}
                    checked={value == 3 ? true : false} />
                <span>Radio #3</span>
            </label>
        </div>
    )
}

export default RadioInput;