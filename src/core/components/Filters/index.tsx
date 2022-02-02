import Select from 'react-select';
import './style.css';

type Props = {
    handleSortOrder: (order: string) => void;
}

const Filters = ({ handleSortOrder }: Props) => {

    const sortOptions = [
        { value: 'id', label: 'Mais antigas' },
        { value: '', label: 'Mais novas' },
    ];

    return (
        <div className="container top-filters">
            <div className="form-group filters">
                <Select
                    classNamePrefix="filter-select"
                    placeholder={"Ordenar por"}
                    options={sortOptions}
                    defaultValue={{ label: "Mais novas", value: '' }}
                    onChange={event => handleSortOrder(event!.value)}
                />
            </div>
        </div>
    )
}

export default Filters;