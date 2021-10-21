import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { logInAsync, selectToken } from "./authSlice";

const Auth: React.FC = () => {
    const data = useAppSelector(selectToken);
    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        data.token && history.push("/");
    }, [data, history]);

    return (
        <div>
            <p>{`token : ${data.token} status : ${data.status}`}</p>
            <button
                type="button"
                onClick={async () => {
                    await dispatch(
                        logInAsync({ userName: "dupa", password: "dupa" })
                    );
                }}
            >
                {"LOG IN"}
            </button>
        </div>
    );
};
export default Auth;
