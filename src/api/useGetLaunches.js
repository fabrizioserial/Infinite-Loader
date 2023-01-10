import axios from "axios";
import {baseUrl} from "../config";
import {useEffect, useState} from "react";

export const useGetLaunches = ({page}) => {

    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getLaunches = async () => {
        return await axios.get(`${baseUrl}/launches`, {
            params: {
                limit: 10,
                offset: page
            }
        })
    }

    useEffect(()=>{
        if(page !== undefined){
            setLoading(true)
            getLaunches()
                .then((response)=>{
                    setLaunches(prev => [...prev,...response.data]);
                    setLoading(false);
                })
                .catch((error)=>{
                    setError(error);
                    setLoading(false);
                })
        }

    },[page])

    return {
        data: launches,
        loading,
        error
    }
}