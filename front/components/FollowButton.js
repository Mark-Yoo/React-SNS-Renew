import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const FollowButton = ({ post }) => <Button>팔로우</Button>;

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
