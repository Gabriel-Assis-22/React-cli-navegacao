import React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';


const Test = () => {

    const [name, setName] = useState('Gabriel Assis');
    const [age, setAge] = useState(25);

    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Gabriel Assis' ? 'Pablo Henrique' : 'Gabriel Assis');
    }, []);

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('New Age', age, newAge);
        setAge(prev => prev === 25 ? 30 : 25);
    }, [age]);


    // const calculo = useMemo(() => {
    //     console.log('calculou');
    //     return (
    //         console.log(name)
    //     ); 

    // }, [name]);
    // console.log('renderizou', calculo);

    // useEffect(() =>{
    //     alert('Rederizado');

    // }, [name]);

    return (
        <>
            <div>
                <p> Nome: {name}</p>
                <button onClick={handleChangeName}>Alterar Name</button>
            </div>

            <div>
                <p>Idade: {age}</p>
                <button onClick={handleChangeAge}>Alterar Age</button>
            </div>
        </>
    )

}
export { Test }