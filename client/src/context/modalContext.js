import React, {useState} from "react";

const ModalContext = React.createContext()

export function ModalProvider(props){

    const [isModalAddOpen ,setIsModalAddOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)

    const obj = {
        isModalAddOpen,
        setIsModalAddOpen,
        isModalDeleteOpen,
        setIsModalDeleteOpen
    }

    return <ModalContext.Provider value={obj} {...props}/>

}

export function useModal(){

    const ctx = React.useContext(ModalContext)
    return ctx

}