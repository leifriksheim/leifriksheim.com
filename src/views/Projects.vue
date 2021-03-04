<template>
  <div class="projects">
    <Container>
      <Block :mt="7">
        <h1 class="h1">Below are some projects I've done</h1>
      </Block>
    </Container>
    <Container>
      <Block full :mt="7" :mb="7">
        <div v-for="(project, index) in sortedProjects" :key="index">
          <Block full :mt="5" :mb="7" v-if="project.publish">
            <img
              class="lazy"
              v-if="!project.gallery"
              v-lazy="project.featuredImg"
            />
            <ImageGallery v-else :images="project.gallery" />
            <Block :mt="6">
              <Grid>
                <Block full :mb="4">
                  <Block full style="font-size: 1.5rem;">
                    <h2 class="h2" style="display: inline-block">
                      {{ project.title }}
                    </h2>
                    <span class="dash" />
                    <Block full :mt="3" style="color: var(--color-dark)">
                      {{ project.ingress }}
                    </Block>
                  </Block>
                  <Block v-if="project.tags" :mt="4" full>
                    <ul class="list list--horisontal">
                      <li class="pill" :key="tag" v-for="tag in project.tags">
                        {{ tag }}
                      </li>
                    </ul>
                  </Block>
                </Block>
                <Block>
                  <p class="markdown" v-html="html(project.content)"></p>
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="a underline"
                  >
                    {{ project.linkText }}
                    <Icon name="arrow-up-right" />
                  </a>
                </Block>
              </Grid>
            </Block>
          </Block>
        </div>
      </Block>
    </Container>
  </div>
</template>

<script>
import anime from "animejs";
import { projects } from "@/db.json";
import marked from "marked";

import Block from "@/components/Block";
import Grid from "@/components/Grid";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import ImageGallery from "@/components/ImageGallery";

export default {
  name: "projects",
  data() {
    return {
      projects
    };
  },
  components: { Block, Container, Icon, ImageGallery, Grid },
  created() {
    document.body.classList.remove("inverted");
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
  },
  computed: {
    sortedProjects() {
      return [...this.projects].sort((a, b) => {
        return new Date(a.created).getTime() < new Date(b.created).getTime()
          ? 1
          : -1;
      });
    }
  },
  methods: {
    html(content) {
      return marked(content);
    }
  }
};
</script>
