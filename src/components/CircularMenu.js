import { useEffect, useState } from "react";
import styles from "../style/CircularMenu.module.css";
import classNames from "classnames";
import 'material-icons/iconfont/material-icons.css';

const CircularMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClick = () => {
        setIsActive(!isActive);
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
        <div className={classNames(styles["container"], styles[keyStatus])} >
            <div className={styles["cont"]}
            >
                <i className={classNames("material-icons", styles["btn"], isActive ? styles['click'] : '')} 
                    onClick={toggleClick}>add_circle</i>
                <ul className={classNames(styles["content"], isActive ? styles['expand'] : '')}>
                    <li><i className="material-icons">shuffle</i></li>
                    <li><i className="material-icons">fast_forward</i></li>
                    <li><i className="material-icons">play_arrow</i></li>
                    <li><i className="material-icons">fast_rewind</i></li>
                    <li><i className="material-icons">playlist_add</i></li>
                    <li><i className="material-icons">volume_down</i></li>
                    <li><i className="material-icons">volume_off</i></li>
                    <li><i className="material-icons">volume_up</i></li>
                </ul>
            </div>
        </div>
    )
}

export default CircularMenu;