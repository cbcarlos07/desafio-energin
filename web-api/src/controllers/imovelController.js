const service = require('./../services/imovel')
const fs = require('fs')
const shortId = require('shortid')
const path = require('path')

exports.create = (req, res) => {

    const { picture } = req.body
    let buff = Buffer.from( picture, 'base64' )
    const nameStored = `${shortId.generate()}.png`
    fs.writeFileSync( path.resolve('public', nameStored), buff )
    const data = {...req.body, pic_store: nameStored, picture: req.body.namePic} 
    delete data.namePic   
    return service.create(data)
                  .then(response => {
                    res.json({msg: 'Salvo com sucesso'})
                  })
}

exports.read = (req, res) => {
    const {id} = req.params
    if( id ){
        return service.read(id)
                      .then(response => {
                        const resp = response.data
                        const img = path.resolve('public', resp.pic_store)
                        var imageAsBase64 = fs.readFileSync(img, 'base64');  
                        
                        const obj = {...resp, picture: imageAsBase64, namePic: resp.picture}
                        res.json(obj)
                      })
    }else{
        return service.read()
                      .then(response => res.json(response.data))
    }
}

exports.update = (req, res) => {
    const {id} = req.params

    const { picture } = req.body
    let buff = Buffer.from( picture, 'base64' )
    const nameStored = `${shortId.generate()}.png`
    fs.writeFileSync( path.resolve('public', nameStored), buff )
    const data = {...req.body, pic_store: nameStored, picture: req.body.namePic} 
    delete data.namePic   

    return service.update(id, data)
                   .then(response => res.json({msg: 'Atualizado com sucesso'}))
}

exports.delete = (req, res) => {
    const {id} = req.params
    return service.delete(id)
                  .then(response => {
                    res.json({msg: 'Removido com sucesso'})
                })
}