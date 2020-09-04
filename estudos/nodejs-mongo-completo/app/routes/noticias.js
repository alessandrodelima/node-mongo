module.exports = function (aplication) {

    aplication.get('/noticias', function (req, res) {

        let connection = aplication.config.dbConnection();
        let noticiasModel = aplication.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error, result) {
            res.render('noticias/noticias', { noticias : result });
        });
    });
};