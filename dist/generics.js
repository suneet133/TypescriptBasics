// Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// create a function that adds a random id to the object. The object could be of any type and structure.
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var randomObject1 = {
    name: 'Jack Daniels'
};
/*
Here <T> is a generic type
const addId: <UserInterface1>(obj: UserInterface1) => UserInterface1 & {
    id: string;
}
 */
console.log('Adding id to this object: ', addId(randomObject1));
var randomObject2 = {
    name: 'Golu',
    hasOwner: true,
    ownerName: {
        name: 'suneet'
    }
};
/*
const addId: <PetInterface>(obj: PetInterface) => PetInterface & {
    id: string;
}
*/
console.log('Adding id to this object: ', addId(randomObject2));
/*
A highly recommended approach would be to explicitly define the type while calling the function. Explicit declarations are easier to read.
*/
console.log('Adding id to this object: ', addId(randomObject2));
/* There is a problem here though. You can pass a string here like addId('suresh') but this won't work because
    the function needs an object. So we can say that addId= <T extends object>
*/
var addId2 = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
console.log('Adding id to this object: ', addId2(randomObject2));
var laptop1 = {
    laptopName: 'Asus M GU502',
    data: { tag1: 'Fast', tag2: 'lightweight' }
};
var laptop2 = {
    laptopName: 'MSI CRD2',
    data: ['Fast', 'Lightweight', 'IPS display', 'RGB keyboard']
};
// With this approach, we don't need to create additional interfaces. 
