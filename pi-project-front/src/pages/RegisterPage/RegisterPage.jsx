/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { PiContext } from '../../context/PiContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

export default function RegisterPage() {
  const { setDocuments } = useContext(PiContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [formError, setFormError] = useState('');

  const { insertDocument, response } = useInsertDocument('manuals');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    setFormError('');

    if (!title || !description || !url) {
      setFormError('Favor preencher todos os campos');
    }
    if (formError) return;

    insertDocument({
      title,
      description,
      url,
    });

    navigate('/');
  };

  return (
    <div className="register-page">
      <h1>Cadastro de Manual</h1>
      <input
        name="title"
        type="text"
        placeholder="Título"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Descrição"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        name="url"
        type="text"
        placeholder="Insira aqui a URL do manual"
        value={url}
        onChange={handleUrlChange}
      />
      <div>
        <Button
          onClick={handleUploadClick}
          variant="contained"
          style={{
            backgroundColor: '#5D9817',
            width: '100px',
            alignSelf: 'center',
          }}
          size="large"
        >
          Envio
        </Button>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          style={{
            backgroundColor: '#5e0a0a',
            width: '100px',
            alignSelf: 'center',
          }}
          size="large"
        >
          Voltar
        </Button>
      </div>
      {response.error && <p className="error">{response.error}</p>}
    </div>
  );
}
