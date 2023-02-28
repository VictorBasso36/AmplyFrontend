import styles from '@/styles/Components/InputsAndButtons/CloseBtn/CloseBtn.module.css'
import { useState, useEffect } from 'react'



function AsyncImage({ src, alt, className, width, height }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image(); // cria uma nova instância de window.Image
    img.src = src; // define o src da imagem
    img.onload = () => setLoaded(true); // define o callback de carregamento da imagem
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      src={loaded ? src : ''}
      alt={alt}
      height={800}
      width={800}
      className={className}
      style={{ display: loaded ? 'flex' : 'none', width: '100%' }}
    />
  );
}

export default AsyncImage;
