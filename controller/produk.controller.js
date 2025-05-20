const db = require("../models");
const Produk = db.produk;
const StokProduk = db.stokproduk;

class ProdukController {
   
    async index(req, res) {
        try {
            const products = await Produk.findAll({
                include: [{ 
                    model: StokProduk,
                    attributes: ['jumlah']
                }],
                order: [['created_at', 'DESC']]
            });
            
           
            const formattedProducts = products.map(product => ({
                ...product.toJSON(),
                stok: product.stok_produk ? product.stok_produk.jumlah : 0
            }));
            
            res.render('produk/index', {
                title: 'Data Produk',
                products: formattedProducts
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Terjadi kesalahan saat mengambil data');
        }
    }

    // Simpan produk baru
    async store(req, res) {
        try {
            const { nama_produk, harga, kategori } = req.body;
            
            // Buat produk baru
            const produk = await Produk.create({
                nama_produk,
                harga,
                kategori
            });

            // Buat stok awal
            await StokProduk.create({
                produk_id: produk.id,
                jumlah: 0
            });

            res.redirect('/produk');
        } catch (error) {
            console.error(error);
            res.status(500).send('Terjadi kesalahan saat menyimpan produk');
        }
    }

    // Hapus produk
    async delete(req, res) {
        try {
            const { id } = req.params;
            await Produk.destroy({
                where: { id }
            });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ 
                success: false, 
                message: error.message 
            });
        }
    }
}

module.exports = new ProdukController();
