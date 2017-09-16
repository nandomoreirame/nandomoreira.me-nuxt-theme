<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="sass">
html
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

body
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size: 1rem

*, *:before, *:after
  box-sizing: inherit
  margin: 0

.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

  h1
    display: block
    font-weight: 300
    font-size: 100px
    color: #35495e
    letter-spacing: 1px
</style>
