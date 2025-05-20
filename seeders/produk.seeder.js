const db = require("../models");
const Produk = db.produk;
const StokProduk = db.stokproduk;

async function seedProduk() {
   
    const produkList = [
        { nama_produk: "Laptop Asus ROG", harga: 15000000, kategori: "Laptop" },
        { nama_produk: "Macbook Air M1", harga: 18000000, kategori: "Laptop" },
        { nama_produk: "iPhone 14 Pro", harga: 12000000, kategori: "Smartphone" },
        { nama_produk: "Samsung S23", harga: 11000000, kategori: "Smartphone" },
        { nama_produk: "iPad Pro 2023", harga: 14000000, kategori: "Tablet" },
        { nama_produk: "Monitor LG 27inch", harga: 3500000, kategori: "Monitor" },
        { nama_produk: "Keyboard Logitech", harga: 1500000, kategori: "Aksesoris" },
        { nama_produk: "Mouse Gaming", harga: 800000, kategori: "Aksesoris" },
        { nama_produk: "Printer Epson", harga: 2500000, kategori: "Printer" },
        { nama_produk: "Scanner Canon", harga: 1800000, kategori: "Scanner" }
    ];

   
    await Produk.destroy({ where: {} });
    await StokProduk.destroy({ where: {} });
    console.log("Data lama dibersihkan");

    
    for (const produk of produkList) {
        try {
           
            const newProduk = await Produk.create(produk);
            
            // Buat stok awal 0
            await StokProduk.create({
                produk_id: newProduk.id,
                jumlah: 0
            });
            
            console.log(`Produk ${produk.nama_produk} berhasil ditambahkan`);
        } catch (error) {
            console.error(`Error saat menambah ${produk.nama_produk}:`, error);
        }
    }
}


seedProduk()
    .then(() => {
        console.log("✨ Seeding produk selesai!");
        process.exit();
    })
    .catch(error => {
        console.error("Error:", error);
        process.exit(1);
    });
