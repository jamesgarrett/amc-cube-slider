import React from 'react'

class Typography extends React.Component{
	render(){
		return(
			<div>
			<h2>Typography</h2>
            <tr>
              <p>Our typography classes use a numeric scale to define a flexible, unit independent type system.</p>

              <p>We use this system to translate our type accurately across platforms which
              use a variety of metrics for typography.</p>

              <p>We have provided a reference table for common sizing conversions:</p>
            </tr>

            <th className="row">
              <td className="text-left">Left Aligned</td>
            </th>
            <tr className="row">
              <td><h1 className="text-left">Display 1</h1></td>
            </tr>

            <tr className="row">
              <td><h2 className="text-left">Display 2</h2></td>
            </tr>

            <tr className="row">
              <td><h3 className="text-left">Display 3</h3></td>
            </tr>
                
            <tr className="row">
              <td><h4 className="text-left">Display 4</h4></td>
            </tr>   

            <tr className="row">
              <td><h5 className="text-left">Display 5</h5></td>
            </tr>

            <tr className="row">
              <td><h6 className="text-left">Display 6</h6></td>
            </tr>
            </div>
		)
	}
	
}

export default Typography;