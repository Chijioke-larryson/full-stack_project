import React from 'react'

export const WorkoutCard = (props) => {
    const {trainingPlan, workoutIndex, type, dayNum, icon} = props

    const { warmup, workout } = trainingPlan || {}

    return (
        <div className="workout-container">
            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} WorkOut</b></h2>

                </div>

            </div>



            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>
            </div>


        </div>
    )
}
