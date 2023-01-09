import { Button, Card, Paper } from "@mui/material";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Columns from "./Columns";

import data from "./data.json";
import { StrictModeDroppable } from "./StrictModeDroppable";

type Props = {};

const TodoTemplate = (props: Props) => {
  const [state, setState] = useState(data);

  const onDragEnd = (res: DropResult) => {
    const { destination, source, draggableId, type } = res;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };

      setState(newState);
      return;
    }

    const start =
      state.columns[source.droppableId as keyof typeof state.columns];
    const finish =
      state.columns[destination.droppableId as keyof typeof state.columns];

    if (start == finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full h-full flex">
        <StrictModeDroppable
          droppableId="cols"
          direction="horizontal"
          type="column"
        >
          {(provided, snapshot) => (
            <div
              className={
                "flex-grow flex gap-5  p-3 h-full transition-colors ease-in-out" +
                (snapshot.isDraggingOver ? " bg-gray-600" : "")
              }
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {state.columnOrder.map((e: string, index: number) => (
                <Columns
                  key={e}
                  tasks={state.tasks}
                  e={e}
                  col={state.columns[e as keyof typeof state.columns]}
                  index={index}
                />
              ))}

              {provided.placeholder}
              <div className="p-3">
                <Button
                  className="min-h-[50%]"
                  color="secondary"
                  variant="contained"
                >
                  +
                </Button>
              </div>
            </div>
          )}
        </StrictModeDroppable>
      </div>
    </DragDropContext>
  );
};

export default TodoTemplate;
