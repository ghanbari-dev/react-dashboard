import { Settings } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components/";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Todo,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-black min-w-screen max-w-screen min-h-screen max-h-screen overflow-hidden">
          <div
            className={
              "w-72 dark:bg-gray-500 bg-white flex-shrink-0" +
              (!activeMenu ? " hidden" : "")
            }
          >
            <Sidebar />
          </div>

          <div className="dark:bg-slate-50 bg-slate-50 min-h-screen flex-1 flex flex-col overflow-hidden relative">
            <div className="bg-slate-50 dark:bg-slate-800 z-50">
              <Navbar />
            </div>

            <div className="overflow-auto z-10 flex-1">
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/Todo" element={<Todo />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="fixed right-4 bottom-4">
          <Tooltip title="Settings" placement="top" arrow>
            <IconButton color="primary">
              <Settings className="text-5xl" />
            </IconButton>
          </Tooltip>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
