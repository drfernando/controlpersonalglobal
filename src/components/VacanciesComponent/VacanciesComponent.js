import React from "react";
import VacantTabs from "../Fragments/VacanciesFragments/VacantTabs/VacantTabs";

export default class VacanciesComponent extends React.Component{
    render(){
        var vacan = [{
            key: 0,
            description:"Senior java developer is a computer programmer with an extreme level"+
            "of experience and all required skills. They build a java based application and software."+
            " They perform a certain type of task such as coding, bug solution, designing, and provide"+
            " a path of the solution to junior java developers.",
            title:"Senior Java Developer",
            dedication:"Tiempo Completo",
            mode:"Remoto",
            place:"Remoto / desde casa",
            category:"Programación Fullstack",
            skills:[{
                name:"Java",
                description: "Manejo de Java para ambientes de backend"
            }],
            activities:[
                "Diagnosticar y resolver problemas técnicos", 
                "Encauzar los problemas hasta la solución, en los plazos de tiempo acordados", 
                "Derivar oportunamente problemas sin resolver a los equipos internos o externos adecuados", 
                "Proporcionar respuestas y comentarios inmediatos y precisos a los clientes", 
                "Consultar la base de datos interna o recursos externos para proporcionar soluciones técnicas precisas",
                "Asegurarse de registrar adecuadamente todos los problemas",
                "Dar prioridad y gestionar varios problemas abiertos a la vez"
            ],
            profession:"Ingeniero en sistemas o carrera a fin.",
            experience:"Más de 1 año de experiencia en desarrollo de software",
            technical:[
                "Experiencia en desarrollo de software en el lado del servidor y / o desarrollo web del lado del cliente.",
                "Habilidades valiosas: TDD, Laravel, Symphony, SQL / Bases de datos, Node.js, Experiencia trabajando en el desarrollo de API, Comprensión de frameworks como VueJS o React"
            ],
            soft: ["Capacidad para trabajar en equipo.", "Pasión por desarrollar los mejores productos en torno a la Inteligencia Artificial."],
            language:["Inglés C1 – C2 (excluyente)"],
            schedule: "08:00 am a 06:00 pm (Huso horario de Miami)",
            days: "Lunes a Viernes",
            media: ["Gmail, Slack","Entorno de trabajo a usar: Windows"],
            test: true

        },{
            key: 1,
            description:"Un Desarrollador Junior o Junior Developer trabaja en un equipo de desarrollo escribiendo y manteniendo código para aplicaciones informáticas. Es un desarrollador de software de nivel básico que ayuda al equipo de desarrollo con todos los aspectos de diseño y codificación de software." +
                        "El enfoque principal del Junior Developer es aprender la base del código, escribir código básico, corregir errores, recopilar datos de usuarios. Además de responder las solicitudes del Senior Developer y ayudar con todas las funciones de codificación y diseño de software.",
            title:"Junior Java Developer",
            dedication:"Tiempo Completo",
            mode:"Remoto",
            place:"Remoto / desde casa",
            category:"Programación Fullstack",
            skills:[{
                name:"Java",
                description: "Manejo de Java para ambientes de backend"
            },
            {
                name:"Prueba",
                description: "Manejo de Prueba para ambientes de backend"
            }],
            activities:[
                "Diagnosticar y resolver problemas técnicos", 
                "Encauzar los problemas hasta la solución, en los plazos de tiempo acordados", 
                "Derivar oportunamente problemas sin resolver a los equipos internos o externos adecuados", 
                "Proporcionar respuestas y comentarios inmediatos y precisos a los clientes", 
                "Consultar la base de datos interna o recursos externos para proporcionar soluciones técnicas precisas",
                "Asegurarse de registrar adecuadamente todos los problemas",
                "Dar prioridad y gestionar varios problemas abiertos a la vez"
            ],
            profession:"Ingeniero en sistemas o carrera a fin.",
            experience:"Más de 1 año de experiencia en desarrollo de software",
            technical: [
                "Experiencia en desarrollo de software en el lado del servidor y / o desarrollo web del lado del cliente.",
                "Habilidades valiosas: TDD, Laravel, Symphony, SQL / Bases de datos, Node.js, Experiencia trabajando en el desarrollo de API, Comprensión de frameworks como VueJS o React"
            ],
            soft: ["Capacidad para trabajar en equipo.", "Pasión por desarrollar los mejores productos en torno a la Inteligencia Artificial."],
            language: ["Inglés C1 – C2 (excluyente)"],
            schedule: "08:00 am a 06:00 pm (Huso horario de Miami)",
            days: "Lunes a Viernes",
            media: ["Gmail, Slack","Entorno de trabajo a usar: Windows"],
            test: true
        }
    ]
        return(<VacantTabs vacancies={vacan}></VacantTabs>);
    }    
}