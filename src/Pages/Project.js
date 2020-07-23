import React, {useEffect, useState} from 'react';
import API from '../Services/API';
import '../Styles/Project.css';

const Project = () => {
  const [project, setProject] = useState([]);
  const id = 1;
  useEffect(() => {
    API.get(`/projects/${id}`).then((res) => {
      setProject(res.data.data);
      console.log(res.data.data);
    });
  }, []); //eslint-disable-line
  if (!project) {
    return <p>chargement ....</p>;
  }
    return (
      <div>
        <p>id URL en dur, a changer</p>
        <h1>{project.name}</h1>
        <div className='projet-img'>Futur gallery d'image</div>
          <p>{project.content}</p>
          <p>{project.created_at}</p>
          <p>{project.link}</p>
          <p>{project.language_id}</p>
          <p>{project.persons}</p>
          <p>{project.enterprise_id}</p>
      </div>
    )
  }


export default Project;
