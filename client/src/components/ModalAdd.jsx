import React, { useRef, useState } from 'react'
import { useData } from '../context/context'
import { useModal } from '../context/modalContext'
import axiosInstance from '../helper/axios'

export const ModalAdd = () => {
    

    const { setIsModalAddOpen } = useModal()
    const {fetchData} = useData()

    const modalBackgroundRef = useRef()
    const [modalData, setModalData] = useState({

        name:'',
        imageURL:''

    })

    const uploadFile = async() => {

        try{

            setIsModalAddOpen(false)
            await axiosInstance.post('/file/upload', modalData)
            fetchData()

        
        }catch(err){
        }

    }
    
    const closeModal = (e) => {
        if (e.target === modalBackgroundRef.current){
            setIsModalAddOpen(false)
        }
    }

    const handleChange = (e) => {

        setModalData({
            ...modalData,
            [e.target.name]:e.target.value
        })

    }

    return (
        <div className='modal-background' onClick={closeModal} ref={modalBackgroundRef}>
            <div className='modal'>

                <span className='modal-title'>Add a new photo</span>

                <div className="modal-fields">
                    <div className="field">
                        <label htmlFor="name">Label</label>
                        <input type="text" name="name" id="name" onChange={handleChange} placeholder='Label'/>
                    </div>

                    <div className="field">
                        <label htmlFor="imageURL">Photo URL</label>
                        <input type="text" name="imageURL" id="imageURL" onChange={handleChange} placeholder='URL'/>
                    </div>
                </div>

                <div className='modal-buttons'>
                    <span className='modal-close' onClick={() => setIsModalAddOpen(false)}>Cancel</span>
                    <div className='button' onClick={uploadFile}>Submit</div>
                </div>

            </div>
        </div>
    )
}
