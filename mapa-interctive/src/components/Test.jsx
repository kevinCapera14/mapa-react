import { useForm } from "react-hook-form"
import "./Test.css"

const Test = ({preguntas})=>{


    const {
        register,
        handleSubmit,
      } = useForm()

    const onSubmit = (data) => {
        const correctas = preguntas.map((p, i) => p.answer === data[`${i+1}`])
        const countTrue = correctas.filter(value => value).length;
        const porcentajeAcertado = (countTrue/correctas.length)*100 
        alert(`Acertaste el ${porcentajeAcertado}%`)
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex items-start justify-center flex-col">
    {preguntas.map((pregunta) => (
      <div key={pregunta.numb}>
        <p className="p-3 font-semibold">{pregunta.question}</p>
        <div className="p-3">
          {pregunta.options.map((option) => (
            <div  key={option}>
                <input type="radio" {...register(`${pregunta.numb}`, { required: true })} value={option}/>
                <label> {option}</label>
            </div>
          ))}
        </div>
      </div>
    ))}

    <input className="submit bg-gray-800 text-white hover:bg-orange-500 p-3 rounded-md m-8 items-center self-center" type="submit"/>
  </form>
}

export default Test