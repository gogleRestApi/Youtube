import server from "./app/server.js";

const main = async () =>{
    try {
        await server.listen(server.get("port"));
        console.log(`Ejecutando en el puerto ${server.get("port")}`);
    } catch (error) {
        const er = "Error al conectarse al puerto";
        console.log(er, error);
    }
}

main();
