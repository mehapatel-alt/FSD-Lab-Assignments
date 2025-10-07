import React from "react";
import "./UserProfile.css";
import { FaCamera, FaEdit, FaHeart, FaComment } from "react-icons/fa";

const UserProfile = () => {
  const user = {
    name: "Meha Patel",
    profilePic: "https://placedog.net/200/200?id=1",
    stats: [
      { label: "Posts", value: 24 },
      { label: "Likes", value: 120 },
      { label: "Followers", value: 300 },
    ],
    activities: [
      { icon: <FaCamera />, text: "Posted a new photo", time: "2 hours ago", type: "post" },
      { icon: <FaEdit />, text: "Updated status", time: "5 hours ago", type: "status" },
      { icon: <FaHeart />, text: "Liked a post", time: "1 day ago", type: "like" },
      { icon: <FaComment />, text: "Commented on a post", time: "2 days ago", type: "comment" },
      { icon: <FaCamera />, text: "Uploaded a new photo", time: "3 days ago", type: "post" },
      { icon: <FaEdit />, text: "Edited profile", time: "1 week ago", type: "edit" },
    ],
  };

  return (
    <div className="user-dashboard">
      {/* Profile Card */}
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>

        {/* Stats */}
        <div className="stats-container">
          {user.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="activities-card">
        <h3>Recent Activities</h3>
        <div className="activity-list">
          {user.activities.map((activity, index) => (
            <div key={index} className={`activity-card ${activity.type}`}>
              <div className="activity-icon">{activity.icon}</div>
              <div className="activity-content">
                <p className="activity-text">{activity.text}</p>
                <p className="activity-time">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
