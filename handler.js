const funcionarios = require('./buscaFunc');
const empresa = require('./empresa_API');


module.exports.main = function(event){
    let path = event.path
    //console.log("Funcionarios ", event)
    
    return new Promise(async (resolve, reject) => {
        try{
            switch(path){
                case "/listar":
                    
                    let func = await empresa.listFunc();					
                    console.log("Cheguei no listar");
                    return resolve({ 
                        statusCode: 200,
                        body: JSON.stringify(func)
                    });
                    
                case "/filtrar":   
                    let nome = event.queryStringParameters.nome
                    let funcFiltrado = await empresa.funcFiltrado(nome);
                    console.log("funcionario filtrado", funcFiltrado)					
                    return resolve({ 
                        statusCode: 200,
                        body: JSON.stringify(funcFiltrado)
                    });
            }
        }catch{
            return reject({
                statusCode: 500,
                body: JSON.stringify("Error")
			});
        }
        });
}