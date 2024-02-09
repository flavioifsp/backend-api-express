export const PORT = 3000 //colocar export na frente para identificar que sera exportada
export const HOST = "http://localhost"

export default {ola: "teste", PORT, HOST} 



// outro modo de exportar, este modo permite exportar apenas um export default por arquivo

//const teste = 'legal"
// export default teste 

//se for colocaldo um objeto sem ser dado um nome 
//como por exemplo 
//export default {ola: "teste", PORT, HOST}

// ao importar não será necessario colocar um nome pode ser importado assim 
//import "nomde aleatorio" from './config.js' dar um nome aleatorio dentro da aspas


