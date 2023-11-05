import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MemberCard.css';

export default function MemberCard({ memberInfo }) {
  return (
    <Card sx={{ width: 260, height: 460 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={memberInfo.photo}
          alt="photo member"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className="name">
            {memberInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {memberInfo.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
