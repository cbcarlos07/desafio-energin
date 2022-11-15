const service = require('./../services/user')

exports.create = (req, res) => {
    return service.create(req.body)
                  .then(() => {
                    res.json({msg: 'Salvo com sucesso'})
                  })
}

exports.read = (req, res) => {
    const {id} = req.params
    if( id ){
        return service.read(id)
                      .then(response => res.json(response.data))
    }else{
        return service.read()
                      .then(response => res.json(response.data))
    }
}

exports.update = (req, res) => {
    const {id} = req.params

    return service.update(id, req.body)
                   .then(() => res.json({msg: 'Atualizado com sucesso'}))
}

exports.delete = (req, res) => {
    const {id} = req.params
    return service.delete(id)
                  .then(() => {
                    res.json({msg: 'Removido com sucesso'})
                  })
}

exports.auth = (req, res) =>{
  return service.login(req.body)
                .then(response =>{
                  res.json(response)
                })
}
