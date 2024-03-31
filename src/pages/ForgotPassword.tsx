import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "../assets/login.png";
import { Email } from "@mui/icons-material";

export default function ForgotPassword() {
  return (
    <div
      className="w-full h-screen grid place-items-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="w-[370px] max-w-[95%] rounded-lg shadow-lg bg-white/30 backdrop-blur-md px-4 py-5 border-primary border border-opacity-50">
        <Typography variant="subtitle1" className="">
          Forgot Password
        </Typography>
        <p className="text-xs text-opacity-50">
          Please enter your email to reset the password
        </p>
        <div className="mt-6 flex flex-col gap-5">
          <TextField
            type="email"
            fullWidth
            label="Your Email"
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
          <Button className="!w-full !py-2.5" variant="contained">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
