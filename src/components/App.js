import React from "react";
import { Grid } from "@mui/material";

import { AlertProvider } from "../context/AlertProvider";
import Button from "./AddButton/AddButton";
import AlertBar from "./AlertBar/AlertBar";

export default function App() {
    return (
        <AlertProvider>
            <AlertBar />
            <Grid
                direction="row"
                display="flex"
                justifyContent="center"
                height="100vh"
                alignItems="center"
            >
                <Button />
            </Grid>
        </AlertProvider>
    );
}
