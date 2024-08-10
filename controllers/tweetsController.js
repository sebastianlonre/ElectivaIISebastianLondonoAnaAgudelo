const tweets = [
  {
    idTweets: "01",
    userName: "@Ana",
    date: "10/08/2024 a las 8:16",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur commodo aliquam. Pellentesque id diam ac neque elementum bibendum ut a lacus. Nullam posuere consequat libero, vitae aliquet nibh maximus dapibus. Sed et convallis quam, vitae ultricies odio. Duis suscipit arcu in mi fermentum scelerisque. Cras varius lacus non rhoncus blandit.",
  },
  {
    idTweets: "02",
    userName: "@Carlos",
    date: "10/08/2024 a las 9:30",
    content: "Aenean non urna nec sapien tempor blandit. Morbi eget arcu vel ligula interdum cursus. Vestibulum tincidunt massa ut lectus dapibus, ut facilisis nunc ullamcorper.",
  },
  {
    idTweets: "03",
    userName: "@Laura",
    date: "10/08/2024 a las 10:45",
    content: "Curabitur convallis dui et diam volutpat, ac vulputate eros laoreet. Nulla vel ante vel quam malesuada venenatis. Quisque a pharetra dolor.",
  },
  {
    idTweets: "04",
    userName: "@Sofia",
    date: "10/08/2024 a las 11:00",
    content: "Suspendisse potenti. Integer in mauris purus. Fusce non ipsum nec metus auctor dapibus sit amet in odio.",
  },
  {
    idTweets: "05",
    userName: "@Miguel",
    date: "10/08/2024 a las 11:15",
    content: "Mauris sed erat at enim dictum dapibus. Proin laoreet velit ut tellus aliquet, nec scelerisque sapien ultrices.",
  },
  {
    idTweets: "06",
    userName: "@Elena",
    date: "10/08/2024 a las 11:45",
    content: "Vivamus in sapien nec lorem dapibus tincidunt. Morbi fringilla ligula non nisi efficitur, vel viverra magna feugiat.",
  },
  {
    idTweets: "07",
    userName: "@Jorge",
    date: "10/08/2024 a las 12:30",
    content: "Nunc et erat sed ligula viverra cursus. Duis malesuada sapien ac nulla fermentum, nec tristique neque cursus.",
  },
  {
    idTweets: "08",
    userName: "@Andrea",
    date: "10/08/2024 a las 13:10",
    content: "Phasellus quis ante vitae lacus facilisis placerat. Integer rutrum quam a ligula ullamcorper, nec tincidunt turpis auctor.",
  },
  {
    idTweets: "09",
    userName: "@Luis",
    date: "10/08/2024 a las 13:50",
    content: "Aliquam at felis sit amet eros vehicula pretium ut nec lacus. Praesent tristique arcu ac orci facilisis, at egestas nisl viverra.",
  },
  {
    idTweets: "10",
    userName: "@Clara",
    date: "10/08/2024 a las 14:30",
    content: "Donec non lectus non ex fermentum tincidunt. Etiam tempor lacus sed diam varius, a congue enim facilisis.",
  },
  {
    idTweets: "11",
    userName: "@Pedro",
    date: "10/08/2024 a las 15:00",
    content: "Sed at dolor nec urna interdum pulvinar a sed urna. Nam aliquet justo eu nunc malesuada, nec venenatis urna convallis.",
  }
];


const listTweets = (request, response)=>{

  response.json(tweets);
}

const newTweets = (request, response) =>{

  const {userName, content} = request.body;

  const data = tweets;
  const thisDate = new Date();
  const newID = data.length + 1;

  data.push({
    idTweets: newID,
    userName,
    date: thisDate,
    content
  })

  return response.status(201).json({menssage: "tweet publicado con exito", data});
}

const myTweets = (request, response) => {
  const { userName } = request.body;
  const data = tweets;
  const myPost = data.filter((tweet) => tweet.userName === userName);

  if(myPost.length === 0) {
    return response.status(404).json({
      error: "No se ha encontrado el usuario"
    });
  }

  response.json(myPost);
}

module.exports = {
  listTweets,
  newTweets,
  myTweets
}