import React, { useEffect, useState } from "react";
import { auth, db } from "../utl/firebase";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import './Header.css';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) { // Check if user is not null
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No such user data!");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <header className="header">
      <div className="content">
        <div className="logo">DEV@Deakin</div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="buttons">
          {userDetails ? (
            <>
              <button onClick={handleLogout}>Logout</button>
              <div className="profile-info">
                <span>Welcome, {userDetails.firstName}!</span>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
                <button>Post</button>
            </>
          )}
        </div>
      </div>
      <br />
      <br />
      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&s"
          alt="header image"
        />
      </div>
    </header>
  );
}

export default Profile;
