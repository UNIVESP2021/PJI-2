import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  function home() {
    navigate('/');
  }

  return (
    <div className="not-found">
      <Typography gutterBottom variant="h1" component="div">
        Erro 404
      </Typography>
      <Typography variant="h4" component="div" color="text.secondary">
        Oops! Parece que a página que você está tentando acessar não existe.
      </Typography>
      <Typography variant="h5" component="div" color="text.secondary">
        Você pode voltar para:
      </Typography>
      <Button
        onClick={home}
        variant="contained"
        style={{
          backgroundColor: '#AB1C1B',
          width: '300px',
          alignSelf: 'center',
        }}
        size="large"
      >
        Home
      </Button>
    </div>
  );
}
