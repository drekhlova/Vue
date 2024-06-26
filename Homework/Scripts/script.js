new Vue({
  el: ".blog__items",
  data: {
    articles: [
      {
        image: "blog_photo1.jpg",
        imgText: "Kitchan Design",
        itemTitle: "Let’s Get Solution For Building Construction Work",
        itemData: "26 December,2022",
        link: "blog_details.html",
      },
      {
        image: "blog_photo2.jpg",
        imgText: "Living Design",
        itemTitle: "Low Cost Latest Invented Interior Designing Ideas",
        itemData: "22 December,2022",
        link: "#",
      },
      {
        image: "blog_photo3.jpg",
        imgText: "Interior Design",
        itemTitle: "Best For Any Office & Business Interior Solution",
        itemData: "25 December,2022",
        link: "#",
      },
      {
        image: "blog_photo4.jpg",
        imgText: "Kitchan Design",
        itemTitle: "Let’s Get Solution For Building Construction Work",
        itemData: "26 December,2022",
        link: "#",
      },
      {
        image: "blog_photo5.jpg",
        imgText: "Living Design",
        itemTitle: "Low Cost Latest Invented Interior Designing Ideas",
        itemData: "22 December,2022",
        link: "#",
      },
      {
        image: "blog_photo6.jpg",
        imgText: "Interior Design",
        itemTitle: "Best For Any Office & Business Interior Solution",
        itemData: "25 December,2022",
        link: "#",
      },
    ],
  },
  methods: {
    redirectToLink(link) {
      window.location.assign(link);
    },
  },
});
