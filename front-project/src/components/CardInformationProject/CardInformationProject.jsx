import { useContext } from 'react';
import { PiContext } from '../../context/PiContext';
import EachInformationProject from '../EachInformationProject/EachInformationProject';
import './CardInformationProject.css';

export default function CardInformationProject() {
  const { infoProject } = useContext(PiContext);

  return (
    <div className="card-information">
      {infoProject &&
        infoProject.map((info, i) => (
          <EachInformationProject key={i} projectInfo={info} />
        ))}
    </div>
  );
}
