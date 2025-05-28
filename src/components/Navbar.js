import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/gym-logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="gym-logo"
          style={{ width: "100px", height: "100px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="monospace"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4B352A",
            border: "4px groove #E9A319",
          }}
          className="link-1"
        >
          Hub
        </Link>
        <a
          href="#workouts"
          style={{
            textDecoration: "none",
            padding: "10px",
            border: "4px groove #E9A319",
            color: "#4B352A",
          }}
          className="link-2"
        >
          Extra Info
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
