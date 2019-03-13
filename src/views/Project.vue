<template>
  <div class="project">
    <Container>
      <Block :mt="7">
        <!--<Block full :mb="5">
          <router-link to="/projects" class="a icon">
            <Icon small name="arrow-left" />
            <span class="icon-text">Back to projects</span>
          </router-link>
        </Block>-->
        <h1 class="h2">{{ title }}</h1>
        <p class="ingress">{{ ingress }}</p>
      </Block>
      <Block :mt="5" :mb="6">
        <p class="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          consequuntur repellendus aspernatur id illo quis ad accusantium! Ipsa
          omnis soluta a, corrupti exercitationem rerum culpa, voluptatibus
          amet, eius quibusdam natus.
        </p>
      </Block>
      <Block :mt="6" :mb="6" full>
        <img class="box-shadow-large" src="../projects/gro/img/gro.jpg" />
      </Block>
      <Block :mt="5" :mb="6">
        <p class="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          consequuntur repellendus aspernatur id illo quis ad accusantium! Ipsa
          omnis soluta a, corrupti exercitationem rerum culpa, voluptatibus
          amet, eius quibusdam natus.
        </p>
        <p class="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          adipisci sunt sint sequi nobis possimus minus corrupti dolores. Aut
          totam molestiae deserunt quos. Excepturi veritatis non, explicabo amet
          autem magnam?
        </p>
      </Block>
      <Block :mt="6" :mb="6" full>
        <img class="box-shadow-large" src="../projects/gro/img/gro-2.jpg" />
      </Block>
    </Container>
    <Container>
      <Block :pt="5" :pb="7">
        <Block full :mb="5">
          <h3 class="h4">Other projects</h3>
        </Block>
        <ProjectCard
          background="#fff"
          title="Customel"
          slug="customel"
          ingress="A tiny Custom Element library"
          :url="require('../assets/img/customel.png')"
        />
        <ProjectCard
          background="#1a488d"
          title="Kontrakt"
          slug="kontrakt"
          ingress="New websites for a lawyer firm"
          :url="require('../assets/img/kontrakt-white.png')"
        />
        <ProjectCard
          background="#fff"
          slug="hedwig"
          title="Hedwig"
          ingress="A new design system for Norways postal service"
          :url="require('../assets/img/hedwig.png')"
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
          title="EmmaSofia"
          slug="emmasofia"
          ingress="Building a unifiying web platform for a non profit"
          :url="require('../assets/img/emmasofia.png')"
        />
        <ProjectCard
          background="#fff"
          title="Oh Shit Git!"
          slug="ohshitgit"
          ingress="A cli tool to help you unfuck your git mistakes"
          :url="require('../assets/img/ohshitgit.png')"
        />
      </Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";

export default {
  name: "home",
  components: { Block, Container, ProjectCard },
  data() {
    return {
      title: "Gro Hydroculture",
      ingress:
        "Building a new brand and website for a green initiative to grow spices in containers in Oslo"
    };
  },
  created() {
    document.body.classList.remove("inverted");
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
