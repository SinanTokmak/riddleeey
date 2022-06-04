import React from 'react';

import { Container, Title, TodaysRiddle } from './styles';

interface RiddleProps {
  riddle: string;
  isRiddleFetched: boolean;
}

function Riddle({ riddle, isRiddleFetched }: RiddleProps) {
  const fetchedRiddleMessage = 'Today’s riddle';
  const waitingFetchMessage = 'Fetching riddle from database.';
  return (
    <Container>
      <Title>
        {isRiddleFetched ? fetchedRiddleMessage : waitingFetchMessage}
      </Title>
      <TodaysRiddle>
        &quot;
        {riddle}
        &quot;
      </TodaysRiddle>
    </Container>
  );
}

export default Riddle;
