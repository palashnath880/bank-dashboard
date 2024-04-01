import {
  CreditCard,
  Home,
  Logout,
  People,
  Settings,
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  SvgIconProps,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/finance-logo.png";
import NavMenu from "./NavMenu";

interface MenuType {
  name: string;
  path: string;
  icon: React.ReactElement<SvgIconProps>;
}

export default function Sidebar() {
  // menus array
  const menus: MenuType[] = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home fontSize="small" />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <Home fontSize="small" />,
    },
    {
      name: "Accounts",
      path: "/accounts",
      icon: <People fontSize="small" />,
    },
    {
      name: "Investments",
      path: "/investments",
      icon: <Home fontSize="small" />,
    },
    {
      name: "Credit Cards",
      path: "/credit-cards",
      icon: <CreditCard fontSize="small" />,
    },
    {
      name: "Loans",
      path: "/loans",
      icon: <Home fontSize="small" />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <Home fontSize="small" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings fontSize="small" />,
    },
  ];

  return (
    <div className="bg-white/30 w-[220px] border-r backdrop-blur-md">
      <div className="flex flex-col h-full pb-5 pt-5">
        <Link to={"/"} className="w-auto mx-auto cursor-pointer">
          <img src={logo} alt="Logo" className="!w-24" />
        </Link>
        <div className="flex-1 mt-3">
          {/* menus */}
          <List>
            {menus.map((item, index) => (
              <NavMenu {...item} key={index} />
            ))}
          </List>
        </div>
        <Divider />

        {/* logout button */}
        <MenuItem component={"div"} className="!py-2.5">
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body2">Logout</Typography>
          </ListItemText>
        </MenuItem>
      </div>
    </div>
  );
}
