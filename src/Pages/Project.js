import React, {useEffect, useState} from 'react';
import API from '../Services/API';

const Project = () => {
  const [project, setProject] = useState();
  const id = 1;
  useEffect(() => {
    API.get(`/recipes/${id}`).then((res) => {
      setProject(res.data.data);
      console.log(res.data.data);
    });
  }, []); //eslint-disable-line
  if (!project) {
    return <p>chargement ....</p>;
  }
    return (
      <div>
        <p>Bvn</p>
      </div>
    )
  }


export default Project;
