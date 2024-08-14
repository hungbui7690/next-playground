import Link from 'next/link'

const DrinksList = ({ drinks }) => {
  return (
    <ul className='menu menu-vertical pl-0'>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          {/* 1. /drinks/:id -> go to /drinks/[id]/page.js */}
          <Link
            href={`/drinks/${drink.idDrink}`}
            className='text-xl font-medium'
          >
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DrinksList
