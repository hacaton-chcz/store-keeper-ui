import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import "./Card.css";
import { CAR_ARRIVED, CAR_ON_INTERNAL_PARKING, CAR_STATUS } from '../../carStatus';

const Card = ({ item, index, columnId, isCarOnLoading, onComplete }) => {
  const productionKind = `Тип продукции: ${item.product.name}`;
  const productionWeight = `Вес: ${item.product.amount} ${item.product.units}`;
  const passDates = `Пропуск выдан: с ${item.from} по ${item.to}`
  const status = `Статус: ${CAR_STATUS[item.status]}`;

  return (
    <Draggable key={item.invoiceId} draggableId={item.invoiceId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='card'>
            <b>{item.carNumber}</b>
            <span>{productionKind}</span>
            <span>{productionWeight}</span>
            <span>{passDates}</span>
            {(item.status > CAR_ARRIVED && item.status < CAR_ON_INTERNAL_PARKING) && <span>{status}</span>}
            {isCarOnLoading && (
              <button type='button' className='card__complete' onClick={() => {
                if (window.confirm(`Вы уверены что загрузили погрузку для ${item.carNumber}?`)) {
                  onComplete(columnId, item.invoiceId)
                } else {
                  return
                }
                }}
              >
                Закончить погрузку
              </button>)}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
