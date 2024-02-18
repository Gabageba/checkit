import type { FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';
import type { FontWeight } from '@ui/types';
import { FONT_WEIGHT } from '@ui/types';
import styles from './styles.module.scss';
import type { TextLevel, TextDecoration, TextStyle, TextType } from './types';
import { TEXT_DECORATION, TEXT_STYLE, TEXT_TYPE } from './types';

interface TextProps {
  type?: TextType;
  level?: TextLevel;
  className?: string;
  style?: TextStyle;
  weight?: FontWeight;
  isItalic?: boolean;
  decoration?: TextDecoration;
  onClick?: () => void;
  // ellipsis?: boolean | IsEllipsis;
}

const Text: FC<PropsWithChildren<TextProps>> = ({
  type = TEXT_TYPE.TEXT,
  className,
  level = 1,
  style = TEXT_STYLE.DEFAULT,
  weight = FONT_WEIGHT.REGULAR,
  isItalic = false,
  decoration = TEXT_DECORATION.DEFAULT,
  onClick,
  // ellipsis = false,
  children,
}) => {
  const classNames = cn(
    className,
    style !== TEXT_STYLE.DEFAULT && styles[style],
    styles[weight],
    isItalic && 'italic',
    decoration !== TEXT_DECORATION.DEFAULT && styles[decoration],
  );

  const generateTitleByLevel = (
    currentClassName: string,
    clickHandler?: () => void,
  ): ReactNode => {
    switch (level) {
      case 2:
        return (
          <h2 className={currentClassName} onClick={clickHandler}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={currentClassName} onClick={clickHandler}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={currentClassName} onClick={clickHandler}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={currentClassName} onClick={clickHandler}>
            {children}
          </h5>
        );
      case 1:
      default:
        return (
          <h1 className={currentClassName} onClick={clickHandler}>
            {children}
          </h1>
        );
    }
  };

  const generateTextByType = (
    currentClassName: string,
    clickHandler?: () => void,
  ): ReactNode => {
    switch (type) {
      case TEXT_TYPE.PARAGRAPH:
        return (
          <p className={currentClassName} onClick={clickHandler}>
            {children}
          </p>
        );
      case TEXT_TYPE.TITLE: {
        return generateTitleByLevel(currentClassName, clickHandler);
      }
      case TEXT_TYPE.TEXT:
      default:
        return (
          <span className={currentClassName} onClick={clickHandler}>
            {children}
          </span>
        );
    }
  };

  return <>{generateTextByType(classNames, onClick)}</>;
};

export default Text;
