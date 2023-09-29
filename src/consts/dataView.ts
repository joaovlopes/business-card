interface dataProps {
    nome: specificDataProps;
    idade: specificDataProps;
    telefone: specificDataProps;
    email: specificDataProps;
    endereco: specificDataProps;
    numeroEndereco: specificDataProps;
    bairro: specificDataProps;
    cidade: specificDataProps;
}

interface specificDataProps {
    value: string;
    viewValue: string | number;
    form: string;
}

export const dataView: dataProps = {
    nome: {value: 'nome', viewValue: '', form: 'dados'},
    idade: {value: 'idade', viewValue: 0, form: 'dados'},
    telefone: {value: 'telefone', viewValue: '', form: 'dados'},
    email: {value: 'email', viewValue: '', form: 'dados'},
    endereco: {value: 'endereco', viewValue: '', form: 'endereco'},
    numeroEndereco: {value: 'numeroEndereco', viewValue: 0, form: 'endereco'},
    bairro: {value: 'bairro', viewValue: '', form: 'endereco'},
    cidade: {value: 'cidade', viewValue: '', form: 'endereco'},
}