import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({ closeModal, content }) { /* recebe esses argumentos da chamada da Home */

    async function copyLink() {
        await navigator.clipboard.writeText(content.link) /* para copiar um texto (deixar no ctrl+c) */
        alert('URL copiada com sucesso!');
    }

    return (
        <div className='modal-container'>
            
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}> {/* chama o closeModal da Home */}
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                {content.long_url} {/* long_url e link são propriedades do objeto data, que vem da API */}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color='#FFF' />
            </button>

        </div>
    )
}