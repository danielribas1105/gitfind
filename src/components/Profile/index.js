import './Profile.css';

const Profile = ({avatar, name, nameId, text}) => {
    return (
        <div className='box-profile'>
            <img src={avatar} className='box-image' alt='foto perfil'/>
            <div className='box-content'>
                <h2>{name}</h2>
                <small>{`@${nameId}`}</small>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Profile;