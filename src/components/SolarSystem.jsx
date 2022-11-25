import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((element) => {
          const { name, image } = element;
          return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
