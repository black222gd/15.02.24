function verificarLogin() {
    let txtLogin = document.getElementById("txtLogin"); //! LINKAR A VARIAVERL COM HTML!//
    let txtSenha = document.getElementById("txtSenha");

    let login = "teste";
    let senha = "teste";

    if( txtLogin.value == login && txtSenha.value == senha) {
        console.log("logado com sucesso!");
    } else {
        console.log("login ou senha incorretos! digite e tente novamente.");
    }
}