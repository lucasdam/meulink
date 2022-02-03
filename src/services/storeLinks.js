// Buscar os links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []; // Converte os links encontradaos em JSON para array

    return linksSaves;

}


// Salvar um link no localStorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key); // Salva dentro de linksStored os links encontrados

    // Se já tiver um link salvo com algum ID, não é para deixar replicar
    const hasLink = linksStored.some( link => link.id === newLink.id ) // Verifica se o id do link que está salvo em linksStored é igual ao id vindo de newLink (que está sendo recebido nessa função)

    if (hasLink) {
        console.log('Esse link já tá na lista');
        return;
    }

    linksStored.push(newLink); // Adiciona o novo link na lista

    await localStorage.setItem(key, JSON.stringify(linksStored)) // setItem irá armazenar no localStorage. JSON.stringify para transformar o array linksStored em string (pra conseguir adicionar no locaStorage)
    console.log('Link salvo com sucesso');

}


// Deletar algum link salvo
export function deleteLink(links, id) {
    let myLinks = links.filter( item => { // Percorre os links e retorna tudo menos o link de id igual ao que essa função está recebendo
        return (item.id !== id);
    } )

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks)) // Atualiza o localStorage
    console.log('link deletado com sucesso');

    return myLinks;

}