function validaCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d\1{)10}$/.test(cpf)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = 11 - (soma % 11);

    // Trata exceção para digito1 igual a 10 ou 11  
    if (digito1 > 9) {
        digito1 = 0;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digito2 = 11 - (soma % 11);

    // Trata exceção para digito2 igual a 10 ou 11
    if (digito2 > 9) {
        digito2 = 0;
    }

    // Verifica se os dígitos verificadores são iguais aos dígitos originais
    if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
        return true;
    } else {
        return false;
    }
}

// Exemplo de uso:
const cpf = "48807155818";
if (validaCPF(cpf)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}
