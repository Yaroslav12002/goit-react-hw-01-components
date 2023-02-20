import styled from 'styled-components';

export const DataStatistics = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  min-width: 240px;
  padding: 30px 0px;
  transition: transform 500ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const DataTitle = styled.h2`
  text-align: center;
  color: ${props => props.color};
`;

export const DataStatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const DataItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: calc(100% / ${props => props.columns});
  min-height: 60px;
  background-color: ${props => props.backgroundColor};
`;

export const DataStatLabel = styled.span`
  color: ${props => props.color};
  text-shadow: 0px 0px 1px black;
`;

export const DataStatPercentage = styled.span`
  font-size: 22px;
  color: ${props => props.color};
  text-shadow: 0px 0px 1px black;
`;
