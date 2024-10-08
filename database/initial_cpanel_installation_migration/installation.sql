-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 08, 2024 at 02:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `new`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `account_code` varchar(30) NOT NULL,
  `account_type` int(11) NOT NULL,
  `label` varchar(250) NOT NULL,
  `initial_balance` decimal(13,2) NOT NULL DEFAULT 0.00,
  `description` text DEFAULT NULL,
  `pos_default` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `slack`, `store_id`, `account_code`, `account_type`, `label`, `initial_balance`, `description`, `pos_default`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'oAAGEETm5AlEucviRTwbuCh0z', 1, '101', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-13 07:45:43', '2024-09-13 07:45:43'),
(4, 'YJg1uasBBwJReYum1Q6tAt502', 4, '104', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-14 16:09:58', '2024-09-14 16:09:58'),
(5, 'QoxXd3yYC66m7r2aGqTkindqQ', 5, '105', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-14 16:12:45', '2024-09-14 16:12:45'),
(6, 'aPVfkhen0oNzEjptLSxZe3ZiM', 6, '106', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-14 16:13:33', '2024-09-14 16:13:33'),
(7, 'zUu3H3hB6EePkoAjoJhzhnFIS', 7, '107', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-14 16:16:35', '2024-09-14 16:16:35'),
(8, '6S7xAazGHaGnen63OBvJ7gaeO', 8, '108', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-14 16:20:24', '2024-09-14 16:20:24'),
(9, 'FTU4glwd6A5SpQHePwnJa1hjO', 9, '109', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 04:54:56', '2024-09-15 04:54:56'),
(10, 'DfmQSNvOV46ckA6JtfUFN9aK1', 10, '110', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 04:56:08', '2024-09-15 04:56:08'),
(11, 'J31tKNUiVswdC5XhMadK4hTO6', 11, '111', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 04:59:19', '2024-09-15 04:59:19'),
(12, 'mKuWfrQzXxQEaCSoUkESbLwXo', 12, '112', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 05:00:58', '2024-09-15 05:00:58'),
(13, 'ocMfVrIeMUld28QvHkXNd0A0S', 13, '113', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 05:02:01', '2024-09-15 05:02:01'),
(14, 'rXCI5lDhGjZjJTUBfaX4CXvyY', 14, '114', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 05:03:55', '2024-09-15 05:03:55'),
(15, 'kztSRipZFXXlz8JX7FLx7A1CG', 15, '115', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 05:10:30', '2024-09-15 05:10:30'),
(16, 'ag2nWfQxJgJh4oR3i3Rl6nTHD', 16, '116', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 05:13:31', '2024-09-15 05:13:31'),
(17, '6bHfRBy60QLBPTDBUFFWEJWoa', 17, '117', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 13:08:43', '2024-09-15 13:08:43'),
(18, 'AxHz9Bf6rttux54AoIujKWJDc', 18, '118', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-15 13:24:24', '2024-09-15 13:24:24'),
(19, 'Bp2iRL5wW86ZFRnDKgBt1G61x', 19, '119', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-16 13:26:23', '2024-09-16 13:26:23'),
(20, 'kQqUjPPprPwSXzD2uAkQnbnzT', 20, '120', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-16 13:34:31', '2024-09-16 13:34:31'),
(21, 'Jq9jqWvwYIZRKcP7S0tLa6kMn', 21, '121', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-16 13:46:00', '2024-09-16 13:46:00'),
(22, 'xqrYpm4IU0syoZTV2FITvd1LY', 22, '122', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-17 10:26:30', '2024-09-17 10:26:30'),
(23, 'L3vZ5yeYNw02bpYxeSGp5jugn', 23, '123', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-18 13:05:01', '2024-09-18 13:05:01'),
(24, 'VErQ8PxCM7jLzZtiWgdD6Cn0L', 24, '124', 1, 'Default Sales Account', 0.00, 'Default Sales Account', 1, 1, 1, NULL, '2024-09-21 14:33:07', '2024-09-21 14:33:07');

-- --------------------------------------------------------

--
-- Table structure for table `addon_groups`
--

CREATE TABLE `addon_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `addon_group_code` varchar(30) NOT NULL,
  `label` varchar(250) NOT NULL,
  `multiple_selection` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `addon_group_products`
--

CREATE TABLE `addon_group_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `addon_group_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `app_activation`
--

CREATE TABLE `app_activation` (
  `activation_code` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `billing_counters`
--

CREATE TABLE `billing_counters` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `store_slack` varchar(30) NOT NULL,
  `billing_counter_code` varchar(30) NOT NULL,
  `counter_name` varchar(150) NOT NULL,
  `particular_to` varchar(30) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `billing_counters`
--

INSERT INTO `billing_counters` (`id`, `slack`, `store_id`, `store_slack`, `billing_counter_code`, `counter_name`, `particular_to`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(6, 'eO1DZNbqCRuL8rZhEJa7kErAl', 21, 'b7l6rPsCAkpZQ6GZ8HeMx3h6r', '936', 'A12', '', NULL, 1, 1, 1, '2024-09-16 14:04:11', '2024-09-16 15:47:55'),
(7, 'B4cXD3uWt9avmhFnxB2GBWG7P', 21, 'b7l6rPsCAkpZQ6GZ8HeMx3h6r', '293', 'aaa', '', NULL, 1, 1, NULL, '2024-09-16 14:12:35', '2024-09-16 14:12:35'),
(8, 'LaNzVBxSBVyAjmiaGyi0eAmZ0', 21, 'b7l6rPsCAkpZQ6GZ8HeMx3h6r', '930', 'shanti dhara', '', NULL, 1, 1, NULL, '2024-09-18 13:07:01', '2024-09-18 13:07:01'),
(9, 'E9OwrbraOUVFQPXdFzk64SQAH', 23, 'KqbdZEhsr2U2ZOIw2knCftqOH', '386', 'shanti dhara', '', NULL, 1, 3, NULL, '2024-09-18 14:50:57', '2024-09-18 14:50:57'),
(10, 'CzyZQ8BMz8vgAZDgvzLwSt0ZJ', 24, 'vkHmYyghIlYxAs64Mx17HcHq7', '514', 'Trust daan -1', 'RASID', NULL, 1, 4, 1, '2024-09-21 14:59:43', '2024-09-24 04:28:10'),
(11, '5ZO5XxwDSFa6RxFT3l3W1Qv3p', 24, 'vkHmYyghIlYxAs64Mx17HcHq7', '484', 'Sup1', 'CHALLAN', NULL, 1, 1, 1, '2024-09-24 02:40:33', '2024-09-24 04:28:23'),
(12, 'XvmZMYUE4XVxL055elPmHDCGP', 24, 'vkHmYyghIlYxAs64Mx17HcHq7', '548', 'SUB2', 'CHALLAN', '1', 1, 1, 1, '2024-09-24 03:21:45', '2024-09-24 04:28:35'),
(13, '293MqN06KjpOuJhRe1mgIbcVq', 24, 'vkHmYyghIlYxAs64Mx17HcHq7', '796', '123', 'CHALLAN', '123', 1, 1, 1, '2024-09-29 03:15:01', '2024-09-29 03:21:02');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `event_code` varchar(30) NOT NULL,
  `event_type` varchar(15) NOT NULL DEFAULT 'BOOKING',
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `no_of_persons` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_registers`
--

CREATE TABLE `business_registers` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `billing_counter_id` int(11) DEFAULT NULL,
  `current_register` tinyint(4) NOT NULL DEFAULT 0,
  `opening_date` datetime NOT NULL,
  `closing_date` datetime DEFAULT NULL,
  `opening_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `closing_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `credit_card_slips` int(11) NOT NULL DEFAULT 0,
  `cheques` int(11) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `category_code` varchar(30) NOT NULL,
  `label` varchar(250) NOT NULL,
  `description` text DEFAULT NULL,
  `display_on_pos_screen` tinyint(4) NOT NULL DEFAULT 1,
  `display_on_qr_menu` tinyint(4) NOT NULL DEFAULT 1,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `challan_orders`
--

CREATE TABLE `challan_orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `po_number` varchar(50) NOT NULL,
  `po_reference` varchar(30) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `supplier_id` int(11) NOT NULL,
  `supplier_code` varchar(30) NOT NULL,
  `supplier_name` varchar(250) NOT NULL,
  `supplier_address` text DEFAULT NULL,
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT NULL,
  `total_order_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `terms` text DEFAULT NULL,
  `update_stock` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_type` varchar(30) DEFAULT NULL,
  `payment_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `challan_orders`
--

INSERT INTO `challan_orders` (`id`, `slack`, `store_id`, `po_number`, `po_reference`, `order_date`, `supplier_id`, `supplier_code`, `supplier_name`, `supplier_address`, `currency_name`, `currency_code`, `total_order_amount`, `terms`, `update_stock`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`, `payment_type`, `payment_date`) VALUES
(2, 'k6FhAtCGRLrOtJMDyG67Vk6Ab', 24, '1111', NULL, '2024-09-30', 2, 'SUP102', 'Supplier 1', 'main', 'Indian rupee', 'INR', 10000.00, NULL, 0, 0, 1, 1, '2024-10-06 03:45:06', '2024-10-06 05:45:43', 'cash', NULL),
(3, 'hYuUCwWizlLq18dO0PPGPyTUS', 24, '2222', NULL, '2024-09-30', 2, 'SUP102', 'Supplier 1', 'main', 'Indian rupee', 'INR', 1030.00, NULL, 0, 0, 1, 1, '2024-10-06 03:55:12', '2024-10-06 05:54:35', 'cash', '2024-09-30');

-- --------------------------------------------------------

--
-- Table structure for table `challan_order_products`
--

CREATE TABLE `challan_order_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `challan_order_id` int(11) NOT NULL,
  `product_slack` varchar(30) DEFAULT NULL,
  `product_code` varchar(30) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `total_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `stock_update` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `challan_order_products`
--

INSERT INTO `challan_order_products` (`id`, `slack`, `challan_order_id`, `product_slack`, `product_code`, `name`, `total_amount`, `stock_update`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(23, '3dJbR62DBBJnfvSSUYi4nh5fn', 2, '5ZO5XxwDSFa6RxFT3l3W1Qv3p', NULL, 'Sup1', 5000.00, 0, 1, NULL, 1, '2024-10-06 11:15:43', '2024-10-06 05:45:43'),
(24, 'DRAD0kysSKB4dcwf7gPn056eM', 2, 'XvmZMYUE4XVxL055elPmHDCGP', NULL, 'SUB2', 5000.00, 0, 1, NULL, 1, '2024-10-06 11:15:43', '2024-10-06 05:45:43'),
(27, 'NaEw7mj5NQGObSVsABduKl8i0', 3, '5ZO5XxwDSFa6RxFT3l3W1Qv3p', NULL, 'Sup1', 30.00, 0, 1, NULL, 1, '2024-10-06 11:24:35', '2024-10-06 05:54:35'),
(28, '1dm42U2hpNK1O2MB40kySBONi', 3, 'XvmZMYUE4XVxL055elPmHDCGP', NULL, 'SUB2', 1000.00, 0, 1, NULL, 1, '2024-10-06 11:24:35', '2024-10-06 05:54:35');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(30) NOT NULL,
  `dial_code` varchar(30) NOT NULL,
  `currency_name` varchar(30) NOT NULL,
  `currency_code` varchar(30) NOT NULL,
  `currency_symbol` varchar(30) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `name`, `code`, `dial_code`, `currency_name`, `currency_code`, `currency_symbol`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Afghanistan', 'AF', '+93', 'Afghan afghani', 'AFN', '؋', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(2, 'Aland Islands', 'AX', '+358', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(3, 'Albania', 'AL', '+355', 'Albanian lek', 'ALL', 'L', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(4, 'Algeria', 'DZ', '+213', 'Algerian dinar', 'DZD', 'د.ج', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(5, 'AmericanSamoa', 'AS', '+1684', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(6, 'Andorra', 'AD', '+376', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(7, 'Angola', 'AO', '+244', 'Angolan kwanza', 'AOA', 'Kz', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(8, 'Anguilla', 'AI', '+1264', 'East Caribbean dolla', 'XCD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(9, 'Antarctica', 'AQ', '+672', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(10, 'Antigua and Barbuda', 'AG', '+1268', 'East Caribbean dolla', 'XCD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(11, 'Argentina', 'AR', '+54', 'Argentine peso', 'ARS', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(12, 'Armenia', 'AM', '+374', 'Armenian dram', 'AMD', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(13, 'Aruba', 'AW', '+297', 'Aruban florin', 'AWG', 'ƒ', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(14, 'Australia', 'AU', '+61', 'Australian dollar', 'AUD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(15, 'Austria', 'AT', '+43', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(16, 'Azerbaijan', 'AZ', '+994', 'Azerbaijani manat', 'AZN', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(17, 'Bahamas', 'BS', '+1242', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(18, 'Bahrain', 'BH', '+973', 'Bahraini dinar', 'BHD', '.د.ب', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(19, 'Bangladesh', 'BD', '+880', 'Bangladeshi taka', 'BDT', '৳', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(20, 'Barbados', 'BB', '+1246', 'Barbadian dollar', 'BBD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(21, 'Belarus', 'BY', '+375', 'Belarusian ruble', 'BYR', 'Br', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(22, 'Belgium', 'BE', '+32', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(23, 'Belize', 'BZ', '+501', 'Belize dollar', 'BZD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(24, 'Benin', 'BJ', '+229', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(25, 'Bermuda', 'BM', '+1441', 'Bermudian dollar', 'BMD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(26, 'Bhutan', 'BT', '+975', 'Bhutanese ngultrum', 'BTN', 'Nu.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(27, 'Bolivia, Plurination', 'BO', '+591', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(28, 'Bosnia and Herzegovi', 'BA', '+387', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(29, 'Botswana', 'BW', '+267', 'Botswana pula', 'BWP', 'P', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(30, 'Brazil', 'BR', '+55', 'Brazilian real', 'BRL', 'R$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(31, 'British Indian Ocean', 'IO', '+246', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(32, 'Brunei Darussalam', 'BN', '+673', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(33, 'Bulgaria', 'BG', '+359', 'Bulgarian lev', 'BGN', 'лв', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(34, 'Burkina Faso', 'BF', '+226', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(35, 'Burundi', 'BI', '+257', 'Burundian franc', 'BIF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(36, 'Cambodia', 'KH', '+855', 'Cambodian riel', 'KHR', '៛', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(37, 'Cameroon', 'CM', '+237', 'Central African CFA ', 'XAF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(38, 'Canada', 'CA', '+1', 'Canadian dollar', 'CAD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(39, 'Cape Verde', 'CV', '+238', 'Cape Verdean escudo', 'CVE', 'Esc or $', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(40, 'Cayman Islands', 'KY', '+ 345', 'Cayman Islands dolla', 'KYD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(41, 'Central African Repu', 'CF', '+236', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(42, 'Chad', 'TD', '+235', 'Central African CFA ', 'XAF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(43, 'Chile', 'CL', '+56', 'Chilean peso', 'CLP', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(44, 'China', 'CN', '+86', 'Chinese yuan', 'CNY', '¥ or 元', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(45, 'Christmas Island', 'CX', '+61', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(46, 'Cocos (Keeling] Isla', 'CC', '+61', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(47, 'Colombia', 'CO', '+57', 'Colombian peso', 'COP', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(48, 'Comoros', 'KM', '+269', 'Comorian franc', 'KMF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(49, 'Congo', 'CG', '+242', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(50, 'Congo, The Democrati', 'CD', '+243', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(51, 'Cook Islands', 'CK', '+682', 'New Zealand dollar', 'NZD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(52, 'Costa Rica', 'CR', '+506', 'Costa Rican colón', 'CRC', '₡', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(53, 'Cote Ivoire', 'CI', '+225', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(54, 'Croatia', 'HR', '+385', 'Croatian kuna', 'HRK', 'kn', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(55, 'Cuba', 'CU', '+53', 'Cuban convertible pe', 'CUC', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(56, 'Cyprus', 'CY', '+357', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(57, 'Czech Republic', 'CZ', '+420', 'Czech koruna', 'CZK', 'Kč', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(58, 'Denmark', 'DK', '+45', 'Danish krone', 'DKK', 'kr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(59, 'Djibouti', 'DJ', '+253', 'Djiboutian franc', 'DJF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(60, 'Dominica', 'DM', '+1767', 'East Caribbean dolla', 'XCD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(61, 'Dominican Republic', 'DO', '+1849', 'Dominican peso', 'DOP', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(62, 'Ecuador', 'EC', '+593', 'United States dollar', 'USD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(63, 'Egypt', 'EG', '+20', 'Egyptian pound', 'EGP', '£ or ج.م', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(64, 'El Salvador', 'SV', '+503', 'United States dollar', 'USD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(65, 'Equatorial Guinea', 'GQ', '+240', 'Central African CFA ', 'XAF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(66, 'Eritrea', 'ER', '+291', 'Eritrean nakfa', 'ERN', 'Nfk', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(67, 'Estonia', 'EE', '+372', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(68, 'Ethiopia', 'ET', '+251', 'Ethiopian birr', 'ETB', 'Br', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(69, 'Falkland Islands (Ma', 'FK', '+500', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(70, 'Faroe Islands', 'FO', '+298', 'Danish krone', 'DKK', 'kr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(71, 'Fiji', 'FJ', '+679', 'Fijian dollar', 'FJD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(72, 'Finland', 'FI', '+358', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(73, 'France', 'FR', '+33', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(74, 'French Guiana', 'GF', '+594', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(75, 'French Polynesia', 'PF', '+689', 'CFP franc', 'XPF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(76, 'Gabon', 'GA', '+241', 'Central African CFA ', 'XAF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(77, 'Gambia', 'GM', '+220', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(78, 'Georgia', 'GE', '+995', 'Georgian lari', 'GEL', 'ლ', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(79, 'Germany', 'DE', '+49', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(80, 'Ghana', 'GH', '+233', 'Ghana cedi', 'GHS', '₵', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(81, 'Gibraltar', 'GI', '+350', 'Gibraltar pound', 'GIP', '£', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(82, 'Greece', 'GR', '+30', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(83, 'Greenland', 'GL', '+299', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(84, 'Grenada', 'GD', '+1473', 'East Caribbean dolla', 'XCD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(85, 'Guadeloupe', 'GP', '+590', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(86, 'Guam', 'GU', '+1671', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(87, 'Guatemala', 'GT', '+502', 'Guatemalan quetzal', 'GTQ', 'Q', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(88, 'Guernsey', 'GG', '+44', 'British pound', 'GBP', '£', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(89, 'Guinea', 'GN', '+224', 'Guinean franc', 'GNF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(90, 'Guinea-Bissau', 'GW', '+245', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(91, 'Guyana', 'GY', '+595', 'Guyanese dollar', 'GYD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(92, 'Haiti', 'HT', '+509', 'Haitian gourde', 'HTG', 'G', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(93, 'Holy See (Vatican Ci', 'VA', '+379', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(94, 'Honduras', 'HN', '+504', 'Honduran lempira', 'HNL', 'L', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(95, 'Hong Kong', 'HK', '+852', 'Hong Kong dollar', 'HKD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(96, 'Hungary', 'HU', '+36', 'Hungarian forint', 'HUF', 'Ft', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(97, 'Iceland', 'IS', '+354', 'Icelandic króna', 'ISK', 'kr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(98, 'India', 'IN', '+91', 'Indian rupee', 'INR', '₹', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(99, 'Indonesia', 'ID', '+62', 'Indonesian rupiah', 'IDR', 'Rp', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(100, 'Iran, Islamic Republ', 'IR', '+98', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(101, 'Iraq', 'IQ', '+964', 'Iraqi dinar', 'IQD', 'ع.د', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(102, 'Ireland', 'IE', '+353', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(103, 'Isle of Man', 'IM', '+44', 'British pound', 'GBP', '£', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(104, 'Israel', 'IL', '+972', 'Israeli new shekel', 'ILS', '₪', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(105, 'Italy', 'IT', '+39', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(106, 'Jamaica', 'JM', '+1876', 'Jamaican dollar', 'JMD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(107, 'Japan', 'JP', '+81', 'Japanese yen', 'JPY', '¥', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(108, 'Jersey', 'JE', '+44', 'British pound', 'GBP', '£', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(109, 'Jordan', 'JO', '+962', 'Jordanian dinar', 'JOD', 'د.ا', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(110, 'Kazakhstan', 'KZ', '+7 7', 'Kazakhstani tenge', 'KZT', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(111, 'Kenya', 'KE', '+254', 'Kenyan shilling', 'KES', 'Sh', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(112, 'Kiribati', 'KI', '+686', 'Australian dollar', 'AUD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(113, 'Korea, Democratic Pe', 'KP', '+850', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(114, 'Korea, Republic of S', 'KR', '+82', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(115, 'Kuwait', 'KW', '+965', 'Kuwaiti dinar', 'KWD', 'د.ك', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(116, 'Kyrgyzstan', 'KG', '+996', 'Kyrgyzstani som', 'KGS', 'лв', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(117, 'Laos', 'LA', '+856', 'Lao kip', 'LAK', '₭', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(118, 'Latvia', 'LV', '+371', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(119, 'Lebanon', 'LB', '+961', 'Lebanese pound', 'LBP', 'ل.ل', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(120, 'Lesotho', 'LS', '+266', 'Lesotho loti', 'LSL', 'L', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(121, 'Liberia', 'LR', '+231', 'Liberian dollar', 'LRD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(122, 'Libyan Arab Jamahiri', 'LY', '+218', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(123, 'Liechtenstein', 'LI', '+423', 'Swiss franc', 'CHF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(124, 'Lithuania', 'LT', '+370', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(125, 'Luxembourg', 'LU', '+352', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(126, 'Macao', 'MO', '+853', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(127, 'Macedonia', 'MK', '+389', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(128, 'Madagascar', 'MG', '+261', 'Malagasy ariary', 'MGA', 'Ar', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(129, 'Malawi', 'MW', '+265', 'Malawian kwacha', 'MWK', 'MK', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(130, 'Malaysia', 'MY', '+60', 'Malaysian ringgit', 'MYR', 'RM', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(131, 'Maldives', 'MV', '+960', 'Maldivian rufiyaa', 'MVR', '.ރ', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(132, 'Mali', 'ML', '+223', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(133, 'Malta', 'MT', '+356', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(134, 'Marshall Islands', 'MH', '+692', 'United States dollar', 'USD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(135, 'Martinique', 'MQ', '+596', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(136, 'Mauritania', 'MR', '+222', 'Mauritanian ouguiya', 'MRO', 'UM', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(137, 'Mauritius', 'MU', '+230', 'Mauritian rupee', 'MUR', '₨', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(138, 'Mayotte', 'YT', '+262', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(139, 'Mexico', 'MX', '+52', 'Mexican peso', 'MXN', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(140, 'Micronesia, Federate', 'FM', '+691', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(141, 'Moldova', 'MD', '+373', 'Moldovan leu', 'MDL', 'L', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(142, 'Monaco', 'MC', '+377', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(143, 'Mongolia', 'MN', '+976', 'Mongolian tögrög', 'MNT', '₮', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(144, 'Montenegro', 'ME', '+382', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(145, 'Montserrat', 'MS', '+1664', 'East Caribbean dolla', 'XCD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(146, 'Morocco', 'MA', '+212', 'Moroccan dirham', 'MAD', 'د.م.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(147, 'Mozambique', 'MZ', '+258', 'Mozambican metical', 'MZN', 'MT', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(148, 'Myanmar', 'MM', '+95', 'Burmese kyat', 'MMK', 'Ks', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(149, 'Namibia', 'NA', '+264', 'Namibian dollar', 'NAD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(150, 'Nauru', 'NR', '+674', 'Australian dollar', 'AUD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(151, 'Nepal', 'NP', '+977', 'Nepalese rupee', 'NPR', '₨', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(152, 'Netherlands', 'NL', '+31', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(153, 'Netherlands Antilles', 'AN', '+599', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(154, 'New Caledonia', 'NC', '+687', 'CFP franc', 'XPF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(155, 'New Zealand', 'NZ', '+64', 'New Zealand dollar', 'NZD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(156, 'Nicaragua', 'NI', '+505', 'Nicaraguan córdoba', 'NIO', 'C$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(157, 'Niger', 'NE', '+227', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(158, 'Nigeria', 'NG', '+234', 'Nigerian naira', 'NGN', '₦', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(159, 'Niue', 'NU', '+683', 'New Zealand dollar', 'NZD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(160, 'Norfolk Island', 'NF', '+672', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(161, 'Northern Mariana Isl', 'MP', '+1670', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(162, 'Norway', 'NO', '+47', 'Norwegian krone', 'NOK', 'kr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(163, 'Oman', 'OM', '+968', 'Omani rial', 'OMR', 'ر.ع.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(164, 'Pakistan', 'PK', '+92', 'Pakistani rupee', 'PKR', '₨', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(165, 'Palau', 'PW', '+680', 'Palauan dollar', '', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(166, 'Palestinian Territor', 'PS', '+970', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(167, 'Panama', 'PA', '+507', 'Panamanian balboa', 'PAB', 'B/.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(168, 'Papua New Guinea', 'PG', '+675', 'Papua New Guinean ki', 'PGK', 'K', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(169, 'Paraguay', 'PY', '+595', 'Paraguayan guaraní', 'PYG', '₲', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(170, 'Peru', 'PE', '+51', 'Peruvian nuevo sol', 'PEN', 'S/.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(171, 'Philippines', 'PH', '+63', 'Philippine peso', 'PHP', '₱', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(172, 'Pitcairn', 'PN', '+872', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(173, 'Poland', 'PL', '+48', 'Polish z?oty', 'PLN', 'zł', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(174, 'Portugal', 'PT', '+351', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(175, 'Puerto Rico', 'PR', '+1939', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(176, 'Qatar', 'QA', '+974', 'Qatari riyal', 'QAR', 'ر.ق', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(177, 'Romania', 'RO', '+40', 'Romanian leu', 'RON', 'lei', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(178, 'Russia', 'RU', '+7', 'Russian ruble', 'RUB', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(179, 'Rwanda', 'RW', '+250', 'Rwandan franc', 'RWF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(180, 'Reunion', 'RE', '+262', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(181, 'Saint Barthelemy', 'BL', '+590', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(182, 'Saint Helena, Ascens', 'SH', '+290', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(183, 'Saint Kitts and Nevi', 'KN', '+1869', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(184, 'Saint Lucia', 'LC', '+1758', 'East Caribbean dolla', 'XCD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(185, 'Saint Martin', 'MF', '+590', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(186, 'Saint Pierre and Miq', 'PM', '+508', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(187, 'Saint Vincent and th', 'VC', '+1784', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(188, 'Samoa', 'WS', '+685', 'Samoan t?l?', 'WST', 'T', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(189, 'San Marino', 'SM', '+378', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(190, 'Sao Tome and Princip', 'ST', '+239', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(191, 'Saudi Arabia', 'SA', '+966', 'Saudi riyal', 'SAR', 'ر.س', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(192, 'Senegal', 'SN', '+221', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(193, 'Serbia', 'RS', '+381', 'Serbian dinar', 'RSD', 'дин. or din.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(194, 'Seychelles', 'SC', '+248', 'Seychellois rupee', 'SCR', '₨', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(195, 'Sierra Leone', 'SL', '+232', 'Sierra Leonean leone', 'SLL', 'Le', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(196, 'Singapore', 'SG', '+65', 'Brunei dollar', 'BND', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(197, 'Slovakia', 'SK', '+421', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(198, 'Slovenia', 'SI', '+386', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(199, 'Solomon Islands', 'SB', '+677', 'Solomon Islands doll', 'SBD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(200, 'Somalia', 'SO', '+252', 'Somali shilling', 'SOS', 'Sh', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(201, 'South Africa', 'ZA', '+27', 'South African rand', 'ZAR', 'R', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(202, 'South Georgia and th', 'GS', '+500', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(203, 'Spain', 'ES', '+34', 'Euro', 'EUR', '€', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(204, 'Sri Lanka', 'LK', '+94', 'Sri Lankan rupee', 'LKR', 'Rs or රු', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(205, 'Sudan', 'SD', '+249', 'Sudanese pound', 'SDG', 'ج.س.', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(206, 'Suriname', 'SR', '+597', 'Surinamese dollar', 'SRD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(207, 'Svalbard and Jan May', 'SJ', '+47', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(208, 'Swaziland', 'SZ', '+268', 'Swazi lilangeni', 'SZL', 'L', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(209, 'Sweden', 'SE', '+46', 'Swedish krona', 'SEK', 'kr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(210, 'Switzerland', 'CH', '+41', 'Swiss franc', 'CHF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(211, 'Syrian Arab Republic', 'SY', '+963', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(212, 'Taiwan', 'TW', '+886', 'New Taiwan dollar', 'TWD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(213, 'Tajikistan', 'TJ', '+992', 'Tajikistani somoni', 'TJS', 'ЅМ', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(214, 'Tanzania, United Rep', 'TZ', '+255', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(215, 'Thailand', 'TH', '+66', 'Thai baht', 'THB', '฿', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(216, 'Timor-Leste', 'TL', '+670', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(217, 'Togo', 'TG', '+228', 'West African CFA fra', 'XOF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(218, 'Tokelau', 'TK', '+690', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(219, 'Tonga', 'TO', '+676', 'Tongan pa?anga', 'TOP', 'T$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(220, 'Trinidad and Tobago', 'TT', '+1868', 'Trinidad and Tobago ', 'TTD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(221, 'Tunisia', 'TN', '+216', 'Tunisian dinar', 'TND', 'د.ت', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(222, 'Turkey', 'TR', '+90', 'Turkish lira', 'TRY', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(223, 'Turkmenistan', 'TM', '+993', 'Turkmenistan manat', 'TMT', 'm', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(224, 'Turks and Caicos Isl', 'TC', '+1649', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(225, 'Tuvalu', 'TV', '+688', 'Australian dollar', 'AUD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(226, 'Uganda', 'UG', '+256', 'Ugandan shilling', 'UGX', 'Sh', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(227, 'Ukraine', 'UA', '+380', 'Ukrainian hryvnia', 'UAH', '₴', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(228, 'United Arab Emirates', 'AE', '+971', 'United Arab Emirates', 'AED', 'د.إ', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(229, 'United Kingdom', 'GB', '+44', 'British pound', 'GBP', '£', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(230, 'United States', 'US', '+1', 'United States dollar', 'USD', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(231, 'Uruguay', 'UY', '+598', 'Uruguayan peso', 'UYU', '$', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(232, 'Uzbekistan', 'UZ', '+998', 'Uzbekistani som', 'UZS', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(233, 'Vanuatu', 'VU', '+678', 'Vanuatu vatu', 'VUV', 'Vt', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(234, 'Venezuela, Bolivaria', 'VE', '+58', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(235, 'Vietnam', 'VN', '+84', 'Vietnamese ??ng', 'VND', '₫', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(236, 'Virgin Islands, Brit', 'VG', '+1284', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(237, 'Virgin Islands, U.S.', 'VI', '+1340', '', '', '', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(238, 'Wallis and Futuna', 'WF', '+681', 'CFP franc', 'XPF', 'Fr', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(239, 'Yemen', 'YE', '+967', 'Yemeni rial', 'YER', '﷼', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(240, 'Zambia', 'ZM', '+260', 'Zambian kwacha', 'ZMW', 'ZK', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(241, 'Zimbabwe', 'ZW', '+263', 'Botswana pula', 'BWP', 'P', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `customer_type` enum('DEFAULT','CUSTOM','WALKIN') NOT NULL,
  `password` varchar(100) NOT NULL,
  `fresh_login` tinyint(1) NOT NULL DEFAULT 1,
  `name` varchar(250) NOT NULL,
  `customer_code` varchar(30) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `profile_image` text DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `slack`, `customer_type`, `password`, `fresh_login`, `name`, `customer_code`, `role_id`, `email`, `phone`, `address`, `profile_image`, `dob`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`, `store_id`) VALUES
(11, 'RT4ZOpbTEpib3DihE3L2KhIR9', 'CUSTOM', '$2y$10$obmoyO9VlOYSPi2MD1xBxembVzH.qp5E64QC4.AH6Cclp2rlXmoKa', 1, 'first trust', '415', 5, 'first@trust.com', '1234567890', '1234567890', NULL, '2024-09-01', 1, 4, 4, '2024-09-21 14:49:03', '2024-10-07 12:58:44', 24);

-- --------------------------------------------------------

--
-- Table structure for table `customer_menus`
--

CREATE TABLE `customer_menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `customer_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_menus`
--

INSERT INTO `customer_menus` (`id`, `customer_id`, `menu_id`, `created_by`, `created_at`, `updated_at`) VALUES
(12, 11, 0, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(13, 11, 10, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(14, 11, 19, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(15, 11, 56, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(16, 11, 72, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(17, 11, 120, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(18, 11, 136, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(19, 11, 144, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(20, 11, 145, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(21, 11, 147, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(22, 11, 149, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(23, 11, 173, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(24, 11, 190, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(25, 11, 191, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(26, 11, 194, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45'),
(27, 11, 196, 4, '2024-09-21 14:54:45', '2024-09-21 14:54:45');

-- --------------------------------------------------------

--
-- Table structure for table `discount_codes`
--

CREATE TABLE `discount_codes` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `label` varchar(250) NOT NULL,
  `discount_code` varchar(30) NOT NULL,
  `discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `invoice_number` varchar(50) NOT NULL,
  `invoice_reference` varchar(30) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `invoice_due_date` date DEFAULT NULL,
  `parent_po_id` int(11) DEFAULT NULL,
  `bill_to` varchar(30) NOT NULL,
  `bill_to_id` int(11) NOT NULL,
  `bill_to_code` varchar(30) DEFAULT NULL,
  `bill_to_name` varchar(250) NOT NULL,
  `bill_to_email` varchar(150) DEFAULT NULL,
  `bill_to_contact` varchar(15) DEFAULT NULL,
  `bill_to_address` text DEFAULT NULL,
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT NULL,
  `tax_option_id` int(11) DEFAULT NULL,
  `subtotal_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `shipping_charge` decimal(13,2) NOT NULL DEFAULT 0.00,
  `packing_charge` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_order_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `terms` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_products`
--

CREATE TABLE `invoice_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_slack` varchar(30) DEFAULT NULL,
  `product_code` varchar(30) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `quantity` decimal(8,2) NOT NULL DEFAULT 0.00,
  `amount_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `subtotal_amount_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_components` text DEFAULT NULL,
  `total_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `keyboard_shortcuts`
--

CREATE TABLE `keyboard_shortcuts` (
  `id` int(10) UNSIGNED NOT NULL,
  `keyboard_constant` varchar(50) NOT NULL,
  `keyboard_shortcut` varchar(15) NOT NULL,
  `keyboard_shortcut_label` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `keyboard_shortcuts`
--

INSERT INTO `keyboard_shortcuts` (`id`, `keyboard_constant`, `keyboard_shortcut`, `keyboard_shortcut_label`, `description`, `sort_order`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'CLOSE_ORDER', 'ctrl,shift,m', 'Ctrl+Shift+m', 'Close Order', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(2, 'HOLD_ORDER', 'ctrl,shift,n', 'Ctrl+Shift+n', 'Hold Order', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(3, 'SEND_TO_KITCHEN', 'ctrl,shift,b', 'Ctrl+Shift+b', 'Send to Kitchen', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(4, 'SKIP_CUSTOMER', 'shift,z', 'Shift+z', 'Skip customer selection', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(5, 'PROCEED_CUSTOMER', 'shift,x', 'Shift+x', 'Proceed customer selection', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(6, 'ARROW_LEFT', 'arrowleft', 'Arrow Left', 'Move left through POS products', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(7, 'ARROW_RIGHT', 'arrowright', 'Arrow Right', 'Move right through POS products', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(8, 'CHOOSE_PRODUCT', 'ctrl', 'Control', 'Choose POS product', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(9, 'SCROLL_PAYMENT_METHODS', 'shift,p', 'Shift+p', 'Scroll through payment methods', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(10, 'CHOOSE_PAYMENT_METHOD', 'shift,l', 'Shift+l', 'Choose payment method', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(11, 'SCROLL_BUSINESS_ACCOUNTS', 'shift,o', 'Shift+o', 'Scroll through business accounts', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(12, 'CHOOSE_BUSINESS_ACCOUNT', 'shift,k', 'Shift+k', 'Choose business accounts', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(13, 'SCROLL_ORDER_TYPES', 'shift,i', 'Shift+i', 'Scroll through order types', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(14, 'CHOOSE_ORDER_TYPE', 'shift,j', 'Shift+j', 'Choose order type', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(15, 'SCROLL_RESTAURANT_TABLES', 'shift,u', 'Shift+u', 'Scroll through restaurant tables', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(16, 'CHOOSE_RESTAURANT_TABLE', 'shift,h', 'Shift+h', 'Choose restaurant table', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(17, 'CONTINUE', 'shift,m', 'Shift+m', 'Continue', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(18, 'CANCEL', 'shift,n', 'Shift+n', 'Cancel', 0, 1, 1, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(10) UNSIGNED NOT NULL,
  `language_constant` varchar(15) NOT NULL,
  `language_code` varchar(10) NOT NULL,
  `language` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `language_constant`, `language_code`, `language`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'EN', 'en', 'English', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(2, 'DE', 'de', 'German', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(3, 'AR', 'ar', 'Arabic', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(4, 'ES', 'es', 'Spanish', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(5, 'FR', 'fr', 'French', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(6, 'IT', 'it', 'Italian', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(7, 'MS', 'ms', 'Malay', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(8, 'NO', 'no', 'Norwegian', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(9, 'SV', 'sv', 'Swedish', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(10, 'TH', 'th', 'Thai', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(11, 'ZH', 'zh', 'Chinese', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(12, 'NL', 'nl', 'Dutch', 1, 1, NULL, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(13, 'PT', 'pt', 'Portuguese', 1, 1, NULL, '2021-11-26 08:57:32', '2021-11-26 08:57:32');

-- --------------------------------------------------------

--
-- Table structure for table `master_account_type`
--

CREATE TABLE `master_account_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `account_type_constant` varchar(50) NOT NULL,
  `label` varchar(250) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_account_type`
--

INSERT INTO `master_account_type` (`id`, `account_type_constant`, `label`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'BASIC', 'Basic (Default)', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(2, 'ASSET', 'Asset', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(3, 'LIABILITY', 'Liability', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(4, 'EQUITY', 'Equity', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(5, 'REVENUE', 'Revenue', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(6, 'EXPENSE', 'Expense', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28');

-- --------------------------------------------------------

--
-- Table structure for table `master_billing_type`
--

CREATE TABLE `master_billing_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `billing_type_constant` varchar(50) NOT NULL,
  `label` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_billing_type`
--

INSERT INTO `master_billing_type` (`id`, `billing_type_constant`, `label`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'FINE_DINE', 'Fine Dine', '', 1, 1, NULL, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(2, 'QUICK_BILL', 'Quick Bill', '', 1, 1, NULL, '2021-11-26 08:57:30', '2021-11-26 08:57:30');

-- --------------------------------------------------------

--
-- Table structure for table `master_date_format`
--

CREATE TABLE `master_date_format` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(50) NOT NULL,
  `date_format_value` varchar(50) NOT NULL,
  `date_format_label` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_date_format`
--

INSERT INTO `master_date_format` (`id`, `key`, `date_format_value`, `date_format_label`, `status`, `created_at`, `updated_at`) VALUES
(1, 'DATE_TIME_FORMAT', 'd-m-Y H:i', '01-12-2020 23:00', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(2, 'DATE_TIME_FORMAT', 'j-n-Y H:i', '1-12-2020 23:00', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(3, 'DATE_TIME_FORMAT', 'd-m-Y h:i A', '01-12-2020 01:00 PM', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(4, 'DATE_TIME_FORMAT', 'j-n-Y h:i A', '1-12-2020 01:00 PM', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(5, 'DATE_FORMAT', 'd-m-Y', '01-12-2020', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(6, 'DATE_FORMAT', 'j-n-Y', '1-12-2020', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(7, 'DATE_FORMAT', 'Y-m-d', '2020-12-01', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27');

-- --------------------------------------------------------

--
-- Table structure for table `master_invoice_print_type`
--

CREATE TABLE `master_invoice_print_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `print_type_value` varchar(50) NOT NULL,
  `print_type_label` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_invoice_print_type`
--

INSERT INTO `master_invoice_print_type` (`id`, `print_type_value`, `print_type_label`, `status`, `created_at`, `updated_at`) VALUES
(1, 'A4', 'A4 Sheet', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(2, 'SMALL', 'Small Sheet', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(3, 'SMALL_LITE', 'Small Sheet - Lite', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(4, 'SMALL_V2', 'Small Sheet - V2', 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32');

-- --------------------------------------------------------

--
-- Table structure for table `master_order_type`
--

CREATE TABLE `master_order_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_type_constant` varchar(50) NOT NULL,
  `label` varchar(250) NOT NULL,
  `description` text DEFAULT NULL,
  `restaurant` tinyint(4) NOT NULL DEFAULT 0,
  `icon` varchar(200) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_order_type`
--

INSERT INTO `master_order_type` (`id`, `order_type_constant`, `label`, `description`, `restaurant`, `icon`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'DINEIN', 'Dine In', '', 1, 'fas fa-utensil-spoon', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(2, 'TAKEWAY', 'Take Away', '', 1, 'fas fa-box-open', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(3, 'DELIVERY', 'Delivery', '', 1, 'fas fa-biking', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `master_status`
--

CREATE TABLE `master_status` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(50) NOT NULL,
  `value` varchar(15) NOT NULL,
  `value_constant` varchar(50) DEFAULT NULL,
  `label` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_status`
--

INSERT INTO `master_status` (`id`, `key`, `value`, `value_constant`, `label`, `color`, `status`, `created_at`, `updated_at`) VALUES
(1, 'USER_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(2, 'USER_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(3, 'CUSTOMER_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(4, 'CUSTOMER_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(5, 'ROLE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(6, 'ROLE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(7, 'CATEGORY_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(8, 'CATEGORY_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(9, 'PRODUCT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(10, 'PRODUCT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(11, 'SUPPLIER_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(12, 'SUPPLIER_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(13, 'TAX_CODE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(14, 'TAX_CODE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(15, 'ORDER_STATUS', '0', 'DELETED', 'Deleted', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(16, 'ORDER_STATUS', '1', 'CLOSED', 'Closed', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(17, 'ORDER_STATUS', '2', 'HOLD', 'Hold', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(18, 'ORDER_PRODUCT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(19, 'ORDER_PRODUCT_STATUS', '2', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(20, 'STORE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(21, 'STORE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(22, 'DISCOUNTCODE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(23, 'DISCOUNTCODE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(24, 'PAYMENT_METHOD_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(25, 'PAYMENT_METHOD_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(26, 'PURCHASE_ORDER_STATUS', '0', 'PAID', 'Paid', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(30, 'PURCHASE_ORDER_STATUS', '1', 'DUE', 'Due', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(31, 'PURCHASE_ORDER_PRODUCT_ST', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(32, 'PURCHASE_ORDER_PRODUCT_ST', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(33, 'MAIL_SETTING_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(34, 'MAIL_SETTING_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(35, 'MASTER_DATE_FORMAT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(36, 'MASTER_DATE_FORMAT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(37, 'MASTER_INVOICE_PRINT_TYPE', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(38, 'MASTER_INVOICE_PRINT_TYPE', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(39, 'INVOICE_STATUS', '0', 'CANCELLED', 'Cancelled', 'label red-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(40, 'INVOICE_STATUS', '1', 'NEW', 'New', 'label blue-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(41, 'INVOICE_STATUS', '2', 'SENT', 'Sent', 'label green-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(42, 'INVOICE_STATUS', '3', 'PAID', 'Paid', 'label green-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(43, 'INVOICE_STATUS', '4', 'OVERDUE', 'Overdue', 'label orange-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(44, 'INVOICE_STATUS', '5', 'VOID', 'Void', 'label grey-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(45, 'INVOICE_STATUS', '6', 'WRITEOFF', 'Write Off', 'label grey-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(46, 'INVOICE_PRODUCT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(47, 'INVOICE_PRODUCT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(48, 'QUOTATION_STATUS', '0', 'CANCELLED', 'Cancelled', 'label red-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(49, 'QUOTATION_STATUS', '1', 'PENDING', 'Pending', 'label blue-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(50, 'QUOTATION_STATUS', '2', 'ACCEPTED', 'Accepted', 'label green-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(51, 'QUOTATION_STATUS', '3', 'DECLINED', 'Declined', 'label red-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(52, 'QUOTATION_STATUS', '4', 'EXPIRED', 'Expired', 'label red-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(53, 'QUOTATION_PRODUCT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(54, 'QUOTATION_PRODUCT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(55, 'ORDER_STATUS', '3', 'PAYMENT_ATTEMPTED', 'Payment Attempted', 'label orange-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:33'),
(56, 'ORDER_PAYMENT_STATUS', '0', 'PAYMENT_PENDING', 'Payment Pending', 'label orange-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:33'),
(57, 'MASTER_TRANSACTION_TYPE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(58, 'MASTER_TRANSACTION_TYPE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(59, 'MASTER_ACCOUNT_TYPE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(60, 'MASTER_ACCOUNT_TYPE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(61, 'ACCOUNT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(62, 'ACCOUNT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(63, 'MASTER_TAX_OPTION_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(64, 'MASTER_TAX_OPTION_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(65, 'ORDER_STATUS', '5', 'IN_KITCHEN', 'In Kitchen', 'label blue-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(66, 'ORDER_KITCHEN_STATUS', '0', 'CONFIRMED', 'Order Confirmed', 'label yellow-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(67, 'ORDER_KITCHEN_STATUS', '1', 'STARTED_PREPARING', 'Started Preparing', 'label blue-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(68, 'ORDER_KITCHEN_STATUS', '2', 'ORDER_READY', 'Ready to Serve', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(69, 'MASTER_ORDER_TYPE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(70, 'MASTER_ORDER_TYPE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(71, 'RESTAURANT_TABLE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(72, 'RESTAURANT_TABLE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(73, 'LANGUAGE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(74, 'LANGUAGE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(75, 'STOCK_TRANSFER_STATUS', '0', 'PENDING', 'Pending', 'label yellow-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(76, 'STOCK_TRANSFER_STATUS', '1', 'INITIATED', 'Initiated', 'label blue-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(77, 'STOCK_TRANSFER_STATUS', '2', 'VERIFIED', 'Verified', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(78, 'STOCK_TRANSFER_PRODUCT_STATUS', '0', 'PENDING', 'Pending', 'label yellow-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(79, 'STOCK_TRANSFER_PRODUCT_STATUS', '1', 'ACCEPTED', 'Accepted', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(80, 'STOCK_TRANSFER_PRODUCT_STATUS', '2', 'REJECTED', 'Rejected', 'label red-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(81, 'STOCK_RETURN_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(82, 'STOCK_RETURN_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(83, 'STOCK_RETURN_PRODUCT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(84, 'STOCK_RETURN_PRODUCT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(85, 'NOTIFICATION_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(86, 'NOTIFICATION_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(87, 'MASTER_BILLING_TYPE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(88, 'MASTER_BILLING_TYPE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(89, 'SMS_SETTING_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(90, 'SMS_SETTING_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(91, 'SMS_TEMPLATE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(92, 'SMS_TEMPLATE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(93, 'BILLING_COUNTER_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(94, 'BILLING_COUNTER_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(95, 'KEYBOARD_SHORTCUT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(96, 'KEYBOARD_SHORTCUT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(97, 'PRODUCT_IMAGE_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(98, 'PRODUCT_IMAGE_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(99, 'MEASUREMENT_UNIT_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(100, 'MEASUREMENT_UNIT_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(101, 'ORDER_STATUS', '6', 'CUSTOMER_ORDER', 'Digital Menu Order', 'label yellow-label', 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(102, 'ADDON_GROUP_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(103, 'ADDON_GROUP_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(104, 'ORDER_PAYMENT_STATUS', '1', 'PAYMENT_SUCCESS', 'Payment Success', 'label green-label', 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(105, 'ORDER_PAYMENT_STATUS', '2', 'PAYMENT_FAILED', 'Payment Failed', 'label red-label', 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(106, 'ORDER_STATUS', '4', 'MERGED', 'Merged', 'label grey-label', 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(107, 'VARIANT_OPTION_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(108, 'VARIANT_OPTION_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(109, 'ONLINE_PAYMENT_METHOD_STATUS', '0', 'INACTIVE', 'Inactive', 'label red-label', 1, '2021-11-26 08:57:26', '2021-11-26 08:57:26'),
(110, 'ONLINE_PAYMENT_METHOD_STATUS', '1', 'ACTIVE', 'Active', 'label green-label', 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33');

-- --------------------------------------------------------

--
-- Table structure for table `master_tax_option`
--

CREATE TABLE `master_tax_option` (
  `id` int(10) UNSIGNED NOT NULL,
  `tax_option_constant` varchar(50) NOT NULL,
  `label` varchar(250) NOT NULL,
  `component_count` int(11) NOT NULL DEFAULT 1,
  `component_1` varchar(150) DEFAULT NULL,
  `component_2` varchar(150) DEFAULT NULL,
  `component_3` varchar(150) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_tax_option`
--

INSERT INTO `master_tax_option` (`id`, `tax_option_constant`, `label`, `component_count`, `component_1`, `component_2`, `component_3`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'DEFAULT_TAX', 'DEFAULT TAX', 1, 'TAX', '', '', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(2, 'CGST_SGST', 'CGST + SGST', 2, 'CGST', 'SGST', '', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(3, 'IGST', 'IGST', 1, 'IGST', '', '', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(4, 'VAT', 'VAT', 1, 'VAT', '', '', '', 1, 1, NULL, '2021-11-26 08:57:29', '2021-11-26 08:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `master_transaction_type`
--

CREATE TABLE `master_transaction_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `transaction_type_constant` varchar(50) NOT NULL,
  `label` varchar(250) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_transaction_type`
--

INSERT INTO `master_transaction_type` (`id`, `transaction_type_constant`, `label`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'INCOME', 'Income/Credit', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(2, 'EXPENSE', 'Expense/Debit', '', 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:28');

-- --------------------------------------------------------

--
-- Table structure for table `measurement_units`
--

CREATE TABLE `measurement_units` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `unit_code` varchar(30) NOT NULL,
  `label` varchar(150) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(30) NOT NULL,
  `menu_key` varchar(50) NOT NULL,
  `label` varchar(100) NOT NULL,
  `route` varchar(200) DEFAULT NULL,
  `parent` int(11) NOT NULL DEFAULT 0,
  `sort_order` int(11) DEFAULT NULL,
  `icon` varchar(200) DEFAULT NULL,
  `is_restaurant_menu` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `type`, `menu_key`, `label`, `route`, `parent`, `sort_order`, `icon`, `is_restaurant_menu`, `status`, `created_at`, `updated_at`) VALUES
(2, 'MAIN_MENU', 'MM_ORDERS', 'Sales & Orders', '', 0, 12, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:29'),
(4, 'MAIN_MENU', 'MM_SUPPLIER', 'Supplier', 'suppliers', 0, 5, 'fas fa-truck', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:29'),
(5, 'MAIN_MENU', 'MM_TAX_AND_DISCOUNT', '', '', 0, 19, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:29'),
(6, 'MAIN_MENU', 'MM_STOCK', 'Stock', '', 0, 11, 'fas fa-cubes', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:29'),
(7, 'MAIN_MENU', 'MM_REPORT', 'Reports', '', 0, 9, 'fas fa-chart-pie', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:32'),
(8, 'MAIN_MENU', 'MM_SETTINGS', 'Settings', '', 0, 9, 'fas fa-cog', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:32'),
(9, 'SUB_MENU', 'SM_POS_ORDERS', 'Orders', 'orders', 2, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:32'),
(10, 'MAIN_MENU', 'MM_RASIDS_ORDERS', 'Rasids', 'rasids', 0, 2, 'fas fa-percentage', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:32'),
(11, 'MAIN_MENU', 'MM_USERS', 'Users', 'users', 0, 6, 'fas fa-money-check-alt', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(12, 'MAIN_MENU', 'MM_CUSTOMERS', 'Customers', 'customers', 0, 5, 'fas fa-money-check-alt', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(13, 'MAIN_MENU', 'MM_ROLES', 'Roles', 'roles', 0, 7, 'fas fa-money-check-alt', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(15, 'SUB_MENU', 'SM_TAXCODES', '', '', 5, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(16, 'SUB_MENU', 'SM_DISCOUNTCODES', 'Discount Codes', 'discount_codes', 5, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(17, 'SUB_MENU', 'SM_PRODUCTS', 'Products', 'products', 6, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(18, 'SUB_MENU', 'SM_CATEGORY', 'Categories', 'categories', 6, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(19, 'MAIN_MENU', 'MM_STORE', 'Stores', 'trusts', 0, 8, 'fas fa-money-check-alt', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(20, 'SUB_MENU', 'SM_PAYMENT_METHOD', 'Payment Methods', 'payment_methods', 8, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(21, 'SUB_MENU', 'SM_IMPORT_DATA', 'Import Data', 'import_data', 160, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:30'),
(22, 'SUB_MENU', 'SM_UPDATE_DATA', 'Upload & Update Data', 'update_data', 160, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:30'),
(23, 'SUB_MENU', 'SM_EMAIL_SETTING', 'Email Settings', 'email_setting', 8, 4, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:32'),
(24, 'SUB_MENU', 'SM_APP_SETTING', 'App Settings', 'app_setting', 8, 9, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:33'),
(25, 'ACTIONS', 'A_ADD_USER', 'Add User', '', 11, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(26, 'ACTIONS', 'A_EDIT_USER', 'Edit User', '', 11, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(27, 'ACTIONS', 'A_DETAIL_USER', 'View User Detail', '', 11, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(28, 'ACTIONS', 'A_ADD_ROLE', 'Add Role', '', 13, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(29, 'ACTIONS', 'A_EDIT_ROLE', 'Edit Role', '', 13, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(30, 'ACTIONS', 'A_DETAIL_ROLE', 'View Role Detail', '', 13, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(31, 'ACTIONS', 'A_ADD_CUSTOMER', 'Add Customer', '', 12, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(32, 'ACTIONS', 'A_EDIT_CUSTOMER', 'Edit Customer', '', 12, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(33, 'ACTIONS', 'A_DETAIL_CUSTOMER', 'View Customer Detail', '', 12, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(34, 'ACTIONS', 'A_ADD_ORDER', 'Add Order', '', 9, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(35, 'ACTIONS', 'A_EDIT_ORDER', 'Edit Order', '', 9, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(36, 'ACTIONS', 'A_DETAIL_ORDER', 'View Order Details', '', 9, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(37, 'ACTIONS', 'A_DELETE_ORDER', 'Delete Order', '', 9, 4, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(38, 'ACTIONS', 'A_ADD_PRODUCT', 'Add Product', '', 17, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(39, 'ACTIONS', 'A_EDIT_PRODUCT', 'Edit Product', '', 17, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(40, 'ACTIONS', 'A_DETAIL_PRODUCT', 'View Product Detail', '', 17, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(41, 'SUB_MENU', 'SM_PRODUCT_LABEL', 'Product Label', 'generate_barcode', 6, 5, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:31'),
(42, 'ACTIONS', 'A_ADD_CATEGORY', 'Add Category', '', 18, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(43, 'ACTIONS', 'A_EDIT_CATEGORY', 'Edit Category', '', 18, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(44, 'ACTIONS', 'A_DETAIL_CATEGORY', 'View Category Detail', '', 18, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(45, 'ACTIONS', 'A_ADD_TAXCODE', 'Add Tax Code', '', 15, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(46, 'ACTIONS', 'A_EDIT_TAXCODE', 'Edit Tax Code', '', 15, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(47, 'ACTIONS', 'A_DETAIL_TAXCODE', 'View Tax Code Detail', '', 15, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(48, 'ACTIONS', 'A_ADD_DISCOUNTCODE', 'Add Discount Code', '', 16, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(49, 'ACTIONS', 'A_EDIT_DISCOUNTCODE', 'Edit Discount Code', '', 16, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(50, 'ACTIONS', 'A_DETAIL_DISCOUNTCODE', 'View Discount Code Detail', '', 16, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(51, 'ACTIONS', 'A_ADD_SUPPLIER', 'Add Supplier', '', 4, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(52, 'ACTIONS', 'A_EDIT_SUPPLIER', 'Edit Supplier', '', 4, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(53, 'ACTIONS', 'A_DETAIL_SUPPLIER', 'View Supplier Detail', '', 4, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(54, 'ACTIONS', 'A_ADD_STORE', 'Add Store', '', 19, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(55, 'ACTIONS', 'A_EDIT_STORE', 'Edit Store', '', 19, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(56, 'ACTIONS', 'A_DETAIL_STORE', 'View Store Detail', '', 19, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(57, 'ACTIONS', 'A_ADD_PAYMENT_METHOD', 'Add Payment Method', '', 20, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(58, 'ACTIONS', 'A_EDIT_PAYMENT_METHOD', 'Edit Payment Method', '', 20, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(59, 'ACTIONS', 'A_DETAIL_PAYMENT_METHOD', 'View Payment Method Detail', '', 20, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(60, 'ACTIONS', 'A_UPLOAD_USER', 'Upload Users', '', 21, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(61, 'ACTIONS', 'A_UPLOAD_STORE', 'Upload Store', '', 19, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(62, 'ACTIONS', 'A_UPLOAD_SUPPLIER', 'Upload Supplier', '', 4, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(63, 'ACTIONS', 'A_UPLOAD_CATEGORY', 'Upload Category', '', 21, 4, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(64, 'ACTIONS', 'A_UPLOAD_PRODUCT', 'Upload Product', '', 21, 5, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(65, 'ACTIONS', 'A_UPDATE_USER', 'Update Users', '', 22, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(66, 'ACTIONS', 'A_UPDATE_STORE', 'Update Store', '', 19, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(67, 'ACTIONS', 'A_UPDATE_SUPPLIER', 'Update Supplier', '', 4, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(68, 'ACTIONS', 'A_UPDATE_CATEGORY', 'Update Category', '', 22, 4, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(69, 'ACTIONS', 'A_UPDATE_PRODUCT', 'Update Product', '', 22, 5, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(70, 'ACTIONS', 'A_ADD_RASID', 'Add Rasid', '', 10, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(71, 'ACTIONS', 'A_EDIT_RASID', 'Edit Rasid', '', 10, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(72, 'ACTIONS', 'A_DETAIL_RASID', 'View Rasid Detail', '', 10, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(73, 'ACTIONS', 'A_EDIT_STATUS_RASID', 'Change Rasid Status', '', 10, 4, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:28'),
(74, 'ACTIONS', 'A_EDIT_EMAIL_SETTING', 'Edit Email Setting', '', 23, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(75, 'ACTIONS', 'A_EDIT_APP_SETTING', 'Edit App Setting', '', 24, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(76, 'MAIN_MENU', 'MM_INVOICES', 'Invoices', 'invoices', 0, 10, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:32'),
(77, 'ACTIONS', 'A_ADD_INVOICE', 'Add Invoice', '', 76, 1, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(78, 'ACTIONS', 'A_EDIT_INVOICE', 'Edit Invoice', '', 76, 2, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(79, 'ACTIONS', 'A_DETAIL_INVOICE', 'View Invoice Details', '', 76, 3, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(80, 'ACTIONS', 'A_DELETE_INVOICE', 'Delete Invoice', '', 76, 4, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(81, 'ACTIONS', 'A_EDIT_STATUS_INVOICE', 'Change Invoice Status', '', 76, 5, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(82, 'ACTIONS', 'A_MAKE_PAYMENT_INVOICE', 'Add Invoice Payment', '', 76, 6, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(83, 'SUB_MENU', 'SM_QUOTATIONS', 'Quotations', 'quotations', 2, 5, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:32'),
(84, 'ACTIONS', 'A_ADD_QUOTATION', 'Add Quotation', '', 83, 1, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(85, 'ACTIONS', 'A_EDIT_QUOTATION', 'Edit Quotation', '', 83, 2, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(86, 'ACTIONS', 'A_DETAIL_QUOTATION', 'View Quotation Details', '', 83, 3, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(87, 'ACTIONS', 'A_DELETE_QUOTATION', 'Delete Quotation', '', 83, 4, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(88, 'ACTIONS', 'A_EDIT_STATUS_QUOTATION', 'Change Quotation Status', '', 83, 5, NULL, 0, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:27'),
(89, 'MAIN_MENU', 'MM_ACCOUNT', 'Business Account', '', 0, 10, 'fas fa-money-check-alt', 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:29'),
(90, 'SUB_MENU', 'SM_ACCOUNTS', 'Accounts', 'accounts', 89, 1, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(91, 'SUB_MENU', 'SM_TRANSACTIONS', 'Transactions', 'transactions', 2, 6, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:32'),
(92, 'ACTIONS', 'A_ADD_ACCOUNT', 'Add Account', '', 90, 1, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(93, 'ACTIONS', 'A_EDIT_ACCOUNT', 'Edit Account', '', 90, 2, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(94, 'ACTIONS', 'A_DETAIL_ACCOUNT', 'View Account Detail', '', 90, 3, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(95, 'ACTIONS', 'A_ADD_TRANSACTION', 'Add Transaction', '', 91, 1, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(96, 'ACTIONS', 'A_EDIT_TRANSACTION', 'Edit Transaction', '', 91, 2, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(97, 'ACTIONS', 'A_DETAIL_TRANSACTION', 'View Transaction Detail', '', 91, 3, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(98, 'ACTIONS', 'A_DELETE_TRANSACTION', 'Delete Transaction', '', 91, 4, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(99, 'ACTIONS', 'A_DELETE_RASID', 'Delete Rasid', '', 10, 5, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(100, 'MAIN_MENU', 'MM_RESTAURANT', 'Restaurant', '', 0, 10, 'fas fa-utensils', 1, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:32'),
(101, 'SUB_MENU', 'SM_RESTAURANT_KITCHEN', 'Kitchen View', 'kitchen', 100, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(102, 'SUB_MENU', 'SM_RESTAURANT_TABLES', 'Tables', 'tables', 100, 3, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:31'),
(103, 'ACTIONS', 'A_ADD_RESTAURANT_TABLE', 'Add Table', '', 102, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(104, 'ACTIONS', 'A_EDIT_RESTAURANT_TABLE', 'Edit Table', '', 102, 2, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(105, 'ACTIONS', 'A_DETAIL_RESTAURANT_TABLE', 'View Table Detail', '', 102, 3, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(106, 'ACTIONS', 'A_CHANGE_KITCHEN_ORDER_STATUS', 'Change Kitchen Order Status', '', 101, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(107, 'SUB_MENU', 'SM_TARGET', 'Monthly Targets', 'targets', 89, 2, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:32'),
(108, 'ACTIONS', 'A_ADD_TARGET', 'Add Target', '', 107, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(109, 'ACTIONS', 'A_EDIT_TARGET', 'Edit Target', '', 107, 2, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(110, 'ACTIONS', 'A_DETAIL_TARGET', 'View Target Detail', '', 107, 3, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(111, 'ACTIONS', 'A_DELETE_TARGET', 'Delete Target', '', 107, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(112, 'SUB_MENU', 'SM_STOCK_TRANSFER', 'Stock Transfer', 'stock_transfers', 6, 3, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(113, 'ACTIONS', 'A_ADD_STOCK_TRANSFER', 'Add New Stock Transfer', '', 112, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(114, 'ACTIONS', 'A_EDIT_STOCK_TRANSFER', 'Edit Stock Transfer', '', 112, 2, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(115, 'ACTIONS', 'A_DETAIL_STOCK_TRANSFER', 'View Stock Transfer Detail', '', 112, 3, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(116, 'ACTIONS', 'A_DELETE_STOCK_TRANSFER', 'Delete Stock Transfer', '', 112, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(117, 'ACTIONS', 'A_VERIFY_STOCK_TRANSFER', 'Verify Stock Transfer Request', '', 112, 5, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(118, 'ACTIONS', 'A_VIEW_ORDER_LISTING', 'View Order Listing', '', 9, 5, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(119, 'ACTIONS', 'A_VIEW_INVOICE_LISTING', 'View Invoice Listing', '', 76, 7, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(120, 'ACTIONS', 'A_VIEW_RASID_LISTING', 'View Rasid Listing', '', 10, 6, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(121, 'ACTIONS', 'A_VIEW_QUOTATION_LISTING', 'View Quotation Listing', '', 83, 6, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(122, 'ACTIONS', 'A_VIEW_ACCOUNT_LISTING', 'View Account Listing', '', 90, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(123, 'ACTIONS', 'A_VIEW_TRANSACTION_LISTING', 'View Transaction Listing', '', 91, 5, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(124, 'ACTIONS', 'A_VIEW_TARGET_LISTING', 'View Target Listing', '', 107, 5, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(125, 'ACTIONS', 'A_VIEW_USER_LISTING', 'View User Listing', '', 11, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(126, 'ACTIONS', 'A_VIEW_CUSTOMER_LISTING', 'View Customer Listing', '', 12, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(127, 'ACTIONS', 'A_VIEW_ROLE_LISTING', 'View Role Listing', '', 13, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(128, 'ACTIONS', 'A_VIEW_SUPPLIER_LISTING', 'View Supplier Listing', '', 4, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(129, 'ACTIONS', 'A_VIEW_TAXCODE_LISTING', 'View Tax Code Listing', '', 15, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(130, 'ACTIONS', 'A_VIEW_DISCOUNTCODE_LISTING', 'View Discount Code Listing', '', 16, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(131, 'ACTIONS', 'A_VIEW_PRODUCT_LISTING', 'View Product Listing', '', 17, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:31'),
(132, 'ACTIONS', 'A_VIEW_CATEGORY_LISTING', 'View Category Listing', '', 18, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(133, 'ACTIONS', 'A_VIEW_STOCK_TRANSFER_LISTING', 'View Stock Transfer Listing', '', 112, 6, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(134, 'ACTIONS', 'A_VIEW_KITCHEN_ORDER_LISTING', 'View Kitchen Order Listing', '', 101, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(135, 'ACTIONS', 'A_VIEW_RESTAURANT_TABLE_LISTING', 'View Table Listing', '', 102, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(136, 'ACTIONS', 'A_VIEW_STORE_LISTING', 'View Store Listing', '', 19, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(137, 'ACTIONS', 'A_VIEW_PAYMENT_METHOD_LISTING', 'View Payment Method Listing', '', 20, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(138, 'SUB_MENU', 'SM_RETURNS', 'Stock Return', 'stock_returns', 6, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(139, 'ACTIONS', 'A_ADD_STOCK_RETURN', 'Add New Stock Return', '', 138, 1, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(140, 'ACTIONS', 'A_EDIT_STOCK_RETURN', 'Edit Stock Return', '', 138, 2, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(141, 'ACTIONS', 'A_DETAIL_STOCK_RETURN', 'View Stock Return Detail', '', 138, 3, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(142, 'ACTIONS', 'A_DELETE_STOCK_RETURN', 'Delete Stock Return', '', 138, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(143, 'ACTIONS', 'A_VIEW_STOCK_RETURN_LISTING', 'View Stock Return Listing', '', 138, 5, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(144, 'MAIN_MENU', 'MM_NOTIFICATION', 'Notification', '', 0, 11, 'fas fa-bell', 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:32'),
(145, 'SUB_MENU', 'SM_NOTIFICATIONS', 'Notifications', 'notifications', 144, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(146, 'ACTIONS', 'A_ADD_NOTIFICATION', 'Add New Notification', '', 145, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(147, 'ACTIONS', 'A_DETAIL_NOTIFICATION', 'View Notification', '', 145, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(148, 'ACTIONS', 'A_DELETE_NOTIFICATION', 'Delete Notification', '', 145, 3, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(149, 'ACTIONS', 'A_VIEW_NOTIFICATION_LISTING', 'View Notification Listing', '', 145, 4, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(150, 'SUB_MENU', 'SM_BUSINESS_REGISTERS', 'Business Registers', 'business_registers', 89, 3, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:32'),
(151, 'ACTIONS', 'A_VIEW_BUSINESS_REGISTER_LISTING', 'View Business Register Listing', '', 150, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(152, 'ACTIONS', 'A_DETAIL_BUSINESS_REGISTER', 'View Business Register Detail', '', 150, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(153, 'ACTIONS', 'A_DELETE_BUSINESS_REGISTER', 'Delete Business Register', '', 150, 3, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(154, 'SUB_MENU', 'SM_DOWNLOAD_REPORT', 'Download Reports', 'download_reports', 7, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(155, 'SUB_MENU', 'SM_BEST_SELLER', 'Best Seller Report', 'best_seller_report', 7, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(156, 'SUB_MENU', 'SM_DAY_WISE_SALE', 'Day Wise Sale Report', 'day_wise_sale_report', 7, 3, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(157, 'SUB_MENU', 'SM_CATEGORY_REPORT', 'Category Report', 'catgeory_report', 7, 4, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(158, 'SUB_MENU', 'SM_PRODUCT_QUANTITY_ALERT', 'Stock Quantity Alert', 'product_quantity_alert', 7, 5, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(159, 'SUB_MENU', 'SM_STORE_STOCK_CHART', 'Store Stock Chart', 'store_stock_chart', 7, 6, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(160, 'MAIN_MENU', 'MM_IMPORT', 'Import Data', '', 0, 12, 'fas fa-cloud-download-alt', 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:32'),
(161, 'SUB_MENU', 'SM_SMS_SETTING', 'SMS Settings', 'sms_settings', 8, 5, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:32'),
(162, 'ACTIONS', 'A_EDIT_SMS_SETTING', 'Edit SMS Setting', '', 161, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:31'),
(163, 'SUB_MENU', 'SM_SMS_TEMPLATE', 'SMS Templates', 'sms_templates', 8, 6, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:32'),
(164, 'ACTIONS', 'A_VIEW_SMS_TEMPLATE_LISTING', 'View SMS Template Listing', '', 163, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(165, 'ACTIONS', 'A_EDIT_SMS_TEMPLATE', 'Edit SMS Template', '', 163, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(166, 'ACTIONS', 'A_DETAIL_SMS_TEMPLATE', 'View SMS Template', '', 163, 3, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(167, 'ACTIONS', 'A_SHARE_INVOICE_SMS', 'Send Invoice SMS from Order Detail Page', '', 9, 6, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(169, 'ACTIONS', 'A_ADD_PARTICULAR', 'Add Particular', '', 213, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(170, 'ACTIONS', 'A_EDIT_PARTICULAR', 'Edit Particular', '', 213, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(171, 'ACTIONS', 'A_DETAIL_PARTICULAR', 'View Particular Detail', '', 213, 3, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(172, 'ACTIONS', 'A_VIEW_PARTICULAR_LISTING', 'View Particular Listing', '', 213, 4, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(173, 'MAIN_MENU', 'MM_MASTER_DASHBOARD', 'Master Dashboard', 'dashboard', 0, 1, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(174, 'SUB_MENU', 'SM_BILLING_COUNTER_DASHBOARD', 'Billing Counter Dashboard', '', 1, 2, NULL, 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:30'),
(175, 'ACTIONS', 'A_CREATE_INVOICE_FROM_PO', 'Create Invoice from Purchase Order', '', 10, 7, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(176, 'ACTIONS', 'A_UPLOAD_INGREDIENT', 'Upload Ingredient', '', 21, 6, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(177, 'ACTIONS', 'A_UPDATE_INGREDIENT', 'Update Ingredient', '', 22, 6, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(178, 'SUB_MENU', 'SM_RESTAURANT_WAITER', 'Waiter View', 'waiter', 100, 2, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(179, 'SUB_MENU', 'SM_MEASUREMENT_UNIT', 'Measurement Units', 'measurement_units', 8, 7, NULL, 1, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:32'),
(180, 'ACTIONS', 'A_ADD_MEASUREMENT_UNIT', 'Add Measurement Unit', '', 179, 1, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(181, 'ACTIONS', 'A_EDIT_MEASUREMENT_UNIT', 'Edit Measurement Unit', '', 179, 2, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(182, 'ACTIONS', 'A_DETAIL_MEASUREMENT_UNIT', 'View Measurement Unit', '', 179, 3, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(183, 'ACTIONS', 'A_VIEW_MEASUREMENT_UNIT_LISTING', 'View Measurement Unit Listing', '', 179, 4, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:33'),
(184, 'SUB_MENU', 'SM_RESTAURANT_MENU', 'Restaurant Menu', 'restaurant_menu', 100, 4, NULL, 1, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(185, 'ACTIONS', 'A_DETAIL_SMS_SETTING', 'View SMS Setting Detail', '', 161, 3, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(186, 'ACTIONS', 'A_VIEW_SMS_SETTING_LISTING', 'View SMS Setting Listing', '', 161, 1, NULL, 0, 1, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(187, 'SUB_MENU', 'SM_DIGITAL_MENU_ORDERS', 'Digital Menu Orders', 'digital_menu_orders', 2, 4, NULL, 1, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(188, 'ACTIONS', 'A_VIEW_DIGITAL_MENU_ORDER_LISTING', 'View Digital Menu Order Listing', '', 187, 1, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(189, 'ACTIONS', 'EDIT_DIGITAL_MENU_ORDER', 'Edit Digital Menu Order', '', 187, 2, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(190, 'MAIN_MENU', 'MM_BOOKINGS', 'Bookings & Calendar', '', 0, 8, 'fas fa-calendar-alt', 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(191, 'SUB_MENU', 'SM_BOOKINGS', 'Bookings & Events', 'bookings', 190, 1, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(192, 'ACTIONS', 'A_ADD_BOOKING', 'Add Booking', '', 191, 1, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(193, 'ACTIONS', 'A_EDIT_BOOKING', 'Edit Booking', '', 191, 2, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(194, 'ACTIONS', 'A_DETAIL_BOOKING', 'View Booking & Event Detail', '', 191, 3, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(195, 'ACTIONS', 'A_DELETE_BOOKING', 'Delete Booking', '', 191, 4, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(196, 'ACTIONS', 'A_VIEW_BOOKING_LISTING', 'View Booking & Event Listing', '', 191, 5, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(197, 'SUB_MENU', 'SM_CALENDAR', 'Calendar', 'calendar', 190, 1, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(198, 'ACTIONS', 'A_UPLOAD_ADDON_PRODUCT', 'Upload Add-on Product', '', 21, 7, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(199, 'ACTIONS', 'A_UPDATE_ADDON_PRODUCT', 'Update Add-on Product', '', 22, 7, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(200, 'SUB_MENU', 'SM_ADDON_GROUPS', 'Add-on Groups', 'addon_groups', 6, 6, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:33'),
(201, 'ACTIONS', 'A_ADD_ADDON_GROUP', 'Add Add-on Group', '', 200, 1, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(202, 'ACTIONS', 'A_EDIT_ADDON_GROUP', 'Edit Add-on Group', '', 200, 2, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(203, 'ACTIONS', 'A_DETAIL_ADDON_GROUP', 'View Add-on Group Detail', '', 200, 3, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(204, 'ACTIONS', 'A_VIEW_ADDON_GROUP_LISTING', 'View Add-on Group Listing', '', 200, 4, NULL, 0, 1, '2021-11-26 08:57:32', '2021-11-26 08:57:32'),
(205, 'ACTIONS', 'A_MERGE_ORDER', 'Merge Order', '', 9, 7, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(206, 'ACTIONS', 'A_UNMERGE_ORDER', 'Unmerge Order', '', 9, 8, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(207, 'SUB_MENU', 'SM_VARIANT_OPTIONS', 'Variant Options', 'variant_options', 8, 8, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(208, 'ACTIONS', 'A_ADD_VARIANT_OPTION', 'Add Variant Option', '', 207, 1, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(209, 'ACTIONS', 'A_EDIT_VARIANT_OPTION', 'Edit Variant Option', '', 207, 2, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(210, 'ACTIONS', 'A_DETAIL_VARIANT_OPTION', 'View Variant Option Detail', '', 207, 3, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(211, 'ACTIONS', 'A_VIEW_VARIANT_OPTION_LISTING', 'View Variant Option Listing', '', 207, 4, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(212, 'ACTIONS', 'A_UPDATE_PRODUCT_VARIANT', 'Update Product Variants', '', 22, 8, NULL, 0, 1, '2021-11-26 08:57:33', '2021-11-26 08:57:33'),
(213, 'MAIN_MENU', 'MM_PARTICULARS', 'Particulars', 'particulars', 0, 4, 'fas fa-cubes', 0, 1, '2021-11-26 08:57:30', '2021-11-26 08:57:32'),
(215, 'MAIN_MENU', 'MM_CHALLANS', 'Challan', 'challans', 0, 3, 'fas fa-percentage', 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:32'),
(216, 'ACTIONS', 'A_ADD_CHALLAN', 'Add Challan', '', 215, 1, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(217, 'ACTIONS', 'A_EDIT_CHALLAN', 'Edit Challan', '', 215, 2, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(218, 'ACTIONS', 'A_DETAIL_CHALLAN', 'View Challan Detail', '', 215, 3, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(219, 'ACTIONS', 'A_EDIT_STATUS_CHALLAN', 'Change Challan Status', '', 215, 4, NULL, 0, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:28'),
(220, 'ACTIONS', 'A_DELETE_CHALLAN', 'Delete Challan', '', 215, 5, NULL, 0, 1, '2021-11-26 08:57:28', '2021-11-26 08:57:28'),
(221, 'ACTIONS', 'A_VIEW_CHALLAN_LISTING', 'View Challan Listing', '', 215, 6, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29'),
(223, 'ACTIONS', 'A_UPLOAD_CUSTOMER', 'Upload Customer', '', 12, 4, NULL, 0, 1, '2021-11-26 08:57:29', '2021-11-26 08:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_06_26_051735_create_users_table', 1),
(2, '2019_06_26_053209_create_menus_table', 1),
(3, '2019_06_26_060037_create_user_menus_table', 1),
(4, '2019_07_04_063904_create_roles_table', 1),
(5, '2019_07_05_093727_create_master_status_table', 1),
(6, '2019_08_01_095649_create_role_menus_table', 1),
(7, '2019_08_08_063950_create_products_table_', 1),
(8, '2019_08_08_064020_create_category_table_', 1),
(9, '2019_08_08_064039_create_tax_codes_table_', 1),
(10, '2019_08_08_065740_create_suppliers_table_', 1),
(11, '2019_08_12_111921_create_tax_code_type_table', 1),
(12, '2019_09_02_091654_create_orders_table', 1),
(13, '2019_09_02_093147_create_order_products_table', 1),
(14, '2019_09_02_102236_create_customers_table', 1),
(15, '2019_09_22_143359_create_stores_table', 1),
(16, '2019_09_25_073244_create_user_stores_table', 1),
(17, '2019_10_07_110215_create_discount_codes_table', 1),
(18, '2019_10_19_120057_create_payment_methods_table', 1),
(19, '2019_11_12_185655_create_purchase_orders_table', 1),
(20, '2019_11_13_094741_create_purchase_order_products_table', 1),
(21, '2019_11_13_111337_create_country_table', 1),
(22, '2019_12_11_113654_create_setting_mail_table', 1),
(23, '2019_12_28_083017_create_setting_app_table', 1),
(24, '2019_12_30_071527_create_master_date_format_table', 1),
(25, '2020_01_08_182121_create_master_invoice_print_type_table', 1),
(26, '2020_01_28_171546_create_sessions_table', 1),
(27, '2020_01_30_065150_create_user_access_tokens_table', 1),
(28, '2020_02_27_064522_create_invoices_table', 1),
(29, '2020_02_27_072412_create_invoice_products_table', 1),
(30, '2020_02_27_074121_create_quotations_table', 1),
(31, '2020_02_27_074135_create_quotation_products_table', 1),
(32, '2020_02_29_074629_v2_overall', 1),
(33, '2020_03_03_050937_create_transactions_table', 1),
(34, '2020_03_03_102455_create_master_transaction_type_table', 1),
(35, '2020_03_03_102515_create_master_account_type_table', 1),
(36, '2020_03_03_102548_create_accounts_table', 1),
(37, '2020_03_09_141052_create_master_tax_option_table', 1),
(38, '2020_03_13_152912_v3_overall', 1),
(39, '2020_03_13_153828_create_master_order_type_table', 1),
(40, '2020_03_15_065302_create_restaurant_tables_table', 1),
(41, '2020_03_20_094226_create_languages_table', 1),
(42, '2020_03_28_102831_create_targets_table', 1),
(43, '2020_03_29_071430_create_stock_transfer_table', 1),
(44, '2020_03_29_071439_create_stock_transfer_products_table', 1),
(45, '2020_03_29_131105_v3_5_overall', 1),
(46, '2020_04_11_060301_v3_8_overall', 1),
(47, '2020_04_11_071059_create_stock_returns_table', 1),
(48, '2020_04_11_071114_create_stock_return_products_table', 1),
(49, '2020_04_12_171035_create_notifications_table', 1),
(50, '2020_04_25_081734_create_business_register_table', 1),
(51, '2020_04_26_071343_v4_2_overall', 1),
(52, '2020_05_15_090044_v4_3_overall', 1),
(53, '2020_05_16_062207_create_master_billing_type_table', 1),
(54, '2020_05_23_085819_create_setting_sms_gateways_table', 1),
(55, '2020_05_25_121920_create_sms_templates_table', 1),
(56, '2020_05_31_081201_create_billing_counters_table', 1),
(57, '2020_06_01_051358_create_v4_4_overall', 1),
(58, '2020_07_02_152521_create_v4_5_overall', 1),
(59, '2020_07_02_152556_create_keyboard_shortcuts_table', 1),
(60, '2020_07_16_125331_create_v4_6_overall', 1),
(61, '2020_08_01_060605_create_product_images_table', 1),
(62, '2020_08_10_100344_create_v4_7_overall', 1),
(63, '2020_08_31_080009_create_product_ingredients_table', 1),
(64, '2020_08_31_080108_create_measurement_units_table', 1),
(65, '2020_10_15_082048_create_v4_8_overall', 1),
(66, '2020_11_18_201559_create_v4_9_overall', 1),
(67, '2020_11_18_204938_create_bookings_table', 1),
(68, '2020_12_03_204017_create_otp_table', 1),
(69, '2020_12_23_165619_create_app_activation_table', 1),
(70, '2021_01_14_184837_create_v5_0_overall', 1),
(71, '2021_01_20_203541_create_addon_groups_table', 1),
(72, '2021_01_21_145500_create_addon_group_products_table', 1),
(73, '2021_01_25_113548_create_product_addon_groups_table', 1),
(74, '2021_04_18_083944_create_v5_1_overall', 1),
(75, '2021_05_29_080058_create_v5_2_overall', 1),
(76, '2021_09_13_192238_create_v5_3_overall', 1),
(77, '2021_09_25_193934_create_product_variants_table', 1),
(78, '2021_09_26_074804_create_variant_options_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `notification_text` text NOT NULL,
  `read` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `order_number` varchar(30) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(250) DEFAULT NULL,
  `customer_phone` varchar(25) DEFAULT NULL,
  `customer_email` varchar(150) DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `register_id` int(11) DEFAULT NULL,
  `store_level_discount_code_id` int(11) DEFAULT NULL,
  `store_level_discount_code` varchar(30) DEFAULT NULL,
  `store_level_total_discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `store_level_total_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `product_level_total_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `store_level_tax_code_id` int(11) DEFAULT NULL,
  `store_level_tax_code` varchar(30) DEFAULT NULL,
  `store_level_total_tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `store_level_total_tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `store_level_total_tax_components` text DEFAULT NULL,
  `product_level_total_tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `purchase_amount_subtotal_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `sale_amount_subtotal_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_discount_before_additional_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_amount_before_additional_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `additional_discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `additional_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_order_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_order_amount_rounded` decimal(13,0) NOT NULL DEFAULT 0,
  `payment_method_id` int(11) DEFAULT NULL,
  `payment_method_slack` varchar(30) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT NULL,
  `business_account_id` int(11) DEFAULT NULL,
  `order_type_id` int(11) DEFAULT NULL,
  `order_type` varchar(30) DEFAULT NULL,
  `restaurant_mode` int(11) NOT NULL DEFAULT 0,
  `bill_type_id` int(11) DEFAULT NULL,
  `bill_type` varchar(150) DEFAULT NULL,
  `table_id` int(11) DEFAULT NULL,
  `table_number` varchar(250) DEFAULT NULL,
  `waiter_id` int(11) DEFAULT NULL,
  `order_origin` varchar(25) NOT NULL DEFAULT 'POS_WEB' COMMENT 'POS_WEB, DIGITAL_MENU',
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `kitchen_status` int(11) DEFAULT NULL,
  `payment_status` int(11) NOT NULL DEFAULT 0,
  `order_merged` tinyint(4) NOT NULL DEFAULT 0,
  `order_merge_parent_id` int(11) DEFAULT NULL,
  `kitchen_screen_dismissed` tinyint(4) NOT NULL DEFAULT 0,
  `waiter_screen_dismissed` tinyint(4) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `order_id` int(11) NOT NULL,
  `parent_order_product_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `product_slack` varchar(30) NOT NULL,
  `product_code` varchar(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `quantity` decimal(8,2) NOT NULL,
  `purchase_amount_excluding_tax` decimal(13,2) NOT NULL,
  `sale_amount_excluding_tax` decimal(13,2) NOT NULL,
  `discount_code_id` int(11) DEFAULT NULL,
  `discount_code` varchar(30) DEFAULT NULL,
  `discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `tax_code_id` int(11) DEFAULT NULL,
  `tax_code` varchar(30) DEFAULT NULL,
  `tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `tax_components` text DEFAULT NULL,
  `sub_total_purchase_price_excluding_tax` decimal(13,2) NOT NULL,
  `sub_total_sale_price_excluding_tax` decimal(13,2) NOT NULL,
  `discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_amount` decimal(13,2) NOT NULL,
  `is_ready_to_serve` tinyint(4) NOT NULL DEFAULT 0,
  `merged_from` int(11) DEFAULT NULL,
  `merged_to` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_type` varchar(30) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `generate_counter` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `payment_constant` varchar(30) DEFAULT NULL,
  `label` varchar(250) NOT NULL,
  `key_1` text DEFAULT NULL,
  `key_2` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `activate_on_digital_menu` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `slack`, `payment_constant`, `label`, `key_1`, `key_2`, `description`, `activate_on_digital_menu`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'tJgxZ4Mp6ImQp3DmSIb2b7a2s', 'STRIPE', 'Stripe', NULL, NULL, 'Stripe Payment', 1, 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:33'),
(2, 'mCm4a1bG7xbMQX3jZojQrFkOE', 'PAYPAL', 'Paypal', NULL, NULL, 'Paypal Payment', 1, 1, 1, NULL, '2021-11-26 08:57:28', '2021-11-26 08:57:33'),
(3, '4LGTOjyCLRmEsuIaoGGZtKevX', 'RAZORPAY', 'Razorpay', NULL, NULL, 'Razorpay Payment', 1, 1, 1, NULL, '2021-11-26 08:57:32', '2021-11-26 08:57:33');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `product_code` varchar(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `tax_code_id` int(11) NOT NULL,
  `discount_code_id` int(11) DEFAULT NULL,
  `quantity` decimal(8,2) NOT NULL DEFAULT 0.00,
  `alert_quantity` decimal(8,2) NOT NULL DEFAULT 0.00,
  `purchase_amount_excluding_tax` decimal(13,2) NOT NULL,
  `sale_amount_excluding_tax` decimal(13,2) NOT NULL,
  `is_ingredient` tinyint(4) NOT NULL DEFAULT 0,
  `is_ingredient_price` tinyint(4) NOT NULL DEFAULT 0,
  `is_addon_product` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_addon_groups`
--

CREATE TABLE `product_addon_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `addon_group_id` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `product_id` int(11) NOT NULL,
  `filename` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_ingredients`
--

CREATE TABLE `product_ingredients` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `product_id` int(11) NOT NULL,
  `ingredient_product_id` int(11) NOT NULL,
  `quantity` decimal(8,2) NOT NULL,
  `measurement_unit_id` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_variants`
--

CREATE TABLE `product_variants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `variant_code` varchar(30) NOT NULL,
  `product_id` int(11) NOT NULL,
  `variant_option_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_orders`
--

CREATE TABLE `purchase_orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `po_number` varchar(50) NOT NULL,
  `po_reference` varchar(30) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `customer_id` int(11) NOT NULL,
  `customer_code` varchar(30) NOT NULL,
  `customer_name` varchar(250) NOT NULL,
  `customer_address` text DEFAULT NULL,
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT NULL,
  `total_order_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `terms` text DEFAULT NULL,
  `update_stock` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_type` varchar(30) DEFAULT NULL,
  `transaction_id` varchar(30) DEFAULT NULL,
  `transaction_date` timestamp NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_orders`
--

INSERT INTO `purchase_orders` (`id`, `slack`, `store_id`, `po_number`, `po_reference`, `order_date`, `customer_id`, `customer_code`, `customer_name`, `customer_address`, `currency_name`, `currency_code`, `total_order_amount`, `terms`, `update_stock`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`, `payment_type`, `transaction_id`, `transaction_date`) VALUES
(10, 'NnjmSDWmzH8qI0zZLLkCIWw0j', 24, '123456', '123', '2024-09-01', 11, '415', 'first trust', '1234567890', 'Indian rupee', 'INR', 324.00, 'due', 0, 0, 4, 1, '2024-09-22 02:05:34', '2024-09-26 13:35:18', 'NETBANKING', 'T2409270034252307678869', '2024-09-26 13:35:18'),
(12, 'G3XoetJjKe1fy3PPsZtJG3S8f', 24, '123456111', '34324', '2024-10-01', 11, '415', 'first trust', '1234567890', 'Indian rupee', 'INR', 5000.00, NULL, 0, 1, 1, NULL, '2024-10-06 05:20:57', '2024-10-06 05:20:57', 'cash', NULL, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_products`
--

CREATE TABLE `purchase_order_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `purchase_order_id` int(11) NOT NULL,
  `product_slack` varchar(30) DEFAULT NULL,
  `product_code` varchar(30) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `total_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `stock_update` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_order_products`
--

INSERT INTO `purchase_order_products` (`id`, `slack`, `purchase_order_id`, `product_slack`, `product_code`, `name`, `total_amount`, `stock_update`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(7, 'bqaNaVP2hbsbyEjtSy33FlUnv', 4, 'eO1DZNbqCRuL8rZhEJa7kErAl', NULL, 'A12', 1212.00, 0, 1, 1, NULL, '2024-09-18 02:23:58', NULL),
(8, 'b5CUJVmYvnd90JvTkPdjk0Jd1', 4, 'B4cXD3uWt9avmhFnxB2GBWG7P', NULL, 'aaa', 1212.00, 0, 1, 1, NULL, '2024-09-18 02:23:58', NULL),
(9, 'i8BF6TeP7cfccONKsgo6epRhC', 5, 'eO1DZNbqCRuL8rZhEJa7kErAl', NULL, 'A12', 1111.00, 0, 1, 1, NULL, '2024-09-18 03:10:41', NULL),
(10, 'Fo1rVS2wuVOoa5eIV3K51u7Oj', 5, 'B4cXD3uWt9avmhFnxB2GBWG7P', NULL, 'aaa', 1111.00, 0, 1, 1, NULL, '2024-09-18 03:10:41', NULL),
(11, 'WGnkn7SudT5UVe0UnIQVpsSWK', 6, 'B4cXD3uWt9avmhFnxB2GBWG7P', NULL, 'aaa', 555.00, 0, 1, 1, NULL, '2024-09-18 03:29:19', NULL),
(12, 'KRl91IxOV8D4f1NiiTdQyd9PJ', 6, 'eO1DZNbqCRuL8rZhEJa7kErAl', NULL, 'A12', 555.00, 0, 1, 1, NULL, '2024-09-18 03:29:19', NULL),
(13, 'uGU8Dy47cTZV9yMWQahnTTKLm', 7, 'B4cXD3uWt9avmhFnxB2GBWG7P', NULL, 'aaa', 123.00, 0, 1, 1, NULL, '2024-09-18 06:11:43', NULL),
(14, '67LhvXwj0ADBh3cgttEKHsWHA', 7, 'eO1DZNbqCRuL8rZhEJa7kErAl', NULL, 'A12', 123.00, 0, 1, 1, NULL, '2024-09-18 06:11:43', NULL),
(25, 'XdbNrFse4hapau90MUOrDvm6i', 3, 'eO1DZNbqCRuL8rZhEJa7kErAl', NULL, 'A12', 10000.00, 0, 1, NULL, 1, NULL, '2024-09-18 06:36:16'),
(26, 'MQdthR5XOEac4KRE606M5zKnk', 3, 'B4cXD3uWt9avmhFnxB2GBWG7P', NULL, 'aaa', 1000.00, 0, 1, NULL, 1, NULL, '2024-09-18 06:36:16'),
(29, 'Tv9aXV24SnJJjR5HH35Z9ny6L', 8, 'LaNzVBxSBVyAjmiaGyi0eAmZ0', NULL, 'shanti dhara', 500.00, 0, 1, NULL, 1, NULL, '2024-09-18 13:12:35'),
(30, 'ocGhugsNHlOIq9oSTTEHcUNVO', 8, 'B4cXD3uWt9avmhFnxB2GBWG7P', NULL, 'aaa', 500.00, 0, 1, NULL, 1, NULL, '2024-09-18 13:12:35'),
(32, 'XDUr5AA7XjjtChINbk7drqNJv', 10, 'CzyZQ8BMz8vgAZDgvzLwSt0ZJ', NULL, 'Trust daan -1', 324.00, 0, 1, 4, NULL, '2024-09-22 02:05:34', NULL),
(33, 'Uw37tjQffABNIoKfZyir1hPwB', 12, 'CzyZQ8BMz8vgAZDgvzLwSt0ZJ', NULL, 'Trust daan -1', 5000.00, 0, 1, 1, NULL, '2024-10-06 05:20:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE `quotations` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `quotation_number` varchar(50) NOT NULL,
  `quotation_reference` varchar(30) DEFAULT NULL,
  `quotation_date` date DEFAULT NULL,
  `quotation_due_date` date DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `bill_to` varchar(30) NOT NULL,
  `bill_to_id` int(11) NOT NULL,
  `bill_to_code` varchar(30) DEFAULT NULL,
  `bill_to_name` varchar(250) NOT NULL,
  `bill_to_email` varchar(150) DEFAULT NULL,
  `bill_to_contact` varchar(15) DEFAULT NULL,
  `bill_to_address` text DEFAULT NULL,
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT NULL,
  `tax_option_id` int(11) DEFAULT NULL,
  `subtotal_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `shipping_charge` decimal(13,2) NOT NULL DEFAULT 0.00,
  `packing_charge` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_order_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quotation_products`
--

CREATE TABLE `quotation_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_slack` varchar(30) DEFAULT NULL,
  `product_code` varchar(30) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `quantity` decimal(8,2) NOT NULL DEFAULT 0.00,
  `amount_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `subtotal_amount_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_components` text DEFAULT NULL,
  `total_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_tables`
--

CREATE TABLE `restaurant_tables` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `table_number` varchar(250) NOT NULL,
  `no_of_occupants` int(11) NOT NULL DEFAULT 0,
  `waiter_user_id` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `role_code` varchar(30) NOT NULL,
  `label` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `store_slack` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `slack`, `role_code`, `label`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`, `store_slack`) VALUES
(1, 'aUUhs9mjycM906OVv5LB6wY7f', 'SA', 'Super Admin', 1, 1, NULL, '2021-11-26 03:27:25', '2021-11-26 03:27:25', ''),
(4, 'cDhQ2CNv69tFj59bbg5dsvNHW', '104', 'Trsut Admin', 1, 1, NULL, '2024-09-21 14:43:06', '2024-09-21 14:43:06', 'vkHmYyghIlYxAs64Mx17HcHq7'),
(5, 'BrnRC1RybHEfdcJdQi9x4wSWl', '105', 'Customer Trust', 1, 4, 1, '2024-09-21 14:48:06', '2024-09-29 03:55:54', 'vkHmYyghIlYxAs64Mx17HcHq7');

-- --------------------------------------------------------

--
-- Table structure for table `role_menus`
--

CREATE TABLE `role_menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_menus`
--

INSERT INTO `role_menus` (`id`, `role_id`, `menu_id`, `created_by`, `created_at`, `updated_at`) VALUES
(300, 4, 173, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(301, 4, 10, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(302, 4, 70, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(303, 4, 71, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(304, 4, 72, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(305, 4, 73, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(306, 4, 99, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(307, 4, 120, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(308, 4, 175, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(309, 4, 213, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(310, 4, 169, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(311, 4, 170, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(312, 4, 171, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(313, 4, 172, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(314, 4, 215, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(315, 4, 11, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(316, 4, 25, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(317, 4, 26, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(318, 4, 27, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(319, 4, 125, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(320, 4, 12, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(321, 4, 31, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(322, 4, 32, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(323, 4, 33, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(324, 4, 126, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(325, 4, 13, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(326, 4, 28, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(327, 4, 29, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(328, 4, 30, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(329, 4, 127, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(330, 4, 55, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(331, 4, 19, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(332, 4, 0, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(333, 4, 56, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(334, 4, 136, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(335, 4, 66, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(336, 4, 4, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(337, 4, 14, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(338, 4, 51, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(339, 4, 52, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(340, 4, 53, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(341, 4, 128, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(342, 4, 190, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(343, 4, 191, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(344, 4, 197, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(345, 4, 192, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(346, 4, 193, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(347, 4, 194, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(348, 4, 195, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(349, 4, 196, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06'),
(350, 5, 173, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(351, 5, 72, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(352, 5, 10, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(353, 5, 0, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(354, 5, 120, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(355, 5, 56, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(356, 5, 19, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(357, 5, 136, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(358, 5, 147, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(359, 5, 145, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(360, 5, 144, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(361, 5, 149, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(362, 5, 194, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(363, 5, 191, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(364, 5, 190, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(365, 5, 196, 4, '2024-09-21 14:48:06', '2024-09-21 14:48:06'),
(366, 4, 223, 1, '2024-09-21 14:43:06', '2024-09-21 14:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(191) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` text NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('8sH2xXE7wrL0l3yPYIYBnUMa1Yg5softLuo1wGQh', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', 'YToxMjp7czo2OiJfdG9rZW4iO3M6NDA6Imd4N1pnczFFbUh4Tmp4Q09vdjRMaWRqZGVHM1VGRkdZQ1laTlVsUVEiO3M6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMwOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvY2hhbGxhbnMiO31zOjY6Im91dHB1dCI7czoyNDoiMzQ2YTY4NzEzMzQ0MzEzMTMyMzkzODMwIjtzOjg6ImZ1bGxuYW1lIjtzOjE1OiJBcHBzdGhpbmcgQWRtaW4iO3M6OToiZmlyc3RuYW1lIjtOO3M6MTM6InByb2ZpbGVfaW1hZ2UiO047czo1OiJzbGFjayI7czoyNToiWEowNjk5WlNXYWp5eHZZUk50NkNCWnlHYSI7czo3OiJ1c2VyX2lkIjtpOjE7czo0OiJyb2xlIjtpOjE7czoxMjoiaW5pdGlhbF9saW5rIjtzOjMxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGFzaGJvYXJkIjtzOjEyOiJhY2Nlc3NfdG9rZW4iO3M6MjMzOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUpxZDNSZmRHOXJaVzRpTENKemRXSWlPbnNpZFhObGNsOXBaQ0k2TVN3aWRYTmxjbDl6YkdGamF5STZJbGhLTURZNU9WcFRWMkZxZVhoMldWSk9kRFpEUWxwNVIyRWlmU3dpYVdGMElqb3hOekk0TXprd016Z3dMQ0psZUhBaU9qRTNNamcwTnpZM09EQjkuQWtrbU0xMDFIMVhZNEdCTGxrMHAyQTRnUWhFQWtsMWJ0REVqV1RjNWlrVSI7fQ==', 1728392275);

-- --------------------------------------------------------

--
-- Table structure for table `setting_app`
--

CREATE TABLE `setting_app` (
  `company_name` varchar(250) NOT NULL,
  `app_title` varchar(250) DEFAULT NULL,
  `timezone` varchar(100) NOT NULL DEFAULT 'UTC',
  `app_date_time_format` varchar(50) NOT NULL,
  `app_date_format` varchar(50) NOT NULL,
  `invoice_print_logo` text DEFAULT NULL,
  `company_logo` text DEFAULT NULL,
  `navbar_logo` text DEFAULT NULL,
  `favicon` text DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `setting_app`
--

INSERT INTO `setting_app` (`company_name`, `app_title`, `timezone`, `app_date_time_format`, `app_date_format`, `invoice_print_logo`, `company_logo`, `navbar_logo`, `favicon`, `updated_by`, `created_at`, `updated_at`) VALUES
('Appsthing', 'Appsthing POS', 'UTC', 'd-m-Y H:i', 'd-m-Y', '', NULL, NULL, NULL, 1, '2021-11-26 08:57:27', '2021-11-26 08:57:31');

-- --------------------------------------------------------

--
-- Table structure for table `setting_mail`
--

CREATE TABLE `setting_mail` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `type` varchar(50) NOT NULL,
  `driver` varchar(50) NOT NULL,
  `host` varchar(250) NOT NULL,
  `port` varchar(50) NOT NULL,
  `encryption` varchar(50) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `from_email` varchar(250) NOT NULL,
  `from_email_name` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `setting_sms_gateways`
--

CREATE TABLE `setting_sms_gateways` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `gateway_type` varchar(30) NOT NULL,
  `account_id` varchar(150) DEFAULT NULL,
  `token` varchar(150) DEFAULT NULL,
  `twilio_number` varchar(50) DEFAULT NULL,
  `auth_key` varchar(100) DEFAULT NULL,
  `sender_id` varchar(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `setting_sms_gateways`
--

INSERT INTO `setting_sms_gateways` (`id`, `slack`, `gateway_type`, `account_id`, `token`, `twilio_number`, `auth_key`, `sender_id`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'cIY0CspxpI5oJdn8DL3DFjv3o', 'TWILIO', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(2, 'EBPzCBteHKquqREuXFtBRdRRb', 'TEXTLOCAL', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31'),
(3, 't2JLwvZFiL864lxg2iQT4ELDM', 'MSG91', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, '2021-11-26 08:57:31', '2021-11-26 08:57:31');

-- --------------------------------------------------------

--
-- Table structure for table `sms_templates`
--

CREATE TABLE `sms_templates` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `template_key` varchar(50) NOT NULL,
  `message` text DEFAULT NULL,
  `available_variables` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sms_templates`
--

INSERT INTO `sms_templates` (`id`, `slack`, `template_key`, `message`, `available_variables`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, '2R8rJj6sFQAZqDaTIzx6GWNi3', 'POS_SALE_BILL_MESSAGE', 'Thank you for shopping. Order {order_number}. Order amount {currency_code} {order_amount}. Link to view your ebill {public_order_link}', '{order_number}, {order_amount}, {currency_code}, {payment_method}, {customer_name}, {customer_email}, {customer_phone}, {order_date}, {public_order_link}', 'This SMS will be sent to the customer while you close an order. Given the customer has a valid phone number updated.', 0, 1, NULL, '2021-11-26 08:57:30', '2021-11-26 08:57:30');

-- --------------------------------------------------------

--
-- Table structure for table `stock_returns`
--

CREATE TABLE `stock_returns` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `return_number` varchar(50) NOT NULL,
  `return_date` date DEFAULT NULL,
  `bill_to` varchar(30) NOT NULL,
  `bill_to_id` int(11) NOT NULL,
  `bill_to_code` varchar(30) DEFAULT NULL,
  `bill_to_name` varchar(250) NOT NULL,
  `bill_to_email` varchar(150) DEFAULT NULL,
  `bill_to_contact` varchar(15) DEFAULT NULL,
  `bill_to_address` text DEFAULT NULL,
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT NULL,
  `tax_option_id` int(11) DEFAULT NULL,
  `subtotal_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `shipping_charge` decimal(13,2) NOT NULL DEFAULT 0.00,
  `packing_charge` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_order_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `update_stock` tinyint(4) NOT NULL DEFAULT 0,
  `notes` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_return_products`
--

CREATE TABLE `stock_return_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `stock_return_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_slack` varchar(30) DEFAULT NULL,
  `product_code` varchar(30) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `quantity` decimal(8,2) NOT NULL DEFAULT 0.00,
  `amount_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `subtotal_amount_excluding_tax` decimal(13,2) NOT NULL DEFAULT 0.00,
  `discount_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `discount_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `total_after_discount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `tax_components` text DEFAULT NULL,
  `total_amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `stock_update` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_transfer`
--

CREATE TABLE `stock_transfer` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `stock_transfer_reference` varchar(30) NOT NULL,
  `from_store_id` int(11) NOT NULL,
  `from_store_code` varchar(30) DEFAULT NULL,
  `from_store_name` varchar(250) DEFAULT NULL,
  `to_store_id` int(11) NOT NULL,
  `to_store_code` varchar(30) DEFAULT NULL,
  `to_store_name` varchar(250) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_transfer_products`
--

CREATE TABLE `stock_transfer_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `stock_transfer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_slack` varchar(30) NOT NULL,
  `product_code` varchar(30) NOT NULL,
  `product_name` varchar(250) NOT NULL,
  `quantity` decimal(8,2) NOT NULL DEFAULT 0.00,
  `inward_type` varchar(30) DEFAULT NULL COMMENT 'MERGE, NEW',
  `accepted_quantity` decimal(8,2) DEFAULT NULL,
  `destination_product_id` int(11) DEFAULT NULL,
  `destination_product_slack` varchar(30) DEFAULT NULL,
  `destination_product_code` varchar(30) DEFAULT NULL,
  `destination_product_name` varchar(250) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_code` varchar(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `tax_number` varchar(250) DEFAULT NULL,
  `tax_code_id` int(11) DEFAULT NULL,
  `discount_code_id` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `country_id` int(11) NOT NULL,
  `pincode` varchar(15) DEFAULT NULL,
  `primary_contact` varchar(15) DEFAULT NULL,
  `secondary_contact` varchar(15) DEFAULT NULL,
  `primary_email` varchar(150) DEFAULT NULL,
  `invoice_type` varchar(50) NOT NULL DEFAULT 'SMALL',
  `currency_name` varchar(50) DEFAULT NULL,
  `currency_code` varchar(30) DEFAULT 'USD',
  `restaurant_mode` int(11) NOT NULL DEFAULT 0,
  `menu_language_id` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `online_payment` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`id`, `slack`, `store_code`, `name`, `tax_number`, `tax_code_id`, `discount_code_id`, `address`, `country_id`, `pincode`, `primary_contact`, `secondary_contact`, `primary_email`, `invoice_type`, `currency_name`, `currency_code`, `restaurant_mode`, `menu_language_id`, `status`, `online_payment`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(24, 'vkHmYyghIlYxAs64Mx17HcHq7', '173', 'Main Trust', 'main', NULL, NULL, 'main trust', 98, '1234', '8889400010', '9575485575', 'maintrust@gmail.com', 'SMALL_V2', 'Indian rupee', 'INR', 0, 0, 1, 1, 1, 4, '2024-09-21 14:33:07', '2024-09-21 14:45:33');

-- --------------------------------------------------------

--
-- Table structure for table `store_payment`
--

CREATE TABLE `store_payment` (
  `id` int(10) NOT NULL,
  `store_id` int(11) NOT NULL,
  `store_slack` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store_payment`
--

INSERT INTO `store_payment` (`id`, `store_id`, `store_slack`, `payment`, `created_at`, `updated_at`) VALUES
(61, 21, 'b7l6rPsCAkpZQ6GZ8HeMx3h6r', '12', '2024-09-16 13:46:00', '2024-09-16 13:46:00'),
(62, 22, 'nlWLhgoOoFKIYTwD0UnHySjC3', '123', '2024-09-17 10:26:30', '2024-09-17 10:26:30'),
(63, 22, 'nlWLhgoOoFKIYTwD0UnHySjC3', '112312', '2024-09-17 10:26:30', '2024-09-17 10:26:30'),
(64, 22, 'nlWLhgoOoFKIYTwD0UnHySjC3', '123123', '2024-09-17 10:26:30', '2024-09-17 10:26:30'),
(65, 23, 'KqbdZEhsr2U2ZOIw2knCftqOH', 'cash', '2024-09-18 13:05:01', '2024-09-18 13:05:01'),
(66, 23, 'KqbdZEhsr2U2ZOIw2knCftqOH', 'cheque', '2024-09-18 13:05:01', '2024-09-18 13:05:01'),
(67, 24, 'vkHmYyghIlYxAs64Mx17HcHq7', 'cash', '2024-09-21 14:33:07', '2024-09-21 14:33:07'),
(68, 24, 'vkHmYyghIlYxAs64Mx17HcHq7', 'cheque', '2024-09-21 14:33:07', '2024-09-21 14:33:07');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `supplier_code` varchar(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `pincode` varchar(15) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `slack`, `store_id`, `supplier_code`, `name`, `email`, `phone`, `address`, `pincode`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'JOl1PQlptI8Toe1b0xQD5KxKG', 21, 'SUP101', 'D1', '123@gmail.com', '2131231312', 'indore', '452010', 1, 1, NULL, '2024-09-18 06:48:48', '2024-09-18 06:48:48'),
(2, 'FWhcsbMjxzE4Zw9nK4vRweO1w', 24, 'SUP102', 'Supplier 1', '1212@gmail.com', '8889400010', 'main', '452010', 1, 1, 1, '2024-09-24 06:43:49', '2024-09-29 05:15:20');

-- --------------------------------------------------------

--
-- Table structure for table `targets`
--

CREATE TABLE `targets` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `month` date NOT NULL,
  `income` decimal(13,2) NOT NULL DEFAULT 999999.00,
  `expense` decimal(13,2) NOT NULL DEFAULT 99999.00,
  `sales` decimal(13,2) NOT NULL DEFAULT 999999.00,
  `net_profit` decimal(13,2) NOT NULL DEFAULT 999999.00,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tax_codes`
--

CREATE TABLE `tax_codes` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `label` varchar(250) NOT NULL,
  `tax_code` varchar(30) NOT NULL,
  `total_tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tax_code_type`
--

CREATE TABLE `tax_code_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `tax_code_id` int(11) NOT NULL,
  `tax_type` varchar(50) NOT NULL,
  `tax_percentage` decimal(8,2) NOT NULL DEFAULT 0.00,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `transaction_code` varchar(30) NOT NULL,
  `account_id` int(11) NOT NULL,
  `transaction_type` int(11) NOT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `bill_to` varchar(50) DEFAULT NULL COMMENT 'POS_ORDER, INVOICE, CUSTOMER, SUPPLIER',
  `bill_to_id` int(11) DEFAULT NULL,
  `bill_to_name` varchar(250) DEFAULT NULL,
  `bill_to_contact` varchar(150) DEFAULT NULL,
  `bill_to_address` text DEFAULT NULL,
  `currency_code` varchar(30) NOT NULL,
  `amount` decimal(13,2) NOT NULL DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `pg_transaction_id` varchar(250) DEFAULT NULL,
  `pg_transaction_status` varchar(100) DEFAULT NULL,
  `transaction_date` date DEFAULT NULL,
  `transaction_merged` tinyint(4) NOT NULL DEFAULT 0,
  `merged_from` int(11) DEFAULT NULL,
  `merged_to` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `user_code` varchar(30) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fresh_login` tinyint(1) NOT NULL DEFAULT 1,
  `password_reset_token` text DEFAULT NULL,
  `password_reset_max_tries` int(11) NOT NULL DEFAULT 0,
  `password_reset_last_tried_on` datetime DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `profile_image` text DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `slack`, `user_code`, `fullname`, `email`, `password`, `fresh_login`, `password_reset_token`, `password_reset_max_tries`, `password_reset_last_tried_on`, `phone`, `profile_image`, `role_id`, `store_id`, `language_id`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'XJ0699ZSWajyxvYRNt6CBZyGa', 'SA', 'Appsthing Admin', 'admin@appsthing.com', '$2y$10$3wMSDstnC/IDE7Kwv6FfUOqygz0vongvG0mxbtF1HAJAd3cyx6ozm', 0, NULL, 0, NULL, '8889400010', NULL, 1, 24, NULL, 1, NULL, NULL, '2021-11-26 08:57:25', '2024-10-08 06:56:08'),
(4, 'sKMArEMSbUkkkTEggsQJWPwJH', '104', 'Admin Trust', 'admin@trust.com', '$2y$10$2MjAl.9t5aQdKymLs3K16O5A97J4thS7HM7CjSDnIGVxPt88QGEs2', 1, NULL, 0, NULL, '1234567890', NULL, 4, 24, NULL, 1, 1, 1, '2024-09-21 14:44:01', '2024-09-29 03:41:22');

-- --------------------------------------------------------

--
-- Table structure for table `user_access_tokens`
--

CREATE TABLE `user_access_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `customer_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `session_id` text DEFAULT NULL,
  `access_token` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_access_tokens`
--

INSERT INTO `user_access_tokens` (`id`, `customer_id`, `user_id`, `session_id`, `access_token`, `created_at`, `updated_at`) VALUES
(144, 0, 1, 'S4AkVczBT8GsqWIqgp5Vqbo5DWtndLUbsiS0sBZz', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI3NTE0NjE3LCJleHAiOjE3Mjc2MDEwMTd9.H_Ov-Tb8IQ6Rt0CLx4yKQF3pg6hzXuPHJ7ozp1M-SPI', '2024-09-28 03:40:17', '2024-09-28 03:40:17'),
(145, 0, 1, 'KxN3n2VwpBQ76j2bPMRcHAN9y7glOXHjuMICAKz5', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI3NTk2NTY2LCJleHAiOjE3Mjc2ODI5NjZ9.vNM9v7TDb4lLOHnLK3NMkO0jS1MHtZV4NFg_pLTN_ZA', '2024-09-29 02:26:06', '2024-09-29 02:26:06'),
(147, 0, 1, 'OHEOfg32NewtbpdtcnG1h50211kfbZ3YRhXcBbom', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI4MDY3ODM5LCJleHAiOjE3MjgxNTQyMzl9.JK0I2ehfJdyG6uztSmgtQtb3emb3lcnbXdktFuQ2QGE', '2024-10-04 13:20:39', '2024-10-04 13:20:39'),
(148, 0, 1, 'j18CjzM0uAp3HgM6QMn1bUVFRXHfJCAxPJ9M0ftP', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI4MTIwNTM2LCJleHAiOjE3MjgyMDY5MzZ9.nAK9EG3x9L4yqbupTwXxNXTZy-8MpgMyw9umyqcqgEM', '2024-10-05 03:58:56', '2024-10-05 03:58:56'),
(149, 0, 1, 'ibvatARxILal2CdUhMUdR9M3FlIKiYyfrzBbtEwp', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI4MTMzNzYzLCJleHAiOjE3MjgyMjAxNjN9.1Wp063Q43uHrsQlU5aCiaoCnZYQcswBjVWEgwVy904M', '2024-10-05 07:39:23', '2024-10-05 07:39:23'),
(150, 0, 1, 'acBHkm1lj09J48KAJwHGynZk0XjhZMgw9Q7F2HWH', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI4MTU1MDUyLCJleHAiOjE3MjgyNDE0NTJ9.vfIzc-VAAgf215QYsXxPP-rGXV1hyuk96EwJ9zzlP6A', '2024-10-05 13:34:12', '2024-10-05 13:34:12'),
(153, 0, 1, 'c9FvndNBpl8l4hQioR03FVXtwVon2arHXk1XPcrE', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI4MjIwNjk5LCJleHAiOjE3MjgzMDcwOTl9.N85bMK9x-7ID5sl9WqtqpdcgSq0XgOoSLc57WRiKqpo', '2024-10-06 07:48:19', '2024-10-06 07:48:19'),
(172, 0, 1, '8sH2xXE7wrL0l3yPYIYBnUMa1Yg5softLuo1wGQh', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqd3RfdG9rZW4iLCJzdWIiOnsidXNlcl9pZCI6MSwidXNlcl9zbGFjayI6IlhKMDY5OVpTV2FqeXh2WVJOdDZDQlp5R2EifSwiaWF0IjoxNzI4MzkwMzgwLCJleHAiOjE3Mjg0NzY3ODB9.AkkmM101H1XY4GBLlk0p2A4gQhEAkl1btDEjWTc5ikU', '2024-10-08 06:56:20', '2024-10-08 06:56:20');

-- --------------------------------------------------------

--
-- Table structure for table `user_menus`
--

CREATE TABLE `user_menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_menus`
--

INSERT INTO `user_menus` (`id`, `user_id`, `menu_id`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(2, 1, 2, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(3, 1, 3, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(4, 1, 4, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(5, 1, 5, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(6, 1, 6, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(7, 1, 7, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(8, 1, 8, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(9, 1, 9, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(10, 1, 10, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(11, 1, 11, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(12, 1, 12, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(13, 1, 13, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(14, 1, 14, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(15, 1, 15, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(16, 1, 16, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(17, 1, 17, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(18, 1, 18, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(19, 1, 19, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(20, 1, 20, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(21, 1, 21, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(22, 1, 22, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(23, 1, 23, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(24, 1, 24, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(25, 1, 25, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(26, 1, 26, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(27, 1, 27, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(28, 1, 28, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(29, 1, 29, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(30, 1, 30, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(31, 1, 31, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(32, 1, 32, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(33, 1, 33, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(34, 1, 34, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(35, 1, 35, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(36, 1, 36, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(37, 1, 37, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(38, 1, 38, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(39, 1, 39, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(40, 1, 40, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(41, 1, 41, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(42, 1, 42, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(43, 1, 43, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(44, 1, 44, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(45, 1, 45, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(46, 1, 46, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(47, 1, 47, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(48, 1, 48, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(49, 1, 49, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(50, 1, 50, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(51, 1, 51, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(52, 1, 52, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(53, 1, 53, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(54, 1, 54, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(55, 1, 55, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(56, 1, 56, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(57, 1, 57, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(58, 1, 58, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(59, 1, 59, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(60, 1, 60, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(61, 1, 61, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(62, 1, 62, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(63, 1, 63, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(64, 1, 64, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(65, 1, 65, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(66, 1, 66, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(67, 1, 67, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(68, 1, 68, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(69, 1, 69, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(70, 1, 70, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(71, 1, 71, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(72, 1, 72, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(73, 1, 73, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(74, 1, 74, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(75, 1, 75, 1, '2021-11-26 08:57:25', '2021-11-26 08:57:25'),
(279, 3, 0, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(280, 3, 4, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(281, 3, 10, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(282, 3, 11, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(283, 3, 12, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(284, 3, 13, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(285, 3, 14, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(286, 3, 19, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(287, 3, 21, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(288, 3, 22, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(289, 3, 25, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(290, 3, 26, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(291, 3, 27, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(292, 3, 28, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(293, 3, 29, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(294, 3, 30, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(295, 3, 31, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(296, 3, 32, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(297, 3, 33, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(298, 3, 51, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(299, 3, 52, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(300, 3, 53, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(301, 3, 54, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(302, 3, 55, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(303, 3, 56, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(304, 3, 60, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(305, 3, 61, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(306, 3, 65, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(307, 3, 66, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(308, 3, 67, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(309, 3, 70, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(310, 3, 71, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(311, 3, 72, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(312, 3, 73, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(313, 3, 99, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(314, 3, 120, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(315, 3, 125, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(316, 3, 126, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(317, 3, 127, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(318, 3, 128, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(319, 3, 136, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(320, 3, 144, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(321, 3, 145, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(322, 3, 146, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(323, 3, 147, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(324, 3, 148, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(325, 3, 149, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(326, 3, 160, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(327, 3, 168, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(328, 3, 169, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(329, 3, 170, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(330, 3, 171, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(331, 3, 172, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(332, 3, 173, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(333, 3, 175, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(334, 3, 190, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(335, 3, 191, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(336, 3, 192, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(337, 3, 193, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(338, 3, 194, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(339, 3, 195, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(340, 3, 196, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(341, 3, 197, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(342, 3, 213, 1, '2024-09-19 15:20:41', '2024-09-19 15:20:41'),
(393, 4, 0, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(394, 4, 4, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(395, 4, 10, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(396, 4, 11, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(397, 4, 12, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(398, 4, 13, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(399, 4, 14, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(400, 4, 19, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(401, 4, 25, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(402, 4, 26, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(403, 4, 27, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(404, 4, 28, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(405, 4, 29, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(406, 4, 30, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(407, 4, 31, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(408, 4, 32, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(409, 4, 33, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(410, 4, 51, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(411, 4, 52, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(412, 4, 53, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(413, 4, 55, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(414, 4, 56, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(415, 4, 66, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(416, 4, 70, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(417, 4, 71, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(418, 4, 72, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(419, 4, 73, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(420, 4, 99, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(421, 4, 120, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(422, 4, 125, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(423, 4, 126, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(424, 4, 127, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(425, 4, 128, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(426, 4, 136, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(427, 4, 169, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(428, 4, 170, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(429, 4, 171, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(430, 4, 172, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(431, 4, 173, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(432, 4, 175, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(433, 4, 190, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(434, 4, 191, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(435, 4, 192, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(436, 4, 193, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(437, 4, 194, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(438, 4, 195, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(439, 4, 196, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(440, 4, 197, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(441, 4, 213, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(442, 4, 215, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37'),
(443, 4, 223, 1, '2024-09-29 03:40:37', '2024-09-29 03:40:37');

-- --------------------------------------------------------

--
-- Table structure for table `user_stores`
--

CREATE TABLE `user_stores` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_stores`
--

INSERT INTO `user_stores` (`id`, `user_id`, `store_id`, `created_by`, `created_at`, `updated_at`) VALUES
(5, 4, 24, 1, '2024-09-21 14:44:01', '2024-09-21 14:44:01');

-- --------------------------------------------------------

--
-- Table structure for table `variant_options`
--

CREATE TABLE `variant_options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slack` varchar(30) NOT NULL,
  `store_id` int(11) NOT NULL,
  `variant_option_code` varchar(30) NOT NULL,
  `label` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `variant_options`
--

INSERT INTO `variant_options` (`id`, `slack`, `store_id`, `variant_option_code`, `label`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'p4u5RlN7ZwLldByLwTsHdngAr', 1, 'VO101', '1', 1, 1, NULL, '2024-09-14 13:10:10', '2024-09-14 13:10:10'),
(2, '36K4solvY0e3Hn949wP14N3rt', 1, 'VO102', '2', 1, 1, NULL, '2024-09-14 13:10:17', '2024-09-14 13:10:17'),
(3, '7e05dEbUlXOObSPHtA62mmUoA', 1, 'VO103', '3', 1, 1, NULL, '2024-09-14 13:10:23', '2024-09-14 13:10:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accounts_slack_unique` (`slack`),
  ADD UNIQUE KEY `accounts_account_code_unique` (`account_code`),
  ADD KEY `accounts_store_id_account_type_status_index` (`store_id`,`account_type`,`status`);

--
-- Indexes for table `addon_groups`
--
ALTER TABLE `addon_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `addon_groups_slack_unique` (`slack`),
  ADD KEY `addon_group_indexes` (`store_id`,`addon_group_code`,`status`);

--
-- Indexes for table `addon_group_products`
--
ALTER TABLE `addon_group_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addon_group_products_product_id_addon_group_id_index` (`product_id`,`addon_group_id`);

--
-- Indexes for table `billing_counters`
--
ALTER TABLE `billing_counters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `billing_counters_slack_unique` (`slack`),
  ADD KEY `billing_counters_store_id_billing_counter_code_status_index` (`store_id`,`billing_counter_code`,`status`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bookings_slack_unique` (`slack`),
  ADD UNIQUE KEY `bookings_event_code_unique` (`event_code`),
  ADD KEY `bookings_store_id_start_date_end_date_email_phone_index` (`store_id`,`start_date`,`end_date`,`email`,`phone`);

--
-- Indexes for table `business_registers`
--
ALTER TABLE `business_registers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `business_registers_slack_unique` (`slack`),
  ADD KEY `business_register_indexes` (`user_id`,`store_id`),
  ADD KEY `business_registers_billing_counter_id_index` (`billing_counter_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_slack_unique` (`slack`),
  ADD KEY `category_status_store_id_category_code_index` (`status`,`store_id`,`category_code`);

--
-- Indexes for table `challan_orders`
--
ALTER TABLE `challan_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `challan_order_products`
--
ALTER TABLE `challan_order_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_status_index` (`status`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_slack_unique` (`slack`),
  ADD KEY `customers_email_phone_status_index` (`email`,`phone`,`status`);

--
-- Indexes for table `customer_menus`
--
ALTER TABLE `customer_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount_codes`
--
ALTER TABLE `discount_codes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `discount_codes_slack_unique` (`slack`),
  ADD KEY `discount_codes_status_store_id_discount_code_index` (`status`,`store_id`,`discount_code`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `invoices_slack_unique` (`slack`),
  ADD UNIQUE KEY `invoices_invoice_number_unique` (`invoice_number`),
  ADD KEY `invoice_indexes` (`store_id`,`invoice_reference`,`bill_to`,`bill_to_id`,`status`);

--
-- Indexes for table `invoice_products`
--
ALTER TABLE `invoice_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `invoice_products_slack_unique` (`slack`),
  ADD KEY `invoice_products_invoice_id_status_index` (`invoice_id`,`status`);

--
-- Indexes for table `keyboard_shortcuts`
--
ALTER TABLE `keyboard_shortcuts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `keyboard_shortcuts_keyboard_constant_unique` (`keyboard_constant`),
  ADD KEY `keyboard_shortcuts_status_keyboard_constant_index` (`status`,`keyboard_constant`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `languages_language_constant_unique` (`language_constant`),
  ADD UNIQUE KEY `languages_language_code_unique` (`language_code`),
  ADD KEY `language_tables_indexes` (`status`);

--
-- Indexes for table `master_account_type`
--
ALTER TABLE `master_account_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `master_account_type_account_type_constant_unique` (`account_type_constant`),
  ADD KEY `master_account_type_status_index` (`status`);

--
-- Indexes for table `master_billing_type`
--
ALTER TABLE `master_billing_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `master_billing_type_billing_type_constant_unique` (`billing_type_constant`),
  ADD KEY `master_billing_type_status_index` (`status`);

--
-- Indexes for table `master_date_format`
--
ALTER TABLE `master_date_format`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_invoice_print_type`
--
ALTER TABLE `master_invoice_print_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_order_type`
--
ALTER TABLE `master_order_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `master_order_type_order_type_constant_unique` (`order_type_constant`),
  ADD KEY `master_order_type_order_type_constant_status_index` (`order_type_constant`,`status`);

--
-- Indexes for table `master_status`
--
ALTER TABLE `master_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `master_status_key_value_value_constant_status_index` (`key`,`value`,`value_constant`,`status`);

--
-- Indexes for table `master_tax_option`
--
ALTER TABLE `master_tax_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `master_tax_option_tax_option_constant_unique` (`tax_option_constant`),
  ADD KEY `master_tax_option_status_index` (`status`);

--
-- Indexes for table `master_transaction_type`
--
ALTER TABLE `master_transaction_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `master_transaction_type_transaction_type_constant_unique` (`transaction_type_constant`),
  ADD KEY `master_transaction_type_status_index` (`status`);

--
-- Indexes for table `measurement_units`
--
ALTER TABLE `measurement_units`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `measurement_units_slack_unique` (`slack`),
  ADD KEY `measurement_units_unit_code_status_index` (`unit_code`,`status`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_menu_key_unique` (`menu_key`),
  ADD KEY `menus_type_menu_key_parent_status_index` (`type`,`menu_key`,`parent`,`status`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `notifications_slack_unique` (`slack`),
  ADD KEY `notification_indexes` (`user_id`,`status`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_slack_unique` (`slack`),
  ADD UNIQUE KEY `orders_order_number_unique` (`order_number`),
  ADD KEY `orders_customer_id_store_id_status_index` (`customer_id`,`store_id`,`status`),
  ADD KEY `orders_kitchen_status_index` (`kitchen_status`),
  ADD KEY `orders_register_id_index` (`register_id`),
  ADD KEY `orders_payment_method_id_index` (`payment_method_id`),
  ADD KEY `orders_order_origin_index` (`order_origin`),
  ADD KEY `orders_payment_status_order_merged_order_merge_parent_id_index` (`payment_status`,`order_merged`,`order_merge_parent_id`);

--
-- Indexes for table `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_products_slack_unique` (`slack`),
  ADD KEY `order_products_order_id_product_id_product_code_status_index` (`order_id`,`product_id`,`product_code`,`status`),
  ADD KEY `order_products_parent_order_product_id_index` (`parent_order_product_id`),
  ADD KEY `order_products_merged_from_merged_to_index` (`merged_from`,`merged_to`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `otp_event_type_user_id_customer_id_otp_index` (`event_type`,`user_id`,`customer_id`,`otp`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_methods_slack_unique` (`slack`),
  ADD KEY `payment_methods_status_index` (`status`),
  ADD KEY `payment_methods_activate_on_digital_menu_index` (`activate_on_digital_menu`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_slack_unique` (`slack`),
  ADD KEY `products_status_store_id_product_code_index` (`status`,`store_id`,`product_code`),
  ADD KEY `products_is_addon_product_is_ingredient_index` (`is_addon_product`,`is_ingredient`);

--
-- Indexes for table `product_addon_groups`
--
ALTER TABLE `product_addon_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_addon_groups_product_id_addon_group_id_index` (`product_id`,`addon_group_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_images_slack_unique` (`slack`),
  ADD KEY `product_images_product_id_index` (`product_id`);

--
-- Indexes for table `product_ingredients`
--
ALTER TABLE `product_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_ingredients_slack_unique` (`slack`),
  ADD KEY `product_ingredients_index` (`product_id`,`ingredient_product_id`,`measurement_unit_id`);

--
-- Indexes for table `product_variants`
--
ALTER TABLE `product_variants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_variants_slack_unique` (`slack`),
  ADD KEY `product_variants_product_id_variant_option_id_variant_code_index` (`product_id`,`variant_option_id`,`variant_code`);

--
-- Indexes for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `purchase_orders_slack_unique` (`slack`),
  ADD UNIQUE KEY `purchase_orders_po_number_unique` (`po_number`),
  ADD KEY `purchase_orders_store_id_po_number_supplier_id_status_index` (`store_id`,`po_number`,`customer_id`,`status`);

--
-- Indexes for table `purchase_order_products`
--
ALTER TABLE `purchase_order_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `purchase_order_products_slack_unique` (`slack`),
  ADD KEY `purchase_order_products_purchase_order_id_status_index` (`purchase_order_id`,`status`);

--
-- Indexes for table `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `quotations_slack_unique` (`slack`),
  ADD UNIQUE KEY `quotations_quotation_number_unique` (`quotation_number`),
  ADD KEY `quotation_indexes` (`store_id`,`quotation_number`,`quotation_reference`,`bill_to`,`bill_to_id`,`status`);

--
-- Indexes for table `quotation_products`
--
ALTER TABLE `quotation_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `quotation_products_slack_unique` (`slack`),
  ADD KEY `quotation_products_quotation_id_status_index` (`quotation_id`,`status`);

--
-- Indexes for table `restaurant_tables`
--
ALTER TABLE `restaurant_tables`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `restaurant_tables_slack_unique` (`slack`),
  ADD KEY `restaurant_tables_indexes` (`store_id`,`status`),
  ADD KEY `restaurant_tables_waiter_user_id_index` (`waiter_user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_slack_unique` (`slack`),
  ADD UNIQUE KEY `roles_role_code_unique` (`role_code`),
  ADD KEY `roles_status_index` (`status`);

--
-- Indexes for table `role_menus`
--
ALTER TABLE `role_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_menus_role_id_menu_id_index` (`role_id`,`menu_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD UNIQUE KEY `sessions_id_unique` (`id`);

--
-- Indexes for table `setting_app`
--
ALTER TABLE `setting_app`
  ADD KEY `setting_app_company_name_app_date_format_index` (`company_name`,`app_date_format`),
  ADD KEY `setting_app_app_title_index` (`app_title`);

--
-- Indexes for table `setting_mail`
--
ALTER TABLE `setting_mail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `setting_mail_slack_unique` (`slack`),
  ADD KEY `setting_mail_type_status_index` (`type`,`status`);

--
-- Indexes for table `setting_sms_gateways`
--
ALTER TABLE `setting_sms_gateways`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `setting_sms_gateways_slack_unique` (`slack`),
  ADD KEY `setting_sms_gateways_account_id_token_twilio_number_index` (`account_id`,`token`,`twilio_number`);

--
-- Indexes for table `sms_templates`
--
ALTER TABLE `sms_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sms_templates_slack_unique` (`slack`),
  ADD UNIQUE KEY `sms_templates_template_key_unique` (`template_key`),
  ADD KEY `sms_templates_status_index` (`status`);

--
-- Indexes for table `stock_returns`
--
ALTER TABLE `stock_returns`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stock_returns_slack_unique` (`slack`),
  ADD UNIQUE KEY `stock_returns_return_number_unique` (`return_number`),
  ADD KEY `return_indexes` (`store_id`,`bill_to`,`bill_to_id`,`status`);

--
-- Indexes for table `stock_return_products`
--
ALTER TABLE `stock_return_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stock_return_products_slack_unique` (`slack`),
  ADD KEY `stock_return_products_stock_return_id_status_index` (`stock_return_id`,`status`);

--
-- Indexes for table `stock_transfer`
--
ALTER TABLE `stock_transfer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stock_transfer_slack_unique` (`slack`),
  ADD UNIQUE KEY `stock_transfer_stock_transfer_reference_unique` (`stock_transfer_reference`),
  ADD KEY `stock_transfer_store_id_from_store_id_to_store_id_status_index` (`store_id`,`from_store_id`,`to_store_id`,`status`);

--
-- Indexes for table `stock_transfer_products`
--
ALTER TABLE `stock_transfer_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stock_transfer_products_slack_unique` (`slack`),
  ADD KEY `stock_transfer_product_indexes` (`stock_transfer_id`,`product_id`,`destination_product_id`,`status`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stores_slack_unique` (`slack`),
  ADD UNIQUE KEY `stores_store_code_unique` (`store_code`),
  ADD KEY `stores_status_index` (`status`),
  ADD KEY `stores_restaurant_mode_index` (`restaurant_mode`),
  ADD KEY `menu_otp_language_index` (`menu_language_id`);

--
-- Indexes for table `store_payment`
--
ALTER TABLE `store_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `suppliers_slack_unique` (`slack`),
  ADD KEY `suppliers_status_store_id_supplier_code_index` (`status`,`store_id`,`supplier_code`);

--
-- Indexes for table `targets`
--
ALTER TABLE `targets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `targets_slack_unique` (`slack`),
  ADD KEY `targets_store_id_month_index` (`store_id`,`month`);

--
-- Indexes for table `tax_codes`
--
ALTER TABLE `tax_codes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tax_codes_slack_unique` (`slack`),
  ADD KEY `tax_codes_status_store_id_tax_code_index` (`status`,`store_id`,`tax_code`);

--
-- Indexes for table `tax_code_type`
--
ALTER TABLE `tax_code_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tax_code_type_tax_code_id_index` (`tax_code_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transactions_slack_unique` (`slack`),
  ADD UNIQUE KEY `transactions_transaction_code_unique` (`transaction_code`),
  ADD KEY `transaction_indexes` (`store_id`,`account_id`,`transaction_type`,`bill_to`,`bill_to_id`),
  ADD KEY `transactions_merged_from_merged_to_index` (`merged_from`,`merged_to`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_slack_unique` (`slack`),
  ADD UNIQUE KEY `users_user_code_unique` (`user_code`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_status_index` (`status`),
  ADD KEY `users_language_id_index` (`language_id`);

--
-- Indexes for table `user_access_tokens`
--
ALTER TABLE `user_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `user_menus`
--
ALTER TABLE `user_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_menus_user_id_menu_id_index` (`user_id`,`menu_id`);

--
-- Indexes for table `user_stores`
--
ALTER TABLE `user_stores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_stores_user_id_store_id_index` (`user_id`,`store_id`);

--
-- Indexes for table `variant_options`
--
ALTER TABLE `variant_options`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `variant_options_slack_unique` (`slack`),
  ADD KEY `variant_option_indexes` (`store_id`,`variant_option_code`,`status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `addon_groups`
--
ALTER TABLE `addon_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `addon_group_products`
--
ALTER TABLE `addon_group_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `billing_counters`
--
ALTER TABLE `billing_counters`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_registers`
--
ALTER TABLE `business_registers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `challan_orders`
--
ALTER TABLE `challan_orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `challan_order_products`
--
ALTER TABLE `challan_order_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=242;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `customer_menus`
--
ALTER TABLE `customer_menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `discount_codes`
--
ALTER TABLE `discount_codes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice_products`
--
ALTER TABLE `invoice_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `keyboard_shortcuts`
--
ALTER TABLE `keyboard_shortcuts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `master_account_type`
--
ALTER TABLE `master_account_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `master_billing_type`
--
ALTER TABLE `master_billing_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `master_date_format`
--
ALTER TABLE `master_date_format`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `master_invoice_print_type`
--
ALTER TABLE `master_invoice_print_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_order_type`
--
ALTER TABLE `master_order_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `master_status`
--
ALTER TABLE `master_status`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `master_tax_option`
--
ALTER TABLE `master_tax_option`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_transaction_type`
--
ALTER TABLE `master_transaction_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `measurement_units`
--
ALTER TABLE `measurement_units`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_addon_groups`
--
ALTER TABLE `product_addon_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_ingredients`
--
ALTER TABLE `product_ingredients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_variants`
--
ALTER TABLE `product_variants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `purchase_order_products`
--
ALTER TABLE `purchase_order_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quotation_products`
--
ALTER TABLE `quotation_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant_tables`
--
ALTER TABLE `restaurant_tables`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `role_menus`
--
ALTER TABLE `role_menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=367;

--
-- AUTO_INCREMENT for table `setting_mail`
--
ALTER TABLE `setting_mail`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `setting_sms_gateways`
--
ALTER TABLE `setting_sms_gateways`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sms_templates`
--
ALTER TABLE `sms_templates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stock_returns`
--
ALTER TABLE `stock_returns`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_return_products`
--
ALTER TABLE `stock_return_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_transfer`
--
ALTER TABLE `stock_transfer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_transfer_products`
--
ALTER TABLE `stock_transfer_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `store_payment`
--
ALTER TABLE `store_payment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `targets`
--
ALTER TABLE `targets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tax_codes`
--
ALTER TABLE `tax_codes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tax_code_type`
--
ALTER TABLE `tax_code_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_access_tokens`
--
ALTER TABLE `user_access_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT for table `user_menus`
--
ALTER TABLE `user_menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=444;

--
-- AUTO_INCREMENT for table `user_stores`
--
ALTER TABLE `user_stores`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `variant_options`
--
ALTER TABLE `variant_options`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
