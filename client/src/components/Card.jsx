import React from 'react'
import { useData } from '../context/context'
import { useModal } from '../context/modalContext'

const Card = ({url,name,id}) => {

    const {setIsModalDeleteOpen} = useModal()
    const {setSelectedToDelete} = useData()

    const deleteHandleClick = () => {
        setSelectedToDelete(id)
        setIsModalDeleteOpen(true)
    }

    return (
        <div className='image-card'>
            <img src={url} alt="" />
            <div className='image-options'>
                <div className='image-name'>
                    {name}
                </div>
                <div className='delete-button' onClick={deleteHandleClick}>
                    Delete
                </div>
            </div>
        </div>
    )
}

export default Card
