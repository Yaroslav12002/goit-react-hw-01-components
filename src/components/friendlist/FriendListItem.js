import {
  FriendStatus,
  FriendAvatar,
  FriendName,
  FriendItem,
} from './FriendList.styled';

export const FriendListItem = ({ backgroundColor, isOnline, avatar, name }) => {
  return (
    <FriendItem backgroundColor={backgroundColor}>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
