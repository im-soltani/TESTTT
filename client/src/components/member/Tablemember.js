import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {banartisan,unbanartisan} from "../../js/action/artisanAction"

function Tablemember({artisan}) {
    const dispatch=useDispatch()
    
    let value = '';
    let backgroundColor = '';
    let action;
    // console.log(this.state.baned);
    // console.log(this.props.obj._id);
    const banartisann=()=>{
        dispatch(banartisan(artisan._id))
        
    }
    const unbanartisann=()=>{
        dispatch(unbanartisan(artisan._id))          
    }
    if (artisan.banned==true) {
        value = 'Unban';
        backgroundColor = '#6495ED';
        action = unbanartisann;

    } else {
        value = 'Ban';
        backgroundColor = '#B22222';
        action = banartisann;
    }    

    
    return (
        
                    <tr className="row">
            <td className="col-lg-3">
            {artisan.firstName}
            </td>
            <td className="col-lg-3">
            {artisan.lastName} 
            </td>
            <td className="col-lg-3">
            {artisan.email} 
            </td>
            <td className="col-lg-3">
                    
            <div className = "form-group">
                    
                    <input type="submit" style={{backgroundColor:backgroundColor}}  value={value} onClick={action} />
                    </div>
            </td>
        </tr>
        
    )
}

export default Tablemember
