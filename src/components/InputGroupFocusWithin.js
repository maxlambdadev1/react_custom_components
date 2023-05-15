import { useEffect, useState } from "react";
import styles from "../style/InputGroupFocusWithin.module.css";
import classNames from "classnames";

const InputGroupFocusWithin = (props) => {
    const direction = props.direction == true ? true : false;
    const title = props.title;
    const placeholder = props.placeholder;

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
        <div className={classNames(styles["form-group"], styles[keyStatus])}>
            {direction ? (
                <>
                    <span>{title}</span>
                    <input className={styles["form-field"]} type="text" placeholder={placeholder} />
                </>
            ) : (
                <>
                    <input className={styles["form-field"]} type="text" placeholder={placeholder} />
                    <span>{title}</span>
                </>
            )}
        </div>
    )
}

export default InputGroupFocusWithin;