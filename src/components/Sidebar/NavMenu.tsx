import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { NavLink, useMatch } from "react-router-dom";

interface NavMenuProps {
  path: string;
  name: string;
  icon: React.ReactElement<SvgIconProps>;
}

export default function NavMenu({ icon, name, path }: NavMenuProps) {
  // check active route
  const isActive = useMatch(path);

  return (
    <ListItem
      component={NavLink}
      to={path}
      className={`!duration-200 hover:!bg-primary hover:!bg-opacity-20 relative ${
        isActive && "!bg-primary !bg-opacity-20"
      }`}
    >
      {isActive && (
        <span className="absolute top-0 left-0 w-1.5 bg-primary h-full" />
      )}
      <ListItemIcon className="!min-w-9">{icon}</ListItemIcon>
      <ListItemText>
        <Typography variant="body2">{name}</Typography>
      </ListItemText>
    </ListItem>
  );
}
