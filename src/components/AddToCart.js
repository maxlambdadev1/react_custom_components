import { useEffect, useState } from "react";
import styles from "../style/AddToCart.module.css";
import classNames from "classnames";

const AddToCart = () => {
    const [isAdded, setIsAdded] = useState(false);
    const toggleCheck = () => {
        console.log('isAdded', isAdded)
        setIsAdded(!isAdded);
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
        <button className={classNames(styles["add-to-cart"], styles[keyStatus], isAdded ? styles['added'] : '')}
            onClick={toggleCheck}
        >
            <div className={styles["default"]}>Add to cart</div>
            <div className={styles["success"]}>Added</div>
            <div className={styles["cart"]}>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles["dots"]}></div>
        </button>
    )
}

export default AddToCart;