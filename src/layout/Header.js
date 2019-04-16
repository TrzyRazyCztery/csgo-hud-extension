import React from 'react';
import Authenticated from '../shared/Authenticated';
import Unauthenticated from '../shared/Unauthenticated';
import UserBadge from '../common/UserBadge';
import LoginButton from './../common/LoginButton';

const Header = () => (
  <div className="header">
    <Authenticated>
      <UserBadge />
    </Authenticated>
    <Unauthenticated>
      <LoginButton />
    </Unauthenticated>
  </div>
);

export default Header;
