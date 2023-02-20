import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'constants';
import {
  Friends,
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }, index, friends) => {
        return (
          <FriendItem
            key={id}
            backgroundColor={colors.bgGrey}
            thisChild={index + 1}
            lastChild={friends.length}
          >
            <FriendStatus isOnline={isOnline} />
            <FriendAvatar src={avatar} alt="User avatar" />
            <FriendName>{name}</FriendName>
          </FriendItem>
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
