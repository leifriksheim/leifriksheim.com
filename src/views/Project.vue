<template>
  <div class="home">
    <Container>
      <Block :mt="7">
        <h1 class="h4">{{ title }}</h1>
      </Block>
      <Block :mt="5" :mb="7"></Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";

export default {
  name: "home",
  components: { Block, Container },
  data() {
    return {
      title: "Title"
    };
  },
  created() {
    document.body.classList.remove("inverted");
  }
};
</script>
