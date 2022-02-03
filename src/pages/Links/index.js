import { useState, useEffect } from 'react';
import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);


  useEffect(() => { // Quando o array de dependências está vazio, executa o que está dentro da função anônima
    async function getLinks() {
      const result = await getLinksSave('@encurtaLink') // Busca os links salvos

      if (result.length === 0) {
        setEmptyList(true); // A lista está vazia
      }

      setMyLinks(result);

    }

    getLinks();

  }, [])


  function handleOpenLink(Link) {
    setData(Link);
    setShowModal(true);
  }


  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id); // Passa todos os links para a função que deleta. Mas lá na função, será retornado todos os links de volta, exceto o que o id "coindidir"

    if (result.length === 0) {
      setEmptyList(true); // Caso o último link que tá salvo seja apagado e a lista de links também fique vazia
    }

    setMyLinks(result); // Atualiza o setMyLinks que é o que renderiza na os links

  }


  return (
    <div className="links-container">

      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color='#FFF' />
        </Link>
        <h1>Meus Links</h1>
      </div>

      { emptyList && ( // Se emptyList for true
        <div className='links-item'>
          <h2 className='empty-text'>Sua lista está vazia...</h2>
        </div>
      ) }

      {myLinks.map( Link => ( // map para percorrer o array
        <div key={Link.id} className='links-item'>
          <button className='link' onClick={ () => handleOpenLink(Link) }>
            <FiLink size={18} color='#FFF' />
            {Link.long_url}
          </button>

          <button className='link-delete' onClick={ () => handleDelete(Link.id) }>
            <FiTrash size={24} color='#FF5454' />
          </button>
        </div>
      ))}

        { showModal && (
          <LinkItem 
            closeModal={ () => setShowModal(false) }
            content={data}
          />
        ) }

    </div>
  )
}