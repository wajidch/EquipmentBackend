-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2019 at 09:43 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `equipmentdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT 0,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `subject`, `message`, `deleted`, `date`) VALUES
(1, 'High test', 'Testing is my aim to start work in very famouse way so nice to meet you thank you', 0, '2019-07-08 00:00:00'),
(2, 'Test', 'sdfsd', 0, '2019-07-09 00:00:00'),
(3, 'Server down', 'Hi server will down for two days please take backup and wait for next announcement Thanks', 0, NULL),
(4, 'Subject', 'HI there is tesing for announcement if anyone found announcemnet let me know tahnks', 0, NULL),
(5, 'ab to ho jy', 'Yar ab jo hai testing hai full ab ho gi date add to show ho jay ga', 0, '2019-07-11 17:15:42'),
(6, 'Server Up', 'Now our server is up you people can start work on all of serve side guy come in meeting room at 5:00PM kindly bring your laptop with you and team lead prepare task list which are done and which are pending\nthanks', 0, '2019-07-11 17:22:43'),
(7, 'hih', 'qew', 0, '2019-07-11 17:51:40'),
(8, 'Issue in bhook', 'Both bhook lgi hai subha se kuch ni kahya pta n i kb kahna mely ga to es lia ap log resat krain tb tk', 0, '2019-07-12 15:38:04'),
(9, 'New Announcement', 'Hi', 0, '2019-07-12 15:58:20'),
(10, 'hi ', 'hiasd', 0, '2019-07-12 16:00:06'),
(11, 'Great work Mr Wajid', 'Hi wajid your perform well thats why we decide to gift you honda city 2019 thats why i put announcement here to motivate other people thanks and keep it up congrate ', 0, '2019-07-14 08:43:00'),
(12, 'New Announcement', 'Check week announcement', 0, '2019-07-17 04:44:28');

-- --------------------------------------------------------

--
-- Table structure for table `equipments`
--

CREATE TABLE `equipments` (
  `id` int(11) NOT NULL,
  `serialNo` varchar(45) DEFAULT NULL,
  `equipmentType` varchar(45) DEFAULT NULL,
  `equipmentName` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `lifespan` varchar(45) DEFAULT NULL,
  `leaseStatus` varchar(45) DEFAULT NULL,
  `leasePeriod` datetime DEFAULT NULL,
  `insuranceHistory` varchar(45) DEFAULT NULL,
  `device1` varchar(45) DEFAULT NULL,
  `device2` varchar(45) DEFAULT NULL,
  `device3` varchar(45) DEFAULT NULL,
  `accessories1` varchar(45) DEFAULT NULL,
  `accessories2` varchar(45) DEFAULT NULL,
  `accessories3` varchar(45) DEFAULT NULL,
  `deleted` tinyint(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `equipments`
--

INSERT INTO `equipments` (`id`, `serialNo`, `equipmentType`, `equipmentName`, `brand`, `model`, `lifespan`, `leaseStatus`, `leasePeriod`, `insuranceHistory`, `device1`, `device2`, `device3`, `accessories1`, `accessories2`, `accessories3`, `deleted`) VALUES
(12, '324', NULL, 'asa', NULL, NULL, NULL, NULL, '2019-07-17 06:30:00', NULL, 'as', 'zxcf', 'dsf', '323', 'as', 'ds', 1),
(13, 'UIT892', NULL, 'Camera', NULL, NULL, NULL, NULL, '2019-07-18 00:00:00', NULL, 'j', 'j', NULL, 'Namw', 'jjjJ', 'j', 0),
(14, NULL, 'w', NULL, 'vvg', '454', 'vj', 'e', '2019-07-27 00:00:00', 'hj', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(15, '32', NULL, 'y', NULL, NULL, NULL, NULL, '2019-07-20 00:00:00', NULL, 'yy', 'y', 'y', 'y', 'y', 'y', 0),
(16, 'as', NULL, 'h', NULL, NULL, NULL, NULL, '2019-07-13 00:00:00', NULL, 'h', 'h', 'h', 'h', 'h', 'h', 1),
(17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(18, NULL, 'n', NULL, 'n', 'lahore', 'n', 'n', '2019-07-26 00:00:00', 'n', NULL, NULL, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `mobile_no` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `job_title` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `profile_picture` varchar(100) DEFAULT NULL,
  `role` enum('Staff','Admin') DEFAULT 'Staff',
  `deleted` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `staff_id`, `first_name`, `last_name`, `email`, `mobile_no`, `password`, `job_title`, `department`, `profile_picture`, `role`, `deleted`) VALUES
(1, 1245, 'wajid javed', NULL, 'admin@gmail.com', '03315887897', '123', 'Admin', 'Admin', 'blue-wing-and-black-football.png', 'Admin', 0),
(2, 88, 'ali', 'j', 'wQ@hh.com', '0998989', '7888', 'software', 'hi', 'hj.jpg', 'Admin', 0),
(3, 123, 'staff', 'test', 'staff@gmail.com', '033157865647', '123', 'Software Engineer', 'IT', NULL, 'Admin', 0),
(4, 123, 'as', 'dsq', 'as', 's', '1234', 's', 's', NULL, 'Staff', 0),
(5, 12, '1', '1', '1', '1', '123', '11', '11', NULL, 'Staff', 0),
(6, 123, 'wajid', 'javed', 'wajidjaved17@gmail.com', '0332873287', '123', 'K', 'SE', NULL, 'Staff', 0),
(7, 232, 'n', 'wajid.javed@gmail.com', 'nj', 'n', '123', 'n', 'n', NULL, 'Admin', 0),
(8, 123, 'aw', 'aw', 'wajidjavedsd17@gmail.com', 'aw', '1234', 'j', 'aw', NULL, 'Staff', 0),
(9, 123, 'sa', 'j', 'wajidjaved2317@gmail.com', 'j', '123', 'j', 'jj', NULL, 'Staff', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipments`
--
ALTER TABLE `equipments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `equipments`
--
ALTER TABLE `equipments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
