// declaracion de otras variables (principales)

const visor = document.querySelector('.visorProductos')

// declaracion de productos

function tipo (nombre) {
    this.nombre = nombre;
}

const tipoAperitivo = new tipo ('Aperitivo');

const tipoBebidasBlanas = new tipo ('Babidas Blancas');

const tipoBebidasSinAlcohol = new tipo ('Bebidas sin alcohol');

const tipoCerveza = new tipo ('Cerveza');

const tipoChampagne = new tipo ('Champagne');

const tipoPack = new tipo ('Packs');

const tipoVinos = new tipo ('Vino');

function producto (nombre, stock, precio, descuento, categoria, imagen, id) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.descuento = descuento;
    this.categoria = categoria;
    this.imagen = imagen;
    this.id = id;
}

// producto Aperitivos.
const productoA1 = new producto ('Aperitivo Marcela', 500, 170, 0, 'Aperitivos', './assets/img/productos/Aperitivos/AperitivoMarcela.jpg', 1);

const productoA2 = new producto ('Campari 750cc', 200, 350, .5, 'Aperitivos', './assets/img/productos/Aperitivos/CampariBotella.jpg', 2);

const productoA3 = new producto ('Cynar 700cc', 250, 700, 0, 'Aperitivos', './assets/img/productos/Aperitivos/CynarBotella.jpg', 3);

const productoA4 = new producto ('Cynar 70 proof', 150, 1100, 0, 'Aperitivos', './assets/img/productos/Aperitivos/CynarBotella70proof.jpg', 4);

const productoA5 = new producto ('Dr. Lemon de limon en lata', 2000, 170, .35, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonLata(Limon).jpg', 5);

const productoA6 = new producto ('DR. Lemon de pomelo en lata', 2000, 170, .35, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonLata(Pomelo).jpg', 6);

const productoA7 = new producto ('DR. Lemon de vodka en lata', 2000, 170, .35, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonLata(Vodka).jpg', 7);

const productoA8 = new producto ('DR. Lemon XL de limon', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Limon).jpg', 8);

const productoA9 = new producto ('DR. Lemon XL de mojito', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Mojito).jpg', 9);

const productoA10 = new producto ('DR. Lemon XL de pomelo', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Pomelo).jpg', 10);

const productoA11 = new producto ('DR. Lemon XL de vodka', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Vodka).jpg', 11);

const productoA12 = new producto ('Fernet 1882 750 cc', 1000, 450, 0, 'Aperitivos', './assets/img/productos/Aperitivos/Fernet1882Botella.jpg', 12);

const productoA13 = new producto ('Fernet 1882 en lata', 2000, 200, .35, 'Aperitivos', './assets/img/productos/Aperitivos/Fernet1882Lata.jpg', 13);

const productoA14 = new producto ('Fernet branca 450 cc', 1500, 520, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaBotellaChica.jpg', 14);

const productoA15 = new producto ('Fernet branca 750 cc', 1200, 850, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaBotellaGrande.jpg', 15);

const productoA16 = new producto ('Fernet branca menta 450 cc', 2000, 430, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaMentaBotellaChica.jpg', 16);

const productoA17 = new producto ('Fernet branca menta 750 cc', 1500, 720, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaMentaBotellaGrande.jpg', 17);

const productoA18 = new producto ('Fernet vittone 750 cc', 1500, 450, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetVittoneBotella.jpg', 18);

const productoA19 = new producto ('Gancia 1L', 1500, 600, 0, 'Aperitivos', './assets/img/productos/Aperitivos/GanciaBotella.jpg', 19);

// producto Bebidas blancas.

const productoBB1 = new producto ('Absolut apeach 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutApeach.jpg', 20);

const productoBB2 = new producto ('Absolut grapefruit 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutGrapefruit.jpg', 21);

const productoBB3 = new producto ('Absolut mango 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutMango.jpg', 22);

const productoBB4 = new producto ('Absolut vainilla 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutVainilla.jpg', 23);

const productoBB5 = new producto ('Beefeater gin', 400, 2800, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/BeefeaterGin(original).jpg', 24);

const productoBB6 = new producto ('Bombay gin', 1000, 2500, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/BombayGin.jpg', 25);    

const productoBB7 = new producto ('Coñac Otard', 500, 1900, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/ConiacOtard.jpg', 26);

const productoBB8 = new producto ('Hendricks gin original', 1000, 3200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/HendricksGin(original).jpg', 27);

const productoBB9 = new producto ('Licor amarula', 1500, 1200, .5, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorAmarula.jpg', 28);

const productoBB10 = new producto ('Licor Baileys', 2000, 2100, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorBaileys.jpg', 29);

const productoBB11 = new producto ('Licor cusenier de blue', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(blue).jpg', 30);

const productoBB12 = new producto ('Licor cusenier de cafe', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(cafe).jpg', 31);

const productoBB13 = new producto ('Licor cusenier de chocolate', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(chocolate).jpg', 32);

const productoBB14 = new producto ('Licor cusenier de dulce de leche', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(dulceDeLeche).jpg', 33);

const productoBB15 = new producto ('Licor cusenier de huevo', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(huevo).jpg', 34);

const productoBB16 = new producto ('Licor cusenier de miel', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(miel).jpg', 35);

const productoBB17 = new producto ('Orloff gin', 1200, 750, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/OrloffGin.jpg', 36);

const productoBB18 = new producto ('Orloff vodka', 1500, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/OrloffVodka.jpg', 37);

const productoBB19 = new producto ('Ron havana club blanco', 1000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/RonHavanaClubBlanco.jpg', 38);

const productoBB20 = new producto ('Ron havana club dorado', 1200, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/RonHavanaClubDorado.jpg', 39);

const productoBB21 = new producto ('Smirnoff grapefruit', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffBotella(grapefruit).jpg', 40);

const productoBB22 = new producto ('Smirnoff citrus', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffBotella(citrus).jpg', 41);

const productoBB23 = new producto ('Smirnoff original', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffBotella(original).jpg', 42);

const productoBB24 = new producto ('Smirnoff green apple en lata', 2000, 200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffLata(GreenApple).jpg', 43);

const productoBB25 = new producto ('Smirnoff original en lata', 2000, 200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffLata(original).jpg', 44);

const productoBB26 = new producto ('Smirnoff red berrie en lata', 2000, 200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffLata(RedBerrie).jpg', 45);

const productoBB27 = new producto ('Tanqueray gin original', 1200, 2500, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/TanquerayGin(original).jpg', 46);

const productoBB28 = new producto ('Whisky chivas regal', 1500, 2100, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyChivasRegal.jpg', 47);

const productoBB29 = new producto ('Whisky chivas regal 1L', 1500, 2500, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyChivasRegal1l.jpg', 48);

const productoBB30 = new producto ('Whisky chivas regal 500ml', 1500, 1800, .5, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyChivasRegal500ml.jpg', 49);

const productoBB31 = new producto ('Whisky J&B', 1500, 2900, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyJ&B.jpg', 50);

const productoBB32 = new producto ('Whisky jack daniels', 1300, 4000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyJackDaniels.jpg', 51);

const productoBB33 = new producto ('Whisky jonnie walker goldlabel', 1500, 6000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyJonnieWalker(goldlabel).jpg', 52);

const productoBB34 = new producto ('Whisky vat 69', 3500, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyVat69.jpg', 53); 

// producto Bebidas s/ alcohol.

const productoBA1 = new producto ('Coca cola de 1,25L', 2000, 170, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/CocaCola(1,25L).jpg', 54);

const productoBA2 = new producto ('Coca cola de 2,25L', 2000, 230, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/CocaCola(2,25L).jpg', 55);

const productoBA3 = new producto ('Coca cola en lata', 3000, 120, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/CocaColaLata.jpg', 56);

const productoBA4 = new producto ('Fanta de 1,75L', 2000, 135, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Fanta(1,75L).jpg', 57);

const productoBA5 = new producto ('Fanta de 2,25L', 2000, 185, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Fanta(2,25L).jpg', 58);

const productoBA6 = new producto ('Fanta en lata', 3000, 90, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/FantaLata.jpg', 59);

const productoBA7 = new producto ('Sheweppes tonica de 1,5L', 2000, 220, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/SheweppesTonica(1,5L).jpg', 60);

const productoBA8 = new producto ('Sheweppes tonica en lata', 3000, 120, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/SheweppesTonicaLata.jpg', 61);

const productoBA9 = new producto ('Sprite de 1,75L', 2000, 150, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Sprite(1,75L).jpg', 62);

const productoBA10 = new producto ('Sprite de 2,25L', 2000, 175, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Sprite(2,25L).jpg', 63);

const productoBA11 = new producto ('Sprite en lata', 3000, 120, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/SpriteLata.jpg', 64);

const productoBA12 = new producto ('Terma citrus', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaCitrus.jpg', 65);

const productoBA13 = new producto ('Terma Limon', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaLimon.jpg', 66);

const productoBA14 = new producto ('Terma patagonica', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaPatagonica.jpg', 67);

const productoBA15 = new producto ('Terma serrano', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaSerrano.jpg', 68);

// producto Cerveza.

const productoC1 = new producto ('Brahama rubia en lata', 3000, 130, .5, 'Cervezas', './assets/img/productos/Cerveza/BrahamaRubiaLata.jpg', 69);

const productoC2 = new producto ('Corona rubia', 2000, 280, 0, 'Cervezas', './assets/img/productos/Cerveza/CoronaRubiaBotella.jpg', 70);

const productoC3 = new producto ('Heineken rubia', 2000, 320, 0, 'Cervezas', './assets/img/productos/Cerveza/HeinekenRubiaBotella.jpg', 71);

const productoC4 = new producto ('Heineken rubia en lata', 3000, 230, .35, 'Cervezas', './assets/img/productos/Cerveza/HeinekenRubiaLata.jpg', 72);

const productoC5 = new producto ('Imperial golden en lata', 3000, 120, .5, 'Cervezas', './assets/img/productos/Cerveza/ImperialGoldenLata.jpg', 73);

const productoC6 = new producto ('Imperial rubia en lata', 3000, 150, .35, 'Cervezas', './assets/img/productos/Cerveza/ImperialRubiaLata.jpg', 74);

const productoC7 = new producto ('Miller rubia en lata', 3000, 160, 0, 'Cervezas', './assets/img/productos/Cerveza/MillerRubiaLata.jpg', 75);

const productoC8 = new producto ('Patagonia roja', 2000, 250, 0, 'Cervezas', './assets/img/productos/Cerveza/PatagoniaRojaBotella.jpg', 76);

const productoC9 = new producto ('Patagonia rubia', 2000, 250, 0, 'Cervezas', './assets/img/productos/Cerveza/PatagoniaRubiaBotella.jpg', 77);

const productoC10 = new producto ('Quilmes negra en lata', 3000, 100, 0, 'Cervezas', './assets/img/productos/Cerveza/QuilmesNegraLata.jpg', 78);

const productoC11 = new producto ('Quilmes rubia', 2000, 200, 0, 'Cervezas', './assets/img/productos/Cerveza/QuilmesRubiaBotella.jpg', 79);

const productoC12 = new producto ('Quilmes rubia en lata', 3000, 100, 0, 'Cervezas', './assets/img/productos/Cerveza/QuilmesRubiaLata.jpg', 80);

const productoC13 = new producto ('Salta roja en lata', 3000, 120, 0, 'Cervezas', './assets/img/productos/Cerveza/SaltaRojaLata.jpg', 81);

const productoC14 = new producto ('Salta rubia en lata', 3000, 120, 0, 'Cervezas', './assets/img/productos/Cerveza/SaltaRubiaLata.jpg', 82);

const productoC15 = new producto ('Scheneider rubia en lata', 3000, 180, 0, 'Cervezas', './assets/img/productos/Cerveza/ScheneiderRubiaLata.jpg', 83);

const productoC16 = new producto ('Stella artois', 2000, 300, 0, 'Cervezas', './assets/img/productos/Cerveza/StellaArtoisBotella.jpg', 84);

const productoC17 = new producto ('Stella artois en lata', 3000, 250, 0, 'Cervezas', './assets/img/productos/Cerveza/StellaArtoisLata.jpg', 85);

const productoC18 = new producto ('Stella artois petite', 4000, 180, 0, 'Cervezas', './assets/img/productos/Cerveza/StellaArtoispetite.jpg', 86);

// producto Champagne.

const productoCh1 = new producto ('Baron B rose', 2000, 2800, 0, 'Champagnes', './assets/img/productos/Champagne/BaronBRose.jpg', 87);

const productoCh2 = new producto ('Chandon rose', 3000, 1500, 0, 'Champagnes', './assets/img/productos/Champagne/ChandonRose.jpg', 88);

const productoCh3 = new producto ('Dolores brut', 2500, 2000, 0, 'Champagnes', './assets/img/productos/Champagne/DoloresBrut.jpg', 89);

const productoCh4 = new producto ('Dolores dulce', 2500, 2200, 0, 'Champagnes', './assets/img/productos/Champagne/DoloresDulce.jpg', 90);

const productoCh5 = new producto ('Federico de alvear brut', 2500, 500, 0, 'Champagnes', './assets/img/productos/Champagne/FedericoAlvearBrut.jpg', 91);

const productoCh6 = new producto ('Federico de alvear dulce', 2500, 250, 0, 'Champagnes', './assets/img/productos/Champagne/FedericoAlvearDulce.jpg', 92);

const productoCh7 = new producto ('Mercier brut', 3000, 3000, 0, 'Champagnes', './assets/img/productos/Champagne/MercierBrut.jpg', 93);

const productoCh8 = new producto ('Mercier rose', 3000, 3500, 0, 'Champagnes', './assets/img/productos/Champagne/MercierRose.jpg', 94);

const productoCh9 = new producto ('Mumm brut', 2500, 1800, 0, 'Champagnes', './assets/img/productos/Champagne/MummBrut.jpg', 95);

const productoCh10 = new producto ('Navarro correa nature', 3000, 2200, 0, 'Champagnes', './assets/img/productos/Champagne/NavarroCorreaBrut.jpg', 96);

const productoCh11 = new producto ('Navarro correa brut', 3000, 1800, 0, 'Champagnes', './assets/img/productos/Champagne/NavarroCorreaNature.jpg', 97);

const productoCh12 = new producto ('Nieto senetiner brut', 2500, 1500, 0, 'Champagnes', './assets/img/productos/Champagne/NietoSenetinerBrut.jpg', 98);

const productoCh13 = new producto ('Novecento brut', 2500, 1200, 0, 'Champagnes', './assets/img/productos/Champagne/NovecentoBrut.jpg', 99);

const productoCh14 = new producto ('Novecento dulce', 2500, 900, 0, 'Champagnes', './assets/img/productos/Champagne/NovecentoDulce.jpg', 100);

// producto Pack (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoPack1 = new producto ('Pack #1', 1500, 5000, 0, 'Combos', './assets/img/productos/Pack/PackCocaSprite.jpg', 101);

const productoPack2 = new producto ('Pack #2', 2000, 4000, 0, 'Combos', './assets/img/productos/Pack/Pasos.jpg', 102);

const productoPack3 = new producto ('Pack #3', 1600, 3200, 0, 'Combos', './assets/img/productos/Pack/PepsiPapas.jpg', 103);

const productoPack4 = new producto ('Pack #4', 2000, 1500, 0, 'Combos', './assets/img/productos/Pack/SpritePapasMani.jpg', 104);

const productoPack5 = new producto ('Pack #5', 1500, 600, 0, 'Combos', './assets/img/productos/Pack/hielo.jpg', 105);

// producto Vinos (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoV1 = new producto ('Alaris blanco', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/AlarisBlanco.jpg', 106);

const productoV2 = new producto ('Alaris tinto', 2000, 120, 0, 'Vinos', './assets/img/productos/Vinos/AlarisTinto.jpg', 107);

const productoV3 = new producto ('Canciller blanco', 2000, 180, 0, 'Vinos', './assets/img/productos/Vinos/CancillerBlanco.jpg', 108);

const productoV4 = new producto ('Canciller cabernet', 2000, 200, 0, 'Vinos', './assets/img/productos/Vinos/CancillerCabernet.jpg', 109);

const productoV5 = new producto ('Canciller tinto', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/CancillerTinto.jpg', 110);

const productoV6 = new producto ('Colon blanco', 2000, 220, .5, 'Vinos', './assets/img/productos/Vinos/ColonBlanco.jpg', 111);

const productoV7 = new producto ('Colon malbec', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/ColonMalbec.jpg', 112);

const productoV8 = new producto ('Colon tinto', 2000, 250, 0, 'Vinos', './assets/img/productos/Vinos/ColonTinto.jpg', 113);

const productoV9 = new producto ('Estancia mendoza blanco dulce', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/EstanciaMendozaBlancoDulce.jpg', 114);

const productoV10 = new producto ('Estancia mendoza tinto cabernet', 2000, 180, 0, 'Vinos', './assets/img/productos/Vinos/EstanciaMendozaTintoCabernet.jpg', 115);

const productoV11 = new producto ('Estancia mendoza tinto malbec', 2000, 200, 0, 'Vinos', './assets/img/productos/Vinos/EstanciaMendozaTintoMalbec.jpg', 116);

const productoV12 = new producto ('Suter cabernet', 2000, 260, 0, 'Vinos', './assets/img/productos/Vinos/SuterCabernet.jpg', 117);

const productoV13 = new producto ('Suter malbec', 2000, 250, 0, 'Vinos', './assets/img/productos/Vinos/SuterMalbec.jpg', 118);

const productoV14 = new producto ('Suter merlot', 2000, 280, 0, 'Vinos', './assets/img/productos/Vinos/SuterMerlot.jpg', 119);

const productoV15 = new producto ('Suter tinto', 2000, 240, 0, 'Vinos', './assets/img/productos/Vinos/SuterTinto.jpg', 120);

const productoV16 = new producto ('Termidor tinto', 2000, 90, 0, 'Vinos', './assets/img/productos/Vinos/TermidorTinto.jpg', 121);

const productoV17 = new producto ('Toro blanco', 2000, 110, 0, 'Vinos', './assets/img/productos/Vinos/ToroBlanco.jpg', 122);

const productoV18 = new producto ('Toro tinto', 2000, 120, 0, 'Vinos', './assets/img/productos/Vinos/ToroTinto.jpg', 123);

const productoV19 = new producto ('Viña de balbo blanco', 2000, 130, 0, 'Vinos', './assets/img/productos/Vinos/ViniadeBalboBlanco.jpg', 124);

const productoV20 = new producto ('Viña de balbo tinto', 2000, 120, 0, 'Vinos', './assets/img/productos/Vinos/ViniadeBlaboTinto.jpg', 125);

// declaracion de los arrays y operaciones necesarias para el carrito de compras.


const productos = [productoA1, productoA2, productoA3, productoA4, productoA5, productoA6, productoA7, productoA8, productoA9, productoA10, productoA11, productoA12, productoA13, productoA14, productoA15, productoA16, productoA17, productoA18, productoA19, productoBB1, productoBB2, productoBB3, productoBB4, productoBB5, productoBB6, productoBB7, productoBB8, productoBB9, productoBB10, productoBB11, productoBB12, productoBB13, productoBB14, productoBB15, productoBB16, productoBB17, productoBB18, productoBB19, productoBB20, productoBB21, productoBB22, productoBB23, productoBB24, productoBB25, productoBB26, productoBB27, productoBB28, productoBB29, productoBB30, productoBB31, productoBB32, productoBB33, productoBB34, productoBA1, productoBA2, productoBA3, productoBA4, productoBA5, productoBA6, productoBA7, productoBA8, productoBA9, productoBA10, productoBA11, productoBA12, productoBA13, productoBA14, productoBA15, productoC1, productoC2, productoC3, productoC4, productoC5, productoC6, productoC7, productoC8, productoC9, productoC10, productoC11, productoC12, productoC13, productoC14, productoC15, productoC16, productoC17, productoC18, productoCh1, productoCh2, productoCh3, productoCh4, productoCh5, productoCh6, productoCh7, productoCh8, productoCh9, productoCh10, productoCh11, productoCh12, productoCh13, productoCh14, productoPack1, productoPack2, productoPack3, productoPack4, productoPack5, productoV1, productoV2, productoV3, productoV4, productoV5, productoV6, productoV7, productoV8, productoV9, productoV10, productoV11, productoV12, productoV13, productoV14, productoV15, productoV16, productoV17, productoV18, productoV19, productoV20];

let contadorTipo = 0;

let contadorCarrito = 0;

let precioTotal = document.querySelector('#precioFinal');

let carrito = [];

let divisa = '$';

const DOMbotonVaciar = document.querySelector('#botonVaciar');

const miLocalStorage = window.localStorage;

function compra (producto) {
    producto.productoElegido();
    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
    if (producto.stock >= cantidadComprada) {
        precioParcial = producto.precio * cantidadComprada
        precioTotal += precioParcial
        producto.precioDeVenta += precioParcial
        carrito.push(producto);
    } else {
        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoAperitivoMarcela.stock + ', vuelva a completar el formulario.')
    }

}

// Filtrado de productos

const visorProductos = document.querySelector('.visorCompra');


// productos sin filtro
function renderTarjetasProductos(arrayProductos) {
    for (const producto of arrayProductos) {
        // contenedor
        let contenedor = document.createElement("div");
        contenedor.classList.add('tarjetaProducto');

        // imagen
        let imgTarjeta = document.createElement("img");
        imgTarjeta.classList.add('productoImg');
        imgTarjeta.src = producto.imagen
        
        // precio
        let precioTarjeta = document.createElement("h5");
        precioTarjeta.classList.add('productoPrecio');
        precioTarjeta.textContent = '$' + producto.precio

        // titulo
        let tituloTarjeta = document.createElement("h6");
        tituloTarjeta.classList.add('productoNombre');
        tituloTarjeta.textContent = producto.nombre

        // boton
        const botonTarjeta = document.createElement('button');
        botonTarjeta.classList.add('botonAgregarAlCarrito');
        botonTarjeta.textContent = 'Agregar producto';
        botonTarjeta.setAttribute('marcador', producto.id);
        botonTarjeta.addEventListener('click', agregarProducto);
        
        
        contenedor.appendChild(imgTarjeta);
        contenedor.appendChild(precioTarjeta);
        contenedor.appendChild(tituloTarjeta);
        contenedor.appendChild(botonTarjeta);
        visorProductos.append(contenedor);       
    } 
};



// botones y productos filtrados
let botonFiltroA = document.querySelector('.botonFiltroA')

botonFiltroA.addEventListener('click', function(){muestraProductos('Aperitivos')})

let botonFiltroBB = document.querySelector('.botonFiltroBB')

botonFiltroBB.addEventListener('click', function(){muestraProductos('Bebidas blancas')})

let botonFiltroC = document.querySelector('.botonFiltroC')

botonFiltroC.addEventListener('click', function(){muestraProductos('Cervezas')})

let botonFiltroBA = document.querySelector('.botonFiltroBA')

botonFiltroBA.addEventListener('click', function(){muestraProductos('Bebidas sin alcohol')})

let botonFiltroCh = document.querySelector('.botonFiltroCh')

botonFiltroCh.addEventListener('click', function(){muestraProductos('Champagnes')})

let botonFiltroPack = document.querySelector('.botonFiltroPack')

botonFiltroPack.addEventListener('click', function(){muestraProductos('Combos')})

let botonFiltroV = document.querySelector('.botonFiltroV')

botonFiltroV.addEventListener('click', function(){muestraProductos('Vinos')})

function muestraProductos(categoria) {
    const listaSegunCategoria = productos.filter(x => x.categoria == categoria);

    visorProductos.innerHTML = ''
    renderTarjetasProductos(listaSegunCategoria)
}

let botonFiltroTodo = document.querySelector('.botonFiltroTodo')

botonFiltroTodo.addEventListener('click', muestraProductosTodo)

function muestraProductosTodo() {

    visorProductos.innerHTML = ''
    renderTarjetasProductos(productos) 
}


// carrito de compras

// muostrar o desaparecer carrito de html
let botonCarrito = document.querySelector('.botonCarrito');
let verCarrito = document.querySelector('.carrito1')
botonCarrito.addEventListener('click', () => verCarrito.classList.toggle('visor'));

// carrito
let botonTarjeta = document.querySelector('.botonAgregarAlCarrito')
let visorCarrito = document.querySelector('.visorProductos');

function agregarProducto(e) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(e.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
    // Vaciamos todo el html
    visorCarrito.textContent = '';
    // Quitamos los duplicados
    console.log(carrito)
    const carritoSinDuplicados = [...new Set(carrito)];
    console.log(carritoSinDuplicados)
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = productos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.innerHTML = `<img src=${miItem[0].imagen}> <h6>${miItem[0].nombre} - ${miItem[0].precio}${divisa}</h6>`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miBoton.textContent = 'X'
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        visorCarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    precioTotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(e) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = e.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    [1,1,1,3,4]
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();

}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderTarjetasProductos(productos);
renderizarCarrito();


//menu responsive
let botonMenu = document.querySelector('.botonMenu');
let verMenu = document.querySelector('.nav')
botonMenu.addEventListener('click', () => verMenu.classList.toggle('menuVer'));



