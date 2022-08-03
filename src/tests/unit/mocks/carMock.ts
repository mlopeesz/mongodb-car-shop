import { ICar } from '../../../interfaces/ICar';

const carMock: ICar = {
    model: 'Gol quadrado',
    year: 1985,
    color: 'prata',
    buyValue: 2500,
    doorsQty: 2,
    seatsQty: 5
};

const carMockWithId: ICar & {_id:string} = {
    _id: '95f6e4df4763aa1803223501',
    model: 'Gol quadrado',
    year: 1985,
    color: 'prata',
    buyValue: 2500,
    doorsQty: 2,
    seatsQty: 5
}

const allCarsMock: ICar[] & {_id:string}[] = [
   {
    _id: '95f6e4df4763aa1803223501',
    model: 'Gol quadrado',
    year: 1985,
    color: 'prata',
    buyValue: 2500,
    doorsQty: 2,
    seatsQty: 5,
   },
   {
    _id: '95f6e4df4763aa1803223501',
    model: 'Gol bolinha',
    year: 2002,
    color: 'prata',
    buyValue: 6000,
    doorsQty: 2,
    seatsQty: 5,
   },
];

const carMockUpdate: ICar = {
    model: 'Gol bolinha 2',
    year: 1985,
    color: 'preto',
    buyValue: 2500,
    doorsQty: 2,
    seatsQty: 5
};

export {carMock, carMockWithId, allCarsMock,carMockUpdate};