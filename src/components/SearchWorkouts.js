import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { workoutOptions, fetchData } from "../utils/fetchData";
import XScrollbar from "./XScrollbar";

const SearchWorkouts = ({ bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        workoutOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "32px", xs: "20px" } }}
        mb="49px"
        paddingX="16px"
        textAlign="center"
        borderRadius="8px"
        fontFamily="monospace"
        bgcolor="#4B352A"
        color="#E9A319"
      >
        Find you
        <br /> Exercise
      </Typography>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <XScrollbar
          data={bodyParts}
          isBodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchWorkouts;
