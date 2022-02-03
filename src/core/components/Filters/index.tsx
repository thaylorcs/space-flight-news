import Select from 'react-select';
import './style.css';

type Props = {
    handleSortOrder: (order: string) => void;
}

const Filters = ({ handleSortOrder }: Props) => {

    const sortOptions = [
        { value: 'id', label: 'Oldest' },
        { value: '', label: 'Newest' },
    ];

    return (
        <div className="container top-filters">
            <div className="form-group filters">
                <Select
                    classNamePrefix="filter-select"
                    placeholder={"Sort By"}
                    options={sortOptions}
                    defaultValue={{ label: "Newest", value: '' }}
                    onChange={event => handleSortOrder(event!.value)}
                />
            </div>
        </div>
    )
}

export default Filters;