const md5 = require('md5')
const jwt = require('jsonwebtoken')
const rep = require('../repositories/userRepository')

exports.create = data => {
    data.password = md5(data.password)
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
    data.password = md5(data.password)
    return rep.update(id, data)
}

exports.delete = id => {
    return rep.delete(id)
}

exports.login = params =>{
    return new Promise(async (resolve, reject)=>{
        let {login, password} = params
        password = md5( password )
        const {data: auth} = await rep.login( login, password )
        const _auth = auth[0]
        delete _auth.password
        const token = jwt.sign({login: _auth.login, id: _auth.id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
        resolve({..._auth, token})
    })
}
