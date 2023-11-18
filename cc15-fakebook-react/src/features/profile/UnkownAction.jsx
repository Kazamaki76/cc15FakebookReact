import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";

export default function UnkownAction({setStatusWithAuthUser}) {
  const { profileId } = useParams();
  const handleClickAddFriend = async () => {
    try {
      await axios.post(`/friend/${profileId}`);
      setStatusWithAuthUser('REQUESTER');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ActionButton onClick={handleClickAddFriend}> Add Friend </ActionButton>
  );
}
