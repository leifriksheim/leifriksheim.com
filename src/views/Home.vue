<template>
  <div class="home">
    <Container>
      <Block :mt="7">
        <h1 class="h1">Hey. I'm a web developer that design.</h1>
      </Block>
      <Block :mt="5">
        <ul class="list">
          <li>
            <router-link to="/projects" class="a">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/cv" class="a">Experience</router-link>
          </li>
          <li>
            <a class="a">Contact me</a>
          </li>
        </ul>
      </Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";

export default {
  name: "home",
  components: { Container, Block },
  created() {
    document.body.classList.remove("inverted");
  }
};
</script>
