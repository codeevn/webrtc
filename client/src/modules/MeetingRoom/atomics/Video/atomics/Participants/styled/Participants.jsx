import styled from 'styled-components';

const Participant = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

Participant.Video = styled.video`
  flex-grow: 1;
  height: 100%;
`;

export default Participant;