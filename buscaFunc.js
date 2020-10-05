const empresa = require('./empresa_API');

module.exports.listarFuncionario = () => {
    return empresa.listFunc();
}

// async function funcionarioFiltrado(nome) {
//     let b = await empresa.funcFiltrado(nome);
//     // console.log('funcionario: ', b)
//     return b
// //         .then((res) =>{
// //         console.log(res);
// // })
// }

// listarFuncionario().then((res) =>{
//     console.log(res);
// });
// let nome = "Erick"
// funcionarioFiltrado(nome).then((res) =>{
//     console.log(res);
// });