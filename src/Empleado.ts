interface Comparable<T> {
}

export class Empleado implements Comparable<Empleado> {
    id: number;
    nombre: string;
    puesto: string;
    despacho: string;

    constructor(id: number, nombre: string, puesto: string, despacho: string) {
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.despacho = despacho;
    }

    toString(): string {
        return `Empleado: ${this.nombre}, ID: ${this.id}`;
    }

    getId(): number {
        return this.id;
    }

    compareTo(emp: Empleado): number {
        if (this.id < emp.getId()) {
            return -1;
        } else if (this.id > emp.getId()) {
            return 1;
        } else {
            return 0;
        }
    }
}
