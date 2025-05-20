const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.produk = require("./produk.model.js")(sequelize, Sequelize);
db.pembelian = require("./pembelian.model.js")(sequelize, Sequelize);
db.stokproduk = require("./stokproduk.model.js")(sequelize, Sequelize);


db.produk.hasMany(db.pembelian, { foreignKey: 'produk_id' });
db.pembelian.belongsTo(db.produk, { foreignKey: 'produk_id' });

db.produk.hasOne(db.stokproduk, { foreignKey: 'produk_id' });
db.stokproduk.belongsTo(db.produk, { foreignKey: 'produk_id' });

module.exports = db;
