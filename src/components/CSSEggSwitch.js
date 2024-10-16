import { useEffect, useState } from "react";
import styles from "../style/CSSEggSwitch.module.css";
import classNames from "classnames";

const CSSEggSwitch = () => {
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
        <label className={classNames(styles["egg-switch"], styles[keyStatus])}>
            <input type="checkbox" checked={isChecked ? true : false} onChange={toggleCheck} />
            <div>
                <div className={styles["flipper"]}>
                    <svg>
                        <use xlinkHref="#flipper"/>
                    </svg>
                </div>
                <div className={styles["egg"]}>
                    <div className={styles["front"]}></div>
                    <div className={styles["back"]}></div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 18" id="flipper" fill="currentColor">
                    <path d="M0.0244740693,1.75473835 C0.00818305726,1.86197078 0,1.97036486 0,2.07892575 L0,15.921377 C0,17.0693688 0.8954305,18 2,18 C2.10445462,18 2.20874874,17.9914953 2.31192515,17.9745638 L17.3119251,15.5130366 C18.2840292,15.3535125 19,14.4826852 19,13.4598497 L19,12.6377416 C19.6666667,11.5984301 20.3333333,11.0787744 21,11.0787744 L39,11.0787744 L39,6.92152835 L21,6.92152835 C20.3333333,6.92152835 19.6666667,6.4018726 19,5.36256109 L19,4.540453 C19,3.51761755 18.2840292,2.64679022 17.3119251,2.48726617 L2.31192515,0.0257389154 C1.2208723,-0.153304839 0.196745571,0.620794577 0.0244740693,1.75473835 Z M12.2049236,12.279252 C12.6185695,12.2575737 12.9714694,12.5753263 12.9931477,12.9889722 C13.0130194,13.3681476 12.747675,13.6962795 12.3847003,13.7650328 L12.2834275,13.7771963 L3.79507644,14.2220519 C3.38143055,14.2437302 3.02853059,13.9259776 3.00685233,13.5123317 C2.98698059,13.1331563 3.25232501,12.8050244 3.61529975,12.7362711 L3.71657251,12.7241076 L12.2049236,12.279252 Z M16.75,5 C16.8683467,5 16.9674868,5.08223341 16.9933973,5.19267729 L17,5.25 L17,12.75 C17,12.8880712 16.8880712,13 16.75,13 C16.6316533,13 16.5325132,12.9177666 16.5066027,12.8073227 L16.5,12.75 L16.5,5.25 C16.5,5.11192881 16.6119288,5 16.75,5 Z M13.7339356,9.6630893 C14.1480861,9.65586028 14.4896817,9.9857353 14.4971398,10.3998858 C14.5035373,10.7795237 14.2269029,11.0981954 13.8617498,11.1542391 L13.7601142,11.1628608 L3.26171343,11.3461111 C2.84756295,11.3533401 2.50596738,11.0234651 2.49850922,10.6093146 C2.49211175,10.2296767 2.76874618,9.91100505 3.13389925,9.85496129 L3.23553482,9.84633957 L13.7339356,9.6630893 Z M3.26171343,6.6630893 L13.7601142,6.84633957 C14.1742647,6.8535686 14.5041397,7.19516417 14.4971402,7.60931465 C14.4902841,7.98895258 14.2026967,8.29777572 13.8358102,8.34104168 L13.7339356,8.34611112 L3.23553482,8.16286085 C2.82138434,8.15563182 2.49150933,7.81403625 2.49850889,7.39988577 C2.50536496,7.02024784 2.79295235,6.7114247 3.15983888,6.66815874 L3.26171343,6.6630893 Z M3.79507644,3.77925197 L12.2834275,4.2241076 C12.6970734,4.24578586 13.0148259,4.59868582 12.9931477,5.01233171 C12.9732759,5.39150712 12.675086,5.69010548 12.306913,5.72054092 L12.2049236,5.7220519 L3.71657251,5.27719627 C3.30292661,5.25551801 2.98517406,4.90261805 3.00685233,4.48897215 C3.02672407,4.10979675 3.32491404,3.81119839 3.69308704,3.78076294 L3.79507644,3.77925197 Z"></path>
                </symbol>
            </svg>
        </label>
    )
}

export default CSSEggSwitch;