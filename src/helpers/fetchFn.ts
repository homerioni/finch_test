import axios from "axios";
import {Dispatch, SetStateAction} from "react";

interface IFetchData {
    selectedNumber: {
        firstField: number[];
        secondField: number[];
    };
    isTicketWon: boolean;
}

async function requestFn(url: string, data: unknown, retries = 2, delay = 2000): Promise<unknown> {
    try {
        const response = await axios.post(url, data);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        if (retries > 0) {
            console.error(`Запрос завершился ошибкой ${err}`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return requestFn(url, data, retries - 1, delay);
        } else {
            alert("Ошибка соеденения с сервером");
        }
    }
}

export const fetchData = async (data: IFetchData, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
    const response = await requestFn("https://localhost:3000/loto", data);

    setIsLoading(false);

    return response;
};
