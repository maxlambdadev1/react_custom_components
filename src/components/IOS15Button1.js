import { useEffect, useState, useRef } from "react";
import styles from "../style/IOS15Button1.module.css";
import classNames from "classnames";
// import colorImg from '../assets/BRL.png';
import colorImg from '../assets/USD.png';
import chroma from "chroma-js";

const IOS15Button1 = () => {
    const colorRef = useRef();
    const [selectedColors, setSelectedColors] = useState([]);

    useEffect(() => {
        const image = colorRef.current;
        if (!!image) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            let width = image.naturalWidth;
            let height = image.naturalHeight;

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, 0, 0);

            // get the sample colors.
            const colors = [], d = width / 20;
            let x, y, r, d_angle = 60;
            for (let angle = 0; angle < 360; angle += d_angle) {
                let num = 0, prevColor = [];
                for (let i = 1; i <= 6; i++) {
                    r = (width - 2 * d) / 12 * i;
                    x = r * Math.cos(angle * Math.PI / 180) + width / 2;
                    y = r * Math.sin(angle * Math.PI / 180) + width / 2;
                    let pixelData = ctx.getImageData(x, y, 1, 1).data;
                    let color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
                    if (pixelData[0] !== 0 || pixelData[1] !== 0 || pixelData[2] !== 0) {
                        colors.push(color);

                    }
                }
            }
            // console.log('colors', colors);


            /** get the suitable colors */
            const chromaColors = colors.map(color => chroma(color));
            console.log('chromaColors', chromaColors);

            let min = 0;
            const selectedChromaColors = [];
            for (let i = 0; i < chromaColors.length - 3; i++) {
                for (let j = i + 1; j < chromaColors.length - 2; j++) {
                    for (let k = j + 1; k < chromaColors.length - 1; k++) {
                        for (let l = k + 1; l < chromaColors.length; l++) {
                            let a1 = chroma.deltaE(chromaColors[i], chromaColors[j]);
                            let a2 = chroma.deltaE(chromaColors[i], chromaColors[k]);
                            let a3 = chroma.deltaE(chromaColors[i], chromaColors[l]);
                            let a4 = chroma.deltaE(chromaColors[j], chromaColors[k]);
                            let a5 = chroma.deltaE(chromaColors[j], chromaColors[l]);
                            let a6 = chroma.deltaE(chromaColors[k], chromaColors[l]);
                            let minTemp = Math.min(a1, a2, a3, a4, a5, a6);
                            if (minTemp > min) {
                                min = minTemp;
                                selectedChromaColors[0] = chromaColors[i];
                                selectedChromaColors[1] = chromaColors[j];
                                selectedChromaColors[2] = chromaColors[k];
                                selectedChromaColors[3] = chromaColors[l];
                            }
                        }
                    }
                }
            }
            const selectedColorsArr = selectedChromaColors.map(item => item.rgb());
            const selectedColors1 = selectedColorsArr.map(item => `rgb(${item[0]},${item[1]},${item[2]} )`);
            console.log('selectedColors1', selectedColors1);
            
            /** sort the color according to the distribution */
            const sumArr = selectedColors1.map((item) => {
                let sum = 0;
                colors.forEach((item1) => {
                    sum += chroma.deltaE(chroma(item1), chroma(item));
                });
                return sum;
            })
            console.log('sumArr', sumArr);
            for (let i = 0; i < sumArr.length - 1; i++) {
                for (let j = i + 1; j < sumArr.length; j++) {
                    if (sumArr[i] > sumArr[j]) {
                        let temp = sumArr[i];
                        sumArr[i] = sumArr[j];
                        sumArr[j] = temp;
                        let temp1 = selectedColors1[i];
                        selectedColors1[i] = selectedColors1[j];
                        selectedColors1[j] = temp1;
                    }
                }
            }
            setSelectedColors(selectedColors1);
        }
    }, [])

    return (
        <button className={classNames(styles["ios-15"])}
            style={selectedColors.length > 0 ? {
                '--c-color-1': selectedColors[0],
                '--c-color-2': selectedColors[1],
                '--c-color-3': selectedColors[2],
                '--c-color-4': selectedColors[3],
            } : {}}
        >
            <img src={colorImg} alt='color image'
                className="absolute h-full p-1 z-10"
                ref={colorRef}
            />
            <div className={styles["wrapper"]}>
                <span>iOS 15</span>
                <div className={classNames(styles["circle"], styles["circle-12"])}></div>
                <div className={classNames(styles["circle"], styles["circle-11"])}></div>
                <div className={classNames(styles["circle"], styles["circle-10"])}></div>
                <div className={classNames(styles["circle"], styles["circle-9"])}></div>
                <div className={classNames(styles["circle"], styles["circle-8"])}></div>
                <div className={classNames(styles["circle"], styles["circle-7"])}></div>
                <div className={classNames(styles["circle"], styles["circle-6"])}></div>
                <div className={classNames(styles["circle"], styles["circle-5"])}></div>
                <div className={classNames(styles["circle"], styles["circle-4"])}></div>
                <div className={classNames(styles["circle"], styles["circle-3"])}></div>
                <div className={classNames(styles["circle"], styles["circle-2"])}></div>
                <div className={classNames(styles["circle"], styles["circle-1"])}></div>
            </div>
        </button>
    )
}

export default IOS15Button1;