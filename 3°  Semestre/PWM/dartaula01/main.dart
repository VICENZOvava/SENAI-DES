void main(){
    String texto = "Alô mundo!";
    int numero = 1234556801010010;
    double n = 0.33333333333333333333333333;
    bool ativo = false;
    var coisa = 10; // Não tipada
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real =" +n.toString()); //Concatenação
    print(ativo?"Oi":"Tchau");//If ternário
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}


