<template>
  <footer class="bg-gray-100 py-8 border-t border-gray-100">
    <div class="container mx-auto px-3 ">
      <div class="flex justify-between flex-wrap space-y-3 md:space-y-0">
        <ul class="lg:w-1/4 w-full sm:w-1/2">
          <li class="text-black mb-3">Frameworks</li>
          <ul class="text-gray-500 space-y-1">
            <li>Next.js</li>
            <li>Create React App</li>
            <li>Gatsby</li>
            <li>Nuxt.js</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>More Frameworks</li>
          </ul>
        </ul>
        <ul class="lg:w-1/4 w-full sm:w-1/2">
          <li class="text-black mb-3">Resources</li>
          <ul class="text-gray-500 space-y-1">
            <li>Documentation</li>
            <li>Experts</li>
            <li>Guides</li>
            <li>Support</li>
            <li>API Reference</li>
            <li>OSS</li>
            <li>Command-Line</li>
            <li>Integrations</li>
          </ul>
        </ul>
        <ul class="lg:w-1/4 w-full sm:w-1/2">
          <li class="text-black mb-3">Company</li>
          <ul class="text-gray-500 space-y-1">
            <li>Home</li>
            <li>Blog</li>
            <li>Changelog</li>
            <li>About</li>
            <li>Careers</li>
            <li>Pricing</li>
            <li>Security</li>
            <li>Next.js Conf</li>
            <li>Partners</li>
            <li>Contact Us</li>
          </ul>
        </ul>
        <ul class="lg:w-1/4 w-full sm:w-1/2">
          <li class="text-black mb-3">Legal</li>
          <ul class="text-gray-500 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Trademark Policy</li>
            <li>Inactivity Policy</li>
            <li>DPA</li>
          </ul>
        </ul>
      </div>

      <div class="py-6 text-center">
        <img
          class="object-cover mx-auto mb-4 lg:ml-0 h-8"
          src="../assets/img/hashicorp.svg"
          alt=""
        />

        <div class="lg:flex justify-between items-center">
          <div class="mb-4 lg:mb-0 lg:order-2">
            <span class="border border-gray-200 px-2  py-1 rounded-sm"
              >Status:
              <span
                class="w-2 h-2 inline-block bg-blue-500 rounded-full mx-2"
              ></span>
              <span class="truncate text-blue-500">
                All systems normal</span
              ></span
            >
          </div>
          <div
            class="flex justify-center mb-6 lg:mb-0 items-center space-x-6  lg:order-3"
          >
            <div class="hidden md:block">
              <select
                class="px-6 py-1 border border-gray-200 rounded"
                name=""
                id=""
              >
                <option value="0">Light</option>
                <option value="0">Dark</option>
              </select>
            </div>
            <div class="flex space-x-4 lg:order-2">
              <div class="w-6 h-6 bg-gray-500"></div>
              <div class="w-6 h-6 bg-gray-500"></div>
            </div>
          </div>
          <div class="lg:order-1">
            <p class="text-gray-500 font-light text-sm ">
              Copyright © 2021 Vercel Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
