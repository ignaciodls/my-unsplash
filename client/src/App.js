import './style/global.css'

import Normalize from 'react-normalize'

import ImagesList from "./components/ImagesList";
import Header from './components/Header';
import { useEffect } from 'react';
import { ModalAdd } from './components/ModalAdd';
import { useData } from './context/context'
import ModalDelete from './components/ModalDelete';
import { useModal } from './context/modalContext';

function App() {

  const {isModalAddOpen, isModalDeleteOpen} = useModal()
  const {fetchData} = useData()

  useEffect(() => {

    fetchData()

  },[fetchData])

  return (
    <>
        {
          isModalDeleteOpen &&
          <ModalDelete/> 
        }

        {
          isModalAddOpen &&
          <ModalAdd/>
        }

      <div className='root'>
        <Normalize/>

        <Header/>

        <ImagesList/>

      </div>


    </>
  );
}

export default App;
