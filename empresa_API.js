const axios = require('axios').default; 

module.exports.listFunc = () =>{
    return new Promise((resolve, reject) =>{
        axios.get("http://files.cod3r.com.br/curso-js/funcionarios.json")
            .then(function(res){
                let funcionarios = res.data
                resolve({
                    funcionarios: funcionarios
                })
            }).catch(function (err) {
                reject(console.log('err', err));
            });
    })
}
// console.log(module.exports)

module.exports.funcFiltrado = (nome) =>{
    return new Promise((resolve, reject) =>{
        axios.get("http://files.cod3r.com.br/curso-js/funcionarios.json")
            .then(function(res){
                let resFiltrada = res.data.filter(function(value){
                    if (value.nome === nome ) {
                        return true
                    }else{
                        return false
                    }
                })
                resolve({
                    resFiltrada: resFiltrada
                })
                console.log("passei do resolve")
            }).catch(function (err) {
                reject(err);
            });
    })
}