
import clickSound from '../assets/son/click.mp3';

const Clicked = (volume = 0.2) => {
  const audio = new Audio(clickSound);
  audio.volume = volume;
  audio.play().catch(() => {});
};

export default Clicked ;