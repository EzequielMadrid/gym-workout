import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      margin="0 auto"
      width="fit-content"
      marginTop="auto"
      padding="10px"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
      borderRadius="8px"
      bgcolor="#FAD59A"
    >
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        mt="10px"
        textAlign="center"
        pb="10px"
        fontFamily={"Inter, sans-serif"}
        color={"#A86523"}
      >
        Copyright © 2084 Ezequiel Madrid
      </Typography>
      <Link
        href="https://github.com/ezequielMadrid"
        target="_blank"
        rel="noopener"
        underline="hover"
        sx={{
          fontSize: { lg: "20px", xs: "18px" },
          fontFamily: "monospace",
          color: "#A86523",
        }}
      >
        Code
      </Link>
    </Box>
  );
};

export default Footer;
