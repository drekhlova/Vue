<template>
  <section class="blog-details-page center">
    <div class="blog-details__wrap">
      <div class="blog-details">
        <div class="article" v-for="article in filterArticle" :key="article.id">
          <h2 class="article__title">{{ article.title }}</h2>
          <img class="article__img-top" :src="require('../../../assets/images/' + article.img)" :alt="article.img">
          <div class="article__info">
            <p class="article__info-data">26 December,2022</p>
            <p class="article__info-link">Interior / Home / Decore</p>
          </div>
          <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even
            slightly believable.</p>
          <br>
          <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary.</p>
          <img class="article__img-quotes" src="../../../assets/images/quotes.jpg" alt="img" />
          <h2 class="article__title">Design sprints are great</h2>
          <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered. </p>
          <ul class="article__list">
            <li class="article__list-text">
              <span>1</span> Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the
              majority have suffered.
            </li>
            <li class="article__list-text">
              <span>2</span> Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the
              majority have suffered.
            </li>
            <li class="article__list-text">
              <span>3</span> Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the
              majority have suffered.
            </li>
          </ul>
          <img class="article__img-bottom" src="../../../assets/images/article_1_1.jpg" alt="article 1_1">
          <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered.</p>
        </div>
      </div>
      <div class="tags">
        <h2 class="tags__title">Tags</h2>
        <div class="tags__buttons">
          <button v-for="(tag, index) in tagsList" @click="filterClick(tag)" class="tags__buttons-item"
            :key="index">{{ tag }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogDetailsPageArticles',

  data () {
    return {
      findElement: '',
      contentsArticles: [
        {
          id: 0,
          title: 'Let’s Get Solution for Building Construction Work',
          img: 'article_1.jpg',
          tag: 'Kitchen'
        },
        {
          id: 1,
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          img: 'image_2.jpg',
          tag: 'Bedroom'
        },
        {
          id: 2,
          title: 'Best For Any Office & Business Interior Solution',
          img: 'image_3.jpg',
          tag: 'Building'
        },
        {
          id: 3,
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          img: 'image_2.jpg',
          tag: 'Architecture'
        },
        {
          id: 4,
          title: 'Best For Any Office & Business Interior Solution',
          img: 'image_3.jpg',
          tag: 'Kitchen Planning'
        }
      ],
      tagsList: [
        'Kitchen',
        'Bedroom',
        'Building',
        'Architecture',
        'Kitchen Planning',
        'Bedroom'
      ]
    }
  },

  mounted () {

  },

  methods: {
    filterClick (item) {
      this.findElement = item
    }
  },
  computed: {
    filterArticle () {
      return this.findElement
        ? this.contentsArticles.filter((el) => el.tag.includes(this.findElement))
        : this.contentsArticles
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/vars";

.blog-details__wrap {
  margin-top: 200px;
  display: flex;
  gap: 52px;
}

.blog-details {
  width: 800px;
}

.article {
  margin-bottom: 96px;

  &__title {
    color: $blackTextColor;
    font-family: $familyTitle;
    font-size: 50px;
    margin-bottom: 20px;
  }

  &__img-top {
    margin-top: 20px;
    border-radius: 50px;
  }

  &__img-bottom {
    border-radius: 50px;
    margin-top: 44px;
    margin-bottom: 34px;
  }

  &__img-quotes {
    margin-top: 34px;
    margin-bottom: 26px;
    width: 798px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 24px;
    width: 732px;
    list-style: none;

    &-text {
      color: $grayTextColor;
      font-family: $familyText;
      font-size: 22px;
    }

    & span {
      font-size: 20px;
      font-family: $familyTitle;
      color: rgb(205, 162, 116);
    }
  }
    &__info {
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    margin-bottom: 48px;
    width: 798px;

    &-data {
      color: $grayTextColor;
      font-family: $familyText;
      font-size: 16px;
    }

    &-link {
      color: $grayTextColor;
      font-family: $familyText;
      font-size: 16px;
    }
  }

    &__text {
      color: $grayTextColor;
      font-family: $familyText;
      font-size: 22px;
    }

    &-item {
      color: $grayTextColor;
      font-family: $familyText;
      font-size: 22px;
    }
  }
  .tags {
  &__title {
    color: $blackTextColor;
    font-family: $familyTitle;
    font-size: 25px;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
  }

  &__buttons-item {
    color: $blackTextColor;
    font-family: $familyText;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    background: rgb(244, 240, 236);
    padding: 10px 30px;
  }

  &__buttons-item:hover {
    background: $blackTextColor;
    color: rgb(255, 255, 255);
    transition: 0.3s;
  }
}
</style>
