/* eslint-disable no-unused-vars */
import axios from 'axios';
import Search from '../../components/Search/Search';
import { useContext, useEffect } from 'react';
import { PiContext } from '../../context/PiContext';
import './HomePage.css';
//import { useFetchDocuments } from '../../hooks/useFetchDocuments';

export default function HomePage() {
  const { setTitles } = useContext(PiContext);

  //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
  const top10Films = [
    {
      id: 1,
      title: 'Controlador Programável',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      url: 1994,
    },
    {
      id: 2,
      title: 'Servo drive Siemens 1fk2206',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      url: 1972,
    },
    {
      id: 3,
      title: 'Controlador Programável II',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      url: 1974,
    },
    {
      id: 4,
      title: 'Controlador Lógico Programável PLC300 V1.20',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      url: 2008,
    },
    {
      id: 5,
      title: 'Controlador Programável IV',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      url: 1957,
    },
  ]; //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API

  useEffect(() => {
    //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
    //setDocuments(top10Films);
    setTitles(top10Films);
    //console.log(documents); //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API

    /* 
    axios.get('API_ENDPOINT') // SUBSTITUIR 'API_ENDPOINT' pela URL da API
      .then(response => {
        setTitles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    */
  }, []);

  return (
    <div className="home-page">
      <Search />
    </div>
  );
}
