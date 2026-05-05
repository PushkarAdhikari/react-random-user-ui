import { useState, useEffect } from "react";
import "./App.css";

import UserCard from "./components/UserCard";
import SkeletonCard from "./components/SkeletonCard";

const BASE_URL =
  "https://api.freeapi.app/api/v1/public/randomusers/user/random";

function App() {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      return data?.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const loadUser = async () => {
    setLoading(true);
    const data = await fetchUser();
    setUser(data);
    setLoading(false);
  };


  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <section className="center">
        {loading || !user ? (
          <SkeletonCard />
        ) : (
          <UserCard user={user} onViewProfile={() => setShowProfile(true)} />
        )}

        <button className="btn" onClick={loadUser}>
          🔄 New User
        </button>
      </section>
      {showProfile && (
        <div className="modal" onClick={() => setShowProfile(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}  // 🔥 prevent close on inner click
          >
            <img
              className="modal-avatar"
              src={user.picture.large}
              alt="profile"
            />

            <h2>
              {user.name.first} {user.name.last}
            </h2>

            <p className="modal-email">{user.email}</p>

            <div className="modal-info">
              <p>📍 {user.location.city}, {user.location.country}</p>
              <p>📞 {user.phone}</p>
            </div>

            <button
              className="close-btn"
              onClick={() => setShowProfile(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;