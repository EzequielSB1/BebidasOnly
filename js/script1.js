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

function producto (nombre, stock, precio, descuento, categoria, imagen) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.descuento = descuento;
    this.categoria = categoria;
    this.imagen = imagen;
    this.precioDeVenta = 0;
    this.productoElegido = function() {
        alert('Usted eligio ' + this.nombre + ', su precio es de $' + this.precio + ' pesos.');
    }
}

// producto Aperitivos.
const productoA1 = new producto ('Aperitivo Marcela', 500, 170, 0, 'Aperitivos', './assets/img/productos/Aperitivos/AperitivoMarcela.jpg');

const productoA2 = new producto ('Campari 750cc', 200, 350, .5, 'Aperitivos', './assets/img/productos/Aperitivos/CampariBotella.jpg');

const productoA3 = new producto ('Cynar 700cc', 250, 700, 0, 'Aperitivos', './assets/img/productos/Aperitivos/CynarBotella.jpg');

const productoA4 = new producto ('Cynar 70 proof', 150, 1100, 0, 'Aperitivos', './assets/img/productos/Aperitivos/CynarBotella70proof.jpg');

const productoA5 = new producto ('Dr. Lemon de limon en lata', 2000, 170, .35, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonLata(Limon).jpg');

const productoA6 = new producto ('DR. Lemon de pomelo en lata', 2000, 170, .35, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonLata(Pomelo).jpg');

const productoA7 = new producto ('DR. Lemon de vodka en lata', 2000, 170, .35, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonLata(Vodka).jpg');

const productoA8 = new producto ('DR. Lemon XL de limon', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Limon).jpg');

const productoA9 = new producto ('DR. Lemon XL de mojito', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Mojito).jpg');

const productoA10 = new producto ('DR. Lemon XL de pomelo', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Pomelo).jpg');

const productoA11 = new producto ('DR. Lemon XL de vodka', 1000, 250, .5, 'Aperitivos', './assets/img/productos/Aperitivos/DRLemonXL(Vodka).jpg');

const productoA12 = new producto ('Fernet 1882 750 cc', 1000, 450, 0, 'Aperitivos', './assets/img/productos/Aperitivos/Fernet1882Botella.jpg');

const productoA13 = new producto ('Fernet 1882 en lata', 2000, 200, .35, 'Aperitivos', './assets/img/productos/Aperitivos/Fernet1882Lata.jpg');

const productoA14 = new producto ('Fernet branca 450 cc', 1500, 520, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaBotellaChica.jpg');

const productoA15 = new producto ('Fernet branca 750 cc', 1200, 850, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaBotellaGrande.jpg');

const productoA16 = new producto ('Fernet branca menta 450 cc', 2000, 430, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaMentaBotellaChica.jpg');

const productoA17 = new producto ('Fernet branca menta 750 cc', 1500, 720, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetBrancaMentaBotellaGrande.jpg');

const productoA18 = new producto ('Fernet vittone 750 cc', 1500, 450, 0, 'Aperitivos', './assets/img/productos/Aperitivos/FernetVittoneBotella.jpg');

const productoA19 = new producto ('Gancia 1L', 1500, 600, 0, 'Aperitivos', './assets/img/productos/Aperitivos/GanciaBotella.jpg');

// producto Bebidas blancas.

const productoBB1 = new producto ('Absolut apeach 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutApeach.jpg');

const productoBB2 = new producto ('Absolut grapefruit 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutGrapefruit.jpg');

const productoBB3 = new producto ('Absolut mango 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutMango.jpg');

const productoBB4 = new producto ('Absolut vainilla 750ml', 300, 2000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/AbsolutVainilla.jpg');

const productoBB5 = new producto ('Beefeater gin', 400, 2800, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/BeefeaterGin(original).jpg');

const productoBB6 = new producto ('Bombay gin', 1000, 2500, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/BombayGin.jpg');    

const productoBB7 = new producto ('Coñac Otard', 500, 1900, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/ConiacOtard.jpg');

const productoBB8 = new producto ('Hendricks gin original', 1000, 3200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/HendricksGin(original).jpg');

const productoBB9 = new producto ('Licor amarula', 1500, 1200, .5, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorAmarula.jpg');

const productoBB10 = new producto ('Licor Baileys', 2000, 2100, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorBaileys.jpg');

const productoBB11 = new producto ('Licor cusenier de blue', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(blue).jpg');

const productoBB12 = new producto ('Licor cusenier de cafe', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(cafe).jpg');

const productoBB13 = new producto ('Licor cusenier de chocolate', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(chocolate).jpg');

const productoBB14 = new producto ('Licor cusenier de dulce de leche', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(dulceDeLeche).jpg');

const productoBB15 = new producto ('Licor cusenier de huevo', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(huevo).jpg');

const productoBB16 = new producto ('Licor cusenier de miel', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/LicorCusenier(miel).jpg');

const productoBB17 = new producto ('Orloff gin', 1200, 750, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/OrloffGin.jpg');

const productoBB18 = new producto ('Orloff vodka', 1500, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/OrloffVodka.jpg');

const productoBB19 = new producto ('Ron havana club blanco', 1000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/RonHavanaClubBlanco.jpg');

const productoBB20 = new producto ('Ron havana club dorado', 1200, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/RonHavanaClubDorado.jpg');

const productoBB21 = new producto ('Smirnoff grapefruit', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffBotella(grapefruit).jpg');

const productoBB22 = new producto ('Smirnoff citrus', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffBotella(citrus).jpg');

const productoBB23 = new producto ('Smirnoff original', 2000, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffBotella(original).jpg');

const productoBB24 = new producto ('Smirnoff green apple en lata', 2000, 200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffLata(GreenApple).jpg');

const productoBB25 = new producto ('Smirnoff original en lata', 2000, 200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffLata(original).jpg');

const productoBB26 = new producto ('Smirnoff red berrie en lata', 2000, 200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/SmirnoffLata(RedBerrie).jpg');

const productoBB27 = new producto ('Tanqueray gin original', 1200, 2500, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/TanquerayGin(original).jpg');

const productoBB28 = new producto ('Whisky chivas regal', 1500, 2100, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyChivasRegal.jpg');

const productoBB29 = new producto ('Whisky chivas regal 1L', 1500, 2500, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyChivasRegal1l.jpg');

const productoBB30 = new producto ('Whisky chivas regal 500ml', 1500, 1800, .5, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyChivasRegal500ml.jpg');

const productoBB31 = new producto ('Whisky J&B', 1500, 2900, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyJ&B.jpg');

const productoBB32 = new producto ('Whisky jack daniels', 1300, 4000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyJackDaniels.jpg');

const productoBB33 = new producto ('Whisky jonnie walker goldlabel', 1500, 6000, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyJonnieWalker(goldlabel).jpg');

const productoBB34 = new producto ('Whisky vat 69', 3500, 1200, 0, 'Bebidas blancas', './assets/img/productos/BebidasBlancas/WhiskyVat69.jpg'); 

// producto Bebidas s/ alcohol.

const productoBA1 = new producto ('Coca cola de 1,25L', 2000, 170, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/CocaCola(1,25L).jpg');

const productoBA2 = new producto ('Coca cola de 2,25L', 2000, 230, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/CocaCola(2,25L).jpg');

const productoBA3 = new producto ('Coca cola en lata', 3000, 120, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/CocaColaLata.jpg');

const productoBA4 = new producto ('Fanta de 1,75L', 2000, 135, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Fanta(1,75L).jpg');

const productoBA5 = new producto ('Fanta de 2,25L', 2000, 185, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Fanta(2,25L).jpg');

const productoBA6 = new producto ('Fanta en lata', 3000, 90, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/FantaLata.jpg');

const productoBA7 = new producto ('Sheweppes tonica de 1,5L', 2000, 220, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/SheweppesTonica(1,5L).jpg');

const productoBA8 = new producto ('Sheweppes tonica en lata', 3000, 120, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/SheweppesTonicaLata.jpg');

const productoBA9 = new producto ('Sprite de 1,75L', 2000, 150, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Sprite(1,75L).jpg');

const productoBA10 = new producto ('Sprite de 2,25L', 2000, 175, .5, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/Sprite(2,25L).jpg');

const productoBA11 = new producto ('Sprite en lata', 3000, 120, .35, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/SpriteLata.jpg');

const productoBA12 = new producto ('Terma citrus', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaCitrus.jpg');

const productoBA13 = new producto ('Terma Limon', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaLimon.jpg');

const productoBA14 = new producto ('Terma patagonica', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaPatagonica.jpg');

const productoBA15 = new producto ('Terma serrano', 2000, 150, 0, 'Bebidas sin alcohol', './assets/img/productos/BebidasSinAlcohol/TermaSerrano.jpg');

// producto Cerveza.

const productoC1 = new producto ('Brahama rubia en lata', 3000, 130, .5, 'Cervezas', './assets/img/productos/Cerveza/BrahamaRubiaLata.jpg');

const productoC2 = new producto ('Corona rubia', 2000, 280, 0, 'Cervezas', './assets/img/productos/Cerveza/CoronaRubiaBotella.jpg');

const productoC3 = new producto ('Heineken rubia', 2000, 320, 0, 'Cervezas', './assets/img/productos/Cerveza/HeinekenRubiaBotella.jpg');

const productoC4 = new producto ('Heineken rubia en lata', 3000, 230, .35, 'Cervezas', './assets/img/productos/Cerveza/HeinekenRubiaLata.jpg');

const productoC5 = new producto ('Imperial golden en lata', 3000, 120, .5, 'Cervezas', './assets/img/productos/Cerveza/ImperialGoldenLata.jpg');

const productoC6 = new producto ('Imperial rubia en lata', 3000, 150, .35, 'Cervezas', './assets/img/productos/Cerveza/ImperialRubiaLata.jpg');

const productoC7 = new producto ('Miller rubia en lata', 3000, 160, 0, 'Cervezas', './assets/img/productos/Cerveza/MillerRubiaLata.jpg');

const productoC8 = new producto ('Patagonia roja', 2000, 250, 0, 'Cervezas', './assets/img/productos/Cerveza/PatagoniaRojaBotella.jpg');

const productoC9 = new producto ('Patagonia rubia', 2000, 250, 0, 'Cervezas', './assets/img/productos/Cerveza/PatagoniaRubiaBotella.jpg');

const productoC10 = new producto ('Quilmes negra en lata', 3000, 100, 0, 'Cervezas', './assets/img/productos/Cerveza/QuilmesNegraLata.jpg');

const productoC11 = new producto ('Quilmes rubia', 2000, 200, 0, 'Cervezas', './assets/img/productos/Cerveza/QuilmesRubiaBotella.jpg');

const productoC12 = new producto ('Quilmes rubia en lata', 3000, 100, 0, 'Cervezas', './assets/img/productos/Cerveza/QuilmesRubiaLata.jpg');

const productoC13 = new producto ('Salta roja en lata', 3000, 120, 0, 'Cervezas', './assets/img/productos/Cerveza/SaltaRojaLata.jpg');

const productoC14 = new producto ('Salta rubia en lata', 3000, 120, 0, 'Cervezas', './assets/img/productos/Cerveza/SaltaRubiaLata.jpg');

const productoC15 = new producto ('Scheneider rubia en lata', 3000, 180, 0, 'Cervezas', './assets/img/productos/Cerveza/ScheneiderRubiaLata.jpg');

const productoC16 = new producto ('Stella artois', 2000, 300, 0, 'Cervezas', './assets/img/productos/Cerveza/StellaArtoisBotella.jpg');

const productoC17 = new producto ('Stella artois en lata', 3000, 250, 0, 'Cervezas', './assets/img/productos/Cerveza/StellaArtoisLata.jpg');

const productoC18 = new producto ('Stella artois petite', 4000, 180, 0, 'Cervezas', './assets/img/productos/Cerveza/StellaArtoispetite.jpg');

// producto Champagne (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoCh1 = new producto ('Baron B rose', 2000, 2800, 0, 'Champagnes', './assets/img/productos/Champagne/BaronBRose.jpg');

const productoCh2 = new producto ('Chandon rose', 3000, 1500, 0, 'Champagnes', './assets/img/productos/Champagne/ChandonRose.jpg');

const productoCh3 = new producto ('Dolores brut', 2500, 2000, 0, 'Champagnes', './assets/img/productos/Champagne/DoloresBrut.jpg');

const productoCh4 = new producto ('Dolores dulce', 2500, 2200, 0, 'Champagnes', './assets/img/productos/Champagne/DoloresDulce.jpg');

const productoCh5 = new producto ('Federico de alvear brut', 2500, 500, 0, 'Champagnes', './assets/img/productos/Champagne/FedericoAlvearBrut.jpg');

const productoCh6 = new producto ('Federico de alvear dulce', 2500, 250, 0, 'Champagnes', './assets/img/productos/Champagne/FedericoAlvearDulce.jpg');

const productoCh7 = new producto ('Mercier brut', 3000, 3000, 0, 'Champagnes', './assets/img/productos/Champagne/MercierBrut.jpg');

const productoCh8 = new producto ('Mercier rose', 3000, 3500, 0, 'Champagnes', './assets/img/productos/Champagne/MercierRose.jpg');

const productoCh9 = new producto ('Mumm brut', 2500, 1800, 0, 'Champagnes', './assets/img/productos/Champagne/MummBrut.jpg');

const productoCh10 = new producto ('Navarro correa nature', 3000, 2200, 0, 'Champagnes', './assets/img/productos/Champagne/NavarroCorreaBrut.jpg');

const productoCh11 = new producto ('Navarro correa brut', 3000, 1800, 0, 'Champagnes', './assets/img/productos/Champagne/NavarroCorreaNature.jpg');

const productoCh12 = new producto ('Nieto senetiner brut', 2500, 1500, 0, 'Champagnes', './assets/img/productos/Champagne/NietoSenetinerBrut.jpg');

const productoCh13 = new producto ('Novecento brut', 2500, 1200, 0, 'Champagnes', './assets/img/productos/Champagne/NovecentoBrut.jpg');

const productoCh14 = new producto ('Novecento dulce', 2500, 900, 0, 'Champagnes', './assets/img/productos/Champagne/NovecentoDulce.jpg');

// producto Pack (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoPack1 = new producto ('Pack #1', 1500, 5000, 0, 'Combos', './assets/img/productos/Pack/PackCocaSprite.jpg');

const productoPack2 = new producto ('Pack #2', 2000, 4000, 0, 'Combos', './assets/img/productos/Pack/Pasos.jpg');

const productoPack3 = new producto ('Pack #3', 1600, 3200, 0, 'Combos', './assets/img/productos/Pack/PepsiPapas.jpg');

const productoPack4 = new producto ('Pack #4', 2000, 1500, 0, 'Combos', './assets/img/productos/Pack/SpritePapasMani.jpg');

const productoPack5 = new producto ('Pack #5', 1500, 600, 0, 'Combos', './assets/img/productos/Pack/hielo.jpg');

// producto Vinos (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoV1 = new producto ('Alaris blanco', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/AlarisBlanco.jpg');

const productoV2 = new producto ('Alaris tinto', 2000, 120, 0, 'Vinos', './assets/img/productos/Vinos/AlarisTinto.jpg');

const productoV3 = new producto ('Canciller blanco', 2000, 180, 0, 'Vinos', './assets/img/productos/Vinos/CancillerBlanco.jpg');

const productoV4 = new producto ('Canciller cabernet', 2000, 200, 0, 'Vinos', './assets/img/productos/Vinos/CancillerCabernet.jpg');

const productoV5 = new producto ('Canciller tinto', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/CancillerTinto.jpg');

const productoV6 = new producto ('Colon blanco', 2000, 220, .5, 'Vinos', './assets/img/productos/Vinos/ColonBlanco.jpg');

const productoV7 = new producto ('Colon malbec', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/ColonMalbec.jpg');

const productoV8 = new producto ('Colon tinto', 2000, 250, 0, 'Vinos', './assets/img/productos/Vinos/ColonTinto.jpg');

const productoV9 = new producto ('Estancia mendoza blanco dulce', 2000, 150, 0, 'Vinos', './assets/img/productos/Vinos/EstanciaMendozaBlancoDulce.jpg');

const productoV10 = new producto ('Estancia mendoza tinto cabernet', 2000, 180, 0, 'Vinos', './assets/img/productos/Vinos/EstanciaMendozaTintoCabernet.jpg');

const productoV11 = new producto ('Estancia mendoza tinto malbec', 2000, 200, 0, 'Vinos', './assets/img/productos/Vinos/EstanciaMendozaTintoMalbec.jpg');

const productoV12 = new producto ('Suter cabernet', 2000, 260, 0, 'Vinos', './assets/img/productos/Vinos/SuterCabernet.jpg');

const productoV13 = new producto ('Suter malbec', 2000, 250, 0, 'Vinos', './assets/img/productos/Vinos/SuterMalbec.jpg');

const productoV14 = new producto ('Suter merlot', 2000, 280, 0, 'Vinos', './assets/img/productos/Vinos/SuterMerlot.jpg');

const productoV15 = new producto ('Suter tinto', 2000, 240, 0, 'Vinos', './assets/img/productos/Vinos/SuterTinto.jpg');

const productoV16 = new producto ('Termidor tinto', 2000, 90, 0, 'Vinos', './assets/img/productos/Vinos/TermidorTinto.jpg');

const productoV17 = new producto ('Toro blanco', 2000, 110, 0, 'Vinos', './assets/img/productos/Vinos/ToroBlanco.jpg');

const productoV18 = new producto ('Toro tinto', 2000, 120, 0, 'Vinos', './assets/img/productos/Vinos/ToroTinto.jpg');

const productoV19 = new producto ('Viña de balbo blanco', 2000, 130, 0, 'Vinos', './assets/img/productos/Vinos/ViniadeBalboBlanco.jpg');

const productoV20 = new producto ('Viña de balbo tinto', 2000, 120, 0, 'Vinos', './assets/img/productos/Vinos/ViniadeBlaboTinto.jpg');

// declaracion de los arrays y operaciones necesarias para el carrito de compras.


const productos = [productoA1, productoA2, productoA3, productoA4, productoA5, productoA6, productoA7, productoA8, productoA9, productoA10, productoA11, productoA12, productoA13, productoA14, productoA15, productoA16, productoA17, productoA18, productoA19, productoBB1, productoBB2, productoBB3, productoBB4, productoBB5, productoBB6, productoBB7, productoBB8, productoBB9, productoBB10, productoBB11, productoBB12, productoBB13, productoBB14, productoBB15, productoBB16, productoBB17, productoBB18, productoBB19, productoBB20, productoBB21, productoBB22, productoBB23, productoBB24, productoBB25, productoBB26, productoBB27, productoBB28, productoBB29, productoBB30, productoBB31, productoBB32, productoBB33, productoBB34, productoBA1, productoBA2, productoBA3, productoBA4, productoBA5, productoBA6, productoBA7, productoBA8, productoBA9, productoBA10, productoBA11, productoBA12, productoBA13, productoBA14, productoBA15, productoC1, productoC2, productoC3, productoC4, productoC5, productoC6, productoC7, productoC8, productoC9, productoC10, productoC11, productoC12, productoC13, productoC14, productoC15, productoC16, productoC17, productoC18, productoCh1, productoCh2, productoCh3, productoCh4, productoCh5, productoCh6, productoCh7, productoCh8, productoCh9, productoCh10, productoCh11, productoCh12, productoCh13, productoCh14, productoPack1, productoPack2, productoPack3, productoPack4, productoPack5, productoV1, productoV2, productoV3, productoV4, productoV5, productoV6, productoV7, productoV8, productoV9, productoV10, productoV11, productoV12, productoV13, productoV14, productoV15, productoV16, productoV17, productoV18, productoV19, productoV20];

let contadorTipo = 0;

let contadorCarrito = 0;

let precioTotal = 0;

let continuar = 'si'

let menuTipoProductos = 'Bienvenido a Bebidas Only, que producto desea: '

let carritoProductos = 'Usted compro estos productos: '
  

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
for (const producto of productos) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h5>$${producto.precio}</h5>
    <h6>${producto.nombre}</h6>
    <button>Agregar al carrito</button>`;
    
    visorProductos.append(contenedor);       
} 

// botones y productos filtrados
let botonFiltroA = document.querySelector('.botonFiltroA')

botonFiltroA.addEventListener('click', muestraProductosA)

function muestraProductosA() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoA1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroBB = document.querySelector('.botonFiltroBB')

botonFiltroBB.addEventListener('click', muestraProductosBB)

function muestraProductosBB() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoBB1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroC = document.querySelector('.botonFiltroC')

botonFiltroC.addEventListener('click', muestraProductosC)

function muestraProductosC() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoC1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroBA = document.querySelector('.botonFiltroBA')

botonFiltroBA.addEventListener('click', muestraProductosBA)

function muestraProductosBA() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoBA1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroCh = document.querySelector('.botonFiltroCh')

botonFiltroCh.addEventListener('click', muestraProductosCh)

function muestraProductosCh() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoCh1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroPack = document.querySelector('.botonFiltroPack')

botonFiltroPack.addEventListener('click', muestraProductosPack)

function muestraProductosPack() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoPack1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroV = document.querySelector('.botonFiltroV')

botonFiltroV.addEventListener('click', function(){muestraProductos('Vinos')})

function muestraProductos() {
    const listaSegunCategoria = productos.filter(x => x.categoria == productoV1.categoria);

    visorProductos.innerHTML = ''
    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
            
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button>Agregar al carrito</button>`;
            
        visorProductos.append(contenedor);       
    }
}

let botonFiltroTodo = document.querySelector('.botonFiltroTodo')

botonFiltroTodo.addEventListener('click', muestraProductosTodo)

function muestraProductosTodo() {

    visorProductos.innerHTML = ''
    for (const producto of productos) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h5>$${producto.precio}</h5>
        <h6>${producto.nombre}</h6>
        <button id="boton${producto.nombre}">Agregar al carrito</button>`;
        
        visorProductos.append(contenedor);       
    } 
}


// carrito de compras

// muostrar o desaparecer carrito de html
let botonCarrito = document.querySelector('.botonCarrito');
let verCarrito = document.querySelector('.carrito1')
botonCarrito.addEventListener('click', () => verCarrito.classList.toggle('visor'));





// visor.innerHTML =`${carritoProductos}\nSu compra total es de $${precioTotal} pesos \nSu producto se despachara en las proximas 24hs. Muchas gracias por su compra.` ;

//menu responsive
let botonMenu = document.querySelector('.botonMenu');
let verMenu = document.querySelector('.nav')
botonMenu.addEventListener('click', () => verMenu.classList.toggle('menuVer'));



