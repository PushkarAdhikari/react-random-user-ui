const SkeletonCard = () => {
    return (
        <div className="user-card skeleton-card">
            <div className="skeleton avatar"></div>

            <div className="content">
                <div className="skeleton name"></div>
                <div className="skeleton text"></div>
                <div className="skeleton text small"></div>
                <div className="skeleton text small"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;