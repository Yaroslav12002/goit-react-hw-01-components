import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { colors } from 'constants';
import { randomColor } from '../../util/generate-color';
import {
  DataStatistics,
  DataTitle,
  DataStatList,
  DataItem,
  DataStatLabel,
  DataStatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <DataStatistics>
      {title && <DataTitle backgroundColor={colors.grey}>{title}</DataTitle>}
      <DataStatList>
        {stats.map((stat, index, stats) => {
          return (
            <DataItem
              key={stat.id}
              backgroundColor={randomColor}
              columns={stats.length}
            >
              <DataStatLabel color={colors.white}>{stat.label}</DataStatLabel>
              <DataStatPercentage color={colors.white}>
                {stat.percentage}%
              </DataStatPercentage>
            </DataItem>
          );
        })}
      </DataStatList>
    </DataStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: arrayOf(PropTypes.object.isRequired),
};
