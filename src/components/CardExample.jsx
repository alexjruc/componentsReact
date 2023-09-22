import Card from "./Card";

const CardExample = () => {
    return (
        <div className="container">
            <Card
                title="Informacion Personal"
                item1="Alex uceda"
                item2="Pelicula favorita: Interestelar"
                item3="Musica favorita : Rock"
                background="lightgreen"
            />
            <Card
                title="Mis Hobbies"
                item1="Leer"
                item2="videojuegos"
                item3="Jugar futbol"
                background="lightcoral"
            />
            <Card
                title="En mis tiempos libres me gusta"
                item1="Escuchar musica"
                item2="Ver series"
                item3="Estudiar"
                background="lightblue"
            />
            <Card
                title="Micomida Favorita"
                item1="Aji de gallina"
                item2="Lomo saltado"
                item3="Ceviche"
                background="lightsalmon"
            />
            <Card
                title="Mi stack en tecnologia"
                item1="Html"
                item2="Css"
                item3="Javascript"
                background="yellow"
            />
        </div>
    );
};
export default CardExample;
