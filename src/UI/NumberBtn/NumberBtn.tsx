import React, {FC} from "react";
import s from "./NumberBtn.module.scss";

interface INumberBtnProps {
    isActive: boolean;
    number: number;
    onClick: () => void;
}

const NumberBtn: FC<INumberBtnProps> = ({isActive, number, onClick}) => {
    return (
        <button type={"button"} className={`${s.btn} ${isActive && s.active}`} onClick={onClick}>
            <span>{number}</span>
        </button>
    );
};

export default NumberBtn;
