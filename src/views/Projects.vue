<template>
  <div class="projects">
    <Container>
      <Block :mt="7">
        <h1 class="h2">Below are some projects I've done</h1>
      </Block>
    </Container>
    <Container>
      <Block full :mt="7" :mb="7">
        <div v-for="(project, index) in projects" :key="index">
          <Block full :mt="5" :mb="7" v-if="project.featuredImg">
            <img v-if="!project.gallery" :src="project.featuredImg" />
            <ImageGallery v-else :images="project.gallery" />
            <Block>
              <Grid>
                <Block>
                  <Block full style="font-size: 1.5rem" :mt="5" :mb="4">
                    <span>{{ project.title }}</span>
                    <span class="dash" />
                    <p style="color: var(--color-dark)">
                      {{ project.ingress }}
                    </p>
                  </Block>
                  <ul class="list list--horisontal">
                    <li class="pill" :key="tag" v-for="tag in project.tags">
                      {{ tag }}
                    </li>
                  </ul>
                </Block>
                <Block>
                  <p class="markdown" v-html="html(project.content)"></p>
                  <a v-if="project.link" class="a underline">
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
import { projects } from "@/db.json";
import marked from "marked";

import Block from "@/components/Block";
import Grid from "@/components/Grid";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import ImageGallery from "@/components/ImageGallery";

export default {
  name: "home",
  data() {
    return {
      projects
    };
  },
  components: { Block, Container, Icon, ImageGallery, Grid },
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
