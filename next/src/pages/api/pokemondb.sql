  CREATE DATABASE IF NOT EXISTS `pokemonDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

  USE `pokemonDB`;

  DROP TABLE IF EXISTS `pokemon`;

  CREATE TABLE `pokemon` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `moves` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`moves`)),
    `base_experience` int(11) DEFAULT NULL,
    `species` varchar(255) DEFAULT NULL,
    `types` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`types`)),
    `abilities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`abilities`)),
    `stats` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`stats`)),
    `front_sprite` varchar(255) DEFAULT NULL,
    `back_sprite` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `team`;

  CREATE TABLE `team` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `moves` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`moves`)),
    `base_experience` int(11) DEFAULT NULL,
    `species` varchar(255) DEFAULT NULL,
    `types` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`types`)),
    `abilities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`abilities`)),
    `stats` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`stats`)),
    `front_sprite` varchar(255) DEFAULT NULL,
    `back_sprite` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


DROP TABLE IF EXISTS `saves`;

CREATE TABLE `saves` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `checkpoint` varchar(255) NOT NULL,
    `badges` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`badges`)),
    `team` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`team`)),
    `storedPokemon` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL CHECK (json_valid(`storedPokemon`)),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
