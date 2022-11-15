const service = require('./../services/buySell')
const userService = require('../services/user')
exports.create = (req, res) => {
    return service.create(req.body)
                  .then(response => {
                    res.json({msg: 'Salvo com sucesso'})
                  })
                  
}

exports.readById = (req, res) => {
  const {id} = req.params
  return service.readById(id)
                .then(async response => {
                  const items = response.data.map(async i => {
                    const {data: user} = await userService.read(i.usuario)
                    return {...i, nameUser: user.name}
                  })
                  const dados = await Promise.all(items)
                  res.json(dados)
                })
                
}

