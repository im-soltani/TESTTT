import React,{useEffect} from 'react'
import { getartisan } from '../../js/action/artisanAction'
import {useDispatch,useSelector} from "react-redux"
import Tablemember from './Tablemember'

function Memberlist() {
    const dispatch=useDispatch();
    const artisans = useSelector((state) => state.artisanReducer.artisans);
    const getartisann=()=>{
      dispatch(getartisan())
    }
    useEffect(() => {
        getartisann();
      }, []);
    return (
        <div className="container">
        <table className="table table-striped">
          <thead>
            <tr className="row">
              <td className="col-lg-3"><strong>Artisan member</strong></td>
              <td className="col-lg-3"><strong>Profession</strong></td>
              <td className="col-lg-3"><strong>ggg</strong></td>
              <td className="col-lg-3"><strong>Ban</strong></td>
            </tr>
          </thead>
          <tbody>
         {artisans.map((artisan,i)=> <Tablemember key={i} artisan={artisan}/>)} 
          </tbody>
        </table>
    </div>
    )
}

export default Memberlist
