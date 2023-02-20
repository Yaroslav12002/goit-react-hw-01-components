import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'constants';
import {
  TransatctionTable,
  TransatctionTableHead,
  TransatctionTableRow,
  TransatctionTableHeadColumn,
  TransatctionTableBody,
  TransatctionTableColumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransatctionTable>
      <TransatctionTableHead>
        <TransatctionTableRow>
          <TransatctionTableHeadColumn>Type</TransatctionTableHeadColumn>
          <TransatctionTableHeadColumn>Amount</TransatctionTableHeadColumn>
          <TransatctionTableHeadColumn>Currency</TransatctionTableHeadColumn>
        </TransatctionTableRow>
      </TransatctionTableHead>

      <TransatctionTableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransatctionTableRow
              key={id}
              accentColor={colors.bgGrey}
              hoverColor={colors.grey}
              textColor={colors.white}
            >
              <TransatctionTableColumn>{type}</TransatctionTableColumn>
              <TransatctionTableColumn>{amount}</TransatctionTableColumn>
              <TransatctionTableColumn>{currency}</TransatctionTableColumn>
            </TransatctionTableRow>
          );
        })}
      </TransatctionTableBody>
    </TransatctionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
