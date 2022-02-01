import Select from 'react-select';
import './style.css';

type Props = {
    order: string;
    handleSortOrder: (order: string) => void;
}

const Filters = ({ order, handleSortOrder }: Props) => {

    const sortType = [
        { value: 'id', label: 'Mais antigas' },
        { value: 'publishedAt', label: 'Mais novas' },
    ];

    return (
        <div className="container top-filters">
            <div className="form-group filters invisible">
                <Select
                    name="order"
                    placeholder={"Ordenar por"}
                />
            </div>
        </div>
    )
}

export default Filters;