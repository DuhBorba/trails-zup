import { useState, useEffect } from 'react';

import { Card } from './Card';
import { Modal } from './Modal';
import { Fetch } from '../services/fetch';

import '../styles/cards.scss';
import '../styles/modal.scss';


export function CardList() {

  const [cardList, setCardList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const fetchCardList = async () => {
    const cards = await Fetch("trails/");
    setCardList(cards);
  }

  useEffect(() => {
    fetchCardList();
  }, [])

  return (
    <>
      <section className="container">
        <div className="cards">
          {cardList.map(card => <Card
            title={card.name}
            description={card.description}
            image={card.image}
            key={`${card.name}_${card.id}`}
            openModal={() => {
              setModalContent(card);
              setModalVisible(true);
            }} />)
          }
        </div>
      </section>
      {modalVisible && <Modal {...modalContent} closeModal={() => setModalVisible(false)} isVisible={modalVisible} />}
    </>
  )
}