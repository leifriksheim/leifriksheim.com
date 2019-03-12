<template>
  <div class="projects">
    <Container>
      <Block :mt="7">
        <h1 class="h4">Things I've done</h1>
      </Block>
      <Block :mt="5" :mb="7">
        <ProjectCard
          background="#fff"
          slug="hedwig"
          title="Hedwig"
          ingress="A new design system for Norways postal service"
          :url="require('../assets/img/hedwig.png')"
        />
        <ProjectCard
          background="#fff"
          title="EmmaSofia"
          slug="emmasofia"
          ingress="Building a unifiying web platform for a non profit"
          :url="require('../assets/img/emmasofia.png')"
        />
        <ProjectCard
          background="#fff"
          title="Customel"
          slug="customel"
          ingress="A tiny Custom Element library"
          :url="require('../assets/img/customel.png')"
        />
        <ProjectCard
          background="#fff"
          title="Gro"
          slug="gro"
          ingress="Growing spices in a container in Oslo"
          :url="require('../assets/img/gro.jpg')"
        />
        <ProjectCard
          background="#fff"
          title="Oh Shit Git!"
          slug="ohshitgit"
          ingress="A cli tool to help you unfuck your git mistakes"
          :url="require('../assets/img/ohshitgit.png')"
        />
        <ProjectCard
          background="#fff"
          title="Kontrakt"
          slug="kontrakt"
          ingress="New websites for a lawyer firm"
          :url="require('../assets/img/kontrakt.png')"
        />
        <ProjectCard
          background="#fff"
          title="Nabobudet"
          slug="nabobudet"
          ingress="Making a candy delivery service in Oslo"
          :url="require('../assets/img/nabobudet.png')"
        />
        <ProjectCard
          background="#fff"
          title="MiniØya"
          slug="minioya"
          ingress="Festival app for a festival for kids"
          :url="require('../assets/img/minioya.jpg')"
        />
        <ProjectCard
          background="#fff"
          title="Ways of Percetion"
          slug="ways-of-perception"
          ingress="A non-dualistic project"
          :url="require('../assets/img/waysofperception.jpg')"
        />
        <ProjectCard
          background="#fff"
          title="TryggTripp.no"
          slug="trygg-tripp"
          ingress="A harm reducing web site about psychedelic drug use"
          :url="require('../assets/img/tryggtripp.jpg')"
        />
        <ProjectCard
          background="#fff"
          title="Mokkupp"
          slug="mokkupp"
          ingress="A simple CMS system for prototyping"
          :url="require('../assets/img/mokkupp.png')"
        />
        <ProjectCard
          background="#132034"
          title="Hofbauer"
          slug="hofbauer"
          ingress="Website for a guy"
          :url="require('../assets/img/hofbauer.svg')"
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
