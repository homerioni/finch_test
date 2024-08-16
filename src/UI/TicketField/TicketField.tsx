import React, {FC} from "react";
import s from "./TicketField.module.scss";
import NumberBtn from "../NumberBtn/NumberBtn";

interface ITicketFieldProps {
    length: number;
    fieldName: string;
    fieldTask: string;
    fieldState: number[];
    onChange: (num: number) => void;
}

const TicketField: FC<ITicketFieldProps> = ({length, fieldName, fieldTask, fieldState, onChange}) => {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <p>{fieldName}</p>
                <p>{fieldTask}</p>
            </div>
            <div className={s.content}>
                {Array.from({length}, (_, i) => (
                    <NumberBtn key={i} isActive={fieldState.includes(i + 1)} number={i + 1} onClick={() => onChange(i + 1)} />
                ))}
            </div>
        </div>
    );
};

export default TicketField;
