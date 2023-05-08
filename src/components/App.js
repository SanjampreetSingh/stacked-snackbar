import React from "react";

import { AlertProvider } from "../context/AlertProvider";
import Button from "./AddButton/AddButton";
import { Grid } from "@mui/material";

export default function App() {
    return (
        <AlertProvider>
            <Grid direction='row' display='flex' justifyContent='center' height='100vh' alignItems='center'>
                <Button />
            </Grid>
        </AlertProvider>
    );
}
