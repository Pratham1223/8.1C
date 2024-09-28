import React from 'react';
import Card from './Card';
import staffList from './staffList';
import './Card.css';

const CardList = () => {
  const firstStaff = staffList.slice(0, 3);
  const secondStaff = staffList.slice(3, 6);

  return (
    <div>
      <div className="section">
        <h1>Featured Articles</h1>
        <div className="row">
          {firstStaff.map((staff) => (
            <Card
              key={staff.key}
              avatar={staff.avatar}
              name={staff.name}
              description={staff.description}
              rating={staff.rating}
              Authorname={staff.Authorname}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="button2">Show All Articles</button>
        </div>
      </div>

      <div className="section">
        <h1>Featured Tutorials</h1>
        <div className="row">
          {secondStaff.map((staff) => (
            <Card
              key={staff.key}
              avatar={staff.avatar}
              name={staff.name}
              description={staff.description}
              rating={staff.rating}
              Authorname={staff.Authorname}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="button2">Show All Tutorials</button>
        </div>
      </div>
    </div>
  );
};

export default CardList;