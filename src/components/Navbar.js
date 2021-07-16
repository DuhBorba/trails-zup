import userImg from '../assets/images/user.svg';
import { useSubscription } from '../context/subscriptions';

import '../styles/navbar.scss';

export function Navbar() {

  const { subscriptions } = useSubscription();

  return (
    <header>
      <nav id="navbar">
        <ul>
          <li>Inscrições: {subscriptions}</li>
          <li><img src={userImg} alt="User" /></li>
        </ul>
      </nav>
    </header>
  )
}