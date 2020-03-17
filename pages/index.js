import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'

import { connect } from 'react-redux'
import WeatherWidget from "../src/containers/weather/WeatherWidget";
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

const Index = (props) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <WeatherWidget/>
    </Card>
  )
}



const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
