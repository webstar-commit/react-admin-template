'use strict';

import React, { PropTypes } from 'react';

const UserPanel = (props) => {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <img
          src={require('../../../../vendors/img/26115.jpg')}
          className="img-circle"
          alt="User Image"
        />
      </div>
      <div className="pull-left info">
        <p>
          { `${props.hello} ${props.username}` }
        </p>
        <a href="#">

          { props.online &&
            <i className="fa fa-circle text-success"></i>
          }
          { props.online &&
            props.connectionStatus.online
          }

          {
            !props.online &&
            <i className="fa fa-circle text-default"></i>
          }
          { !props.online &&
            props.connectionStatus.disconnected
          }
        </a>
      </div>
    </div>
  );
};

UserPanel.propTypes = {
  hello: PropTypes.string,
  username: PropTypes.string,
  connectionStatus: PropTypes.shape({
    online: PropTypes.string,
    disconnected: PropTypes.string
  }),
  online: PropTypes.bool
};

UserPanel.defaultProps = {
  hello: 'Hello',
  username: 'Jane',
  connectionStatus: {
    online: 'Online',
    disconnected: 'Disconnected'
  },
  online: false
};

export default UserPanel;
