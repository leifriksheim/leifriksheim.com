<template>
  <div class="projects">
    <Container>
      <Block :mt="7">
        <h1 class="h2">Below are some projects I've done</h1>
      </Block>
      <Block :mt="7" :mb="7">
        <div v-for="(project, index) in projects" :key="index">
          <Block full :mt="5" :mb="7" v-if="project.featuredImg">
            <img class="img" :src="project.featuredImg" />
            <Block full :mt="5" :mb="4">
              <span class="h3">{{ project.title }}</span>
              <span class="dash" />
              <span class="ingress">{{ project.ingress }}</span>
            </Block>
            <ul class="list list--horisontal">
              <li class="pill" :key="tag" v-for="tag in project.tags">
                {{ tag }}
              </li>
            </ul>
            <p class="markdown" v-html="html(project.content)"></p>
            <a v-if="project.link" class="a underline">
              {{ project.linkText }}
              <Icon name="arrow-up-right" />
            </a>
          </Block>
        </div>
      </Block>
    </Container>
  </div>
</template>

<script>
import { projects } from "@/db.json";
import marked from "marked";

import Block from "@/components/Block";
import Container from "@/components/Container";
import Icon from "@/components/Icon";

export default {
  name: "home",
  data() {
    return {
      projects
    };
  },
  components: { Block, Container, Icon },
  created() {
    document.body.classList.remove("inverted");
  },
  methods: {
    html(content) {
      return marked(content);
    }
  }
};
</script>
