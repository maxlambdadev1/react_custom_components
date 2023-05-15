import { useEffect, useState } from "react";
import styles from "../style/ActionMenuMicrointeractions.module.css";
import classNames from "classnames";
import IonIcon from '@reacticons/ionicons';

const ActionMenuMicrointeractions = () => {
    const [isSelected, setIsSelected] = useState(false);

    const selectOption = () => {
        setIsSelected(!isSelected);
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
        <div className={classNames(styles["wrapper"], styles[keyStatus])} >
            <div className={styles["usercard"]}>
                <div id={styles["pb1"]}></div>
                <div className={styles["info"]}>
                    <div className={styles["name"]}>John Doe</div>
                    <div className={styles["job"]}>Creative UX/UI Designer</div>
                </div>
            </div>
            <div className={classNames(styles["options"], isSelected ? styles["open"] : '')} 
                onClick = {selectOption}
            >
                <div className={styles["edit"]}>
                    <IonIcon name="create-outline"  />
                </div>
                <div className={styles["favourite"]}>
                    <IonIcon name="heart-outline" />
                </div>
                <div className={styles["delete"]} >
                    <IonIcon name="trash-outline" />
                </div>
            </div>
        </div>
    )
}

export default ActionMenuMicrointeractions;