let people = [
    {
      id: 0,
      emai: "a@n",
      password: "aa",
      nickname: "nicka",
      birth: 861111,
      gender: "male"
    },
    {
      id: 2,
      emai: "b@n",
      password: "bb",
      nickname: "nickb",
      birth: 862222,
      gender: "female"
    },
    {
      id: 3,
      emai: "c@n",
      password: "cc",
      nickname: "nickc",
      birth: 863333,
      gender: "male"
    },
    {
      id: 4,
      emai: "d@n",
      password: "dd",
      nickname: "nickd",
      birth: 864444,
      gender: "female"
    }
  ];

let books = [
  {
    id: 0,
    review_no: 1,
    user_email: "a@n",
    user_id: "nicka",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F624908%3Ftimestamp%3D20190124021654",
    title: "책을 지키려는 고양이(반양장)",
    author: "나쓰카와 소스케",
    comment: "책을 지키려는 고양이",
    memo: "고양이"
  },
  {
    id: 1,
    review_no: 2,
    user_email: "a@n",
    user_id: "nicka",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1175302%3Ftimestamp%3D20191225122402",
    title: "스타워즈: 새로운 희망(스타워즈 시네아트 시리즈)",
    author: "라이더 윈덤",
    comment: "스타워즈 짱짱!",
    memo: "스타워즈 감독은 조지루카스"
  },
  {
    id: 1,
    review_no: 3,
    user_email: "a@n",
    user_id: "nicka",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F517917%3Ftimestamp%3D20191206122451",
    title: "지구별 여행자",
    author: "류시화",
    comment: "지구를 여행하는 히치하이커",
    memo: "시인 류시화가 만난 인도인들은 대부분 가난하고 평범한 사람들이지만 엉뚱하고, 재치 넘치고, 유쾌하다"
  },
  {
    id: 2,
    review_no: 1,
    user_email: "c@n",
    user_id: "nickc",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5117493%3Ftimestamp%3D20191227130836",
    title: "웹 앱 API 개발을 위한 GraphQL(프로그래밍인사이트)",
    author: "이브 포셀로",
    comment: "그래프QL 개발을 위한 가이드",
    memo: "그래프QL은 쉬운것 같으면서 어렵다....."
  },
  {
    id: 2,
    review_no: 2,
    user_email: "c@n",
    user_id: "nickc",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F743761%3Ftimestamp%3D20191227124112",
    title: "초보자를 위한 Node.js 200제",
    author: "김경록",
    comment: "초보자용 노드js",
    memo: "200 200 200 200"
  },
  {
    id: 3,
    review_no: 1,
    user_email: "d@n",
    user_id: "nickd",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F624908%3Ftimestamp%3D20190124021654",
    title: "책을 지키려는 고양이(반양장)",
    author: "나쓰카와 소스케",
    comment: "책을 지키려는 고양이",
    memo: "고양이"
  }
];

export const getBooks = () => books;

export const getById = id => {
  const filteredBooks = books.filter(book => book.id === id);
  return filteredBooks[0];
};

export const deleteBook = id => {
  const cleanedBooks = books.filter(book => book.id !== id);
  if (books.length > cleanedBooks.length) {
    books = cleanedBooks;
    return true;
  } else {
    return false;
  }
};

export const addBook = (title, comment) => {
  const newBook = {
    id: `${books.length + 1}`,
    title,
    comment
  }
  books.push(newBook);
  return newBook;
}