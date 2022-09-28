export default [
    {
      id: 1,
      title: "Multi-day Event",
      start: new Date(2022, 8, 27, 12, 30, 0), // o mês é um mês a menos -> setembro = 8
      end: new Date(2022, 8, 27, 14, 0, 0)
    },
    {
      id: 2,
      title: "Today",
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3))
    }
  ];
  