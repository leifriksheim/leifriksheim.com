<template>
  <div class="cv">
    <Container>
      <Block :mt="7">
        <Block full :mb="6">
          <h1 class="h1">
            Hi Waking Life! Here are some things I've done that might be
            relevant for the application.
          </h1>
        </Block>
      </Block>
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
                  <Block full style="font-size: 1.5rem">
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
import marked from "marked";
import ImageGallery from "@/components/ImageGallery.vue";
import { iaac } from "@/db.json";
import Block from "@/components/Block.vue";
import Grid from "@/components/Grid.vue";
import Container from "@/components/Container.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "home",
  components: { Block, Grid, Container, Icon, ImageGallery },
  data() {
    return {
      iaacProjects: iaac,
    };
  },
  created() {
    document.body.classList.remove("inverted");
  },
  methods: {
    html(content) {
      return marked(content);
    },
  },
  computed: {
    sortedProjects() {
      return [...this.iaacProjects].sort((a, b) => {
        return new Date(a.created).getTime() < new Date(b.created).getTime()
          ? 1
          : -1;
      });
    },
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
      delay: anime.stagger(60),
    });
  },
};
</script>

<style>
.cv-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  font-size: 0.8em;
}

.cv-list p {
  padding: 0;
  margin: 0;
}

.cv-list li {
  border-bottom: 1px solid var(--color-light);
  padding-bottom: var(--space-3);
  padding-top: var(--space-3);
  display: flex;
  justify-content: space-between;
}

.cv-list h3 {
  margin-bottom: var(--space-2);
}

.cv-list li div:nth-child(1) {
  max-width: 650px;
  text-align: left;
}

.cv-list li div:nth-child(2) {
  min-width: 150px;
  text-align: right;
}
</style>
