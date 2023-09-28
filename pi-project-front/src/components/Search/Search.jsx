import { useContext } from 'react';
import { PiContext } from '../../context/PiContext';
import Button from '@mui/material/Button';
import './Search.css';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const { titles, selectedTitle, setSelectedTitle } = useContext(PiContext);

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
    console.log(selectedTitle);
  };

  const handleSearchClick = () => {
    navigate(`/details/${selectedTitle}`);
  };

  return (
    <div className="search">
      <h1>Selecione um Manual</h1>
      <select value={selectedTitle} onChange={handleTitleChange}>
        <option value="">Selecione...</option>
        {titles.map((title) => (
          <option key={title.id} value={title.id}>
            {title.title}
          </option>
        ))}
      </select>
      <Button
        onClick={handleSearchClick}
        variant="contained"
        style={{
          backgroundColor: '#5D9817',
          width: '300px',
          alignSelf: 'center',
        }}
        size="large"
      >
        Pesquisar
      </Button>
    </div>
  );
}
