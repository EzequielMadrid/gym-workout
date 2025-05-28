import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchWorkouts from "../components/SearchWorkouts";
import Workouts from "../components/Workouts";

const Hub = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <SearchWorkouts
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Workouts
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Hub;
