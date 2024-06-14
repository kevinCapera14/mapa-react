import { useEffect, useState } from "react";
import { departamentos } from "../../constants/deparamentos";
import parse from 'html-react-parser';
import Test from "./Test";

const Departamento = ({ location }) => {
  const [departamento, setDepartamento] = useState({
    titulo: "Antioquia",
    descricion: "",
    preguntas: [
      {
        numb: 1,
        question: "¿Cuál es la capital de Antioquia?",
        answer: "Medellín",
        options: ["Valledupar", "Sincelejo", "Medellín", "Gamarra"],
      },
    ],
  });

  const [isTestOpen, setisTestOpen] = useState(false);

  useEffect(() => {
    setDepartamento(departamentos.find((dpto) => dpto.titulo === location));
  }, [location]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-orange-500 text-5xl m-8">{departamento.titulo}</h1>
      <img src={departamento.imagen} alt="departamento" className="max-w-lg" />
      <div className="p-8">{parse(departamento.descricion)}</div>
      <img src={departamento.image} alt="foto" className="max-w-4xl border" />
      <button className="bg-gray-800 text-white hover:bg-orange-500 p-3 rounded-lg m-8" onClick={()=> setisTestOpen(!isTestOpen)}>Realizar test</button>
      {
        isTestOpen && <Test preguntas={departamento.preguntas}/>
      }
    </div>
  );
};

export default Departamento;
