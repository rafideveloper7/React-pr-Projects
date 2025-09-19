import React from 'react'
import Card from '../Card'

const CardSection = ({children}) => {
    console.log(children.id)
  return (
    <Card>
        {children}
    </Card>
  )
}

export default CardSection