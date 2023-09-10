CREATE DATABASE 'Pizzeria'

use('Pizzeria')

db.createCollection('Begudes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idBeguda",
    "Nom",
    "Descripció",
    "Imatge",
    "Preu"
  ],
  "properties": {
    "idBeguda": {
      "bsonType": "int"
    },
    "Descripció": {
      "bsonType": "string"
    },
    "Preu": {
      "bsonType": "double"
    },
    "Imatge": {
      "bsonType": "binData"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('Botiga',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idBotiga",
    "Adreça",
    "Codi Postal",
    "Localitat",
    "Província"
  ],
  "properties": {
    "Adreça": {
      "bsonType": "string"
    },
    "Província": {
      "bsonType": "string"
    },
    "idBotiga": {
      "bsonType": "int"
    },
    "Codi Postal": {
      "bsonType": "string"
    },
    "Localitat": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('Categories Pizza',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idCategoria Pizza",
    "Nom"
  ],
  "properties": {
    "idCategoria Pizza": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('Empleats',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idEmpleat",
    "Nom",
    "Cognoms",
    "NIF",
    "Telèfon",
    "Feina",
    "Botiga_idBotiga"
  ],
  "properties": {
    "Feina": {
      "enum": [
        "Cuiner",
        "Repartidor"
      ]
    },
    "Cognoms": {
      "bsonType": "string"
    },
    "Telèfon": {
      "bsonType": "string"
    },
    "NIF": {
      "bsonType": "string"
    },
    "idEmpleat": {
      "bsonType": "int"
    },
    "Botiga_idBotiga": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('Empleats').createIndex( { 'Botiga_idBotiga':1 } , { name:'fk_Empleats_Botiga1_idx'} );

db.createCollection('Hamburgueses',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idHamburguesa",
    "Nom",
    "Descripció",
    "Imatge",
    "Preu"
  ],
  "properties": {
    "Descripció": {
      "bsonType": "string"
    },
    "Preu": {
      "bsonType": "double"
    },
    "Imatge": {
      "bsonType": "binData"
    },
    "idHamburguesa": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('Pizzes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idProducte",
    "Nom",
    "Descripció",
    "Imatge",
    "Preu",
    "Categoria Pizza"
  ],
  "properties": {
    "idProducte": {
      "bsonType": "int"
    },
    "Descripció": {
      "bsonType": "string"
    },
    "Preu": {
      "bsonType": "double"
    },
    "Categoria Pizza": {
      "bsonType": "int"
    },
    "Imatge": {
      "bsonType": "binData"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('Pizzes').createIndex( { 'Categoria Pizza':1 } , { name:'"Categoria Pizza_idx"'} );

db.createCollection('Províncies',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idProvíncia",
    "Nom"
  ],
  "properties": {
    "idProvíncia": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('Localitats',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idLocalitat",
    "Nom",
    "idProvíncia"
  ],
  "properties": {
    "idProvíncia": {
      "bsonType": "int"
    },
    "idLocalitat": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('Localitats').createIndex( { 'idProvíncia':1 } , { name:'idProvíncia_idx'} );

db.createCollection('Cients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idCient",
    "Nom",
    "Cognom",
    "Adreça",
    "Codi Postal",
    "Telèfon",
    "Localitats_idLocalitat",
    "Localitats_idProvíncia"
  ],
  "properties": {
    "Cognom": {
      "bsonType": "string"
    },
    "Adreça": {
      "bsonType": "string"
    },
    "Localitats_idLocalitat": {
      "bsonType": "int"
    },
    "Telèfon": {
      "bsonType": "string"
    },
    "Localitats_idProvíncia": {
      "bsonType": "int"
    },
    "Codi Postal": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    },
    "idCient": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('Cients').createIndex( { 'Localitats_idLocalitat':1, 'Localitats_idProvíncia':1 } , { name:'fk_Cients_Localitats1_idx'} );

db.createCollection('Comandes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idComanda",
    "idClient",
    " Data/Hora comanda",
    "Repartiment",
    "Preu total",
    "idBotiga"
  ],
  "properties": {
    "idComanda": {
      "bsonType": "int"
    },
    "Repartiment": {
      "enum": [
        "Domicili",
        "Botiga"
      ]
    },
    "Data/Hora entrega": {
      "bsonType": "timestamp"
    },
    "idClient": {
      "bsonType": "int"
    },
    "Repartidor": {
      "bsonType": "int"
    },
    "Quantitat Hamburgueses": {
      "bsonType": "int"
    },
    "Preu total": {
      "bsonType": "double"
    },
    " Data/Hora comanda": {
      "bsonType": "timestamp"
    },
    "Quantitat Begudes": {
      "bsonType": "int"
    },
    "idBotiga": {
      "bsonType": "int"
    },
    "Quantitat Pizzes": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('Comandes').createIndex( { 'idClient':1 } , { name:'idClient_idx'} );

db.getCollection('Comandes').createIndex( { 'Quantitat Pizzes':1 } , { name:'"Quantitat Pizzes_idx"'} );

db.getCollection('Comandes').createIndex( { 'Quantitat Begudes':1 } , { name:'"Quantitat Begudes_idx"'} );

db.getCollection('Comandes').createIndex( { 'Quantitat Hamburgueses':1 } , { name:'"Quantitat Hamburgueses_idx"'} );

db.getCollection('Comandes').createIndex( { 'idBotiga':1 } , { name:'idBotiga_idx'} );

db.getCollection('Comandes').createIndex( { 'Repartidor':1 } , { name:'Repartidor_idx'} );
