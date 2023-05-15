import { useEffect, useState } from "react";
import styles from "../style/CheckboxSelectionDesign.module.css";
import classNames from "classnames";
import IonIcon from '@reacticons/ionicons';

const CheckboxSelectionDesign = (props) => {
    let type = props.type ? props.type : '1';
    let icon_name = props.icon_name ? props.icon_name : 'logo-twitter';
    let title = props.title ? props.title : 'Twitter';

    const [isChecked, setIsChecked] = useState(false);
    const [class1, setClass1] = useState('');

    const toggleCheck = () => {
        console.log('isChecked', isChecked)
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        let class1 = styles['CheckboxSelectionDesign'] + Math.random();
        console.log('dddd', class1)
        setClass1(class1);
    }, [])

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
        <div className={classNames(styles["tileWrapper"], styles[`type${type}`], styles[keyStatus])}>
            <input type="checkbox" id={class1} checked={isChecked ? true : false} onChange={toggleCheck} />
            {type == '1' ? (
                <>
                    <div className={styles["indicator"]}>
                        <IonIcon name="ellipse-outline" className={styles["empty"]} />
                        <IonIcon name="checkmark-circle" className={styles["checked"]} />
                    </div>
                    <label htmlFor={class1} >
                        <IonIcon name={icon_name} className={styles["icon"]} />
                        <span>{title}</span>
                    </label>
                </>
            ) : (
                <>
                    <label htmlFor={class1} >
                        <IonIcon name={icon_name} className={styles["icon"]} />
                        <span>{title}</span>
                        <div className={styles["indicator"]}>
                            <div className={styles["edge"]} />
                        </div>
                    </label>
                </>
            )}
        </div>
    )
}

export default CheckboxSelectionDesign;