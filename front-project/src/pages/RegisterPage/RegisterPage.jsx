import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import axios from 'axios';
import { PiContext } from '../../context/PiContext';
export default function RegisterPage() {
    const {setTitles} = useContext(PiContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null); // Adicione esta linha

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleUploadClick = () => {
        if (!title || !description || !url) {
            console.error('Por favor, preencha todos os campos');
            return;
        }
        const data = {
            title: title,
            description: description,
            url: url
        };

        axios
            .post('http://localhost:8080/doc', data)
            .then((response) => {
                console.log(response.data);
                setTitle('');
                setDescription('');
                setUrl('');
            })
            .catch((error) => {
                console.error(error);
            });

        updateTitles();
    };



    const updateTitles = () => {
        axios
            .get('http://localhost:8080/doc')
            .then((response) => {
                setTitles(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="register-page">
            <h1>Cadastro de Manual</h1>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={handleTitleChange}
            />
            <textarea
                placeholder="Descrição"
                value={description}
                onChange={handleDescriptionChange}
            />
            <input
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
        </div>
    );
}
