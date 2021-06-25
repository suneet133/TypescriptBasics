
// Generics

// create a function that adds a random id to the object. The object could be of any type and structure.

const addId = <T>(obj : T) => {
    const id = Math.random().toString(16);

    return {
        ...obj,
        id
    };
}

let randomObject1: UserInterface1 = {
    name: 'Jack Daniels'
}

interface UserInterface1 {
    name: string
}

/* 
Here <T> is a generic type
const addId: <UserInterface1>(obj: UserInterface1) => UserInterface1 & {
    id: string;
}
 */
console.log('Adding id to this object: ', addId(randomObject1))

interface PetInterface {
    name: string,
    hasOwner: boolean,
    ownerName?: UserInterface1
}

let randomObject2: PetInterface = {
    name: 'Golu',
    hasOwner: true,
    ownerName: {
        name: 'suneet'
    }
}

/* 
const addId: <PetInterface>(obj: PetInterface) => PetInterface & {
    id: string;
}
*/

console.log('Adding id to this object: ', addId(randomObject2))

/* 
A highly recommended approach would be to explicitly define the type while calling the function. Explicit declarations are easier to read.
*/

console.log('Adding id to this object: ', addId<PetInterface>(randomObject2))

/* There is a problem here though. You can pass a string here like addId('suresh') but this won't work because
    the function needs an object. So we can say that addId= <T extends object>
*/

const addId2 = <T extends object>(obj : T) => {
    const id = Math.random().toString(16);

    return {
        ...obj,
        id
    };
}

console.log('Adding id to this object: ', addId2<PetInterface>(randomObject2))

/* console.log('Adding id to this object: ', addId2<string>('sad boys')) */


// Generics in interface

interface LaptopInterface<T> {
    laptopName: string,
    data: T
}

let laptop1: LaptopInterface<{tag1: string, tag2: string}> = {
    laptopName: 'Asus M GU502',
    data: {tag1: 'Fast', tag2: 'lightweight'}
}

let laptop2: LaptopInterface<string[]> = {
    laptopName: 'MSI CRD2',
    data: ['Fast', 'Lightweight', 'IPS display', 'RGB keyboard']
}

// With this approach, we don't need to create additional interfaces. 



