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
    review_no: 1,
    user_email: "b@n",
    user_id: "nickb",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F624908%3Ftimestamp%3D20190124021654",
    title: "책을 지키려는 고양이(반양장)",
    author: "나쓰카와 소스케",
    comment: "책을 지키려는 고양이",
    memo: "고양이"
  },
  {
    id: 2,
    review_no: 1,
    user_email: "c@n",
    user_id: "nickc",
    thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F624908%3Ftimestamp%3D20190124021654",
    title: "책을 지키려는 고양이(반양장)",
    author: "나쓰카와 소스케",
    comment: "책을 지키려는 고양이",
    memo: "고양이"
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