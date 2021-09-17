import React, { useState, useCallback, useMemo } from "react";

import axiosIntance from "../helper/axios";


const DataContext = React.createContext()

export function DataProvider(props){

    const [data, setData] = useState([])
    const [selectedToDelete, setSelectedToDelete] = useState()
    const [query, setQuery] = useState('')

    const fetchData = useCallback(async() => {
  
        try{
    
            const res = await axiosIntance.get('/file')
            setData(res.data.data)
    
        }catch(err){
    
        }

    },[])

    const deleteFile = async() => {

        try{

            await axiosIntance.delete('/file/delete',{
                params:{
                    imageID:selectedToDelete
                }
            })

        }catch(err){

        }

    }
    
    const obj = {
        data,
        setData,
        fetchData,
        deleteFile,
        selectedToDelete,
        query,
        setQuery,
        setSelectedToDelete
    }
  
    return <DataContext.Provider value={obj} {...props}/>

}

export function useData(){

    const ctx = React.useContext(DataContext)
    return ctx

}