// src/core/AccentImage.tsx

import React from 'react';
import styles from './styles.module.css'; // Create this CSS module
import clsx from 'clsx';

interface AccentImageProps {
  position: React.CSSProperties;
  src: string;
}

const AccentImage: React.FC<AccentImageProps> = ({ position, src }) => (
  <img
    className={clsx(styles.accentImage, 'dont-render-small')}
    style={position}
    src={src}
    alt="Accent"
  />
);

export default AccentImage;
