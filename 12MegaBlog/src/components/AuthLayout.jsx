import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const [loader, setloader] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      //it runs when the user is authenticated(logged in).
      //authentication is officialy true, && (ampreseand represents 'then') means the authentication is true and authStatus is not equal to authentication then show navigate ('login)
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      //it runs when the user is not authenticated(not logged in).
      //authentication is officialy false, && (ampreseand represents 'then') means the authentication is true and authStatus is not equal to authentication then show navigate ('login)
      navigate("/");
    }
    setloader(false);
  }, [authentication, authStatus, navigate]);
  //The dependency array [authentication, authStatus, navigate] specifies that the effect should run whenever any of these dependencies change.

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
