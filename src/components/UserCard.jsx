const UserCard = ({ user, onViewProfile }) => {

    console.log("user:", user);
    const name = `${user.name?.first} ${user.name?.last}`;
    return (
        <div className="user-card">
            <img className="avatar-img" src={user.picture.large} alt={name} />
            <h2 className="name">{name}</h2>
            <p className="email">{user.email}</p>
            <button className="btn" onClick={onViewProfile}>View Profile</button>
        </div>
    );
};

export default UserCard;