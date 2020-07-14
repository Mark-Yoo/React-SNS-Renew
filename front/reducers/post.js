export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Mark-Yoo",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "Yuliya",
          },
          content: "hi!",
        },
        {
          User: {
            nickname: "Vladimir",
          },
          content: "Yay!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPost: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
