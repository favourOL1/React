import ProfilePic from '../assets/favourSei.jpg'


function Card (){
    return(
        <div className="card">
            {/* <img src="http://via.placeholder.com/150" alt="" /> */}
            <img className='card-image'  src={ProfilePic} width={"150px"} alt="dp" />
            <h2 className='card-title'> Programmer</h2>
            <p className='card-text'> I make youtube video and play video games</p>

        </div>

    );
}

export default Card