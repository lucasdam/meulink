import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Links from './pages/Links'
import Error from './pages/Error'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/links" element={<Links/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

/* path: caminho da página inicial. element: qual componente quer renderizar quando acessar esse caminho */
/* export default: exportando para outro arquivo de fora conseguir acessar */
/* react-router-dom vai entender que quando o caminho for *, significa que está sendo tratada a página not found */