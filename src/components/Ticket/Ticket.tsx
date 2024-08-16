import React, {useState} from "react";
import s from "./Ticket.module.scss";
import TicketHeader from "../../UI/TicketHeader/TicketHeader";
import TicketField from "../../UI/TicketField/TicketField";
import {getNumbersFn} from "../../helpers/getNumbersFn";
import {fetchData} from "../../helpers/fetchFn";

const Ticket = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isTicketWon, setIsTicketWon] = useState(false);
    const [isShowResult, setIsShowResult] = useState(false);
    const [firstField, setFirstField] = useState<number[]>([]);
    const [secondField, setSecondField] = useState<number[]>([]);

    const onChangeFirstField = (num: number) => {
        if (firstField.includes(num)) {
            setFirstField(prev => prev.filter(val => val !== num));
        } else if (firstField.length < 8) {
            setFirstField(prev => [...prev, num]);
        }
    };

    const onChangeSecondField = (num: number) => {
        if (secondField.includes(num)) {
            setSecondField(prev => prev.filter(val => val !== num));
        } else if (secondField.length < 1) {
            setSecondField(prev => [...prev, num]);
        }
    };

    const showResult = async () => {
        if (firstField.length === 8 && secondField.length === 1) {
            const winNumsFirst = getNumbersFn(8, 19);
            const winNumsSecond = getNumbersFn(1, 2);
            const qtyMatchesFirst = firstField.filter(num => winNumsFirst.includes(num)).length;
            const qtyMatchesSecond = secondField.filter(num => winNumsSecond.includes(num)).length;
            const isWon = (qtyMatchesSecond >= 1 && qtyMatchesFirst >= 3) || qtyMatchesFirst > 4;

            setIsLoading(true);
            const resp = await fetchData(
                {
                    selectedNumber: {
                        firstField,
                        secondField,
                    },
                    isTicketWon: isWon,
                },
                setIsLoading,
            );
            console.log(resp);

            setIsTicketWon(isWon);
            setIsShowResult(true);
        }
    };

    const onReset = () => {
        setIsShowResult(false);
        setFirstField([]);
        setSecondField([]);
    };

    return (
        <div className={s.main}>
            <TicketHeader isShowResult={isShowResult} setFirstField={setFirstField} setSecondField={setSecondField} />
            {isShowResult ? (
                <>
                    <p className={s.message}>{isTicketWon ? "Ого, вы выиграли! Поздравляем!" : "К сожалению вы проиграли, но всегда можно отыграться!"}</p>
                    <button className={s.submit} type={"button"} onClick={onReset}>
                        Попробовать снова
                    </button>
                </>
            ) : (
                <>
                    <TicketField length={19} fieldName={"Поле 1"} fieldTask={"Отметьте 8 чисел"} fieldState={firstField} onChange={onChangeFirstField} />
                    <TicketField length={2} fieldName={"Поле 2"} fieldTask={"Отметьте 1 число"} fieldState={secondField} onChange={onChangeSecondField} />
                    <button className={s.submit} type={"button"} onClick={showResult}>
                        {isLoading ? "Загрузка..." : "Показать результат"}
                    </button>
                </>
            )}
        </div>
    );
};

export default Ticket;
