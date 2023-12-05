import React ,{useContext} from "react";
import UserContext from "../Context/UserContext";

//This is the file that we recieve data from our Login file.
function Profile() {
  const {user} = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      Welcome {user.username} and your password is {user.password}
    </div>
  ); //This password is getting the value from login username and password input field.
}

export default Profile;
