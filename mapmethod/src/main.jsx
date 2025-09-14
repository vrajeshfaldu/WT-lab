import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

import {Product} from './component/product.jsx'
// import { Student } from './component/faculty'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <table border={1} cellSpacing={0}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Department</th>
      </tr>
      </thead>

      <tbody>
        <Student/>
      </tbody>
    </table> */}
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Product />
        </div>
      </div>
</div>
  </StrictMode>
)
