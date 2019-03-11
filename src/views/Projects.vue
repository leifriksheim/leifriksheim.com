<template>
  <div class="home">
    <Container>
      <Block :mt="7">
        <h1 class="h4">Things I've done</h1>
      </Block>
      <Block :mt="5" :mb="7">
        <ProjectCard
          background="#fff"
          title="Hedwig"
          ingress="A new design system for Norways postal service"
          :url="require('../assets/img/hedwig.png')"
        />
        <ProjectCard
          background="#f9f2ff"
          title="EmmaSofia"
          ingress="Building a unifiying web platform for a non profit"
          :url="require('../assets/img/emmasofia.png')"
        />
        <ProjectCard
          background="#fff"
          title="Customel"
          ingress="A tiny Custom Element library"
          :url="require('../assets/img/customel.png')"
        />
      </Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "home",
  components: { Block, Container, ProjectCard },
  created() {
    document.body.classList.add("inverted");
  }
};
</script>
