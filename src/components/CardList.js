import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
  const robotsArray = robots.map((robot, i) => {
    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  })
  return (
    <>
      {robotsArray}
    </>
  );
};

export default CardList