import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "../assets/login.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Email,
  GitHub,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export default function Login() {
  // states
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="h-screen w-full relative">
      <div className="w-full h-full -z-10 absolute top-0 left-0 overflow-hidden">
        <img src={Image} className="w-full h-full object-cover" alt="Login" />
      </div>
      <div className="w-full lg:w-1/2 h-full backdrop-blur-md bg-white/30">
        <div className="grid place-items-center h-full w-full ">
          <form className="max-sm:px-5 max-sm:w-full sm:w-[330px]">
            <div className="flex flex-col gap-2">
              {/* email field */}
              <TextField
                type="email"
                fullWidth
                label="Email"
                InputLabelProps={{ className: "!text-sm" }}
                InputProps={{
                  className: "!text-sm",
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* password field */}
              <TextField
                className="!mt-3"
                type={isOpen ? "text" : "password"}
                fullWidth
                label="Password"
                InputLabelProps={{ className: "!text-sm" }}
                InputProps={{
                  className: "!text-sm",
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={() => setIsOpen(!isOpen)}
                      className="!cursor-pointer"
                    >
                      {isOpen ? (
                        <Visibility fontSize="small" />
                      ) : (
                        <VisibilityOff fontSize="small" />
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              <div className="flex items-center justify-between">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={<Typography variant="body2">Remember Me</Typography>}
                />
                <Typography
                  variant="body2"
                  component={Link}
                  to={"/forgot-password"}
                >
                  Forgot Password
                </Typography>
              </div>
            </div>
            {/* submit button */}
            <Button className="!w-full !py-2.5 !mt-5" variant="contained">
              Login
            </Button>
            <Divider className="!my-4">
              <Typography variant="body2">OR</Typography>
            </Divider>
            {/* social media login */}
            <div className="flex flex-col gap-3">
              <Button
                variant="outlined"
                className="!w-full !py-2.5 !text-sm !normal-case"
                startIcon={<Google />}
              >
                Login with Google
              </Button>
              <Button
                variant="contained"
                className="!w-full !py-2.5 !text-sm !normal-case"
                startIcon={<GitHub />}
              >
                Login with Github
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
