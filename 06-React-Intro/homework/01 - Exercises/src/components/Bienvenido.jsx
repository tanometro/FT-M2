import React from "react";
import Botones from "./Botones/Botones"

const studentName = "Angelo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
  return <div>
    <h1>App React Henry</h1>
    <h3>{studentName}</h3>
    <ul>{techSkills.map((el) => {
        return <li>{el}</li>
    })}</ul>
    <Botones alerts={alerts}/>
  </div>;
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
