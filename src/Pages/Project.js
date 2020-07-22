import React, {useEffect, useState} from 'react';
import API from '../Services/API';

const Project = () => {
  const [project, setProject] = useState();
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
        <h1>{project.name}</h1>
          <p>{project.content}</p>
          <p>{project.langage_id}</p>
      </div>
    )
  }


export default Project;
