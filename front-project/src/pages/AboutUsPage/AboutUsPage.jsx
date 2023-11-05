import { useContext, useEffect } from 'react';
import MemberCard from '../../components/MemberCard/MemberCard';
import { PiContext } from '../../context/PiContext';
import Typography from '@mui/material/Typography';
import { membersInfo } from '../../assets/info/members/members';
import './AboutUsPage.css';
import CardInformationProject from '../../components/CardInformationProject/CardInformationProject';
import { projectInfo } from '../../assets/info/project/project';

export default function AboutUsPage() {
  const { members, setMembers, setInfoProject } = useContext(PiContext);

  useEffect(() => {
    setMembers(membersInfo);
    setInfoProject(projectInfo);
  }, []);

  return (
    <div className="about-us-page">
      <div className="project">
        <CardInformationProject />
      </div>
      <div className="group">
        <Typography gutterBottom variant="h4" component="div">
          Você está em boa companhia
        </Typography>
        <div className="members">
          {members &&
            members.map((member, i) => (
              <MemberCard key={i} memberInfo={member} />
            ))}
        </div>
      </div>
    </div>
  );
}
