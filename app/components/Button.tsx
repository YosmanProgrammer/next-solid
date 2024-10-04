// El código debe estar abierto para la extensión pero cerrado para modificación. 
// Esto significa que deberías poder agregar nuevas funcionalidades sin modificar el código existente.

// Podemos aplicar este principio mediante la creación de componentes reutilizables y configurables. 
// Por ejemplo, en lugar de modificar un componente cada vez que necesitas cambiar su comportamiento, 
// podemos hacerlo extensible a través de props.

//  O -> Open/closed principle / Principio de Abierto/Cerrado

// Mala forma
interface ButtonProps {
    label: string;
    isPrimary: boolean;
    onClick: () => void;
}

export default function Button({ label, isPrimary, onClick }: ButtonProps) {
    const className = isPrimary ? 'btn-primary' : 'btn-secondary';
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    )
}

// Forma correcta
// interface ButtonProps {
//     label: string;
//     variant: string;
//     onClick: () => void;
// }

// export default function Button({ label, variant = 'primary', onClick }: ButtonProps) {
//     return (
//         <button className={`btn-${variant}`} onClick={onClick}>
//             {label}
//         </button>
//     )
// }


// Las subclases que no se adhieren a la interfaz de su 
// clase padre pueden romper la funcionalidad.

// Garantizar que las subclases puedan utilizarse 
// indistintamente con su clase padre sin romper la aplicación.

// L -> Liscov substitution principle / Principio de Sustitución de Liskov

// import BaseButton from "@/app/components/BaseButton";

// Mala Forma
// interface ButtonProps {
//     label: string;
//     variant: string;
//     onClick: () => void;
// }
// export default function Button({ label, variant = 'primary', onClick }: ButtonProps) {
//     return (
//         <BaseButton onClick={onClick}>
//             <button className={`btn-${variant}`} onClick={onClick}>
//                 {label}
//             </button>
//         </BaseButton>
//     )
// }

// Forma correcta
// interface ButtonProps {
//     label: string;
//     variant: string;
//     onClick: () => void;
// }

// export default function Button({ label, variant = 'primary', onClick }: ButtonProps) {
//     return (
//         <BaseButton className={`btn-${variant}`} onClick={onClick}>
//             {label}
//         </BaseButton>
//     )
// }
