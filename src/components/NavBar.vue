<template>
  <nav>
    <Container>
      <Block :mt="6">
        <div class="nav-wrapper">
          <router-link to="/" class="avatar-link">
            <img class="avatar" src="../assets/profile.jpg" />Leif Riksheim
          </router-link>
          <span class="dash" />
          <span>{{ title }}</span>
        </div>
      </Block>
    </Container>
  </nav>
</template>

<script>
import Block from "@/components/Block.vue";
import Container from "@/components/Container.vue";

export default {
  name: "navbar",
  components: { Container, Block },
  watch: {
    "$route.path": function () {
      setTimeout(() => {
        this.title = this.$route.meta.title;
      }, 700);
    },
  },
  data() {
    return {
      showMenu: false,
      title: "Home",
    };
  },
};
</script>

<style>
.avatar-link {
  text-decoration: none;
  color: inherit;
}

.avatar {
  object-fit: cover;
  object-position: center;
  width: var(--space-4);
  height: var(--space-4);
  margin-right: var(--space-2);
  border-radius: 100%;
}
</style>
