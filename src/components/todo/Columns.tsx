import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { memo, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import CellWrapper from "./CellWrapper";
import { StrictModeDroppable } from "./StrictModeDroppable";

type Props = { e: any; col: any; tasks: any; index: number };

const Columns = ({ e, col, tasks, index }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <Draggable draggableId={col.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={
            "rounded-xl border flex-shrink-0" +
            (snapshot.isDragging ? " bg-gray-200" : " bg-white") +
            (open
              ? " p-3 w-[200px] md:max-w-[50%] lg:w-[25%] flex flex-col gap-2"
              : " w-14 pb-4")
          }
        >
          <div
            className={
              "flex items-center overflow-hidden" +
              (open
                ? " justify-between flex-row-reverse p-4 gap-3 flex-shrink-0"
                : " flex-col p-1 h-full")
            }
          >
            <div>
              <IconButton onClick={() => setOpen((prev) => !prev)}>
                {open ? <ArrowBackIos /> : <ArrowForwardIos />}
              </IconButton>
            </div>
            <div className="">
              <div
                className={
                  "flex-grow flex-shrink-0" +
                  (open
                    ? ""
                    : " whitespace-nowrap w-full rotate-90 translate-x-1/2")
                }
                style={{ transformOrigin: "0 50%" }}
              >
                {col.title}
              </div>
              <div
                className={"text-xs text-gray-400" + (open ? "" : " hidden")}
              >
                {`${col.taskIds.length} ${
                  col.taskIds.length > 1 ? "items" : "item"
                }`}
              </div>
            </div>
          </div>
          {open && (
            <>
              <hr />
              <StrictModeDroppable droppableId={e} key={e} type="task">
                {(provided, snapshot) => (
                  <div
                    className={
                      "flex flex-col gap-2 flex-grow overflow-y-auto p-3 transition-colors ease-in-out" +
                      (snapshot.isDraggingOver ? " bg-gray-600" : " bg-white")
                    }
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <CellWrapper col={col} tasks={tasks} />
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
              <Button variant="contained">
                +
              </Button>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default memo(Columns);
