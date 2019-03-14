<template>
  <div class="project">
    <Container>
      <Block :mt="7">
        <h1 class="h2">{{ project.title }}</h1>
        <p class="ingress">{{ project.ingress }}</p>
      </Block>
      <Block :mt="5" :mb="6">
        <div class="markdown" v-html="projectHtml" />
      </Block>
    </Container>
    <Container>
      <Block :pt="5" :pb="7">
        <Block full :mb="5">
          <Block full :mb="6">
            <h3 class="h4">Other projects</h3>
          </Block>
          <ProjectCard
            v-for="project in otherProjects"
            :key="project.slug"
            :url="project.featured"
            :backgroundColor="project.backgroundColor"
            :slug="project.slug"
            :title="project.title"
            :ingress="project.ingress"
          />
        </Block>
      </Block>
    </Container>
  </div>
</template>

<script>
import marked from "marked";
import { projects } from "@/db.json";

import Block from "@/components/Block";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";

export default {
  name: "home",
  components: { Block, Container, ProjectCard },
  created() {
    document.body.classList.remove("inverted");
    this.project = projects.find(p => p.slug === this.$route.params.slug);
  },
  watch: {
    "$route.path": function() {
      this.project = projects.find(p => p.slug === this.$route.params.slug);
    }
  },
  data() {
    return {
      project: {
        title: "Title",
        ingress: "Ingress",
        content: ""
      }
    };
  },
  computed: {
    otherProjects() {
      return projects.filter(p => p.slug !== this.$route.params.slug);
    },
    projectHtml() {
      return marked(this.project.content);
    }
  }
};
</script>

<style>
a.icon {
  display: flex;

  align-items: center;
  width: 100%;
}

a.icon .icon-text {
  padding-left: var(--space-3);
}
</style>
