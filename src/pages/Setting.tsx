/* eslint-disable @typescript-eslint/no-explicit-any */

import { Tabs, Tab, Button } from "@nextui-org/react";
import InputField from "../ui/components/fields/InputField";
import { useContext, useEffect } from "react";
import AvatarUploader from "../ui/components/fields/AvatarUploader";
import { useForm } from "react-hook-form";
import { REQUIRED_PATTERN } from "../constants/FieldsConstants";
import { FormContext } from "../context/FormContext";

export default function Setting() {

  const formContext = useContext(FormContext)
  const {
    editProfileSettingValues
  } = formContext as FormContextProps
  const {
    handleSubmit,
    reset,
    watch,
    register,
    formState: { errors },
    setValue } =
    useForm({
      defaultValues: {
        name: '',
        username: '',
        email: '',
        password: '',
        dateOfBirth: '',
        presentAddress: '',
        permanentAddress: '',
        postalCode: '',
        city: '',
        country: '',
        avatar: ''
      },
      mode: "onChange"
    })

  const avatarWatch = watch("avatar");

  // Save data to local storage
  const saveToLocalStorage = (data: any) => {
    localStorage.setItem('userSettings', JSON.stringify(data));
  };
  function handleAvatarUpload (event: React.ChangeEvent<HTMLInputElement>){
    if(event.target.files && event.target.files[0]){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue('avatar', base64String);
      };
      reader.readAsDataURL(file)
    }
  } 
  // Retrieve data from local storage
  // const retrieveFromLocalStorage = () => {
  //   const savedData = localStorage.getItem('userSettings');
  //   if (savedData) {
  //     reset(JSON.parse(savedData));
  //   }
  // };

  // Handle form submission
  const onSubmit = (data: any) => {
    saveToLocalStorage(data);
    alert('Settings saved successfully!');
  };

  // Fetch saved data on component mount
  useEffect(() => {
    if(editProfileSettingValues){
      // console.log("🚀 ~ useEffect ~ editProfileSettingValues:", editProfileSettingValues)
      reset(editProfileSettingValues)
    }
  }, [editProfileSettingValues]);
  return (
    <div className="setting__card">
      <div className="setting__card--tabs-container">
        <Tabs
          variant={"underlined"} 
          color="default"
          classNames={{
            base: `setting__card--tabs`,
            cursor: `setting__card--cursor`,
            tab: `setting__card--tab`,
            tabContent: `setting__card--tab-content`,
            tabList: `setting__card--tab-list gap-[30px] p-0`
          }}
          aria-label="Tabs variants">
          <Tab key="profile" title="Edit Profile">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="setting__card--form">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Avatar Uploader */}
                  <div className="lg:col-span-2 col-span-12 flex items-center justify-center">
                    <AvatarUploader
                      imageUrl={avatarWatch || '/user-avatar.png'}
                      onUpload={handleAvatarUpload}
                    />
                  </div>

                  {/* Input Fields */}
                  <div className="lg:col-span-10 col-span-12">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[22px]">
                      <InputField
                        register={register}
                        errors={errors}
                        name="name"
                        label="Your Name"
                        validation={{ required: 'Name is required', 
                          pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } 
                        }}
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="username"
                        label="Username"
                        validation={{ required: 'Username is required', pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } }}
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="email"
                        label="Email"
                        type="email"
                        validation={{ required: 'Email is required', 
                          pattern: { 
                          value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 
                          message: 'Invalid email format' } }}
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="password"
                        label="Password"
                        type="password"
                        validation={{ required: 'Password is required', pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } }}
                        />
                      <InputField
                        register={register}
                        errors={errors}
                        name="dateOfBirth"
                        label="Date of Birth"
                        validation={{ required: 'Date of Birth is required', pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } }}                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="presentAddress"
                        label="Present Address"
                        validation={{ required: 'Present Address is required', pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } }}  
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="permanentAddress"
                        label="Permanent Address"
                        validation={{ required: 'Permanent Address is required', pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } }} 
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="postalCode"
                        label="Postal Code"
                        validation={{ required: 'Postal code is required', pattern: { value: /^[0-9]{5}$/, message: 'Invalid postal code' } }}
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="city"
                        label="City"
                        validation={{ required: 'City is required', 
                          pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } 
                        }}
                      />
                      <InputField
                        register={register}
                        errors={errors}
                        name="country"
                        label="Country"
                        validation={{ required: 'Country is required', 
                          pattern: { value: REQUIRED_PATTERN, message: 'Invalid format' } 
                        }}                      />
                    </div>


                  </div>
                </div>
                <div className="flex justify-end mt-[41px]">
                  <Button type="submit" className="setting__card--button">
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Tab>
          <Tab key="Preferences" title="Preferences">

          </Tab>
          <Tab key="security" title="Security">

          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
