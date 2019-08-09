import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const MealCard = ({ name, course, technique }) => {
  return (
    <Card>
      <Card.Content>
        <Icon name='food' />
        <Card.Header >
          <p data-testid='mealName'>{name}</p>
        </Card.Header>
        <Card.Meta>
          <p>{course}</p>
        </Card.Meta>
        <Card.Description>
          <p>{technique}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default MealCard