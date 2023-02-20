import styled from 'styled-components';

export const Friends = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 30px 0px;
  width: 30%;
  min-width: 200px;
  list-style: none;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  min-height: 100px;
  margin-bottom: ${props =>
    props.thisChild === props.lastChild ? '0px' : '15px'};
  padding: 0px 20px;
  background-color: ${props => props.backgroundColor};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 10px 30px 4px;
  transition: transform 500ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
  width: 48px;
`;

export const FriendName = styled.p`
  font-size: 32px;
`;
