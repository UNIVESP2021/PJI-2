/* eslint-disable no-unused-vars */
import axios from 'axios';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { PiContext } from '../../context/PiContext';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

export default function DetailsPage() {
  const { id } = useParams();
  const { documents } = useContext(PiContext);
  const [fileDetails, setFileDetails] = useState(null);

  //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
  const arquivo = {
    id: 10,
    title: 'Controlador Lógico Programável PLC300 V1.20',
    description:
      'O PLC300 está disponível em seis modelos diferentes. Com ou sem HMI; standard ou plus e uma versão com HMI, porém sem membrana, em que o usuário poderá personalizar a aparência do PLC, seguindo especificações presentes no CD do produto. A identificação do PLC300 é feita por um sufixo de duas ou três letras.',
    url: 'idi',
  }; //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API

  useEffect(() => {
    const fileId = id;

    //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
    console.log('Esse é o parametro' + fileId);
    setFileDetails(arquivo);
    console.log(arquivo); //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
    /*
    axios
      .get(`http://localhost:8080/manual/${fileId}`) // SUBSTITUIR 'API_ENDPOINT' pela URL da API
      .then((response) => {
        setFileDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });*/
  }, [id]);

  const handleOnClick = () => {
    window.location.href = fileDetails.url;
  };

  if (!fileDetails) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="details">
      <h1>{fileDetails.title}</h1>
      <p>{fileDetails.description}</p>
      <Button
        onClick={handleOnClick}
        variant="contained"
        style={{
          backgroundColor: '#5D9817',
          width: '100px',
          alignSelf: 'center',
        }}
        size="large"
      >
        Manual
      </Button>
    </div>
  );
}
