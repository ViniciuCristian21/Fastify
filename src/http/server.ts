import fastify from 'fastify';


const app = fastify()

app.get('/app', (req, res) => {

    return res.send({
        nome: "viniciu",
        idade: 18,
    })
})

app.listen({port: 3333}).then(() => {
    console.log('HTTP server running')
})