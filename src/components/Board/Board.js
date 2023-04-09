import React, { useEffect, useState, useRef } from 'react';
import { columnsFromBackend, INTERNAL_PARKING_COLUMN_ID, INVITE_TO_TERRIOTY_COLUMN_ID, NORTH_LOADING_COLUMN_ID, EXTERNAL_PARKING_COLUMN_ID, SOUTH_LOADING_COLUMN_ID } from '../../columns';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from "../Card/Card";
import "./Board.css";
import axios from 'axios';
import { cloneDeep, isEqual } from 'lodash';

const MAX_INVITED_CARS_ON_LOADING = 2;
const MAX_CARS_ON_LOADING = 1;

const Board = () => {
  const [columns, setColumns] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  async function loadData() {
    const { data } = await axios.get("http://localhost:5000/store/invoices");
    let columnsCopy = cloneDeep(columnsFromBackend);

    for (const [key, value] of Object.entries(columnsCopy)) {
      const columnsItems = data.filter((x) => x.status === Number(key))
      columnsCopy[key].items = columnsItems;
    }

    return columnsCopy;
  }

  useEffect(() => {
    // setIsLoading(true)
    loadData().then((cols) => setColumns(cols))
    // setIsLoading(false)
  }, [])
  // loadData().then((cols) => setColumns(cols))
  // loadData()

  // const [someData, setSomeData] = useState({});
  // const componentMounted = useRef(true); // (3) component is mounted
    // ...

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const destinationDroppableId = Number(destination.droppableId);

      if (destinationDroppableId === INVITE_TO_TERRIOTY_COLUMN_ID && destColumn.items.length === MAX_INVITED_CARS_ON_LOADING) {
        alert("Нельзя пригласить больше 2ух машин на въезд");
        return;
      }

      if (destinationDroppableId === INVITE_TO_TERRIOTY_COLUMN_ID && columns[INTERNAL_PARKING_COLUMN_ID].items.length >= 2) {
        alert(`Вы не можете пригласить машины, т.к на внутренней стоянке уже 2 машины`);
        return;
      }

      if (destinationDroppableId === INVITE_TO_TERRIOTY_COLUMN_ID
          && columns[INVITE_TO_TERRIOTY_COLUMN_ID].items.length === 1
          && columns[INTERNAL_PARKING_COLUMN_ID].items.length === 1) {
        alert("Вы не можете пригласить еще одного водителя");
        return;
      }

      if (destinationDroppableId === NORTH_LOADING_COLUMN_ID && destColumn.items.length === MAX_CARS_ON_LOADING) {
        alert(`На точке погрузки "${destColumn.title}" может быть только одна машина`);
        return;
      }

      if (destinationDroppableId === SOUTH_LOADING_COLUMN_ID && destColumn.items.length === MAX_CARS_ON_LOADING) {
        alert(`На точке погрузки "${destColumn.title}" может быть только одна машина`);
        return;
      }

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      
      // temp assignment
      if (removed.statusId === 2) {
        removed.statusId = 4
      }

      // temp assignment
      if (removed.statusId === 1) {
        removed.statusId = 2;
      }

      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const onCardComplete = (columnId, invoiceId) => {
    const column = columns[columnId];
    const copiedItems = [...column.items];
    const index = copiedItems.findIndex((x) => x.invoiceId === invoiceId)
    copiedItems.splice(index, 1);
    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: [],
      },
    });
  }

  // useEffect(() => {
  //   let isMounted = true;

  //   axios.get("http://localhost:5000/store/invoices").then((res) => {
  //     let columnsCopy = cloneDeep(columnsFromBackend);
  //     for (const [key, value] of Object.entries(columnsCopy)) {
  //       const columnsItems = res.data.filter((x) => x.status === Number(key))
  //       columnsCopy[key].items = columnsItems;
  //     }

  //     if (isMounted) {
  //       setColumns(columnsCopy)
  //     }
  //   });

  //   return () => {
  //     isMounted = false;
  //   }
  // }, []);

  // console.log("Kek: ", kek)

  console.log("some data: ", columns)
  console.log("is equal: ", isEqual(columns, {}))
  console.log("is equal: ", columns === {})
  // return (<div>Hello</div>)

  // if (!columns) return <div>Loading...</div>;

  return (
    !isEqual(columns, {}) && (<DragDropContext
      onDragEnd={(result) => onDragEnd(result)}
    >
      <div className='board'>
        <div className='board-columns'>
          <div className='board-column'>
            <span className='board-column-title'>На погрузке</span>
            <ExternalColumn 
              columnId={NORTH_LOADING_COLUMN_ID.toString()}
              column={columns[NORTH_LOADING_COLUMN_ID]} 
              columnStyles={{
                background: "linear-gradient(.25turn, #B8D3FE, 10%, #AECAD6)",
                marginTop: "8px"
              }}
              onComplete={onCardComplete}
            />
            <ExternalColumn
              columnId={SOUTH_LOADING_COLUMN_ID.toString()}
              column={columns[SOUTH_LOADING_COLUMN_ID]}
              columnStyles={{
                background: "linear-gradient(.25turn, #E58C8A, 10%, #EEC0C6)",
                marginTop: "24px"
              }}
              onComplete={onCardComplete}
            />
          </div>
          <BoardColumn columnId={INTERNAL_PARKING_COLUMN_ID.toString()} column={columns[INTERNAL_PARKING_COLUMN_ID]} />
          <BoardColumn columnId={INVITE_TO_TERRIOTY_COLUMN_ID.toString()} column={columns[INVITE_TO_TERRIOTY_COLUMN_ID]} />
          <BoardColumn columnId={EXTERNAL_PARKING_COLUMN_ID.toString()} column={columns[EXTERNAL_PARKING_COLUMN_ID]} />
        </div>
      </div>
    </DragDropContext>
  ));
};

function BoardColumn({columnId, column}) {
  return (
    <Droppable key={columnId} droppableId={columnId}>
      {(provided, snapshot) => (
        <div
          className='board-column'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className='board-column-title'>{column.title}</span>
          {column.items.map((item, index) => (
            <Card 
              key={item.invoiceId} 
              item={item} 
              index={index} 
              isCarOnLoading={false} 
            />))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

function ExternalColumn({columnId, column, columnStyles, onComplete }) {
  return (
    <div>
      <Droppable key={columnId} droppableId={columnId}>
        {(provided, snapshot) => (
          <div
            className='board-column-external'
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={columnStyles}
          >
            <span className='board-column-external-title'>{column.title}</span>
            {column.items.map((item, index) => (
              <Card 
                key={item.invoiceId}
                item={item} 
                index={index}
                columnId={columnId}
                isCarOnLoading={true}
                onComplete={onComplete}
              />))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Board;
