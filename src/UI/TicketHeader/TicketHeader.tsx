import React, {Dispatch, FC, SetStateAction} from "react";
import s from "./TicketHeader.module.scss";
import icons from "../../constants/svgIcons";
import {getNumbersFn} from "../../helpers/getNumbersFn";

interface ITicketHeaderProps {
    isShowResult: boolean;
    setFirstField: Dispatch<SetStateAction<number[]>>;
    setSecondField: Dispatch<SetStateAction<number[]>>;
}

const TicketHeader: FC<ITicketHeaderProps> = ({isShowResult, setSecondField, setFirstField}) => {
    const randomFieldFn = () => {
        setFirstField(getNumbersFn(8, 19));
        setSecondField(getNumbersFn(1, 2));
    };

    return (
        <div className={s.header}>
            <h2 className={s.title}>Билет 1</h2>
            {!isShowResult && (
                <button className={s.randomBtn} type="button" onClick={randomFieldFn}>
                    {icons.randomBtn}
                </button>
            )}
        </div>
    );
};

export default TicketHeader;
