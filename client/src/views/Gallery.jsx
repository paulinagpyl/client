import { useContext, useState } from "react";
import { Context } from "../store/PlantaContext";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Gallery = () => {
  const { plantas, addCart } = useContext(Context);
  const navigate = useNavigate();

  if (!plantas) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      
      {plantas.map((planta) => (
        <Card className="card" style={{ width: "18rem" }} key={planta.id}>
          <Card.Img className="photo" variant="top" src={planta.img} />
          <Card.Body className="Card">
            <Card.Title>
              {planta.name.charAt(0).toUpperCase() + planta.name.slice(1)}
            </Card.Title>
            <Card.Text>Precio: {planta.price}</Card.Text>
            <Card.Text>Descripción: {planta.detalle}</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/plantas/${plantas.id}`)}
            >
              Ver más{" "}
            </Button>
            <Button variant="primary" onClick={() => addCart(plantas)}>
              Añadir
            </Button> 
          </Card.Body>
        </Card>
      ))} 
     
    </div>
  );
};

export default Gallery;
