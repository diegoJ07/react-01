import { useState } from "react";

export function UserCard({ name, firstName, age, pais }) {
  const calculateAge = 2025 - age - 1;

  const [showAge, setShowAge] = useState(true);

  return (
    <article className={`card-article ${age > 50 ? "card-red" : "card-green"}`}>
      <div className="container">
        <h2 className="card-name">Nombre: {name}</h2>
        <p className="card-first-name">
          <strong>Apellido: {firstName}</strong>
        </p>
        {showAge && (
          <p className="card-age">
            <strong>Edad: {age}</strong>
          </p>
        )}
        <p className="card-pais">
          <strong>País: {pais}</strong>
        </p>
        <p className="card-birth">
          <strong>Nació en el año: {calculateAge}</strong>
        </p>
      </div>
      <button className="view-age" onClick={() => setShowAge(!showAge)}>
        {" "}
        {showAge ? "Ocultar Edad" : "Mostrar Edad"}
      </button>
    </article>
  );
}
