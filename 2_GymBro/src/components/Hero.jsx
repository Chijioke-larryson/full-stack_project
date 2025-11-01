import React from 'react'

export const Hero = () => {
    return (
       <>
           <h5>Complete this training program if you want to...</h5>
           <ol className="benefits-list">
               <li>Follow a simple program with guaranteed results</li>
               <li>Get fit, healthy, strong and shredded 🏋️‍♂️ </li>
               <li>Learn more about gym, training and technology</li>
               <li>Become a lifetime gym bro 😎 </li>

           </ol>
           <h3>The Rules</h3>
           <p>To complete this program, you <b>MUST</b> follow these 3 simple rules</p>
           <ul className="rules-list">
               <div className="rule-item">
                   <p><b>Rest</b></p>
                   <p>Make sure to include rest days whenever they’re needed. </p>


               </div>

               <div className="rule-item">
                   <p><b>Reps</b></p>
                   <p>Every rep is a pause rep following a<abbr title="Lower the weight for 2 seconds, pause for 2 seconds at the bottom, then lift it back up over 2 seconds"> 2 -2 -2 tempo </abbr></p>


               </div>
               <div className="rule-item">
                   <p><b>Weight*</b></p>
                   <p>Choose the heaviest weight you can lift while maintaining proper form throughout the set.</p>


               </div>

           </ul>
           <small>* The first and second set should be at 75% and 85% of your working weight used for the last two sets.</small>
           <h3>Training Plan</h3>
           <p>This training plan uses a structure known as the<b>Bro Split</b>, and follows this rotation ⬇️</p>
           <p><b><i>Push &rarr; Pull &rarr; Leg&rarr; Repeat&rarr;</i></b></p>
           <p>Complete all of the workouts below and track your progress along the way 👨🏾‍💻</p>
       </>
    )
}
