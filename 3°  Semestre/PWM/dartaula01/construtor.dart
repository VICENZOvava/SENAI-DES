class Animal{
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //Instancia
    Animal boi  = new Animal(1,"Bandido","Bovino","Nelori",499.9);
    Animal vaca  = new Animal(2,"mimosa","Bovino","Angus",399.9);
    Animal gato  = new Animal(3,"tico","Felino","Angorá",1.9);
    Animal gata  = new Animal(4,"mimi","Felino","Vira Latas",1.2);
    Animal cachorro  = new Animal(5,"Totó","Canino","Caramelo",10.9);
    Animal cavalo  = new Animal(6,"Layco","Equino","Xitus",459.9);
    Animal egua  = new Animal(7,"Layca","Equino","Nelori",320.9);
    print(boi.tudoJunto());
    print(vaca.tudoJunto());
    print(gato.tudoJunto());
    print(gata.tudoJunto());
    print(cachorro.tudoJunto());
    print(cavalo.tudoJunto());
    print(egua.tudoJunto());

}