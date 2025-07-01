import React, { useEffect, useState } from "react";
import _, { flip } from "lodash";
import "./MemoryGame.css";

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (id) => {
    if (flippedCards.length >= 2) return;

    const updatedCard = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isFlipped: true };
      } else {
        return card;
      }
    });
    const clickedCard = cards.find((card) => card.id === id);
    setCards(updatedCard);
    setFlippedCards((prev) => [...prev, clickedCard]);
  };

  useEffect(() => {
    let initializeDeck = () => {
      let duplicateImages = [...images, ...images];
      let newCards = duplicateImages.map((image, idx) => {
        return {
          id: image + "-" + idx,
          imageURL: image,
          isFlipped: false,
          isMatched: false,
        };
      });
      console.log("newCrads", newCards);

      let shuffledCards = _.shuffle(newCards);
      setCards(shuffledCards);
    };
    initializeDeck();
  }, []);

  useEffect(() => {
    if (flippedCards.length < 2) return;

    const [first, second] = flippedCards;
    const isMatch = first.imageURL === second.imageURL && first.id !== second.id;

    if (isMatch) {
      // Mark matched cards
      const updatedCards = cards.map((card) => {
        if (card.id == first.id || card.id === second.id) {
          return { ...card, isMatched: true };
        }
        return card;
      });
      setCards(updatedCards);
      setFlippedCards([]);
    } else {
      // Flip back after short delay
      setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (card.id === first.id || card.id === second.id) {
            return { ...card, isFlipped: false };
          }
          return card;
        });
        setCards(updatedCards);
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);
  

  const playAgain = () => {
    let duplicateImages = [...images, ...images];
    let newCards = duplicateImages.map((image, idx) => {
      return {
        id: image + "-" + idx,
        imageURL: image,
        isFlipped: false,
        isMatched: false,
      };
    });
    console.log("newCrads", newCards);

    let shuffledCards = _.shuffle(newCards);
    setCards(shuffledCards);
    setFlippedCards([]);
  };

  const WinningCond = () => {
    return cards?.every((card) => card.isMatched);
  };

  return (
    <div>
      <div className="game-board">
        {cards?.map((card) => {
          return (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              {card.isFlipped || card.isMatched ? (
                <img src={card.imageURL} alt="" />
              ) : (
                <div className="placeholder">🔒</div>
              )}
            </div>
          );
        })}
      </div>

      {WinningCond() && (
        <div className="victory-message">
          You Won!
        </div>
      )}
      <br />
    <button onClick={() => playAgain()}>Play Again!</button>
    </div>
  );
};

export default MemoryGame;
