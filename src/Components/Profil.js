import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Profil = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error))
  }, [id])

  return (
    <div className="profil-container">
      <h1 className='profil-title'>Profil</h1>
      <h2 className='profil-name'>Name: {user.name}</h2>
      <h2 className='profil-email'>Email: {user.email}</h2>
      <h2 className='profil-phone'>Phone: {user.phone}</h2>
      <h2 className='profil-website'>Website: {user.website}</h2>
      <h2 className='profil-company'>Company: {user.company?.name}</h2>
      <h2 className='profil-address'>Address: {user.address?.street}, {user.address?.city}</h2>
      <h2 className='profil-zipcode'>Zipcode: {user.address?.zipcode}</h2>
    </div>
  )
}

export default Profil
