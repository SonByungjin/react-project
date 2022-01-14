import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileFetch } from '../../modules/profile';
import { selectProfileData } from '../../modules/profile/selectors';

export const ProfileScreen: FC = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfileData);
    const id = new URLSearchParams(window.location.search).get('id') || '';
    useEffect(()=>{
        dispatch(profileFetch({
            id: id
        }));
    },[dispatch, id])

    return (
        <div>
            <h1>{profileData}</h1>
        </div>
    );
};
