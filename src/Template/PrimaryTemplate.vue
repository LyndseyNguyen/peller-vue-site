<script setup>


</script>

<template>
  <section class="primary-template">
    <header>
      <div class="logo">
        <router-link :to="{name:'home'}"><img alt src="../assets/peller-logocopy.png"></router-link>
      </div>

      <nav>
        <a href="#">
          <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#">
          <svg width="19px" height="19px" viewBox="-0.5 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path id="Path_3" data-name="Path 3"
                  d="M130.7,837h-6.454a2.283,2.283,0,0,1-2.273-2.292V825h11v9.708A2.284,2.284,0,0,1,130.7,837Zm1.269-10.99h-9.025v8.6a1.369,1.369,0,0,0,1.363,1.375h6.3a1.369,1.369,0,0,0,1.363-1.375Zm-4.528,3.948v.032a2.506,2.506,0,0,1-2.492-2.323V827h1v.667a1.482,1.482,0,0,0,1.489,1.375,1.511,1.511,0,0,0,1.52-1.375V827h.971v.667A2.477,2.477,0,0,1,127.442,829.958Z"
                  transform="translate(-121.974 -825)" fill="#444"/>
          </svg>
        </a>
        <a href="#">
          <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#">Menu</a>

      </nav>
    </header>
    <section class="main">
      <slot></slot>
    </section>

    <footer>
      <div class="main-footer">
        <nav>
<!--          <a href="#">Contact Us</a>-->
          <router-link :to="{name:'contact'}" >Contact Us</router-link>

        </nav>
      </div>
    </footer>
  </section>
</template>


<style scoped>
section.primary-template {

  header {

    font-weight: bold;
    background-color: #ddd;
    color: dimgrey;
    text-align: left;
    padding: 16px;
    display: flex;
    justify-content: space-between;

    .logo {
      img {
        width: 11rem;
      }
    }

    nav {
      display: flex;
      gap: 1rem;
      font-size: 18px;
      align-items: center;

      a {
        //border: 1px solid black;
        display: flex;
        text-decoration: none;
      }
    }
  }

  .main {
    text-align: center;
    width: 100%;
  }

  footer {
    .main-footer {
      font-size: 15px;
      font-weight: normal;
      padding: 7px;
      align-items: flex-end;
      background-color: #ddd;

      nav {
        display: flex;
        justify-content: center;
        /* Desktop */
        @media screen and (width > 1000px) {
          gap: 1rem;
          display: flex;
          flex-direction: row;
        }
      }
    }
  }
}


</style>