<template>
  <div class="projects">
    <Container>
      <Block :mt="7">
        <h1 class="h4">Latest projects</h1>
      </Block>
      <Block :mt="5" :mb="7">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :backgroundColor="project.backgroundColor"
          :title="project.title"
          :slug="project.slug"
          :ingress="project.ingress"
          :url="project.featured"
        />
      </Block>
    </Container>
  </div>
</template>

<script>
import { projects } from "@/db.json";

import Block from "@/components/Block";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "home",
  data() {
    return {
      projects
    };
  },
  components: { Block, Container, ProjectCard },
  created() {
    document.body.classList.remove("inverted");
  }
};
</script>
