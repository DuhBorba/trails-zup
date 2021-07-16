import { useState, useEffect } from 'react';

import { Fetch } from '../services/fetch';
import { useSubscription } from '../context/subscriptions';


export function Modal({ id, name, description, closeModal = () => { }, isVisible }) {

  const [modalData, setModalData] = useState([]);
  const { subscriptions, setSubscriptions, subscribed, setSubscribed } = useSubscription();

  const fetchModalData = async () => {
    const cards = await Fetch(`trails/${id}/trails-grade/${id}/courses`);
    setModalData(cards);
  }

  useEffect(() => {
    fetchModalData();
  }, [])

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (isVisible && key === "Escape" && closeModal) {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeModal])

  const handleButton = () => {
    setSubscriptions(subscriptions + 1);
    setSubscribed([...subscribed, id]);
    closeModal();
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-container') closeModal();
  }

  return (
    <section id="modal-container" onClick={handleOutsideClick} className="modal-container">
      <div className="modal">
        <button onClick={closeModal} className="close">X</button>
        <div>
          <h2 className="title-modal">{name}</h2>
        </div>
        <div>
          <p className="description-modal">
            {description}
          </p>
        </div>
        <div>
          <button onClick={handleButton} disabled={subscribed.includes(id)} className="btn">inscrever-se</button>
        </div>
        <div>
          <ul className="list-trails">
            {modalData.map(course => <li key={`li_${course.id}`}>{course.name}<span>{course.hours}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}