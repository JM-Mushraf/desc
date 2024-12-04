import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './ProfileCards.css';

const profiles = [
  {
    id: 1,
    name: "John Doe",
    description: "A passionate agricultural specialist with over 15 years of experience in pumpkin farming.",
    image: "../../../../public/card1.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Leading researcher in crop genetics, committed to improving crop yield and resilience through innovative solutions.",
    image: "../../../../public/card2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammad Ali",
    description: "Dedicated farmer who has successfully implemented organic farming techniques across 200 acres of land.",
    image: "../../../../public/card3.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Emily Chen",
    description: "Agricultural economist specializing in sustainable farming practices and market analysis.",
    image: "../../../../public/card1.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Emily Chen",
    description: "Agricultural economist specializing in sustainable farming practices and market analysis.",
    image: "../../../../public/card2.jpg",
    rating: 5
  }
];

function ProfileCards() {
  const [likedProfiles, setLikedProfiles] = useState([]);

  const toggleLike = (id) => {
    setLikedProfiles(prev =>
      prev.includes(id) ? prev.filter(profileId => profileId !== id) : [...prev, id]
    );
  };

  return (
    <div className="profile-card-scroll">
      <div className="scroll-hint">
        <MdKeyboardArrowRight className="scroll-arrow" />
      </div>
      <div className="profile-card-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img 
              src={profile.image} 
              alt={`${profile.name}'s profile`} 
              className="profile-image"
            />
            <div className="profile-content">
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-description">{profile.description}</p>
            </div>
            <div className="profile-footer">
              <div className="profile-rating">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`rating-dot ${i < profile.rating ? 'active' : ''}`}
                  />
                ))}
              </div>
              <button
                onClick={() => toggleLike(profile.id)}
                className={`like-button ${likedProfiles.includes(profile.id) ? 'liked' : ''}`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;
