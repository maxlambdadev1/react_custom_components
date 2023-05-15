import { useEffect, useState } from "react";
import styles from "../style/CSSAnimated3DToaster.module.css";
import classNames from "classnames";

const CSSAnimated3DToaster = ({ gridTitle, listTitle }) => {
    const duration = 1600;
    const [isProcess, setIsProcess] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleProcess = () => {
        setIsProcess(true);
    }
    const cancelProcess = () => {
        setIsProcess(false);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(true);
        }, duration);

        if (!isProcess) clearTimeout(timeout);

        return () => {
            clearTimeout(timeout);
        }
    }, [isProcess])

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
        <div className={classNames(styles['container'], styles[keyStatus])}>
            <input id={styles["toast"]} type="checkbox" />
            <div className={classNames(styles["rotater"], styles["rotater--top"])}></div>
            <div className={classNames(styles["rotater"], styles["rotater--right"])}></div>
            <div className={classNames(styles["rotater"], styles["rotater--bottom"])}></div>
            <div className={classNames(styles["rotater"], styles["rotater--left"])}></div>
            <div className={styles["scene"]}>
                <div className={styles["plane"]}>
                    <div className={classNames(styles["cube"], styles["table"])}>
                        <div className={styles["cube__side"]}></div>
                        <div className={styles["cube__side"]}></div>
                        <div className={styles["cube__side"]}></div>
                        <div className={styles["cube__side"]}></div>
                        <div className={styles["cube__side"]}></div>
                        <div className={styles["cube__side"]}></div>
                    </div>
                    <div className={styles["toaster__shadow"]}></div>
                    <label className={styles["toaster"]} htmlFor={styles["toast"]}>
                        <div className={styles["toast__wrapper"]}>
                            <div className={classNames(styles["cube"], styles["toast"])}>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}>
                                    <div className={styles["toast__face"]}>
                                        <div className={["eyes"]}>
                                            <div className={classNames(styles["eye"], styles["eye--left"])}></div>
                                            <div className={classNames(styles["eye"], styles["eye--right"])}></div>
                                        </div>
                                        <div className={styles["mouth"]}></div>
                                    </div>
                                </div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                            </div>
                        </div>
                        <div className={styles["toaster__toaster"]}>
                            <div className={classNames(styles["cube"], styles["toaster__leg"], styles["toaster__leg--tl"])}>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                            </div>
                            <div className={classNames(styles["cube"], styles["toaster__leg"], styles["toaster__leg--tr"])}>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                            </div>
                            <div className={classNames(styles["cube"], styles["toaster__leg"], styles["toaster__leg--br"])}>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                            </div>
                            <div className={classNames(styles["cube"], styles["toaster__leg"], styles["toaster__leg--bl"])}>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                            </div>
                            <div className={classNames(styles["cube"], styles["toaster__body"])}>
                                <div className={styles["cube__side"]}>
                                    <img src="https://assets.codepen.io/605876/bear-with-cap.svg" />
                                    <div className={styles["toaster__face"]}>
                                        <div className={styles["eyes"]}>
                                            <div className={classNames(styles["eye"], styles["eye--left"])}></div>
                                            <div className={classNames(styles["eye"], styles["eye--right"])}></div>
                                        </div>
                                        <div className={styles["mouth"]}></div>
                                    </div>
                                </div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}>
                                    <div className={classNames(styles["cube"], styles["toaster__handle"])}>
                                        <div className={styles["cube__side"]}></div>
                                        <div className={styles["cube__side"]}></div>
                                        <div className={styles["cube__side"]}></div>
                                        <div className={styles["cube__side"]}></div>
                                        <div className={styles["cube__side"]}></div>
                                        <div className={styles["cube__side"]}></div>
                                    </div>
                                </div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                                <div className={styles["cube__side"]}></div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <label className="cloak" htmlFor={styles["toast"]}></label>

        </div>
    )
}

export default CSSAnimated3DToaster;