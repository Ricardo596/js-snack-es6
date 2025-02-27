//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


const biciclette = [
    { nome: "Specialized Allez", peso: 8.5 },
    { nome: "Trek Domane SL 6", peso: 8.2 },
    { nome: "Cannondale Synapse Carbon", peso: 7.9 },
    { nome: "Bianchi Infinito CV", peso: 7.4 },
    { nome: "Pinarello Dogma F12", peso: 7.3 },
    { nome: "Merida Scultura 5000", peso: 7.8 },
    { nome: "Scott Addict RC 20", peso: 7.6 },
    { nome: "Cervélo R5", peso: 7.1 },
    { nome: "Felt FR2", peso: 7.2 },
    { nome: "Wilier Triestina Zero SLR", peso: 6.9 }
  ];
  
  let biciLeggera = biciclette[0]
  for (let i = 0; i < biciclette.length; i++) {
    if (biciLeggera < biciclette)
      console.log(biciLeggera)
  }
