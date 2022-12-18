const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
    },
    {
        nome: 'Jose',
        sobrenome: 'Moreira',
        nota: 4,
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7,
    },
    {
        nome: 'Sara',
        sobrenome: 'Souza',
        nota: 5,
    },
    {
        nome: 'Clara',
        sobrenome: 'Barbosa',
        nota: 9,
    },
    {
        nome: 'Rodrigo',
        sobrenome: 'Barros',
        nota: 4,
    },
    {
        nome: 'Renato',
        sobrenome: 'Barros',
        nota: 7,
    },
    {
        nome: 'Andrea',
        sobrenome: 'Batista',
        nota: 6,
    },
    {
        nome: 'Carla',
        sobrenome: 'Campos',
        nota: 3,
    },
]

const Main = {
    init: function(){
        this.cacheSelectors()
        this.exeEvent()
    },

    cacheSelectors: function(){
        this.$alunoInput = document.querySelector('#alunoInput')   

        this.$button = document.querySelector('#button')

        this.$list = document.querySelector('.list')
    },

    exeEvent: function(){
        this.$button.onclick = this.EventFn.showAlunos.bind(this)
    },

    EventFn: {
        showAlunos: function(){
            const nota = parseInt(this.$alunoInput.value)
            let alunosList = ''

            alunosList = alunos.filter(function(aluno){
                if(aluno.nota === nota){
                    return aluno
                }
            })

            Main.$list.innerHTML = ''

            if(alunosList.length < 1){
                Main.$list.innerHTML = `
                    Nenhum aluno tirou essa nota
                `
            } else {
                alunosList.forEach(function(aluno){
                    const nomeCompletoAluno = aluno.nome + ' ' + aluno.sobrenome
                    const notaAluno = aluno.nota

                    Main.$list.innerHTML += `
                        <li>
                            ${nomeCompletoAluno} | Nota: ${notaAluno}
                        </li>
                    `
                })
            }     
        }
    }
}

Main.init()