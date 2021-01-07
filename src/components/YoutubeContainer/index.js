import React from 'react';
import styles from './index.module.scss';

const YoutubeContainer = ({ src }) => {
  return (
    <div className={styles.responsiveVideoContainer}>
      <iframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeContainer;
