<template>
  <div class="home">
    <Container>
      <Block :mt="7">
        <h1 class="h1">I design and develop things on the internet.</h1>
      </Block>
      <Block :mt="5">
        <ul class="list">
          <li>
            <router-link to="/projects" class="a">Projects</router-link>
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
            <a href="https://github.com/leifriksheim" target="_blank" class="a">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/leif-riksheim-080a9b110/"
              target="_blank"
              class="a"
            >
              <Icon name="linkedin" />
            </a>
          </li>
        </ul>
      </Block>
    </Container>
  </div>
</template>

<script>
import anime from "animejs";
import Block from "@/components/Block";
import Container from "@/components/Container";
import Icon from "@/components/Icon";

export default {
  name: "home",
  components: { Container, Block, Icon },
  created() {
    document.body.classList.add("inverted");
  },
  mounted() {
    var textWrapper = document.querySelector(".h1");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /[^\s]+/g,
      "<span class='letter' style='display: inline-block'>$&</span>"
    );

    anime({
      targets: ".h1 .letter",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1000,
      delay: anime.stagger(60)
    });
  }
};
</script>
