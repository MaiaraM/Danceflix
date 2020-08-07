import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import TemplateDefault from '../../components/TemplateDefault';
import categoryAPI from '../../services/categoryAPI';

const HomePage = () => {
  const [initialDate, setInitialDate] = useState([]);

  useEffect(() => {
    categoryAPI.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setInitialDate(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <TemplateDefault paddingAll={0}>

      {initialDate.length > 0
      && initialDate.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialDate[0].videos[0].titulo}
                url={initialDate[0].videos[0].url}
                videoDescription={initialDate[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialDate[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </TemplateDefault>
  );
};

export default HomePage;
