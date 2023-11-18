import { useParams } from 'react-router-dom';
import ActionButton from './ActionButton';
import axios from '../../config/axios';

export default function RequesterAction({setStatusWithAuthUser}) {
  const {profileId} = useParams();
  const handleClickCancellation = async() => {
    try{
      await axios.delete(`./friend/${profileId}/cancel`)
      setStatusWithAuthUser('UNKNOWN');
    }catch(err) {
      console.log(err)
    }
  }

  return <ActionButton onClick={handleClickCancellation}>Cancel request</ActionButton>;
}


