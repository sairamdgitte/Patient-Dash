// import React from 'react';

// const Card = ({ name, gender, allergy, condition, id }) => {
//   return (
//     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//       <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
//       <div>
//         <h2>{name}</h2>
//         <p>{gender}</p>
//         <p>{allergy}</p>
//         <p>{condition}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;


import React, { useState, useEffect } from 'react';

const Card = ({ name, gender, allergy, condition, id }) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    // Try fakeface API first with optional gender filter
    const genderParam = gender === 'male' || gender === 'female' ? `?gender=${gender.toLowerCase()}` : '';
    const url = `https://fakeface.rest/face/json${genderParam}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.image_url) {
          setImgSrc(data.image_url);
        } else {
          throw new Error('No image_url in response');
        }
      })
      .catch(() => {
        // Fallback to Pravatar if fakeface fails
        setImgSrc(`https://i.pravatar.cc/200?u=${id}`);
      });
  }, [gender, id]);

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='profile' src={imgSrc} />
      <div>
        <h2>{name}</h2>
        <p>{gender}</p>
        <p>{allergy}</p>
        <p>{condition}</p>
      </div>
    </div>
  );
};

export default Card;
