import React from "react";
import { logOut } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hooks";

const LogOut = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(logOut())}>LOG OUT</button>
        </div>
    );
};

export default LogOut;
