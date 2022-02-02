import Select from 'react-select';
import './style.css';

type Props = {
    order: string;
    handleSortOrder: (order: string) => void;
}

const Filters = ({ order, handleSortOrder }: Props) => {

    const sortOptions = [
        { value: 'publishedAt', label: 'Mais antigas' },
        { value: '', label: 'Mais novas' },
    ];

    return (
        <div className="container top-filters">
            <div className="form-group filters">
                <Select
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