import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import "./Card.css";
import { CAR_ARRIVED, CAR_ON_INTERNAL_PARKING, CAR_STATUS } from '../../carStatus';

const Card = ({ item, index, columnId, isCarOnLoading, onComplete }) => {
  const productionKind = `Тип продукции: ${item.production.kind}`;
  const productionWeight = `Вес: ${item.production.size} ${item.production.unitFormat}`;
  const passDates = `Пропуск выдан: с ${item.pass.startDate} по ${item.pass.endDate}`
  const status = `Статус: ${CAR_STATUS[item.statusId]}`;

  return (
    <Draggable key={item.nomenclatureId} draggableId={item.nomenclatureId.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='card'>
            <b>{item.carId}</b>
            <span>{productionKind}</span>
            <span>{productionWeight}</span>
            <span>{passDates}</span>
            {(item.statusId > CAR_ARRIVED && item.statusId < CAR_ON_INTERNAL_PARKING) && <span>{status}</span>}
            {isCarOnLoading && (
              <button type='button' className='card__complete' onClick={() => {
                if (window.confirm(`Вы уверены что загрузили погрузку для ${item.carId}?`)) {
                  onComplete(columnId, item.nomenclatureId)
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
