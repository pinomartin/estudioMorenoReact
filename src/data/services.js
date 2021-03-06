import ContaLogo from '../img/contabilidad-icon.png'
import ImpuestoLogo from '../img/impuesto-icon.png'
import LaboralLogo from '../img/laboral-icon.png'


export const dataServices = [
  {
    "id": 1,
    "imgSrc": ImpuestoLogo,
    "imgAlt": "Servicio Impuestos",
    "title": "Impuestos",
    "listItems":{
      i1: "Asesoramiento en Impuestos Nacionales.",
      i2:"Provinciales y Municipales.",
      i3:"Liquidaciones Mensuales.",
      i4:"Regímenes de Información.",
      i5:"Requerimientos y Pedidos de Info."
    }
  },
    {
        "id": 2,
        "imgSrc": ContaLogo,
        "imgAlt": "Servicio Contabilidad",
        "title": "Contabilidad",
        "listItems":{
             i1: "Asesoramiento en Gestión Administrativa.", 
             i2: "Registraciones Contables.",
             i3: "Auditoría y Certificación de Estados Contables.",
             i4: "Aplicación de Herramientas y Controles.",
             i5: "Auditorías de Control Interno."
            }
    },
    {
        "id": 3,
        "imgSrc": LaboralLogo,
        "imgAlt": "Servicio Laboral Previsional",
        "title": "Laboral Previsional",
        "listItems": {
           i1:"Liquidación de Remuneraciones.",
           i2: "Libros, Registros y Planillas de personal.",
           i3: "Seguridad Social y Trámites Jubilatorios.",
           i4: "Retenciones de Ganancias.",
           i5: "Contestaciones de Requerimientos."}

    }
    
]