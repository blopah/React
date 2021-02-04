import React, {useState} from 'react'

const MyVar = (props) => {

    const [numeros, setNumeros] = useState(Array(props.qttNumbers).fill(0))

    function gerarNumeros() {
        let nume = Array(8).fill(5)
        for (let i = 0; i < props.qttNumbers; i++) {
            var num = Math.floor(Math.random() * 61);
            if (i === 0) {
                nume[i] = num;
            }

            while (nume.includes(num)) {
                // console.log(num + '-' + i)
                num = Math.floor(Math.random() * 61);
            }

            nume[i] = num;
        }
        setNumeros(nume.sort(function(b, a){return b-a}));
    }

    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join('-')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>
    )
}

export default MyVar;