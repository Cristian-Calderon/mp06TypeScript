interface Identifiable {
    id: number;
}

interface Nameable {
    name: string;
}
// mixin es una funcion que realiza un cambio:
function IdentifiableMixin<TBase extends new (...args: any[]) => {}>(Base: TBase) {
    return class extends Base implements Identifiable {
        id: number = 0; 
    };
}
// <Quien va poder utilizarlo que herede de >
function NameableMixin<TBase extends new (...args: any[]) => {}>(Base: TBase) {
    return class extends Base implements Nameable{
        name: string = "Unnamed"; 
    };
}

// < el que herede tiene que tener ambos mixis>
abstract class EntityLog<T extends Identifiable & Nameable> {
    constructor(public entity: T) {}

    logProperty<K extends keyof T>(key: K): void {
        console.log(`The value of ${key.toString()} is:`, this.entity[key]);
    }
}

class BasicEntity {
    edat: number;
}

const BasicIdentfiableNameableEntity = NameableMixin(IdentifiableMixin(BasicEntity));

class EntityLogUsable extends EntityLog<Identifiable & Nameable>{};

const basic = new BasicIdentfiableNameableEntity();
const manager = new EntityLogUsable(basic);

manager.logProperty("name");

//TODO
//**
// Con el siguiente código, el objetivo es utilizar todos los elementos para obtener finalmente un objeto con datos donde poder invocar el método logProperty y por el id y el nombre. */



