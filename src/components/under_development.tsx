'use client'
import { Player, } from '@lottiefiles/react-lottie-player';

export default function UnderConstruction() {
  return (
    <Player
      autoplay
      loop
      src="/assets/anim/development.json"
      style={{ height: '500px', width: '500px' }}
    >
    </Player>
  );
}