import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result)=>{
        confirm,st[uploadPhoto, user] = results;
        console.log(`${photo.body} ${user.firstname} ${user.first.Name} ${suer.lastName}`);
    })
    .catcj (() => {
        console.log('signup system offline');
    })
}
