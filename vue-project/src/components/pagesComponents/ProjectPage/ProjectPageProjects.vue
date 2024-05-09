<!-- <template>
    <section class="projects center">
     <div class="categoreis">
        <div class="categoreis__buttons">
          <button v-for="(category, index) in categoreisList" @click="filterClick(category)" class="categoreis__buttons-item"
            :key="index">{{ category }}</button>
        </div>
     </div>
     <div class="projects__wrap">
       <div class="projects__wrap-grid">
          <div class="projects__grid" v-for="project in filterProject" :key="project.id">
            <img class="projects__img" :src="require('../../../assets/images/' + project.img)" :alt="project.img">
            <div class="projects__info">
              <div class="projects__wrap-text">
                <h2 class="projects__title">{{ project.title }}</h2>
                <p class="projects__text">{{ project.text }}</p>
              </div>
              <a href="#">
               <img src="../../../assets/images/row_left_blog.svg" alt="row_left_blog">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
          <div class="pagination__wrap">
             <a href="#" class="pagination__number">
                <p class="pagination__number-text">01</p>
             </a>
             <a href="#" class="pagination__number">
                <p class="pagination__number-text">02</p>
             </a>
             <a href="#" class="pagination__number">
                <p class="pagination__number-text">03</p>
             </a>
             <a href="#">
                <svg class="pagination__svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                   viewBox="0 0 53 52" fill="none">
                   <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                   <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                </svg>
             </a>
          </div>
       </div>
    </section>
 </template>

<script>
export default {
  name: 'ProjectPageProjects',

  data () {
    return {
      findElement: '',
      contentsProjects: [
        {
          id: 0,
          title: 'Minimal Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project1.jpg',
          tag: 'Bed Room'
        },
        {
          id: 1,
          title: 'Minimal Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project2.jpg',
          tag: 'Bed Room'
        },
        {
          id: 2,
          title: 'Classic Minimal Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project3.jpg',
          tag: 'Bed Room'
        },
        {
          id: 3,
          title: 'Modern Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project4.jpg',
          tag: 'Bed Room'
        },
        {
          id: 4,
          title: 'Minimal Bedroom table',
          text: ' Decor / Artchitecture',
          img: 'project5.jpg',
          tag: 'Bed Room'
        },
        {
          id: 5,
          title: 'System Table',
          text: ' Decor / Artchitecture',
          img: 'project6.jpg',
          tag: 'Bed Room'
        }, {
          id: 6,
          title: 'Modern Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project7.jpg',
          tag: 'Bed Room'
        },
        {
          id: 7,
          title: 'Modern Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project8.jpg',
          tag: 'Bed Room'
        }
      ],
      categoreisList: [
        'Bathroom',
        'Bed Room',
        'Kitchan',
        'Living Area'
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
    filterProject () {
      return this.findElement
        ? this.contentsProjects.filter((el) => el.tag.includes(this.findElement))
        : this.contentsProjects
    }
  }
}
</script>

 <style lang="scss" scoped>
@import "../../../scss/vars";

 .projects {
    width: 1200px;
 }
.categoreis{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: rgb(205, 162, 116);
    margin-top: 200px;
    &__buttons {
        border-radius: 18px;
        border: 1px solid rgb(205, 162, 116);
        background: white;
    }
      &__buttons-item {
        cursor: pointer;
        background: white;
        padding: 26px 66px;
        border: none;
        border-radius: 18px;
        font-family: $familyText;
        font-size: 18px;
        font-weight: 600;
        color: $blackTextColor;
        letter-spacing: 2%;
        &:hover {
          background: rgb(205, 162, 116);
          color: white;
        }
      }
}
 .pagination {
    margin-top: 60px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    &__wrap {
       display: flex;
       gap: 20px;
    }
    &__number {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: nowrap;
       border: 1px #cda274 solid;
       width: 52px;
       height: 52px;
       border-radius: 52px;
       &-text {
          color: $grayTextColor;
          font-family: $familyText;
          font-size: 16px;
          font-weight: $font-500;
       }
       &:hover {
          background: #f4f0ec;
          border: none;
          width: 54px;
          height: 54px;
       }
    }
    &__svg:hover {
       fill: #f4f0ec;
       & circle {
          stroke: none;
       }
    }
}
.projects{
  &__wrap {
    margin-top: 60px;
    &-grid {
      display: grid;
      grid-template-columns: repeat(2, 584px);
      gap: 36px;
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    & img {
      height: 70px;
      width: 70px;
  }
  }
  &__title {
    margin-bottom: 4px;
    color: $blackTextColor;
    font-family: $familyTitle;
    font-size: 25px;
  }
  &__text {
    color: $grayTextColor;
    font-family: $familyText;
    font-size: 22px;
  }
}

 </style> -->
