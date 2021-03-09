import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info(`Aplicación ejecutandose en el puerto ${port}.`)
});
