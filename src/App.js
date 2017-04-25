import React                from 'react'
import DaysTimer        from 'components/DaysTimer'
class App extends React.Component {
  render() {
      let style = {
          parentDiv:{
              background: '#ccc',
              display: 'inline-block'
          },
          value:{
              display: 'inline-block',
              padding: '10px'
          }
      }
      let date = "2018-04-15T16:00:00.000+05:30";
    return (
      <DaysTimer
          style={style}
          endDate={date}
      />
        
    )
  }
}
export default App
