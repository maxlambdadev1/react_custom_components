import { useEffect, useState } from "react";
import styles from "../style/Pagination.module.css";
import classNames from "classnames";

const Pagination = ( ) => {
    let pages = 8;
    let p = 100 / (pages - 1);
    const [arr, setArr] = useState([]);
    const [selected, setSelected] = useState(0);
    const [pos, setPos] = useState(0);
    const [isClicking, setIsClicking] = useState(false);

    const handleClick = (i, e) => {
        setSelected(i);
        let val = 0;
        val = e.target.offsetLeft;
        console.log('val', val);
        setPos(val);
        setIsClicking(true);
        setTimeout(() => {
            setIsClicking(false);
        }, 1000);
    }

    const [key, setKey] = useState("");
    const [keyArr, setKeyArr] = useState(["", "", ""]);
    const [keyStatus, setKeyStatus] = useState("");

    useEffect(() => {
        let i = 0;
        const temp = [];
        for (i = 0; i < pages; i++) {
            temp.push(i);
        }
        setArr(temp);

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
        <div className={classNames(styles["pagination-container"], styles[keyStatus])} 
        >
            <div className={classNames(styles["pagination"])} 
                style={{ width : '90%', height : '2px'}}
            >
                <div className={styles["after"]}
                    style={{width : `${pos}px`}}
                ></div>
                { arr.map( i => (
                    <div key={i} 
                        className={classNames(styles["page"], styles["p1"], styles["waves-effect"], i <= selected ? styles["active"] : '')} 
                        style={{ left : `${ p * i}%`}}
                        onClick = {(e) => handleClick(i, e)}
                    >
                        {i + 1}
                    </div>
                ))}
                <div className={classNames(styles["indicator"], isClicking ? styles['anima'] : '')}
                    style={{left : `${pos}px`}}
                ></div>
            </div>
        </div>
    )
}

export default Pagination;