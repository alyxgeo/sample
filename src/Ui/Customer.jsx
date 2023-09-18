import { useEffect, useState } from "react"


const Customer = () => {

    const [users, setUsers] = useState([])



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState(null)



    //console.log(name)


    useEffect(() => {

        async function getUser() {
            const res = await fetch('https://reqres.in/api/users');
            if (!res.ok) throw Error('Failed getting menu');
            const { data } = await res.json();
            //console.log(data)
            setUsers(data)

            // setName(data[0].first_name)
            // setEmail(data[0].email)
            // setUserId(data[0].id)

        }

        getUser();

    }, [])



    //console.log(users)


    const deleteUser = (id) => {
        //console.log(id)

        fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        }).then(
            (response) => {
                response.json().then(
                    (result) => {
                        console.log(result)
                    }
                )

            })
    }



    const editUser = (id) => {
        //console.log(users[id - 1])


        setName(users[id - 1].first_name)
        setEmail(users[id - 1].email)
        setUserId(users[id - 1].id)

    }


    return (
        <div>
            <h1>Customer</h1>

            <table border='1'>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>operations</td>
                    </tr>

                    {users.map((user, i) => (

                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.email}</td>

                            <td><button
                                onClick={() => deleteUser(user.id)}
                            >delete</button></td>

                            <td><button
                                onClick={() => editUser(user.id)}
                            >edit</button></td>

                        </tr>

                    ))}

                </tbody>
            </table>



            <div>
                <input type="text" name="name" placeholder="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>

                <input type="email" name="email" placeholder="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button >update user</button>

            </div>



        </div>
    )
}

export default Customer