import { useState } from 'react';
import './App.css';
import Modal from "./Components/Modal";

function App() {

  const [modal, setModal] =  useState(false)
  const toggleModal = () => setModal(!modal)

  return (
    <div className="App">
      <button className="clickme" onClick={toggleModal}>
        Modal
      </button>

      <Modal show={modal} title="My Modal" close={toggleModal}>
        This is Modal content
      </Modal>

    </div>
  );
}

export default App;
