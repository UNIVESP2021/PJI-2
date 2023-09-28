import Typography from '@mui/material/Typography';
import './EachInformationProject.css';

export default function EachInformationProject({ projectInfo }) {
  return (
    <div className="each-information">
      <Typography gutterBottom variant="h5" component="div">
        {projectInfo.info}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {projectInfo.description}
      </Typography>
    </div>
  );
}
