import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="users-container">
        {
            loading ? <h1>Loading...</h1> :  users.map((el) => (
        <Link to={`/Profil/${el.id}`} key={el.id} className="user-link">
          <div className="user-card">
            <span className="user-name">{el.name}</span>
          </div>
        </Link>
      ))
        }
     
    </div>
  )
}

export default Users
