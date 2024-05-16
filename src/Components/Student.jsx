import propsTypes from 'prop-types'

function Student (props){
    return (
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
Student.propsTypes = {
    name: propsTypes.name,
    age: propsTypes.age,
    isStudent: propsTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student