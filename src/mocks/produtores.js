import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const numRandom = (min, max) => {
    return Math.floor(Math.random() * (min - max + 1) + min);
}

const produtores = {
    titulo: 'Podutores',
    lista: [
        {
            nome: 'Green',
            Imagem: green,
            distancia: `${numRandom(1, 500)}m`,
            estrelas: numRandom(1, 5)
        },
        {
            nome: 'Salad',
            Imagem: salad,
            distancia: `${numRandom(1, 500)}m`,
            estrelas: numRandom(1, 5)
        },
        {
            nome: 'Jenny Jack Farm',
            Imagem: jennyJack,
            distancia: `${numRandom(1, 500)}m`,
            estrelas: numRandom(1, 5)
        },
        {
            nome: 'Grow',
            Imagem: grow,
            distancia: `${numRandom(1, 500)}m`,
            estrelas: numRandom(1, 5)
        },
        {
            nome: 'Potager',
            Imagem: potager,
            distancia: `${numRandom(1, 500)}m`,
            estrelas: numRandom(1, 5)
        }
    ]
}

export default produtores;