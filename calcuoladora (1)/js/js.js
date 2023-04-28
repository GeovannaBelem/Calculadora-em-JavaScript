function pegar(num){
    var painel = document.getElementById('painel').innerHTML;
    document.getElementById('painel').innerHTML = painel + num;
}
function resposta(){
    var resposta = eval(document.getElementById('painel').innerHTML);
    document.getElementById('painel').innerHTML = resposta;
}
function limpar(){
    var limpar = document.getElementById('painel').innerHTML;
    document.getElementById('painel').innerHTML = painel = "";
}
function apagar(){
    var painel = document.getElementById('painel').innerHTML;
    var text = painel.length;
    document.getElementById('painel').innerHTML = painel.substring(0, text-1);
}