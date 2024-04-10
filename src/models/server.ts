import express, {Application, Request, Response} from 'express';
import routesProducto from '../routes/producto';
import db from '../db/connection'

class Server {
        private app: Application;
        private port: String;

        constructor() {
            this.app = express();
            this.port = process.env.PORT || '3001';
            this.listen();
            this.midlewares();
            this.routes();
            this.dbConnect();
        }   

            listen() {
            this.app.listen(this.port, () => {
                console.log(`Server is running on port ${this.port}`);
            });
        }

        routes() {
            this.app.get('/', (req:Request, res:Response) =>{
                res.json({
                    msg: 'Api es woirking'
                })
            })
            this.app.use('/api/productos', routesProducto)
        }

        midlewares() {
            //Parcheando el body
            this.app.use(express.json());
        }
        async dbConnect() {
            await db.authenticate()
            console.log('Conectado a la base de datos')

        }
}

export default Server


