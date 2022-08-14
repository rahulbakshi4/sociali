import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { follow } from "../../features/users/usersSlice"
import toast from "react-hot-toast"
export const UserSuggestion = ({ suggestedUser }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector((store) => store.auth)
  const viewProfile = () => {
    navigate(`/profile/${suggestedUser?.username}`, { replace: true, state: { _id: suggestedUser?._id } })
  }
  return (
    <li className="border-b-2 last:border-none border-b-gray-800 flex items-center gap-5 py-2 px-4 w-72 cursor-pointer ">
      <img onClick={() => viewProfile()}
        src={suggestedUser?.avatarUrl} className="rounded-full w-10 h-10 object-cover" alt="user avatar" />
      <div onClick={() => viewProfile()} className="list-content">
        <p className="text-sm font-semibold">{suggestedUser?.name}</p>
        <p className="text-sm">@{suggestedUser?.username}</p>
      </div>
      <button onClick={() => {
        dispatch(follow({ token, userID: suggestedUser?._id }));
        toast.success(`You are now following @${suggestedUser?.username}`)
      }} className="btn btn-dark ml-auto">
        Follow
      </button>

    </li>
  )
}
