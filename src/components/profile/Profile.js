import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'constants';
import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserItem,
  UserStatsLabel,
  UserStatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag color={colors.grey}>@{tag}</UserTag>
        <UserLocation color={colors.grey}>{location}</UserLocation>
      </UserDescription>
      <UserStats>
        <UserItem bgColor={colors.bgGrey}>
          <UserStatsLabel color={colors.grey}>Followers</UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserItem>
        <UserItem bgColor={colors.bgGrey}>
          <UserStatsLabel color={colors.grey}>Views</UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserItem>
        <UserItem bgColor={colors.bgGrey}>
          <UserStatsLabel color={colors.grey}>Likes</UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserItem>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
