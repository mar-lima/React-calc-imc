import React, { useState } from "react";
import styles from "./App.module.css";
import powerdImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { GridItem } from "./components/GridItem";
import { levels, calculateImc, Level } from "./helpers/imc";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weihtField, setweihtField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    const handleCalculateButton = () => {
        if (heightField && weihtField) {
            setToShow(calculateImc(heightField, weihtField));
        } else {
            alert("Digite todos os campos necessarios.");
        }
    };

    const handleBackButton = () => {
        setToShow(null);
        setHeightField(0);
        setweihtField(0);
    };

    return (
        <div className={styles.main}>
            <header className={styles.headerContainer}>
                <img src={powerdImage} alt="" width={150} />
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC</h1>
                    <span>
                        Conhecido pela sigla IMC, é um cálculo simples que
                        permite medir se alguém está ou não com o peso ideal.
                        Ele aponta se o peso está adequado ou se está abaixo ou
                        acima do peso.
                    </span>
                    <input
                        type="number"
                        placeholder="Digite a sua altura. Ex: 1.5 (em metros) "
                        value={heightField > 0 ? heightField : ""}
                        onChange={(e) =>
                            setHeightField(parseFloat(e.target.value))
                        }
                        disabled={toShow ? true : false}
                    />

                    <input
                        type="number"
                        placeholder="Digite o seu peso 75.3 (em kg) "
                        value={weihtField > 0 ? weihtField : ""}
                        onChange={(e) =>
                            setweihtField(parseFloat(e.target.value))
                        }
                        disabled={toShow ? true : false}
                    />
                    <button
                        onClick={handleCalculateButton}
                        disabled={toShow ? true : false}>
                        Calcular
                    </button>
                </div>
                <div className={styles.rightSide}>
                    {!toShow && (
                        <div className={styles.grid}>
                            {levels.map((item, key) => (
                                <GridItem key={key} item={item} />
                            ))}
                        </div>
                    )}
                    {toShow && (
                        <div className={styles.rightBig}>
                            <div
                                className={styles.rightArrow}
                                onClick={handleBackButton}>
                                <img src={leftArrowImage} alt="" width={25} />
                            </div>
                            <GridItem item={toShow} />
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
