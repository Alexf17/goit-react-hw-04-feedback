import PropTypes from 'prop-types';

import { NotificationMessage } from './Notification.styled.js';

export const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};