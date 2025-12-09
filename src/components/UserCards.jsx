import React from "react";

const UserCards = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, skills, about } = user;
  console.log(user);

  return (
    <div className="card bg-base-100 w-96 shadow-sm my-3.5">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <p>{age + " " + gender}</p>
        <div className="card-actions justify-center gap-6">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
