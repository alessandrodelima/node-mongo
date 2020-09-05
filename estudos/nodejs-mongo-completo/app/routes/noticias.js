module.exports = function (aplication) {

    aplication.get('/noticias', function (req, res) {

        let connection = aplication.config.dbConnection();
        let noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias : result });
        });
    });
};