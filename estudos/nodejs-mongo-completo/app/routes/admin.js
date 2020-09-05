const { application } = require("express");

module.exports = (aplication) => {
    aplication.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    aplication.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;
        //conexao
        let connection = aplication.config.dbConnection();
        let noticiasModel = new aplication.app.models.NoticiasDAO(connection);
        
        //model 
        noticiasModel.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
}