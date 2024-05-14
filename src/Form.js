const { useState } = require("react");

// Declarando componente
function Form(){
    //Declarando constante de state 
    const [campos, setCampos] =  useState ({
        txtNome: ""
    })
//Declarando constante de state (retorno do back end)
    const [ret, setRet] = useState ('');

//event é acionado em qualquer alteração
    function handleInputChange(event){
        //validação para verificar se foi preenchido (txtNome)
        if(event === undefined){
            console.log('tudovazio')
        }else{
            //quando estiver preenchido, vai atribuir o valor digitado no campo txtNome
            campos[event.target.name] = event.target.value;
            // indica qual o campo foi preenchido (txtNome)
            console.log(event.target.name);
            setCampos(campos);
        }
    }
    //Ao clicar no botão enviar, a função abaixo é acionada
    function handleFormSubmit(event){
        // TODO DESCOBRIR O QUE ESSA COISA FAZ!!!
        event.preventDefault();
        // 
        console.log(campos);
        axios.post('https:',campos).then(response => {
            setRet(response.data.first_name);
            
        })
    }
    return (
        <div>
            <from onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>dados de cadastro</h2>
                    </legend>
                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange} />

                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                    <div><p>Retornou: {ret}</p></div>
                </fieldset>
            </from>
        </div>
    )
}
export default Form;


