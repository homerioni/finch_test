import {Dispatch, SetStateAction} from "react";

export const onChangeField = (num: number, field: number[], setField: Dispatch<SetStateAction<number[]>>, maxLengthField: number) => {
    if (field.includes(num)) {
        setField(prev => prev.filter(val => val !== num));
    } else if (field.length < maxLengthField) {
        setField(prev => [...prev, num]);
    }
};
