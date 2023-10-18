import { Button, ButtonProps } from 'shared/ui/theme';
import { styles } from './styles';

type PrimaryButtonProps = ButtonProps & {
  textColor?: string;
  backgroundColor?: string;
};

export function PrimaryButton(props: PrimaryButtonProps) {
  const { textColor, backgroundColor, buttonStyle } = props;

  return (
    <Button
      lightTextColor={textColor}
      darkTextColor={textColor}
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      titleStyle={styles.buttonText}
      buttonStyle={[styles.button, buttonStyle]}
      containerStyle={styles.buttonContainer}
      radius={4}
      {...props}
    />
  );
}
