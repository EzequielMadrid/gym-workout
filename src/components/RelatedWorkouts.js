import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import XScrollbar from "./XScrollbar";
import Loader from "./Loader";

const RelatedWorkouts = ({ targetMuscleWorkouts, equipmentWorkouts }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Related{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        workouts
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleWorkouts.length !== 0 ? (
          <XScrollbar data={targetMuscleWorkouts} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Related{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        workouts
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentWorkouts.length !== 0 ? (
          <XScrollbar data={equipmentWorkouts} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default RelatedWorkouts;
