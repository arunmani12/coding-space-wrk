import React from 'react'
import UpBar from "./UpBar";
import classes from './Direct.module.css'


export default function Direct() {
    return (
        <>
        <UpBar/>
            
        <div className={classes.directdiv}>
            <h4>Direct referals of 707183</h4>
            <div className = {classes.searchDiv}>
                <div>
                display <select></select>  Records Per Page
                </div>
                <div>
                 <span>Search : <input type='text'/></span>
                </div>
            </div>
            <table>
                <thead>
                  <tr>
                      <th>Serial</th>
                      <th>Serial</th>
                      <th>Serial</th>
                      <th>Serial</th>
                      <th>Serial</th>
                      <th>Serial</th>
                      <th>Serial</th>
                      <th>Serial</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>23433</td>
                      <td>23433</td>
                      <td>23433</td>
                      <td>23433</td>
                      <td>23433</td>
                      <td>23433</td>
                      <td>23433</td>
                      <td>23433</td>
                  </tr>
                  </tbody>
              </table>

        <p className={classes.endName}>Showing page 1 of 1</p>

        </div>
        </>
    )
}
