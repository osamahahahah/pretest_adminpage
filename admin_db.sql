-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Bulan Mei 2025 pada 18.01
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pembelians`
--

CREATE TABLE `pembelians` (
  `id` int(11) NOT NULL,
  `produk_id` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `tanggal` datetime NOT NULL,
  `status` enum('active','cancelled') DEFAULT 'active',
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pembelians`
--

INSERT INTO `pembelians` (`id`, `produk_id`, `jumlah`, `tanggal`, `status`, `created_at`) VALUES
(1, 1, 1, '2025-05-20 15:31:39', 'cancelled', '2025-05-20 15:31:39'),
(2, 5, 2, '2025-05-20 15:42:50', 'cancelled', '2025-05-20 15:42:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `produks`
--

CREATE TABLE `produks` (
  `id` int(11) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `harga` decimal(10,2) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `produks`
--

INSERT INTO `produks` (`id`, `nama_produk`, `harga`, `kategori`, `created_at`, `updated_at`) VALUES
(1, 'Laptop Asus ROG', '15000000.00', 'Laptop', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(2, 'Macbook Air M1', '18000000.00', 'Laptop', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(3, 'iPhone 14 Pro', '12000000.00', 'Smartphone', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(4, 'Samsung S23', '11000000.00', 'Smartphone', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(5, 'iPad Pro 2023', '14000000.00', 'Tablet', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(6, 'Monitor LG 27inch', '3500000.00', 'Monitor', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(7, 'Keyboard Logitech', '1500000.00', 'Aksesoris', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(8, 'Mouse Gaming', '800000.00', 'Aksesoris', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(9, 'Printer Epson', '2500000.00', 'Printer', '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(10, 'Scanner Canon', '1800000.00', 'Scanner', '2025-05-20 15:31:10', '2025-05-20 15:31:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stok_produks`
--

CREATE TABLE `stok_produks` (
  `id` int(11) NOT NULL,
  `produk_id` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL DEFAULT 0,
  `last_update` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `stok_produks`
--

INSERT INTO `stok_produks` (`id`, `produk_id`, `jumlah`, `last_update`, `created_at`) VALUES
(1, 1, 0, '2025-05-20 15:35:15', '2025-05-20 15:31:10'),
(2, 2, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(3, 3, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(4, 4, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(5, 5, 0, '2025-05-20 15:43:03', '2025-05-20 15:31:10'),
(6, 6, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(7, 7, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(8, 8, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(9, 9, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10'),
(10, 10, 0, '2025-05-20 15:31:10', '2025-05-20 15:31:10');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pembelians`
--
ALTER TABLE `pembelians`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indeks untuk tabel `produks`
--
ALTER TABLE `produks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `stok_produks`
--
ALTER TABLE `stok_produks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pembelians`
--
ALTER TABLE `pembelians`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `produks`
--
ALTER TABLE `produks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `stok_produks`
--
ALTER TABLE `stok_produks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pembelians`
--
ALTER TABLE `pembelians`
  ADD CONSTRAINT `pembelians_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `stok_produks`
--
ALTER TABLE `stok_produks`
  ADD CONSTRAINT `stok_produks_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
