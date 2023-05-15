import { useEffect, useState } from "react";
import styles from "../style/PlayPauseButton.module.css";
import classNames from "classnames";

const PlayPauseButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    let title = 'Delete';

    const onPlayPause = () => {
        setIsPlaying(!isPlaying);
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
        <button className={classNames(styles["play-pause-button"], styles[keyStatus], styles['paused'], isPlaying ? styles['playing'] : '')}
            onClick={onPlayPause}
        >
            <i>P</i>
            <i>l</i>
            <i>a</i>
            <i>y</i>
            <i>use</i>
        </button>
    )
}

export default PlayPauseButton;