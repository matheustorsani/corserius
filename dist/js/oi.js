let txtBrabo = {
    "Usuarios": {
        "1": "Otavio"
    },
    "Pedreiros": {
        "2": "dsdsdsd"
    },
    "Empregados": {
        "3": "João"
    }
}

const email = "oi@gmail.com"
const nome = "Roberto"
const telefone = "999999999"

let tudao = [email, nome, telefone]

txtBrabo.Usuarios[2] = tudao

console.log(txtBrabo)

// let otavio;
// for (const key in txtBrabo.Usuarios) {
//     if (txtBrabo.Usuarios[key] === "Otavio") {
//         otavio = { id: key, nome: txtBrabo.Usuarios[key] };
//         break;
//     }
// }

// if (otavio) return console.log("Otavio encontrado:", otavio);

// console.log("Otavio não encontrado");



