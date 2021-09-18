import React, { useState, useCallback } from "react";

import axiosIntance from "../helper/axios";


const DataContext = React.createContext()

export function DataProvider(props){

    const [data, setData] = useState([])
    const [selectedToDelete, setSelectedToDelete] = useState('')
    const [query, setQuery] = useState('')

    const fetchData = useCallback(() => {

        return new Promise(async(resolve,reject) => {
            try{
    
                const res = await axiosIntance.get('/file')
                setData(res.data.data)
                resolve()
        
            }catch(err){
                reject(err)
            }
        })

    },[])

    const deleteFile = () => {

        return new Promise(async(resolve,reject) => {
            try{

                await axiosIntance.delete('/file/delete',{
                    params:{
                        imageID:selectedToDelete
                    }
                })
                resolve()
    
            }catch(err){
                reject()
            }
        })

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