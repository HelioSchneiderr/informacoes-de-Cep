function buscaCep(){
    const req = new XMLHttpRequest();
    const cep = document.getElementById(`valorCep`).value;

    req.open(`GET`, `https://viacep.com.br/ws/${cep}/json/`, true);

    req.onload = () =>{
        const respostaAPI = JSON.parse(req.response)

        document.getElementById(`logradouro`).value = respostaAPI.logradouro;
        document.getElementById(`municipio`).value = respostaAPI.localidade;
        document.getElementById(`bairro`).value = respostaAPI.bairro;
        document.getElementById(`uf`).value = respostaAPI.uf;
    };
    req.send();
};