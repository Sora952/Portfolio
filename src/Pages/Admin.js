import React, {useState} from 'react';
import '../Styles/Admin.css';
import API from '../Services/API';

export default function BasicTextFields() {
  const [inputs, setInputs] = useState({ name: '', persons: '', created_at: '', link: '', content: '', language_id: '', enterprise_id: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, persons, created_at, link, content, language_id, enterprise_id } = inputs;
    API.post('/post_project', {
      name,
      persons,
      content,
      link,
      created_at,
      language_id,
      enterprise_id
    });
    console.log(inputs);
  };

  return (
    <div className='send-form-project'>
      <div className='form-project'>
      <h2>Envoyer mon projet</h2>
      <form id='post-project-form' onSubmit={handleSubmit}>
        <div className='project-id'>
          <div className='project-name'>
            <label>Nom du projet : </label>
            <input className='two-columns' type='text' name='name' value={inputs.name} onChange={handleChange} placeholder='Nom du projet' />
          </div>
          </div>
        <div className='form-date'>
          <label>Creer le : </label>
          <input type='text' name='created' value={inputs.created_at} onChange={handleChange} placeholder='date de création' />
        </div>
        <div className='project-persons'>
            <label>Lien : </label>
            <input className='two-columns' type='text' name='link' value={inputs.link} onChange={handleChange} placeholder='Lien du projet' />
          </div>
        <div className='project-post-content'>
          <label>Contenu : </label>
          <textarea name='content' value={inputs.content} onChange={handleChange} placeholder='Détaille du contenu' />
        </div>
        <div className='project-persons'>
          <div className='truc'>
            <label>Peronnes : </label>
            <input className='two-columns' type='number' name='persons' value={inputs.persons} onChange={handleChange} placeholder='Nombre de personnes' />
          </div>
            <label>Langage id : </label>
            <input className='two-columns' type='number' name='language_id' value={inputs.language_id} onChange={handleChange} placeholder='numéro du langage' />
            <label>Entreprise id : </label>
            <input className='two-columns' type='number' name='enterprise_id' value={inputs.enterprise_id} onChange={handleChange} placeholder="numéro de l\'entreprise" />
            </div>
            <button type='submit' className='btn-search'>Envoyer</button>
      </form>
    </div>
    </div>
  );
};