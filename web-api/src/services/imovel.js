const rep = require('../repositories/imovelRepository')

exports.create = data => {
    
    return rep.create(data)
}

exports.read = (id) => {
    if( id ){
        return rep.read(id)
    }else{
        return rep.read()
    }
}

exports.update = (id, data) => {

    return rep.update(id, data)
}

exports.delete = id => {
    return rep.delete(id)
}
