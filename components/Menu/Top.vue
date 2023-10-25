<script lang="ts" setup>
const showMenu = ref(true)

</script>
<template>
  <nav class="navbar bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-black/10 dark:border-white/10 w-full fixed top-0 z-50 py-3">
    <div class="container flex justify-between items-center flex-col lg:flex-row">
      <div class="flex justify-between w-full">
        <div class="logo">
          <a aria-current="page" href="/" class="router-link-active router-link-exact-active">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3_2)">
              <path d="M20.97 0H9.03C4.04287 0 0 4.04287 0 9.03V20.97C0 25.9571 4.04287 30 9.03 30H20.97C25.9571 30 30 25.9571 30 20.97V9.03C30 4.04287 25.9571 0 20.97 0Z" fill="black"/>
              <path d="M12.6949 21.7648L12.6948 21.7848L14.89 24.0095L14.9397 24.0498L14.99 24.0101L17.2147 21.8149L17.2148 21.7949L25.5094 13.62L22.3308 10.3987L17.2573 15.415L17.3202 5.96525L12.8003 5.93515L12.7374 15.3849L7.73112 10.3015L4.50988 13.4801L12.6949 21.7648Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_3_2">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <button @click="showMenu = !showMenu" class="toggle-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
          </svg>
        </button>
      </div>
      <div :class="showMenu ? 'navbar-nav block' : 'navbar-nav hidden lg:block'">
        <ul class="flex items-center gap-5">
          <li><a title="Blog" href="/blog" class="nav-link font-bold lowercase">Blog</a></li>
          <li><a title="Projetos" href="/portfolio" class="nav-link font-bold lowercase">Projetos</a></li>
          <li><a title="Contato" href="/contact" class="nav-link font-bold lowercase">Contato</a></li>
          <!-- <li class="leading-none">
            <button type="button" class="relative group">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon group-hover:rotate-180 transition-all duration-300 ease-in-out" width="20px" height="20px" viewBox="0 0 24 24" >
                  <path fill="currentColor" d="M12.741 20.917a9.389 9.389 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.177 1.177 0 0 1 1.21.281a1.273 1.273 0 0 1 .325 1.293a8.112 8.112 0 0 0-.353 2.68a8.266 8.266 0 0 0 4.366 6.857a7.628 7.628 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.148 9.148 0 0 1-7.393 3.738ZM10.261 4.05a.211.211 0 0 0-.065.011a8.137 8.137 0 1 0 9.131 12.526a.224.224 0 0 0 .013-.235a.232.232 0 0 0-.206-.136a8.619 8.619 0 0 1-4.188-1.116a9.274 9.274 0 0 1-4.883-7.7a9.123 9.123 0 0 1 .4-3.008a.286.286 0 0 0-.069-.285a.184.184 0 0 0-.133-.057Z"></path>
                </svg>
                <ul class="scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out absolute z-50 bottom-full sm:bottom-auto right-0 sm:top-6 sm:-right-10 w-36 cursor-pointer rounded-lg p-2 bg-white dark:bg-black/90 border dark:border-white/10 sm:shadow-lg backdrop-blur-md">
                  <li class="flex items-center w-full h-ful hover:bg-gray-100 hover:dark:bg-white/20 p-2 rounded-lg transition-all duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon mr-2" width="20px" height="20px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 18.09A6.09 6.09 0 1 1 18.09 12A6.1 6.1 0 0 1 12 18.09Zm0-11.18A5.09 5.09 0 1 0 17.09 12A5.1 5.1 0 0 0 12 6.91Zm-.5-4.342v1.6a.5.5 0 1 0 1 0v-1.6a.5.5 0 1 0-1 0Zm1 18.864v-1.6a.5.5 0 0 0-1 0v1.6a.5.5 0 1 0 1 0Zm8.932-9.932h-1.6a.5.5 0 0 0 0 1h1.6a.5.5 0 1 0 0-1Zm-18.864 1h1.6a.5.5 0 1 0 0-1h-1.6a.5.5 0 1 0 0 1Zm15.748-7.523l-.992.992l-.141.141a.514.514 0 0 0-.146.353a.508.508 0 0 0 .146.354a.5.5 0 0 0 .354.146a.515.515 0 0 0 .353-.146l.992-.992l.141-.141a.515.515 0 0 0 .147-.354a.508.508 0 0 0-.147-.353a.5.5 0 0 0-.353-.147a.522.522 0 0 0-.354.147ZM5.684 19.023l.992-.992l.141-.141a.514.514 0 0 0 .146-.353a.508.508 0 0 0-.146-.354a.5.5 0 0 0-.354-.146a.515.515 0 0 0-.353.146l-.992.992l-.141.141a.515.515 0 0 0-.147.354a.508.508 0 0 0 .147.353a.5.5 0 0 0 .353.147a.522.522 0 0 0 .354-.147Zm13.339-.707l-.992-.992l-.141-.141a.514.514 0 0 0-.353-.146a.508.508 0 0 0-.354.146a.5.5 0 0 0-.146.354a.515.515 0 0 0 .146.353l.992.992l.141.141a.515.515 0 0 0 .354.147a.508.508 0 0 0 .353-.147a.5.5 0 0 0 .147-.353a.522.522 0 0 0-.147-.354ZM4.977 5.684l.992.992l.141.141a.514.514 0 0 0 .353.146a.508.508 0 0 0 .354-.146a.5.5 0 0 0 .146-.354a.515.515 0 0 0-.146-.353l-.992-.992l-.141-.141a.515.515 0 0 0-.354-.147a.508.508 0 0 0-.353.147a.5.5 0 0 0-.147.353a.522.522 0 0 0 .147.354Z"></path>
                    </svg>
                    <span class="font-bold lowercase ">Light</span>
                  </li>
                  <li class="text-primary-500 flex items-center w-full h-full hover:bg-gray-100 hover:dark:bg-white/20 p-2 rounded-lg transition-all duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon mr-2" width="20px" height="20px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12.741 20.917a9.389 9.389 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.177 1.177 0 0 1 1.21.281a1.273 1.273 0 0 1 .325 1.293a8.112 8.112 0 0 0-.353 2.68a8.266 8.266 0 0 0 4.366 6.857a7.628 7.628 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.148 9.148 0 0 1-7.393 3.738ZM10.261 4.05a.211.211 0 0 0-.065.011a8.137 8.137 0 1 0 9.131 12.526a.224.224 0 0 0 .013-.235a.232.232 0 0 0-.206-.136a8.619 8.619 0 0 1-4.188-1.116a9.274 9.274 0 0 1-4.883-7.7a9.123 9.123 0 0 1 .4-3.008a.286.286 0 0 0-.069-.285a.184.184 0 0 0-.133-.057Z"></path>
                    </svg>
                    <span class="font-bold lowercase ">Dark</span>
                  </li>
                  <li class="flex items-center w-full h-full hover:bg-gray-100 hover:dark:bg-white/20 p-2 rounded-lg transition-all duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon mr-2" width="20px" height="20px" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M18.435 3.06H5.565a2.5 2.5 0 0 0-2.5 2.5v8.88a2.507 2.507 0 0 0 2.5 2.5h2.91l-.37 3H7a.5.5 0 0 0 0 1h10.01a.5.5 0 0 0 0-1H15.9l-.37-3h2.91a2.507 2.507 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.505-2.5ZM14.9 19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5 1.5 0 0 1-1.5 1.5H5.565a1.5 1.5 0 0 1-1.5-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h12.87a1.5 1.5 0 0 1 1.5 1.5Z"
                      ></path>
                    </svg>
                    <span class="font-bold lowercase ">System</span>
                  </li>
                </ul>
              </div>
            </button>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

