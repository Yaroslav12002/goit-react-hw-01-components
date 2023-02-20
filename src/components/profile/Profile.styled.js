import styled from 'styled-components';

export const UserProfile = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  padding: 20px 0px;

  width: 40%;
  min-width: 270px;
  text-align: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 10px 30px 4px;

  transition: transform 500ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const UserDescription = styled.div``;

export const UserAvatar = styled.img`
  width: 20%;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const UserTag = styled.p`
  color: ${props => props.color};
`;

export const UserLocation = styled.p`
  color: ${props => props.color};
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80px;
  min-height: 60px;
  border: 1px solid gray;
  background-color: ${props => props.bgColor};
`;

export const UserStatsLabel = styled.span`
  color: ${props => props.color};
`;

export const UserStatsQuantity = styled.span`
  font-weight: 700;
`;
