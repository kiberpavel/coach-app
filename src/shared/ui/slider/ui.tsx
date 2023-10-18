import AppIntroSlider from 'react-native-app-intro-slider';

import { SliderItem, Slide } from './slider-item';
import { styles } from './styles';

type SliderProps = {
  slides: Slide[];
};

export function Slider(props: SliderProps) {
  const { slides } = props;

  return (
    <AppIntroSlider
      renderItem={SliderItem}
      data={slides}
      showNextButton={false}
      showDoneButton={false}
      dotStyle={styles.dots}
    />
  );
}
