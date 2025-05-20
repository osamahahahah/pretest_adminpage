const db = require("../models");
const Pembelian = db.pembelian;
const Produk = db.produk;
const StokProduk = db.stokproduk;

class PembelianController {
    
    async create(req, res) {
        try {
            const products = await Produk.findAll({
                include: [{ 
                    model: StokProduk,
                    attributes: ['jumlah']
                }],
                order: [['nama_produk', 'ASC']]
            });

            res.render('pembelian/create', {
                title: 'Input Data Pembelian',
                products
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async index(req, res) {
        try {
            const pembelian = await Pembelian.findAll({
                include: [{ 
                    model: Produk,
                    attributes: ['nama_produk', 'kategori']
                }],
                order: [['tanggal', 'DESC']],
                attributes: ['id', 'tanggal', 'jumlah', 'status']
                
            });

            res.render('pembelian/list', {
                title: 'Data Pembelian',
                pembelian
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

   
    async store(req, res) {
        const t = await db.sequelize.transaction();
        
        try {
            const { produk_id, jumlah } = req.body;
            
            await Pembelian.create({
                produk_id,
                jumlah: parseInt(jumlah),
                tanggal: new Date(),
                status: 'active'
            }, { transaction: t });

            await StokProduk.increment('jumlah', {
                by: parseInt(jumlah),
                where: { produk_id },
                transaction: t
            });

            await t.commit();
            res.redirect('/pembelian');
        } catch (error) {
            await t.rollback();
            res.status(500).send(error.message);
        }
    }


    async cancel(req, res) {
        const t = await db.sequelize.transaction();
        try {
            const { id } = req.params;
            const pembelian = await Pembelian.findOne({
                where: { 
                    id,
                    status: 'active'
                }
            });

            if (!pembelian) {
                return res.status(404).json({ 
                    success: false, 
                    message: 'Pembelian tidak ditemukan atau sudah dibatalkan' 
                });
            }

            await pembelian.update({ 
                status: 'cancelled' 
            }, { transaction: t });

            await StokProduk.decrement('jumlah', {
                by: pembelian.jumlah,
                where: { produk_id: pembelian.produk_id },
                transaction: t
            });

            await t.commit();
            res.json({ 
                success: true,
                message: 'Pembelian berhasil dibatalkan'
            });
        } catch (error) {
            await t.rollback();
            res.status(500).json({ 
                success: false,
                message: 'Gagal membatalkan pembelian'
            });
        }
    }
}

module.exports = new PembelianController();
