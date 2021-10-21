import React, { useEffect } from "react";
import { RouteProps } from "react-router-dom";
import { useHistory } from "react-router";
import { useAppSelector } from "../../../app/hooks";
import { selectToken } from "../../../features/auth/authSlice";

const ProtectedPage: React.FC<RouteProps> = (props) => {
    const { token } = useAppSelector(selectToken);

    const history = useHistory();
    useEffect(() => {
        !token && history.push("/login");
    }, [token, history]);

    return <div className="protected-page">{props.children}</div>;
};

export default ProtectedPage;
