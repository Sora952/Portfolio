/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: Enterprise
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Enterprise`;
CREATE TABLE `Enterprise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `place` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: Language
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Language`;
CREATE TABLE `Language` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: Project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Project`;
CREATE TABLE `Project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `persons` int(11) NOT NULL,
  `content` text NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `language_id` int(11) NOT NULL,
  `enterprise_id` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: Enterprise
# ------------------------------------------------------------

INSERT INTO
  `Enterprise` (`id`, `name`, `place`)
VALUES
  (1, 'WildCodeSchool', 'Lyon');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: Language
# ------------------------------------------------------------

INSERT INTO
  `Language` (`id`, `name`)
VALUES
  (1, 'HTML');
INSERT INTO
  `Language` (`id`, `name`)
VALUES
  (2, 'CSS');
INSERT INTO
  `Language` (`id`, `name`)
VALUES
  (3, 'JavaScript');
INSERT INTO
  `Language` (`id`, `name`)
VALUES
  (4, 'ReactJS');
INSERT INTO
  `Language` (`id`, `name`)
VALUES
  (5, 'NodeJS');
INSERT INTO
  `Language` (`id`, `name`)
VALUES
  (6, 'MySQL');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: Project
# ------------------------------------------------------------

INSERT INTO
  `Project` (
    `id`,
    `name`,
    `persons`,
    `content`,
    `created_at`,
    `language_id`,
    `enterprise_id`,
    `link`
  )
VALUES
  (
    1,
    'Weather suggest',
    5,
    'Weather suggest est une API météo interactive pour permettre aux gens de visualiser la pluie et le beau temps et leurs permettre des conseilles pour évité d\'être trempé ou d\'avoir froid, il y à aussi des alertes innondation, indices pollution, un système pour visualiser les UV, des tas d\'infos sur le lever du soleil, le coucher, l\'humiditer ect. Cette API à été fait dans le cadre de la formation à la wild code school pour nous initier à React et aux API web. Cela à durer 6 semaines ou nous avons codés sans relache jusqu\'a ce que le projet soit abouti.',
    'avril 2020',
    4,
    1,
    'lien netlify que j\'ai pas sous la main la'
  );
INSERT INTO
  `Project` (
    `id`,
    `name`,
    `persons`,
    `content`,
    `created_at`,
    `language_id`,
    `enterprise_id`,
    `link`
  )
VALUES
  (
    2,
    'Healthymood',
    9,
    'Healthymood est un site de recettes saines fait sur demande d\'une cliente pour refaire son site wordpress de 0 avec les outils à notre disposition',
    'mai 2020',
    5,
    1,
    'Lien à mettre plus tard'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
