import './Profile.css';
import photo from '../../assets/images/foto-daniel-ribas.PNG';

const Profile = () => {
    return (
        <div className='box-profile'>
            <img src={photo} className='box-image' alt='foto perfil'/>
            <div className='box-content'>
                <h2>Daniel Ribas</h2>
                <small>@drcode</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe, temporibus voluptate mollitia porro magni ex quaerat? Voluptas aliquid repellat corporis! Ipsam animi accusamus, similique id dolorum voluptates magni iste.
                </p>
            </div>
        </div>
    );
}

export default Profile;