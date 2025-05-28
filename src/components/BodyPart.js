import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/dumbbell-3d.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            width: "270px",
            height: "282px",
            gap: "47px",
            cursor: "pointer",
            borderBottomLeftRadius: "20px",
            borderTop: "4px solid #E9A319",
            bgcolor: "#4B352A",
          }
        : {
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
            borderBottomLeftRadius: "20px",
            bgColor: "#4B352A",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      textTransform="capitalize"
      fontSize="24px"
      fontWeight="bold"
      fontFamily="monospace"
      color="#E9A319"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
