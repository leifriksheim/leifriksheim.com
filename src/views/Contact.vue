<template>
  <div class="cv">
    <Container>
      <Block :mt="7">
        <h1 class="h4">Contact information</h1>
      </Block>
      <Block :mt="6" :mb="7">
        <ul class="list">
          <li><Icon name="phone" />&nbsp;&nbsp;+48 25 46 61</li>
          <li><Icon name="mail" />&nbsp;&nbsp;riksheim.leif@gmail.com</li>
          <li><Icon name="message-circle" />&nbsp;&nbsp;+48 25 46 61</li>
        </ul>
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
  created() {
    document.body.classList.remove("inverted");
  }
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
