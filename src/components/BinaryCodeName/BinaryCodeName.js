import React from 'react'

const BinaryCodeName = () => {

    function convert() {
        var name = 'Julian'
        var output = "";
        for (var i = 0; i < name.length; i++) {
            output += name[i].charCodeAt(0).toString(2) + " ";
        }
        return output
      }

  return (
    <div> 
    Hello my name Julian but some computer also call me {convert()}
    </div>
  )
}

export default BinaryCodeName