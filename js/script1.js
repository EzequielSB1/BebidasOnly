// declarado de variables por tipo de bebida.

let nombreP1 = 'Fernet';
let numeroP1 = '1';

let nombreP2 = 'Vino tinto';
let numeroP2 = '2';

let nombreP3 = 'Vino blanco';
let numeroP3 = '3';

// producto Fernet.
let nombreF1 = 'Branca';
let stockF1 = 150;
let precioF1 = 750;
let numeroF1 = '1';

let nombreF2 = 'Branca menta';
let stockF2 = 200;
let precioF2 = 500;
let numeroF2 = '2';

let nombreF3 = '1882';
let stockF3 = 175; 
let precioF3 = 425;
let numeroF3 = '3';

let nombreF4 = 'Lata 1882';
let stockF4 = 600;
let precioF4 = 150;
let numeroF4 = '4';

let nombreF5 = 'Vittone';
let stockF5 = 500;
let precioF5 = 200;
let numeroF5 = '5';


// producto vino tinto.

let nombreVT1 = 'Alma mora';
let stockVT1 = 500;
let precioVT1 = 450;
let numeroVT1 = '1';

let nombreVT2 = 'Protillo';
let stockVT2 = 250;
let precioVT2 = 300;
let numeroVT2 = '2';

let nombreVT3 = 'Callia';
let stockVT3 = 600;
let precioVT3 = 350;
let numeroVT3 = '3';

let nombreVT4 = 'Elemento';
let stockVT4 = 700;
let precioVT4 = 550;
let numeroVT4 = '4';

let nombreVT5 = 'Finca de las moras';
let stockVT5 = 400;
let precioVT5 = 600;
let numeroVT5 = '5';

let nombreVT6 = 'Benjamin nieto';
let stockVT6 = 800;
let precioVT6 = 200;
let numeroVT6 = '6';

let nombreVT7 = 'Colon';
let stockVT7 = 700;
let precioVT7 = 225;
let numeroVT7 = '7';

// producto vino blanco.

let nombreVB1 = 'Portillo';
let stockVB1 = 200;
let preciosVB1 = 150;
let numeroVB1 = '1';

let nombreVB2 = 'benjamin';
let stockVB2 = 500;
let preciosVB2 = 320;
let numeroVB2 = '2';

let nombreVB3 = 'Estancia mendoza';
let stockVB3 = 235;
let preciosVB3 = 200;
let numeroVB3 = '3';

let nombreVB4 = 'Emilia';
let stockVB4 = 500;
let preciosVB4 = 450;
let numeroVB4 = '4';

let nombreVB5 = 'Dilema';
let stockVB5 = 600;
let preciosVB5 = 300;
let numeroVB5 = '5';

let nombreVB6 = 'Cosecha tardia';
let stockVB6 = 800;
let preciosVB6 = 120;
let numeroVB6 = '6';

let nombreVB7 = 'Alma mora';
let stockVB7 = 700;
let preciosVB7 = 600;
let numeroVB7 = '7';

// operacion de los datos.
alert('Buenas tardes, que tipo de producto desea: \n1. Fernet. \n2. Vino tinto. \n3. Vino blanco. \nElija el numero del producto, ejemplo si desea comprar fernet elija el numero 1.');

let tipoProducto = prompt('Escriba el numero del producto que desea');

switch (tipoProducto) {
    case '1':
        alert('Usted desea comprar ' + nombreP1 + ' estas son las opcones que tenemos para ofrecerle: \n1. Branca. \n2. Branca menta. \n3. 1882. \n4. Lata 1882. \n5. Vittone. \nElija el numero del producto que desea para continuar, por ejemplo si quiere el fernet branca escriba el numero 1.')


        break;

    case '2':
        alert('Usted desea comprar ' + nombreP2 + ' estas son las opcones que tenemos para ofrecerle: \n1. Branca. \n2. Branca menta. \n3. 1882. \n4. Lata 1882. \n5. Vittone. \nElija el numero del producto que desea para continuar, por ejemplo si quiere el fernet branca escriba el numero 1.')


        break;
    
    case '3':
        alert('Usted desea comprar ' + nombreP3 + ' estas son las opcones que tenemos para ofrecerle: \n1. Branca. \n2. Branca menta. \n3. 1882. \n4. Lata 1882. \n5. Vittone. \nElija el numero del producto que desea para continuar, por ejemplo si quiere el fernet branca escriba el numero 1.')
    
    
        break;

    default:
        break;
}