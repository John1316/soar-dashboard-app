export default function UserItem({
    avatar,
    name,
    role
}: User) {
    return (
        <div className="transition-all users__list flex flex-col items-center">
            <img
                src={avatar}
                alt={name}
                className="users__list--avatar rounded-full object-cover mb-1"
            />
            <p className="users__list--name">{name}</p>
            <p className="users__list--role">{role}</p>
        </div>)
}
