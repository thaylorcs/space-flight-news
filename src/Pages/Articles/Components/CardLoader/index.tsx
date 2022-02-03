import ContentLoader from "react-content-loader";

const CardLoader = () => {
    const loaderItems = [0, 1, 2, 3, 4];

    return (
        <>

            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    width={800}
                    height={290}
                    viewBox="0 0 400 150"
                    backgroundColor="#1e2022"
                    foregroundColor="#fff"
                >
                    <rect x="0" y="25" rx="0" ry="0" width="150" height="119" />
                    <rect x="190" y="30" rx="0" ry="0" width="240" height="25" />
                    <rect x="190" y="80" rx="0" ry="0" width="210" height="10" />
                    <rect x="190" y="100" rx="0" ry="0" width="210" height="10" />
                    <rect x="190" y="120" rx="0" ry="0" width="210" height="10" />
                </ContentLoader>
            ))}
        </>
    )
}

export default CardLoader;

