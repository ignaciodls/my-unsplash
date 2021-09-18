import React, { useRef } from 'react'
import { useData } from '../context/context'
import { useModal } from '../context/modalContext'

const ModalDelete = () => {

    const {setIsModalDeleteOpen} = useModal()
    const {deleteFile, data, setData, selectedToDelete} = useData()

    const backgroundModalRef = useRef()

    const closeModal = (e) => {

        if(e.target === backgroundModalRef.current ){
            setIsModalDeleteOpen(false)
        }

    }

    const handleDelete = async() => {

        setIsModalDeleteOpen(false)
        setData(data.filter(image => image["public_id"] !== selectedToDelete))
        await deleteFile()

    }

    return (
        <div className='modal-background' ref={backgroundModalRef} onClick={closeModal}>
            <div className='modal' style={{alignItems:'center'}}>
                <div className='modal-title'>
                    Are you sure?
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                    <div className='button' onClick={handleDelete}>Yes</div>
                    <div className='button' style={{background:'#d43434'}} onClick={() => setIsModalDeleteOpen(false)}>No</div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
