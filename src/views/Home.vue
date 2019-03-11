<template>
  <div class="home">
    <Container>
      <Block :mt="7">
        <h1 class="h1">Web developer that will make you websites shine.</h1>
      </Block>
      <Block :mt="5">
        <ul class="list">
          <li>
            <router-link to="/projects" class="a">What I've done</router-link>
          </li>
          <li>
            <a class="a">Where I've worked</a>
          </li>
          <li>
            <a class="a">How to contact me</a>
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
