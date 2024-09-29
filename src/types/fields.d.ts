/* eslint-disable @typescript-eslint/no-explicit-any */
type AvatarUploaderProps = {
    imageUrl: string;
    onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
type  InputFieldProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string,
    register: any,
    errors: any,
    validation?: any;
}
type EditProfile = {
    name: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
    presentAddress: string;
    permanentAddress: string;
    postalCode: string;
    city: string;
    country: string;
    avatar: string;
}