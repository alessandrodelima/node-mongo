const app = require('./config/server');
/*
let rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);
=================== ou ============================
*/
let rotaNoticias = require('./app/routes/noticias')(app);
let rotaNome = require('./app/routes/home')(app);
let rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando com Express em http://localhost: ${port}`);
    
});