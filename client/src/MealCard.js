import React from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const MealCard = ( props ) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header ><p data-testid='mealName'>{props.name}</p></Card.Header>
        <Card.Meta>
        <p>{props.course}</p>
        </Card.Meta>
        <Card.Description>
        <p>{props.technique}</p>
        </Card.Description>
      </Card.Content>
    </Card>
    // <>
    //   <p data-testid='mealName'>{props.name}</p>
    //   <p>{props.course}</p>
    //   <p>{props.technique}</p>
    // </>
  )
}

export default MealCard