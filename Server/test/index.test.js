const app = require('../src/app');
const session = require('supertest');
const request = session(app); // cambié request por agent

const characterTest1 = {
    id: 1000,
    name: 'Mati',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
};

const characterTest2 = {
    id: 1001,
    name: 'Nati',
    species: 'Human',
    gender: 'Female',
    status: 'Dead',
    origin: {
        name: 'Earth (C-138)'
    },
    image: 'image.jpg'
};

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await request.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
            async () => {
                const res = await request.get('/rickandmorty/character/1');
                const { character } = res.body
                for (const prop in characterTest1) {
                    expect(character).toHaveProperty(prop)
                }
            })

        it('Si hay un error responde con status: 500', async () => {
            const res = await request.get(`/rickandmorty/character/4564s`);
            expect(res.statusCode).toBe(404);
        })
    })

    describe('GET /rickandmorty/login', () => {

        const access = { access: true };

        it('Responde con un objeto con la propiedad {access: true} si la info del user es correcta',
            async () => {
                const res = await request.get('/rickandmorty/login?email=email@email.com&password=password1');
                expect(res.body).toEqual(access);
            }
        )
        it('Responde con un objeto con la propiedad {access: false} si la info del user es incorrecta',
            async () => {
                const res = await request.get('/rickandmorty/login?email=eeemail@eeemail.com&pppassword=pppassword1');
                access.access = false;
                expect(res.body).toEqual(access);
            }
        )
    })

    describe('POST /rickandmorty/fav/', () => {
        it('Responde con un array con lo enviado por body', async () => {
            const res = await request.post('/rickandmorty/fav/').send({ character: characterTest1 });
            expect(res.body).toContainEqual(characterTest1);
        })

        it('Responde con un array que incluye los personajes enviado previamente con el personaje nuevo enviado por body', async () => {
            await request.post('/rickandmorty/fav/').send({ character: characterTest1 })
            const res = await request.post('/rickandmorty/fav/').send({ character: characterTest2 })
            expect(res.body).toEqual(expect.arrayContaining([characterTest1, characterTest2]))
        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Responde con un array con los elementos previos sin modificar cuando no hay ningun personaje con el ID enviado ',
            async () => {

            }
        )

        it('Se tiene que eliminar correctamente al ingresar un ID valido',
            async () => {

            }
        )
    })
})