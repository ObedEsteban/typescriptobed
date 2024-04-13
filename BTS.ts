import { Logger, LoggerFactory } from 'path/to/logger';

interface IBST<T> {

}

class BST<T extends BST<any>> implements IBST<T> {
    private static readonly LOGGER: Logger = LoggerFactory.getLogger(BST);

    valor: T | null;
    izdo: BST<T> | null;
    dcho: BST<T> | null;
    padre: BST<T> | null;

    constructor() {
        this.valor = null;
        this.izdo = null;
        this.dcho = null;
        this.padre = null;
    }

    insertar(emp: T): void {
        this.insertarImp(emp, null);
    }

    private insertarImp(emp: T, padre: BST<T> | null): void {

    }

    existe(id: number): boolean {

        return false;
    }

    obtener(id: number): T | null {

        return null;
    }

    esHoja(): boolean {

        return false;
    }

    esVacio(): boolean {

        return false;
    }

    preOrden(): void {

    }

    postOrden(): void {

    }

    inOrden(): void {

    }

    eliminar(id: number): void {

    }

    private eliminarImpl(id: number): void {

    }

    private obtenerMinimo(): BST<T> {

        return new BST<T>();
    }
}

