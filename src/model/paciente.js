
let paciente = {
    "id": null,  // O id será atribuído posteriormente pela função ou sistema
    "dadosPaciente": {
        "nome": "João da Silva",
        "dataNascimento": "1993-05-15",
        "cpf": "123.456.789-00",
        "sexo": "Masculino",
        "tel": "13988842653",
        "endereco": {
            "rua": "Rua das Flores",
            "cidade": "Cidade A",
            "estado": "Estado X",
            "cep": "12345-678"
        }
    },
    "dadosProntuario": {
        "dentista": {
            "nome": "Dra. Ana Souza",
            "registroProfissional": "12345",
            "especialidade": "Odontologia"
        },
        "Tratamento": [
            {
                "data": "2023-03-01",
                "descricao": "Consulta inicial, exame clínico realizado"
            },
            {
                "data": "2023-04-15",
                "descricao": "Início do tratamento de restauração"
            },
            {
                "data": "2023-06-01",
                "descricao": "Continuação do tratamento, paciente relatando melhora"
            }
        ]
    }
};

function inserirPacienteLocalStorage(paciente) {
    // Verifica se o localStorage é suportado pelo navegador
    if (typeof(Storage) !== "undefined") {
        // Obtém os pacientes já armazenados no localStorage (se houver)
        let pacientesArmazenados = JSON.parse(localStorage.getItem('pacientes')) || [];

        // Gera um novo ID com base no último ID utilizado
        paciente.id = generateNextId(pacientesArmazenados);

        // Adiciona o novo paciente à lista
        pacientesArmazenados.push(paciente);

        // Atualiza o localStorage com a lista atualizada de pacientes
        localStorage.setItem('pacientes', JSON.stringify(pacientesArmazenados));

        console.log('Paciente inserido no localStorage com sucesso.');
    } else {
        console.error('Desculpe, o localStorage não é suportado neste navegador.');
    }
}

// Função para gerar um ID sequencial
function generateNextId(pacientes) {
    // Se não houver pacientes, começa com 1
    if (pacientes.length === 0) {
        return 1;
    }

    // Encontra o último ID utilizado e incrementa
    const ultimoId = pacientes[pacientes.length - 1].id;
    return ultimoId + 1;
}

inserirPacienteLocalStorage(paciente);