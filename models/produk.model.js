module.exports = (sequelize, Sequelize) => {
    const Produk = sequelize.define("produk", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_produk: {
            type: Sequelize.STRING,
            allowNull: false
        },
        harga: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        kategori: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Produk;
};
