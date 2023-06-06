import './Itens.css';

const Itens = ({title, link, description}) => {
    return (
        <div className='container'>
            <h3>{title}</h3>
            <a href={link}>{link}</a>
            <p>{description}</p>
        </div>
    );
}

export default Itens;