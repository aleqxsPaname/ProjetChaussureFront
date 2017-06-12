-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Lun 12 Juin 2017 à 09:57
-- Version du serveur :  5.7.17-log
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `chaussures`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id_admin` bigint(20) NOT NULL,
  `email_admin` varchar(255) DEFAULT NULL,
  `nom_admin` varchar(255) DEFAULT NULL,
  `prenom_admin` varchar(255) DEFAULT NULL,
  `mdp_admin` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id_admin`, `email_admin`, `nom_admin`, `prenom_admin`, `mdp_admin`) VALUES
(1, 'ali@ali.fr', 'admin1', 'admin1', '123'),
(2, 'didi@did.fr', 'admin2', 'admin2', '123');

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id_article` bigint(20) NOT NULL,
  `quantite_stock` int(11) DEFAULT NULL,
  `taille` double DEFAULT NULL,
  `id_model` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `article`
--

INSERT INTO `article` (`id_article`, `quantite_stock`, `taille`, `id_model`) VALUES
(1, 10, 39, 1),
(2, 5, 40, 1),
(3, 10, 41, 1),
(4, 10, 42, 1),
(5, 10, 27, 13),
(6, 0, 28, 13),
(7, 10, 29, 13),
(12, 44, 39, 2),
(13, 2, 41, 2),
(14, 2, 43, 2),
(19, 2, 22, 4),
(20, 12, 23, 4),
(21, 0, 24, 4),
(30, 10, 39, 6),
(31, 5, 40, 6),
(32, 10, 41, 6),
(33, 10, 42, 6),
(34, 10, 39, 7),
(35, 5, 40, 7),
(36, 10, 41, 7),
(37, 10, 42, 7),
(38, 10, 39, 8),
(43, 5, 40, 8),
(44, 10, 41, 8),
(45, 10, 42, 8),
(46, 10, 39, 9),
(47, 5, 40, 9),
(48, 10, 41, 9),
(49, 10, 42, 9),
(53, 0, 39, 12),
(54, 1, 40, 12),
(55, 10, 41, 12),
(56, 10, 42, 12),
(57, 10, 22, 3),
(58, 5, 23, 3),
(59, 10, 24, 3),
(60, 10, 25, 3),
(61, 10, 27, 3),
(62, 0, 28, 3),
(63, 10, 29, 3),
(64, 10, 27, 11),
(65, 0, 28, 11),
(66, 10, 29, 11),
(67, 10, 39, 10),
(68, 0, 40, 10),
(69, 10, 41, 10),
(70, 1, 42, 10),
(71, 0, 39, 5),
(72, 10, 41, 5),
(73, 1, 42, 5);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id_categorie` bigint(20) NOT NULL,
  `nom_cat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom_cat`) VALUES
(1, 'Home'),
(2, 'Femme'),
(3, 'Enfant'),
(4, 'Nouveauté');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id_client`, `adresse`, `email`, `mdp`, `nom`, `prenom`) VALUES
(1, 'adresse1', 'email1', 'mdp1', 'nom1', 'prenom1'),
(2, 'adress2', 'email2', 'mdp2', 'nom2', 'prenom3');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id_commande` bigint(20) NOT NULL,
  `adresse_livraison` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `id_client` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `commande`
--

INSERT INTO `commande` (`id_commande`, `adresse_livraison`, `date`, `id_client`) VALUES
(1, 'adresse livr1', '0000-00-00 00:00:00', 1),
(2, 'adresse livr2', '0000-00-00 00:00:00', 2);

-- --------------------------------------------------------

--
-- Structure de la table `ligne_de_commande`
--

CREATE TABLE `ligne_de_commande` (
  `id_ligne_cmde` bigint(20) NOT NULL,
  `quantite` int(11) DEFAULT NULL,
  `id_article` bigint(20) DEFAULT NULL,
  `id_commande` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `ligne_de_commande`
--

INSERT INTO `ligne_de_commande` (`id_ligne_cmde`, `quantite`, `id_article`, `id_commande`) VALUES
(1, 2, 1, NULL),
(2, 6, 2, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `model`
--

CREATE TABLE `model` (
  `id_model` bigint(20) NOT NULL,
  `couleur` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `nom_model` varchar(255) DEFAULT NULL,
  `prix_unitaire` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `model`
--

INSERT INTO `model` (`id_model`, `couleur`, `description`, `nom_model`, `prix_unitaire`) VALUES
(1, 'Blanche', 'La Umberto est un richelieu résolument tendance qui sait toutefois rester sage. Sa ligne est simplement mise en exergue pas un très élégant remplié, qui court le long de sa claque en dessinant une vague. Côté construction, la Umberto est en cousu Blake, procédé reconnu pour sa flexibilité et son confort. La Umberto se mariera à merveille avec vos costumes, notamment vos tenues de cérémonie. Portée avec un jean, elle vous donnera tout de suite un côté dandy très chic.', 'Nike Sportswear AIR PRESTO ESSENTIAL - legion ', 56),
(2, 'Noir', 'La Umberto est un richelieu résolument tendance qui sait toutefois rester sage. Sa ligne est simplement mise en exergue pas un très élégant remplié, qui court le long de sa claque en dessinant une vague. Côté construction, la Umberto est en cousu Blake, procédé reconnu pour sa flexibilité et son confort. La Umberto se mariera à merveille avec vos costumes, notamment vos tenues de cérémonie. Portée avec un jean, elle vous donnera tout de suite un côté dandy très chic.', 'Puma ICRA TRAINER - Baskets basses - peacoatwhite', 76),
(3, 'Rose', 'La Umberto est un richelieu résolument tendance qui sait toutefois rester sage. Sa ligne est simplement mise en exergue pas un très élégant remplié, qui court le long de sa claque en dessinant une vague. Côté construction, la Umberto est en cousu Blake, procédé reconnu pour sa flexibilité et son confort. La Umberto se mariera à merveille avec vos costumes, notamment vos tenues de cérémonie. Portée avec un jean, elle vous donnera tout de suite un côté dandy très chic.', 'adidas Originals STAN SMITH run white', 100),
(4, 'Bleu', 'La Umberto est un richelieu résolument tendance qui sait toutefois rester sage. Sa ligne est simplement mise en exergue pas un très élégant remplié, qui court le long de sa claque en dessinant une vague. Côté construction, la Umberto est en cousu Blake, procédé reconnu pour sa flexibilité et son confort. La Umberto se mariera à merveille avec vos costumes, notamment vos tenues de cérémonie. Portée avec un jean, elle vous donnera tout de suite un côté dandy très chic.', 'adidas Originals GAZELLE - core black  metallic', 150),
(5, 'Marron', 'La Umberto est un richelieu résolument tendance qui sait toutefois rester sage. Sa ligne est simplement mise en exergue pas un très élégant remplié, qui court le long de sa claque en dessinant une vague. Côté construction, la Umberto est en cousu Blake, procédé reconnu pour sa flexibilité et son confort. La Umberto se mariera à merveille avec vos costumes, notamment vos tenues de cérémonie. Portée avec un jean, elle vous donnera tout de suite un côté dandy très chic.', 'Converse CHUCK TAYLOR ALL STAR II - white', 30),
(6, 'Jaunne', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'Diesel S-SPAARK MID - Baskets montantes - weiß', 66),
(7, 'Jaunne', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'Antony Morato TOKYO - Baskets montantes - black', 56),
(8, 'Rose', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'Lacoste STRAIGHTSET CHUKKA 117 1 CAM - Baskets montantes', 74),
(9, 'Blanche', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'adidas Originals GAZELLE - Baskets basses - icepur metallic', 43),
(10, 'Noir', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'Nike PRESTO FLY - Baskets basses - oatmeal', 34),
(11, 'Marron', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'Puma ICRA TRAINER - Baskets basses - white', 45),
(12, 'Noir', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'adidas Originals SUPERSTAR - Baskets basses - core metallic', 54),
(13, 'Noir', 'Un cuir traité pour l\'eau de mer, des oeillets antirouilles et un montage cousu à base d\'un fil imputrescible : cette chaussure bateau est parée pour les évasions nautiques. Confortable et respirante, elle porte la signature Arcus.', 'Nike AIR MAX TAVAS - Baskets basses - grauweiß', 22);

-- --------------------------------------------------------

--
-- Structure de la table `model_categorie`
--

CREATE TABLE `model_categorie` (
  `id_model` bigint(20) NOT NULL,
  `id_categorie` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `model_categorie`
--

INSERT INTO `model_categorie` (`id_model`, `id_categorie`) VALUES
(1, 1),
(5, 1),
(7, 1),
(9, 1),
(4, 1),
(11, 1),
(2, 2),
(3, 2),
(6, 2),
(8, 2),
(10, 3),
(12, 3),
(2, 4),
(3, 4);

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

CREATE TABLE `photo` (
  `id_photo` bigint(20) NOT NULL,
  `nom_photo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id_model` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `photo`
--

INSERT INTO `photo` (`id_photo`, `nom_photo`, `url`, `id_model`) VALUES
(1, 'img1', 'url1', 1),
(2, 'img2', 'url2', 1),
(3, 'img3', 'url3', 2),
(4, 'img4', 'url4', 2);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id_role` int(11) NOT NULL,
  `nom_role` varchar(45) DEFAULT NULL,
  `admin_id` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id_role`, `nom_role`, `admin_id`) VALUES
(1, 'ROLE_ADMIN', '1');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`),
  ADD KEY `FK_jpbj3bq7mmhkmjm1egxfe77ac` (`id_model`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id_commande`),
  ADD KEY `FK_kou7v9juqb2lylivevkkcpeq8` (`id_client`);

--
-- Index pour la table `ligne_de_commande`
--
ALTER TABLE `ligne_de_commande`
  ADD PRIMARY KEY (`id_ligne_cmde`),
  ADD KEY `FK_awxpn24n2gpdyuxlqmwp1vejb` (`id_article`),
  ADD KEY `FK_5dnng15drgn6uetayp4gw2f4b` (`id_commande`);

--
-- Index pour la table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`id_model`);

--
-- Index pour la table `model_categorie`
--
ALTER TABLE `model_categorie`
  ADD KEY `FK_rjp1qjrmb0silxkrxh3taxrxg` (`id_categorie`),
  ADD KEY `FK_65w2rum8xss91en307q2ikugd` (`id_model`);

--
-- Index pour la table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `FK_j29b00aov87mbx59pnmc2lcv` (`id_model`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id_article` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categorie` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id_commande` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `ligne_de_commande`
--
ALTER TABLE `ligne_de_commande`
  MODIFY `id_ligne_cmde` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `model`
--
ALTER TABLE `model`
  MODIFY `id_model` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `photo`
--
ALTER TABLE `photo`
  MODIFY `id_photo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_jpbj3bq7mmhkmjm1egxfe77ac` FOREIGN KEY (`id_model`) REFERENCES `model` (`id_model`);

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `FK_kou7v9juqb2lylivevkkcpeq8` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`);

--
-- Contraintes pour la table `ligne_de_commande`
--
ALTER TABLE `ligne_de_commande`
  ADD CONSTRAINT `FK_5dnng15drgn6uetayp4gw2f4b` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`),
  ADD CONSTRAINT `FK_awxpn24n2gpdyuxlqmwp1vejb` FOREIGN KEY (`id_article`) REFERENCES `article` (`id_article`),
  ADD CONSTRAINT `FK_rvl6yam6anr8tkldpxsvuq6sh` FOREIGN KEY (`id_ligne_cmde`) REFERENCES `commande` (`id_commande`);

--
-- Contraintes pour la table `model_categorie`
--
ALTER TABLE `model_categorie`
  ADD CONSTRAINT `FK_65w2rum8xss91en307q2ikugd` FOREIGN KEY (`id_model`) REFERENCES `model` (`id_model`),
  ADD CONSTRAINT `FK_rjp1qjrmb0silxkrxh3taxrxg` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`);

--
-- Contraintes pour la table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `FK_j29b00aov87mbx59pnmc2lcv` FOREIGN KEY (`id_model`) REFERENCES `model` (`id_model`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
