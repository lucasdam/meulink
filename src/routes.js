import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Links from './pages/Links'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/links" element={<Links/>} />
            </Routes>
        </BrowserRouter>
    )
}

/* path: caminho da página inicial. element: qual componente quer renderizar quando acessar esse caminho */
/* export default: exportando para outro arquivo de fora conseguir acessar */

export default RoutesApp;