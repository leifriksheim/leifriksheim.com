<template>
  <div class="project">
    <Container>
      <Block :mt="7">
        <Block full :mb="5">
          <router-link to="/projects" class="a icon">
            <Icon small name="arrow-left" />
            <span class="icon-text">Back to projects</span>
          </router-link>
        </Block>
        <h1 class="h2">{{ title }}</h1>
        <p class="ingress">{{ ingress }}</p>
      </Block>
      <Block :mt="5" :mb="7">
        <p class="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          consequuntur repellendus aspernatur id illo quis ad accusantium! Ipsa
          omnis soluta a, corrupti exercitationem rerum culpa, voluptatibus
          amet, eius quibusdam natus.
        </p>
        <p class="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          consequuntur repellendus aspernatur id illo quis ad accusantium! Ipsa
          omnis soluta a, corrupti exercitationem rerum culpa, voluptatibus
          amet, eius quibusdam natus.
        </p>
      </Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";
import Icon from "@/components/Icon";

export default {
  name: "home",
  components: { Block, Container, Icon },
  data() {
    return {
      title: "Hedwig",
      ingress: "Making a design system for Norway's postal system"
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
