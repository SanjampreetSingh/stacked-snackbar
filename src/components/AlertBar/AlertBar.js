import React, { forwardRef } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

import { useAlertContext } from "../../context/AlertProvider";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertBar() {
    const { data, removeData } = useAlertContext();
    const handleRemove = (id, reason) => {
        if (reason === "clickaway") {
            return;
        }

        removeData(id);
    };

    const handleClose = id => removeData(id);

    return (
        <Stack  sx={{ width: "100%" }}>
            {data.map((obj, idx) => {
                const { id, severity, message } = obj;
                return (
                    <Snackbar
                        open
                        key={id}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left"
                        }}
                        sx={{ mt: `${idx*4}rem` }}
                        TransitionComponent={Fade}
                        autoHideDuration={6000}
                        onClose={(event, reason) => handleRemove(id, reason)}
                    >
                        <Alert
                            onClose={() => handleClose(id)}
                            severity={severity}
                            sx={{ width: "100%" }}
                        >
                            {message}
                        </Alert>
                    </Snackbar>
                );
            })}
        </Stack>
    );
}
