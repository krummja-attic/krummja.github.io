<template>
  <div class="footer layout-grid">
    <div class="grid-wrapper">
      <span class="copyright">© 2021 Jonathan Crum</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  flex-shrink: 0;
  margin-top: 15px;
  padding: 15px;
}

.grid-wrapper {
  @apply col-start-2 col-end-12;
}

.copyright {
  text-align: center;
  color: #909090;
}
</style>
