import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { useStateContext } from "../contexts/ContextProvider";
import { Button, Tooltip } from "@mui/material";
import { Navbtn, Cart, Chat, Notification, UserProfile } from "./";
import {
  AccountCircle,
  KeyboardArrowDownOutlined,
  Mail,
  Menu,
  Notifications,
  ShoppingCartOutlined,
} from "@mui/icons-material";

type Props = {};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize && screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <Box className="flex-1">
      <AppBar color="transparent" position="static">
        <Toolbar className="flex justify-between items-center">
          <div>
            <Navbtn
              title="Menu"
              customFunction={() => setActiveMenu((prev: boolean) => !prev)}
            >
              <Menu className="text-gray-400" />
            </Navbtn>
          </div>

          {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
          <div className="flex items-center gap-3">
            <Navbtn title="Cart" customFunction={() => handleClick("cart")}>
              <Badge badgeContent={4} color="error">
                <ShoppingCartOutlined className="text-gray-400" />
              </Badge>
            </Navbtn>

            <Navbtn title="Chat" customFunction={() => handleClick("chat")}>
              <Badge badgeContent={4} color="error">
                <Mail className="text-gray-400" />
              </Badge>
            </Navbtn>

            <Navbtn
              title="Notifications"
              customFunction={() => handleClick("notification")}
            >
              <Badge badgeContent={4} color="error">
                <Notifications className="text-gray-400" />
              </Badge>
            </Navbtn>

            <div className="text-gray-400">
              <Tooltip title="Profile" placement="bottom" arrow>
                <Button
                  color="inherit"
                  onClick={() => handleClick("userProfile")}
                >
                  <div className="flex gap-2 items-center">
                    <AccountCircle />
                    <div className="text-14 flex gap-2 items-center">
                      <span className="capitalize">Hi,</span>{" "}
                      <span className="font-extrabold capitalize">Mostafa</span>
                    </div>
                    <KeyboardArrowDownOutlined />
                  </div>
                </Button>
              </Tooltip>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </Box>
  );
};

export default Navbar;

/* 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
})); */
