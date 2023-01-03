import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import {
  ArticleOutlined,
  AssignmentIndOutlined,
  BarChartOutlined,
  BubbleChartOutlined,
  CalendarMonthOutlined,
  CandlestickChartOutlined,
  ChangeHistoryOutlined,
  ColorLensOutlined,
  HighlightOff,
  Home,
  InsertChartOutlined,
  ListAltOutlined,
  LocalMallOutlined,
  PieChartOutline,
  ShoppingCartOutlined,
  ShowChartOutlined,
  StackedBarChartOutlined,
  SupervisorAccountOutlined,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

type Props = {};

const Sidebar = (props: Props) => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize && screenSize <= 900) setActiveMenu(false);
  };

  type linkType = { name: string; icon: any };
  type linksType = { title: string; links: linkType[] };
  const links: linksType[] = [
    {
      title: "dashboard",
      links: [{ name: "ecommerce", icon: <LocalMallOutlined /> }],
    },
    {
      title: "pages",
      links: [
        { name: "orders", icon: <ShoppingCartOutlined /> },
        { name: "employees", icon: <SupervisorAccountOutlined /> },
        { name: "customers", icon: <AssignmentIndOutlined /> },
      ],
    },
    {
      title: "apps",
      links: [
        { name: "calendar", icon: <CalendarMonthOutlined /> },
        { name: "todo", icon: <ListAltOutlined /> },
        { name: "editor", icon: <ArticleOutlined /> },
        { name: "color", icon: <ColorLensOutlined /> },
      ],
    },
    {
      title: "charts",
      links: [
        { name: "line", icon: <ShowChartOutlined /> },
        { name: "area", icon: <BubbleChartOutlined /> },
        { name: "bar", icon: <BarChartOutlined /> },
        { name: "pie", icon: <PieChartOutline /> },
        { name: "financial", icon: <CandlestickChartOutlined /> },
        { name: "color-mapping", icon: <InsertChartOutlined /> },
        { name: "pyramid", icon: <ChangeHistoryOutlined /> },
        { name: "stacked", icon: <StackedBarChartOutlined /> },
      ],
    },
  ];

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center ml-3 mt-4 gap-3 font-extrabold tracking-tight dark:text-white text-blue-900"
              onClick={handleCloseSideBar}
            >
              <Home /> <span>Home</span>
            </Link>

            <Tooltip title="Menu" placement="bottom" arrow>
              <IconButton
                onClick={() => {
                  setActiveMenu(false);
                }}
                className="mt-4 md:hidden"
              >
                <HighlightOff />
              </IconButton>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <div key={link.name}>
                    <NavLink
                      to={`/${link.name}`}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        color: isActive ? "blue" : "gray",
                      })}
                      className="flex m-2"
                    >
                      <Button color="inherit" className="flex-1 justify-start">
                        <div className="flex pl-4 pt-3 pb-2.5 gap-3 items-center w-full">
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </div>
                      </Button>
                    </NavLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
