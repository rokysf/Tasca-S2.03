CREATE DATABASE 'optica_cul_d'ampolla'

use('optica_cul_d'ampolla')

db.createCollection('clients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idClient",
    "Nom",
    "Adreça",
    "Telèfon",
    "Correu electrònic",
    "Date registre"
  ],
  "properties": {
    "Adreça": {
      "bsonType": "string"
    },
    "Recomenat per client": {
      "bsonType": "int"
    },
    "idClient": {
      "bsonType": "int"
    },
    "Telèfon": {
      "bsonType": "string"
    },
    "Date registre": {
      "bsonType": "date"
    },
    "Correu electrònic": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('clients').createIndex( { 'Recomenat per client':1 } , { name:'"Recomenat per client_idx"'} );

db.createCollection('empleats',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idEmpleat",
    "Nom",
    "Cognoms"
  ],
  "properties": {
    "Cognoms": {
      "bsonType": "string"
    },
    "idEmpleat": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('proveïdors',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idProveïdor",
    "Nom",
    "Carrer",
    "Número",
    "Pis",
    "Porta",
    "Codi Postal",
    "Ciutat",
    "Pais",
    "Telèfon",
    "Fax",
    "NIF"
  ],
  "properties": {
    "Número": {
      "bsonType": "int"
    },
    "Telèfon": {
      "bsonType": "string"
    },
    "idProveïdor": {
      "bsonType": "int"
    },
    "Carrer": {
      "bsonType": "string"
    },
    "NIF": {
      "bsonType": "string"
    },
    "Pis": {
      "bsonType": "int"
    },
    "Porta": {
      "bsonType": "string"
    },
    "Ciutat": {
      "bsonType": "string"
    },
    "Codi Postal": {
      "bsonType": "string"
    },
    "Fax": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    },
    "Pais": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('ulleres',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idUlleres",
    "Marca",
    "Graduació vidre dret",
    "Graduació vidre esquerre",
    "Tipus de montura",
    "Color montura",
    "Color vidres",
    "idProveïdor",
    "Preu"
  ],
  "properties": {
    "idUlleres": {
      "bsonType": "int"
    },
    "Tipus de montura": {
      "enum": [
        "flotant",
        "pasta",
        "metàl-lica"
      ]
    },
    "Color vidres": {
      "bsonType": "string"
    },
    "Preu": {
      "bsonType": "int"
    },
    "Marca": {
      "bsonType": "string"
    },
    "Color montura": {
      "bsonType": "string"
    },
    "Graduació vidre esquerre": {
      "bsonType": "int"
    },
    "idProveïdor": {
      "bsonType": "int"
    },
    "Graduació vidre dret": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('ulleres').createIndex( { 'idProveïdor':1 } , { name:'idProveïdors_idx'} );

db.createCollection('vendes ulleres',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "idVenda",
    "Client",
    "Ulleres",
    "Empleat"
  ],
  "properties": {
    "Client": {
      "bsonType": "int"
    },
    "Ulleres": {
      "bsonType": "int"
    },
    "idVenda": {
      "bsonType": "int"
    },
    "Empleat": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('vendes ulleres').createIndex( { 'Client':1 } , { name:'Client_idx'} );

db.getCollection('vendes ulleres').createIndex( { 'Empleat':1 } , { name:'Empleat_idx'} );

db.getCollection('vendes ulleres').createIndex( { 'Ulleres':1 } , { name:'Ulleres_idx'} );
