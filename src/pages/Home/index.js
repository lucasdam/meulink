import './home.css';
import { FiLink } from 'react-icons/fi';
import { useState } from 'react';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link /* passando no long_url o link que o usuário digita */
      });

      setData(response.data); /* objeto que contém o link encurtado */
      setShowModal(true);

      saveLink('@encurtaLink', response.data); // Chama a função de salvar o link passando uma chave (qualquer nome) e o item que será salvo (o link encurtado, no caso)

      // Dá para visualizar no 'Inspecionar' > 'Application' > 'Local Storage'

      setLink('');

    } catch {
      alert('Ops, parece que algo deu errado!');
      setLink('');
    }

  }

    return (
      <div className="container-home">
        
        <div className="logo">
          <img src="./logo.png" alt="Link Curto Logo"/>
          <h1>Meu Link</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color='#FFF' />
            <input 
              placeholder='Cole seu link aqui...'
              value={link}
              onChange={ (e) => setLink(e.target.value) }
            />
          </div>

          <button onClick={handleShortLink}>Gerar Link</button>
        </div>

        <Menu />

        { showModal && ( /* se for true, renderiza o modal */
          <LinkItem 
            closeModal={ () => setShowModal(false) }
            content={data}
          />
        ) }

      </div>
    )
  }