import React  from 'react';
import { EventsContainer } from 'features/events/styles';
import { Events } from 'features/events';

export const HomePage = () => {
  return (
    <EventsContainer>
      <Events />
    </EventsContainer>
  );
};
