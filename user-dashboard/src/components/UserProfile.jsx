import React, { useState, useEffect } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [dogImage, setDogImage] = useState("");

  // Fetch random dog image 🐶
  useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.url.endsWith(".jpg") || data.url.endsWith(".png")) {
          setDogImage(data.url);
        } else {
          setDogImage(
            "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=200"
          );
        }
      })
      .catch(() =>
        setDogImage(
          "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=200"
        )
      );
  }, []);

  const activities = [
    {
      id: 1,
      title: "Posted a new photo",
      details: "Uploaded a picture of a golden retriever playing fetch 🎾.",
    },
    {
      id: 2,
      title: "Followed @doggo_facts",
      details: "Started following a fun daily dog fact account 🐶.",
    },
    {
      id: 3,
      title: "Liked 7 new posts",
      details: "Liked a few adorable pug and corgi pictures ❤️.",
    },
    {
      id: 4,
      title: "Commented on a photo",
      details: "Commented ‘So cute!! 🐾’ on a friend's post.",
    },
    {
      id: 5,
      title: "Shared a blog post",
      details: "Posted ‘5 Tips for Training Your Puppy’ on timeline 🐕.",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Profile Card */}
      <div className="profile-card">
        <img src={dogImage} alt="Dog Profile" className="profile-pic" />
        <h2 className="user-name">Meha Patel</h2>

        {/* Stats */}
        <div className="stats">
          <div className="stat">
            <h3>120</h3>
            <p>Posts</p>
          </div>
          <div className="stat">
            <h3>3.5k</h3>
            <p>Followers</p>
          </div>
          <div className="stat">
            <h3>980</h3>
            <p>Likes</p>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="activities-card">
        <h3>Recent Activities</h3>
        <ul className="activities-list">
          {activities.map((activity) => (
            <li key={activity.id} className="activity-item">
              <div className="activity-header">
                <span>{activity.title}</span>
                <button
                  className="view-btn"
                  onClick={() =>
                    setSelectedActivity(
                      selectedActivity === activity.id ? null : activity.id
                    )
                  }
                >
                  {selectedActivity === activity.id ? "Hide" : "View"}
                </button>
              </div>
              {selectedActivity === activity.id && (
                <p className="activity-details fade-in">{activity.details}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
