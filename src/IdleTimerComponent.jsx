import { useIdleTimer } from 'react-idle-timer';

const IdleTimerComponent = ({ onIdle }) => {
  useIdleTimer({
    timeout: 5000, // 5 seconds in milliseconds
    onIdle: onIdle,
  });

  return null;
};

export default IdleTimerComponent;
