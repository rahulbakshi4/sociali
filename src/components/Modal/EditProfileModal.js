import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../features/users/usersSlice";
import { closeModal } from "../../features/utilities/utilitySlice";
import { CloseIcon, ImgUploadIcon } from "../SVG/svg";

export const EditProfileModal = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((store) => store.auth);
    const { userProfile } = useSelector((store) => store.users);
    const [userData, setUserData] = useState({ ...userProfile })
    useEffect(() => {
        setUserData({ ...userProfile })
    }, [])
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        let base64File = await toBase64(file);
        setUserData((prev) => ({ ...prev, avatarUrl: base64File }));
    };
    return (
        <div className="bg-white border-2 mx-auto lg:mt-40 md:mt-20 max-w-md border-gray-800 rounded-lg">
            <div className='px-2 flex justify-between border-b-2 border-b-gray-800 items-center'>
                <p className="p-2 ">Edit Profile</p>
                <span onClick={() => dispatch(closeModal())} className='p-1 hover:bg-light cursor-pointer rounded-full'><CloseIcon size={18} /></span>
            </div>
            <ul className="list-none p-2 ">
                <li className="p-2 flex gap-8">
                    <span className="basis-1/5  font-semibold">Avatar</span>
                    <span className="grow "><img className="rounded-full w-44 h-44 object-cover " src={userData.avatarUrl} alt="" /></span>
                    <div className="flex gap-2 items-end relative">
                        <div className="cursor-pointer"><ImgUploadIcon size={24} /></div>
                        <input
                            className='absolute w-6 cursor-pointer opacity-0'
                            accept='image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp'
                            type='file'
                            onChange={onFileChange}
                        />
                    </div>
                </li>
                <li className="p-2 flex gap-8">
                    <span className="basis-1/5  font-semibold">Name</span>
                    <span className="grow ">{userData.name}</span>
                </li>
                <li className="p-2 flex gap-8">
                    <span className="basis-1/5  font-semibold">Username</span>
                    <span className="grow">{userData.username}</span>
                </li>
                <li className="p-2 flex gap-8">
                    <span className="basis-1/5 font-semibold">Bio</span>
                    <textarea className="grow bg-white appearance-none border-2 h-max rounded w-full 
                                    py-2 px-4 text-gray-900 leading-tight focus:outline-none resize-none
                                    focus:bg-white focus:border-gray-500 drop-shadow-sm"
                        value={userData.bio}
                        onChange={(e) => setUserData((prev) => ({ ...prev, bio: e.target.value }))}
                        type="text" />
                </li>
                <li className="p-2 flex gap-8">
                    <span className="basis-1/5  font-semibold">Website</span>
                    <input className="grow bg-white appearance-none border-2 rounded w-full 
                                    py-2 px-4 text-gray-900 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-gray-500 drop-shadow-sm"
                        value={userData.portfolio !== '' ? userData.portfolio : 'https://'}
                        onChange={(e) => setUserData((prev) => ({ ...prev, portfolio: e.target.value }))}
                        type="text" />
                </li>
            </ul>
            <div className="px-6 py-1 mb-2">

                <button onClick={() => {
                    dispatch(editProfile({ token, userData: { ...userData } }))
                    dispatch(closeModal())
                    toast.success('Profile Updated Successfully')
                }} className="btn btn-dark px-10 flex ml-auto">Save</button>
            </div>
        </div>
    )
}
