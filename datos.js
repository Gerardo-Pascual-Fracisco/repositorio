db.Curso.insertOne(
    {
        '_id': "104",
        'nombre': "Redes Inteligentes",
        'costos': "20,000",
        "Instructor": [
            {
                'nombre': "Jose Diaz",
                'ced': "5135"
            }
        ],
        "Certiicaciones": [
            {
                "nomcert1": "CCNA"
            },
            {
                "nomcert2": "CCNP"
            }
        ]
    }
)

db.Curso.insertMany(
    [
        {
            '_id': "105",
            'nombreC': "AutoCad",
            'costos': "10,000",
            "Instructor": [
                {
                    'nombre': "Mariana Juarez",
                    'ced': "6176"
                }
            ],
            "Certiicaciones": [
                {
                    "nomcert": "AutoCad"
                }

            ]
        },
        {
            '_id': "106",
            'nombreC': "Iot",
            'costos': "20,000",
            "Instructor": [
                {
                    'nombre': "Mario Suarez",
                    'ced': "7111"
                }
            ]
        }
    ]
)


db.Curso.insertOne(
    {
        '_id': "600",
        'nombre': "SQL SERVER",
        'cosotoc': "40000"
    })


db.Curso.insertMany([{
    '_id': "700",
    'nombre': "UML",
    'cosotoc': "20000"
},
{
    '_id': "800",
    'nombre': "canvas",
    'cosotoc': "5000"
}])

db.Curso.update(
    { '_id': "700" },
    {
        $set:
        {
            "instructor": [
                {
                    "nombre": "jose lopez",
                    "cedula": "44466"
                }]
        }
    }
)
db.Curso.update(
    { '_id': "700" },
    {
        $set:

        {
            "nombrec": "BigData"
        }
    }
)
db.curso.update({
    '_id': "120"
},
    {
        $set: {
            'instructor': [{
                nombrei: "Hernan Cortes",
                cedula: "4908",
                sexo: "Masculino"
            }]
        }
    })


db.curso.insertOne({ '_id': "120", nombrec: "Herramientas Digitales", costo: "2000", instructor: [{ nombrei: "Hernan Cortes", cedula: "4908" }] })


db.curso.insertOne({ '_id': "121", nombrec: "CCNP", costo: "34000", instructor: [{ nombrei: "Carla Vences", cedula: "7808" }], certificaciones: [{ cert1: "CCNA", cert2: "CCNP" }] })


db.curso.insertOne({ '_id': "122", nombrec: "REDIX", costo: "4000", instructor: [{ nombrei: "Gerardo Monroy", cedula: "2029", edad: 35 }], certificaciones: [{ cert1: "Mongo", cert2: "SQL" }] })


//mayor que
db.user.find({ age: { $gt: 25 } });

//menor igual
db.user.find({ age: { lte: 25 } });

//menor
db.user.find({ lt: { $gt: 25 } }).count()

//and
db.users.find({
    $and: [
        { age: { $gt: 10 } },
        { status: 'active' }]
})

db.users.remove({
    status: 'active'
})