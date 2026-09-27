// 45. Repetição Encapsulamento
// Validador de Senhas e Segurança de Acesso
// Crie uma classe UsuarioSistema com os atributos privados login e senha. O setter da senha deve
// aplicar uma regra de segurança estrita: a senha precisa ter pelo menos 6 caracteres e não pode ser
// igual ao login. Caso a regra seja descumprida, o método deve exibir uma mensagem de erro e não
// alterar o atributo. O programa deve rodar em um laço de repetição solicitando que o usuário cadastre
// suas credenciais até que ele forneça uma senha válida que atenda a todos os requisitos de segurança
// do sistema.

export function q45poo(): void {
    class UsuarioSistema {
        private login: string
        private senha: string

        constructor(login: string) {
            this.login = login
            this.senha = ""
        }

        get Login(): string {
            return this.login
        }

        get SenhaValida(): boolean {
            return this.senha != ""
        }
        set Senha(novaSenha: string) {
            if (novaSenha.length < 6) {
                console.log("Erro: a senha deve ter pelo menos 6 letras ")
            }
            else if (novaSenha == this.login) {
                console.log("Erro: a senha não pode ser igual ao login")
            }
            else {
                this.senha = novaSenha
                console.log("Senha cadastrada com sucesso!")
            }
        }
    }

    let login = String(prompt("Digite o login: "))
    let usuario = new UsuarioSistema(login)

    while (!usuario.SenhaValida) {
        let senha = String(prompt("Digite a senha: "))
        usuario.Senha = senha
    }

    console.log(`Usuário ${usuario.Login} cadastrado com sucesso`)
}