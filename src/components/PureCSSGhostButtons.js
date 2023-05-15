import { useEffect, useState } from "react";
import styles from "../style/PureCSSGhostButtons.module.css";
import classNames from "classnames";

const PureCSSGhostButtons = () => {

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
        <div className={classNames(styles["container"], styles[keyStatus])}>
            <button role="button" tabIndex="0" style={{'--buttonColor': '#0088FF'}}>Boo!<span></span><span></span><span></span><span></span><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b></button>
            <button role="button" tabIndex="0" style={{'--buttonColor': '#FFAA00'}}>Boo!<span></span><span></span><span></span><span></span><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b></button>
            <button role="button" tabIndex="0" style={{'--buttonColor': '#FF7700'}}>Boo!<span></span><span></span><span></span><span></span><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b></button>
            <button role="button" tabIndex="0" style={{'--buttonColor': '#FF0033'}}>Boo!<span></span><span></span><span></span><span></span><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b><b aria-hidden="true">Boo!</b></button>
        </div>
    )
}

export default PureCSSGhostButtons;