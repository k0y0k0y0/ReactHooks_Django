import React from 'react'

const CountDiplay = ({name, count}) => {
  console.log(`display ${name}`)
  return (
    <div>
      {count}
    </div>
  )
}

export default React.memo(CountDiplay)
