import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import {getprofilebyid,saveProfileReview } from "../../js/action/profileactions"
import { PROFILE_REVIEW_SAVE_RESET} from "../../js/const/actionType"


const Profilefiche = (props) => {
 
    const dispatch=useDispatch()

    const getprofilefiche=()=>{
        dispatch(getprofilebyid (props.match.params.id))       
    }
    

  useEffect(() => {
    getprofilefiche()}, []);

    const profile= useSelector(state => state.profileReducer.profile)
    const isloading= useSelector(state => state.profileReducer.isloading)
    //ratin work
    const isAuth = useSelector((state) => state.authReducer.isAuth);
     const [rating, setRating] = useState(0);
     const [comment, setComment] = useState('')
     const profileReviewSave = useSelector(state => state.profileReducer.profileReviewSave)
    //const { success: profileSaveSuccess } = profileReviewSave;
    
     
  /*useEffect(() => {
    
      if (!profileReviewSave ) {
      alert('no Review submitted successfully.')
    }
      else{
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PROFILE_REVIEW_SAVE_RESET });
    }
  })*/
  
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProfileReview(props.match.params.id, {
        name: isAuth.name,
        rating: rating,
        comment: comment,
      })
    );
  };
   //if the component still loading
  if (isloading) {
  return (
     <h1>spinner....</h1>
    );
  //  if there is no profile in the response
  } else if (!profile) {
   return <h1>Oups !!!! 404 Not Fount :( </h1>;
  }
   //if evrything is OK show the component
  else
    return (
      <div>
     
        <p className="text-pr">{profile.profileName}</p>
        <p className="text-pr">{profile.avatar}</p>
        <p className="text-pr">{profile.speciality}</p>
        <p className="text-pr">{profile.category}</p>
        <p className="text-pr">{ profile.desciption}</p>
        <p className="text-pr">{profile.adress}</p>
        <p className="text-pr">{profile.codePostal}</p>
        <p className="text-pr">{profile.phoneNumber}</p>
        <p className="text-pr">{profile.Diploma}</p>
        <p className="text-pr">{profile.Rating}</p>

        

 
      
                
        { isAuth ? (
          <div>
             <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={profile.Rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
          </div>
          ) : (
            <div>
              
              Please <Link to="/Login">Sign-in</Link> to write a Rate.
            </div>
          )}
        </div>
    );
};

export default Profilefiche;