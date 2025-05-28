import React from "react";
import { Stack } from "@mui/material";
import { Watch } from "react-loader-spinner";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Watch color="brown" />
  </Stack>
);

export default Loader;
