// src/core/AccentImage.tsx

import React from 'react';
import styles from './styles.module.css'; // Create this CSS module

interface AccentImageProps {
  position: React.CSSProperties;
  src: string;
}

const AccentImage: React.FC<AccentImageProps> = ({ position, src }) => {
  return (
    <img
      className={styles.accentImage}
      style={position}
      src={src}
      alt="Accent"
    />
  );
};

export default AccentImage;
