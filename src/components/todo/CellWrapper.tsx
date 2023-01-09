import React, { memo } from "react";
import Cells from "./Cells";

type Props = { col: any; tasks: any };

const CellWrapper = ({ col, tasks }: Props) => {
  return (
    <>
      {col.taskIds.map((task: string, index: number) => (
        <Cells id={task} index={index} tasks={tasks} key={task} />
      ))}
    </>
  );
};

const areEqual = (prevProps: any, nextProps: any) => {
  if (prevProps.col.taskIds === nextProps.col.taskIds) {
    return true; // donot re-render
  }
  return false; // will re-render
};
export default memo(CellWrapper, areEqual);
