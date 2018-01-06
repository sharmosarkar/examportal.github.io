CREATE DATABASE  IF NOT EXISTS `ArindamMitraExam` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ArindamMitraExam`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: arindammitraexam.cnomz21blikj.us-west-2.rds.amazonaws.com    Database: ArindamMitraExam
-- ------------------------------------------------------
-- Server version	5.6.37-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `LevelDetails`
--

DROP TABLE IF EXISTS `LevelDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LevelDetails` (
  `Level` int(11) NOT NULL,
  `TestCount` int(11) NOT NULL,
  `TotalQuestionCount` varchar(45) NOT NULL,
  PRIMARY KEY (`Level`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LevelDetails`
--

LOCK TABLES `LevelDetails` WRITE;
/*!40000 ALTER TABLE `LevelDetails` DISABLE KEYS */;
INSERT INTO `LevelDetails` VALUES (1,5,'15'),(2,3,'6');
/*!40000 ALTER TABLE `LevelDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `QuestionSequence`
--

DROP TABLE IF EXISTS `QuestionSequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QuestionSequence` (
  `UserId` int(11) NOT NULL,
  `TestId` int(11) NOT NULL,
  `Seq` varchar(45) NOT NULL,
  PRIMARY KEY (`UserId`,`TestId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `QuestionSequence`
--

LOCK TABLES `QuestionSequence` WRITE;
/*!40000 ALTER TABLE `QuestionSequence` DISABLE KEYS */;
INSERT INTO `QuestionSequence` VALUES (1,1,'14,13,1'),(1,2,'12,9,11'),(1,3,'6,2,5'),(1,4,'15,7,4'),(1,5,'3,10,8');
/*!40000 ALTER TABLE `QuestionSequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questions`
--

DROP TABLE IF EXISTS `Questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Questions` (
  `QuestionNo` int(11) NOT NULL,
  `Question` varchar(250) CHARACTER SET utf8 NOT NULL,
  `Level` int(11) NOT NULL,
  `QuestionType` varchar(45) NOT NULL,
  `Op1` varchar(250) NOT NULL,
  `Op1Type` varchar(45) NOT NULL,
  `Op2` varchar(250) NOT NULL,
  `Op2Tpe` varchar(45) NOT NULL,
  `Op3` varchar(250) NOT NULL,
  `Op3Type` varchar(45) NOT NULL,
  `Op4` varchar(250) NOT NULL,
  `Op4Type` varchar(45) NOT NULL,
  `Topic` varchar(45) NOT NULL,
  `CorrectAns` varchar(45) NOT NULL,
  PRIMARY KEY (`QuestionNo`,`Level`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questions`
--

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;
INSERT INTO `Questions` VALUES (1,'Which of the following pairs of physical quantities have the same dimensions?',1,'T','momentum and impulse','T','energy and surface energy','T','momentum and angular momentum','T','force and surface tension','T','Topic 1','Op2'),(1,'A light ray is incident on a glass prism with one angle of 90 ̊and the other angle θ. If θ is less than the critical angle for glass-air boundary, which of the following is correct for the emerging ray from the opposite face of the prism?',2,'T','https://www.dropbox.com/s/g47fvuvswm9gvmp/2_1_op_1.PNG?raw=1','I','https://www.dropbox.com/s/q39b3g5nc39wh1s/2_1_op_2.PNG?raw=1','I','https://www.dropbox.com/s/s675hylavnu23x3/2_1_op_3.PNG?raw=1','I','https://www.dropbox.com/s/h4zhjwi6z1iuxz9/2_1_op_4.PNG?raw=1','I','Topic 3','Op3'),(2,'https://www.dropbox.com/s/msb7vi8fylsycmp/1_2.PNG?raw=1',1,'I','2V','T','8V','T','4V','T','16V','T','Topic 1','Op1'),(2,'An object is placed in front of a converging lens at a distance greater than 2F. The image produced by the lens is:',2,'T','Real, inverted and demagnified','T','Real, inverted and magnified','T','Virtual, upright and magnified','T','Virtual, upright and demagnified','T','Topic 1','Op1'),(3,'https://www.dropbox.com/s/nqgzv883ayha2l5/1_3.PNG?raw=1',1,'I','P2 = 417 mW, P4 = 193 mW, P6 = 166 mW','T','P2 = 407 mW, P4 = 183 mW, P6 = 156 mW','T','P2 = 397 mW, P4 = 173 mW, P6 = 146 mW','T','P2 = 387 mW, P4 = 163 mW, P6 = 136 mW','T','Topic 2','Op1'),(3,'https://www.dropbox.com/s/ynj0bhhl2fmfatv/2_3.PNG?raw=1',2,'I','https://www.dropbox.com/s/gyx8imc02rmg8pb/2_3_op1.PNG?raw=1','I','https://www.dropbox.com/s/z1xgrv3k4xxr21t/2_3_op2.PNG?raw=1','I','https://www.dropbox.com/s/okqj5fzmscoix0y/2_3_op3.PNG?raw=1','I','https://www.dropbox.com/s/t5fjhf90s49lfcf/2_3_op4.PNG?raw=1','I','Topic 3','Op2'),(4,'A very narrow light ray AB strikes the surface of a concave mirror as shown on the diagram. Which of the following diagrams represents the reflected ray?',1,'T','https://www.dropbox.com/s/fap6eogntvk0fw0/4_op_1.PNG?raw=1','I','https://www.dropbox.com/s/2j1zf2txcs2pbpq/4_op_2.PNG?raw=1','I','https://www.dropbox.com/s/1u504308kbs8ihd/4_op_3.PNG?raw=1','I','https://www.dropbox.com/s/doqegrc6l94d428/4_op_4.PNG?raw=1','I','Topic 3','Op2'),(4,'https://www.dropbox.com/s/0fe2n9x3rg9f6at/2_4.PNG?raw=1',2,'I','https://www.dropbox.com/s/w1njkq3aug4q0ic/2_4_op1.PNG?raw=1','I','https://www.dropbox.com/s/r6s1fa6a2c6r3jr/2_4_op2.PNG?raw=1','I','https://www.dropbox.com/s/s7ki4kluyrin0bs/2_4_op3.PNG?raw=1','I','https://www.dropbox.com/s/8rv9dmfb2vnwp48/2_4_op4.PNG?raw=1','I','Topic 2','Op1'),(5,'https://www.dropbox.com/s/272vdgujv3eig67/5.PNG?raw=1',1,'I','https://www.dropbox.com/s/4013hnsihxj5v0j/5_op_1.PNG?raw=1','I','https://www.dropbox.com/s/63qi55j1p7e1vaj/5_op_2.PNG?raw=1','I','https://www.dropbox.com/s/hl17gqhzyg4rno4/5_op_3.PNG?raw=1','I','https://www.dropbox.com/s/ute3lzapj2p5bnk/5_op_4.PNG?raw=1','I','Topic 3','Op1'),(5,'https://www.dropbox.com/s/yhhl8sq8x5xvjbo/2_5.PNG?raw=1',2,'I','75°C','T','67°C','T','25°C','T','33°C','T','Topic 1','Op1'),(6,'A light ray is incident on a glass prism with one angle of 90 ̊and the other angle θ. If θ is greater than the critical angle for glass-air boundary, which of the following is correct for the emerging ray from the opposite face of the prism?',1,'T','https://www.dropbox.com/s/sxf9vfd20t432p7/6_op_1.PNG?raw=1','I','https://www.dropbox.com/s/721ninwtonqvang/6_op_2.PNG?raw=1','I','https://www.dropbox.com/s/i8p3qa11niqx8fr/6_op_3.PNG?raw=1','I','https://www.dropbox.com/s/t3ezotepzywr5vt/6_op_4.PNG?raw=1','I','Topic 2','Op1'),(6,'https://www.dropbox.com/s/yhhl8sq8x5xvjbo/2_5.PNG?raw=1',2,'I','currents in the paths AD, DB and DC are in the ratio of 1 : 2 : 3','T',' currents in the paths AB, DB and DC are in the ratio of  3 : 2 : 1','T','the point D will be at a potential of 60 V','T','the point D will be at a potential of 20 V','T','Topic 3','Op3'),(7,'Which of the following functions of space and time defines a wave with speed v in the negative x direction?',1,'T','f(x-vt)','T','f(x+vt)','T','f(vt-x)','T','f(vx-t)','T','Topic 2','Op2'),(8,'https://www.dropbox.com/s/pnp3cn7b6wpwcfz/8.PNG?raw=1',1,'I','https://www.dropbox.com/s/4enlrmft201izo7/8_op1.PNG?raw=1','I','https://www.dropbox.com/s/1m0qvjl29kiqtya/8_op2.PNG?raw=1','I','https://www.dropbox.com/s/1v6wwvz4g4nvif9/8_op3.PNG?raw=1','I','https://www.dropbox.com/s/8i19jptdshk6z5w/8_op4.PNG?raw=1','I','Topic 1','Op4'),(9,'Which of the following is true: I) A reflected beam always has the same irradiance as the incident beam; II) a reflected beam lies in the same plane as the incident beam; III) a reflected beam always makes an angle θ = sin-1(n t/n i) with the normal ',1,'T','I only','T','I and II','T','II and III','T','II only','T','Topic 1','Op4'),(10,'https://www.dropbox.com/s/sad0jptn2iu1au2/10.PNG?raw=1',1,'I','https://www.dropbox.com/s/fib6iheiwq91gov/10_op1.PNG?raw=1','I','https://www.dropbox.com/s/8j6u291qj3ebqgq/10_op2.PNG?raw=1','I','https://www.dropbox.com/s/8ygjovuvlft8uwu/10_op3.PNG?raw=1','I','https://www.dropbox.com/s/d6cyh1vy1q4nyip/10_op4.PNG?raw=1','I','Topic 3','Op1'),(11,'https://www.dropbox.com/s/5h2f36p8c0x05y3/11.PNG?raw=1',1,'I','Brightness of the bulb, B1 decreases and that of B2 increases','T','Brightness of the bulb B1 and B2 decreases','T','Brightness of the bulb B1 increases and that of B2 decreases','T','Brightness of the bulb B1 and B2 increases','T','Topic 2','Op1'),(12,'https://www.dropbox.com/s/6l5sekmtooqhxvp/12.PNG?raw=1',1,'I','https://www.dropbox.com/s/o8kfskb1yksr0tp/12_op_1.PNG?raw=1','I','https://www.dropbox.com/s/xgi3pm253df6jtf/12_op_2.PNG?raw=1','I','https://www.dropbox.com/s/mwyaeqspiby1wiz/12_op_3.PNG?raw=1','I','https://www.dropbox.com/s/im9vy7mzctd5s8p/12_op_4.PNG?raw=1','I','Topic 3','Op1'),(13,'https://www.dropbox.com/s/jrtb5g8psawv313/13.PNG?raw=1',1,'I','red colour from blue and green','T','blue colour from red and green','T','green colour from red and blue','T','all the three colours','T','Topic 2','Op1'),(14,'https://www.dropbox.com/s/lkrynpz6v38bwvo/14.PNG?raw=1',1,'I','10 kgm2','T','6 kgm2','T','8 kgm2','T','4 kgm2','T','Topic 1','Op2'),(15,'A boy is trying to catch a fish from a lake. Which of the following diagrams represents the image of the fish observed the boy?',1,'T','https://www.dropbox.com/s/arqc2ziujt8i7yh/15_op_1.PNG?raw=1','I','https://www.dropbox.com/s/x5lc8tdse4psc73/15_op_2.PNG?raw=1','I','https://www.dropbox.com/s/yq0hde8s0que4tv/15_op_3.PNG?raw=1','I','https://www.dropbox.com/s/gxay62lmey764ks/15_op_4.PNG?raw=1','I','Topic 2','Op3');
/*!40000 ALTER TABLE `Questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Test`
--

DROP TABLE IF EXISTS `Test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Test` (
  `Id` int(11) NOT NULL,
  `Level` int(11) DEFAULT NULL,
  `TestNo` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Test`
--

LOCK TABLES `Test` WRITE;
/*!40000 ALTER TABLE `Test` DISABLE KEYS */;
INSERT INTO `Test` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,2,1),(7,2,2),(8,2,3);
/*!40000 ALTER TABLE `Test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `FName` varchar(45) NOT NULL,
  `LName` varchar(45) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Arindam','Mitra','admin','admin',0,''),('Dummy','Student','dummy','dummy',1,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-05 22:04:08
