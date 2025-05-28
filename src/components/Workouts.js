import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { workoutOptions, fetchData } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import WorkoutCard from "./WorkoutCard";

const Workouts = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  // State to handle error 429 (Too Many Requests)
  // This state will be set to true if the API returns a 429 error
  const [error429, setError429] = useState(false);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          workoutOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          workoutOptions
        );
      }

      if (exercisesData.error === 429) {
        setError429(true);
        return;
      }

      if (exercisesData.error) {
        console.error("Error al obtener los ejercicios.");
        return;
      }

      setExercises(exercisesData);
      setError429(false);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="workouts" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
        fontFamily="monospace"
      >
        Matches
      </Typography>

      {error429 ? (
        <Typography
          fontSize="20px"
          textAlign="center"
          fontWeight="bold"
          color="error"
        >
          Oops! Too many requests. Please try again later.
        </Typography>
      ) : (
        <>
          <Stack
            direction="row"
            sx={{ gap: { lg: "107px", xs: "50px" } }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {currentExercises.map((exercise, idx) => (
              <WorkoutCard key={idx} exercise={exercise} />
            ))}
          </Stack>

          <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Workouts;
