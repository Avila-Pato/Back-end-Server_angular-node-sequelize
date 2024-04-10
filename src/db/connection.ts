import  {Sequelize} from 'sequelize'

const sequelize = new Sequelize( 'almacen', 'root','patopato123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // esta opcion quita el SELECT 1+1 AS result

});

export default sequelize;