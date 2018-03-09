import coffe from '../reducer/coffee'

describe('counter', () => {
    test('coffe list', () => {

        const result = coffe({ items: [{ coffe: { price: 1 } }] }, { type: 'updatePrice', items: [{ coffe: { price: 2 } }] });

        expect(result).toEqual({ items: [{ coffe: { price: 2 } }] })
    })
})