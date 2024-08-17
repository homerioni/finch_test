import React, {FC} from "react";
import s from "./TicketHeader.module.scss";
import icons from "../../constants/svgIcons";

interface ITicketHeaderProps {
    isShowResult: boolean;
    randomFieldFn: () => void;
}

const TicketHeader: FC<ITicketHeaderProps> = ({isShowResult, randomFieldFn}) => {
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
