Vue.component("article-components", {
  data() {
    return {
      findElement: "",
      articles: [
        {
          title: "Let’s Get Solution for Building Construction Work",
          img: "blog_details_photo.jpg",
          tag: "Kitchen",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas",
          img: "blog_photo5.jpg",
          tag: "Bedroom",
        },
        {
          title: "Best For Any Office & Business Interior Solution",
          img: "blog_photo1.jpg",
          tag: "Building",
        },
      ],
      tagsList: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
    };
  },
  template: `
  <div class="container">
    <div class="content">
      <div class="content__container">
        <div class="article" v-for="(article, index) in filterArticle" :key="index">
          <h2 class="article__title">{{ article.title }}</h2>
        </div>
        <img v-bind:src="'./img/' + articles.img" :alt="articles.img" class="article__img-top">
        <div class="article__info">
          <div class="article__info-data">
            <p class="article__info-text">26 December,2022</p>
          </div>
          <div class="article__info-position">
            <p class="article__info-text">Interior / Home / Decore</p>
          </div>
        </div>
        <div class="article__content">
          <p class="article__content-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injecthumour,
            or randomised words which don't look even slightly believable.
          </p>
        </div>
        <div class="article__content">
          <p class="article__content-text">
            Embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary.
          </p>
        </div>
        <img class="article__img-quotes" src="img/Quotes.jpg" alt="Quotes" />
        <h2 class="article__title">
          Design sprints are great
        </h2>
        <div class="article__content">
          <p class="article__content-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the
            majority have suffered.
          </p>
        </div>
        <ul class="article__list">
          <li class="article__content-text">
            <span>1</span> Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the
            majority have suffered.
          </li>
          <li class="article__content-text">
            <span>2</span> Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the
            majority have suffered.
          </li>
          <li class="article__content-text">
            <span>3</span> Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the
            majority have suffered.
          </li>
        </ul>
        <img
          class="article__img-bottom"
          src="img/blog_design_photo.jpg"
          alt="img"
        />
        <div class="article__content">
          <p class="article__content-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the
            majority have suffered.
          </p>
        </div>
        </div>
        <div class="content__tags">
          <h3 class="tags__title">Tags</h3>
          <div class="tags__info">
            <button v-for="tag in tagsList" @click="filterClick(tag)" class="tags__text">{{ tag }}</button>
          </div>
        </div>
    </div>
  </div>
  `,
  methods: {
    filterClick(item) {
      this.findElement = item;
    },
  },
  computed: {
    filterArticle() {
      return this.findElement
        ? this.articles.filter((el) => el.tag.includes(this.findElement))
        : this.articles;
    },
  },
});

new Vue({
  el: ".blog-details-page",
});

// filteredArticles() {
//   if (this.selectedTag === '') {
//     return this.articles;
//   } else {
//     return this.articles.filter(article => article.tag === this.selectedTag);
//   }
// }
// },
// methods: {
// selectTag(tag) {
//   this.selectedTag = tag;
// }
// }
//<img class="article__img-top" :src="'../img/' + article.img" :alt="article.img"></img>
