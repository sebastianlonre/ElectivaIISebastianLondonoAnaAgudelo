const usersData = [
  {
    uid: "1",
    userName: "ana",
    email: "user1@example.com",
    password: "12345679",
    follow: ["2", "3", "4"],
    following: ["5", "6", "7"]
  },
  {
    uid: "2",
    userName: "carlos",
    email: "user2@example.com",
    password: "abcdef123",
    follow: ["1", "4", "5"],
    following: ["6", "7", "8"]
  },
  {
    uid: "3",
    userName: "laura",
    email: "user3@example.com",
    password: "qwerty456",
    follow: ["1", "2", "6"],
    following: ["7", "8", "9"]
  },
  {
    uid: "4",
    userName: "sofia",
    email: "user4@example.com",
    password: "zxcvbn789",
    follow: ["1", "3", "5"],
    following: ["2", "6", "10"]
  },
  {
    uid: "5",
    userName: "miguel",
    email: "user5@example.com",
    password: "mypass321",
    follow: ["2", "4", "6"],
    following: ["1", "3", "7"]
  },
  {
    uid: "6",
    userName: "elena",
    email: "user6@example.com",
    password: "password654",
    follow: ["1", "3", "5"],
    following: ["2", "4", "8"]
  },
  {
    uid: "7",
    userName: "jorge",
    email: "user7@example.com",
    password: "pass9876",
    follow: ["2", "5", "6"],
    following: ["1", "3", "9"]
  },
  {
    uid: "8",
    userName: "andrea",
    email: "user8@example.com",
    password: "securepass098",
    follow: ["1", "4", "7"],
    following: ["2", "5", "10"]
  },
  {
    uid: "9",
    userName: "luis",
    email: "user9@example.com",
    password: "mypassword123",
    follow: ["3", "6", "8"],
    following: ["1", "4", "7"]
  },
  {
    uid: "10",
    userName: "clara",
    email: "user10@example.com",
    password: "strongpass123",
    follow: ["2", "4", "9"],
    following: ["3", "6", "8"]
  },
  {
    uid: "11",
    userName: "pedro",
    email: "user11@example.com",
    password: "anotherpass789",
    follow: ["1", "5", "7"],
    following: ["2", "4", "6"]
  }
];

const listMysocial = (request, response) => {
  const { uid } = request.params;

  const data = usersData;

  const userFind = data.find((user) => user.uid === uid);

  if (userFind.length === 0) {
    return response.status(404).json({
      error: "No se ha encontrado el usuario"
    });
  }


  response.json({ user: userFind.userName,follow: userFind.follow, following: userFind.following });
}

const followUser = (request, response) => {
  const { uid, uidFollowing } = request.body;

  const user = usersData.find(user => user.uid === uid);

  const userToFollow = usersData.find(user => user.uid === uidFollowing);

  if (!user || !userToFollow) {
    return response.status(404).json({
      error: "Alguno de los usuarios no fue encontrado"
    });
  }

  if (user.follow.includes(uidFollowing)) {
    return response.status(200).json({
      error: "Ya estás siguiendo a este usuario"
    });
  }

  user.follow.push(uidFollowing);

  userToFollow.following.push(uid);

  response.status(200).json({
    message: `Ahora sigues a ${userToFollow.userName}`,
    user: user.userName,
    follow: user.follow
  });
};



module.exports = {
  listMysocial,
  followUser
}
