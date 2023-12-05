CREATE SCHEMA IF NOT EXISTS distributions;
use distributions;
CREATE TABLE distributions (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    ver VARCHAR(50) NOT NULL,
    launch_year YEAR NOT NULL,
    website VARCHAR(256),
    info TEXT,
    image TEXT
);

#CREACION DE TABLA DE DISTRIBUCIONES
INSERT INTO distributions (name, ver, launch_year, website, info, image)
VALUES
	("Linux Mint","21.2 Victoria",2023,"https://www.linuxmint.com", 'Linux mint Es una de las distribuciones de Linux más populares y es utilizada por millones de personas. Se considera una de las mejores alternativas a Microsoft Windows y Apple MacOS. Su objetivo es producir un sistema operativo moderno, elegante y cómodo que sea tanto potente como fácil de usar.', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Linux_Mint_21_"Vanessa"_%28Cinnamon%29.png'),
    ("Tails", "5.19.1", 2023, "https://tails.net", 'Tails Es una distribución de Linux centrada en la seguridad, basada en Debian, destinada a preservar la privacidad y el anonimato. Se conecta a Internet exclusivamente a través de la red de anonimato Tor.', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/TAILS_5.18_desktop_with_Tor_Browser.png'),
    ("antiX", "antiX-23", 2023, "https://antixlinux.com", 'antiX Es una distribución de Linux, originalmente basada en MEPIS, que a su vez se basa en la distribución estable de Debian. antiX reemplazó inicialmente el entorno de escritorio KDE de MEPIS con los gestores de ventanas Fluxbox e IceWM, lo que lo hace adecuado para sistemas x86 más antiguos y menos potentes.', 'https://upload.wikimedia.org/wikipedia/commons/5/51/AntiX_19.3_W.png'),
    ("Damn Small Linux", "4.4.10", 2012, "http://www.damnsmalllinux.org", 'Damn Small Linux Es un sistema operativo gratuito para la familia de computadoras personales x86. Fue diseñado para ejecutar aplicaciones gráficas en hardware de PC más antiguo, por ejemplo, máquinas con procesadores 486 y Pentium tempranos y muy poca memoria. DSL es un CD en vivo con un tamaño de 50 MB.', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Dsl-3.0.jpg'),
    ("Elementary OS", "7.1", 2023, "https://elementary.io", 'Elementary OS Es un sistema operativo de código abierto basado en Linux desarrollado y mantenido por Elementary, Inc. Se promociona como un reemplazo “reflexivo, capaz y ético” para macOS y Windows y tiene un modelo de paga lo que quieras usar.', 'https://upload.wikimedia.org/wikipedia/commons/d/df/Elementary_OS_7.1.png'),
    ('Huayra', '3.5', 2019, 'https://huayra.conectarigualdad.gob.ar/', 'Huayra Es una distribución de Linux basada en Debian, desarrollada por el Ministerio de Educación de Argentina. Está diseñada para ser utilizada en entornos educativos y cuenta con una amplia variedad de herramientas educativas preinstaladas.', 'https://huayra.educar.gob.ar/wp-content/uploads/2023/03/fondo_Sacaloneta.png'),
    ('Kali Linux', '2021.4', 2021, 'https://www.kali.org/', 'Kali linux Es una distribución de Linux especializada en pruebas de penetración y auditorías de seguridad. Viene con una amplia variedad de herramientas de seguridad preinstaladas y es utilizada por profesionales de la seguridad informática en todo el mundo.', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VirtualBox_Kali_Linux_29_03_2022_11_10_35.png'),
    ('KDE Neon', '5.23', 2021, 'https://neon.kde.org/', 'KDE Neon Es una distribución de Linux basada en Ubuntu que utiliza el entorno de escritorio KDE Plasma. Está diseñada para ofrecer a los usuarios la última versión del software de KDE.', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Screenshot_kde_neon_wmenu.png'),
    ('Knoppix', '9.4.0', 2021, 'https://www.knopper.net/knoppix/index-en.html', 'Knoppix  Es una distribución de Linux basada en Debian que se ejecuta completamente desde un CD o USB sin necesidad de instalación en el disco duro. Es conocida por su capacidad para detectar automáticamente el hardware y configurar el sistema en consecuencia.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/VirtualBox_KNOPPIX_Desktop_GER_26_01_2021_20_20_47.png/1920px-VirtualBox_KNOPPIX_Desktop_GER_26_01_2021_20_20_47.png'),
    ('MX Linux', '21.1.1', 2021, 'https://mxlinux.org/', 'MX Linux Es una distribución de Linux basada en Debian que utiliza el entorno de escritorio Xfce. Está diseñada para ser fácil de usar y rápida, y cuenta con una amplia variedad de herramientas preinstaladas.', 'https://upload.wikimedia.org/wikipedia/commons/4/43/Mx21.1-wildflowers.png'),
    ('Parrot OS', '4.11', 2020, 'https://parrotsec.org/', 'Parrot OS Es una distribución de Linux especializada en pruebas de penetración y auditorías de seguridad. Viene con una amplia variedad de herramientas de seguridad preinstaladas y es utilizada por profesionales de la seguridad informática en todo el mundo.', 'https://www.parrotsec.org/_next/static/media/anonsurf.868f43f7.png'),
    ('PureOS', '10.0.0', 2020, 'https://pureos.net/', 'PureOS Es una distribución de Linux basada en Debian que se centra en la privacidad y la seguridad. Viene con una amplia variedad de herramientas de privacidad y seguridad preinstaladas y está diseñada para ser utilizada en entornos empresariales y gubernamentales.', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Pureos-desktop-byzantium.jpg'),
    ('SteamOS', '2.195', 2019, 'https://store.steampowered.com/steamos/', 'SteamOS  Es una distribución de Linux desarrollada por Valve Corporation y diseñada para ser utilizada como sistema operativo para juegos. Viene con Steam preinstalado y está diseñada para ser utilizada en una PC conectada a un televisor.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/SteamOS_logo.svg/1920px-SteamOS_logo.svg.png' ),
    ('Ubuntu', '21.10', 2021, 'https://ubuntu.com/', 'Ubuntu Es una distribución de Linux basada en Debian que es muy popular entre los usuadditional_infoarios de escritorio. Viene con una amplia variedad de herramientas preinstaladas y es conocida por su facilidad de uso y estabilidad.', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Ubuntu_23.10_Mantic_Minotaur_Desktop_English.png');


