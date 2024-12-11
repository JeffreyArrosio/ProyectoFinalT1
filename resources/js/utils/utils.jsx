import { useState } from "react";

export default function comprobarData(data) {
    if (data.bolo === null) {
        return false;
    } else {
        return true;
    }
}
