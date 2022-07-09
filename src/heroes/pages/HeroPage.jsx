import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();
  
  // se memoriza la funcion con el objetivo de evitar reproceso al redibujar el componente
  // la funciona getHero se ejecuta cuando cambie el [ heroId ]
  const hero = useMemo( () => getHeroById(heroId), [ heroId ] );

  const onNavigateBack = () => {
    navigate(-1) //   <- regresa al usuario a la anterior pantalla
    // (hero.publisher === 'DC Comics')
    // ? navigate('/dc')
    // : navigate('/marvel')
  }

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4'>
        <img 
          src={ `/assets/heroes/${heroId}.jpg`}
          alt={ hero.superhero }
          className="img-thumbnail"
        />
      </div>
      <div className='col-8'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> { hero.alter_ego }</li>
          <li className='list-group-item'> <b>Publisher:</b> { hero.publisher }</li>
          <li className='list-group-item'> <b>First appearance:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className='mt-3'> Characters </h5>
        <p>{hero.characters}</p>

        <button
          className='btn btn-outline-primary'
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
