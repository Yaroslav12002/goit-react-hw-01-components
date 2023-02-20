import styled from 'styled-components';

export const TransatctionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  width: 80%;
  min-width: 350px;
  border-collapse: collapse;
`;

export const TransatctionTableHead = styled.thead`
  background-color: #00bcd5;
`;

export const TransatctionTableRow = styled.tr`
  height: 35px;

  &:nth-child(even) {
    background-color: ${props => props.accentColor};
  }

  &:hover {
    background-color: ${props => props.hoverColor};
    color: ${props => props.textColor};
  }
`;

export const TransatctionTableHeadColumn = styled.th`
  border: 1px solid #ddd;
`;

export const TransatctionTableBody = styled.tbody``;

export const TransatctionTableColumn = styled.td`
  text-align: center;
  border: 1px solid #ddd;
  &::first-letter {
    text-transform: uppercase;
  }
`;
