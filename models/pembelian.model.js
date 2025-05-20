module.exports = (sequelize, Sequelize) => {
    const Pembelian = sequelize.define("pembelian", {
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
            allowNull: false
        },
        tanggal: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        status: {
            type: Sequelize.ENUM('active', 'cancelled'),
            defaultValue: 'active'
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: false
    });

    return Pembelian;
};
