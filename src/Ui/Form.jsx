import { useState } from "react"


const Form = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')



    //console.log(name)
    //console.log(email)


    function saveData() {
        let data = { name, email }
        //console.log(data)

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(
            (response) => {
                response.json().then(
                    (result) => {
                        console.log(result)
                    }
                )

            }
        )
    }






    return (
        <div>
            <input type="text" name="name" placeholder="name" value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>

            <input type="email" name="emaile" placeholder="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={saveData}>save new user</button>

        </div>
    )
}

export default Form