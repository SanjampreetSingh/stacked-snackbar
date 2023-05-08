import React from "react";
import Button from "@mui/material/Button";

import { useAlertContext } from "../../context/AlertProvider";

export default function AddButton() {
    const { addData } = useAlertContext();

    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)];
    };

    const SEVERITY = ["error", "warning", "info", "success"];

    const handleAdd = () => {
        const severity = SEVERITY.random()
        addData(`This is a ${severity} message!`, severity);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleAdd}>
                Add Data
            </Button>
        </div>
    );
}
