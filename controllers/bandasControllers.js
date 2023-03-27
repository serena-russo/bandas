const { lista } = require('../db/index')
let db = require ('../db/index')

bandasController = {
    index: function (req,res){
        
        return res.render ('listadoBandas' , {
            lista : db.lista
        })
    },

    showId: function(req,res){
        let id = req.params.id 
        let datos = []
        for (let i = 0; i < db.lista.length; i++) {
            if (db.lista[i].id == id) {
                datos.push(db.lista[i])
            }
        }
        return res.render('detalleBanda',{
            detalle : datos
        })
    },

    genre: function (req,res){
        let genero = req.params.genero 
        let datos = []
        for (let i = 0; i < db.lista.length; i++) {
            if (db.lista[i].genero == genero) {
                datos.push(db.lista[i])
            }
        }
        return res.render('porGenero',{
            genero : datos
        })
    }
}

module.exports = bandasController;