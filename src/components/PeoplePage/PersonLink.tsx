import cn from 'classnames';
import { Person } from '../../types';
import { Link } from 'react-router-dom';

type Props = {
  name: string | null;
  people: Person[];
};

export const PersonLink = ({ name, people }: Props) => {
  if (!name) {
    return <td>-</td>;
  }

  const foundPerson = people.find(person => person.name === name);

  if (!foundPerson) {
    return <td>{name}</td>;
  }

  return (
    <td>
      <Link
        to={`/people/${foundPerson.slug}`}
        className={cn({ 'has-text-danger': foundPerson.sex === 'f' })}
      >
        {name}
      </Link>
    </td>
  );
};
