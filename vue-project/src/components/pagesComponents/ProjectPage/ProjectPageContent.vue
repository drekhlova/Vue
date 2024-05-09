<template>
  <section class="project center">
    <ProjectPageCategories @activCategories="activCategories" />
    <ProjectPageProjectsNew :projects="projects" />
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
import ProjectPageCategories from './ProjectPageCategories.vue'
import ProjectPageProjectsNew from './ProjectPageProjectsNew.vue'

export default {
  components: {
    ProjectPageCategories,
    ProjectPageProjectsNew
  },
  name: 'ProjectPageContent',

  data () {
    return {
      projects: [],
      contentsProjects: [
        {
          id: 0,
          title: 'Minimal Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project1.jpg'
        },
        {
          id: 1,
          title: 'Minimal Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project2.jpg'
        },
        {
          id: 2,
          title: 'Classic Minimal Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project3.jpg'
        },
        {
          id: 3,
          title: 'Modern Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project4.jpg'
        },
        {
          id: 4,
          title: 'Minimal Bedroom table',
          text: ' Decor / Artchitecture',
          img: 'project5.jpg'
        },
        {
          id: 5,
          title: 'System Table',
          text: ' Decor / Artchitecture',
          img: 'project6.jpg'
        },
        {
          id: 6,
          title: 'Modern Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project7.jpg'
        },
        {
          id: 7,
          title: 'Modern Bedroom',
          text: ' Decor / Artchitecture',
          img: 'project8.jpg'
        }
      ]
    }
  },

  created () {
    this.projects = this.contentsProjects
  },

  methods: {
    activCategories (data) {
      switch (data.id) {
        case 1:
          this.projects = this.otherProjects1
          break
        case 2:
          this.projects = this.contentsProjects
          break
        case 3:
          this.projects = this.otherProjects2
          break
        case 4:
          this.projects = this.otherProjects3
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/vars";

.project {
  &__count-page {
    margin-top: 50px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;

    &-wrap {
      display: flex;
      gap: 20px;
    }

    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px #cda274 solid;
      width: 52px;
      height: 52px;
      border-radius: 52px;

      &-text {
        color: #292f36;
        font-family: $familyText;
        font-size: 16px;
        font-style: normal;
        font-weight: $font-500;
        line-height: 150%;
        text-transform: capitalize;
      }

      &:hover {
        background: #f4f0ec;
        border: none;
        width: 54px;
        height: 54px;
      }
    }

    &-svg:hover {
      fill: #f4f0ec;

      & circle {
        stroke: none;
      }
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
</style>
