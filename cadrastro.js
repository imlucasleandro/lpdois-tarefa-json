const cadEstudante = Vue.createApp({
    data() {
        return{
            nome: "",
            cpf: "",
            email: "",
            cep: "",
            endereco: "",
            numeroCasa: "",
            cidade: "",
            estado: "",
            telefone:"",
            celular: "",
            dataNascimento: "",
            senha: "",
            confirmaSenha: "",
        }
    }
    , methods: {

        async buscaCEP(e, codigopostal = +e.target.value) {
            const url = `https://viacep.com.br/ws/${codigopostal}/json/`
            const response = await fetch(url)
            const names =  await response.json()
            console.log(names)
            this.endereco = names.logradouro
            this.cidade = names.localidade
            this.estado = names.uf

        }
    }
    , computed: {

    }
})