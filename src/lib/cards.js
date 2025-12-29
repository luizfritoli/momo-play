const shuffle = (cards) => {
      let arr = [...cards]

      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr
    }

const cards = [
    {
        id: 1,
        card: "Object 1",
        img: "img1",
        pair: "A1",
        flipped: false,
        inGame: true,
    },
    {
        id: 2,
        card: "Object 1",
        img: "img1",
        pair: "A1",
        flipped: false,
        inGame: true,
    },
    {
        id: 3,
        card: "Object 1",
        img: "img1",
        pair: "A2",
        flipped: false,
        inGame: true,
    },
    {
        id: 4,
        card: "Object 1",
        img: "img1",
        pair: "A2",
        flipped: false,
        inGame: true,
    },
    {
        id: 5,
        card: "Object 1",
        img: "img1",
        pair: "A3",
        flipped: false,
        inGame: true,
    },
    {
        id: 6,
        card: "Object 1",
        img: "img1",
        pair: "A3",
        flipped: false,
        inGame: true,
    },
    {
        id: 7,
        card: "Object 1",
        img: "img1",
        pair: "A4",
        flipped: false,
        inGame: true,
    },
    {
        id: 8,
        card: "Object 1",
        img: "img1",
        pair: "A4",
        flipped: false,
        inGame: true,
    },
    {
        id: 9,
        card: "Object 1",
        img: "img1",
        pair: "A5",
        flipped: false,
        inGame: true,
    },
    {
        id: 10,
        card: "Object 1",
        img: "img1",
        pair: "A5",
        flipped: false,
        inGame: true,
    },
    {
        id: 11,
        card: "Object 1",
        img: "img1",
        pair: "A6",
        flipped: false,
        inGame: true,
    },
    {
        id: 12,
        card: "Object 1",
        img: "img1",
        pair: "A6",
        flipped: false,
        inGame: true,
    },
    {
        id: 13,
        card: "Object 1",
        img: "img1",
        pair: "A7",
        flipped: false,
        inGame: true,
    },
    {
        id: 14,
        card: "Object 1",
        img: "img1",
        pair: "A7",
        flipped: false,
        inGame: true,
    },
     {
        id: 15,
        card: "Object 1",
        img: "img1",
        pair: "A8",
        flipped: false,
        inGame: true,
    },
     {
        id: 16,
        card: "Object 1",
        img: "img1",
        pair: "A8",
        flipped: false,
        inGame: true,
    },
     {
        id: 17,
        card: "Object 1",
        img: "img1",
        pair: "A9",
        flipped: false,
        inGame: true,
    },
     {
        id: 18,
        card: "Object 1",
        img: "img1",
        pair: "A9",
        flipped: false,
        inGame: true,
    },
]

export const shuffledCards = shuffle(cards)