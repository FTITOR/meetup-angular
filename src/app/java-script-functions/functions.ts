export function saludoFunction(nombre: string, edad: number): string {
    const SALUDO = 'Hola ' + nombre + ' tu edad es: ' + edad;
    return SALUDO;
}


(nombre: string, edad: number) => 'Hola ' + nombre + ' tu edad es: ' + edad;
