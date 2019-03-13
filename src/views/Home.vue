<template>
  <div class="home">
    <Container>
      <Block :mt="7">
        <h1 class="h1">I design and develop things on the internet.</h1>
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
            <router-link to="/contact" class="a">Contact me</router-link>
          </li>
        </ul>
      </Block>
      <Block :mt="5">
        <ul class="list list--horisontal">
          <li>
            <a class="a">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a class="a">
              <Icon name="linkedin" />
            </a>
          </li>
        </ul>
      </Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";
import Icon from "@/components/Icon";

export default {
  name: "home",
  components: { Container, Block, Icon },
  created() {
    document.body.classList.add("inverted");
  }
};
</script>
