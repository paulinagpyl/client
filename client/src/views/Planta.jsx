import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams desde react-router-dom
import { Context } from "../store/PlantaContext";
import { Button, Card } from "react-bootstrap";

const Planta = () => {
  const { plantas, addCart } = useContext(Context);
  const { idPlanta } = useParams(); // Obteniendo el parámetro idPlanta de la URL
  const [plantaData, setPlantaData] = useState(null);

  useEffect(() => {
    // Buscando la planta específica por su id
    const foundPlanta = planta.find((planta) => planta.id === idPlanta);
    setPlantaData(foundPlanta);
  }, [idPlanta, plantas]); // Agregando idPlanta y plantas como dependencias para que se ejecute cuando cambien

  if (!plantaData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      <Card className="card" style={{ width: "18rem" }} key={plantaData.id}>
        <Card.Img className="photo" variant="top" src={plantaData.img} />
        <Card.Body className="Card">
          <Card.Title>
            {console.log(plantaData.detalle)}
            plantaData.name.charAt(0).toUpperCase() + plantaData.name.slice(1)
          </Card.Title>
          <Card.Text>Detalle:{plantaData.detalle}</Card.Text>
          <Card.Text>Precio: {plantaData.price}</Card.Text>
          <Button variant="primary" onClick={() => addCart(plantaData)}>
            Añadir
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Planta;
