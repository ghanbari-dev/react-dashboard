import { IconButton, Tooltip } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  customFunction?: any;
};

const Navbtn = ({ title, children, customFunction }: Props) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        className="mr-2"
        onClick={customFunction}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default Navbtn;
