<template>
  <nav>
    <Container>
      <Block :mt="6">
        <div class="nav-wrapper">
          <router-link to="/" class="avatar-link">
            <img class="avatar" src="../assets/profile.jpg" />
            Leif Riksheim
          </router-link>
          <span class="dash" />
          <a class="a" @click="showMenu = !showMenu">{{ title }}</a>
          <transition name="drop">
            <nav v-show="showMenu" class="menu">
              <a class="a" href="#">Projects</a>
              <a class="a" href="#">Cv</a>
              <a class="a" href="#">Contact</a>
            </nav>
          </transition>
        </div>
      </Block>
    </Container>
  </nav>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";

export default {
  name: "navbar",
  components: { Container, Block },
  beforeRouterUpdate(to) {
    console.log(to);
    //this.title = to.meta.title;
  },
  data() {
    return {
      showMenu: false,
      title: "Menu"
    };
  }
};
</script>

<style>
.nav-wrapper {
  position: relative;
}

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

.menu {
  position: absolute;
  top: var(--space-5);
  left: 0;
  width: 100%;
  text-align: left;
  z-index: 999;
}

.menu a {
  padding-right: var(--space-4);
  display: inline-block;
}

.drop-enter-active,
.drop-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.drop-enter,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
