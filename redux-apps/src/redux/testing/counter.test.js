import Counter from '../reducer/counter';
 
describe('counter',()=>{
 
    test('counter increment',()=>{
        //arrange

        //act   
        const result=Counter(1,{type:'incremant'})

        //assert
        expect(result).toEqual(2)
    })

    test('counter increment',()=>{
        //arrange

        //act   
        const result=Counter(0,{type:'incremant'})

        //assert
        expect(result).toEqual(1)
    })

    test('counter increment',()=>{
        //arrange

        //act   
        const result=Counter(0,{type:'decremant'})

        //assert
        expect(result).toEqual(-1)
    })

    test('counter increment',()=>{
        //arrange

        //act   
        const result=Counter(2,{type:'dublicate'})

        //assert
        expect(result).toEqual(4)
    })
})