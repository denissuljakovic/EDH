import { useState, useEffect } from 'react';
import SignupList from '../components/signupp/SignUpList';


function ViewProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://edhealth-8e781-default-rtdb.firebaseio.com/signup.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const all = [];

        for (const key in data) {
          const single = {
            id: key,
            ...data[key]
          };

          all.push(single);
        }

        setIsLoading(false);
        setIsLoaded(all);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section >
      <h1 style={{textAlign: "center"}}>My Profile</h1>
      <SignupList all={isLoaded} />
    </section>
  );
}


export default ViewProfile;
