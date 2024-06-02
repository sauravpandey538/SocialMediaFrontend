import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const response = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/${userId}/profile`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    response();
  }, [userId]);
  return (
    <div>
      <p>name : {user.email}</p>
      <p>bio : {user.bio}</p>
      <p>id : {user._id}</p>
    </div>
  );
}
export default Profile;
