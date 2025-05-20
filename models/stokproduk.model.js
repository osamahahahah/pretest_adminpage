module.exports = (sequelize, Sequelize) => {
    const StokProduk = sequelize.define("stok_produk", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        produk_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'produks',
                key: 'id'
            }
        },
        jumlah: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        last_update: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'last_update'
    });

    return StokProduk;
};
