import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={"Name: " + robots[i].name}
              gender={"Gender: " + robots[i].Gender}
              allergy={"Allergy: " + robots[i].Allergy}
              condition={"Condition: " + robots[i].Condition}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;