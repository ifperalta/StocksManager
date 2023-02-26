/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.1.38-MariaDB : Database - stk_pm_db
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`stk_pm_db` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `stk_pm_db`;

/*Table structure for table `stk_pm_lists` */

DROP TABLE IF EXISTS `stk_pm_lists`;

CREATE TABLE `stk_pm_lists` (
  `stk_lists_id` bigint(20) unsigned NOT NULL,
  `stk_uid` varchar(50) NOT NULL,
  `stk_lists_ticker` varchar(50) NOT NULL DEFAULT '0',
  `stk_lists_sector_id` int(10) NOT NULL,
  `stk_lists_sector` varchar(250) NOT NULL,
  `stk_lists_status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `stk_pm_lists` */

LOCK TABLES `stk_pm_lists` WRITE;

UNLOCK TABLES;

/*Table structure for table `stk_pm_portfolio` */

DROP TABLE IF EXISTS `stk_pm_portfolio`;

CREATE TABLE `stk_pm_portfolio` (
  `stk_ID` int(10) NOT NULL AUTO_INCREMENT,
  `stk_uid` varchar(10) NOT NULL,
  `stk_user_id` varchar(100) NOT NULL,
  `stk_portfolio_name` varchar(200) NOT NULL,
  `stk_portfolio_description` varchar(250) NOT NULL,
  `stk_portfolio_date` datetime NOT NULL,
  `stk_portfolio_status` int(11) NOT NULL DEFAULT '0',
  KEY `stk_ID` (`stk_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `stk_pm_portfolio` */

LOCK TABLES `stk_pm_portfolio` WRITE;

UNLOCK TABLES;

/*Table structure for table `stk_pm_sectors` */

DROP TABLE IF EXISTS `stk_pm_sectors`;

CREATE TABLE `stk_pm_sectors` (
  `stk_sector_id` int(10) unsigned NOT NULL,
  `stk_sector_name` varchar(100) NOT NULL DEFAULT '0',
  `stk_lists_status` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `stk_pm_sectors` */

LOCK TABLES `stk_pm_sectors` WRITE;

UNLOCK TABLES;

/*Table structure for table `stk_pm_usermeta` */

DROP TABLE IF EXISTS `stk_pm_usermeta`;

CREATE TABLE `stk_pm_usermeta` (
  `stk_meta_id` int(10) unsigned NOT NULL,
  `stk_user_id` int(10) unsigned NOT NULL DEFAULT '0',
  `stk_lists_id` int(10) NOT NULL,
  `stk_meta_status` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `stk_pm_usermeta` */

LOCK TABLES `stk_pm_usermeta` WRITE;

UNLOCK TABLES;

/*Table structure for table `stk_pm_users` */

DROP TABLE IF EXISTS `stk_pm_users`;

CREATE TABLE `stk_pm_users` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `stk_user_id` varchar(10) NOT NULL,
  `stk_user_fname` varchar(60) NOT NULL,
  `stk_user_lname` varchar(100) NOT NULL,
  `stk_user_pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `stk_user_username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `stk_user_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `stk_user_phone` varchar(100) NOT NULL,
  `stk_user_registered` datetime NOT NULL,
  `stk_user_activation_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `stk_user_status` int(5) NOT NULL DEFAULT '0',
  `stk_user_display_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `islogged` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `stk_pm_users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
