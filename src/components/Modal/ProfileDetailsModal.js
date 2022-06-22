import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { closeModal } from '../../features/utilities/utilitySlice'
import { isFollowing } from '../../utilities/isFollowing'
import { CloseIcon } from '../SVG/svg'

export const ProfileDetailsModal = ({ data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, token } = useSelector((store) => store.auth)
    return (
        <div className="lg:block md:block hidden bg-white border-2 mx-auto lg:mt-40 md:mt-20 w-72 border-gray-800 rounded-lg">
            <div className='px-2 flex justify-between border-b-2 border-b-gray-800 items-center'>
                <p className="p-2 ">Following</p>
                <span onClick={() => dispatch(closeModal())} className='p-1 hover:bg-light cursor-pointer rounded-full'><CloseIcon size={18} /></span>
            </div>
            <ul className="pt-2 list-none">
                {data?.map(({ _id, username, avatarUrl, name }) => {
                    return (
                        <li key={_id} className="border-b-2 last:border-none border-b-gray-800 flex items-center gap-5 py-2 px-4 w-72 cursor-pointer ">
                            <img onClick={() => {
                                navigate(`/profile/${username}`, { replace: true, state: { _id } })
                                dispatch(closeModal())
                            }}
                                src={avatarUrl} className="rounded-full w-10 h-10 object-cover" alt="user avatar" />
                            <div className="list-content">
                                <p className="text-sm font-semibold">{name}</p>
                                <p className="text-sm">@{username}</p>
                            </div>
                            {
                                (username !== user.username &&
                                    !isFollowing(data, username)) &&

                                <button onClick={() => {
                                    dispatch(follow({ token, userID: _id }));
                                    toast.success(`You are now following @${username}`)
                                }} className="btn btn-dark ml-auto">
                                    Follow
                                </button>}
                        </li>)
                })}
            </ul>
        </div>
    )
}


