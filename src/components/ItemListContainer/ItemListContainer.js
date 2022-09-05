import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'
const ItemListContainer = () => {

   const [productos, setProductos] = useState([])

   const { categoryId } = useParams()

   console.log(categoryId)



   useEffect(() => {
        pedirDatos() 
          .then( (res) => {
            if (!categoryId){

              setProductos(res)

            } else {
              setProductos(res.filter((prod) => prod.category === categoryId))
            }
        
          })
          .catch( (err) => {
           console.log(err)
          })
          .finally (() => {
           
          })
   }, [categoryId])


  return (

  <div>
    <ItemList productos={productos}/>
  </div>
  )
}

export default ItemListContainer