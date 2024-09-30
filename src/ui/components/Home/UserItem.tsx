export default function UserItem({
    avatar,
    name,
    role
}: User) {
    return (
        <div className="transition-all  users__item flex flex-col items-center">
            <img
                src={avatar}
                alt={name}
                className="users__item--avatar rounded-full object-cover mb-1"
            />
            <p className="users__item--name">{name}</p>
            <p className="users__item--role">{role}</p>
        </div>)
}
