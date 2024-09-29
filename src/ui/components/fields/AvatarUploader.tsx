import EditIcon from "../../../assets/svgs/EditIcon";

export default function AvatarUploader({
    imageUrl,
    onUpload
}: AvatarUploaderProps) {
    return (
    <div className="flex flex-col items-center mb-4">
        <div className="avatar__container">

      <img
        src={imageUrl}
        alt="Avatar"
        className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-gray-300"
        />
        <label htmlFor="profileUpload" aria-label="avatar__container--button" className="avatar__container--button">
            <EditIcon />
        </label>
        </div>
      <input
        type="file"
        hidden
        id="profileUpload"
        accept="image/*"
        onChange={onUpload}
        className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div >
  );
};

