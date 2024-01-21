

class User{
    async GetUser(){
        const response = await fetch('http:http://localhost:3000/users')
        .then(response => response.json("cheguei"))

        const data = await response.json(name, email, password);
        console.log(data)

    }
}